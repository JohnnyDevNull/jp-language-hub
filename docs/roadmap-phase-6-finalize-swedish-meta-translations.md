# Phase 6: Finalize Learn Swedish Meta-Language Translations

## Status and Dependencies

**Status:** Planned. Translation work is blocked on the initial inventory and
classification gate.

**Dependencies:** Phase 5 and its Whole-Tree Quality Check are complete. This
is the first language bucket in
[Phase 6](./roadmap-phase-6-complete-meta-language-packages.md); Learn English
and Learn German translation wait for this package to pass.

Execution state, the route-level translation inventory, decisions, evidence,
and resume instructions belong in the
[Learn Swedish implementation report](./roadmap-phase-6-finalize-swedish-meta-translations-implementation-report.md).

The Phase 5 hand-off recorded 90 canonical Learn Swedish files and eight
authored mirrors: four German-meta and four Swedish-meta. All eight were
accepted as didactically equivalent at Phase 5 completion. Phase 6 verifies
that state against the current sources before relying on it.

## Goal

Create complete authored German- and Swedish-meta-language packages for the
entire Learn Swedish tree without changing its learning-language routes,
navigation, topic scope, or canonical English explanations.

## Owned Surface

- canonical-page translation pairs under `src/content/docs/de/learn/swedish/`
  and `src/content/docs/sv/learn/swedish/`
- translated Learn Swedish overviews, grammar, vocabulary, sentence patterns,
  common mistakes, cheat sheets, pronunciation, important rules, and learning
  path
- translated visible labels, examples around Swedish target text,
  QuickChecks, relative body links, and related-topic labels inside those pages
- the Learn Swedish translation inventory and completion evidence

Locale homepages and the canonical Learn Swedish tree are outside this plan's
translation-file ownership.

## Inventory Gate

Reconcile every current canonical Learn Swedish file against both target meta
languages. The Phase 5 baseline implies 180 translation targets:

- 90 German-meta pairs;
- 90 Swedish-meta pairs;
- 8 existing authored files; and
- 172 expected fresh translations.

These numbers remain provisional until the implementation report records one
row per canonical-page/meta-language pair and proves there are no missing,
duplicate, or orphan rows.

Each row receives exactly one disposition:

1. **Verified existing translation** — authored, current, structurally aligned,
   and didactically equivalent.
2. **Revise or retranslate** — authored, but incomplete, stale, structurally
   divergent, linguistically weak, or no longer didactically equivalent.
3. **Fresh translation** — no authored mirror exists; a fallback route is not
   an authored translation.

The eight existing files are the provisional `verified existing` set:

- `learning-path`
- `grammar/sentence-structure/basic-word-order`
- `sentence-patterns/index`
- `sentence-patterns/introducing-yourself`

Each route exists in both German and Swedish meta language. Reclassify a pair
if the new source comparison finds a real discrepancy; do not preserve the
baseline label merely to keep the bucket empty.

## Translation Bucket 1: Verify Existing Translations

### S1. Structural and metadata parity

- compare each of the eight authored files with its current canonical source;
- verify mirrored path, components, examples, warnings, QuickChecks, and
  related-topic intent;
- verify translated title and description plus exact structural metadata
  parity except for `metaLanguage`; and
- record pair-level evidence in the implementation report.

### S2. Linguistic and didactic acceptance

- review German and Swedish prose independently for natural target-language
  explanation;
- confirm the same lookup answer and learner action as the canonical page;
- confirm Swedish examples remain Swedish rather than being translated as
  explanation prose; and
- accept unchanged files only when review passes.

## Translation Bucket 2: Revise or Retranslate

This bucket may be empty after inventory. If a pair is assigned here, process
it before creating missing translations so obsolete pilot patterns do not
become templates.

### S3. Restore source parity

- restore missing sections, components, examples, warnings, checks, labels,
  metadata, and links from the canonical teaching structure;
- remove translated additions that create a second topic scope; and
- choose focused revision or clean retranslation according to the extent of
  divergence.

### S4. Target-language repair and acceptance

- make German and Swedish explanations idiomatic and concise;
- verify correct terminology, example framing, language markup, and learner
  instructions; and
- rerun the pair-level and shared gates before marking the row complete.

## Translation Bucket 3: Create Missing Translations

Translate German and Swedish mirrors as a paired canonical-page package, while
reviewing the two target meta languages separately.

### S5. Entry routes and navigation pages

- Learn Swedish overview, Grammar overview, Important, and other top-level
  decision pages;
- preserve index-page component exceptions and concise navigation labels.

### S6. Sentence structure, questions, and negation

- translate position rules with unchanged `SentenceSchema` meaning;
- preserve the boundaries among basic order, V2, inversion, BIFF, questions,
  negation, and `inte` placement.

### S7. Nouns, pronouns, adjectives, and function words

- translate the noun/article, possession, pronoun/role, adjective/adverb,
  preposition, connector, and function-word shelves;
- preserve form tables and Swedish examples while translating their guidance.

### S8. Verbs, time forms, voice, mood, and reports

- translate overview decision paths before or with their first detail pages;
- preserve the canonical formation-versus-choice and grammar-versus-production
  boundaries.

### S9. Practical reference routes

- translate Vocabulary, Sentence Patterns, Pronunciation Basics, and Cheat
  Sheets in small surface-level batches;
- keep practical routes linked to canonical grammar rather than duplicating it.

### S10. Common Mistakes and package completion

- translate transfer diagnoses and their repair links;
- reconcile all 180 inventory targets and remove any accidental fallback gap;
- review the complete German-meta and Swedish-meta trees as learner journeys;
- record final evidence and hand off to the Learn English plan.

## Non-Goals

- Do not modify the frozen Phase 5 IA or add Swedish-learning topics.
- Do not translate Learn English, Learn German, shared pages, or locale
  homepages in this plan.
- Do not treat fallback output as translated content.
- Do not force literal translations where natural German or Swedish wording
  teaches the same answer more clearly.
- Do not copy a German explanation into the Swedish package or vice versa.

## Quality Gates

Every batch follows the shared
[Phase 6 quality gates](./roadmap-phase-6-complete-meta-language-packages.md#quality-gates).
The Swedish completion review must additionally prove 90 current canonical
files map to 90 German-meta and 90 Swedish-meta authored files, with every
inventory row complete and every target-language review passed.

## Definition of Done

- all current Learn Swedish canonical pages have authored German and Swedish
  mirrors;
- every pair is classified, reviewed, and complete in the implementation
  report;
- no known revision remains hidden in the verified or fresh buckets;
- both packages preserve canonical metadata, structure, topic boundaries,
  examples, links, and didactic intent;
- no untranslated canonical English explanatory fallback remains in either
  completed package; and
- shared automated gates plus independent German- and Swedish-language review
  pass.
