# JP Language Hub

JP Language Hub is a static personal reference for comparing German, English,
and Swedish. The current learning focus is Swedish grammar, with direct
comparisons to German and English where they clarify a rule.

The site uses English as its default meta language. German and Swedish locale
routes fall back to English until translated content is added.

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

## Content structure

English source content lives directly in `src/content/docs/`. German and
Swedish translations use matching paths below `src/content/docs/de/` and
`src/content/docs/sv/`.

```text
src/content/docs/
├── grammar/
│   ├── sentence-structure/
│   ├── nouns-articles/
│   ├── adjectives-adverbs/
│   ├── verbs/
│   └── pronouns-function-words/
├── vocabulary/
├── language-specific-rules/
├── common-mistakes/
├── cheat-sheets/
└── practice/
```

Canonical explanations belong under `grammar/`. Language-specific rules and
cheat sheets stay concise and link back to the canonical page.

## Adding a reference page

1. Choose the narrowest matching grammar directory and a stable kebab-case
   slug.
2. Add a Markdown or MDX file with at least a title and description.
3. Explain one clearly defined concept using accurate examples.
4. Add common mistakes, a memory aid, and related links when useful.
5. Add the page to the Starlight sidebar in `astro.config.mjs`.
6. Run `npm run quality` and `npm run build`.

Example frontmatter:

```yaml
---
title: Swedish V2 word order
description: How the finite verb takes the second position in Swedish main clauses.
---
```

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
- CSS classes: component-owned BEM-style names
- Code, documentation, and commit messages: English
- Commits: Conventional Commits

## Deployment

Pushes to `main` run the quality gates, build the static site, and deploy it to
GitHub Pages through `.github/workflows/deploy.yml`.

Production URL:

<https://johnnydevnull.github.io/jp-language-hub/>

## Project guidance

- Implementation plan: `docs/jp-language-hub-plan.md`
- Engineering rules: `docs/rules/engineering-guidelines.md`
- Architecture rules: `docs/rules/architecture-guidelines.md`
