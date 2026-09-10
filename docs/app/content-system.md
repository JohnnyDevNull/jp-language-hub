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

## Translation Workflow

English root-locale pages are the canonical source for translated
meta-language pages. A translated page exists only when its canonical source is
stable enough that maintaining the translation is worth the churn.

Create translated files by mirroring the canonical path under the locale
folder:

```text
src/content/docs/learn/swedish/learning-path.mdx
src/content/docs/de/learn/swedish/learning-path.mdx
src/content/docs/sv/learn/swedish/learning-path.mdx
```

Translated pages change explanation text, headings, page titles,
descriptions, hero text, related-topic labels, and check prompts. They keep the
same learning-language route, topic scope, component structure, and structural
metadata.

`related` frontmatter remains an absolute canonical route without the locale
prefix. Page-body links and component `href` props remain relative, so a reader
stays inside the current meta locale.

Review translations for didactic equivalence: the translated page should teach
the same lookup answer, examples, warnings, and self-check, even when the prose
is not word-for-word identical.

Swedish meta-language pages may explain Swedish learning content in Swedish,
but they must not add extra Swedish-learning topics that are absent from the
canonical learning tree.

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
