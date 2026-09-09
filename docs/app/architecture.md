# Architecture and Validation

The site is a static Astro and Starlight project deployed under the GitHub
Pages base path `/jp-language-hub`.

## Stack

- Astro
- Starlight
- MDX and Markdown content
- Starlight search through Pagefind
- TypeScript for project helpers and content validation
- global CSS through `src/styles/global.css`

Do not replace Starlight navigation, search, theme handling, or page layout
unless there is a concrete project need.

## Important Source Areas

```text
astro.config.mjs
src/starlight/learn-language-sidebar.ts
src/lib/
src/components/
src/content.config.ts
src/content/schemas.ts
src/content/docs/
src/data/
src/styles/
scripts/
```

## Styling Architecture

All project CSS is global and imported from `src/styles/global.css`. Component
styles live under `src/styles/components/`, Starlight overrides under
`src/styles/integrations/`, and design tokens under `src/styles/tokens/`.

Keep the cascade layers declared in `global.css` and do not add component-local
`<style>` blocks.

## Base Path and Links

The production site is served from `/jp-language-hub`. Page-body links and MDX
component `href` props must be relative so they keep the base path and current
meta locale.

Only `related` frontmatter stays absolute. The schema expects absolute site
routes there, and the link validator checks that they resolve.

## Validation Commands

Use:

```bash
npm run quality
npm run build
npm run report:length
```

`npm run quality` includes:

```bash
npm run lint
npm run check
npm run validate:links
npm run validate:language-layers
```

`validate:links` protects internal documentation links and rejects absolute
page-body links.

`validate:language-layers` checks the separation between learning-language
routes, `grammarLanguage`, `comparisonLanguages`, and `LanguageComparison`
slots.

`report:length` measures rendered article text from the built output. The
default target is at most 1000 rendered words per reference page, with
documented exceptions in `docs/rules/content-didactics.md`.

## Current Deployment Shape

The project builds static HTML for the root English meta-language route and
the German and Swedish locale routes. German and Swedish meta-language pages
currently fall back to English source content until translations are added.
