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
		'subjunktion',
		'huvudsats',
		'bisats',
		'sätt',
		'plats',
		'tid',
	],
	german: [
		'vorfeld',
		'linke satzklammer',
		'mittelfeld',
		'rechte satzklammer',
		'nachfeld',
		'bezugswort',
		'hauptsatz',
		'nebensatz',
		'konjunktion',
	],
	english: [
		'subject',
		'auxiliary',
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
		subordinator: 'subjunktion',
		subjunktion: 'subjunktion',
		link: 'subjunktion',
		'länkord': 'subjunktion',
		einleitung: 'subjunktion',
		inledning: 'subjunktion',
		'verknüpfung': 'subjunktion',
		'main clause': 'huvudsats',
		huvudsats: 'huvudsats',
		hauptsatz: 'huvudsats',
		rest: 'adverbial',
		'finite verb (direct)': null,
		'finites verb (direkt)': null,
		'finit verb (direkt)': null,
		'verb (indirect)': null,
		'verb (indirekt)': null,
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
		'finite verb': null,
		verb: null,
		'first verb': null,
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

/** Extracts every `columns={[ ... ]}` array in source order. */
function extractColumnArrays(source) {
	const arrays = [];
	const marker = 'columns={[';
	let index = source.indexOf(marker);
	while (index !== -1) {
		const end = source.indexOf(']}', index);
		if (end === -1) break;
		const body = source.slice(index + marker.length, end);
		arrays.push([...body.matchAll(/'([^']*)'|"([^"]*)"/g)].map((match) => match[1] ?? match[2]));
		index = source.indexOf(marker, end);
	}
	return arrays;
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
	extractColumnArrays(readFileSync(file, 'utf8')).forEach((columns, position) => {
		schemas.push({ ...info, file, position, columns });
	});
}

const problems = [];

for (const schema of schemas) {
	const vocabulary = VOCABULARIES[schema.learningLanguage];
	if (!vocabulary) continue;
	for (const label of schema.columns) {
		if (vocabulary.includes(normalize(label))) continue;
		problems.push({
			defect: 'unknown-field-name',
			file: schema.file,
			position: schema.position,
			message: `"${label}" is not a field name of the ${schema.learningLanguage} model.`,
		});
	}
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
	if (SPLIT_LABELS.has(key)) return 'finit verb';
	const override = PAGE_TARGETS[`${learningLanguage}/${page}`];
	if (override && key in override) return override[key];
	const map = TARGETS[learningLanguage] ?? {};
	if (key in map) return map[key];
	return (VOCABULARIES[learningLanguage] ?? []).includes(key) ? label : null;
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
