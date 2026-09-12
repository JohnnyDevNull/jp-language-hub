# Phase 6: Complete Meta-Language Packages

## Status and Dependencies

**Status:** Planned. Implementation has not started.

**Dependencies:** Phase 5 is complete through its Whole-Tree Quality Check. Its
frozen information architecture, canonical root-locale pages, and passing
Q1-Q6 evidence are the baseline for this phase.

Execution must proceed in this order:

1. [Finalize Learn Swedish meta-language translations](./roadmap-phase-6-finalize-swedish-meta-translations.md)
2. [Finalize Learn English meta-language translations](./roadmap-phase-6-finalize-english-meta-translations.md)
3. [Finalize Learn German meta-language translations](./roadmap-phase-6-finalize-german-meta-translations.md)

Each language plan has a durable implementation report. The report is the
resume point once execution begins; this coordination plan remains the source
of truth for scope, order, common rules, gates, and completion.

## Goal

Replace the intended German- and Swedish-meta-language fallback experiences
with complete authored translation packages while preserving the Phase 5
learning-language trees exactly.

Phase 6 has three large buckets, one per learning language:

| Order | Learning-language bucket | Authored target package | Planning baseline |
| --- | --- | --- | --- |
| 1 | Learn Swedish | German and Swedish meta language | 90 canonical pages; 4 German and 4 Swedish authored mirrors |
| 2 | Learn English | German and Swedish meta language | 66 canonical pages; no authored learning-tree mirrors |
| 3 | Learn German | German and Swedish meta language | 82 canonical pages; no authored learning-tree mirrors |

The counts are the Phase 5 hand-off, not permanent scope constants. Each
language inventory must reconcile the current repository before translation.
Fallback routes do not count as authored translations.

Across all three learning languages, the Phase 5 baseline therefore implies
476 German- and Swedish-meta-language translation targets. Eight Learn Swedish
targets are already authored, leaving an expected 468 fresh translations
before the inventories reconcile current repository state.

## Sources of Truth

1. This plan owns package scope, execution order, common translation rules,
   shared gates, and the Phase 7 hand-off.
2. The three language plans own inventory classification, translation batches,
   language-specific acceptance criteria, and completion review.
3. Their implementation reports own route-level inventory rows, batch status,
   review evidence, decisions, blockers, and resume instructions.
4. The [Phase 5 coordination plan](./roadmap-phase-5-align-grammar-ia.md),
   [Navigation Blueprint](./roadmap-phase-5-navigation-blueprint.md), and
   [Topic Inventory](./roadmap-phase-5-topic-inventory.md) remain authoritative
   for canonical scope, routes, navigation, and topic ownership.
5. [`docs/rules/content-metadata.md`](./rules/content-metadata.md) and
   [`docs/rules/content-didactics.md`](./rules/content-didactics.md) remain
   authoritative for metadata, page structure, and didactic equivalence.

Phase 6 must not reopen or silently redesign Phase 5. A canonical defect found
during translation is recorded separately and returned to the canonical owner
before its translations continue.

## Package Rules

- The English root-locale page remains canonical.
- A translated file mirrors the canonical path under `src/content/docs/de/` or
  `src/content/docs/sv/`.
- Titles, descriptions, headings, prose, visible labels, and QuickCheck prompts
  are translated for didactic equivalence, not word-for-word similarity.
- Of the language/content metadata, only `metaLanguage` changes.
  `grammarLanguage`, `comparisonLanguages`, `levels`, `tags`, and `related`
  remain aligned with the canonical page.
- `related` remains an absolute canonical route without a locale prefix.
  Page-body links and component `href` values remain relative.
- Examples keep their target-language wording and correct language markup.
- Translations preserve the canonical answer, examples, warnings, self-check,
  related-topic intent, component structure, and topic boundary.
- A translation must not introduce a new learning topic, route, sidebar axis,
  or comparison-language page.
- Translate in small reviewable batches. A batch is not complete until both
  automated gates and language-specific review pass.

## Execution Order

### Bucket 1: Learn Swedish

Complete both German- and Swedish-meta-language packages first. Begin with a
route-level inventory that classifies every canonical-page/meta-language pair
as verified existing, needs revision or retranslation, or missing and requiring
a fresh translation.

Execution evidence belongs in the
[Learn Swedish implementation report](./roadmap-phase-6-finalize-swedish-meta-translations-implementation-report.md).

### Bucket 2: Learn English

After Learn Swedish passes its package gate, complete the German- and
Swedish-meta-language Learn English packages. Inventory first, then translate
both meta languages by coherent grammar and diagnostic groups.

Execution evidence belongs in the
[Learn English implementation report](./roadmap-phase-6-finalize-english-meta-translations-implementation-report.md).

### Bucket 3: Learn German

After Learn English passes its package gate, complete the German- and
Swedish-meta-language Learn German packages. Preserve German-specific depth
while keeping the canonical English explanation package authoritative.

Execution evidence belongs in the
[Learn German implementation report](./roadmap-phase-6-finalize-german-meta-translations-implementation-report.md).

## Batch Rules

Every batch must:

1. start from reconciled inventory rows in the owning implementation report;
2. compare each target with the current canonical source, not an older
   translation or rendered fallback;
3. update both translation content and every affected relative link in one
   change;
4. record each pair's final disposition and evidence;
5. receive linguistic and didactic review in the target meta language; and
6. pass the shared gates before the next batch begins.

The translation inventory uses `pending`, `in progress`, `complete`, and
`blocked` for execution status. Its translation disposition is separate:
`verified existing`, `revise or retranslate`, or `fresh translation`.

## Quality Gates

Run after every implementation batch:

```bash
npm run quality
npm run build -- --base /jp-language-hub
npm run report:length
git diff --check
```

The language completion gate must additionally confirm:

- every current canonical page has exactly one authored file in every target
  meta-language package owned by that plan;
- no orphan translation exists without a canonical source;
- structural metadata matches exactly except for `metaLanguage`;
- no translated page-body link starts with `/`, while `related` routes remain
  absolute, canonical, and valid;
- translated pages preserve the canonical teaching answer and topic boundary;
- indexes, overview decision paths, component labels, QuickChecks, and related
  labels are actually translated;
- no untranslated canonical English explanatory fallback remains inside a
  package declared complete; and
- rendered pages remain scan-friendly and any new length exception is reviewed
  and documented deliberately.

## Phase 7 Handoff

Phase 6 owns authored-package completeness and per-page translation quality.
Phase 7 begins only after all three Phase 6 language plans pass. It then reviews
the completed packages as learner journeys across meta languages and resolves
cross-package consistency issues without using Phase 7 to finish missing Phase
6 translations.

## Definition of Done

Phase 6 is complete only when:

- Learn Swedish is fully authored in German and Swedish meta language;
- Learn English is fully authored in German and Swedish meta language;
- Learn German is fully authored in German and Swedish meta language;
- all inventory rows and batch ledgers in the three implementation reports are
  complete with review evidence;
- the canonical Phase 5 route and navigation structure remains unchanged
  unless a separately approved correction was made at its source;
- all shared and package-specific quality gates pass; and
- the three completed reports provide a clean resume and review hand-off to
  Phase 7.
