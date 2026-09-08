/**
 * Validates that every internal docs link resolves to an existing page.
 *
 * The `related` frontmatter field is only shape-checked by the content schema,
 * so a stale route would otherwise build successfully and silently 404.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DOCS_DIR = 'src/content/docs';
const RESOLUTION_ORIGIN = 'https://docs.invalid';

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

function extractFrontmatter(source) {
	const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	return match ? match[1] : '';
}

function extractRelatedRoutes(frontmatter) {
	const lines = frontmatter.split(/\r?\n/);
	const start = lines.findIndex((line) => line.trim() === 'related:');
	if (start === -1) return [];

	const routes = [];
	for (const line of lines.slice(start + 1)) {
		const item = line.match(/^\s+-\s+(\S+)\s*$/);
		if (!item) break;
		routes.push(item[1]);
	}
	return routes;
}

/** Hero action links live in frontmatter and are not covered by `related`. */
function extractFrontmatterLinks(frontmatter) {
	return [...frontmatter.matchAll(/^\s+link:\s*(\S+)\s*$/gm)].map((match) => match[1]);
}

function extractBodyLinks(body) {
	const markdownLinks = [...body.matchAll(/\]\(([^)\s]+)\)/g)];
	const hrefProps = [...body.matchAll(/href:\s*'([^']+)'/g)];
	return [...markdownLinks, ...hrefProps].map((match) => match[1]);
}

/** Mirrors how a browser resolves the link against the rendered page URL. */
function resolveTarget(link, pageRoute) {
	const [path] = link.split('#');
	if (!path) return null;
	const { pathname } = new URL(path, `${RESOLUTION_ORIGIN}${pageRoute}`);
	return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

/** Excludes external schemes, protocol-relative URLs and pure fragments. */
function isInternal(link) {
	return !/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(link);
}

const files = listDocFiles(DOCS_DIR).sort();
const knownRoutes = new Set(files.map(toRoute));
const problems = [];

for (const file of files) {
	const source = readFileSync(file, 'utf8');
	const frontmatter = extractFrontmatter(source);
	const body = source.slice(frontmatter.length);
	const pageRoute = toRoute(file);

	const candidates = [
		...extractRelatedRoutes(frontmatter).map((link) => ({ link, field: 'related' })),
		...extractFrontmatterLinks(frontmatter)
			.filter(isInternal)
			.map((link) => ({ link, field: 'hero link' })),
		...extractBodyLinks(body)
			.filter(isInternal)
			.map((link) => ({ link, field: 'link' })),
	];

	for (const { link, field } of candidates) {
		const target = resolveTarget(link, pageRoute);
		if (target && !knownRoutes.has(target)) {
			problems.push({ file, field, link, target });
		}
	}
}

if (problems.length > 0) {
	console.error(`Found ${problems.length} unresolved docs link(s):\n`);
	for (const { file, field, link, target } of problems) {
		console.error(`  ${file}\n    ${field}: ${link}\n    resolves to: ${target}\n`);
	}
	process.exit(1);
}

console.log(`Validated internal links across ${files.length} docs pages.`);
