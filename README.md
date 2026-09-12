# JP Language Hub

JP Language Hub is a static personal reference for comparing German, English,
and Swedish. The current learning focus is Swedish grammar, with direct
comparisons to German and English where they clarify a rule.

## Language layers

The project keeps three language layers apart, and the navigation depends on
the distinction:

- **Meta language** — the language explanations are written in. English is the
  default; German and Swedish locale routes fall back to English until
  translated content is added.
- **Learning language** — the language being learned. It is the route prefix
  `/learn/<language>/`, and each learning language has its own sidebar tree,
  chosen through a select above the navigation. Swedish remains the current
  focus; English has a focused grammar and common-mistakes tree; German has a
  broad grammar and common-mistakes tree.
- **Comparison languages** — German, English and Swedish shown side by side to
  explain a rule. A dimension inside a page via `LanguageComparison`, never
  separate pages.

## Stack

- Astro and Astro Starlight
- Markdown and MDX content
- Plain global CSS with semantic design tokens
- ESLint, Stylelint, and Astro Check
- GitHub Actions and GitHub Pages

## Prerequisites

- Node.js 24
- npm 11 or a compatible npm version

## Local development

Install dependencies:

```bash
npm install
```

Start Astro's background development server:

```bash
npm run dev -- --background
```

Inspect or stop the server with:

```bash
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

Run the quality gates and production build:

```bash
npm run quality
npm run build
npm run preview
```

`npm run quality` runs ESLint, Stylelint, Astro Check and the internal link
validator. The validator resolves `related` routes, relative body links and
frontmatter hero links against the real pages — run it after moving or
renaming content, because `related` is otherwise only shape-checked and a
stale route would build successfully:

```bash
npm run validate:links
```

## Content structure

English source content lives directly in `src/content/docs/`. German and
Swedish translations use matching paths below `src/content/docs/de/` and
`src/content/docs/sv/`.

```text
src/content/docs/
├── learn/
│   ├── swedish/
│   │   ├── grammar/
│   │   │   ├── sentence-structure/
│   │   │   ├── questions-negation/
│   │   │   ├── nouns-articles/
│   │   │   ├── pronouns-roles/
│   │   │   ├── adjectives-adverbs/
│   │   │   ├── verbs-time-forms/
│   │   │   ├── verb-patterns-voice/
│   │   │   ├── mood-politeness-reports/
│   │   │   └── prepositions-function-words/
│   │   ├── vocabulary/
│   │   ├── common-mistakes/
│   │   ├── cheat-sheets/
│   │   └── pronunciation-basics.md
│   ├── german/
│   └── english/
├── false-friends.mdx
├── direct-translation-errors.mdx
└── practice/
```

Canonical explanations belong under `learn/<language>/grammar/`. Cheat sheets
stay concise and link back to the canonical page. Content that belongs to no
single learning language stays outside `learn/` and appears in every tree.

The sidebar is one tree in `astro.config.mjs`, scoped per request by
`src/starlight/learn-language-sidebar.ts`. Do not add a second sidebar array
per language.

## Adding a reference page

1. Choose the narrowest matching directory under
   `learn/<language>/grammar/` and a stable kebab-case slug.
2. Add a Markdown or MDX file with at least a title and description. The tree
   already names the language, so do not repeat it in the title, and use
   sentence case.
3. Explain one clearly defined concept using accurate examples.
4. Add common mistakes, a memory aid, and related links when useful.
5. Add the page to the Starlight sidebar in `astro.config.mjs`.
6. Run `npm run quality` and `npm run build`.

Example frontmatter:

```yaml
---
title: V2 rule
description: How the finite verb takes the second position in Swedish main clauses.
related:
  - /learn/swedish/grammar/sentence-structure/biff/
---
```

Import components through the `~/*` alias (`~/components/RuleBox.astro`), not
through relative `../../` chains, so pages survive being moved.

## Adding vocabulary

Vocabulary is organized by real-life domain rather than as isolated translation
pairs. Record the lemma, relevant word-class forms, usage notes, examples, CEFR
level where meaningful, and a controlled set of tags. Swedish nouns should be
learned with their article and core forms; verbs should include the forms needed
to build present, past, and perfect constructions.

## Components

Reusable Astro components live in `src/components/`. Their styles are global,
owned by a unique component root class, and imported through
`src/styles/global.css`. Components cover language comparisons, learning
callouts, tags, related topics, and structured noun, verb, adjective, and
vocabulary displays.

Do not add scoped component styles, client-side frameworks, or JavaScript unless
a concrete interaction requires them.

## Naming conventions

- Astro components: `PascalCase.astro`
- Content slugs and CSS files: `kebab-case`
- CSS classes: component-owned flat names, prefixed with the component root
  (`.related-topics-title`)
- Code, documentation, and commit messages: English
- Commits: Conventional Commits

## Deployment

Pushes to `main` run the quality gates, build the static site, and deploy it to
GitHub Pages through `.github/workflows/deploy.yml`.

Production URL:

<https://johnnydevnull.github.io/jp-language-hub/>

## Project guidance

- Documentation index: `docs/jp-language-hub-plan.md`
- Current application docs: `docs/app/`
- Roadmap: `docs/roadmap.md`
- Engineering rules: `docs/rules/engineering-guidelines.md`
- Architecture rules: `docs/rules/architecture-guidelines.md`
