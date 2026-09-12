# Phase 5: Quality Check

## Status and Dependencies

**Status:** Agent-ready; blocked until completion of:

1. [Phase 5: Finalize English](./roadmap-phase-5-finalize-english.md)
2. [Phase 5: Finalize German](./roadmap-phase-5-finalize-german.md)

This is the final Phase 5 gate before Phase 6 translation work. It verifies the
finished system; it does not create another navigation design.

## Goal

Prove that the canonical Swedish-, English-, and German-learning trees form one
coherent, practical A1-B2 reference system and that the implemented routes,
navigation, content, metadata, links, and existing localized mirrors agree.

## Sources of Truth

- the [Phase 5 coordination plan](./roadmap-phase-5-align-grammar-ia.md) owns
  program scope, order, gates, and Definition of Done
- the [Navigation Blueprint](./roadmap-phase-5-navigation-blueprint.md) owns
  visible shelves, target route names, page order, and explicit
  language-specific deviations
- the [Topic Inventory](./roadmap-phase-5-topic-inventory.md) owns
  current-to-target mappings, source-page dispositions, implementation
  priority, and A1-B2 coverage
- the three language-finalization plans own their content boundaries and
  implementation evidence
- `docs/rules/` remains authoritative for engineering, metadata, and didactics

The Quality Check must report disagreement between these sources. It must not
silently choose one or invent a replacement structure.

## Scope

Review:

- all canonical root-locale pages in the three learning-language trees
- all routes represented by the Topic Inventory, including the Swedish Numbers
  move outside Grammar
- Swedish practical entry paths affected by Phase 5 grammar work
- the complete learning-language sidebar configuration
- page-body links, `related` metadata, overview routes, and shared-page links
- authored `/de/` and `/sv/` mirrors affected by any Phase 5 route, scope,
  structure, example, warning, self-check, or related-topic change
- route references in documentation, tests, scripts, fixtures, and recorded
  length exceptions

## Non-Goals and Phase 7 Boundary

- Do not begin broad meta-language translation.
- Do not review fallback-rendered English pages as though they were authored
  translations.
- Do not perform Phase 7's complete package-wide review of translated pages
  untouched by Phase 5.
- Do not reopen the approved IA for a preference-level improvement.
- Do not add unrelated grammar topics during final QA.

Phase 5 restores structural and didactic equivalence for every authored mirror
affected by its own changes. Phase 7 later checks the complete translated
meta-language packages, including pages untouched by Phase 5, after those
translations exist.

## Finding Policy

Classify every finding before changing anything:

- **language-specific implementation defect:** return it to the relevant
  language-finalization plan and re-run that plan's final gate
- **cross-language or shared-system defect:** fix it within this Quality Check
- **baseline contradiction:** stop and explicitly reopen the affected Phase 5
  planning decision
- **later enhancement:** record it outside Phase 5 without blocking completion

No finding may change navigation, merge or split a page, or add scope without
updating the authoritative Blueprint and Inventory first.

## Review Packages

### Q1. Inventory and route reconciliation

- derive all Phase-5-owned routes from the filesystem
- confirm that every historical current route is represented exactly once in
  the Inventory
- confirm that every non-merge target route is unique
- permit a repeated target only for an explicit `merge` source row
- confirm that every Blueprint entry has a matching inventory target
- confirm that every target route exists and every retired route is absent
- confirm that `keep` routes remain while the old routes of every `move`,
  `move, rename`, `move, reference`, and `merge` are absent
- verify that action labels match the implemented state

### Q2. Navigation and architecture

- compare the actual sidebar order with the Blueprint line by line
- verify that every visible shelf has its required overview
- verify that P0 children are never hidden behind an unfinished later-priority
  overview
- verify the explicit German questions/negation deviation
- verify Swedish practical-entry links without creating duplicate grammar homes
- confirm that Common Mistakes remains outside Grammar for every language
- confirm strict separation of meta, learning, and comparison languages

### Q3. Whole-tree linguistic review

Review every canonical target page for:

- accurate grammar and idiomatic examples
- practical A1-B2 relevance
- language-specific depth rather than artificial page symmetry
- complete treatment of the page's declared learner question
- no academic or C-level expansion without an everyday need
- correct transfer claims between German, English, and Swedish
- correct distinctions for time, aspect, mood, voice, definiteness, case,
  pronouns, word order, conditions, and reported information

Re-check the binding adjacent-topic boundaries from each language plan. A
general page, form page, contrast page, and production entry path must not
quietly become competing canonical explanations.

### Q4. Whole-tree didactic review

Review every canonical target page for:

- an answer that can be found in seconds
- compliant page order with no empty sections added for symmetry
- concise and useful overview decision paths
- `SentenceSchema` for position rules
- `LanguageComparison` only for actual comparison
- examples marked with the correct language
- production-oriented `QuickCheck` prompts where required by the page type
- specific mistake diagnosis and useful related-topic progression
- no wall of text and no stub that exists only to fill a shelf
- a justified disposition for every rendered page over the length budget

### Q5. Metadata, links, and mirrors

- validate `metaLanguage`, `grammarLanguage`, `comparisonLanguages`, `levels`,
  controlled tags, and `related`
- verify that page-body and component links are relative
- verify that `related` remains absolute and canonical
- verify that every authored localized page mirrors an existing canonical route
- verify structural metadata equality between canonical and localized files
- verify that every authored mirror affected by Phase 5 has one disposition
  allowed by the coordination plan's
  [affected-localized-mirror rule](./roadmap-phase-5-align-grammar-ia.md#affected-localized-mirrors-and-phase-7-boundary)
- compare every affected surviving mirror with the changed canonical page and
  confirm equivalent scope, examples, warnings, self-checks, and related-topic
  intent
- search the repository for every old canonical path
- inspect generated output for base-less internal `href` values

### Q6. Final system gate

- run all automated validation commands
- inspect the final length report and update documented exceptions only for a
  real didactic reason
- confirm that the can-do checklist has no unresolved disposition
- confirm that no duplicate or near-duplicate learner topic remains
- confirm that the three grammar roots answer comparable learner questions
  through understandable, language-appropriate paths
- update Phase 5 status only after every finding is resolved

## Required Commands

```bash
npm run quality
npm run build -- --base /jp-language-hub
npm run report:length
git diff --check
```

Also run targeted repository checks that prove:

- every historical source route is represented exactly once in the Inventory
- every unique target route is present exactly once in the implemented tree
- every moved, renamed, reference-moved, or merged old route is absent
- every permitted merge is explicit
- every Blueprint target is represented by the Inventory
- the Inventory totals are recalculated from its rows and remain accurate
- no unresolved planning marker such as `TBD`, `TODO`, `maybe`, or
  `audit/create` remains
- no retired canonical route remains outside historical records
- no generated internal link omits the `/jp-language-hub` base path

## Definition of Done

Phase 5 passes the Quality Check only when:

- all three language-finalization plans are complete;
- the implemented trees match the Blueprint and Topic Inventory;
- every canonical target page has passed linguistic and didactic review;
- no unjustified duplicate, parallel structure, or orphan route remains;
- metadata, links, sidebars, shared pages, and authored mirrors agree;
- no authored translation affected by Phase 5 teaches an obsolete canonical
  page;
- the A1-B2 can-do checklist is fully supported by usable canonical paths;
- every automated and manual gate passes; and
- Phase 6 can begin without multiplying unresolved IA or content defects
  through translation.
