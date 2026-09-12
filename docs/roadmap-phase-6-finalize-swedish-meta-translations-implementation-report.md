# Phase 6: Learn Swedish Meta-Language Translations — Implementation Report

## Current State

**Last updated:** 2026-09-12

**Overall status:** Bucket 1 (S1/S2, including focused S4 repairs) is stable
and passed its final quality gates. S5/S6 are complete and passed their final
quality gates.

**Stable checkpoint:** The current filesystem reconciles to 90 canonical
Learn Swedish files, 90 German-meta target rows, and 90 Swedish-meta target
rows. The eight initially authored targets have completed S1/S2: three remain
`verified existing`, and five are `revise or retranslate` after focused
target-language repairs. S5/S6 adds 26 `fresh translation` targets with
execution `complete`; the first 14 S7 targets are now implemented, leaving 132
fresh targets pending for S7–S10. Shared gates pass at this partial S7
checkpoint: quality, the base-path build, length report, and `git diff --check`.

**Current bucket:** S7 is `in progress`. The pronouns/roles Kleingruppe is
implemented: exactly 14 target files exist (7 routes × 2 locales), including
the relative-pronoun and demonstratives pair. S8 remains pending at 17 canonical
routes / 34 targets, S9
remains pending at 31 / 62, and S10 remains pending at 3 / 6.

**Next safe step:** Start the first still-pending S7 route in inventory order:
`learn/swedish/grammar/nouns-articles/en-ett.mdx` (both `de` and `sv` targets),
then reconcile immediately. The final S7 semantic/language bucket review is
still outstanding.

**Worktree and commit baseline:** Baseline is commit `2ca5327` on `main`, one
commit ahead of `origin/main`. The current worktree contains the report plus
the completed S5/S6 files; the rolled-back S7/S8 wave left zero target files,
and S9 produced no files. Canonical Learn Swedish sources remain unchanged.

**Stop/resume state:** Safe stop after the fourth implemented S7 Kleingruppe
and full shared-gate pass. On resume, start exactly at
`grammar/nouns-articles/en-ett.mdx`, reconcile its two locale targets, and
continue with 1–3 canonical routes / 2–6 targets per unit. The final S7
semantic review remains pending. S8–S10 remain pending.

**Planning baseline:** 90 canonical Learn Swedish files, four authored
German-meta mirrors, and four authored Swedish-meta mirrors at the Phase 5
hand-off. All eight authored mirrors were accepted as didactically equivalent;
the Phase 6 inventory must verify them against the current sources.

## Sources of Truth

1. The [Learn Swedish plan](./roadmap-phase-6-finalize-swedish-meta-translations.md)
   owns scope, buckets, order, and acceptance criteria.
2. The [Phase 6 coordination plan](./roadmap-phase-6-complete-meta-language-packages.md)
   owns shared rules, package order, and gates.
3. The Phase 5 artifacts remain authoritative for canonical routes,
   navigation, and topic ownership.
4. This report owns inventory rows, execution status, evidence, decisions,
   blockers, and resume instructions.

## Translation Inventory

Create one row per canonical-page/meta-language pair before translation starts. The inventory is generated from the current filesystem and deliberately preserves each canonical extension (`.md` or `.mdx`) in the mirrored target path.

Disposition values: `verified existing`, `revise or retranslate`, or `fresh translation`.
Execution values: `pending`, `in progress`, `complete`, or `blocked`.

### Inventory summary

- Canonical Learn Swedish files: **90**.
- Target pairs: **180** (90 German-meta, 90 Swedish-meta).
- Existing authored targets at inventory start: **8** (4 per locale), provisionally `verified existing`; execution remains `pending` until S1/S2.
- Fresh translation targets: **172** (86 per locale).
- Authored targets after S5/S6: **34** (17 per locale); missing authored targets: **146**; duplicate target rows: **0**; orphan authored targets: **0**.
- Reconciliation basis: canonical set and target set compared by relative route including extension; no missing canonical rows, duplicate rows, or authored target paths outside the 90-route canonical set.

| Canonical route | Target meta language | Authored target | Disposition | Execution | Evidence / follow-up |
| --- | --- | --- | --- | --- | --- |
| `learn/swedish/cheat-sheets/adverbs.md` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/en-ett-adjectives.md` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/index.md` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/noun-forms.md` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/numbers.md` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/particle-verbs.md` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/question-words.md` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/relative-pronouns.md` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/v2-biff.md` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/verb-forms.md` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/common-mistakes/from-english.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/common-mistakes/from-german.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/common-mistakes/index.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/adjectives-adverbs/adjective-comparison.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/adjectives-adverbs/adverbs.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/adjectives-adverbs/agreement.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/adjectives-adverbs/index.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/index.md` | `de` | `src/content/docs/de/learn/swedish/grammar/index.md` | fresh translation | complete | S5 reviewed; metadata parity, translated navigation labels and relative links verified; final gates pass. |
| `learn/swedish/grammar/mood-politeness-reports/conditionals.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/mood-politeness-reports/index.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/mood-politeness-reports/reported-speech.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/nouns-articles/en-ett.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/nouns-articles/index.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/nouns-articles/noun-forms.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/nouns-articles/plural-overview.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/nouns-articles/possession.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/prepositions-function-words/connectors.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/prepositions-function-words/dar-har-adverbs.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/prepositions-function-words/index.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/prepositions-function-words/index.mdx` | fresh translation | complete | S7 overview Kleingruppe exists; 3 routes × 2 locales reconciled, final S7 semantic review pending |
| `learn/swedish/grammar/prepositions-function-words/prepositions.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/pronouns-roles/demonstratives-har-dar.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/pronouns-roles/demonstratives-har-dar.mdx` | fresh translation | complete | Full DE/SV pair exists; metadata, components, counts and Swedish examples reconciled; shared S7 gates pass |
| `learn/swedish/grammar/pronouns-roles/index.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/pronouns-roles/index.mdx` | fresh translation | complete | Pronouns/roles Kleingruppe exists; 2 locales × 2 routes reconciled, final S7 semantic review pending |
| `learn/swedish/grammar/pronouns-roles/man-varandra-varsin.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/pronouns-roles/nagon-nagot-ingen-inget.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/pronouns-roles/personal-pronouns.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/pronouns-roles/personal-pronouns.mdx` | fresh translation | complete | Pronouns/roles Kleingruppe exists; 2 locales × 2 routes reconciled, final S7 semantic review pending |
| `learn/swedish/grammar/pronouns-roles/possessive-pronouns.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/pronouns-roles/possessive-pronouns.mdx` | fresh translation | complete | Full DE/SV pair exists; metadata, components, counts and Swedish examples reconciled; `validate:links` PASS across 288 docs pages |
| `learn/swedish/grammar/pronouns-roles/reflexive-pronouns.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/pronouns-roles/reflexive-pronouns.mdx` | fresh translation | complete | Full DE/SV pair exists; metadata, components, counts and Swedish examples reconciled; final S7 semantic review pending |
| `learn/swedish/grammar/pronouns-roles/relative-pronouns.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/pronouns-roles/relative-pronouns.mdx` | fresh translation | complete | Full DE/SV pair exists; metadata, components, counts and Swedish examples reconciled; shared S7 gates pass |
| `learn/swedish/grammar/pronouns-roles/sin-sitt-sina.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/questions-negation/index.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/questions-negation/index.mdx` | fresh translation | complete | S6 reviewed; metadata parity, translated overview labels and relative links verified; final gates pass. |
| `learn/swedish/grammar/questions-negation/negation.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/questions-negation/negation.mdx` | fresh translation | complete | S6 created and reviewed; Swedish examples unchanged, German guidance, QuickCheck and related labels translated; final gates pass. |
| `learn/swedish/grammar/questions-negation/question-words.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/questions-negation/question-words.mdx` | fresh translation | complete | S6 created and reviewed; question schemas retain direct/indirect semantics; final gates pass. |
| `learn/swedish/grammar/questions-negation/questions.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/questions-negation/questions.mdx` | fresh translation | complete | S6 created and reviewed; question schemas retain finite-verb movement; final gates pass. |
| `learn/swedish/grammar/sentence-structure/basic-word-order.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/sentence-structure/basic-word-order.mdx` | verified existing | complete | S1 exact metadata except `metaLanguage`, imports, components, schema, examples, checks, links and related intent; S2 German review accepted unchanged. |
| `learn/swedish/grammar/sentence-structure/biff.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/sentence-structure/biff.mdx` | fresh translation | complete | S6 created and reviewed; BIFF schema and German comparison row preserved; final gates pass. |
| `learn/swedish/grammar/sentence-structure/index.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/sentence-structure/index.mdx` | fresh translation | complete | S6 reviewed; metadata parity, translated overview labels and relative links verified; final gates pass. |
| `learn/swedish/grammar/sentence-structure/inte-placement.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/sentence-structure/inte-placement.mdx` | fresh translation | complete | S6 created and reviewed; main/subordinate clause schema semantics preserved; final gates pass. |
| `learn/swedish/grammar/sentence-structure/inversion.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/sentence-structure/inversion.mdx` | fresh translation | complete | S6 created and reviewed; V2/inversion schema semantics preserved; final gates pass. |
| `learn/swedish/grammar/sentence-structure/subordinate-clauses.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/sentence-structure/subordinate-clauses.mdx` | fresh translation | complete | S6 created and reviewed; subordinate-clause schema semantics preserved; final gates pass. |
| `learn/swedish/grammar/sentence-structure/v2.mdx` | `de` | `src/content/docs/de/learn/swedish/grammar/sentence-structure/v2.mdx` | fresh translation | complete | S6 reviewed; metadata, Swedish examples, translated labels and relative links verified; final gates pass. |
| `learn/swedish/grammar/verb-patterns-voice/active-vs-passive.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verb-patterns-voice/imperative.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verb-patterns-voice/index.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verb-patterns-voice/modal-verbs.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verb-patterns-voice/particle-verbs.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verb-patterns-voice/passive.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verb-patterns-voice/verb-groups.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verbs-time-forms/future-forms.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verbs-time-forms/index.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verbs-time-forms/perfect.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verbs-time-forms/present.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verbs-time-forms/preterite.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verbs-time-forms/tense-perspectives.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verbs-time-forms/verb-forms.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/important.mdx` | `de` | `src/content/docs/de/learn/swedish/important.mdx` | fresh translation | complete | S5 reviewed; metadata parity and translated visible labels/links verified; final gates pass. |
| `learn/swedish/index.md` | `de` | `src/content/docs/de/learn/swedish/index.md` | fresh translation | complete | S5 reviewed; metadata parity and translated navigation labels/links verified; final gates pass. |
| `learn/swedish/learning-path.mdx` | `de` | `src/content/docs/de/learn/swedish/learning-path.mdx` | revise or retranslate | complete | S1 parity confirmed for metadata, route map, links, examples and related intent; S2/S4 repaired two awkward German navigation phrases without changing learner action. |
| `learn/swedish/pronunciation-basics.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/agreeing-and-disagreeing.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/asking-for-directions.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/at-home.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/conditions-and-consequences.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/index.mdx` | `de` | `src/content/docs/de/learn/swedish/sentence-patterns/index.mdx` | revise or retranslate | complete | S1 parity confirmed for metadata, components, tables, links and related intent; S2/S4 restored the canonical count of three supporting grammar pages in idiomatic German. |
| `learn/swedish/sentence-patterns/introducing-yourself.mdx` | `de` | `src/content/docs/de/learn/swedish/sentence-patterns/introducing-yourself.mdx` | revise or retranslate | complete | S1 parity confirmed for metadata, components, Swedish examples, QuickCheck and related intent; S2/S4 made the section heading idiomatic German. |
| `learn/swedish/sentence-patterns/keeping-a-conversation-going.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/opinions-and-uncertainty.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/ordering-food.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/polite-requests.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/reasons-and-examples.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/shopping-and-paying.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/small-talk.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/travel-and-transport.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/daily-routines.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/food-and-drinks.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/home-and-everyday-objects.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/index.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/numbers.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/shopping-and-money.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/telling-time.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/transport-and-travel.mdx` | `de` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/adverbs.md` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/en-ett-adjectives.md` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/index.md` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/noun-forms.md` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/numbers.md` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/particle-verbs.md` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/question-words.md` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/relative-pronouns.md` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/v2-biff.md` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/cheat-sheets/verb-forms.md` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/common-mistakes/from-english.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/common-mistakes/from-german.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/common-mistakes/index.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/adjectives-adverbs/adjective-comparison.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/adjectives-adverbs/adverbs.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/adjectives-adverbs/agreement.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/adjectives-adverbs/index.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/index.md` | `sv` | `src/content/docs/sv/learn/swedish/grammar/index.md` | fresh translation | complete | S5 reviewed; metadata parity, translated navigation labels and relative links verified; final gates pass. |
| `learn/swedish/grammar/mood-politeness-reports/conditionals.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/mood-politeness-reports/index.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/mood-politeness-reports/reported-speech.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/nouns-articles/en-ett.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/nouns-articles/index.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/nouns-articles/noun-forms.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/nouns-articles/plural-overview.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/nouns-articles/possession.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/prepositions-function-words/connectors.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/prepositions-function-words/dar-har-adverbs.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/prepositions-function-words/index.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/prepositions-function-words/index.mdx` | fresh translation | complete | S7 overview Kleingruppe exists; 3 routes × 2 locales reconciled, final S7 semantic review pending |
| `learn/swedish/grammar/prepositions-function-words/prepositions.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/pronouns-roles/demonstratives-har-dar.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/pronouns-roles/demonstratives-har-dar.mdx` | fresh translation | complete | Full DE/SV pair exists; metadata, components, counts and Swedish examples reconciled; shared S7 gates pass |
| `learn/swedish/grammar/pronouns-roles/index.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/pronouns-roles/index.mdx` | fresh translation | complete | Pronouns/roles Kleingruppe exists; 2 locales × 2 routes reconciled, final S7 semantic review pending |
| `learn/swedish/grammar/pronouns-roles/man-varandra-varsin.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/pronouns-roles/nagon-nagot-ingen-inget.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/pronouns-roles/personal-pronouns.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/pronouns-roles/personal-pronouns.mdx` | fresh translation | complete | Pronouns/roles Kleingruppe exists; 2 locales × 2 routes reconciled, final S7 semantic review pending |
| `learn/swedish/grammar/pronouns-roles/possessive-pronouns.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/pronouns-roles/possessive-pronouns.mdx` | fresh translation | complete | Full DE/SV pair exists; metadata, components, counts and Swedish examples reconciled; `validate:links` PASS across 288 docs pages |
| `learn/swedish/grammar/pronouns-roles/reflexive-pronouns.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/pronouns-roles/reflexive-pronouns.mdx` | fresh translation | complete | Full DE/SV pair exists; metadata, components, counts and Swedish examples reconciled; final S7 semantic review pending |
| `learn/swedish/grammar/pronouns-roles/relative-pronouns.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/pronouns-roles/relative-pronouns.mdx` | fresh translation | complete | Full DE/SV pair exists; metadata, components, counts and Swedish examples reconciled; shared S7 gates pass |
| `learn/swedish/grammar/pronouns-roles/sin-sitt-sina.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/questions-negation/index.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/questions-negation/index.mdx` | fresh translation | complete | S6 reviewed; metadata parity, translated overview labels and relative links verified; final gates pass. |
| `learn/swedish/grammar/questions-negation/negation.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/questions-negation/negation.mdx` | fresh translation | complete | S6 reviewed; Swedish guidance, QuickCheck and related labels accepted; final gates pass. |
| `learn/swedish/grammar/questions-negation/question-words.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/questions-negation/question-words.mdx` | fresh translation | complete | S6 reviewed; direct/indirect question schemas preserved; MDX blank-line repair rendered successfully; final gates pass. |
| `learn/swedish/grammar/questions-negation/questions.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/questions-negation/questions.mdx` | fresh translation | complete | S6 reviewed; finite-verb question schema preserved; final gates pass. |
| `learn/swedish/grammar/sentence-structure/basic-word-order.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/sentence-structure/basic-word-order.mdx` | verified existing | complete | S1 exact metadata except `metaLanguage`, imports, components, schema, examples, checks, links and related intent; S2 Swedish review accepted unchanged. |
| `learn/swedish/grammar/sentence-structure/biff.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/sentence-structure/biff.mdx` | fresh translation | complete | S6 reviewed; BIFF schema and German comparison row preserved; MDX blank-line repair rendered successfully; final gates pass. |
| `learn/swedish/grammar/sentence-structure/index.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/sentence-structure/index.mdx` | fresh translation | complete | S6 reviewed; metadata parity, translated overview labels and relative links verified; final gates pass. |
| `learn/swedish/grammar/sentence-structure/inte-placement.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/sentence-structure/inte-placement.mdx` | fresh translation | complete | S6 reviewed; main/subordinate clause schema semantics preserved; final gates pass. |
| `learn/swedish/grammar/sentence-structure/inversion.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/sentence-structure/inversion.mdx` | fresh translation | complete | S6 reviewed; V2/inversion schema semantics preserved; final gates pass. |
| `learn/swedish/grammar/sentence-structure/subordinate-clauses.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/sentence-structure/subordinate-clauses.mdx` | fresh translation | complete | S6 reviewed; subordinate-clause schema semantics preserved; final gates pass. |
| `learn/swedish/grammar/sentence-structure/v2.mdx` | `sv` | `src/content/docs/sv/learn/swedish/grammar/sentence-structure/v2.mdx` | fresh translation | complete | S6 reviewed; metadata, Swedish examples, translated labels and relative links verified; final gates pass. |
| `learn/swedish/grammar/verb-patterns-voice/active-vs-passive.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verb-patterns-voice/imperative.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verb-patterns-voice/index.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verb-patterns-voice/modal-verbs.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verb-patterns-voice/particle-verbs.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verb-patterns-voice/passive.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verb-patterns-voice/verb-groups.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verbs-time-forms/future-forms.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verbs-time-forms/index.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verbs-time-forms/perfect.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verbs-time-forms/present.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verbs-time-forms/preterite.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verbs-time-forms/tense-perspectives.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/grammar/verbs-time-forms/verb-forms.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/important.mdx` | `sv` | `src/content/docs/sv/learn/swedish/important.mdx` | fresh translation | complete | S5 reviewed; metadata parity and translated visible labels/links verified; final gates pass. |
| `learn/swedish/index.md` | `sv` | `src/content/docs/sv/learn/swedish/index.md` | fresh translation | complete | S5 reviewed; metadata parity and translated navigation labels/links verified; final gates pass. |
| `learn/swedish/learning-path.mdx` | `sv` | `src/content/docs/sv/learn/swedish/learning-path.mdx` | verified existing | complete | S1 exact metadata except `metaLanguage`, route map, links, Swedish examples and related intent; S2 Swedish review accepted unchanged. |
| `learn/swedish/pronunciation-basics.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/agreeing-and-disagreeing.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/asking-for-directions.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/at-home.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/conditions-and-consequences.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/index.mdx` | `sv` | `src/content/docs/sv/learn/swedish/sentence-patterns/index.mdx` | revise or retranslate | complete | S1 parity confirmed for metadata, components, tables, links and related intent; S2/S4 restored the canonical count of three supporting grammar pages in idiomatic Swedish. |
| `learn/swedish/sentence-patterns/introducing-yourself.mdx` | `sv` | `src/content/docs/sv/learn/swedish/sentence-patterns/introducing-yourself.mdx` | revise or retranslate | complete | S1 parity confirmed for metadata, components, Swedish examples, QuickCheck and related intent; S2/S4 made the heading and two table labels idiomatic Swedish. |
| `learn/swedish/sentence-patterns/keeping-a-conversation-going.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/opinions-and-uncertainty.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/ordering-food.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/polite-requests.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/reasons-and-examples.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/shopping-and-paying.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/small-talk.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/sentence-patterns/travel-and-transport.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/daily-routines.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/food-and-drinks.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/home-and-everyday-objects.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/index.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/numbers.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/shopping-and-money.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/telling-time.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |
| `learn/swedish/vocabulary/transport-and-travel.mdx` | `sv` | — | fresh translation | pending | Create in translation bucket |

## Batch Ledger

| Order | Batch | Status | Changed files | Evidence and review | Required follow-up |
| --- | --- | --- | --- | --- | --- |
| S1 | Structural and metadata parity | complete | Eight existing targets and this report | Current canonical comparisons confirmed exact structural metadata except `metaLanguage`, matching imports/components, examples, warnings, QuickChecks, relative links and related-topic intent. | Start S5 |
| S2 | Existing linguistic and didactic acceptance | complete | Eight existing targets and this report | Independent German and Swedish review confirmed the same lookup answer, Swedish target examples and learner action. | Start S5 |
| S3 | Restore source parity where needed | not needed | — | No canonical-to-mirror structural defect was found; canonical sources remain unchanged. | Start S5 |
| S4 | Target-language repair and acceptance | complete | Five existing target files and this report | Repaired only naturalness/count omissions: German learning-path navigation, German sentence-pattern index and introduction heading, Swedish sentence-pattern index and introduction labels. | Start S5 |
| S5 | Entry routes and navigation pages | complete | 6 target files (3 de, 3 sv) | Current-source comparison, metadata parity, localized labels/links and target-language review passed; shared gates pass. | Start S7 |
| S6 | Sentence structure, questions, and negation | complete | 20 target files (10 de, 10 sv) | Seven German-meta detail pages created; all 20 targets reviewed. SentenceSchema semantics, translated labels/checks, examples, links and metadata passed. The final build exposed and the batch repaired two remaining MDX blank-line defects in Swedish targets. | Start S7 |
| S7 | Nouns, pronouns, adjectives, and function words | in progress | 44 target scope; 14 complete, 30 pending | Seven S7 routes (14 targets) exist; full shared gates pass; final semantic bucket review pending | Start `nouns-articles/en-ett.mdx`, reconcile both locale targets |
| S8 | Verbs, time forms, voice, mood, and reports | pending | 34 target scope (17 canonical routes × 2 locales) | Broad wave was not retained; no target files remain | Start only after S7 subsets are reconciled |
| S9 | Practical reference routes | pending | 62 target scope (31 canonical routes × 2 locales) | Not started; agent limit reached | Start after S7/S8 with smaller 4–9-canonical subsets |
| S10 | Common Mistakes and package completion | pending | — | — | — |

## Decision Log

Record only execution decisions that do not redefine canonical Phase 5 scope.
A canonical defect or requested scope expansion returns to the owning plan.

| Date | Decision | Reason | Affected rows |
| --- | --- | --- | --- |
| 2026-09-12 | Keep canonical sources unchanged | Direct current-source comparison found no canonical defect or structural mirror divergence; only localized wording needed repair. | All eight existing pairs |
| 2026-09-12 | Classify five completed repairs as `revise or retranslate` | The inventory records the review finding even though focused S4 repairs now make the files acceptable. | de learning path, de sentence-patterns index, de introducing yourself, sv sentence-patterns index, sv introducing yourself |
| 2026-09-12 | Keep S5/S6 canonical sources unchanged | All 26 target rows reached canonical structural/metadata parity and didactic equivalence through localized files only. | All S5/S6 rows |
| 2026-09-12 | Record the partial-build failure as historical evidence | The initial S5/S6 base-path build revealed MDX blank-line defects. Final rendering uncovered two remaining Swedish files; both were repaired before the passing final run. | sv question-words, sv BIFF |
| 2026-09-12 | Replace broad S7/S8/S9 waves with smaller fachliche subsets | Executor packages spanning 17–22 canonical routes were too large for reliable bounded execution and reconciliation. This decision was superseded by the stricter 1–3-canonical-unit rule below; the broad S7/S8 attempt was rolled back cleanly and S9 was not started due to the agent limit. | S7, S8, S9 |
| 2026-09-12 | Tighten implementation units after the second clean non-start | Even 4–9 canonical routes (10–18 targets or 1,550+ source lines) were too large for reliable bounded execution. Future units are strictly 1–3 canonical routes / 2–6 targets, with immediate report reconciliation after each unit; semantic review remains batched for the final main-bucket review. | S7 and subsequent buckets |
| 2026-09-12 | Record S7 Kleingruppe outcomes | Pronouns/roles index and personal-pronouns produced exactly four targets (de/sv); nouns/articles and prepositions produced zero files after clean rollback. | S7 pronouns/roles, nouns/articles, prepositions |
| 2026-09-12 | Record second S7 Kleingruppe outcome | Prepositions/function-words index produced exactly two targets (de/sv); possessive/reflexive non-start left zero files. | S7 prepositions/function-words overview, possessive/reflexive |
| 2026-09-12 | Record third S7 Kleingruppe outcome | Possessive and reflexive pronouns produced exactly four targets (de/sv). Structural parity, MDX components, Swedish examples and obvious fallback checks passed; `validate:links` passed, with final semantic review still reserved for the S7 bucket. | S7 possessive-pronouns, reflexive-pronouns |
| 2026-09-12 | Pin resume model for gate-safe continuation | `codex exec resume` must explicitly use `-m gpt-5.6-terra`; two accidental Sol starts were interrupted before content changes and do not count as implementation work. | S7 continuation workflow |

## Validation Ledger

| Date | Scope | `quality` | base-path build | length report | diff check | Linguistic/didactic review |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-09-12 | S1/S2 existing-pair bucket | pass | pass | pass; 7 documented exceptions | pass | Pair-level structural and linguistic review complete; three pairs accepted unchanged, five received focused target-language repairs. |
| 2026-09-12 | Partial S5/S6 worktree | pass | failed initially; two MDX blank-line repairs made; final rerun pending | — | pending | Final review pending; no S5/S6 row may be marked complete yet. |
| 2026-09-12 | Completed S5/S6, 26 target rows | pass; 278 docs pages, 0 diagnostics | pass; 727 pages built under `/jp-language-hub` | pass; 7 pre-existing documented exceptions | pass | All 26 rows manually reviewed for canonical metadata/structure, target-language prose and visible labels, Swedish examples, relative links, canonical related routes, and sentence schemas. |
| 2026-09-12 | Intermediate S7 checkpoint, 14 target rows | pass; 292 docs pages, 0 diagnostics | pass; 727 pages built under `/jp-language-hub` | pass; 7 pre-existing documented exceptions | pass | Fourteen S7 targets reconciled for metadata/components/counts, Swedish examples and fallback checks; final S7 semantic bucket review remains pending. |

## Blockers and Risks

- Fallback locale routes can hide the 172 missing authored files; the first
  fresh-translation row must not be treated as complete until its target file
  exists and is reviewed.
- Automated parity cannot prove idiomatic German or Swedish explanation; S5/S6 therefore include a manual target-language review. The remaining risk applies only to later pending batches.

## Resume Instructions

1. Read the Swedish plan and this report.
2. Inspect the completed S1/S2/S4 evidence and the actual diff.
3. Continue with the first pending fresh-translation inventory row in S7.
4. Inspect the actual diff and rerun the required gates before advancing.
