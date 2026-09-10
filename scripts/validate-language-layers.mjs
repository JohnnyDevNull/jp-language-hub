/**
 * Validates the three language layers that keep navigation and comparison
 * content separate:
 *
 * - metaLanguage: the explanation language, owned by Starlight locales.
 * - grammarLanguage: the language being learned on `/learn/<language>/`.
 * - comparisonLanguages: languages intentionally compared inside a page.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DOCS_DIR = 'src/content/docs';
const LEARNING_LANGUAGES = {
	german: 'de',
	english: 'en',
	swedish: 'sv',
};
const LANGUAGE_CODES = new Set(['de', 'en', 'sv']);
const LOCALIZED_ROUTE_LOCALES = new Set(['de', 'sv']);

function listDocFiles(dir) {
	return readdirSync(dir).flatMap((entry) => {
		const path = join(dir, entry);
		if (statSync(path).isDirectory()) return listDocFiles(path);
		return /\.mdx?$/.test(path) ? [path] : [];
	});
}

function toRoute(filePath) {
	const slug = relative(DOCS_DIR, filePath)
		.replace(/\.mdx?$/, '')
		.replace(/(^|\/)index$/, '');
	return slug ? `/${slug}/` : '/';
}

function getRouteInfo(route) {
	const segments = route.split('/').filter(Boolean);
	const locale = LOCALIZED_ROUTE_LOCALES.has(segments[0]) ? segments[0] : undefined;
	const canonicalSegments = locale ? segments.slice(1) : segments;

	return {
		locale,
		canonicalRoute: canonicalSegments.length ? `/${canonicalSegments.join('/')}/` : '/',
	};
}

function extractFrontmatter(source) {
	const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	return match ? match[1] : '';
}

function extractScalar(frontmatter, field) {
	return frontmatter.match(new RegExp(`^${field}:\\s*(\\S+)\\s*$`, 'm'))?.[1];
}

function extractList(frontmatter, field) {
	const lines = frontmatter.split(/\r?\n/);
	const start = lines.findIndex((line) => line.trim() === `${field}:`);
	if (start === -1) return [];

	const values = [];
	for (const line of lines.slice(start + 1)) {
		const item = line.match(/^\s+-\s+(\S+)\s*$/);
		if (!item) break;
		values.push(item[1]);
	}
	return values;
}

function extractMetadata(frontmatter) {
	return {
		metaLanguage: extractScalar(frontmatter, 'metaLanguage'),
		grammarLanguage: extractScalar(frontmatter, 'grammarLanguage'),
		comparisonLanguages: extractList(frontmatter, 'comparisonLanguages'),
		levels: extractList(frontmatter, 'levels'),
		tags: extractList(frontmatter, 'tags'),
		related: extractList(frontmatter, 'related'),
	};
}

function getLearningLanguageFromRoute(route) {
	return route.match(/^\/learn\/([^/]+)\//)?.[1];
}

function getLanguageComparisonBlocks(source) {
	return [...source.matchAll(/<LanguageComparison\b([\s\S]*?)>([\s\S]*?)<\/LanguageComparison>/g)].map(
		([, attrs, body]) => ({ attrs, body }),
	);
}

function getLanguagesProp(attrs) {
	const match = attrs.match(/languages=\{\[([^\]]+)\]\}/);
	if (!match) return [];

	return [...match[1].matchAll(/['"]([a-z]{2})['"]/g)].map(([, language]) => language);
}

function getSlotLanguages(body) {
	return [...body.matchAll(/slot=["']([a-z]{2})["']/g)].map(([, language]) => language);
}

function addProblem(problems, file, message) {
	problems.push({ file, message });
}

const problems = [];
const files = listDocFiles(DOCS_DIR).sort();
const canonicalRoutes = new Set(
	files.map(toRoute).filter((route) => getRouteInfo(route).locale === undefined),
);
const canonicalMetadataByRoute = new Map(
	files
		.map((file) => {
			const route = toRoute(file);
			if (getRouteInfo(route).locale) return undefined;
			const source = readFileSync(file, 'utf8');
			return [route, extractMetadata(extractFrontmatter(source))];
		})
		.filter(Boolean),
);

function sameValue(left, right) {
	return JSON.stringify(left) === JSON.stringify(right);
}

function addMirroringProblems(problems, file, metadata, canonicalMetadata) {
	const mirroredFields = ['grammarLanguage', 'comparisonLanguages', 'levels', 'tags', 'related'];

	for (const field of mirroredFields) {
		if (!sameValue(metadata[field], canonicalMetadata[field])) {
			addProblem(
				problems,
				file,
				`translated pages must mirror canonical ${field} metadata exactly.`,
			);
		}
	}
}

for (const file of files) {
	const source = readFileSync(file, 'utf8');
	const frontmatter = extractFrontmatter(source);
	const route = toRoute(file);
	const routeInfo = getRouteInfo(route);
	const metadata = extractMetadata(frontmatter);
	const { metaLanguage, grammarLanguage, comparisonLanguages } = metadata;
	const comparisonLanguageSet = new Set(comparisonLanguages);
	const learningLanguage = getLearningLanguageFromRoute(routeInfo.canonicalRoute);

	if (metaLanguage && !LANGUAGE_CODES.has(metaLanguage)) {
		addProblem(problems, file, `metaLanguage must be de, en, or sv; found ${metaLanguage}.`);
	}

	if (routeInfo.locale) {
		if (metaLanguage !== routeInfo.locale) {
			addProblem(
				problems,
				file,
				`translated /${routeInfo.locale}/ pages must set metaLanguage: ${routeInfo.locale}.`,
			);
		}

		if (!canonicalRoutes.has(routeInfo.canonicalRoute)) {
			addProblem(
				problems,
				file,
				`translated pages must mirror an existing default-locale route; missing ${routeInfo.canonicalRoute}.`,
			);
		} else {
			addMirroringProblems(
				problems,
				file,
				metadata,
				canonicalMetadataByRoute.get(routeInfo.canonicalRoute),
			);
		}
	}

	if (learningLanguage) {
		const expectedGrammarLanguage = LEARNING_LANGUAGES[learningLanguage];

		if (!expectedGrammarLanguage) {
			addProblem(problems, file, `unknown learning-language route segment: ${learningLanguage}.`);
		} else if (grammarLanguage !== expectedGrammarLanguage) {
			addProblem(
				problems,
				file,
				`/learn/${learningLanguage}/ pages must set grammarLanguage: ${expectedGrammarLanguage}.`,
			);
		}
	} else if (grammarLanguage === 'comparison' && comparisonLanguages.length < 2) {
		addProblem(problems, file, 'comparison pages must declare at least two comparisonLanguages.');
	}

	if (comparisonLanguages.length > 0) {
		if (comparisonLanguages.length < 2 || comparisonLanguages.length > 3) {
			addProblem(problems, file, 'comparisonLanguages must contain two or three languages.');
		}

		for (const language of comparisonLanguages) {
			if (!LANGUAGE_CODES.has(language)) {
				addProblem(problems, file, `comparisonLanguages contains unsupported code: ${language}.`);
			}
		}

		if (comparisonLanguageSet.size !== comparisonLanguages.length) {
			addProblem(problems, file, 'comparisonLanguages must not contain duplicates.');
		}

		if (grammarLanguage && grammarLanguage !== 'comparison' && !comparisonLanguageSet.has(grammarLanguage)) {
			addProblem(
				problems,
				file,
				`comparisonLanguages should include the learned grammarLanguage: ${grammarLanguage}.`,
			);
		}
	}

	for (const { attrs, body } of getLanguageComparisonBlocks(source)) {
		const languagesProp = getLanguagesProp(attrs);
		const slotLanguages = getSlotLanguages(body);
		const renderedLanguages = languagesProp.length > 0 ? languagesProp : ['de', 'en', 'sv'];

		if (renderedLanguages.length < 2 || renderedLanguages.length > 3) {
			addProblem(problems, file, 'LanguageComparison must render two or three languages.');
		}

		if (new Set(renderedLanguages).size !== renderedLanguages.length) {
			addProblem(problems, file, 'LanguageComparison languages must not contain duplicates.');
		}

		for (const language of renderedLanguages) {
			if (!LANGUAGE_CODES.has(language)) {
				addProblem(problems, file, `LanguageComparison uses unsupported language: ${language}.`);
			}

			if (!slotLanguages.includes(language)) {
				addProblem(problems, file, `LanguageComparison renders ${language} without a matching slot.`);
			}
		}

		for (const language of slotLanguages) {
			if (!renderedLanguages.includes(language)) {
				addProblem(problems, file, `LanguageComparison slot ${language} is not listed in languages.`);
			}

			if (comparisonLanguages.length > 0 && !comparisonLanguageSet.has(language)) {
				addProblem(
					problems,
					file,
					`LanguageComparison slot ${language} is missing from comparisonLanguages frontmatter.`,
				);
			}
		}
	}
}

if (problems.length > 0) {
	console.error(`Found ${problems.length} language-layer problem(s):\n`);
	for (const { file, message } of problems) {
		console.error(`  ${file}\n    ${message}\n`);
	}
	process.exit(1);
}

console.log(`Validated language layers across ${files.length} docs pages.`);
