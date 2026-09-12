# Phase 5 Navigation Blueprint

This is the approved target navigation for the A1-B2 everyday language
reference. It defines the learner-facing shelves and the exact page order. The
trees are aligned at the level of learner questions, not identical linguistic
depth.

## Scope and status

**Status:** Frozen implementation baseline.

The target covers practical production and lookup needs from A1 through B2:
ordinary statements, questions, negation, requests, plans, past events,
conditions, explanations, opinions, and everyday written or spoken reports.
Academic detail, literary forms, and rare edge cases remain reference material
and do not determine the visible navigation.

Status markers:

- `[keep]` existing route and role are retained
- `[move]` existing page moves to the target route
- `[create]` new page required for the target reference
- `[move, rename]` existing page moves and receives a clearer target slug
- `[move, reference]` existing page moves and remains visible as reference
  material outside the recommended core sequence
- `[merge]` existing content is consolidated into another canonical page and
  the redundant source route is removed

`REF` in the Topic Inventory describes learning priority, not visibility.
Retained reference pages still use `[keep]`; moved reference pages use
`[move, reference]`. Every reference page remains visible at the end of its
shelf and available through navigation and search, but outside the recommended
core learning sequence.

Every shelf has an overview page. In the trees below, a directory/group line
names the target shelf; its action is given only by the explicit `overview`
line beneath it. A shelf is visible only when it contains at
least two useful pages or represents a high-frequency learner decision. Thin
topics are exposed from the grammar overview and linked contextually instead
of creating empty sidebar groups.

## Navigation principles

The internal common taxonomy is:

1. Sentence structure
2. Questions and negation
3. Nouns and articles
4. Pronouns and sentence roles
5. Verbs and time forms
6. Verb patterns and voice
7. Adjectives and adverbs
8. Prepositions and function words
9. Mood, politeness, and reported information
10. Word formation and particles
11. Common mistakes and transfer diagnostics

The visible sidebar uses a compact backbone and adds language-specific shelves
only where page count and lookup value justify them. `Common Mistakes` is a
top-level group outside `Grammar` for every language.

Learning-path, sentence-pattern, vocabulary, pronunciation, and cheat-sheet
content remain outside `Grammar`. Swedish `Sentence Patterns` and `Vocabulary`
are practical entry points, not hidden grammar shelves; grammar overviews link
to them and their pages link back to the rule that explains the pattern.

## Breaking route migration policy

Route stability is not a Phase 5 requirement. When a route moves or is renamed,
update the complete canonical and translated surface in one change:

1. rename or move the source content file;
2. update `astro.config.mjs` and the section overview page;
3. update every page-body link and `related` route;
4. update mirrored `/de/` and `/sv/` files, metadata, and links together;
5. apply the
   [affected-localized-mirror rule](./roadmap-phase-5-align-grammar-ia.md#affected-localized-mirrors-and-phase-7-boundary)
   to every authored mirror affected by the change;
6. search the whole repository for the old route;
7. run `npm run quality`, `npm run build -- --base /jp-language-hub`,
   `npm run report:length`, and `git diff --check`.

No redirects are required. A route move is incomplete while an old canonical
path remains in source, sidebar, metadata, or translation files.

## Shared visible backbone

Where a language-specific tree does not override it, the visible order is:

1. `Sentence Structure`
2. `Questions & Negation`
3. `Nouns & Articles`
4. `Pronouns & Roles`
5. `Verbs & Time Forms`
6. `Adjectives & Adverbs`
7. `Prepositions & Function Words`
8. `Common Mistakes`

`Verb Patterns & Voice` and `Mood, Politeness & Reports` become visible extras
when their language tree has enough pages. `Word Formation & Particles` is a
visible extra for German and English; Swedish keeps it inside verb patterns
until more independent word-formation pages exist.

## Unchanged outer navigation

The Blueprint owns the Phase-5 navigation slice, not unrelated outer or shared
routes. Preserve this surrounding order while replacing the approved Grammar,
Common Mistakes, and Swedish Numbers entries:

- global `Home` remains first
- Swedish keeps Learning Path, Important, Grammar, Vocabulary, Sentence
  Patterns, Pronunciation Basics, Common Mistakes, and Cheat Sheets
- English and German keep Overview, Grammar, and Common Mistakes
- every learning-language sidebar keeps the shared tail: False Friends, Direct
  Translation Errors, and Practice

## Learn Swedish

`/learn/swedish/` remains the language landing page; `Learning Path` is the
first visible sidebar entry because it is the primary guided starting point.

```text
/learn/swedish/vocabulary/numbers       [move]
```

Visible Grammar order:

```text
/learn/swedish/grammar/
  overview                          [keep]
  sentence-structure/
    overview                          [create]
    basic-word-order                  [keep]
    v2                                [keep]
    inversion                         [keep]
    biff                              [keep]
    subordinate-clauses               [create]
    inte-placement                   [keep]
  questions-negation/
    overview                          [create]
    questions                         [create]
    question-words                    [move, rename]
    negation                          [create]
  nouns-articles/
    overview                          [create]
    en-ett                            [keep]
    noun-forms                        [keep]
    plural-overview                   [keep]
    possession                        [create]
  pronouns-roles/
    overview                          [create]
    personal-pronouns                 [create]
    possessive-pronouns               [move]
    sin-sitt-sina                     [move]
    nagon-nagot-ingen-inget           [move]
    demonstratives-har-dar            [move]
    relative-pronouns                 [move]
    reflexive-pronouns                [create]
    man-varandra-varsin               [move]
  verbs-time-forms/
    overview                          [create]
    verb-forms                        [move]
    tense-perspectives                [move]
    present                            [move]
    preterite                          [move]
    perfect                            [move]
    future-forms                      [create]
  adjectives-adverbs/
    overview                          [create]
    agreement                         [keep]
    adjective-comparison              [keep]
    adverbs                           [keep]
  prepositions-function-words/
    overview                          [create]
    prepositions                      [move]
    dar-har-adverbs                   [move]
    connectors                        [create]
  verb-patterns-voice/
    overview                          [create]
    verb-groups                       [move]
    particle-verbs                    [move]
    modal-verbs                       [create]
    passive                           [move]
    active-vs-passive                [create]
    imperative                        [create]
  mood-politeness-reports/
    overview                          [create]
    conditionals                      [create]
    reported-speech                   [create]
```

Swedish `polite-requests` and `conditions-and-consequences` remain under
`sentence-patterns`; the grammar overview links them as production examples.
Swedish numbers move to `/learn/swedish/vocabulary/numbers` and are no longer
part of the Grammar navigation. Phase 5 creates neither a Swedish Cases route
nor a Word Formation route or shelf. Case information is reached through
Pronouns & Roles and Possession. Particle verbs remain under Verb Patterns &
Voice, while the existing noun pages retain the compound rules relevant to
their topics.

Common Mistakes remains outside Grammar:

```text
/learn/swedish/common-mistakes/
  overview                            [keep]
  from-german                        [keep]
  from-english                       [keep]
```

## Learn English

Visible Grammar order:

```text
/learn/english/grammar/
  overview                            [keep]
  sentence-structure/
    overview                          [keep]
    sentence-order                    [keep]
    subordinate-clauses               [create]
    relative-clauses                  [create]
    adverb-placement                  [keep]
  questions-negation/
    overview                          [create]
    questions-and-do-support          [move]
    negation                          [create]
    any-vs-no                         [create]
  nouns-articles/
    overview                          [keep]
    articles                          [keep]
    countable-and-uncountable-nouns   [keep]
    plural-nouns                      [create]
    possession                        [create]
  pronouns-roles/
    overview                          [create]
    personal-pronouns                 [create]
    possessive-pronouns               [create]
    reflexive-pronouns                [create]
    demonstrative-pronouns            [create]
    indefinite-pronouns               [create]
    sentence-roles-and-pronoun-case   [create]
  verbs-time-forms/
    overview                          [move]
    choosing-time-form                [move]
    simple-present                    [move]
    present-progressive               [move]
    simple-present-vs-present-progressive [move]
    simple-past                       [move]
    past-progressive                  [create]
    past-perfect                      [create]
    present-perfect                   [move]
    present-perfect-progressive       [create]
    simple-past-vs-present-perfect    [move]
    will-future                       [move]
    going-to-future                   [move]
    future-progressive                [move, reference]
    future-perfect                    [move, reference]
  adjectives-adverbs/
    overview                          [create]
    adjectives                        [create]
    adjective-order                   [create]
    adjective-comparison              [create]
    adverbs                           [create]
    adjectives-vs-adverbs             [create]
  prepositions-function-words/
    overview                          [create]
    place-and-direction               [create]
    time-prepositions                 [create]
    dependent-prepositions            [create]
    connectors                        [create]
  verb-patterns-voice/
    overview                          [create]
    auxiliary-verbs                  [create]
    modal-verbs                       [create]
    imperative                        [create]
    passive                           [create]
    active-vs-passive                [create]
    gerunds-and-infinitives           [create]
  mood-politeness-reports/
    overview                          [create]
    polite-requests                   [create]
    conditionals                      [create]
    reported-speech                   [create]
  word-formation-particles/
    overview                          [create]
    phrasal-verbs                     [create]
    word-families                     [create]
```

The English tree needs the largest creation batch. Future progressive and
future perfect remain visible at the end of the Time Forms shelf, but their
`REF` priority keeps them outside the recommended A1-B2 core sequence.

Common Mistakes remains outside Grammar:

```text
/learn/english/common-mistakes/
  overview                            [keep]
  from-german                        [keep]
  from-swedish                       [create]
```

## Learn German

German has enough depth to expose additional shelves. Its visible order is:

```text
/learn/german/grammar/
  overview                            [keep]
  sentence-structure/
    overview                          [keep]
    main-clause-verb-second           [keep]
    questions                         [keep]
    subordinate-clauses               [keep]
    verb-bracket                      [keep]
    coordinating-conjunctions         [keep]
    subordinating-conjunctions        [keep]
    relative-clauses                  [keep]
    infinitive-clauses                [keep]
  nouns-articles/
    overview                          [keep]
    articles-and-gender               [keep]
    der-die-das                       [keep]
    ein-words                         [keep]
    plural-nouns                      [keep]
  cases/
    overview                          [keep]
    cases-as-roles                    [keep]
    nominative                        [keep]
    accusative                        [keep]
    dative                            [keep]
    genitive                          [keep]
  pronouns-roles/
    overview                          [move]
    personal-pronouns                 [move]
    possessive-pronouns               [move]
    reflexive-pronouns                [move]
    demonstrative-pronouns            [move]
    indefinite-pronouns               [move]
    pronoun-case-choice               [move]
  verbs-time-forms/
    overview                          [move]
    choosing-time-form                [move]
    present-tense                     [move]
    perfect-tense                     [move]
    preterite                         [move]
    past-perfect                      [create]
    present-vs-perfect-vs-preterite   [move]
    werden-future                     [move]
    present-tense-for-future          [move]
    choosing-future-forms             [move]
    future-perfect                    [move, reference]
  verb-patterns-voice/
    overview                          [create]
    modal-verbs                       [move]
    modal-verbs-meaning               [move]
    infinitive-with-zu                [move]
    infinitive-without-zu             [move]
    imperative                        [move]
    passive                           [move]
    active-vs-passive                [move]
  adjectives-adverbs/
    overview                          [move]
    adjective-endings                 [move]
    adjective-comparison              [move]
    adverbs                           [move]
    adjectives-vs-adverbs             [move]
  prepositions/
    overview                          [keep]
    prepositions-and-case             [keep]
    accusative-prepositions           [keep]
    dative-prepositions               [keep]
    two-way-prepositions              [keep]
    prepositional-adverbs             [keep]
    dependent-prepositions            [create]
    genitive-prepositions             [keep]
  function-words-negation/
    overview                          [move]
    negation                          [move]
    nicht-vs-kein                     [move]
    nicht-placement                   [move]
    negative-pronouns-and-adverbs     [move]
  mood-politeness-reports/
    overview                          [create]
    konjunktiv-ii                     [move]
    wuerde-forms                      [move]
    haette-waere-koennte              [move]
    polite-requests                   [move]
    reported-speech                   [move]
    konjunktiv-i                     [move, reference]
  word-formation-particles/
    overview                          [create]
    particle-verbs                    [move]
    separable-verbs                  [move]
    inseparable-prefix-verbs          [move]
    particle-verbs-vs-plain-verbs     [move]
    compound-nouns                    [move, rename]
```

`compound-noun-gender` is renamed to `compound-nouns` and
has one canonical home under Word Formation; Nouns & Articles links to it.
The current `active` page is merged into `active-vs-passive` rather than moved
to a separate target route. `active-vs-passive` remains the canonical decision
page, while `passive` remains the form-focused page. Konjunktiv I remains
visible at the end of Mood, Politeness & Reports as reference material, outside
the recommended core sequence. Genitive Prepositions likewise remains visible
at the end of Prepositions because its Inventory priority is `REF`.

German deliberately overrides two parts of the shared visible backbone.
Questions remain under Sentence Structure because their construction belongs
to verb position and clause shape. Negation remains under Function Words &
Negation because form choice and placement are already a substantial coherent
shelf. The German grammar overview must connect both shelves under the shared
learner question "How do I ask and negate?" rather than duplicating routes.

Swedish and English place `Connectors` under Prepositions & Function Words
because each language has one compact page whose main lookup value is choosing
a joining word. German keeps coordinating and subordinating conjunctions under
Sentence Structure because their central lookup value is their effect on
clause order.

Common Mistakes remains outside Grammar:

```text
/learn/german/common-mistakes/
  overview                            [keep]
  from-english                       [keep]
  from-swedish                       [keep]
```

## Overview requirements

Every grammar root overview shows the shared learner questions in order, then
the language-specific deep areas, then links to practical entry paths. Every
section overview contains `Choose by` and `Learn in this order`, with no
duplicate canonical page links. Add `Watch for` only where a distinct
diagnostic warning helps the learner; do not create the section merely for
symmetry. Thin topics without their own route or shelf are surfaced
contextually from the grammar overview and the nearest canonical pages.
