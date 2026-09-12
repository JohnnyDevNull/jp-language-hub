# Phase 5: Finalize Swedish

## Status and Dependencies

**Status:** Complete. All six Swedish implementation batches and the
independent Swedish completion review passed. This is the first language
implementation plan in Phase 5.

Execution evidence and Swedish-specific decisions are recorded in the
[Swedish implementation report](./roadmap-phase-5-finalize-swedish-implementation-report.md).

This plan executes the Swedish decisions owned by:

- [Phase 5: Align Grammar IA](./roadmap-phase-5-align-grammar-ia.md) for phase
  scope, sequence, and gates;
- [Phase 5 Navigation Blueprint](./roadmap-phase-5-navigation-blueprint.md#learn-swedish)
  for the approved visible navigation, target route names, and page order;
- [Phase 5 Topic Inventory](./roadmap-phase-5-topic-inventory.md#swedish)
  for current-to-target mappings, actions, priorities, and page-level
  completeness.

Those artifacts remain authoritative. This document owns execution order,
content boundaries, migration discipline, and Swedish acceptance criteria. It
must not acquire a second route inventory.

Implementation starts from the reconciled Phase 5 planning baseline. Each
batch must finish with a coherent, usable Swedish tree; a later batch may not
be required to repair an intentionally incomplete earlier migration.

## Owned Surface

This plan owns:

- the canonical root-locale content for Learn Swedish Grammar and Common
  Mistakes;
- the approved move of Numbers from Grammar to Vocabulary;
- Swedish Grammar navigation, section overviews, and decision paths;
- route-dependent links from Learning Path, Important, Vocabulary, Sentence
  Patterns, Pronunciation Basics, Cheat Sheets, and other canonical pages;
- existing German- and Swedish-meta-language mirrors affected by Swedish
  finalization, under the coordination plan's
  [affected-localized-mirror rule](./roadmap-phase-5-align-grammar-ia.md#affected-localized-mirrors-and-phase-7-boundary).

Use the authoritative Swedish rows and totals in the Topic Inventory. This
execution plan intentionally does not copy their counts.

## Non-Goals

- Do not add topics, routes, or shelves that are absent from the approved
  Blueprint and Topic Inventory.
- Do not create separate Swedish Cases or Word Formation shelves in Phase 5.
  Cases are reached through Pronouns & Roles and Possession; Swedish word
  formation remains with the relevant noun and verb topics.
- Do not duplicate grammar explanations inside Vocabulary or Sentence
  Patterns. Those areas remain practical entry paths to canonical grammar.
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

### Sentence structure, questions, and negation

- **Basic Word Order** introduces the neutral main-clause pattern. **V2** owns
  the finite-verb-second rule, and **Inversion** owns the changed order after a
  non-subject first element. They must not become three versions of one page.
- **Subordinate Clauses** owns clause recognition, conjunction-led structure,
  and the general subordinate-clause order. **BIFF** owns the narrower
  placement of sentence adverbs in subordinate clauses.
- **Negation** owns negative forms and the choice of negative expression.
  **Inte Placement** owns where `inte` appears in main and subordinate clauses.
- **Questions** owns yes/no question formation and the shared question frame.
  **Question Words** owns lexical choice, agreement, and the word-order effects
  specific to direct and indirect wh-questions.
- **Någon, något, ingen, inget** owns noun-phrase forms, agreement, and the
  contrast between an indefinite expression under clause negation and a
  negative noun phrase. **Negation** links to that focused lookup instead of
  duplicating its paradigms.
- Every position rule uses `SentenceSchema`; explanatory prose alone is not an
  adequate representation of the order.

### Nouns, possession, and pronouns

- **Possession** owns nominal possession, including the s-genitive and
  possessor constructions. **Possessive Pronouns** owns possessive determiners
  and pronouns; **Sin, sitt, sina** owns subject-reflexive possession.
- **Personal Pronouns** provides the core form-and-role lookup. The overview
  may introduce subject and object roles, but it must not grow into a Swedish
  case system.
- The existing indefinite, demonstrative, relative, reciprocal, and question
  word pages keep separate lookup questions. Moves must not broaden their
  scope merely to fill the new shelf.

### Time forms, verb patterns, voice, and mood

- **Verbs & Time Forms** owns choosing and forming time reference. **Verb
  Patterns & Voice** owns verb complementation, modal patterns, commands,
  particles, groups, and voice.
- **Modal Verbs** includes the practical choice between a bare infinitive and
  an infinitive with `att`; no additional Phase 5 page is needed for that
  distinction.
- **Passive** owns formation and recognition of the available passive forms.
  **Active vs Passive** owns the communicative choice, information focus, and
  when an agent is omitted.
- **Conditionals** owns the grammar system and its main form-meaning choices.
  The existing Conditions and Consequences sentence-pattern page remains a
  production-oriented phrase route rather than a second grammar explanation.
- **Reported Speech** stays practical: reporting statements and questions,
  viewpoint changes, and the contrasts learners need through B2. It must not
  become an academic survey of every reporting construction.

### Overview and reference-page behavior

- Every section overview provides a short **Choose by** decision path and a
  **Learn in this order** path. Add **Watch for** only where it provides a real
  diagnostic distinction.
- Every reference page follows the standard order in
  [Content Didactics](./rules/content-didactics.md), omitting blocks that do not
  serve its lookup question.
- `KeyTakeaway` answers the lookup immediately; `QuickCheck` tests production;
  `RelatedTopics` is last.
- Explicit Swedish-German-English comparisons use `LanguageComparison`.
  Swedish deviations use `SpecialRule` only when they genuinely contrast with
  both German and English.
- Titles do not repeat “Swedish”; route position already identifies the
  learning language.

## Implementation Order

Within every batch, use this order:

1. Re-read the relevant Blueprint shelf and Topic Inventory rows.
2. Audit the existing pages before writing or moving anything.
3. Establish the shelf overview before or with its first child page.
4. Implement P0 pages before P1 pages; complete an atomic move regardless of
   its priority once started.
5. Update navigation, metadata, links, and mirrors in the same change.
6. Run the batch quality gates and resolve findings before the next batch.

### Batch 1: Sentence Structure, Questions, and Negation

- Complete the Sentence Structure and Questions & Negation shelves in their
  approved order.
- Audit the retained word-order pages for the boundaries above and remove
  avoidable duplication among Basic Word Order, V2, and Inversion.
- Create the missing subordinate-clause, question, and negation entry points.
- Move and rename the question-word page atomically.
- Verify every position claim with the appropriate sentence schema.

### Batch 2: Nouns, Articles, Pronouns, and Roles

- Complete the Nouns & Articles and Pronouns & Roles shelves.
- Preserve the focused responsibilities of En and Ett, Noun Forms, and Plural
  Overview while adding the missing possession decision path.
- Create the personal- and reflexive-pronoun coverage approved by the
  inventory.
- Move all existing pronoun pages together so the old mixed
  Pronouns & Function Words structure does not remain as a parallel taxonomy.

### Batch 3: Time Forms, Verb Patterns, Voice, and Mood

- Complete Verbs & Time Forms, Verb Patterns & Voice, and Mood, Politeness &
  Reports.
- Split the current Verbs shelf atomically across its approved destinations.
- Preserve useful existing material while applying the binding boundaries for
  modals, voice, conditionals, and reported speech.
- Connect the grammar decision paths to relevant Sentence Patterns without
  copying the grammar into them.

### Batch 4: Adjectives, Prepositions, Connectors, and Numbers

- Complete Adjectives & Adverbs and Prepositions & Function Words.
- Audit retained adjective pages and move the existing preposition and
  där-/här-adverb pages to their approved shelf.
- Add the approved Connectors entry point without duplicating subordinate
  clause instruction.
- Move Numbers from Grammar to Vocabulary atomically and remove the obsolete
  Numerals navigation structure.

### Batch 5: Cross-Tree Integration and Common Mistakes

- Re-audit Learning Path, Important, Sentence Patterns, Vocabulary,
  Pronunciation Basics, Cheat Sheets, and Common Mistakes against the completed
  Grammar tree.
- Update route-dependent labels, decision paths, and related-topic intent.
- Keep situation, vocabulary, and sentence-pattern pages focused on “what can
  I say?”; link any position or formation claim to its canonical grammar page
  or represent it with the required schema.
- Review both transfer directions in Common Mistakes for accurate destinations
  and no duplicated canonical explanations.

### Batch 6: Swedish Completion Review

- Compare the implemented tree with every Swedish Blueprint entry and Topic
  Inventory row.
- Review the complete Swedish tree as a learner journey, not only the diff.
- Resolve Swedish-specific linguistic, didactic, metadata, link, route, and
  duplication findings before declaring this plan complete.
- Hand the completed tree to the separate Phase 5 whole-tree Quality Check;
  do not treat this language review as a substitute for that gate.

## Atomic Migration Checklist

Apply this checklist to every `move`, `move, rename`, or cross-section
reorganization. One batch is incomplete until all applicable items agree:

- Move the canonical source file to the exact Topic Inventory target.
- Update the single shared sidebar configuration and preserve the Blueprint
  order.
- Update all page-body and component links to relative paths.
- Update `related` metadata to the canonical absolute route.
- Update links in overviews, Learning Path, Important, Sentence Patterns,
  Vocabulary, Pronunciation Basics, Common Mistakes, and Cheat Sheets.
- Move any authored files under `src/content/docs/de/` and
  `src/content/docs/sv/` to the matching localized path.
- Apply the coordination plan's affected-localized-mirror rule to every
  authored mirror affected by the batch.
- Update route references in documentation, scripts, tests, fixtures, and the
  documented length-exception table.
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
  productive rule; overview, index, and cheat-sheet pages follow their own
  page-type requirements;
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

- all Swedish inventory targets have exactly one canonical source and one
  approved navigation home;
- every Swedish inventory action is implemented and its priority is satisfied;
- all moved routes, body links, `related` metadata, sidebar entries, and
  authored localized mirrors agree, with no obsolete canonical route left;
- every authored mirror affected by Swedish finalization remains didactically
  equivalent or has been deliberately removed to canonical fallback;
- every created, retained, and moved page has passed the linguistic and
  didactic audit;
- Grammar, Vocabulary, Sentence Patterns, Learning Path, Important, Common
  Mistakes, and Cheat Sheets form one coherent reference journey without
  parallel explanations;
- the complete Swedish tree passes all quality gates;
- no unresolved Swedish finding is deferred silently to the whole-tree Quality
  Check or to Phase 7.
