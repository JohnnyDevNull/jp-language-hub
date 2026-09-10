# Phase 5: Align Grammar IA Across Learning Languages

## Goal

Align the grammar information architecture for Learn Swedish, Learn English,
and Learn German before broader meta-language translation work begins. The
reference target is practical everyday communication through A1-B2, not
academic completeness.

This phase should make the three learning-language trees feel like one coherent
reference system while still respecting the grammar problems each language
actually has.

Supporting planning artifacts:

- [Phase 5 Navigation Blueprint](./roadmap-phase-5-navigation-blueprint.md)
- [Phase 5 Topic Inventory](./roadmap-phase-5-topic-inventory.md)

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

## Ground-Work Artifacts and Source of Truth

Phase 5 has three planning artifacts with non-overlapping responsibilities:

1. **This plan** owns the goal, scope, work-package order, gates, and
   definition of done.
2. **[Phase 5 Navigation Blueprint](./roadmap-phase-5-navigation-blueprint.md)**
   owns the exact approved visible sidebar and route structure for each
   learning language. Its approved structure is authoritative for navigation.
3. **[Phase 5 Topic Inventory](./roadmap-phase-5-topic-inventory.md)**
   owns one row per existing or planned page, the migration mapping, and the
   short A1-B2 can-do coverage checklist. It is authoritative for page-level
   scope and completeness.

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
- Give every learner question one canonical page and one primary navigation
  home. Cross-links may expose it elsewhere without duplicating the content.
- Treat Swedish sentence patterns and vocabulary as practical entry paths
  outside Grammar, with contextual links to canonical grammar pages.

Page structure, didactic components, scanability, and length budgets remain
owned by [`docs/rules/content-didactics.md`](./rules/content-didactics.md).
Metadata rules remain owned by
[`docs/rules/content-metadata.md`](./rules/content-metadata.md).

## Phase 5 Work Packages

1. **Correct the current-state record.** Verify the actual Swedish, English,
   and German trees and record their current scope before proposing additions.
2. **Define A1-B2 can-do coverage.** Complete the short checklist in the Topic
   Inventory; classify every capability as covered, planned, reference, or
   intentionally out of scope.
3. **Build the exhaustive page inventory.** Record one row per existing or
   planned page using six fields: language, learner question/topic, current
   route, target route, action, and priority. No content changes happen in
   this step.
4. **Approve the exact Navigation Blueprint.** Freeze visible shelf order,
   page order, route names, overview locations, and the compact-vs-shared
   taxonomy decisions for all three trees.
5. **Record migration mappings in the inventory.** Route moves and renames are
   allowed when the clean structure is better. No old-route preservation or
   redirect work is required; links, `related`, and localized mirrors must be
   updated atomically with each move.
6. **Align overviews, routes, and sidebars in small batches.** Each batch must
   implement only already-approved inventory and Blueprint decisions.
7. **Implement missing core content.** Add only pages approved by the
   coverage checklist, using the existing reference-page rules and length
   budget.

Each new page follows the reference-page or overview guidance in
[`docs/rules/content-didactics.md`](./rules/content-didactics.md).

Use `.mdx` as the default file format for learning reference pages. Use `.md`
only for planning documents, intentionally plain cheat sheets, or short index
pages that are expected to remain component-free.

### Final Whole-Tree Review

Run a final review across all learning-language trees:

- didactic order
- page type consistency
- metadata consistency
- related links
- internal links
- rendered length
- base-path build
- duplicate or near-duplicate topics

Phase 6 translation should not start until this review is complete.

## Quality Gates

Every implementation batch should pass:

```bash
npm run quality
npm run build -- --base /jp-language-hub
npm run report:length
git diff --check
```

The final review must additionally confirm that every inventory row has one
approved home, every checklist capability has a disposition, no topic was
added beside an existing equivalent, and the three trees answer comparable
learner questions through understandable paths. Verify the migration as one
atomic change: canonical routes, page-body links, `related` metadata, sidebar
entries, and localized mirrors must agree.

## Definition of Done

Phase 5 is done only when:

- the current-state record is accurate for all three learning trees;
- the Topic Inventory contains one row per existing or planned page and the
  A1-B2 can-do checklist has no unresolved decisions;
- the Navigation Blueprint contains the exact approved visible navigation,
  including page order and route names;
- all approved moves/renames are applied without stale links, metadata, sidebar
  entries, or localized mirrors;
- overviews provide concise lookup and decision paths rather than wall-of-text
  chapters;
- `npm run quality`, the base-path build, length reporting, and `git diff
  --check` pass; and
- the whole-tree review finds no duplicate or parallel topic structure that
  should have been migrated or merged.
