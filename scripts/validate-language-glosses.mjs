/**
 * Validates two defect classes that plain content review keeps missing:
 *
 * 1. Circular self-glosses: a table cell of marked target-language text next
 *    to a cell holding the identical text, so the gloss teaches nothing.
 * 2. Untranslated visible prop text and table headers: a `de/` or `sv/`
 *    mirror page whose component prop value or table header cell is
 *    byte-identical to its canonical counterpart, or shares an untranslated
 *    content word with it (a half-translated leftover), which is how a
 *    translation leftover slips past a diff-blind read.
 *
 * SentenceSchema `columns` are deliberately excluded: they must be identical
 * across meta locales, which validate-schema-terminology.mjs enforces.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DOCS_DIR = 'src/content/docs';
const LOCALIZED_ROUTE_LOCALES = new Set(['de', 'sv']);

function listDocFiles(dir) {
	return readdirSync(dir).flatMap((entry) => {
		const path = join(dir, entry);
		if (statSync(path).isDirectory()) return listDocFiles(path);
		return /\.mdx?$/.test(path) ? [path] : [];
	});
}

function extractFrontmatter(source) {
	const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	return match ? match[1] : '';
}

function extractScalar(frontmatter, field) {
	return frontmatter.match(new RegExp(`^${field}:\\s*(\\S+)\\s*$`, 'm'))?.[1];
}

function lineOf(source, index) {
	return source.slice(0, index).split('\n').length;
}

// ---------------------------------------------------------------------------
// Check 1: circular self-gloss in a table row
// ---------------------------------------------------------------------------

/** `<Sv>x</Sv>` is the Swedish-only shorthand for `<span lang="sv">x</span>`. */
const FULL_SV_CELL = /^<Sv>([\s\S]*)<\/Sv>$/;
const FULL_SPAN_CELL = /^<span lang="(?:de|en|sv)">([\s\S]*)<\/span>$/;

function markedCellText(cell) {
	const trimmed = cell.trim();
	return (trimmed.match(FULL_SV_CELL) ?? trimmed.match(FULL_SPAN_CELL))?.[1].trim();
}

function strippedCellText(cell) {
	return cell
		.replace(/<\/?Sv>/g, '')
		.replace(/<span lang="(?:de|en|sv)">/g, '')
		.replace(/<\/span>/g, '')
		.trim();
}

/**
 * Known-good cognates where an identical gloss is correct, not a leftover.
 * Keyed by `file::text`; each entry must be verified by hand, not padded to
 * silence noise — new candidates should be reported, not added here blindly.
 */
const SELF_GLOSS_ALLOWLIST = new Set([
	'src/content/docs/learn/swedish/grammar/prepositions-function-words/prepositions.mdx::under',
	'src/content/docs/learn/swedish/vocabulary/food-and-drinks.mdx::lunch',
]);

function isTableRow(line) {
	return /^\s*\|.*\|\s*$/.test(line);
}

function isSeparatorRow(cells) {
	return cells.every((cell) => /^:?-+:?$/.test(cell.trim()));
}

function splitTableRow(line) {
	return line.trim().slice(1, -1).split('|');
}

function findSelfGlosses(file, source, metaLanguage, grammarLanguage) {
	const findings = [];
	const severity = metaLanguage === grammarLanguage ? 'error' : 'warning';
	const lines = source.split('\n');

	lines.forEach((line, lineIndex) => {
		if (!isTableRow(line)) return;
		const cells = splitTableRow(line);
		if (isSeparatorRow(cells)) return;

		cells.forEach((cell, cellIndex) => {
			const markedText = markedCellText(cell);
			if (!markedText) return;

			for (const neighborIndex of [cellIndex - 1, cellIndex + 1]) {
				const neighbor = cells[neighborIndex];
				if (neighbor === undefined) continue;
				// Two marked neighbors are two target-language forms (e.g. a
				// subject/object paradigm cell) being compared to each other, not a
				// gloss — Swedish "hen"/"hen" or German "sie"/"sie" are genuinely
				// identical forms, not an untranslated gloss column.
				if (markedCellText(neighbor) !== undefined) continue;
				if (strippedCellText(neighbor) !== markedText) continue;

				const key = `${file}::${markedText}`;
				if (SELF_GLOSS_ALLOWLIST.has(key)) continue;

				findings.push({
					file,
					line: lineIndex + 1,
					severity,
					message: `circular self-gloss "${markedText}" (metaLanguage: ${metaLanguage}, grammarLanguage: ${grammarLanguage})`,
				});
				return; // one finding per cell is enough, even if both neighbors match.
			}
		});
	});

	return findings;
}

// ---------------------------------------------------------------------------
// Check 2: untranslated visible prop text in a mirror page
// ---------------------------------------------------------------------------

const MIRRORED_PROP_NAMES = ['title', 'caption', 'label', 'alt'];
const PROP_VALUE_RE = new RegExp(`\\b(${MIRRORED_PROP_NAMES.join('|')})=("([^"]*)"|'([^']*)')`, 'g');
const MARKED_TEXT_RE = /<Sv>([\s\S]*?)<\/Sv>|<span lang="(?:de|en|sv)">([\s\S]*?)<\/span>/g;

/**
 * A byte-identical mirror value only catches a verbatim copy. The real
 * historical defect (`title="Therefore, en huvudsats"` mirroring
 * `title="Therefore, a main clause"`) was a half-translation: the mirror had
 * been partly rewritten, so it shared vocabulary with the canonical value
 * without being identical to it. `sharedUntranslatedTokens` flags that too,
 * by comparing alphabetic tokens of 4+ characters case-insensitively — a
 * byte-identical value is just the case where every token is shared.
 */
function tokenize(value) {
	return [...value.matchAll(/\p{L}+/gu)].map((match) => match[0].toLowerCase()).filter((token) => token.length >= 4);
}

/** Tokens the canonical page itself marks as target-language text, e.g. `<Sv>bisats</Sv>` — a shared token is then a deliberate foreign term, not an untranslated leftover. */
function markedTokensOnPage(source) {
	const tokens = new Set();
	for (const match of source.matchAll(MARKED_TEXT_RE)) {
		for (const token of tokenize(match[1] ?? match[2] ?? '')) tokens.add(token);
	}
	return tokens;
}

/**
 * Shared grammatical/linguistic terminology and identical cognate nouns,
 * verified by hand against every current occurrence (see the reviews that
 * added this rule, first for props then for table headers): "Verb", "Person",
 * "Plural", "Singular", "Negation", "Position", "Inversion", "Neutral",
 * "Preposition", "Adverb", "Plan", "Routine", "Plus", "Phrase", "Situation",
 * "Status", "Test", "Route" are shared Latin-root grammar/general vocabulary
 * identical across German, English and Swedish; "Rest", "Fundament",
 * "Satsadverbial", "support" (as in "do-support"), "form" (as in
 * "en-form"/"ett-form"), "Accent" (as in Swedish "Accent 1"/"Accent 2") are
 * field/technical labels the English canonical itself keeps in Swedish or
 * German; "Name" is an identical German/English noun; "bisats" is the Swedish
 * subordinate-clause term used inline in the English canonical text.
 */
const COGNATE_TOKEN_ALLOWLIST = new Set([
	'accent',
	'adverb',
	'bisats',
	'form',
	'fundament',
	'inversion',
	'name',
	'negation',
	'neutral',
	'person',
	'phrase',
	'plan',
	'plural',
	'plus',
	'position',
	'preposition',
	'register',
	'rest',
	'route',
	'routine',
	'satsadverbial',
	'singular',
	'situation',
	'status',
	'support',
	'test',
	'verb',
]);

function sharedUntranslatedTokens(canonicalValue, mirrorValue, canonicalMarkedTokens) {
	const canonicalTokens = new Set(tokenize(canonicalValue));
	return tokenize(mirrorValue).filter(
		(token) =>
			canonicalTokens.has(token) && !canonicalMarkedTokens.has(token) && !COGNATE_TOKEN_ALLOWLIST.has(token),
	);
}

function untranslatedMessage(kind, mirrorValue, canonicalValue, sharedTokens) {
	if (mirrorValue === canonicalValue) {
		return `${kind}="${mirrorValue}" is byte-identical to the canonical page; looks untranslated`;
	}
	return `${kind}="${mirrorValue}" shares content token(s) [${sharedTokens.join(', ')}] with canonical "${canonicalValue}"; looks partly untranslated`;
}

function extractProps(source) {
	const byProp = Object.fromEntries(MIRRORED_PROP_NAMES.map((name) => [name, []]));
	for (const match of source.matchAll(PROP_VALUE_RE)) {
		byProp[match[1]].push({ value: match[3] ?? match[4], index: match.index });
	}
	return byProp;
}


/** A header row is a table row immediately followed by a `| --- |` separator row. */
function extractTableHeaderRows(source) {
	const lines = source.split('\n');
	const headers = [];

	for (let lineIndex = 0; lineIndex < lines.length - 1; lineIndex++) {
		if (!isTableRow(lines[lineIndex])) continue;
		const cells = splitTableRow(lines[lineIndex]);
		if (isSeparatorRow(cells)) continue;
		if (!isTableRow(lines[lineIndex + 1])) continue;
		if (!isSeparatorRow(splitTableRow(lines[lineIndex + 1]))) continue;

		headers.push({ cells, lineIndex });
	}

	return headers;
}

/**
 * Body cells carry example sentences and target-language forms that are
 * identical by design, so only header rows are compared. If a mirror and its
 * canonical page don't have the same number of tables, positions can't be
 * trusted to line up — skip the file rather than guess, and let the caller
 * report how many files that affects.
 */
function findUntranslatedTableHeaders(mirrorFile, mirrorSource, canonicalSource, canonicalMarkedTokens) {
	const canonicalHeaders = extractTableHeaderRows(canonicalSource);
	const mirrorHeaders = extractTableHeaderRows(mirrorSource);

	if (canonicalHeaders.length !== mirrorHeaders.length) {
		return { findings: [], tableCountMismatch: true };
	}

	const findings = [];
	for (let i = 0; i < mirrorHeaders.length; i++) {
		const canonicalCells = canonicalHeaders[i].cells;
		const mirrorCells = mirrorHeaders[i].cells;
		for (let j = 0; j < Math.min(canonicalCells.length, mirrorCells.length); j++) {
			const canonicalValue = canonicalCells[j].trim();
			const mirrorValue = mirrorCells[j].trim();
			const sharedTokens = sharedUntranslatedTokens(canonicalValue, mirrorValue, canonicalMarkedTokens);
			if (sharedTokens.length === 0) continue;

			findings.push({
				file: mirrorFile,
				line: mirrorHeaders[i].lineIndex + 1,
				severity: 'error',
				message: untranslatedMessage('table header cell', mirrorValue, canonicalValue, sharedTokens),
			});
		}
	}

	return { findings, tableCountMismatch: false };
}

function getCanonicalFile(mirrorFile) {
	const segments = relative(DOCS_DIR, mirrorFile).split('/');
	if (!LOCALIZED_ROUTE_LOCALES.has(segments[0])) return undefined;
	return join(DOCS_DIR, segments.slice(1).join('/'));
}

function findUntranslatedProps(mirrorFile, mirrorSource, canonicalSource, canonicalMarkedTokens) {
	const findings = [];
	const canonicalProps = extractProps(canonicalSource);
	const mirrorProps = extractProps(mirrorSource);

	for (const prop of MIRRORED_PROP_NAMES) {
		const canonicalValues = canonicalProps[prop];
		const mirrorValues = mirrorProps[prop];
		for (let i = 0; i < Math.min(canonicalValues.length, mirrorValues.length); i++) {
			const canonicalValue = canonicalValues[i].value;
			const mirrorValue = mirrorValues[i].value;
			const sharedTokens = sharedUntranslatedTokens(canonicalValue, mirrorValue, canonicalMarkedTokens);
			if (sharedTokens.length === 0) continue;

			findings.push({
				file: mirrorFile,
				line: lineOf(mirrorSource, mirrorValues[i].index),
				severity: 'error',
				message: untranslatedMessage(prop, mirrorValue, canonicalValue, sharedTokens),
			});
		}
	}

	return findings;
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

const files = listDocFiles(DOCS_DIR).sort();
const findings = [];
const tableCountMismatchFiles = [];

for (const file of files) {
	const source = readFileSync(file, 'utf8');
	const frontmatter = extractFrontmatter(source);
	const metaLanguage = extractScalar(frontmatter, 'metaLanguage');
	const grammarLanguage = extractScalar(frontmatter, 'grammarLanguage');

	if (metaLanguage && grammarLanguage && grammarLanguage !== 'comparison') {
		findings.push(...findSelfGlosses(file, source, metaLanguage, grammarLanguage));
	}

	const canonicalFile = getCanonicalFile(file);
	if (canonicalFile) {
		let canonicalSource;
		try {
			canonicalSource = readFileSync(canonicalFile, 'utf8');
		} catch {
			continue; // a missing canonical page is reported by validate-language-layers.mjs.
		}
		const canonicalMarkedTokens = markedTokensOnPage(canonicalSource);
		findings.push(...findUntranslatedProps(file, source, canonicalSource, canonicalMarkedTokens));

		const headerResult = findUntranslatedTableHeaders(file, source, canonicalSource, canonicalMarkedTokens);
		if (headerResult.tableCountMismatch) {
			tableCountMismatchFiles.push(file);
		} else {
			findings.push(...headerResult.findings);
		}
	}
}

const errors = findings.filter((finding) => finding.severity === 'error');
const warnings = findings.filter((finding) => finding.severity === 'warning');

for (const { file, line, severity, message } of findings) {
	const label = severity === 'error' ? 'error' : 'warning';
	console[severity === 'error' ? 'error' : 'warn'](`  [${label}] ${file}:${line}\n    ${message}\n`);
}

if (tableCountMismatchFiles.length > 0) {
	console.warn(
		`Skipped the table-header check on ${tableCountMismatchFiles.length} mirror page(s) with a different table count than their canonical page (positions can't be trusted to line up):`,
	);
	for (const file of tableCountMismatchFiles) console.warn(`  ${file}`);
}

console.log(
	`Validated language glosses across ${files.length} docs pages: ${errors.length} error(s), ${warnings.length} warning(s).`,
);

if (errors.length > 0) {
	process.exit(1);
}
