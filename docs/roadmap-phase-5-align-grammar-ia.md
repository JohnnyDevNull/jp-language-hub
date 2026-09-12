# Phase 5: Align Grammar IA Across Learning Languages

## Goal

Align the grammar information architecture for Learn Swedish, Learn English,
and Learn German before broader meta-language translation work begins. The
reference target is practical everyday communication through A1-B2, not
academic completeness.

This phase should make the three learning-language trees feel like one coherent
reference system while still respecting the grammar problems each language
actually has.

## Status

**Planning baseline:** Frozen.

**Execution status:** Swedish, English, and German implementation are
complete. German finalization is recorded through commit `c298e83`. The
separate whole-tree Quality Check is next and has not started or completed.

Phase 5 planning groundwork is complete. The current-state audit, practical
A1-B2 coverage decisions, target navigation, page inventory, and route
migration mappings now form the approved implementation baseline.

The planning baseline remains frozen. Language-specific implementation and the
final whole-tree quality check continue in this order:

1. [Phase 5: Finalize Swedish](./roadmap-phase-5-finalize-swedish.md) —
   complete; see the
   [Swedish implementation report](./roadmap-phase-5-finalize-swedish-implementation-report.md)
2. [Phase 5: Finalize English](./roadmap-phase-5-finalize-english.md) —
   complete; see the
   [English implementation report](./roadmap-phase-5-finalize-english-implementation-report.md)
3. [Phase 5: Finalize German](./roadmap-phase-5-finalize-german.md) — complete;
   German G1-G5 is recorded through commit `c298e83`
4. [Phase 5: Quality Check](./roadmap-phase-5-quality-check.md) — next; not
   started or complete

Do not begin Phase 6 translation until the work defined by all four execution
plans is complete.

## Working Definition of Complete

Phase 5 is complete when each learning-language tree has a coherent,
reference-first route through practical A1-B2 grammar. The target learner
should be able to:

- build ordinary statements, questions, commands, and subordinate clauses
- talk about present, past, future, plans, habits, completed events, and
  common aspect or mood contrasts
- use core noun phrases, articles, number, definiteness, possession, pronouns,
  prepositions, negation, and common function words
- describe people and things with adjectives and adverbs
- express ability, obligation, wishes, politeness, conditions, and reported
  information at a practical level
- diagnose the most common German-English-Swedish transfer mistakes

Advanced academic terminology, rare forms, and full C-level coverage remain
later expansion unless the coverage checklist proves a direct everyday need.

## Planning Artifacts and Source of Truth

Phase 5 uses planning artifacts with non-overlapping responsibilities:

1. **This coordination plan** owns the goal, status, execution order,
   cross-language gates, and definition of done.
2. **[Phase 5 Navigation Blueprint](./roadmap-phase-5-navigation-blueprint.md)**
   owns the exact approved Phase-5 navigation slice and target route structure
   for each learning language. Its approved structure is authoritative for
   Phase-5 navigation changes.
3. **[Phase 5 Topic Inventory](./roadmap-phase-5-topic-inventory.md)** owns one
   row per existing or planned Phase-5-owned page, migration mappings,
   implementation priorities, and the practical A1-B2 can-do coverage
   checklist. It is authoritative for Phase-5 page scope and completeness.
4. **The three language finalization plans** own implementation batches,
   language-specific content boundaries, migration checklists, and local
   acceptance criteria.
5. **The Phase 5 Quality Check** owns the final cross-language audit and the
   release gate before Phase 6.

The language finalization and Quality Check plans must reference the Blueprint
and Topic Inventory instead of copying their route tables. This keeps each
route, action, priority, and navigation position owned in one place.

Treat the approved Blueprint and Topic Inventory as a stable baseline during
implementation. If implementation exposes a real error, correct the owning
artifact explicitly and revalidate affected plans; do not silently improvise a
different route, page scope, or navigation structure inside an execution
batch.

The internal shared taxonomy is a planning vocabulary for comparable learner
questions. It is not a requirement to expose every internal category in each
sidebar. Each language may use compact visible navigation when that is
clearer, while its overview and inventory preserve the shared mental model.

## Planning Principles

The Navigation Blueprint owns the common internal taxonomy, visible shelves,
and page order. This plan deliberately does not repeat them.

- Align the trees by learner question, not by identical page counts.
- Keep visible navigation compact; thin concepts belong in overview entry
  paths instead of empty shelves.
- Preserve language-specific depth: Swedish is not forced into German case
  structure, English does not inherit German verb organization, and German is
  not flattened to match the smaller trees.
- Give every independently teachable rule one canonical page and one primary
  navigation home. A broader learner question may have one primary overview
  decision path that links several canonical rules. Cross-links may expose a
  rule elsewhere without duplicating its content.
- Treat Swedish sentence patterns and vocabulary as practical entry paths
  outside Grammar, with contextual links to canonical grammar pages.
- Audit retained and moved pages as carefully as newly created pages. Existing
  content is not considered approved merely because its route survives.

Page structure, didactic components, scanability, and length budgets remain
owned by [`docs/rules/content-didactics.md`](./rules/content-didactics.md).
Metadata rules remain owned by
[`docs/rules/content-metadata.md`](./rules/content-metadata.md).

## Completed Groundwork

The following planning work packages are complete:

1. **Correct the current-state record.** The actual Swedish, English, and
   German grammar and common-mistakes trees were audited before additions were
   proposed.
2. **Define A1-B2 can-do coverage.** Each practical capability in the Topic
   Inventory has a disposition: covered, planned, reference, or intentionally
   out of scope.
3. **Build the exhaustive page inventory.** Existing and planned pages have a
   learner question, current route, target route, action, and implementation
   priority.
4. **Approve the exact Navigation Blueprint.** Visible shelf order, page order,
   route names, overview locations, and language-specific deviations are
   decided.
5. **Record migration mappings.** Approved route moves, renames, and merges are
   recorded in the Topic Inventory.

These artifacts should now change only to correct a verified inconsistency or
to record an explicitly approved scope decision.

## Pending Execution

### 1. Finalize Swedish

Implement the Swedish target tree and content boundaries from the approved
Blueprint and Inventory. Review every retained, moved, renamed, and new page
for linguistic accuracy, didactic usefulness, metadata, and links. Update
Swedish practical entry paths outside Grammar where the language plan requires
them.

### 2. Finalize English

Implement the English target tree and missing practical A1-B2 content in
focused shelf-based batches. Review all existing pages alongside the new work
so inherited scope gaps, overlaps, or weak decision paths do not survive the
restructure.

### 3. Finalize German

Implement the German target tree, including its larger route-migration surface
and approved merges. Preserve useful existing depth while reviewing every page
against its canonical learner question and its boundary with neighboring
topics.

### 4. Run the Phase 5 Quality Check

After all three language plans are complete, audit the implemented repository
against the approved Blueprint and Inventory. Verify the complete navigation,
route, content, metadata, link, localized-mirror, and cross-language structure
before declaring Phase 5 complete.

## Batch Rules

Each language implementation plan defines its own small batches. Every batch
must:

- implement only approved Blueprint and Inventory decisions;
- treat a route migration as one atomic change across the canonical source,
  sidebar, page-body links, `related` metadata, and localized mirrors;
- apply the affected-localized-mirror rule below whenever canonical content or
  routes change;
- review retained and moved pages, not only pages created in the batch;
- keep one canonical page per independently teachable rule and remove
  superseded parallel structures through the approved move or merge action;
- use `.mdx` by default for learning-reference and didactic-overview pages, and
  `.md` only for planning documents, intentionally plain cheat sheets, or
  short component-free index pages; and
- pass the local quality gates before the next batch begins.

No redirect or old-route preservation work is required. A clean final
information architecture takes priority, provided all in-repository consumers
move atomically.

## Affected Localized Mirrors and Phase 7 Boundary

Phase 5 owns every authored German or Swedish meta-language mirror affected by
a canonical route, scope, structure, example set, warning, self-check, or
related-topic change. Record exactly one disposition for each affected mirror:
still equivalent, update, retranslate, or remove-to-fallback. A surviving
authored mirror must preserve the canonical page's answer, route through the
topic, examples, warnings, self-checks, and related-topic intent. An obsolete
translation must be removed so Starlight falls back to the current canonical
source. Route and metadata alignment alone are not sufficient.

Phase 7 performs the later complete cross-meta-language review after Phase 6
has created the planned translation packages. It reviews all translated pages,
including pages untouched by Phase 5, for translated clarity and package-wide
didactic equivalence. Keeping the gates separate does not exempt Phase 5 from
maintaining translations that its own changes affect.

## Quality Gates

Every implementation batch should pass:

```bash
npm run quality
npm run build -- --base /jp-language-hub
npm run report:length
git diff --check
```

The final Quality Check must additionally confirm that:

- the implemented route and sidebar trees match the Navigation Blueprint;
- every Topic Inventory row has exactly one approved outcome, except for an
  explicitly recorded merge;
- every practical A1-B2 checklist capability has a final disposition;
- no stale route remains in content, metadata, configuration, tests, scripts,
  documentation, or length-report exceptions;
- every retained, moved, and new canonical page has passed linguistic,
  didactic, metadata, and duplication review;
- page-body links remain relative, `related` routes remain absolute and valid,
  existing localized mirrors remain structurally aligned, and every mirror
  affected by Phase 5 remains didactically equivalent or has been deliberately
  removed to canonical fallback; and
- the three trees answer comparable learner questions through understandable,
  language-appropriate paths.

Findings must not silently redefine the approved IA. Language-specific defects
return to the owning finalization plan; system-wide defects remain owned by the
Quality Check.

## Definition of Done

Phase 5 is done only when:

- the completed Blueprint and Topic Inventory remain internally consistent and
  match the implementation;
- all Swedish, English, and German finalization batches and their existing-page
  audits are complete;
- all approved moves, renames, and merges are applied without stale links,
  metadata, sidebar entries, documentation references, or localized mirrors;
- no authored translation affected by Phase 5 teaches an obsolete canonical
  scope, structure, example set, warning, self-check, or related-topic path;
- overviews provide concise lookup and decision paths instead of wall-of-text
  chapters;
- every canonical page has one clear learner question and does not duplicate a
  neighboring page's responsibility;
- `npm run quality`, the base-path build, length reporting, and `git diff
  --check` pass; and
- the Phase 5 Quality Check records no unresolved blocker to Phase 6.
