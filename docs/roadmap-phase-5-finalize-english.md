# Phase 5: Finalize English

## Status and Dependencies

**Status:** Planned. This is the second language implementation plan in Phase
5 and begins after Finalize Swedish is complete.

This plan executes the English decisions owned by:

- [Phase 5: Align Grammar IA](./roadmap-phase-5-align-grammar-ia.md) for phase
  scope, sequence, and gates;
- [Phase 5 Navigation Blueprint](./roadmap-phase-5-navigation-blueprint.md#learn-english)
  for the approved visible navigation, target route names, and page order;
- [Phase 5 Topic Inventory](./roadmap-phase-5-topic-inventory.md#english)
  for current-to-target mappings, actions, priorities, and page-level
  completeness.

Those artifacts remain authoritative. This document owns execution order,
content boundaries, migration discipline, and English acceptance criteria. It
must not acquire a second route inventory.

Because English has the largest creation scope, batches must remain narrow
enough for whole-shelf review. A high page count is not permission to publish
thin stubs or repeat a generic explanation under several titles.

## Owned Surface

This plan owns:

- the canonical root-locale content for Learn English Grammar and Common
  Mistakes;
- English Grammar navigation, section overviews, and decision paths;
- all approved moves from the current English Verbs and Sentence Structure
  shelves;
- route-dependent canonical links elsewhere in the repository;
- existing German- and Swedish-meta-language mirrors affected by English
  finalization, under the coordination plan's
  [affected-localized-mirror rule](./roadmap-phase-5-align-grammar-ia.md#affected-localized-mirrors-and-phase-7-boundary).

Use the authoritative English rows and totals in the Topic Inventory. This
execution plan intentionally does not copy their counts.

## Non-Goals

- Do not add topics, routes, or shelves that are absent from the approved
  Blueprint and Topic Inventory.
- Do not force English to copy German morphology or Swedish topic depth.
- Do not turn practical reference pages into exhaustive lists of verb
  complementation, phrasal verbs, or derivational patterns.
- Do not translate the complete tree into new German- or Swedish-meta-language
  packages. Phase 5 still owns didactic equivalence for every existing authored
  mirror affected by its changes; Phase 7 owns the later complete package-wide
  review.
- Do not add redirects for old routes.
- Do not redesign the shared component, content-schema, or sidebar systems
  unless a separately approved defect makes that necessary.
- Do not expand beyond practical everyday A1-B2 reference coverage.

## Binding Linguistic and Didactic Boundaries

These boundaries are acceptance criteria. Where two pages meet, each overview
must make the distinction visible and cross-link to the canonical answer.

### Questions, auxiliaries, and negation

- **Questions and Do-Support** owns English question formation, including when
  `do` is inserted and when an existing auxiliary moves. **Auxiliary Verbs**
  owns the auxiliary system and its roles in tense, aspect, voice, negation,
  and inversion. Neither page should duplicate the other page's full paradigm.
- **Negation** owns ordinary clause negation and negative placement. **Any vs
  No** owns polarity choices such as `not ... any` versus `no` and the meaning
  change caused by double negatives.
- **Sentence Order** owns the neutral clause frame. **Adverb Placement** owns
  the position choices for frequency, manner, place, time, and multi-adverb
  order. Questions and subordinate clauses link back instead of restating the
  whole frame.

### Noun phrases, quantification, and pronouns

- **Countable and Uncountable Nouns** owns countability and the practical
  quantifier choices `much/many`, `few/little`, and their common alternatives.
- **Any vs No** owns polarity, not the general quantifier system.
- **Indefinite Pronouns** owns forms such as `someone`, `anything`, and
  `nobody`, including their agreement behavior; it does not repeat the noun
  countability page.
- **Articles** owns article choice. **Plural Nouns** owns plural formation and
  agreement consequences. **Possession** owns apostrophe-s, of-constructions,
  and the practical choice between them.
- **Sentence Roles and Pronoun Case** owns the subject/object role decision.
  Individual pronoun pages remain form-and-use lookups.

### Time forms, voice, and reported meaning

- **Choosing Time Form** is the decision hub. Individual tense and aspect
  pages own formation and their central use; contrast pages own distinctions
  learners commonly confuse.
- Future Progressive and Future Perfect remain visible at the end of the Time
  Forms shelf as reference pages, outside the recommended core sequence.
- **Passive** owns formation and recognition. **Active vs Passive** owns
  communicative choice, information focus, and when an agent is omitted.
- **Reported Speech** owns tense backshift, pronoun changes, and time/place
  viewpoint changes, with practical direct-to-reported transformations through
  B2.
- **Gerunds and Infinitives** provides practical pattern families and the
  highest-value contrasts. It must not attempt a complete dictionary of verb
  complements.

### Word formation and transfer scope

- **Phrasal Verbs** owns particle-verb meaning, separability, stress where it
  affects use, and practical lookup strategies. It is not a vocabulary dump.
- **Word Families** remains a P1 derivational-pattern reference. It must not
  absorb quantifiers, general vocabulary instruction, or every productive
  affix.
- **Connectors** provides a functional choice path for addition, contrast,
  cause, result, and condition. Clause-position consequences link to Sentence
  Structure instead of creating a second word-order page.
- Common Mistakes owns transfer diagnosis. Grammar pages may warn about a
  specific transfer error, but they must not reproduce the complete diagnostic
  collection.

### Overview and reference-page behavior

- Every section overview provides a short **Choose by** decision path and a
  **Learn in this order** path. Add **Watch for** only where it provides a real
  diagnostic distinction.
- Every reference page follows the standard order in
  [Content Didactics](./rules/content-didactics.md), omitting blocks that do not
  serve its lookup question.
- `KeyTakeaway` answers the lookup immediately; `QuickCheck` tests production;
  `RelatedTopics` is last.
- Explicit German-English-Swedish comparisons use `LanguageComparison`.
  Position rules use `SentenceSchema`.
- Titles do not repeat “English”; route position already identifies the
  learning language.

## Implementation Order

Within every batch, use this order:

1. Re-read the relevant Blueprint shelf and Topic Inventory rows.
2. Audit the existing pages before writing or moving anything.
3. Establish the shelf overview before or with its first child page.
4. Implement P0 pages before P1 pages; complete an atomic move regardless of
   its priority once started. Reference pages come after the core sequence.
5. Update navigation, metadata, links, and mirrors in the same change.
6. Run the batch quality gates and resolve findings before the next batch.

### Batch 1: Sentence Structure, Questions, and Negation

- Complete Sentence Structure and Questions & Negation in approved order.
- Audit the retained Sentence Order and Adverb Placement pages before adding
  subordinate and relative clause coverage.
- Move Questions and Do-Support atomically and keep its boundary with
  Auxiliary Verbs explicit.
- Add Negation and Any vs No as distinct decision paths.

### Batch 2: Nouns, Articles, Quantifiers, Pronouns, and Roles

- Complete Nouns & Articles and Pronouns & Roles.
- Audit Articles and Countable and Uncountable Nouns before adding plural,
  possession, quantifier, and pronoun coverage around them.
- Enforce the ownership split among countability, polarity, indefinite
  pronouns, and pronoun case.
- Ensure the overview sequence takes a learner from noun-phrase choice to
  sentence-role choice without pretending that English has a German-style
  case system.

### Batch 3: Verbs and Time Forms

- Move the current Verbs overview and all existing time-form pages to the
  approved shelf as one atomic migration.
- Add the missing progressive and perfect reference coverage approved by the
  inventory.
- Keep Choosing Time Form as the decision hub and remove avoidable duplication
  among individual and contrast pages.
- Place Future Progressive and Future Perfect after the core sequence and mark
  their role consistently as reference material.

### Batch 4: Verb Patterns, Voice, Mood, and Reported Speech

- Complete Verb Patterns & Voice and Mood, Politeness & Reports.
- Establish Auxiliary Verbs before relying on it from modal, passive,
  imperative, question, or negation pages.
- Enforce the formation-versus-choice split between Passive and Active vs
  Passive.
- Keep Gerunds and Infinitives practical, and make Reported Speech the
  canonical owner of backshift and viewpoint changes.

### Batch 5: Adjectives, Prepositions, Connectors, and Word Formation

- Complete Adjectives & Adverbs, Prepositions & Function Words, and Word
  Formation & Particles.
- Keep adjective form, order, comparison, adverb use, and adjective-versus-
  adverb choice as separate lookup questions.
- Give place, direction, time, and dependent prepositions functional decision
  paths instead of long undifferentiated lists.
- Enforce the boundaries for Connectors, Phrasal Verbs, and Word Families.

### Batch 6: Common Mistakes and English Completion Review

- Audit the retained Common Mistakes pages and add the approved Swedish-to-
  English diagnostic route.
- Check that mistake pages diagnose transfer and point to canonical grammar
  answers rather than duplicating them.
- Compare the implemented tree with every English Blueprint entry and Topic
  Inventory row.
- Review the complete English tree as a learner journey, not only the diff.
- Resolve English-specific linguistic, didactic, metadata, link, route, and
  duplication findings before declaring this plan complete.
- Hand the completed tree to the separate Phase 5 whole-tree Quality Check;
  do not treat this language review as a substitute for that gate.

## Atomic Migration Checklist

Apply this checklist to every `move`, `move, reference`, or cross-section
reorganization. One batch is incomplete until all applicable items agree:

- Move the canonical source file to the exact Topic Inventory target.
- Update the single shared sidebar configuration and preserve the Blueprint
  order.
- Update all page-body and component links to relative paths.
- Update `related` metadata to the canonical absolute route.
- Update route references in overviews, Common Mistakes, shared content,
  documentation, scripts, tests, fixtures, and the documented length-exception
  table.
- Move any authored files under `src/content/docs/de/` and
  `src/content/docs/sv/` to the matching localized path.
- Apply the coordination plan's affected-localized-mirror rule to every
  authored mirror affected by the batch.
- Search for the old route and old shelf name across the repository; classify
  every remaining match as intentional or stale.
- Confirm the old canonical route no longer exists. Do not add a redirect.

## Retained and Moved Content Audit

Every `keep` and `move` page receives an actual content review. A green build
does not prove that inherited content fits its new role.

For each existing page, verify:

- one clear learner question and no competing canonical page;
- linguistically correct rules, examples, terminology, and claimed contrasts;
- an immediate lookup answer and a scan-friendly progression;
- the standard page order, with no empty section added for symmetry;
- `SentenceSchema` for positional rules and `LanguageComparison` for explicit
  cross-language comparison;
- useful transfer guidance without duplicating a Common Mistakes page;
- metadata that matches the learning, meta, and comparison language layers;
- two to four production-focused QuickCheck items on detail pages that teach a
  productive rule; overview and index pages follow their own page-type
  requirements;
- rendered length within budget or a justified, documented exception;
- after a move, no scope drift caused only by the new neighboring pages.

Preserve valuable explanations and examples. Split or merge content only when
the approved inventory requires it or when two independent lookup questions
cannot otherwise meet the didactic rules; any route-level change outside the
inventory returns to planning for approval.

## Quality Gates

Run after every implementation batch:

```bash
npm run quality
npm run build -- --base /jp-language-hub
npm run report:length
git diff --check
```

In addition, verify the changed routes in the rendered site under the base
path, inspect representative desktop and narrow layouts, and search the built
output for base-less internal links. For every migration, search the repository
for the old route before closing the batch.

## Definition of Done

This plan is complete only when:

- all English inventory targets have exactly one canonical source and one
  approved navigation home;
- every English inventory action is implemented and its priority is satisfied;
- all moved routes, body links, `related` metadata, sidebar entries, and
  authored localized mirrors agree, with no obsolete canonical route left;
- every authored mirror affected by English finalization remains didactically
  equivalent or has been deliberately removed to canonical fallback;
- Future Progressive and Future Perfect remain available and visible as
  reference pages without driving the core sequence;
- every created, retained, and moved page has passed the linguistic and
  didactic audit;
- the complete English tree passes all quality gates;
- no unresolved English finding is deferred silently to the whole-tree Quality
  Check or to Phase 7.
