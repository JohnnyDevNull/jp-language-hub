# Phase 5 Quality Check — Cross-Language and Q6 Ledger

## Scope and verdict

**Scope:** independent read-only review of all canonical root-locale Learn
Swedish, Learn English, and Learn German trees, with an exhaustive review of
every `LanguageComparison` block, the 13-row A1-B2 can-do matrix, adjacent
canonical ownership, Common Mistakes placement, and reference-tail roles.

**Verdict: PASS.** The 177
comparison examples are linguistically sound; metadata and component slots now
agree on all 87 comparison-bearing pages; the German language markup is
correct; and the German reference tail follows the Blueprint. The
cross-language/Q6 review and the independent Q1, Q2, Q5, automated-gate,
generated-output, and mirror reviews are complete.

The pre-review limitations retained below are historical snapshots from before
the final closure. They are not current open findings; the final Q6 result is
recorded in the completion section.

This ledger neither changes the frozen Blueprint/Inventory nor authorizes a
new route, shelf, merge, or language package.

## Evidence and method

- Canonical files reviewed: Swedish 90, English 66, German 82; total **238**.
- Component search: **87** pages contain **177** `LanguageComparison` blocks
  (Swedish 56/132, English 27/40, German 4/5).
- Each component's meaning, sentence equivalence, language selection, title,
  and slots were reviewed. The structural scan confirmed **177/177** blocks
  have exactly the slots selected by their `languages` prop; **87/87** pages
  import the shared component.
- The route-to-`grammarLanguage` scan passed **238/238**. This confirms the
  learning-language axis but does not replace the metadata finding below.
- Historical pre-review note: this pass originally preceded Q1, Q2, Q5,
  automated command gates, generated output, and authored-mirror closure. Those
  owning review packages are now complete.

## Resolved findings and recheck evidence

| Priority | Area | Exact evidence | Finding and required correction |
| --- | --- | --- | --- |
| P1, resolved | English comparison metadata | `src/content/docs/learn/english/grammar/verb-patterns-voice/passive.mdx:4-12,40`; `src/content/docs/learn/english/grammar/verb-patterns-voice/active-vs-passive.mdx:4-11,34` | Both pages now declare `comparisonLanguages: [de, en]`, exactly matching their focused `languages={['de', 'en']}` component. |
| P2, resolved | German language markup | `src/content/docs/learn/german/grammar/sentence-structure/questions.mdx:57-65`; `grammar/function-words-negation/nicht-vs-kein.mdx:51-59`; `grammar/sentence-structure/verb-bracket.mdx:56-63`; `grammar/prepositions/prepositional-adverbs.mdx:51-58` | Each `MistakeBox` qualification is now German, matching the component's `lang="de"` coverage. `MistakeBox.astro` applies that prop to the complete incorrect example, so this is both source- and render-semantically correct. |
| P1, resolved | German reference-tail navigation | Blueprint `docs/roadmap-phase-5-navigation-blueprint.md:368-376,400-407`; actual `astro.config.mjs:293-303` | The shelf now ends `prepositional-adverbs`, `dependent-prepositions`, `genitive-prepositions`; the `REF` Genitive Prepositions page is again the visible reference tail as approved. |

The exhaustive recheck found **87 comparison-bearing pages and 177
`LanguageComparison` usages**. All 177 blocks have exactly the selected slots,
and the union of their selected languages equals `comparisonLanguages` on all
87 owning pages. No cross-language content, metadata, markup, or tail-order
finding remains open in this ledger or the final Quality Check.

## Exhaustive comparison-bearing page ledger

`PASS` below means the comparison claims and component use on that page were
reviewed and are correct. The metadata omission above applies in addition to
the component-content PASS for its two English pages.

### English — 27 pages / 40 blocks

| Path | Blocks | Result |
| --- | ---: | --- |
| `learn/english/common-mistakes/from-german.mdx` | 2 | PASS |
| `learn/english/common-mistakes/from-swedish.mdx` | 1 | PASS |
| `learn/english/grammar/nouns-articles/articles.mdx` | 1 | PASS |
| `learn/english/grammar/nouns-articles/countable-and-uncountable-nouns.mdx` | 2 | PASS |
| `learn/english/grammar/nouns-articles/plural-nouns.mdx` | 1 | PASS |
| `learn/english/grammar/nouns-articles/possession.mdx` | 1 | PASS |
| `learn/english/grammar/pronouns-roles/sentence-roles-and-pronoun-case.mdx` | 1 | PASS |
| `learn/english/grammar/questions-negation/any-vs-no.mdx` | 1 | PASS |
| `learn/english/grammar/questions-negation/negation.mdx` | 1 | PASS |
| `learn/english/grammar/questions-negation/questions-and-do-support.mdx` | 2 | PASS |
| `learn/english/grammar/sentence-structure/adverb-placement.mdx` | 1 | PASS |
| `learn/english/grammar/sentence-structure/relative-clauses.mdx` | 1 | PASS |
| `learn/english/grammar/sentence-structure/sentence-order.mdx` | 1 | PASS |
| `learn/english/grammar/sentence-structure/subordinate-clauses.mdx` | 1 | PASS |
| `learn/english/grammar/verb-patterns-voice/active-vs-passive.mdx` | 1 | PASS; metadata P1 |
| `learn/english/grammar/verb-patterns-voice/passive.mdx` | 1 | PASS; metadata P1 |
| `learn/english/grammar/verbs-time-forms/future-perfect.mdx` | 2 | PASS |
| `learn/english/grammar/verbs-time-forms/future-progressive.mdx` | 2 | PASS |
| `learn/english/grammar/verbs-time-forms/going-to-future.mdx` | 2 | PASS |
| `learn/english/grammar/verbs-time-forms/past-perfect.mdx` | 1 | PASS |
| `learn/english/grammar/verbs-time-forms/present-perfect.mdx` | 2 | PASS |
| `learn/english/grammar/verbs-time-forms/present-progressive.mdx` | 2 | PASS |
| `learn/english/grammar/verbs-time-forms/simple-past-vs-present-perfect.mdx` | 2 | PASS |
| `learn/english/grammar/verbs-time-forms/simple-past.mdx` | 1 | PASS |
| `learn/english/grammar/verbs-time-forms/simple-present-vs-present-progressive.mdx` | 3 | PASS |
| `learn/english/grammar/verbs-time-forms/simple-present.mdx` | 2 | PASS |
| `learn/english/grammar/verbs-time-forms/will-future.mdx` | 2 | PASS |

### German — 4 pages / 5 blocks

| Path | Blocks | Result |
| --- | ---: | --- |
| `learn/german/common-mistakes/from-english.mdx` | 1 | PASS |
| `learn/german/common-mistakes/from-swedish.mdx` | 1 | PASS |
| `learn/german/grammar/verb-patterns-voice/active-vs-passive.mdx` | 2 | PASS |
| `learn/german/grammar/word-formation-particles/particle-verbs.mdx` | 1 | PASS |

### Swedish — 56 pages / 132 blocks

| Area / paths | Blocks | Result |
| --- | ---: | --- |
| `common-mistakes/from-english.mdx`; `common-mistakes/from-german.mdx` | 7 + 8 | PASS |
| `grammar/adjectives-adverbs/{adjective-comparison,adverbs,agreement}.mdx` | 2 + 1 + 3 | PASS |
| `grammar/mood-politeness-reports/{conditionals,reported-speech}.mdx` | 1 + 1 | PASS |
| `grammar/nouns-articles/{en-ett,noun-forms,plural-overview,possession}.mdx` | 2 + 3 + 2 + 1 | PASS |
| `grammar/prepositions-function-words/{connectors,dar-har-adverbs,prepositions}.mdx` | 2 + 2 + 3 | PASS |
| `grammar/pronouns-roles/{demonstratives-har-dar,man-varandra-varsin,nagon-nagot-ingen-inget,personal-pronouns,possessive-pronouns,reflexive-pronouns,relative-pronouns,sin-sitt-sina}.mdx` | 2 + 2 + 2 + 1 + 3 + 1 + 3 + 2 | PASS |
| `grammar/questions-negation/{negation,question-words,questions}.mdx` | 2 + 2 + 1 | PASS |
| `grammar/sentence-structure/{basic-word-order,biff,inte-placement,inversion,subordinate-clauses,v2}.mdx` | 1 + 2 + 2 + 2 + 1 + 2 | PASS |
| `grammar/verb-patterns-voice/{active-vs-passive,imperative,modal-verbs,particle-verbs,passive}.mdx` | 1 + 1 + 1 + 2 + 2 | PASS |
| `grammar/verbs-time-forms/{future-forms,perfect,present,preterite,tense-perspectives,verb-forms}.mdx` | 2 + 2 + 3 + 2 + 6 + 3 | PASS |
| `sentence-patterns/{agreeing-and-disagreeing,asking-for-directions,at-home,conditions-and-consequences,introducing-yourself,keeping-a-conversation-going,opinions-and-uncertainty,ordering-food,polite-requests,reasons-and-examples,shopping-and-paying,small-talk,travel-and-transport}.mdx` | 3 + 2 + 2 + 4 + 2 + 3 + 3 + 2 + 2 + 4 + 2 + 2 + 2 | PASS |
| `vocabulary/telling-time.mdx` | 5 | PASS |

## Can-do coverage and comparable learner questions

The Inventory's 13 can-do rows now have a usable canonical route in each
learning language. Comparable means the same learner need is findable; it does
not require identical morphology or shelf depth.

| Can-do area | Swedish canonical entry | English canonical entry | German canonical entry | Result |
| --- | --- | --- | --- | --- |
| Ordinary statements and clause order | `sentence-structure/v2` | `sentence-structure/sentence-order` | `sentence-structure/main-clause-verb-second` | PASS |
| Questions and negatives | `questions-negation/{questions,negation}` | `questions-negation/{questions-and-do-support,negation}` | `sentence-structure/questions` + `function-words-negation/negation` | PASS; intentional German split |
| Everyday commands | `verb-patterns-voice/imperative` | `verb-patterns-voice/imperative` | `verb-patterns-voice/imperative` | PASS |
| Noun phrases, articles, number, possession | `nouns-articles/{en-ett,noun-forms,possession}` | `nouns-articles/{articles,plural-nouns,possession}` | `nouns-articles/{articles-and-gender,plural-nouns}` | PASS |
| Pronouns and sentence roles | `pronouns-roles/personal-pronouns` | `pronouns-roles/sentence-roles-and-pronoun-case` | `pronouns-roles/pronoun-case-choice` | PASS |
| Present, past, plans, future | `verbs-time-forms/tense-perspectives` | `verbs-time-forms/choosing-time-form` | `verbs-time-forms/choosing-time-form` | PASS |
| Ability, obligation, wishes, requests | `verb-patterns-voice/modal-verbs` | `verb-patterns-voice/modal-verbs` | `verb-patterns-voice/modal-verbs-meaning` | PASS |
| Describe and compare | `adjectives-adverbs/{agreement,adjective-comparison}` | `adjectives-adverbs/{adjectives,adjective-comparison}` | `adjectives-adverbs/{adjective-endings,adjective-comparison}` | PASS |
| Place, time, dependent prepositions | `prepositions-function-words/prepositions` | `prepositions-function-words/{place-and-direction,time-prepositions,dependent-prepositions}` | `prepositions/{prepositions-and-case,dependent-prepositions}` | PASS; the historical sidebar-order finding is resolved |
| Reasons, conditions, subordinate information | `prepositions-function-words/connectors` + `mood-politeness-reports/conditionals` | `prepositions-function-words/connectors` + `mood-politeness-reports/conditionals` | `sentence-structure/{coordinating-conjunctions,subordinating-conjunctions}` | PASS |
| Opinions, certainty, possibility, hypothetical meaning | `sentence-patterns/opinions-and-uncertainty` + `mood-politeness-reports/conditionals` | `mood-politeness-reports/conditionals` | `mood-politeness-reports/{konjunktiv-ii,haette-waere-koennte}` | PASS |
| Passive and reported information | `verb-patterns-voice/passive` + `mood-politeness-reports/reported-speech` | `verb-patterns-voice/passive` + `mood-politeness-reports/reported-speech` | `verb-patterns-voice/passive` + `mood-politeness-reports/reported-speech` | PASS |
| Transfer diagnostics | `common-mistakes/{from-german,from-english}` | `common-mistakes/{from-german,from-swedish}` | `common-mistakes/{from-english,from-swedish}` | PASS |

## Ownership, practical-entry, and tail checks

- Adjacent ownership is coherent: voice formation stays on `passive` and
  information-focus choice on `active-vs-passive`; ordinary negation remains
  separate from polarity/negative-noun-phrase choices; time-form decision hubs
  link to form and contrast pages rather than competing with them.
- Swedish `sentence-patterns/conditions-and-consequences` and
  `sentence-patterns/polite-requests` remain production routes that link to
  their grammar-system counterparts. They do not become duplicate grammar
  homes. Swedish practical, vocabulary, and cheat-sheet routes likewise
  preserve their non-grammar role.
- All three Common Mistakes groups are top-level sidebar groups outside
  Grammar (`astro.config.mjs:177-184,341-347,471-477`).
- English `future-progressive` and `future-perfect`, plus German
  `future-perfect` and `konjunktiv-i`, remain visible reference tails at the
  end of their approved shelves. The historical German
  `genitive-prepositions` tail-order finding was resolved in the final sidebar
  recheck; it is no longer an open case.
- The explicit German questions/negation deviation is present: questions are
  under Sentence Structure and negation under Function Words & Negation, with
  the grammar overview connecting the shared learner need. This is an approved
  language-specific path, not a missing shared shelf.

## Q6 completion

1. The cross-language recheck, Q1/Q2/Q5 evidence, and final system gates are
   complete; all recorded Quality Check findings are resolved.
2. Phase 5 is complete. Phase 6 is unblocked but has not started.
