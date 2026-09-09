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

English and German learning trees exist as placeholders:

```text
/learn/english/
/learn/german/
```

Pages that are not owned by one learning language stay outside `/learn/`:

```text
/false-friends/
/direct-translation-errors/
/practice/
```

These shared pages currently render with the default Swedish learning sidebar
because a static build cannot vary their sidebar per visitor.

## Navigation Rules

The sidebar is configured once in `astro.config.mjs` and scoped at request time
by `src/starlight/learn-language-sidebar.ts`. Do not create one sidebar array
per learning language.

The learning-language selector lives above the sidebar and chooses the active
learning tree. This must remain separate from Starlight's locale selector,
which chooses the meta language.

## Future Meta-Language Work

When German and Swedish meta-language content is added, `/de/` and `/sv/` must
mean "the same reference explained in German or Swedish." They must not mean
"learn German" or "learn Swedish."

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
