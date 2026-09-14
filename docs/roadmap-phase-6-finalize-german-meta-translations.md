# Phase 6: Finalize Learn German Meta-Language Translations

## Status and Dependencies

**Status:** Planned. This plan starts only after the Learn English Phase 6
package is complete. The
[schema-terminology alignment](./roadmap-phase-6-align-schema-terminology.md)
corrects the canonical Learn German schemas beforehand, so this plan copies each
`columns` array verbatim and never translates it.

**Dependencies:** Phase 5 and its Whole-Tree Quality Check are complete. The
[Phase 6 coordination plan](./roadmap-phase-6-complete-meta-language-packages.md),
the completed Learn Swedish package, and the completed
[Learn English package](./roadmap-phase-6-finalize-english-meta-translations.md)
provide the package rules and proven workflow.

Execution state, route-level inventory, decisions, evidence, and resume
instructions belong in the
[Learn German implementation report](./roadmap-phase-6-finalize-german-meta-translations-implementation-report.md).

The Phase 5 hand-off recorded 82 canonical Learn German files and no authored
German- or Swedish-meta-language Learn German mirrors.

## Goal

Create complete authored German- and Swedish-meta-language packages for the
Learn German tree while keeping its English root-locale pages canonical.

The target package explains German grammar in natural German. It remains a
translation of the same reference tree, not a new German course or a license
to add extra topics.

## Owned Surface

- German- and Swedish-meta translations under
  `src/content/docs/de/learn/german/` and
  `src/content/docs/sv/learn/german/`
- translated Learn German overviews, grammar shelves, common mistakes,
  visible labels, QuickChecks, relative links, and related-topic labels
- the Learn German translation inventory and completion evidence

## Inventory and Execution Rules

Before translation, record one row per current canonical-page/meta-language
pair. Classify each as `verified existing`, `revise or retranslate`, or `fresh
translation`. The expected baseline is 164 fresh translations: 82 German-meta
and 82 Swedish-meta targets. Repository state at execution time is
authoritative.

Use idiomatic German and Swedish grammatical terms, but preserve the canonical
page's learner question, depth, examples, comparisons, warnings, and
self-check. Translate both target mirrors as one canonical-page package, while
reviewing the languages independently. Native-sounding target-language prose
is required; broader content is not.

## Implementation Buckets

### G1. Entry routes, cases, nouns, articles, and prepositions

- translate the Learn German and Grammar entry routes;
- translate cases as roles, individual case pages, articles/gender, noun forms,
  possession, and preposition decision paths;
- preserve the canonical ownership split among semantic role, form choice,
  case government, and noun phrase.

### G2. Pronouns, sentence structure, function words, and particles

- translate pronoun/role, main/subordinate-clause, question, negation, function-
  word, connector, word-formation, and particle-verb routes;
- keep position rules represented by the same schemas and preserve the
  boundaries around `nicht`, `kein`, verb brackets, and particle meaning.

### G3. Verbs and time forms

- translate Choosing Time Form before individual and contrast pages;
- translate present, perfect, preterite, past perfect, future, and future
  perfect with the canonical everyday-versus-reference weighting;
- keep formation and communicative choice distinct.

### G4. Verb patterns and voice

- translate auxiliaries, modals, modal meanings, infinitives, imperatives,
  passive, and active-versus-passive;
- preserve the canonical system-versus-choice and formation-versus-focus
  boundaries.

### G5. Adjectives, mood, politeness, conditions, and reports

- translate adjective endings, comparison, adverbs, Konjunktiv, `würde` forms,
  high-frequency forms, polite requests, conditions, and reported speech;
- keep advanced reference tails clearly separated from the practical core.

### G6. Common Mistakes and package completion

- translate English-to-German and Swedish-to-German diagnostics with their most
  specific canonical repair links;
- reconcile the inventory, review the German- and Swedish-meta trees as
  separate learner journeys, and prove that no fallback gap remains;
- record final evidence and hand the completed Phase 6 packages to Phase 7.

## Non-Goals

- Do not change Learn German routes, navigation, topic scope, or canonical
  English explanations.
- Do not create separate native-speaker grammars or add C-level coverage.
- Do not replace German target examples with explanatory paraphrases.
- Do not copy German explanation prose into the Swedish package or vice versa.
- Do not collapse separate canonical pages merely because German terminology
  can describe them together.

## Quality Gates

Every batch follows the shared
[Phase 6 quality gates](./roadmap-phase-6-complete-meta-language-packages.md#quality-gates).
The German completion review must additionally prove every current canonical
Learn German file has exactly one authored German-meta and one authored
Swedish-meta mirror. Each package must pass independent target-language
linguistic and didactic review.

## Definition of Done

- the current Learn German tree has complete authored German- and Swedish-meta
  packages;
- every inventory row and batch is complete in the implementation report;
- structural metadata, examples, components, links, and topic boundaries match
  the canonical source while visible explanation text is genuinely German;
- no untranslated canonical English explanatory fallback remains in either
  completed package; and
- shared automated gates plus independent German- and Swedish-language review
  pass.
