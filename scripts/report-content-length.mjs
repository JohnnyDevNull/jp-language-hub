/**
 * Reports the rendered word count of every docs page against the length budget.
 *
 * The budget in docs/rules/content-didactics.md applies to what a reader
 * actually reads, so counting the source file would punish pages for using the
 * teaching components. This reads the built HTML instead and measures only the
 * rendered article body.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const BUILD_DIR = 'dist';
const DOCS_DIR = 'src/content/docs';
const WORD_BUDGET = 1000;
const LOCALE_PREFIXES = ['de', 'sv'];
const CONTENT_PATTERN = /<div class="sl-markdown-content">([\s\S]*?)<\/div>\s*(?:<footer|<\/div>)/;

function listBuiltPages(dir) {
	return readdirSync(dir).flatMap((entry) => {
		const path = join(dir, entry);
		if (statSync(path).isDirectory()) return listBuiltPages(path);
		return entry === 'index.html' ? [path] : [];
	});
}

function toBuiltRoute(filePath) {
	const route = relative(BUILD_DIR, filePath).replace(/index\.html$/, '');
	return `/${route}`;
}

function listDocFiles(dir) {
	return readdirSync(dir).flatMap((entry) => {
		const path = join(dir, entry);
		if (statSync(path).isDirectory()) return listDocFiles(path);
		return /\.mdx?$/.test(path) ? [path] : [];
	});
}

function toDocRoute(filePath) {
	const slug = relative(DOCS_DIR, filePath)
		.replace(/\.mdx?$/, '')
		.replace(/(^|\/)index$/, '');
	return slug ? `/${slug}/` : '/';
}

function isLocalizedRoute(route) {
	return LOCALE_PREFIXES.some((prefix) => route.startsWith(`/${prefix}/`));
}

function countRenderedWords(html) {
	const body = html.match(CONTENT_PATTERN)?.[1];
	if (body === undefined) return undefined;

	const text = body
		.replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/&[a-z]+;|&#\d+;/gi, ' ');
	return text.split(/\s+/).filter(Boolean).length;
}

let missingContent = 0;
const pages = [];
const authoredRoutes = new Set(listDocFiles(DOCS_DIR).map(toDocRoute));

for (const path of listBuiltPages(BUILD_DIR)) {
	const route = toBuiltRoute(path);
	if (isLocalizedRoute(route) && !authoredRoutes.has(route)) continue;

	const words = countRenderedWords(readFileSync(path, 'utf8'));
	if (words === undefined) {
		missingContent += 1;
		continue;
	}
	pages.push({ route, words });
}

pages.sort((a, b) => b.words - a.words);

for (const { route, words } of pages) {
	const marker = words > WORD_BUDGET ? 'OVER' : '    ';
	console.log(`${marker} ${String(words).padStart(5)}  ${route}`);
}

const over = pages.filter((page) => page.words > WORD_BUDGET);
console.log(
	`\n${pages.length} pages measured, ${over.length} over the ${WORD_BUDGET}-word budget.`,
);
if (over.length > 0) {
	console.log(
		'Each page marked OVER needs a row in the exceptions table in docs/rules/content-didactics.md.',
	);
}
if (missingContent > 0) {
	console.log(`${missingContent} built page(s) carried no article body and were skipped.`);
}
