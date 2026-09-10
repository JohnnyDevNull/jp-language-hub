# Phase 4: Build German Grammar Learning

This plan expands the fourth roadmap bucket into a broad German grammar
reference build. The goal is to make German useful as its own learning tree and
avoid leaving core grammar areas in an undefined "later" bucket.

Status: planned.

## Desired Outcome

After this phase, the German learning tree should no longer be a placeholder:

- `/learn/german/` introduces a coherent grammar reference path
- grammar pages focus on the German problems English and Swedish learners
  actually need
- the tree covers the major reference topics a learner expects from a German
  grammar hub
- cases are taught as sentence roles before declension tables become the focus
- prepositions, pronouns, negation, relative clauses, and conjunctions are
  connected to those sentence roles instead of becoming isolated chapters
- articles and gender are introduced as a decision system, not as vocabulary
  trivia alone
- verb-position pages give learners a practical model for main clauses,
  questions, subordinate clauses, and particle verbs
- modal verbs, infinitives, imperatives, active/passive voice, and subjunctive
  patterns reuse the same verb-bracket model
- adjective endings are connected to article signals and case, not isolated as
  a memorization table
- English-to-German and Swedish-to-German mistakes become diagnostic hubs
- sidebar, overview, related topics, and metadata expose the new routes

Do not copy the Swedish or English tree one to one. Reuse the same page
grammar, components, metadata conventions, and validation rules, but let the
German tree follow German-specific learner problems.

## Didactic Spine

The phase should teach German as a chain of learner decisions, not as a list of
grammar chapters. Each bucket should make the next one easier:

1. **Who does what to whom?** Cases establish sentence roles.
2. **Which small words force or replace those roles?** Prepositions and
   pronouns apply case to real phrases.
3. **How does the noun phrase show that role?** Articles, gender, and endings
   provide the visible signals.
4. **Where does the verb go?** Main clauses, questions, subordinate clauses,
   particle verbs, and brackets give the sentence shape.
5. **What is negated, connected, or embedded?** Negation, conjunctions,
   relative clauses, and infinitive clauses explain scope and subordination.
6. **When does the event happen?** Time-form pages explain present, past, and
   future choices inside that sentence shape.
7. **Who is foregrounded?** Active/passive pages show how the same event can
   focus the actor or the affected object.
8. **How does description agree or compare?** Adjective endings and comparison
   reuse the case/article signal model after learners already know why those
   signals matter.
9. **How does German mark hypothetical or reported meaning?** Konjunktiv II and
   indirect speech build on verb forms without becoming the entry point.
10. **What went wrong in transfer?** Mistake hubs diagnose English and Swedish
   habits and send learners back to the exact fixing page.

This spine should be visible on `/learn/german/`, the grammar overview, and the
major index pages. A learner should always know whether they are choosing a
role, a signal, a position, a scope, a time form, a voice, or a mood.

## Work Model

Use a coordinated advisor-and-sub-agent workflow if implementation begins as a
broad content pass. A single engineer can maintain this plan and make narrow
documentation edits, but the actual phase touches enough content, navigation,
metadata, cross-links, and comparison examples that scoped execution and
independent review are safer.

Recommended shape:

- Wave 1: read-only audit and exact German information architecture
- Wave 2: cases, prepositions, pronouns, articles, and gender as the
  noun-phrase foundation
- Wave 3: verb position, negation, subordinate structures, particle verbs,
  modal verbs, and infinitive patterns
- Wave 4: choosing-time-form, present/past pages, future pages, voice pages,
  and mood pages in sequence
- Wave 5: adjective endings, comparison, transfer-mistake integration, and
  final navigation polish
- Final pass: validation, rendered-length check, and independent content review

Do not start by generating declension tables in parallel without a shared
decision model. The main risk is accurate content that still leaves learners
unable to choose the right form in a sentence.

## Sub-Bucket 1: German Tree Audit and IA

Purpose: turn the roadmap bucket into exact routes, sidebar groups, and page
relationships before writing content.

Audit:

- current `/learn/german/` placeholder content
- English and Swedish pages that already explain useful German contrasts
- existing comparison examples that can point into the new German tree
- sidebar behavior for the light German tree in `astro.config.mjs`
- metadata, `related` links, and body-link rules for new German pages

Deliverables:

- route list for the German grammar reference build
- sidebar grouping for German grammar pages
- updated German overview structure
- linking plan between detail pages, decision pages, and mistakes hubs
- shared page template for German grammar pages
- prerequisite map for every planned route

Recommended first sidebar groups:

```text
/learn/german/
  grammar/
    cases/
    prepositions/
    nouns-articles/
    pronouns/
    sentence-structure/
    verbs/
    adjectives/
    function-words/
  common-mistakes/
```

This structure keeps the learner's mental model clear: first who does what to
whom, then how noun phrases signal that role, then where the verb goes.

Shared page template:

```text
KeyTakeaway
TagList
short intro
Use this now / fast decision path
Core rule
minimal form table or SentenceSchema where useful
Direct comparison only where transfer pressure is real
MistakeBox or MemoryTip
QuickCheck
RelatedTopics
```

For decision pages, use `Use this now` as the page's center of gravity. Detail
pages may include form tables, but the first screen should still answer a
learner's immediate lookup question.

## Sub-Bucket 2: Cases as Sentence Roles

Purpose: make cases understandable before learners see full declension systems.

Recommended first pages:

- `grammar/cases/cases-as-roles`
- `grammar/cases/nominative`
- `grammar/cases/accusative`
- `grammar/cases/dative`
- `grammar/cases/genitive`

Teaching focus:

- nominative marks the subject role
- accusative marks the direct object or motion-into target in common patterns
- dative marks recipient, indirect object, location with two-way prepositions,
  and many fixed verb/preposition patterns
- genitive is less common in speech than nominative, accusative, and dative,
  but it belongs in the reference so formal writing and fixed phrases are not
  left unexplained
- case choice should be introduced through sentence meaning before ending
  tables

The central `cases-as-roles` page should answer "Which case do I need here?"
quickly. Detail pages then explain the forms, signals, and common transfer
traps.

Recommended decision shape:

| Question | Likely case | Example |
| --- | --- | --- |
| Who or what does the action? | nominative | `Der Hund schlaeft.` |
| Who or what is directly affected? | accusative | `Ich sehe den Hund.` |
| To whom or for whom? | dative | `Ich gebe dem Hund Wasser.` |
| Where, with a two-way preposition? | dative | `Das Glas steht auf dem Tisch.` |
| Where to, with a two-way preposition? | accusative | `Ich stelle das Glas auf den Tisch.` |

Use `LanguageComparison` only where English or Swedish transfer genuinely
clarifies the role. Do not make every example a three-language display.

Didactic review point: this bucket should avoid article-ending overload. It
can show `der/den/dem` as a visible clue, but full paradigms belong in the
articles bucket. The case pages teach "which role?", not every possible form.

## Sub-Bucket 3: Prepositions and Case

Purpose: make prepositions the bridge between abstract case roles and real
phrases learners actually need.

Recommended pages:

- `grammar/prepositions/prepositions-and-case`
- `grammar/prepositions/accusative-prepositions`
- `grammar/prepositions/dative-prepositions`
- `grammar/prepositions/two-way-prepositions`
- `grammar/prepositions/genitive-prepositions`
- `grammar/prepositions/prepositional-adverbs`

Teaching focus:

- many prepositions assign a fixed case regardless of sentence role
- two-way prepositions choose accusative for direction and dative for location
- common prepositional phrases should be learned as chunks
- `da-` and `wo-` compounds such as `damit`, `dafuer`, and `woran` replace or
  ask about prepositional objects
- English and Swedish prepositions rarely map one-to-one to German

The overview page should answer "Which case follows this preposition?" quickly,
then link to the fixed-case and two-way detail pages.

Didactic review point: this bucket should come immediately after cases. A
learner who knows "dative marks recipient/location" still needs to learn that
`mit`, `bei`, and location with two-way prepositions force that choice in
actual phrases.

## Sub-Bucket 4: Articles and Gender

Purpose: connect grammatical gender, article choice, and case signals into one
learner-facing noun-phrase model.

Recommended pages:

- `grammar/nouns-articles/articles-and-gender`
- `grammar/nouns-articles/der-die-das`
- `grammar/nouns-articles/ein-words`
- `grammar/nouns-articles/plural-nouns`
- `grammar/nouns-articles/compound-noun-gender`

Teaching focus:

- gender belongs to the noun and must be learned with it
- article endings often carry the case and gender signal
- definite and indefinite articles share a signal system but not identical
  visible endings
- plural has its own article and ending behavior
- compound nouns take the gender of the final noun

The reference build should prioritize usable choices over exhaustive paradigms.
Tables are useful here, but they must be anchored by the learner question:
"What signal do I need in this noun phrase?"

Recommended decision layers:

1. learn the noun with its article
2. decide singular or plural
3. decide definite or indefinite meaning
4. decide the case from the sentence role
5. choose the visible article signal

Do not make gender prediction the main promise of the page. German gender has
patterns, but the didactic payoff is helping learners store and use gender
reliably.

## Sub-Bucket 5: Pronouns and Reference

Purpose: make case visible on pronouns before learners meet denser clause
structures and transfer mistakes.

Recommended pages:

- `grammar/pronouns/personal-pronouns`
- `grammar/pronouns/possessive-pronouns`
- `grammar/pronouns/reflexive-pronouns`
- `grammar/pronouns/demonstrative-pronouns`
- `grammar/pronouns/indefinite-pronouns`
- `grammar/pronouns/pronoun-case-choice`

Teaching focus:

- personal pronouns change visibly by case: `ich`, `mich`, `mir`
- possessive pronouns behave like article words and connect back to article
  endings
- reflexive pronouns depend on the verb and the object role
- demonstratives can point, contrast, or replace a noun phrase
- indefinite pronouns such as `man`, `jemand`, `niemand`, `etwas`, and `nichts`
  need their own practical lookup route
- pronoun choice should be taught as reference plus case, not as a memorized
  chart alone

The `pronoun-case-choice` page should be a decision page: "Which pronoun form
do I need in this sentence?" It should link back to `cases-as-roles` and
forward to relative clauses.

## Sub-Bucket 6: Verb Position and Clause Shape

Purpose: establish German word-order rules as sentence-position rules, not as
loose translation habits.

Recommended pages:

- `grammar/sentence-structure/main-clause-verb-second`
- `grammar/sentence-structure/questions`
- `grammar/sentence-structure/subordinate-clauses`
- `grammar/sentence-structure/verb-bracket`
- `grammar/sentence-structure/coordinating-conjunctions`
- `grammar/sentence-structure/subordinating-conjunctions`
- `grammar/sentence-structure/relative-clauses`
- `grammar/sentence-structure/infinitive-clauses`

Teaching focus:

- finite verb in second position in ordinary main clauses
- yes/no questions start with the finite verb
- question words occupy the first position, then the finite verb follows
- subordinate conjunctions send the finite verb to the end
- coordinating conjunctions connect clauses without changing finite-verb
  position
- relative clauses reuse pronouns and subordinate verb-final order
- infinitive clauses with `zu` create another bracket-like late-verb pattern
- compound tense, modal verbs, and separable prefixes create a verb bracket

Use `SentenceSchema` for every clause-position rule. German word order is
where the visual schema earns its keep.

The page `main-clause-verb-second` should explicitly distinguish German V2
from English stable subject-verb-object order and from Swedish V2 only where
that comparison helps the reader transfer an existing model.

Didactic review point: put `verb-bracket` before particle verbs do heavy work.
Learners need the bracket model before they can understand why particles,
participles, infinitives, and passive participles all land late in the clause.

## Sub-Bucket 7: Negation and Scope

Purpose: teach `nicht`, `kein`, and negative scope as sentence decisions, not
as a list of equivalent "not" words.

Recommended pages:

- `grammar/function-words/negation`
- `grammar/function-words/nicht-vs-kein`
- `grammar/function-words/nicht-placement`
- `grammar/function-words/negative-pronouns-and-adverbs`

Teaching focus:

- use `kein` to negate an indefinite noun phrase
- use `nicht` to negate verbs, adjectives, adverbs, definite noun phrases, or
  whole clauses
- `nicht` placement depends on what is being negated
- negative pronouns and adverbs such as `niemand`, `nichts`, `nie`, and
  `nirgendwo` need practical examples
- German usually avoids English-style double negatives in standard reference
  German

The `nicht-placement` page should connect back to sentence fields and
verb-bracket rules. A learner should be able to ask: "What exactly am I
negating?"

## Sub-Bucket 8: Particle Verbs and Verb Brackets

Purpose: give German particle verbs their own practical lookup path while
keeping them connected to the broader verb-position model.

Recommended pages:

- `grammar/verbs/particle-verbs`
- `grammar/verbs/separable-verbs`
- `grammar/verbs/inseparable-prefix-verbs`
- `grammar/verbs/particle-verbs-vs-plain-verbs`

Teaching focus:

- particle and prefix verbs often change the base verb's meaning rather than
  merely adding a small adverb-like idea
- the prefix separates in main clauses and stands in the right bracket
- the prefix stays attached in infinitives and many subordinate forms
- inseparable prefixes stay attached and often carry unstressed meaning changes
- some prefixes can be separable or inseparable with different meanings
- perfect and modal constructions already have a bracket, so examples should
  show how particle verbs behave inside that structure
- learners should store common particle verbs as meaning units, not as random
  prefix translations

Avoid building a broad German verb catalog beyond the planned choosing,
present/past, future, and active/passive blocks unless the audit shows a clear
learner need. The German reference needs sentence shape, practical time-form
choice, and core voice choice more urgently than an exhaustive verb system.

The `particle-verbs` page should be the entry point. It should answer:

```text
Is this verb plain, separable, inseparable, or prefix-dependent?
Does the prefix move?
Does the prefix change the meaning enough that I should learn the verb whole?
```

The `separable-verbs` page should include a small "same sentence, different
clause shape" ladder:

```text
Ich rufe dich an.
Rufst du mich an?
Ich habe dich angerufen.
..., weil ich dich anrufe.
```

That ladder prepares learners for the perfect, future, and passive pages
without turning particle verbs into a tense chapter.

Didactic review point: do not teach German particle verbs as a direct
equivalent of English phrasal verbs. The useful comparison is narrower:
English often puts meaning into a verb plus particle, while German may use a
separable verb, an inseparable prefix verb, or a completely different lexical
verb.

## Sub-Bucket 9: Modal Verbs, Infinitives, and Imperatives

Purpose: make the most common non-finite verb patterns explicit before the
tense and voice pages reuse them.

Recommended pages:

- `grammar/verbs/modal-verbs`
- `grammar/verbs/modal-verbs-meaning`
- `grammar/verbs/infinitive-with-zu`
- `grammar/verbs/infinitive-without-zu`
- `grammar/verbs/imperative`

Teaching focus:

- modal verbs put the main verb in the infinitive at the right bracket
- modal meanings such as ability, permission, obligation, desire, and
  likelihood rarely map one-to-one to English or Swedish
- `zu` marks many infinitive clauses, but not after modal verbs
- separable verbs place `zu` between prefix and verb stem in many infinitive
  forms
- imperative forms are common enough to deserve a practical lookup page

The modal-verbs page should connect directly to `verb-bracket`, negation, and
time-form pages. The imperative page should stay practical: command, request,
warning, and polite softened alternatives.

## Sub-Bucket 10: Choosing Time Form

Purpose: create the central decision page for German time forms before adding
or expanding individual tense pages.

Primary route:

- `grammar/verbs/choosing-time-form`

This page should answer "Which German time form should I choose?" in seconds.
It should not teach every form exhaustively. Each row or decision block gives a
short learner-facing cue, one example, and a link to the detail page.

Recommended decision order:

| Use case | Choose | Example |
| --- | --- | --- |
| facts, habits, current states | present tense | `Ich wohne in Berlin.` |
| near future from context | present tense | `Morgen fahre ich nach Hamburg.` |
| spoken past, everyday narration | perfect tense | `Ich habe gestern gelernt.` |
| formal written past or narrative style | preterite | `Er ging nach Hause.` |
| past with common high-frequency verbs | preterite or perfect by register | `Ich war muede.` / `Ich bin muede gewesen.` |
| prediction, assumption, or emphasis on future meaning | werden future | `Er wird morgen kommen.` |
| completed before a future or assumed point | future perfect | `Er wird angekommen sein.` |

This page is the first defense against isolated tense pages becoming a
grammar-book list. It should use concise examples, fast labels, and direct
links rather than long theory.

Didactic review point: this page should be written before the individual tense
pages and then revisited after them. It is the contract for the whole tense
cluster: each detail page must answer one row from this decision table.

## Sub-Bucket 11: Present and Past Time Forms

Purpose: split individual German time-form explanations from the contrast page
where a learner decides between forms.

Recommended order:

1. `grammar/verbs/present-tense`
2. `grammar/verbs/perfect-tense`
3. `grammar/verbs/preterite`
4. `grammar/verbs/present-vs-perfect-vs-preterite`

Individual time-form pages should cover:

- form
- core meaning
- common time expressions or context clues
- English-transfer and Swedish-transfer traps
- short direct comparison if English or Swedish helps
- QuickCheck with production prompts
- links back to `choosing-time-form` and forward to the contrast page

The contrast page should not duplicate all detail pages. It should be a
decision page:

- choose present tense for now, habits, general truths, and context-marked near
  future
- choose perfect tense for most spoken past events
- choose preterite for written narration, formal reports, and common verbs
  such as `sein`, `haben`, and modal verbs
- show that German often uses present where English or Swedish uses an explicit
  future form

This block is the German counterpart to the English present-and-past time-form
pass. Keep it connected to `verb-bracket`, because perfect tense and modal
patterns depend on the same bracket model.

Recommended progression inside the cluster:

1. present tense as the everyday default for now, habit, general truth, and
   context-marked near future
2. perfect tense as the default spoken past and the first compound-tense
   bracket learners need
3. preterite as a register and text-type choice, not simply "the past tense"
4. contrast page that chooses between them by use case, not by school labels

Avoid teaching German past as a simple English-style split between "simple
past" and "present perfect". The practical learner question is register,
frequency, and whether the form is part of spoken everyday German.

## Sub-Bucket 12: Future Time Forms

Purpose: include future forms from the start without pretending that German
uses one neutral future tense for every future meaning.

Recommended order after present and past:

1. `grammar/verbs/werden-future`
2. `grammar/verbs/future-perfect`
3. `grammar/verbs/present-tense-for-future`
4. `grammar/verbs/choosing-future-forms`

Use `werden future` as the main route label for Futur I, while explaining that
many school grammars call it Futur I. This is clearer for learners because
German future meaning is split across present tense from context, `werden` for
prediction or emphasis, and rarer future-perfect patterns.

Teaching focus:

- present tense for many planned, scheduled, or context-marked future events
- `werden` future for predictions, assumptions, promises, and explicit future
  emphasis
- future perfect for completion before a future point or assumptions about a
  completed event
- present tense with a future time expression as the default everyday pattern
- contrast with English, where a visible future form is often required
- contrast with Swedish, where future meaning often uses auxiliaries or present
  tense depending on the context

This phase includes `choosing-time-form`, the individual future pages, and
`choosing-future-forms`. The future decision page should stay compact and link
back to the central time-form chooser instead of duplicating it.

This block builds on the present-tense page: learners need to understand that
German present tense can already carry future meaning before `werden` future
can be taught as a special choice instead of the default.

Didactic review point: the `present-tense-for-future` page may be a compact
bridge page, but it still needs an independent lookup value: learners should be
able to open it specifically for "Why is German using present for future?"

## Sub-Bucket 13: Active and Passive Voice

Purpose: introduce German voice after the future pages, so learners can
separate `werden` for future meaning from `werden` in the passive.

Recommended order:

1. `grammar/verbs/active`
2. `grammar/verbs/passive`
3. `grammar/verbs/active-vs-passive`

Individual voice pages should cover:

- form
- core meaning
- sentence role changes
- common time-form interactions
- English-transfer and Swedish-transfer traps
- short direct comparison if English or Swedish helps
- QuickCheck with production prompts
- links back to `verb-bracket`, `werden-future`, and relevant case pages

Teaching focus:

- active voice keeps the actor as the subject
- passive voice moves the affected thing or person into subject position
- German process passive uses `werden + Partizip II`
- German state passive uses `sein + Partizip II` and should be introduced as a
  related pattern, not as the main entry point
- passive sentences often hide or demote the actor with `von` or `durch`
- case roles still matter even when the surface subject changes

The contrast page should not duplicate both detail pages. It should be a
decision page:

- choose active when the actor matters or the sentence should feel direct
- choose passive when the action, result, or affected object matters more than
  the actor
- distinguish `werden` future from `werden` passive through the following verb
  shape
- show when English passive maps cleanly to German and when German prefers an
  active or impersonal construction

This block builds on future time forms because `werden` has already appeared.
The page should make the difference explicit: `werden + infinitive` points to
future meaning, while `werden + Partizip II` points to process passive.

Recommended progression inside the cluster:

1. `active` teaches actor-first sentences and keeps case roles visible
2. `passive` introduces process passive first and state passive only as a
   related pattern
3. `active-vs-passive` chooses by information focus, not by mechanical
   transformation

Do not make passive a transformation exercise only. Learners should understand
why German chooses passive: the actor is unknown, irrelevant, obvious, or less
important than the affected object.

## Sub-Bucket 14: Adjective Endings and Comparison

Purpose: introduce adjective endings only after cases and articles have given
learners the required signal model, then add comparison and adverb use as the
rest of the adjective/adverb reference.

Recommended pages:

- `grammar/adjectives/adjective-endings`
- `grammar/adjectives/adjective-comparison`
- `grammar/adjectives/adverbs`
- `grammar/adjectives/adjectives-vs-adverbs`

Teaching focus:

- adjective endings depend on case, gender/number, and article signal
- strong, weak, and mixed endings are easier to understand as signal sharing
  than as three unrelated tables
- the article usually carries the strongest signal; the adjective fills in
  what is missing
- predicate adjectives do not take endings
- comparative and superlative forms need a practical pattern page
- German often uses the same form where English separates adjective and adverb
  forms

The page should include a fast decision path:

```text
1. Is the adjective before the noun?
2. Which case does the noun phrase have?
3. Does the article already show the case/gender signal?
4. Add the ending that completes the signal.
```

Keep the first page compact. If the rendered page becomes a table wall, split
examples into later practice or cheat-sheet work rather than expanding the
reference page indefinitely.

Didactic review point: adjective endings should not appear before the learner
has seen cases and article signals. The page should reuse the exact language of
the articles bucket, especially "visible signal" and "missing signal", so it
feels like a continuation instead of a new memorization system.

## Sub-Bucket 15: Subjunctive, Politeness, and Reported Speech

Purpose: include the core mood patterns a complete German reference needs
without making them the entry point for basic sentence building.

Recommended pages:

- `grammar/verbs/konjunktiv-ii`
- `grammar/verbs/wuerde-forms`
- `grammar/verbs/haette-waere-koennte`
- `grammar/verbs/polite-requests`
- `grammar/verbs/reported-speech`
- `grammar/verbs/konjunktiv-i`

Teaching focus:

- Konjunktiv II expresses hypothetical, unreal, cautious, or polite meaning
- `wuerde + infinitive` is the broad productive pattern
- `haette`, `waere`, and common modal forms such as `koennte` are frequent
  enough to teach explicitly
- polite requests belong here because they are often the first practical use of
  Konjunktiv II
- reported speech and Konjunktiv I are part of the reference, but should be
  framed as formal/written and journalistic rather than everyday beginner
  speech

The mood pages should link back to time forms and modal verbs. They should
avoid giving the impression that learners need Konjunktiv I early for ordinary
conversation.

## Sub-Bucket 16: Transfer Mistakes Integration

Purpose: make the German tree diagnostic, not just descriptive.

Recommended pages:

- `common-mistakes/from-english`
- `common-mistakes/from-swedish`

The mistakes pages should remain transfer-error hubs. They can point to:

- cases as sentence roles
- prepositions and case
- articles and gender
- pronouns and reference
- V2 main-clause order
- subordinate-clause verb-final order
- negation and `nicht` placement
- modal verbs, infinitive clauses, and imperatives
- present vs perfect vs preterite
- German present tense, `werden` future, and future perfect
- active vs passive voice
- particle verbs and verb brackets
- adjective endings
- adjective/adverb comparison
- Konjunktiv II politeness and reported speech

Avoid turning the mistakes pages into duplicate grammar chapters. Their value
is diagnosis: "This sentence follows English or Swedish logic; here is the
German page that fixes the pattern."

Recommended first transfer traps:

- English subject-object order hiding German case roles
- English and Swedish prepositions mapped one-to-one onto German prepositions
- English fixed article system vs German gender and case signals
- English pronoun forms hiding German case distinctions
- Swedish and German V2 similarities that break in subordinate clauses
- English `not` mapped too directly onto `nicht` and `kein`
- English phrasal verbs vs German particle verbs
- English modal meanings mapped too broadly onto one German modal verb
- English and Swedish tense choices mapped too directly onto German present,
  perfect, and preterite
- English future forms mapped too directly onto German `werden`
- English passive mapped too mechanically onto German passive where German
  prefers active or impersonal wording
- English adjective/adverb separation mapped too directly onto German
- English "would" mapped too broadly onto every German conditional or polite
  construction
- Swedish common-gender habits vs German three-gender nouns

Each transfer mistake should have three parts:

1. the learner's likely sentence or decision
2. the reason it follows English or Swedish logic
3. the German page that fixes exactly that logic

The mistakes pages should link out aggressively. They are a triage desk, not a
second grammar course.

## Sub-Bucket 17: Overview, Navigation, and Metadata

Purpose: make the phase discoverable, not just present in files.

Update or create:

- `src/content/docs/learn/german/index.md`
- `src/content/docs/learn/german/grammar/index.md`
- index pages for each German grammar group
- index pages for German prepositions, pronouns, function words, and verbs
- `src/content/docs/learn/german/common-mistakes/index.mdx`
- `RelatedTopics` blocks on all new pages
- `related` frontmatter on all new pages
- sidebar entries in `astro.config.mjs`

Metadata rules:

- `metaLanguage` remains `en` for root-locale German source pages
- `grammarLanguage` is `de` for German learning pages
- `comparisonLanguages` appears only where the page has a real comparison
- page-body links and component `href` props are relative
- `related` frontmatter uses canonical absolute routes
- tags come only from the controlled vocabulary

## Suggested First Implementation Sequence

1. Create the German grammar route structure and sidebar group.
2. Replace the German placeholder overview with a real entry page.
3. Add the German grammar overview and first group index pages.
4. Add cases: `cases-as-roles`, nominative, accusative, dative, and genitive.
5. Add prepositions: overview, accusative, dative, two-way, genitive, and
   prepositional adverbs.
6. Add articles and nouns: `articles-and-gender`, `der-die-das`, `ein-words`,
   plural nouns, and compound noun gender.
7. Add pronouns: personal, possessive, reflexive, demonstrative, indefinite,
   and pronoun-case choice.
8. Add sentence shape: main-clause V2, questions, subordinate clauses,
   conjunctions, relative clauses, infinitive clauses, and verb bracket.
9. Add negation: `nicht-vs-kein`, `nicht-placement`, and negative pronouns or
   adverbs.
10. Add particle verbs after the verb-bracket model exists.
11. Add modal verbs, infinitive-with-`zu`, infinitive-without-`zu`, and
    imperative pages.
12. Add `choosing-time-form`.
13. Add present tense, perfect tense, preterite, and the
    present-vs-perfect-vs-preterite contrast page.
14. Add `werden-future`, future perfect, present tense for future, and the
    choosing-future-forms page.
15. Add active, passive, and active-vs-passive pages after future forms.
16. Add adjective endings, adjective comparison, adverbs, and
    adjectives-vs-adverbs after article and case pages exist.
17. Add Konjunktiv II, `wuerde`, `haette`/`waere`/`koennte`, polite requests,
    reported speech, and Konjunktiv I.
18. Add English-to-German and Swedish-to-German mistakes hubs.
19. Integrate overview pages, related links, metadata, and sidebar entries.
20. Run quality, build, length report, and independent review.

This order gives learners a working German path quickly: sentence roles, noun
phrase signals, verb placement, scope, time-form choice, voice, mood, and then
the most common transfer traps.

## Didactic Review Checklist

Before implementation starts, verify the plan against these questions:

- does every route answer one clear learner lookup question?
- does every decision page link to the detail pages that explain its choices?
- does every detail page link back to the relevant decision page?
- are form tables introduced only after the learner knows what decision the
  table supports?
- are English and Swedish comparisons used only for real transfer pressure?
- does each major bucket reuse vocabulary from earlier buckets instead of
  introducing a separate mental model?
- are thin bridge pages merged into their parent page unless they carry a real
  independent lookup?
- do mistake hubs diagnose and redirect rather than reteach full chapters?

## Validation

Before completing the phase:

```bash
npm run quality
npm run build -- --base /jp-language-hub
npm run report:length
git diff --check
```

Review manually that:

- all page-body links are relative
- `related` frontmatter uses canonical absolute routes
- `grammarLanguage` is `de` for German learning pages
- `metaLanguage` remains `en` for root-locale source pages
- `comparisonLanguages` is present only where a real comparison appears
- German examples are marked with `lang="de"` where needed
- English and Swedish examples are marked with `lang="en"` and `lang="sv"`
- `SentenceSchema` is used for clause-position rules
- German pages do not copy Swedish or English structure without a German reason
- time-form pages separate individual explanations from decision pages
- active/passive pages separate individual explanations from decision pages
- bridge pages are substantial enough to justify their own route
- transfer pages act as diagnostic hubs, not duplicated detail pages
