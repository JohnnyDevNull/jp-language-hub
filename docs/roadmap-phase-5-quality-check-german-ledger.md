# Phase 5 Quality Check — German Q3/Q4 Ledger

**Review date:** 2026-09-12
**Reviewer:** Independent whole-tree German Q3/Q4 review
**Scope:** All 82 canonical root-locale files under `src/content/docs/learn/german/`. This is a linguistic and didactic ledger only; route/sidebar/mirror reconciliation remains Q1/Q2/Q5.

## Verdict

**PASS after final recheck.** Coverage remains complete (82/82 routes read).
All initial findings and the one recheck language-markup regression are
resolved. No German Q3/Q4 linguistic or didactic blocker remains.

## Findings

| Priority | Route / location | Finding | Classification |
| --- | --- | --- | --- |
| P1 | `grammar/sentence-structure/questions.mdx:57-62` | `<MistakeBox>` labels `Du kommst heute?` incorrect. It is a valid colloquial confirmation question with rising intonation; `Kommst du heute?` is the neutral standard yes/no question. Constrain the claim to neutral standard word order or make the comparison a register/meaning distinction. | German implementation defect |
| P1 | `grammar/function-words-negation/nicht-vs-kein.mdx:53-59` | `<MistakeBox>` labels `Ich habe nicht einen Hund.` unconditionally incorrect. It is grammatical with contrastive focus, for example `..., sondern zwei`. State the neutral “no/not a dog” meaning explicitly or use a genuinely malformed form. | German implementation defect |
| P2 | `grammar/sentence-structure/verb-bracket.mdx:57-63` | `Ich muss arbeiten heute.` is marked/colloquial but not categorically ungrammatical. Teach the neutral middle-field order `Ich muss heute arbeiten` without presenting a valid marked order as a grammar error. | German implementation defect |
| P2 | `grammar/prepositions/prepositional-adverbs.mdx:48-54` | `Ich warte auf es.` is strongly non-idiomatic for an ordinary non-human antecedent, but the rule needs the stated scope (“normally/preferably for things or ideas”); `auf es` can occur under contrast. Keep `darauf` as the recommended repair, not an absolute grammatical ban. | German implementation defect |
| P2 | `grammar/cases/{accusative,cases-as-roles,dative,genitive,nominative}.mdx` and `grammar/prepositions/{accusative-prepositions,dative-prepositions,dependent-prepositions,genitive-prepositions,prepositions-and-case}.mdx` | These QuickChecks declare `answerLang="de"` but return English case labels such as `accusative`, `dative`, `genitive`, and `nominative`. Return `Akkusativ`, `Dativ`, `Genitiv`, `Nominativ` (or change the answer-language semantics consistently). | German implementation defect |

## Recheck History

| Initial finding | Recheck result |
| --- | --- |
| Questions P1 | **Resolved.** The box now explicitly limits its correction to a neutral standard yes/no question and acknowledges the colloquial confirmation-question reading. |
| Nicht vs kein P1 | **Resolved.** The box now limits the repair to the neutral “no dog” meaning and preserves the contrastive `nicht einen ..., sondern zwei ...` reading. |
| Verb bracket P2 | **Resolved.** The box now teaches neutral order and states that the former example can occur as marked contrast/afterthought. |
| Prepositional adverbs P2 | **Resolved.** The box now limits `darauf` to ordinary neutral reference to a thing/idea and acknowledges contrastive `auf es`. |
| QuickCheck-language P2 | **Resolved.** All ten case-label answers are now `Nominativ`, `Akkusativ`, `Dativ`, or `Genitiv`; no English label remains under `answerLang="de"`. |
| New recheck P2 | **Resolved.** All four parenthetical qualifications are now German (`als neutrale Standard-Ja-/Nein-Frage`, `mit der neutralen Bedeutung`, `in neutraler Wortstellung`, `bei einem gewöhnlichen neutralen Bezug auf eine Sache`), matching the `lang="de"` applied by `MistakeBox.astro`. |

## Route Ledger

`PASS` means the route met the Q3/Q4 rubric for linguistic accuracy, A1-B2
scope, canonical boundary, lookup answer, didactic order, component/markup
usage, QuickCheck, and related-topic intent, subject only to a finding listed
above.

| # | Canonical route source | Q3/Q4 |
| ---: | --- | --- |
| 1 | `common-mistakes/from-english.mdx` | PASS |
| 2 | `common-mistakes/from-swedish.mdx` | PASS |
| 3 | `common-mistakes/index.md` | PASS |
| 4 | `grammar/adjectives-adverbs/adjective-comparison.mdx` | PASS |
| 5 | `grammar/adjectives-adverbs/adjective-endings.mdx` | PASS |
| 6 | `grammar/adjectives-adverbs/adjectives-vs-adverbs.mdx` | PASS |
| 7 | `grammar/adjectives-adverbs/adverbs.mdx` | PASS |
| 8 | `grammar/adjectives-adverbs/index.mdx` | PASS |
| 9 | `grammar/cases/accusative.mdx` | PASS — resolved P2 |
| 10 | `grammar/cases/cases-as-roles.mdx` | PASS — resolved P2 |
| 11 | `grammar/cases/dative.mdx` | PASS — resolved P2 |
| 12 | `grammar/cases/genitive.mdx` | PASS — resolved P2 |
| 13 | `grammar/cases/index.md` | PASS |
| 14 | `grammar/cases/nominative.mdx` | PASS — resolved P2 |
| 15 | `grammar/function-words-negation/index.mdx` | PASS |
| 16 | `grammar/function-words-negation/negation.mdx` | PASS |
| 17 | `grammar/function-words-negation/negative-pronouns-and-adverbs.mdx` | PASS |
| 18 | `grammar/function-words-negation/nicht-placement.mdx` | PASS |
| 19 | `grammar/function-words-negation/nicht-vs-kein.mdx` | PASS — resolved P1 |
| 20 | `grammar/index.md` | PASS |
| 21 | `grammar/mood-politeness-reports/haette-waere-koennte.mdx` | PASS |
| 22 | `grammar/mood-politeness-reports/index.mdx` | PASS |
| 23 | `grammar/mood-politeness-reports/konjunktiv-i.mdx` | PASS |
| 24 | `grammar/mood-politeness-reports/konjunktiv-ii.mdx` | PASS |
| 25 | `grammar/mood-politeness-reports/polite-requests.mdx` | PASS |
| 26 | `grammar/mood-politeness-reports/reported-speech.mdx` | PASS |
| 27 | `grammar/mood-politeness-reports/wuerde-forms.mdx` | PASS |
| 28 | `grammar/nouns-articles/articles-and-gender.mdx` | PASS |
| 29 | `grammar/nouns-articles/der-die-das.mdx` | PASS |
| 30 | `grammar/nouns-articles/ein-words.mdx` | PASS |
| 31 | `grammar/nouns-articles/index.md` | PASS |
| 32 | `grammar/nouns-articles/plural-nouns.mdx` | PASS |
| 33 | `grammar/prepositions/accusative-prepositions.mdx` | PASS — resolved P2 |
| 34 | `grammar/prepositions/dative-prepositions.mdx` | PASS — resolved P2 |
| 35 | `grammar/prepositions/dependent-prepositions.mdx` | PASS — resolved P2 |
| 36 | `grammar/prepositions/genitive-prepositions.mdx` | PASS — resolved P2 |
| 37 | `grammar/prepositions/index.md` | PASS |
| 38 | `grammar/prepositions/prepositional-adverbs.mdx` | PASS — resolved P2 |
| 39 | `grammar/prepositions/prepositions-and-case.mdx` | PASS — resolved P2 |
| 40 | `grammar/prepositions/two-way-prepositions.mdx` | PASS |
| 41 | `grammar/pronouns-roles/demonstrative-pronouns.mdx` | PASS |
| 42 | `grammar/pronouns-roles/indefinite-pronouns.mdx` | PASS |
| 43 | `grammar/pronouns-roles/index.mdx` | PASS |
| 44 | `grammar/pronouns-roles/personal-pronouns.mdx` | PASS |
| 45 | `grammar/pronouns-roles/possessive-pronouns.mdx` | PASS |
| 46 | `grammar/pronouns-roles/pronoun-case-choice.mdx` | PASS |
| 47 | `grammar/pronouns-roles/reflexive-pronouns.mdx` | PASS |
| 48 | `grammar/sentence-structure/coordinating-conjunctions.mdx` | PASS |
| 49 | `grammar/sentence-structure/index.md` | PASS |
| 50 | `grammar/sentence-structure/infinitive-clauses.mdx` | PASS |
| 51 | `grammar/sentence-structure/main-clause-verb-second.mdx` | PASS |
| 52 | `grammar/sentence-structure/questions.mdx` | PASS — resolved P1 |
| 53 | `grammar/sentence-structure/relative-clauses.mdx` | PASS |
| 54 | `grammar/sentence-structure/subordinate-clauses.mdx` | PASS |
| 55 | `grammar/sentence-structure/subordinating-conjunctions.mdx` | PASS |
| 56 | `grammar/sentence-structure/verb-bracket.mdx` | PASS — resolved P2 |
| 57 | `grammar/verb-patterns-voice/active-vs-passive.mdx` | PASS |
| 58 | `grammar/verb-patterns-voice/imperative.mdx` | PASS |
| 59 | `grammar/verb-patterns-voice/index.mdx` | PASS |
| 60 | `grammar/verb-patterns-voice/infinitive-with-zu.mdx` | PASS |
| 61 | `grammar/verb-patterns-voice/infinitive-without-zu.mdx` | PASS |
| 62 | `grammar/verb-patterns-voice/modal-verbs-meaning.mdx` | PASS |
| 63 | `grammar/verb-patterns-voice/modal-verbs.mdx` | PASS |
| 64 | `grammar/verb-patterns-voice/passive.mdx` | PASS |
| 65 | `grammar/verbs-time-forms/choosing-future-forms.mdx` | PASS |
| 66 | `grammar/verbs-time-forms/choosing-time-form.mdx` | PASS |
| 67 | `grammar/verbs-time-forms/future-perfect.mdx` | PASS |
| 68 | `grammar/verbs-time-forms/index.mdx` | PASS |
| 69 | `grammar/verbs-time-forms/past-perfect.mdx` | PASS |
| 70 | `grammar/verbs-time-forms/perfect-tense.mdx` | PASS |
| 71 | `grammar/verbs-time-forms/present-tense-for-future.mdx` | PASS |
| 72 | `grammar/verbs-time-forms/present-tense.mdx` | PASS |
| 73 | `grammar/verbs-time-forms/present-vs-perfect-vs-preterite.mdx` | PASS |
| 74 | `grammar/verbs-time-forms/preterite.mdx` | PASS |
| 75 | `grammar/verbs-time-forms/werden-future.mdx` | PASS |
| 76 | `grammar/word-formation-particles/compound-nouns.mdx` | PASS |
| 77 | `grammar/word-formation-particles/index.mdx` | PASS |
| 78 | `grammar/word-formation-particles/inseparable-prefix-verbs.mdx` | PASS |
| 79 | `grammar/word-formation-particles/particle-verbs-vs-plain-verbs.mdx` | PASS |
| 80 | `grammar/word-formation-particles/particle-verbs.mdx` | PASS |
| 81 | `grammar/word-formation-particles/separable-verbs.mdx` | PASS |
| 82 | `index.md` | PASS |

## Coverage Totals

| Status | Routes |
| --- | ---: |
| Read | 82 / 82 |
| PASS without prior finding | 67 |
| PASS after resolved finding | 15 |
| Open P1 finding | 0 |
| Open P2 finding | 0 |

The initial P2 total counted the 10 case-label QuickCheck routes individually
plus the three qualified-claim routes. The later language-markup regression is
also resolved. Fixes preserved the frozen Blueprint and Inventory; no route,
shelf, merge, or scope redesign was made by this review.
