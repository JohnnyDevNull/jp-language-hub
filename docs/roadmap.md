# Roadmap

This roadmap starts from the current project state: the Swedish reference MVP
exists and builds successfully. The next work should make it more useful,
pleasant, and resilient before expanding other learning languages.

## Phase 1: Finish the Swedish Reference Experience

Goal: make Swedish feel complete enough to use as the primary reference.

Recommended work:

- improve the heaviest reference pages with clearer "use this now" openings
- add more small sentence-pattern pages for everyday situations
- add a few focused vocabulary domains, starting with common daily contexts
- convert any remaining language-comparison tables to `LanguageComparison`
  where the content is a real cross-language comparison
- keep every new page under the reference-page length budget unless there is a
  documented reason

Good candidate content:

- everyday introductions and small talk
- food, shopping, transport, travel, and home vocabulary
- modal verbs and common auxiliary patterns
- questions and polite requests
- common Swedish connectors in short practical patterns

## Phase 2: Prepare Real Meta-Language Localization

Goal: make `/de/` and `/sv/` ready to carry translated explanation text
without confusing them with learning-language trees.

Recommended work:

- define how translated pages mirror English source pages
- localize sidebar labels and learning-language selector labels
- document the translation workflow
- verify that the same learning-language tree works under `/`, `/de/`, and
  `/sv/`
- keep Swedish meta-language work scoped to explanations and UI, not new
  Swedish-learning content

Do this after the Swedish learning content feels stable, because translation
will otherwise multiply churn.

## Phase 3: Build English Grammar Learning

Goal: add English as a learning language, using German as the primary learner
reference and Swedish only where it genuinely helps.

Recommended first topics:

- English sentence order
- questions and do-support
- simple present vs present progressive
- simple past vs present perfect
- countable and uncountable nouns
- articles
- common German-to-English mistakes

Do not copy the Swedish tree one to one. Use the same page grammar and
metadata conventions, but let English have the structure its own problems
need.

## Phase 4: Build German Grammar Learning

Goal: add German as a learning language after Swedish and English have proven
the shared architecture.

Recommended first topics:

- cases as sentence roles
- articles and gender
- verb position in main and subordinate clauses
- separable verbs
- adjective endings
- common English-to-German and Swedish-to-German mistakes

German can use Swedish and English as comparison languages, but it should not
be forced into the Swedish content shape.

## Phase 5: Practice and Audio

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
