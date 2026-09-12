# Phase 5 Topic Inventory

This is the implementation inventory for the approved Phase 5 navigation
blueprint. It covers practical everyday production and lookup from A1 through
B2. Its page scope is every current or planned Grammar and Common Mistakes page
owned by Phase 5, plus the approved Swedish Numbers move from Grammar to
Vocabulary. It is deliberately a route-level inventory, not an academic
grammar list or a complete inventory of every learning-language page.

**Status:** Frozen implementation baseline.

## Can-do coverage

`covered` means the current tree already has a usable canonical route.
`planned` means Phase 5 creates or reorganizes the minimum route needed.
`reference` means the page remains available but does not drive the core path.
`out-of-scope` means it is not needed for the everyday A1-B2 target.

| Can-do area | Swedish | English | German |
| --- | --- | --- | --- |
| Build ordinary statements and clause order | covered | covered | covered |
| Ask questions and form negatives | planned | planned | covered |
| Give instructions and use everyday commands | planned | planned | covered |
| Use noun phrases, articles, number, and possession | planned | planned | covered |
| Choose pronouns and sentence roles | planned | planned | covered |
| Talk about present, past, plans, and future | planned | covered | covered |
| Express ability, obligation, wishes, and requests | planned | planned | covered |
| Describe and compare people or things | covered | planned | covered |
| Use everyday place, time, and dependent prepositions | planned | planned | planned |
| Connect reasons, conditions, and subordinate information | planned | planned | covered |
| Express opinions, certainty, possibility, and hypothetical meaning | planned | planned | covered |
| Recognize or produce passive and reported information | planned | planned | covered |
| Diagnose German-English-Swedish transfer errors | covered | planned | covered |

## Action and priority legend

Actions are `keep` (retain route and role), `move` (same page, new shelf),
`create` (new page or overview), `move, rename` (move and give the page a
clearer canonical name), `move, reference` (move while keeping the page
outside the recommended core sequence), and `merge` (fold one existing page
into another canonical target and remove the redundant source route).

Priorities are `P0` (required for the everyday core), `P1` (needed for a
complete practical B1-B2 reference), and `REF` (useful recognition or lookup,
but not a core navigation driver). These values are implementation priorities,
not CEFR classifications. A section overview has the highest implementation
priority of any page it contains so a completed page never depends on a later
overview.

Every existing Phase-5-owned file is represented exactly once below by its
current route. Planned rows have an empty current route and represent target
pages from the navigation blueprint. Target routes are unique except for an
explicit `merge`: the source row being merged and the surviving canonical row
intentionally share one target route.

## Inventory totals

The inventory contains 132 existing routes and 70 planned creation rows. The
German merge means its 82 inventory rows resolve to 81 target routes, for 201
unique target routes across Phase 5.

| Language | Rows | Unique targets | `keep` | `create` | `move` | `move, rename` | `move, reference` | `merge` |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Swedish | 55 | 55 | 15 | 22 | 17 | 1 | 0 | 0 |
| English | 65 | 65 | 9 | 43 | 11 | 0 | 2 | 0 |
| German | 82 | 81 | 31 | 5 | 42 | 1 | 2 | 1 |
| **Total** | **202** | **201** | **55** | **70** | **70** | **2** | **4** | **1** |

## Swedish

| Language | Learner question/topic | Current route | Target route | Action | Priority |
| --- | --- | --- | --- | --- | --- |
| Swedish | Grammar overview | `/learn/swedish/grammar/` | `/learn/swedish/grammar/` | keep | P0 |
| Swedish | Sentence structure overview |  | `/learn/swedish/grammar/sentence-structure/` | create | P0 |
| Swedish | Basic word order | `/learn/swedish/grammar/sentence-structure/basic-word-order/` | `/learn/swedish/grammar/sentence-structure/basic-word-order/` | keep | P0 |
| Swedish | V2 rule | `/learn/swedish/grammar/sentence-structure/v2/` | `/learn/swedish/grammar/sentence-structure/v2/` | keep | P0 |
| Swedish | Inversion | `/learn/swedish/grammar/sentence-structure/inversion/` | `/learn/swedish/grammar/sentence-structure/inversion/` | keep | P0 |
| Swedish | BIFF: sentence-adverb placement in subordinate clauses | `/learn/swedish/grammar/sentence-structure/biff/` | `/learn/swedish/grammar/sentence-structure/biff/` | keep | P0 |
| Swedish | Subordinate clauses |  | `/learn/swedish/grammar/sentence-structure/subordinate-clauses/` | create | P0 |
| Swedish | Placement of inte | `/learn/swedish/grammar/sentence-structure/inte-placement/` | `/learn/swedish/grammar/sentence-structure/inte-placement/` | keep | P0 |
| Swedish | Questions and negation overview |  | `/learn/swedish/grammar/questions-negation/` | create | P0 |
| Swedish | Questions |  | `/learn/swedish/grammar/questions-negation/questions/` | create | P0 |
| Swedish | Negation |  | `/learn/swedish/grammar/questions-negation/negation/` | create | P0 |
| Swedish | Nouns and articles overview |  | `/learn/swedish/grammar/nouns-articles/` | create | P0 |
| Swedish | en and ett | `/learn/swedish/grammar/nouns-articles/en-ett/` | `/learn/swedish/grammar/nouns-articles/en-ett/` | keep | P0 |
| Swedish | Noun forms and definiteness | `/learn/swedish/grammar/nouns-articles/noun-forms/` | `/learn/swedish/grammar/nouns-articles/noun-forms/` | keep | P0 |
| Swedish | Plural overview | `/learn/swedish/grammar/nouns-articles/plural-overview/` | `/learn/swedish/grammar/nouns-articles/plural-overview/` | keep | P0 |
| Swedish | Nominal possession and the s-genitive |  | `/learn/swedish/grammar/nouns-articles/possession/` | create | P0 |
| Swedish | Pronouns and roles overview |  | `/learn/swedish/grammar/pronouns-roles/` | create | P0 |
| Swedish | Personal pronouns |  | `/learn/swedish/grammar/pronouns-roles/personal-pronouns/` | create | P0 |
| Swedish | Possessive pronouns | `/learn/swedish/grammar/pronouns-function-words/possessive-pronouns/` | `/learn/swedish/grammar/pronouns-roles/possessive-pronouns/` | move | P0 |
| Swedish | sin, sitt, sina | `/learn/swedish/grammar/pronouns-function-words/sin-sitt-sina/` | `/learn/swedish/grammar/pronouns-roles/sin-sitt-sina/` | move | P0 |
| Swedish | någon, något, ingen, inget | `/learn/swedish/grammar/pronouns-function-words/nagon-nagot-ingen-inget/` | `/learn/swedish/grammar/pronouns-roles/nagon-nagot-ingen-inget/` | move | P0 |
| Swedish | Demonstratives with här and där | `/learn/swedish/grammar/pronouns-function-words/demonstratives-har-dar/` | `/learn/swedish/grammar/pronouns-roles/demonstratives-har-dar/` | move | P1 |
| Swedish | Relative pronouns | `/learn/swedish/grammar/pronouns-function-words/relative-pronouns/` | `/learn/swedish/grammar/pronouns-roles/relative-pronouns/` | move | P1 |
| Swedish | Question words | `/learn/swedish/grammar/pronouns-function-words/interrogatives/` | `/learn/swedish/grammar/questions-negation/question-words/` | move, rename | P0 |
| Swedish | Reflexive pronouns |  | `/learn/swedish/grammar/pronouns-roles/reflexive-pronouns/` | create | P1 |
| Swedish | man, varandra, var sin | `/learn/swedish/grammar/pronouns-function-words/man-varandra-varsin/` | `/learn/swedish/grammar/pronouns-roles/man-varandra-varsin/` | move | P1 |
| Swedish | Verbs and time forms overview |  | `/learn/swedish/grammar/verbs-time-forms/` | create | P0 |
| Swedish | Verb forms | `/learn/swedish/grammar/verbs/verb-forms/` | `/learn/swedish/grammar/verbs-time-forms/verb-forms/` | move | P0 |
| Swedish | Tense perspectives | `/learn/swedish/grammar/verbs/tense-perspectives/` | `/learn/swedish/grammar/verbs-time-forms/tense-perspectives/` | move | P0 |
| Swedish | Present tense | `/learn/swedish/grammar/verbs/present/` | `/learn/swedish/grammar/verbs-time-forms/present/` | move | P0 |
| Swedish | Preterite | `/learn/swedish/grammar/verbs/preterite/` | `/learn/swedish/grammar/verbs-time-forms/preterite/` | move | P0 |
| Swedish | Perfect | `/learn/swedish/grammar/verbs/perfect/` | `/learn/swedish/grammar/verbs-time-forms/perfect/` | move | P0 |
| Swedish | Future forms |  | `/learn/swedish/grammar/verbs-time-forms/future-forms/` | create | P0 |
| Swedish | Adjectives and adverbs overview |  | `/learn/swedish/grammar/adjectives-adverbs/` | create | P0 |
| Swedish | Adjective agreement | `/learn/swedish/grammar/adjectives-adverbs/agreement/` | `/learn/swedish/grammar/adjectives-adverbs/agreement/` | keep | P0 |
| Swedish | Adjective comparison | `/learn/swedish/grammar/adjectives-adverbs/adjective-comparison/` | `/learn/swedish/grammar/adjectives-adverbs/adjective-comparison/` | keep | P1 |
| Swedish | Adverbs | `/learn/swedish/grammar/adjectives-adverbs/adverbs/` | `/learn/swedish/grammar/adjectives-adverbs/adverbs/` | keep | P1 |
| Swedish | Prepositions and function words overview |  | `/learn/swedish/grammar/prepositions-function-words/` | create | P0 |
| Swedish | Prepositions | `/learn/swedish/grammar/pronouns-function-words/prepositions/` | `/learn/swedish/grammar/prepositions-function-words/prepositions/` | move | P0 |
| Swedish | där- and här-adverbs | `/learn/swedish/grammar/pronouns-function-words/dar-har-adverbs/` | `/learn/swedish/grammar/prepositions-function-words/dar-har-adverbs/` | move | P1 |
| Swedish | Connectors |  | `/learn/swedish/grammar/prepositions-function-words/connectors/` | create | P0 |
| Swedish | Verb patterns and voice overview |  | `/learn/swedish/grammar/verb-patterns-voice/` | create | P0 |
| Swedish | Verb groups | `/learn/swedish/grammar/verbs/verb-groups/` | `/learn/swedish/grammar/verb-patterns-voice/verb-groups/` | move | P1 |
| Swedish | Particle verbs | `/learn/swedish/grammar/verbs/particle-verbs/` | `/learn/swedish/grammar/verb-patterns-voice/particle-verbs/` | move | P1 |
| Swedish | Passive | `/learn/swedish/grammar/verbs/passive/` | `/learn/swedish/grammar/verb-patterns-voice/passive/` | move | P1 |
| Swedish | Active vs passive |  | `/learn/swedish/grammar/verb-patterns-voice/active-vs-passive/` | create | P1 |
| Swedish | Modal verbs |  | `/learn/swedish/grammar/verb-patterns-voice/modal-verbs/` | create | P0 |
| Swedish | Imperative |  | `/learn/swedish/grammar/verb-patterns-voice/imperative/` | create | P0 |
| Swedish | Mood, politeness, and reports overview |  | `/learn/swedish/grammar/mood-politeness-reports/` | create | P1 |
| Swedish | Conditionals |  | `/learn/swedish/grammar/mood-politeness-reports/conditionals/` | create | P1 |
| Swedish | Reported speech |  | `/learn/swedish/grammar/mood-politeness-reports/reported-speech/` | create | P1 |
| Swedish | Numbers (outside grammar) | `/learn/swedish/grammar/numerals/numbers/` | `/learn/swedish/vocabulary/numbers/` | move | P0 |
| Swedish | Common mistakes overview | `/learn/swedish/common-mistakes/` | `/learn/swedish/common-mistakes/` | keep | P0 |
| Swedish | English to Swedish mistakes | `/learn/swedish/common-mistakes/from-english/` | `/learn/swedish/common-mistakes/from-english/` | keep | P1 |
| Swedish | German to Swedish mistakes | `/learn/swedish/common-mistakes/from-german/` | `/learn/swedish/common-mistakes/from-german/` | keep | P1 |

## English

| Language | Learner question/topic | Current route | Target route | Action | Priority |
| --- | --- | --- | --- | --- | --- |
| English | Grammar overview | `/learn/english/grammar/` | `/learn/english/grammar/` | keep | P0 |
| English | Sentence structure overview | `/learn/english/grammar/sentence-structure/` | `/learn/english/grammar/sentence-structure/` | keep | P0 |
| English | Sentence order | `/learn/english/grammar/sentence-structure/sentence-order/` | `/learn/english/grammar/sentence-structure/sentence-order/` | keep | P0 |
| English | Subordinate clauses |  | `/learn/english/grammar/sentence-structure/subordinate-clauses/` | create | P0 |
| English | Relative clauses |  | `/learn/english/grammar/sentence-structure/relative-clauses/` | create | P1 |
| English | Adverb placement | `/learn/english/grammar/sentence-structure/adverb-placement/` | `/learn/english/grammar/sentence-structure/adverb-placement/` | keep | P1 |
| English | Questions and negation overview |  | `/learn/english/grammar/questions-negation/` | create | P0 |
| English | Questions and do-support | `/learn/english/grammar/sentence-structure/questions-and-do-support/` | `/learn/english/grammar/questions-negation/questions-and-do-support/` | move | P0 |
| English | Negation |  | `/learn/english/grammar/questions-negation/negation/` | create | P0 |
| English | Any versus no |  | `/learn/english/grammar/questions-negation/any-vs-no/` | create | P1 |
| English | Nouns and articles overview | `/learn/english/grammar/nouns-articles/` | `/learn/english/grammar/nouns-articles/` | keep | P0 |
| English | Articles | `/learn/english/grammar/nouns-articles/articles/` | `/learn/english/grammar/nouns-articles/articles/` | keep | P0 |
| English | Countable and uncountable nouns | `/learn/english/grammar/nouns-articles/countable-and-uncountable-nouns/` | `/learn/english/grammar/nouns-articles/countable-and-uncountable-nouns/` | keep | P0 |
| English | Plural nouns |  | `/learn/english/grammar/nouns-articles/plural-nouns/` | create | P0 |
| English | Possession |  | `/learn/english/grammar/nouns-articles/possession/` | create | P0 |
| English | Pronouns and roles overview |  | `/learn/english/grammar/pronouns-roles/` | create | P0 |
| English | Personal pronouns |  | `/learn/english/grammar/pronouns-roles/personal-pronouns/` | create | P0 |
| English | Possessive pronouns |  | `/learn/english/grammar/pronouns-roles/possessive-pronouns/` | create | P0 |
| English | Reflexive pronouns |  | `/learn/english/grammar/pronouns-roles/reflexive-pronouns/` | create | P1 |
| English | Demonstrative pronouns |  | `/learn/english/grammar/pronouns-roles/demonstrative-pronouns/` | create | P1 |
| English | Indefinite pronouns |  | `/learn/english/grammar/pronouns-roles/indefinite-pronouns/` | create | P1 |
| English | Sentence roles and pronoun case |  | `/learn/english/grammar/pronouns-roles/sentence-roles-and-pronoun-case/` | create | P0 |
| English | Verbs and time forms overview | `/learn/english/grammar/verbs/` | `/learn/english/grammar/verbs-time-forms/` | move | P0 |
| English | Choosing time form | `/learn/english/grammar/verbs/choosing-time-form/` | `/learn/english/grammar/verbs-time-forms/choosing-time-form/` | move | P0 |
| English | Simple present | `/learn/english/grammar/verbs/simple-present/` | `/learn/english/grammar/verbs-time-forms/simple-present/` | move | P0 |
| English | Present progressive | `/learn/english/grammar/verbs/present-progressive/` | `/learn/english/grammar/verbs-time-forms/present-progressive/` | move | P0 |
| English | Simple present versus present progressive | `/learn/english/grammar/verbs/simple-present-vs-present-progressive/` | `/learn/english/grammar/verbs-time-forms/simple-present-vs-present-progressive/` | move | P0 |
| English | Simple past | `/learn/english/grammar/verbs/simple-past/` | `/learn/english/grammar/verbs-time-forms/simple-past/` | move | P0 |
| English | Past progressive |  | `/learn/english/grammar/verbs-time-forms/past-progressive/` | create | P1 |
| English | Past perfect |  | `/learn/english/grammar/verbs-time-forms/past-perfect/` | create | P1 |
| English | Present perfect | `/learn/english/grammar/verbs/present-perfect/` | `/learn/english/grammar/verbs-time-forms/present-perfect/` | move | P0 |
| English | Present perfect progressive |  | `/learn/english/grammar/verbs-time-forms/present-perfect-progressive/` | create | P1 |
| English | Simple past versus present perfect | `/learn/english/grammar/verbs/simple-past-vs-present-perfect/` | `/learn/english/grammar/verbs-time-forms/simple-past-vs-present-perfect/` | move | P0 |
| English | Will future | `/learn/english/grammar/verbs/will-future/` | `/learn/english/grammar/verbs-time-forms/will-future/` | move | P0 |
| English | Going-to future | `/learn/english/grammar/verbs/going-to-future/` | `/learn/english/grammar/verbs-time-forms/going-to-future/` | move | P0 |
| English | Future progressive | `/learn/english/grammar/verbs/future-progressive/` | `/learn/english/grammar/verbs-time-forms/future-progressive/` | move, reference | REF |
| English | Future perfect | `/learn/english/grammar/verbs/future-perfect/` | `/learn/english/grammar/verbs-time-forms/future-perfect/` | move, reference | REF |
| English | Adjectives and adverbs overview |  | `/learn/english/grammar/adjectives-adverbs/` | create | P0 |
| English | Adjectives |  | `/learn/english/grammar/adjectives-adverbs/adjectives/` | create | P0 |
| English | Adjective order |  | `/learn/english/grammar/adjectives-adverbs/adjective-order/` | create | P1 |
| English | Adjective comparison |  | `/learn/english/grammar/adjectives-adverbs/adjective-comparison/` | create | P1 |
| English | Adverbs |  | `/learn/english/grammar/adjectives-adverbs/adverbs/` | create | P1 |
| English | Adjectives versus adverbs |  | `/learn/english/grammar/adjectives-adverbs/adjectives-vs-adverbs/` | create | P1 |
| English | Prepositions and function words overview |  | `/learn/english/grammar/prepositions-function-words/` | create | P0 |
| English | Place and direction |  | `/learn/english/grammar/prepositions-function-words/place-and-direction/` | create | P0 |
| English | Time prepositions |  | `/learn/english/grammar/prepositions-function-words/time-prepositions/` | create | P0 |
| English | Dependent prepositions |  | `/learn/english/grammar/prepositions-function-words/dependent-prepositions/` | create | P1 |
| English | Connectors |  | `/learn/english/grammar/prepositions-function-words/connectors/` | create | P0 |
| English | Verb patterns and voice overview |  | `/learn/english/grammar/verb-patterns-voice/` | create | P0 |
| English | Auxiliary verbs |  | `/learn/english/grammar/verb-patterns-voice/auxiliary-verbs/` | create | P0 |
| English | Modal verbs |  | `/learn/english/grammar/verb-patterns-voice/modal-verbs/` | create | P0 |
| English | Imperative |  | `/learn/english/grammar/verb-patterns-voice/imperative/` | create | P0 |
| English | Passive |  | `/learn/english/grammar/verb-patterns-voice/passive/` | create | P1 |
| English | Active versus passive |  | `/learn/english/grammar/verb-patterns-voice/active-vs-passive/` | create | P1 |
| English | Gerunds and infinitives |  | `/learn/english/grammar/verb-patterns-voice/gerunds-and-infinitives/` | create | P1 |
| English | Mood, politeness, and reports overview |  | `/learn/english/grammar/mood-politeness-reports/` | create | P0 |
| English | Polite requests |  | `/learn/english/grammar/mood-politeness-reports/polite-requests/` | create | P0 |
| English | Conditionals |  | `/learn/english/grammar/mood-politeness-reports/conditionals/` | create | P1 |
| English | Reported speech |  | `/learn/english/grammar/mood-politeness-reports/reported-speech/` | create | P1 |
| English | Word formation and particles overview |  | `/learn/english/grammar/word-formation-particles/` | create | P0 |
| English | Phrasal verbs |  | `/learn/english/grammar/word-formation-particles/phrasal-verbs/` | create | P0 |
| English | Word families |  | `/learn/english/grammar/word-formation-particles/word-families/` | create | P1 |
| English | Common mistakes overview | `/learn/english/common-mistakes/` | `/learn/english/common-mistakes/` | keep | P0 |
| English | German to English mistakes | `/learn/english/common-mistakes/from-german/` | `/learn/english/common-mistakes/from-german/` | keep | P1 |
| English | Swedish to English mistakes |  | `/learn/english/common-mistakes/from-swedish/` | create | P1 |

## German

| Language | Learner question/topic | Current route | Target route | Action | Priority |
| --- | --- | --- | --- | --- | --- |
| German | Grammar overview | `/learn/german/grammar/` | `/learn/german/grammar/` | keep | P0 |
| German | Sentence structure overview | `/learn/german/grammar/sentence-structure/` | `/learn/german/grammar/sentence-structure/` | keep | P0 |
| German | Main-clause verb second | `/learn/german/grammar/sentence-structure/main-clause-verb-second/` | `/learn/german/grammar/sentence-structure/main-clause-verb-second/` | keep | P0 |
| German | Questions | `/learn/german/grammar/sentence-structure/questions/` | `/learn/german/grammar/sentence-structure/questions/` | keep | P0 |
| German | Subordinate clauses | `/learn/german/grammar/sentence-structure/subordinate-clauses/` | `/learn/german/grammar/sentence-structure/subordinate-clauses/` | keep | P0 |
| German | Verb bracket | `/learn/german/grammar/sentence-structure/verb-bracket/` | `/learn/german/grammar/sentence-structure/verb-bracket/` | keep | P0 |
| German | Coordinating conjunctions | `/learn/german/grammar/sentence-structure/coordinating-conjunctions/` | `/learn/german/grammar/sentence-structure/coordinating-conjunctions/` | keep | P0 |
| German | Subordinating conjunctions | `/learn/german/grammar/sentence-structure/subordinating-conjunctions/` | `/learn/german/grammar/sentence-structure/subordinating-conjunctions/` | keep | P0 |
| German | Relative clauses | `/learn/german/grammar/sentence-structure/relative-clauses/` | `/learn/german/grammar/sentence-structure/relative-clauses/` | keep | P1 |
| German | Infinitive clauses | `/learn/german/grammar/sentence-structure/infinitive-clauses/` | `/learn/german/grammar/sentence-structure/infinitive-clauses/` | keep | P1 |
| German | Nouns and articles overview | `/learn/german/grammar/nouns-articles/` | `/learn/german/grammar/nouns-articles/` | keep | P0 |
| German | Articles and gender | `/learn/german/grammar/nouns-articles/articles-and-gender/` | `/learn/german/grammar/nouns-articles/articles-and-gender/` | keep | P0 |
| German | der, die, das | `/learn/german/grammar/nouns-articles/der-die-das/` | `/learn/german/grammar/nouns-articles/der-die-das/` | keep | P0 |
| German | Ein-words | `/learn/german/grammar/nouns-articles/ein-words/` | `/learn/german/grammar/nouns-articles/ein-words/` | keep | P0 |
| German | Plural nouns | `/learn/german/grammar/nouns-articles/plural-nouns/` | `/learn/german/grammar/nouns-articles/plural-nouns/` | keep | P0 |
| German | Cases overview | `/learn/german/grammar/cases/` | `/learn/german/grammar/cases/` | keep | P0 |
| German | Cases as sentence roles | `/learn/german/grammar/cases/cases-as-roles/` | `/learn/german/grammar/cases/cases-as-roles/` | keep | P0 |
| German | Nominative | `/learn/german/grammar/cases/nominative/` | `/learn/german/grammar/cases/nominative/` | keep | P0 |
| German | Accusative | `/learn/german/grammar/cases/accusative/` | `/learn/german/grammar/cases/accusative/` | keep | P0 |
| German | Dative | `/learn/german/grammar/cases/dative/` | `/learn/german/grammar/cases/dative/` | keep | P0 |
| German | Genitive | `/learn/german/grammar/cases/genitive/` | `/learn/german/grammar/cases/genitive/` | keep | P1 |
| German | Pronouns and roles overview | `/learn/german/grammar/pronouns/` | `/learn/german/grammar/pronouns-roles/` | move | P0 |
| German | Personal pronouns | `/learn/german/grammar/pronouns/personal-pronouns/` | `/learn/german/grammar/pronouns-roles/personal-pronouns/` | move | P0 |
| German | Possessive pronouns | `/learn/german/grammar/pronouns/possessive-pronouns/` | `/learn/german/grammar/pronouns-roles/possessive-pronouns/` | move | P0 |
| German | Reflexive pronouns | `/learn/german/grammar/pronouns/reflexive-pronouns/` | `/learn/german/grammar/pronouns-roles/reflexive-pronouns/` | move | P1 |
| German | Demonstrative pronouns | `/learn/german/grammar/pronouns/demonstrative-pronouns/` | `/learn/german/grammar/pronouns-roles/demonstrative-pronouns/` | move | P1 |
| German | Indefinite pronouns | `/learn/german/grammar/pronouns/indefinite-pronouns/` | `/learn/german/grammar/pronouns-roles/indefinite-pronouns/` | move | P1 |
| German | Pronoun case choice | `/learn/german/grammar/pronouns/pronoun-case-choice/` | `/learn/german/grammar/pronouns-roles/pronoun-case-choice/` | move | P0 |
| German | Verbs and time forms overview | `/learn/german/grammar/verbs/` | `/learn/german/grammar/verbs-time-forms/` | move | P0 |
| German | Choosing time form | `/learn/german/grammar/verbs/choosing-time-form/` | `/learn/german/grammar/verbs-time-forms/choosing-time-form/` | move | P0 |
| German | Present tense | `/learn/german/grammar/verbs/present-tense/` | `/learn/german/grammar/verbs-time-forms/present-tense/` | move | P0 |
| German | Perfect tense | `/learn/german/grammar/verbs/perfect-tense/` | `/learn/german/grammar/verbs-time-forms/perfect-tense/` | move | P0 |
| German | Preterite | `/learn/german/grammar/verbs/preterite/` | `/learn/german/grammar/verbs-time-forms/preterite/` | move | P1 |
| German | Past perfect |  | `/learn/german/grammar/verbs-time-forms/past-perfect/` | create | P1 |
| German | Present versus perfect versus preterite | `/learn/german/grammar/verbs/present-vs-perfect-vs-preterite/` | `/learn/german/grammar/verbs-time-forms/present-vs-perfect-vs-preterite/` | move | P0 |
| German | Werden future | `/learn/german/grammar/verbs/werden-future/` | `/learn/german/grammar/verbs-time-forms/werden-future/` | move | P1 |
| German | Present tense for future | `/learn/german/grammar/verbs/present-tense-for-future/` | `/learn/german/grammar/verbs-time-forms/present-tense-for-future/` | move | P0 |
| German | Choosing future forms | `/learn/german/grammar/verbs/choosing-future-forms/` | `/learn/german/grammar/verbs-time-forms/choosing-future-forms/` | move | P1 |
| German | Future perfect | `/learn/german/grammar/verbs/future-perfect/` | `/learn/german/grammar/verbs-time-forms/future-perfect/` | move, reference | REF |
| German | Verb patterns and voice overview |  | `/learn/german/grammar/verb-patterns-voice/` | create | P0 |
| German | Modal verbs | `/learn/german/grammar/verbs/modal-verbs/` | `/learn/german/grammar/verb-patterns-voice/modal-verbs/` | move | P0 |
| German | Modal verb meanings | `/learn/german/grammar/verbs/modal-verbs-meaning/` | `/learn/german/grammar/verb-patterns-voice/modal-verbs-meaning/` | move | P0 |
| German | Infinitive with zu | `/learn/german/grammar/verbs/infinitive-with-zu/` | `/learn/german/grammar/verb-patterns-voice/infinitive-with-zu/` | move | P1 |
| German | Infinitive without zu | `/learn/german/grammar/verbs/infinitive-without-zu/` | `/learn/german/grammar/verb-patterns-voice/infinitive-without-zu/` | move | P1 |
| German | Imperative | `/learn/german/grammar/verbs/imperative/` | `/learn/german/grammar/verb-patterns-voice/imperative/` | move | P0 |
| German | Active (merged content) | `/learn/german/grammar/verbs/active/` | `/learn/german/grammar/verb-patterns-voice/active-vs-passive/` | merge | P1 |
| German | Passive | `/learn/german/grammar/verbs/passive/` | `/learn/german/grammar/verb-patterns-voice/passive/` | move | P1 |
| German | Active versus passive | `/learn/german/grammar/verbs/active-vs-passive/` | `/learn/german/grammar/verb-patterns-voice/active-vs-passive/` | move | P1 |
| German | Adjectives and adverbs overview | `/learn/german/grammar/adjectives/` | `/learn/german/grammar/adjectives-adverbs/` | move | P0 |
| German | Adjective endings | `/learn/german/grammar/adjectives/adjective-endings/` | `/learn/german/grammar/adjectives-adverbs/adjective-endings/` | move | P0 |
| German | Adjective comparison | `/learn/german/grammar/adjectives/adjective-comparison/` | `/learn/german/grammar/adjectives-adverbs/adjective-comparison/` | move | P1 |
| German | Adverbs | `/learn/german/grammar/adjectives/adverbs/` | `/learn/german/grammar/adjectives-adverbs/adverbs/` | move | P1 |
| German | Adjectives versus adverbs | `/learn/german/grammar/adjectives/adjectives-vs-adverbs/` | `/learn/german/grammar/adjectives-adverbs/adjectives-vs-adverbs/` | move | P1 |
| German | Prepositions overview | `/learn/german/grammar/prepositions/` | `/learn/german/grammar/prepositions/` | keep | P0 |
| German | Prepositions and case | `/learn/german/grammar/prepositions/prepositions-and-case/` | `/learn/german/grammar/prepositions/prepositions-and-case/` | keep | P0 |
| German | Accusative prepositions | `/learn/german/grammar/prepositions/accusative-prepositions/` | `/learn/german/grammar/prepositions/accusative-prepositions/` | keep | P0 |
| German | Dative prepositions | `/learn/german/grammar/prepositions/dative-prepositions/` | `/learn/german/grammar/prepositions/dative-prepositions/` | keep | P0 |
| German | Two-way prepositions | `/learn/german/grammar/prepositions/two-way-prepositions/` | `/learn/german/grammar/prepositions/two-way-prepositions/` | keep | P0 |
| German | Genitive prepositions | `/learn/german/grammar/prepositions/genitive-prepositions/` | `/learn/german/grammar/prepositions/genitive-prepositions/` | keep | REF |
| German | Prepositional adverbs | `/learn/german/grammar/prepositions/prepositional-adverbs/` | `/learn/german/grammar/prepositions/prepositional-adverbs/` | keep | P1 |
| German | Dependent verb and adjective prepositions |  | `/learn/german/grammar/prepositions/dependent-prepositions/` | create | P1 |
| German | Function words and negation overview | `/learn/german/grammar/function-words/` | `/learn/german/grammar/function-words-negation/` | move | P0 |
| German | Negation | `/learn/german/grammar/function-words/negation/` | `/learn/german/grammar/function-words-negation/negation/` | move | P0 |
| German | Nicht versus kein | `/learn/german/grammar/function-words/nicht-vs-kein/` | `/learn/german/grammar/function-words-negation/nicht-vs-kein/` | move | P0 |
| German | Nicht placement | `/learn/german/grammar/function-words/nicht-placement/` | `/learn/german/grammar/function-words-negation/nicht-placement/` | move | P0 |
| German | Negative pronouns and adverbs | `/learn/german/grammar/function-words/negative-pronouns-and-adverbs/` | `/learn/german/grammar/function-words-negation/negative-pronouns-and-adverbs/` | move | P1 |
| German | Mood, politeness, and reports overview |  | `/learn/german/grammar/mood-politeness-reports/` | create | P0 |
| German | Konjunktiv II | `/learn/german/grammar/verbs/konjunktiv-ii/` | `/learn/german/grammar/mood-politeness-reports/konjunktiv-ii/` | move | P1 |
| German | Würde forms | `/learn/german/grammar/verbs/wuerde-forms/` | `/learn/german/grammar/mood-politeness-reports/wuerde-forms/` | move | P1 |
| German | Hätte, wäre, könnte | `/learn/german/grammar/verbs/haette-waere-koennte/` | `/learn/german/grammar/mood-politeness-reports/haette-waere-koennte/` | move | P1 |
| German | Polite requests | `/learn/german/grammar/verbs/polite-requests/` | `/learn/german/grammar/mood-politeness-reports/polite-requests/` | move | P0 |
| German | Reported speech | `/learn/german/grammar/verbs/reported-speech/` | `/learn/german/grammar/mood-politeness-reports/reported-speech/` | move | P1 |
| German | Word formation and particles overview |  | `/learn/german/grammar/word-formation-particles/` | create | P1 |
| German | Particle verbs | `/learn/german/grammar/verbs/particle-verbs/` | `/learn/german/grammar/word-formation-particles/particle-verbs/` | move | P1 |
| German | Separable verbs | `/learn/german/grammar/verbs/separable-verbs/` | `/learn/german/grammar/word-formation-particles/separable-verbs/` | move | P1 |
| German | Inseparable prefix verbs | `/learn/german/grammar/verbs/inseparable-prefix-verbs/` | `/learn/german/grammar/word-formation-particles/inseparable-prefix-verbs/` | move | P1 |
| German | Particle verbs versus plain verbs | `/learn/german/grammar/verbs/particle-verbs-vs-plain-verbs/` | `/learn/german/grammar/word-formation-particles/particle-verbs-vs-plain-verbs/` | move | P1 |
| German | Compound nouns | `/learn/german/grammar/nouns-articles/compound-noun-gender/` | `/learn/german/grammar/word-formation-particles/compound-nouns/` | move, rename | P1 |
| German | Konjunktiv I | `/learn/german/grammar/verbs/konjunktiv-i/` | `/learn/german/grammar/mood-politeness-reports/konjunktiv-i/` | move, reference | REF |
| German | Common mistakes overview | `/learn/german/common-mistakes/` | `/learn/german/common-mistakes/` | keep | P0 |
| German | English to German mistakes | `/learn/german/common-mistakes/from-english/` | `/learn/german/common-mistakes/from-english/` | keep | P1 |
| German | Swedish to German mistakes | `/learn/german/common-mistakes/from-swedish/` | `/learn/german/common-mistakes/from-swedish/` | keep | P1 |
