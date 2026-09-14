/**
 * Validates SentenceSchema column labels against the terminology rule in
 * docs/rules/content-didactics.md:
 *
 * - The labels carry the learning language's own grammar terminology.
 * - They are identical in every meta locale of the same page, because the meta
 *   language switches the explanation, not the grammar being explained.
 *
 * Cell content is out of scope; splitting a merged field correctly is a
 * judgement a script cannot make.
 *
 * Pass --ledger to write docs/roadmap-phase-6-schema-terminology-ledger.md
 * instead of failing, which turns the findings into the Phase 6 worklist.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const DOCS_DIR = 'src/content/docs';
const LEDGER_PATH = 'docs/roadmap-phase-6-schema-terminology-ledger.md';
const LOCALIZED_ROUTE_LOCALES = new Set(['de', 'sv']);

// The T1 target vocabularies proposed in
// docs/roadmap-phase-6-align-schema-terminology.md, pending sign-off. Swedish:
// satsschema (Svenska Akademiens grammatik). German: topologisches Feldermodell
// (Duden). English has no field model, so its clause elements are listed.
const VOCABULARIES = {
	swedish: [
		'fundament',
		'finit verb',
		'subjekt',
		'satsadverbial',
		'infinit verb',
		'objekt / predikativ',
		'adverbial',
		'bisatsinledare',
		'huvudsats',
		'bisats',
		'sätt',
		'plats',
		'tid',
	],
	german: [
		'Vorfeld',
		'linke Satzklammer',
		'Mittelfeld',
		'rechte Satzklammer',
		'Nachfeld',
		'Bezugswort',
		'Hauptsatz',
		'Nebensatz',
		'Konjunktion',
	],
	english: [
		'subject',
		'auxiliary',
		'verb',
		'main verb',
		'object / complement',
		'adverbial',
		'manner',
		'place',
		'time',
		'frequency',
		'agent',
		'antecedent',
		'relative pronoun',
		'subordinator',
		'main clause',
		'question word',
		'not',
		'reporting verb',
		'past participle',
	],
};

// Label-to-target mapping from the T1 vocabulary tables, used only to render the
// ledger. `null` marks a label whose target depends on the page, which the
// ledger reports as a decision rather than guessing.
const TARGETS = {
	swedish: {
		fundament: 'fundament',
		'first field': 'fundament',
		'första fält': 'fundament',
		'första fältet': 'fundament',
		vorfeld: 'fundament',
		opening: 'fundament',
		'question phrase': 'fundament',
		'question word': 'fundament',
		'frågefras': 'fundament',
		'frågeord': 'fundament',
		condition: 'fundament',
		villkor: 'fundament',
		bedingung: 'fundament',
		'finite verb': 'finit verb',
		'finites verb': 'finit verb',
		'finit verb': 'finit verb',
		subject: 'subjekt',
		subjekt: 'subjekt',
		'sentence adverb': 'satsadverbial',
		satzadverbial: 'satsadverbial',
		satsadverbial: 'satsadverbial',
		'non-finite verb': 'infinit verb',
		'nicht-finites verb': 'infinit verb',
		'icke-finit verb': 'infinit verb',
		'verb group': 'infinit verb',
		verbgrupp: 'infinit verb',
		verbgruppe: 'infinit verb',
		subordinator: 'bisatsinledare',
		subjunktion: 'bisatsinledare',
		link: 'bisatsinledare',
		'länkord': 'bisatsinledare',
		einleitung: 'bisatsinledare',
		inledning: 'bisatsinledare',
		'verknüpfung': 'bisatsinledare',
		'main clause': 'huvudsats',
		huvudsats: 'huvudsats',
		hauptsatz: 'huvudsats',
		rest: 'adverbial',
	},
	german: {
		'first field': 'Vorfeld',
		'left field': 'Vorfeld',
		'clause start': 'Vorfeld',
		'question field': 'Vorfeld',
		'finite verb': 'linke Satzklammer',
		'finite modal': 'linke Satzklammer',
		'left bracket': 'linke Satzklammer',
		'relative pronoun': 'linke Satzklammer',
		middle: 'Mittelfeld',
		'middle field': 'Mittelfeld',
		'adverbial material': 'Mittelfeld',
		'subject if not first': 'Mittelfeld',
		'right bracket': 'rechte Satzklammer',
		'final verb': 'rechte Satzklammer',
		'final finite verb': 'rechte Satzklammer',
		'zu + infinitive': 'rechte Satzklammer',
		noun: 'Bezugswort',
		'clause 1': 'Hauptsatz',
		'clause 2': 'Hauptsatz',
		'main clause': 'Hauptsatz',
		subject: 'Mittelfeld',
		rest: 'Mittelfeld',
		connector: 'linke Satzklammer',
	},
	english: {
		opening: 'adverbial',
		be: 'auxiliary',
		noun: 'antecedent',
		'relative word': 'relative pronoun',
		connector: 'subordinator',
		rest: 'adverbial',
		'finite verb': 'verb',
		verb: 'verb',
		'first verb': 'auxiliary',
	},
};

function listDocFiles(dir) {
	return readdirSync(dir).flatMap((entry) => {
		const path = join(dir, entry);
		if (statSync(path).isDirectory()) return listDocFiles(path);
		return /\.mdx$/.test(path) ? [path] : [];
	});
}

function getPageInfo(filePath) {
	const segments = relative(DOCS_DIR, filePath).split('/');
	const locale = LOCALIZED_ROUTE_LOCALES.has(segments[0]) ? segments[0] : 'en';
	const canonical = locale === 'en' ? segments : segments.slice(1);
	if (canonical[0] !== 'learn') return undefined;
	return { locale, learningLanguage: canonical[1], key: canonical.join('/') };
}

function quotedStrings(body) {
	return [...body.matchAll(/'([^']*)'|"([^"]*)"/g)].map((match) => match[1] ?? match[2]);
}

/** Extracts each SentenceSchema's columns and its rows' cell counts, in source order. */
function extractSchemas(source) {
	const schemas = [];
	let index = source.indexOf('<SentenceSchema');
	while (index !== -1) {
		// The tag is written both multi-line and on a single line, so end at its
		// own `/>` rather than at a line-leading one.
		const end = source.indexOf('/>', index);
		if (end === -1) break;
		const block = source.slice(index, end);
		const start = block.indexOf('columns={[');
		if (start !== -1) {
			const columnsEnd = block.indexOf(']}', start);
			schemas.push({
				columns: quotedStrings(block.slice(start + 'columns={['.length, columnsEnd)),
				rowWidths: [...block.matchAll(/cells:\s*\[([^\]]*)\]/g)].map((match) => quotedStrings(match[1]).length),
			});
		}
		index = source.indexOf('<SentenceSchema', end);
	}
	return schemas;
}

/** Drops the position prefix so `1 Fundament` and `Fundament` compare equal. */
function normalize(label) {
	return label
		.replace(/^\d+\s+/, '')
		.trim()
		.toLowerCase();
}

const files = listDocFiles(DOCS_DIR);
const schemas = [];

for (const file of files) {
	const info = getPageInfo(file);
	if (!info) continue;
	extractSchemas(readFileSync(file, 'utf8')).forEach(({ columns, rowWidths }, position) => {
		schemas.push({ ...info, file, position, columns, rowWidths });
	});
}

const problems = [];

for (const schema of schemas) {
	const vocabulary = VOCABULARIES[schema.learningLanguage];
	if (!vocabulary) continue;
	for (const label of schema.columns) {
		if (vocabulary.some((term) => normalize(term) === normalize(label))) continue;
		problems.push({
			defect: 'unknown-field-name',
			file: schema.file,
			position: schema.position,
			message: `"${label}" is not a field name of the ${schema.learningLanguage} model.`,
		});
	}
}

// A row that has fewer or more cells than the table has columns renders
// silently misaligned, which is exactly what re-cutting a merged field risks.
for (const schema of schemas) {
	schema.rowWidths.forEach((width, row) => {
		if (width === schema.columns.length) return;
		problems.push({
			defect: 'row-width-mismatch',
			file: schema.file,
			position: schema.position,
			message: `Row ${row + 1} has ${width} cells but the table has ${schema.columns.length} columns.`,
		});
	});
}

const byCanonical = new Map();
for (const schema of schemas) {
	const id = `${schema.key}#${schema.position}`;
	if (!byCanonical.has(id)) byCanonical.set(id, []);
	byCanonical.get(id).push(schema);
}

for (const group of byCanonical.values()) {
	if (group.length < 2) continue;
	const reference = group.find((schema) => schema.locale === 'en') ?? group[0];
	for (const schema of group) {
		if (schema === reference) continue;
		if (JSON.stringify(schema.columns) === JSON.stringify(reference.columns)) continue;
		problems.push({
			defect: 'locale-divergent-labels',
			file: schema.file,
			position: schema.position,
			message: `Labels differ from ${reference.file}: [${schema.columns.join(', ')}] vs [${reference.columns.join(', ')}].`,
		});
	}
}

// A coordinating conjunction stands before the Vorfeld, in no field at all, so
// this one page resolves `Connector` differently from the subordinating pages.
const PAGE_TARGETS = {
	'english/grammar/mood-politeness-reports/reported-speech': { verb: 'main verb' },
	'german/grammar/sentence-structure/coordinating-conjunctions': { connector: 'Konjunktion' },
};

// These labels exist only because one table merges a main-clause and a
// subordinate-clause schema. T1 resolved them by splitting the table in two.
const SPLIT_LABELS = new Set([
	'finite verb (direct)',
	'finites verb (direkt)',
	'finit verb (direkt)',
	'verb (indirect)',
	'verb (indirekt)',
]);

// `Rest` merges fields, so its rename always needs a look at the cells.
const CHECK_LABELS = new Set(['rest']);

function targetFor(learningLanguage, label, page) {
	const key = normalize(label);
	// A position number is a deliberate teaching aid, so a rename that keeps the
	// field must keep the number too, or the ledger reports phantom work.
	const prefix = label.match(/^\d+\s+/)?.[0] ?? '';
	const keepPrefix = (target) => (target && normalize(target) === key ? prefix + target : target);
	if (SPLIT_LABELS.has(key)) return 'finit verb';
	const override = PAGE_TARGETS[`${learningLanguage}/${page}`];
	if (override && key in override) return keepPrefix(override[key]);
	const map = TARGETS[learningLanguage] ?? {};
	if (key in map) return keepPrefix(map[key]);
	// An already-correct label still renders in the vocabulary's own spelling.
	return keepPrefix((VOCABULARIES[learningLanguage] ?? []).find((term) => normalize(term) === key) ?? null);
}

if (process.argv.includes('--ledger')) {
	const canonical = schemas.filter((schema) => schema.locale === 'en');
	const mirrors = schemas.length - canonical.length;
	const sections = [];

	for (const tree of ['swedish', 'english', 'german']) {
		const rows = canonical
			.filter((schema) => schema.learningLanguage === tree)
			.map((schema) => {
				const page = schema.file.replace(`${DOCS_DIR}/learn/${tree}/`, '').replace('.mdx', '');
				const targets = schema.columns.map((label) => targetFor(tree, label, page));
				const open = targets.some((target) => target === null);
				const split = schema.columns.some((label) => SPLIT_LABELS.has(normalize(label)));
				const check = schema.columns.some((label) => CHECK_LABELS.has(normalize(label)));
				const target = targets.map((value, index) => value ?? `**${schema.columns[index]}?**`).join(' · ');
				const action = open ? 'decide' : split ? 'split table' : check ? 'check cells' : 'mechanical';
				return `| \`${page}\` | ${schema.position + 1} | ${schema.columns.join(' · ')} | ${target} | ${action} |`;
			});
		sections.push(
			`### Learn ${tree[0].toUpperCase()}${tree.slice(1)}\n\n| Page | # | Today | Target | Action |\n| --- | --- | --- | --- | --- |\n${rows.join('\n')}`,
		);
	}

	writeFileSync(
		LEDGER_PATH,
		`# Phase 6: Schema Terminology Ledger

Generated by \`npm run validate:schema-terminology -- --ledger\`. Do not edit it
by hand; regenerate it instead. The vocabularies are owned by
[Phase 6: Align Sentence-Schema Terminology](./roadmap-phase-6-align-schema-terminology.md)
and the rule by [Content Didactics](./rules/content-didactics.md).

One row per canonical schema: ${canonical.length} rows for ${schemas.length}
schema instances. The ${mirrors} German- and Swedish-meta mirrors are not listed
because they carry no decision — each copies its canonical \`columns\` array
verbatim.

Columns inside a row are separated by \`·\`. Three actions occur:

- **mechanical** — rename the labels, nothing else.
- **check cells** — rename, then read the cells. These rows contain \`Rest\`,
  which defaults to \`adverbial\`; it becomes a second column only where an
  object genuinely hides in the cells. See *Column Economy*.
- **split table** — the table merges a main-clause and a subordinate-clause
  schema and becomes two tables, each with its own field sequence. The target
  column shows the fields both halves share.
- **decide** — a label marked \`?\` whose target depends on what the page
  teaches.

${sections.join('\n\n')}
`,
	);
	console.log(`Wrote ${LEDGER_PATH}: ${canonical.length} canonical schemas, ${mirrors} mirrors to copy.`);
	process.exit(0);
}

if (problems.length > 0) {
	console.error(`Found ${problems.length} schema-terminology problem(s):\n`);
	for (const { file, position, defect, message } of problems) {
		console.error(`  ${file} (schema ${position + 1}) [${defect}]\n    ${message}\n`);
	}
	process.exit(1);
}

console.log(`Validated schema terminology across ${schemas.length} SentenceSchema instances.`);
