# Content Metadata

Docs frontmatter may use the following optional, validated fields:

- `metaLanguage`: language of the explanation and page structure (`de`, `en`, or
  `sv`).
- `grammarLanguage`: grammar target (`de`, `en`, `sv`, or `comparison` for a
  pure comparison page).
- `comparisonLanguages`: two or three unique language codes intentionally
  compared on the page.
- `levels`: one or more unique CEFR levels from `A1` through `C1`. Omit this
  field when assigning a level would be artificial.
- `tags`: unique values from the controlled vocabulary below.
- `related`: absolute site routes, for example
  `/learn/swedish/grammar/verbs/present/`. Only the shape is validated by the
  schema; `npm run validate:links` checks that the target exists.

## Translated Page Metadata

Translated pages live under `src/content/docs/de/` or `src/content/docs/sv/`
and must mirror an existing root-locale source page at the same path without
the locale segment.

Only `metaLanguage` changes because it records the explanation language:

- files under `src/content/docs/de/` must set `metaLanguage: de`
- files under `src/content/docs/sv/` must set `metaLanguage: sv`

These fields must mirror the canonical root-locale page exactly:

- `grammarLanguage`
- `comparisonLanguages`
- `levels`
- `tags`
- `related`

`related` stays absolute and canonical, for example
`/learn/swedish/grammar/verbs/present/`, never `/de/learn/...` or
`/sv/learn/...`.

## Controlled Tag Vocabulary

Use only tags that help classify or retrieve content:

- `grammar`
- `sentence-structure`
- `sentence-patterns`
- `nouns`
- `verbs`
- `adjectives`
- `pronouns`
- `vocabulary`
- `comparison`
- `common-mistakes`
- `cheat-sheet`
- `important`

Keep tag sets small. Add a new value only when multiple real pages need a
classification that the existing vocabulary cannot express.

A tag must express something the page's own position cannot. The learning
language in particular is never a tag: it is the route prefix
`learn/<language>/` and nothing else. A `swedish-specific` tag existed until it
sat on 32 of 60 pages and on no page outside the Swedish tree, which made it a
second encoding of the prefix — and, by the language layers in `AGENTS.md`, a
second content axis where there must be only one. Divergence from German and
English belongs in the page body, through `comparisonLanguages`, a
`## Direct comparison` section or `SpecialRule`.
