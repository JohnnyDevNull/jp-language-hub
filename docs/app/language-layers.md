# Language Layers and Information Architecture

JP Language Hub separates three language layers. Keeping them separate is the
main architectural rule for content and navigation.

## The Three Layers

1. **Meta language**

   The language used for explanations, page structure, UI labels, and
   navigation labels. It is owned by Starlight's locale system:

   ```text
   /     -> English meta language
   /de/  -> German meta language
   /sv/  -> Swedish meta language
   ```

2. **Learning language**

   The language being learned. It is the route segment under `/learn/`:

   ```text
   /learn/swedish/
   /learn/english/
   /learn/german/
   ```

   This is the only content axis besides the topic.

3. **Comparison language**

   Languages compared inside a page to explain a rule. This is represented by
   `comparisonLanguages` frontmatter and the `LanguageComparison` component.
   Comparison languages must not become routes, sidebars, or separate page
   trees.

## Current State

The current main tree is:

```text
/learn/swedish/
  grammar/
  vocabulary/
  sentence-patterns/
  common-mistakes/
  cheat-sheets/
  pronunciation-basics
  important
  learning-path
```

The English learning tree has a focused grammar pass, while the German
learning tree now has broad grammar coverage. Their current depth differs and
is being aligned through the Phase 5 planning artifacts rather than by copying
one tree into the others:

```text
/learn/english/
  grammar/
    sentence-structure/
    verbs/
    nouns-articles/
  common-mistakes/
/learn/german/
  grammar/
    cases/
    prepositions/
    nouns-articles/
    pronouns-roles/
    sentence-structure/
    function-words-negation/
    verbs/
    adjectives-adverbs/
  common-mistakes/
```

Pages that are not owned by one learning language stay outside `/learn/`:

```text
/false-friends/
/direct-translation-errors/
/practice/
```

These shared pages currently render with the default Swedish learning sidebar
because a static build cannot vary their sidebar per visitor.

German and Swedish meta-language routes now have a small translated pilot:

```text
/de/
/de/learn/swedish/learning-path/
/de/learn/swedish/grammar/sentence-structure/basic-word-order/
/de/learn/swedish/sentence-patterns/
/de/learn/swedish/sentence-patterns/introducing-yourself/

/sv/
/sv/learn/swedish/learning-path/
/sv/learn/swedish/grammar/sentence-structure/basic-word-order/
/sv/learn/swedish/sentence-patterns/
/sv/learn/swedish/sentence-patterns/introducing-yourself/
```

All other German and Swedish meta-language routes are Starlight fallback routes
that render the canonical English source content under the localized URL.

## Navigation Rules

The sidebar is configured once in `astro.config.mjs` and scoped at request time
by `src/starlight/learn-language-sidebar.ts`. Do not create one sidebar array
per learning language.

The learning-language selector lives above the sidebar and chooses the active
learning tree. This must remain separate from Starlight's locale selector,
which chooses the meta language.

Sidebar group labels and learning-language selector labels are localized from
one label table. The sidebar structure itself remains single-source in
`astro.config.mjs`.

## Meta-Language Routes

`/de/` and `/sv/` mean "the same reference explained in German or Swedish."
They must not mean "learn German" or "learn Swedish."

Example:

```text
/sv/learn/swedish/grammar/sentence-structure/v2/
```

This route means:

```text
Meta language: Swedish
Learning language: Swedish
Topic: V2
```

That distinction is intentional. It lets a learner later read Swedish grammar
explanations in Swedish without changing the learning-language tree.

Translated content files mirror the canonical root-locale file path under the
locale folder:

```text
src/content/docs/learn/swedish/grammar/sentence-structure/basic-word-order.mdx
src/content/docs/de/learn/swedish/grammar/sentence-structure/basic-word-order.mdx
src/content/docs/sv/learn/swedish/grammar/sentence-structure/basic-word-order.mdx
```
