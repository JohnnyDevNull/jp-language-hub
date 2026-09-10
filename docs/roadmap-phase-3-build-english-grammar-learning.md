# Phase 3: Build English Grammar Learning

This plan expands the third roadmap bucket into the first real English
learning-language pass. The goal is to make English useful as its own learning
tree for German-speaking learners, while using Swedish only where it genuinely
clarifies a contrast.

Status: implemented on 2026-09-10.

## Implemented Result

The phase shipped a first real English grammar tree:

- English overview, grammar overview, and sidebar navigation now expose the new
  learning routes
- sentence structure covers sentence order, questions and do-support, and
  adverb placement
- verbs and time forms include a central `choosing-time-form` decision page
- present, past, present perfect, will future, going to future, future
  progressive, and future perfect each have individual pages
- simple present vs present progressive and simple past vs present perfect are
  separate decision pages
- nouns and articles cover articles plus countable and uncountable nouns
- German-to-English mistakes is connected as a diagnostic hub

## Desired Outcome

After this phase, the English learning tree should no longer feel like a
placeholder:

- `/learn/english/` introduces a coherent first learning path
- grammar pages focus on English problems that German learners actually need
- Swedish appears as a comparison language only where it adds teaching value
- time-form pages separate individual forms from decision pages
- the first time-form overview answers "Which time form should I choose?"
- the existing German-to-English mistakes page becomes connected to the new
  grammar pages instead of standing alone
- sidebar, overview, related topics, and metadata expose the new routes

Do not copy the Swedish tree one to one. Reuse the same page grammar,
components, metadata conventions, and validation rules, but let the English
tree follow English-specific learner problems.

## Work Model

Use a coordinated advisor-and-sub-agent workflow if implementation begins as a
broad content pass. A single engineer can maintain this plan and make narrow
documentation edits, but the actual phase touches enough content, navigation,
metadata, and cross-links that scoped execution and independent review are
safer.

Recommended shape:

- Wave 1: read-only audit and exact English information architecture
- Wave 2: grammar foundation pages for sentence order and questions
- Wave 3: time-form pages, including the choosing overview
- Wave 4: German-transfer integration and overview/sidebar polish
- Final pass: validation, rendered-length check, and independent content review

Do not start by generating many tense pages in parallel without a shared
decision model. The main risk is producing accurate pages that do not help a
learner choose between forms.

## Sub-Bucket 1: English Tree Audit and IA

Purpose: turn the roadmap bucket into exact routes, sidebar groups, and page
relationships before writing content.

Audit:

- current `/learn/english/` placeholder content
- existing `learn/english/common-mistakes/from-german.mdx`
- Swedish pages that already explain English contrasts well enough to reuse as
  teaching references
- sidebar behavior for the light English tree in `astro.config.mjs`
- metadata, `related` links, and body-link rules for new English pages

Deliverables:

- route list for the first English grammar pass
- sidebar grouping for English grammar pages
- updated English overview structure
- linking plan between detail pages, contrast pages, and the mistakes hub
- shared page template for English grammar pages

## Sub-Bucket 2: Sentence Structure Foundation

Purpose: establish the core word-order model before tense choices, because
German-to-English tense mistakes often appear inside German word-order habits.

Recommended first pages:

- `grammar/sentence-structure/sentence-order`
- `grammar/sentence-structure/questions-and-do-support`

Possible follow-up page if the audit confirms it deserves its own route:

- `grammar/sentence-structure/adverb-placement`

Teaching focus:

- English default order is stricter than German main-clause order
- fronted time or place expressions normally do not trigger inversion
- questions need auxiliary movement, and many present/past questions need
  do-support
- frequency adverbs usually sit before the main verb, but after `be` and after
  auxiliaries

The sentence-order page should be short and foundational. It should link
forward to questions, adverb placement, and the German-to-English mistakes page.

## Sub-Bucket 3: Choosing Time Form

Purpose: create the central decision page for English time forms before adding
or expanding individual tense pages.

Primary route:

- `grammar/verbs/choosing-time-form`

This page should answer "Which English time form should I choose?" in seconds.
It should not teach every form exhaustively. Each row or decision block gives a
short learner-facing cue, one example, and a link to the detail page.

Recommended decision order:

| Use case | Choose | Example |
| --- | --- | --- |
| facts, routines, habits | simple present | `I work from home.` |
| happening now or temporary | present progressive | `I am working from home this week.` |
| finished past time | simple past | `I worked there in 2022.` |
| past connected to now | present perfect | `I have worked here for three years.` |
| decision, promise, prediction | will future | `I will call you later.` |
| plan or evidence | going to future | `I am going to call her.` |
| future arrangement | present progressive for future | `I am meeting her tomorrow.` |
| timetable or schedule | simple present for future | `The train leaves at 8.` |
| in progress at a future time | future progressive | `I will be working at 8.` |
| completed before a future point | future perfect | `I will have finished by Friday.` |

This page is the first defense against isolated tense pages becoming a
grammar-book list. It should use concise examples, fast labels, and direct
links rather than long theory.

## Sub-Bucket 4: Present and Past Time Forms

Purpose: split individual form explanations from the contrast pages where a
learner decides between two forms.

Recommended order:

1. `grammar/verbs/simple-present`
2. `grammar/verbs/present-progressive`
3. `grammar/verbs/simple-present-vs-present-progressive`
4. `grammar/verbs/simple-past`
5. `grammar/verbs/present-perfect`
6. `grammar/verbs/simple-past-vs-present-perfect`

Individual time-form pages should cover:

- form
- core meaning
- common time expressions or context clues
- German-transfer traps
- short direct comparison if German or Swedish helps
- QuickCheck with production prompts
- links back to `choosing-time-form` and forward to relevant contrast pages

Contrast pages should not duplicate both detail pages. They should be decision
pages:

- choose simple present for facts, routines, and stable situations
- choose present progressive for now, temporary situations, and change in
  progress
- choose simple past for a finished past time
- choose present perfect for experience, result, unfinished time, or duration
  up to now

The existing German-to-English mistakes page already contains material for
`since/for`, finished-time present perfect mistakes, and adverb placement. Use
that page as a hub and cross-link it rather than duplicating all examples.

## Sub-Bucket 5: Future Time Forms

Purpose: include future forms from the start without pretending that English
has one neutral future tense.

Recommended order after present and past:

1. `grammar/verbs/will-future`
2. `grammar/verbs/going-to-future`
3. `grammar/verbs/future-progressive`
4. `grammar/verbs/future-perfect`
5. `grammar/verbs/choosing-future-forms`

Use `will future` rather than `simple future` as the main route label, while
explaining that many school grammars call it the simple future. This is clearer
for learners because English future meaning is split across `will`, `going to`,
present progressive, and simple present.

Teaching focus:

- `will` for decisions, promises, offers, and predictions
- `going to` for intentions and evidence-based predictions
- present progressive for arranged future events
- simple present for timetables and schedules
- future progressive for an action in progress at a future point
- future perfect for completion before a future point

The first phase should include `choosing-time-form` and the individual future
pages if capacity allows. `choosing-future-forms` can be added in the same pass
only if the future pages are substantial enough to need their own decision hub.
Otherwise, keep future-form choice on `choosing-time-form` until real content
pressure appears.

## Sub-Bucket 6: German-Transfer Mistakes Integration

Purpose: make the English tree feel diagnostic, not just descriptive.

Update or extend:

- `common-mistakes/from-german`
- English overview
- related topics across new grammar pages

The mistakes page should remain a transfer-error hub. It can point to:

- sentence order
- questions and do-support
- adverb placement if separate
- simple past vs present perfect
- countable and uncountable nouns
- articles

Avoid turning the mistakes page into a duplicate grammar chapter. Its value is
diagnosis: "This sentence sounds German; here is the English page that fixes
the pattern."

## Sub-Bucket 7: Articles and Countability

Purpose: add the first noun-phrase problems after the verb/time-form core is
usable.

Recommended pages:

- `grammar/nouns-articles/articles`
- `grammar/nouns-articles/countable-and-uncountable-nouns`
- possible later contrast page: `articles-and-countability`

Do not split articles and countability too mechanically. They can be separate
detail pages, but the overview and related links should make clear that
English article choice often depends on countability, singular/plural form, and
generic vs specific meaning.

## Suggested First Implementation Sequence

1. Create the English grammar route structure and sidebar group.
2. Replace the English placeholder overview with a real entry page.
3. Add `sentence-order`.
4. Add `questions-and-do-support`.
5. Add `choosing-time-form`.
6. Add simple present, present progressive, and their contrast page.
7. Add simple past, present perfect, and their contrast page.
8. Add will future, going to future, future progressive, and future perfect.
9. Decide whether `choosing-future-forms` is needed immediately.
10. Integrate `common-mistakes/from-german` with the new pages.
11. Add articles and countability pages.
12. Run quality, build, length report, and independent review.

This order gives learners a working path quickly: sentence order, questions,
time-form choice, then the most common German-to-English tense traps.

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
- `grammarLanguage` is `en` for English learning pages
- `metaLanguage` remains `en` for root-locale source pages
- `comparisonLanguages` is present only where a real comparison appears
- English examples are marked with `lang="en"` where needed
- German and Swedish examples are marked with `lang="de"` and `lang="sv"`
- no new page copies Swedish-specific structure without an English reason
- contrast pages act as decision pages, not duplicated detail pages
