# Phase 6: Finalize Learn English Meta-Language Translations

## Status and Dependencies

**Status:** Planned. This plan starts only after the Learn Swedish Phase 6
package and the
[schema-terminology alignment](./roadmap-phase-6-align-schema-terminology.md)
are complete. Canonical Learn English schemas are corrected there, so this
plan copies each `columns` array verbatim and never translates it.

**Dependencies:** Phase 5 and its Whole-Tree Quality Check are complete. The
[Phase 6 coordination plan](./roadmap-phase-6-complete-meta-language-packages.md)
and the completed
[Learn Swedish plan](./roadmap-phase-6-finalize-swedish-meta-translations.md)
provide the package rules and proven workflow.

Execution state, route-level inventory, decisions, evidence, and resume
instructions belong in the
[Learn English implementation report](./roadmap-phase-6-finalize-english-meta-translations-implementation-report.md).

The Phase 5 hand-off recorded 66 canonical Learn English files and no authored
German- or Swedish-meta-language Learn English mirrors.

## Goal

Create complete authored German- and Swedish-meta-language packages for the
Learn English tree while keeping the English root-locale pages canonical.

## Owned Surface

- German- and Swedish-meta translations under
  `src/content/docs/de/learn/english/` and
  `src/content/docs/sv/learn/english/`
- translated Learn English overviews, grammar shelves, common mistakes,
  visible labels, QuickChecks, relative links, and related-topic labels
- the Learn English translation inventory and completion evidence

## Inventory and Execution Rules

Before translation, record one row per current canonical-page/meta-language
pair. Classify each as `verified existing`, `revise or retranslate`, or `fresh
translation`. The expected baseline is 132 fresh translations: 66 German-meta
and 66 Swedish-meta targets. Repository state at execution time is
authoritative.

Translate by coherent learner question rather than raw file count. Establish
each overview's German and Swedish decision paths before or with its detail
pages. Translate both target mirrors as one canonical-page package, while
reviewing the languages independently. Preserve English examples and their
`lang="en"` markup while translating the surrounding explanation naturally.

## Implementation Buckets

### E1. Entry, sentence structure, questions, and negation

- translate the Learn English and Grammar entry routes;
- translate sentence order, subordinate and relative clauses, adverb placement,
  questions/do-support, negation, and polarity choices;
- preserve the ownership split among sentence frame, auxiliaries, question
  formation, and ordinary negation.
- deliver and review each route in both German and Swedish meta language.

### E2. Nouns, articles, quantifiers, pronouns, and roles

- translate article, countability, plural, possession, quantifier, and pronoun
  decision paths;
- explain English form choices idiomatically in German without importing a
  German-style case taxonomy into the learning tree.

### E3. Verbs and time forms

- translate Choosing Time Form before the individual and contrast pages;
- preserve distinctions among tense, aspect, completed events, plans, and
  reference-tail future forms;
- keep formation pages distinct from contrast and decision pages.

### E4. Verb patterns, voice, mood, and reports

- translate auxiliaries, modals, gerunds/infinitives, imperative, passive,
  active-versus-passive, conditionals, politeness, and reported speech;
- preserve the canonical boundaries among system, form, and communicative
  choice.

### E5. Modifiers, prepositions, connectors, and word formation

- translate adjectives/adverbs, comparison, preposition groups, connectors,
  phrasal verbs, and word families;
- keep functional choice paths concise rather than turning translations into
  exhaustive lists.

### E6. Common Mistakes and package completion

- translate German-to-English and Swedish-to-English diagnostics while keeping
  their canonical repair targets;
- reconcile the inventory, review the German- and Swedish-meta trees as
  separate learner journeys, and prove that no fallback gap remains;
- record final evidence and hand off to the Learn German plan.

## Non-Goals

- Do not change Learn English routes, navigation, topic scope, or canonical
  English explanations.
- Do not create separate German- or Swedish-facing English course structures.
- Do not translate English example sentences into the explanation language.
- Do not copy German explanation prose into the Swedish package or vice versa.
- Do not use Common Mistakes pages to duplicate complete grammar explanations.

## Quality Gates

Every batch follows the shared
[Phase 6 quality gates](./roadmap-phase-6-complete-meta-language-packages.md#quality-gates).
The English completion review must additionally prove every current canonical
Learn English file has exactly one authored German-meta and one authored
Swedish-meta mirror. Each package must pass independent target-language
linguistic and didactic review.

## Definition of Done

- the current Learn English tree has complete authored German- and Swedish-meta
  packages;
- every inventory row and batch is complete in the implementation report;
- structural metadata, examples, components, links, and topic boundaries match
  the canonical source while visible explanation text is genuinely German;
- no untranslated canonical English explanatory fallback remains in either
  completed package; and
- shared automated gates plus independent German- and Swedish-language review
  pass.
