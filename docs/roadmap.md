# Roadmap

This roadmap starts from the current project state: the Swedish reference MVP
exists and builds successfully. The next work should make it more useful,
pleasant, and resilient before expanding other learning languages.

## Phase 1: Finish the Swedish Reference Experience

Goal: make Swedish feel complete enough to use as the primary reference.

Status: completed on 2026-09-10.

Detailed plan:
[Phase 1: Finish the Swedish Reference Experience](./roadmap-phase-1-finish-swedish-reference-experience.md)

Completed work:

- improved the heaviest reference pages with clearer "use this now" openings
- added small sentence-pattern pages for everyday situations
- added focused vocabulary domains for common daily contexts
- checked remaining language-comparison tables and kept only non-comparison
  data tables in Markdown
- documented over-budget pages where content quality is more important than
  strict length

Implemented candidate content:

- everyday introductions and small talk
- food, shopping, transport, travel, and home vocabulary
- questions, polite requests, directions, travel, and at-home patterns

Still useful future candidates:

- modal verbs and common auxiliary patterns
- common Swedish connectors in short practical patterns
- any remaining real cross-language comparisons should use `LanguageComparison`
  where the content is a real cross-language comparison

## Phase 2: Prepare Real Meta-Language Localization

Goal: make `/de/` and `/sv/` ready to carry translated explanation text
without confusing them with learning-language trees.

Status: completed on 2026-09-10.

Detailed plan:
[Phase 2: Prepare Real Meta-Language Localization](./roadmap-phase-2-prepare-real-meta-language-localization.md)

Completed work:

- define how translated pages mirror English source pages
- localize sidebar labels and learning-language selector labels
- document the translation workflow
- verify that the same learning-language tree works under `/`, `/de/`, and
  `/sv/`
- keep Swedish meta-language work scoped to explanations and UI, not new
  Swedish-learning content

Remaining translation work should happen in small batches after the canonical
English source pages feel stable, because translation otherwise multiplies
churn.

## Phase 3: Build English Grammar Learning

Goal: add English as a learning language, using German as the primary learner
reference and Swedish only where it genuinely helps.

Status: completed on 2026-09-10.

Detailed plan:
[Phase 3: Build English Grammar Learning](./roadmap-phase-3-build-english-grammar-learning.md)

Recommended first topics:

- English sentence order
- questions and do-support
- choosing time form
- simple present
- present progressive
- simple present vs present progressive
- simple past
- present perfect
- simple past vs present perfect
- will future (simple future)
- going to future
- future progressive
- future perfect
- countable and uncountable nouns
- articles
- common German-to-English mistakes

Completed work:

- added a real English grammar tree with overview, sidebar groups, and index
  pages
- added sentence-order, questions/do-support, and adverb-placement pages
- added a central choosing-time-form page
- added individual present, past, present perfect, and future time-form pages
- added targeted contrast pages for simple present vs present progressive and
  simple past vs present perfect
- added articles and countability pages
- expanded German-to-English mistakes into a diagnostic hub linked to the new
  grammar pages

Do not copy the Swedish tree one to one. Use the same page grammar and
metadata conventions, but let English have the structure its own problems
need.

## Phase 4: Build German Grammar Learning

Goal: add German as a learning language after Swedish and English have proven
the shared architecture.

Status: implemented on 2026-09-10.

Detailed plan:
[Phase 4: Build German Grammar Learning](./roadmap-phase-4-build-german-grammar-learning.md)

Recommended scope:

- cases as sentence roles
- prepositions and case
- articles and gender
- pronouns and reference
- verb position in main and subordinate clauses
- negation and scope
- particle verbs and verb brackets
- modal verbs, infinitives, and imperatives
- present, past, and future time-form choices
- active and passive voice
- adjective endings, comparison, and adverbs
- Konjunktiv, politeness, and reported speech
- common English-to-German and Swedish-to-German mistakes

German can use Swedish and English as comparison languages, but it should not
be forced into the Swedish content shape.

## Phase 5: Align Grammar IA Across Learning Languages

Goal: establish a practical everyday A1-B2 grammar reference model and exact
navigation before meta-language translation multiplies the cost of
restructuring.

Status: planning groundwork completed; language implementation and final
quality check planned.

Detailed plan:
[Phase 5: Align Grammar IA Across Learning Languages](./roadmap-phase-5-align-grammar-ia.md)

Supporting artifacts:

- [Phase 5 Navigation Blueprint](./roadmap-phase-5-navigation-blueprint.md)
- [Phase 5 Topic Inventory](./roadmap-phase-5-topic-inventory.md)

Execution plans:

- [Phase 5: Finalize Swedish](./roadmap-phase-5-finalize-swedish.md)
- [Phase 5: Finalize English](./roadmap-phase-5-finalize-english.md)
- [Phase 5: Finalize German](./roadmap-phase-5-finalize-german.md)
- [Phase 5: Quality Check](./roadmap-phase-5-quality-check.md)

The current trees grew in phases, so their navigation reflects implementation
history more than one shared reference model. Review Swedish, English, and
German as one system, but keep the visible navigation compact per language
where that is clearer. The approved baseline keeps three non-overlapping
artifacts: the main plan owns process and gates, the Navigation Blueprint owns
the exact approved Phase-5 navigation slice and target route structure, and the
Topic Inventory owns one row per existing or planned Phase-5 source, its
current-to-target mapping, and the A1-B2 can-do coverage checklist.

Route moves and renames are allowed when they produce the cleaner reference
structure. Old routes do not need redirects or preservation; every affected
page-body link, canonical `related` route, sidebar entry, and localized mirror
must change atomically.

The planning groundwork is complete: the current-state record, A1-B2 coverage
decisions, exhaustive page inventory, exact Navigation Blueprint, and migration
mappings form the approved baseline. Implementation now proceeds in this
order:

1. finalize the Swedish learning tree and audit all retained, moved, and new
   pages
2. finalize the English learning tree and audit all retained, moved, and new
   pages
3. finalize the German learning tree and audit all retained, moved, merged, and
   new pages
4. run the cross-language Phase 5 Quality Check

The language plans own batches, content boundaries, migration checklists, and
local acceptance criteria. They reference rather than duplicate the route
tables: the Navigation Blueprint remains authoritative for navigation and the
Topic Inventory remains authoritative for page scope, actions, priorities, and
coverage.

Do not start Phase 6 translations until this phase has stabilized the grammar
information architecture and the Phase 5 Quality Check has passed. That check
reviews canonical root-locale content and restores structural and didactic
equivalence for every existing localized mirror affected by Phase 5. Phase 7
later reviews the complete translated packages, including pages untouched by
Phase 5.

## Phase 6: Translate English and German Learning Trees

Goal: make the English-learning and German-learning trees available in the
useful meta languages, not only through fallback routes that still show
English explanations.

Status: planned.

Recommended scope:

- translate `/learn/english/...` into German meta language under
  `/de/learn/english/...`
- translate `/learn/german/...` into German meta language under
  `/de/learn/german/...`
- keep the root-locale English source pages canonical
- preserve the same learning-language routes, page structure, metadata,
  examples, related links, and didactic intent
- change only `metaLanguage` in translated frontmatter; keep
  `grammarLanguage`, `comparisonLanguages`, `levels`, `tags`, and `related`
  aligned with the canonical source page
- translate for didactic equivalence instead of literal sentence-by-sentence
  matching
- work in stable batches so translation churn does not hide content errors

Recommended package order:

1. English-learning overview, grammar overview, and sentence-structure pages
2. English-learning verb time-form pages
3. English-learning nouns/articles and common-mistakes pages
4. German-learning overview, grammar overview, cases, prepositions, and
   nouns/articles
5. German-learning pronouns, sentence structure, function words, and particle
   verbs
6. German-learning time forms, future forms, active/passive, mood,
   adjectives, and common mistakes

Do not create a separate German course structure. These pages are the same
learning trees explained in German meta language.

## Phase 7: Review Learning Languages Across Meta Languages

Goal: perform a full didactic, metadata, navigation, and language-layer review
of every learning-language tree in every meaningful meta-language package.

Status: planned.

This phase begins after Phase 6. Phase 5 already preserves didactic equivalence
for authored translations affected by its own restructuring. Phase 7 extends
that review to the complete translated packages and evaluates their
learner-facing quality across meta languages.

Review packages should be small enough that findings can be fixed without
turning the review into a vague audit:

- Swedish learning tree in English meta language
- Swedish learning tree in German meta language where translated pages exist
- Swedish learning tree in Swedish meta language where translated pages exist
- English learning tree in English and German meta languages
- German learning tree in English and German meta languages
- shared pages that appear across learning-language sidebars

Review focus:

- content accuracy and learner-facing clarity
- page length, scanability, and "lookup in seconds" usefulness
- correct separation of meta language, learning language, and comparison
  language
- translated pages preserve the canonical page's didactic intent and metadata
- no sidebar or route accidentally turns a comparison language into a content
  axis
- `LanguageComparison`, `SentenceSchema`, `MistakeBox`, `MemoryTip`,
  `QuickCheck`, and `RelatedTopics` are used where they add real learning value
- page-body links stay relative and `related` frontmatter stays absolute
- index pages and common-mistakes hubs send learners to the right repair pages
- every package passes `npm run quality`, base-path build, and length report

This phase should produce concrete fix batches, not just a list of concerns.

## Phase 8: Practice and Audio

Goal: add lightweight practice only where it strengthens the reference.

Recommended practice shape:

- static mini-drills derived from existing reference pages
- no accounts, persistence, scoring, streaks, or gamified progression
- no large custom app unless repeated content proves the need

Pronunciation audio and IPA should wait until there is a licensing-clean audio
source. When added, keep audio concentrated in the pronunciation reference
instead of scattering it across grammar pages.

## Ongoing Quality Work

Keep these checks green:

```bash
npm run quality
npm run build
npm run report:length
```

For every content expansion, check:

- the three language layers stay separate
- links are relative in page bodies
- page structure follows the didactic rules
- comparison examples use the right component
- long pages have a documented reason or are simplified
