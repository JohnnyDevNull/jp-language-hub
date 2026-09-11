# Phase 5: Finalize German

## Status and Dependencies

**Status:** Planned. This is the third language implementation plan in Phase 5
and begins after the Swedish and English finalization plans are complete.

This plan owns the German-learning implementation slice of Phase 5. It does
not redefine target routes or navigation. The
[Navigation Blueprint](./roadmap-phase-5-navigation-blueprint.md) owns their
names, tree, and order; the German rows of the
[Topic Inventory](./roadmap-phase-5-topic-inventory.md) own current-to-target
mappings, actions, priorities, and coverage.

## Goal

Finish the canonical English-meta-language German reference so its navigation,
content boundaries, and practical A1-B2 coverage match the approved Phase 5
model without flattening German-specific depth.

Use the authoritative German rows and totals in the Topic Inventory. This
execution plan intentionally does not copy their counts. Most of the work is
migration and review rather than page creation.

## Owned Surface

This plan owns:

- canonical content under `src/content/docs/learn/german/`
- the German-learning portion of the sidebar in `astro.config.mjs`
- German grammar and common-mistakes overviews
- German-learning page-body links and `related` metadata
- German-learning references from shared pages
- matching `/de/` and `/sv/` authored mirrors affected by German finalization,
  under the coordination plan's
  [affected-localized-mirror rule](./roadmap-phase-5-align-grammar-ia.md#affected-localized-mirrors-and-phase-7-boundary)
- documentation, tests, fixtures, and length-exception references affected by
  a German route migration

## Non-Goals

- Do not preserve old routes or add redirects.
- Do not create broad new German-learning translation packages. Phase 5 still
  updates or retranslates every existing authored mirror affected by its
  changes.
- Do not create a separate German course or learning path.
- Do not copy Swedish or English page depth where German needs a different
  explanation.
- Do not add C-level grammar, literary forms, or exhaustive terminology.
- Do not change the approved cross-language taxonomy during implementation.

## Binding Content Boundaries

### Articles and gender

- `Articles and gender` owns the decision process across gender, number,
  definiteness, and case.
- `Der, die, das` owns definite-article forms and their gender/case signals.
- `Ein-words` owns the corresponding indefinite and possessive determiner
  pattern.
- `Compound nouns` owns the final-element rule and productive compound lookup;
  Nouns & Articles links to it without duplicating the rule.

### Cases, roles, and pronouns

- `Cases as roles` owns the semantic reason for nominative, accusative, dative,
  and genitive.
- The individual case pages own their form and high-frequency use patterns.
- `Pronoun case choice` owns choosing a pronoun form after the role is known;
  it does not reteach the full case system.
- `Dependent prepositions` owns frequent verb/adjective plus preposition
  combinations, not the complete government of every German preposition.

### Negation and function words

- `Negation` owns the top-level decision between negating a clause, phrase, or
  noun phrase.
- `Nicht vs kein` owns form choice, while `Nicht placement` owns the position
  and scope of `nicht`.
- `Negative pronouns and adverbs` owns forms such as `niemand`, `nichts`,
  `nie`, and `nirgends`; the overview links these focused pages rather than
  repeating their full rules.

### Time forms and verb patterns

- `Choosing time form` owns the practical decision path.
- Individual tense pages own formation and their central uses.
- `Present vs perfect vs preterite` owns the contrast and does not repeat full
  paradigms.
- `Modal verbs` owns syntax and the verb bracket; `Modal verb meanings` owns
  semantic choice.
- `Particle verbs` owns the shared concept; `Separable verbs` and `Inseparable
  prefix verbs` own their respective form patterns; the contrast page owns the
  decision between particle and plain meanings.

### Voice

- `Passive` owns passive formation, actor phrases, and the central process
  passive pattern.
- `Active vs passive` owns the information-structure choice.
- The current standalone `Active` page is merged into `Active vs passive` and
  removed. Active voice has no independent German form system that justifies a
  second lookup route.

### Mood, politeness, conditions, and reports

- `Konjunktiv II` owns the system and its main communicative functions.
- `Wuerde forms` owns productive `wuerde` plus infinitive formation.
- `Haette, waere, koennte` owns the highest-frequency synthetic forms.
- `Polite requests` owns request patterns rather than reteaching all of
  Konjunktiv II.
- The Mood overview provides the canonical entry path for conditions and links
  to both `Subordinating conjunctions` and `Konjunktiv II`; Phase 5 adds no
  separate German conditionals page.
- `Reported speech` is the practical entry page and includes ordinary spoken
  reporting choices. `Konjunktiv I` remains a reference page for formal
  distancing and recognition.

## Implementation Batches

Implement the batches in order. A route move and every affected consumer form
one atomic change even when the batch contains several such moves.

### G1. Retained foundations and missing preposition coverage

- audit Grammar, Sentence Structure, Cases, Nouns & Articles, and Prepositions
  overviews against their approved learner questions
- audit all retained pages for linguistic accuracy, lookup speed, metadata,
  page structure, and overlap
- create `Dependent prepositions`
- add the German questions-and-negation decision path to the grammar overview
- add the conditions decision path without creating another canonical topic

### G2. Pronouns, adjectives, and function words

- move `pronouns/` to `pronouns-roles/`
- move `adjectives/` to `adjectives-adverbs/`
- move `function-words/` to `function-words-negation/`
- update all three overviews and keep their topic boundaries distinct
- update the sidebar, page-body links, `related` metadata, common-mistakes
  repair links, authored mirrors, and repository documentation in the same
  batches

### G3. Atomic verb-tree fan-out

The current `verbs/` directory fans out into several target shelves. Perform
this as one coordinated migration so no intermediate navigation becomes the
new baseline.

- move time-form pages to `verbs-time-forms/`
- create `Past perfect`
- move modal, infinitive, imperative, and voice pages to
  `verb-patterns-voice/`
- move Konjunktiv, politeness, and reporting pages to
  `mood-politeness-reports/`
- move particle-verb pages to `word-formation-particles/`
- merge every independent teaching point from `Active` into
  `Active vs passive`, remove the standalone source route, and update all
  consumers as part of this same verb-tree migration
- create all required shelf overviews before exposing their P0 children
- keep `Future perfect` and `Konjunktiv I` visible at the reference tail of
  their shelves, outside the recommended learning sequence

### G4. Word formation finalization

- move and rename `compound-noun-gender` to `compound-nouns` under Word
  Formation & Particles
- verify that Nouns & Articles points to the one canonical compound-noun page

### G5. Common mistakes and German finalization

- audit the English-to-German and Swedish-to-German diagnostics against the
  migrated repair routes
- remove diagnostics that duplicate canonical grammar explanations
- verify that every diagnostic sends the learner to the most specific repair
  page
- reconcile the completed tree with every German inventory row
- search the whole repository for every retired German route

## Existing-Page Audit

Every retained or moved German page, plus all content entering an approved
merge, must be reviewed rather than merely relocated or consolidated. Confirm:

- one independent learner question and one canonical home
- correct German grammar and idiomatic examples
- practical A1-B2 depth without academic expansion
- a fast lookup answer before detailed explanation
- no duplicated decision layer between overview, contrast, and form pages
- `SentenceSchema` for word-order and verb-bracket rules
- `LanguageComparison` only for real cross-language comparison
- productive `QuickCheck` items on detail pages that teach a productive rule;
  overview and index pages follow their own page-type requirements
- compliant metadata and language markup
- no unjustified wall of text or underdeveloped stub

## Atomic Migration Checklist

For each move, rename, or merge:

1. move, create, merge, or remove the canonical source file;
2. update the German sidebar segment and all affected overviews;
3. update page-body links and component `href` props with relative paths;
4. update absolute canonical `related` routes;
5. move authored `/de/` and `/sv/` mirrors and apply the coordination plan's
   affected-localized-mirror rule to every mirror affected by the batch;
6. update common-mistakes repair links, shared pages, documentation, tests,
   fixtures, and recorded length exceptions;
7. search the whole repository for the retired route;
8. run the batch quality gates before continuing.

## Quality Gates

Every batch must pass:

```bash
npm run quality
npm run build -- --base /jp-language-hub
npm run report:length
git diff --check
```

## Definition of Done

German finalization is complete only when:

- all German inventory rows have their approved disposition;
- the actual sidebar and routes match the Navigation Blueprint;
- the standalone `Active` page has been merged and removed;
- every retained and moved page has passed the existing-page audit;
- all planned overviews and detail pages exist at the approved routes;
- no old German route remains in source, navigation, metadata, localized
  mirrors, documentation, tests, or fixtures;
- every authored mirror affected by German finalization remains didactically
  equivalent or has been deliberately removed to canonical fallback;
- common-mistakes pages point to current canonical repair pages;
- all quality gates pass; and
- the German slice is ready for the cross-language Phase 5 Quality Check.
