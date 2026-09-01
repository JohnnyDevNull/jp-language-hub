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
  `/grammar/verbs/swedish/present/`.

## Controlled Tag Vocabulary

Use only tags that help classify or retrieve content:

- `grammar`
- `sentence-structure`
- `nouns`
- `verbs`
- `adjectives`
- `pronouns`
- `vocabulary`
- `comparison`
- `swedish-specific`
- `common-mistakes`
- `cheat-sheet`
- `important`

Keep tag sets small. Add a new value only when multiple real pages need a
classification that the existing vocabulary cannot express.
