# Content System

Content lives under `src/content/docs/` and is validated through Starlight's
docs schema plus project-specific metadata in `src/content/schemas.ts`.

## Page Metadata

Reference pages may use:

- `metaLanguage`: explanation language, usually `en` today
- `grammarLanguage`: language being learned, such as `sv`
- `comparisonLanguages`: two or three languages compared inside the page
- `levels`: CEFR levels where useful
- `tags`: controlled vocabulary for retrieval and generated pages
- `related`: absolute site routes for related-topic metadata

The detailed rules and allowed values live in
`docs/rules/content-metadata.md`.

## Standard Page Shape

Most reference pages follow this didactic shape:

```text
KeyTakeaway
TagList
short intro
Core rule
topic sections
Direct comparison
MistakeBox
SpecialRule
MemoryTip
QuickCheck
RelatedTopics
```

Not every page needs every block. Empty symmetry is worse than omission.

The detailed teaching rules live in `docs/rules/content-didactics.md`.

## Components

The main teaching components are:

- `KeyTakeaway`
- `TagList`
- `LanguageComparison`
- `SentenceSchema`
- `MistakeBox`
- `SpecialRule`
- `MemoryTip`
- `QuickCheck`
- `RelatedTopics`

`LanguageComparison` supports two- or three-language comparisons. Use it for
explicit German, English, and Swedish comparisons rather than hand-built
Markdown comparison tables.

Use `SentenceSchema` for word-order and clause-position rules such as V2,
inversion, BIFF, and `inte` placement.

## Swedish Text

In MDX, wrap inline Swedish with the `Sv` component. In plain Markdown files,
use `span lang="sv"` when language markup is needed.

German and English examples should also carry language markup where they are
not rendered by a component that already supplies it.

## Structured Data

Structured Swedish data lives in JSON collections under `src/data/`:

- `vocabulary.json`
- `verbs.json`
- `adjectives.json`

These collections are intentionally Swedish-specific today. Do not generalize
them for German or English until real content needs the abstraction.

## Content Priorities

Swedish should be finished first. Prefer:

- more useful entry routes through existing content
- practical sentence patterns
- transfer-error pages
- small vocabulary domains
- concise cheat sheets
- quick self-checks

Avoid broad grammar expansion for its own sake.
