# jp-language-hub

`jp-language-hub` is a personal language reference and learning hub for German, English, and Swedish, with a current focus on Swedish.

Before working on the project, read the [project concept and implementation plan](docs/jp-language-hub-plan.md).

`CLAUDE.md` is a symlink to this file, so both names resolve to one file. Edit
`AGENTS.md`; never write to both paths, and never replace the symlink with a
copy that then has to be kept in sync.

## Required reading

Before generating code, modifying code, refactoring, or proposing architecture
changes:

1. Read [`docs/rules/engineering-guidelines.md`](docs/rules/engineering-guidelines.md).
2. Read [`docs/rules/architecture-guidelines.md`](docs/rules/architecture-guidelines.md).
3. Follow all applicable rules.
4. Validate the solution against those rules.

Before adding or modifying content frontmatter, tags, levels, related links, or
structured content metadata:

1. Read [`docs/rules/content-metadata.md`](docs/rules/content-metadata.md).
2. Follow the validated metadata vocabulary and field semantics.

Before writing or restructuring a reference page:

1. Read [`docs/rules/content-didactics.md`](docs/rules/content-didactics.md).
2. Follow the standard page order, the component rules, and the length budget.

If no compliant solution can be determined, stop and ask an engineer.

## Language layers (mandatory)

The project has three language layers. Each exists for one specific purpose,
and they must be kept strictly separate. Conflating them is what made the
navigation incoherent before the 2026-09-08 restructure.

1. **Meta language** — the language an explanation is written in. Owned
   exclusively by Starlight's locale configuration and its language switcher
   (`/`, `/de/`, `/sv/`), and recorded per page in `metaLanguage`. It is
   orthogonal to content and must never become a sidebar axis or a content
   directory of its own.
2. **Learning language** — the language being learned. It is the route prefix
   `src/content/docs/learn/<language>/`, and the only content axis besides the
   topic. Each learning language has its own navigation tree; content of one
   learning language must never appear in another's tree.
3. **Comparison language** — German, English and Swedish shown side by side to
   explain a rule. This is a dimension *inside* a page, expressed with the
   `LanguageComparison` component and the `comparisonLanguages` frontmatter
   field. A comparison language must never receive its own page, directory or
   sidebar entry.

Before adding content, routes, navigation entries or metadata, decide which
layer the change belongs to and apply that layer's rule. If a change appears
to require two layers at once, stop and ask an engineer.

## Links and the base path (mandatory)

The site is served from a base path — `base: '/jp-language-hub'` in
`astro.config.mjs`, because GitHub Pages publishes it under the repository
name.

Astro does not rewrite links written in a page body. An absolute site path
such as `/learn/swedish/grammar/verbs/present/` is emitted verbatim, so in
production it 404s: the real URL is `/jp-language-hub/learn/...`. The same
applies to an `href` prop handed to a component, because `RelatedTopics` and
`TagList` pass it straight to the anchor.

Both `astro dev` and `astro preview` reject a base-less path with a 404 for a
browser navigation, so such a link is broken locally as well — it just stays
invisible until someone clicks it. Requests that do not ask for HTML (a curl
without an `Accept` header, for instance) are answered on either path, so a
curl check is not evidence that a link works.

The rules:

1. **Write page-body links relative to the page.** Markdown links and
   component `href` props must never start with `/`. From
   `/learn/swedish/learning-path/`, write `../grammar/verbs/present/`. A
   relative link also keeps the reader inside the current meta locale, so a
   `/de/` page links to `/de/` pages.
2. **`related` frontmatter is the one exception** and must stay absolute. The
   content schema requires that shape, and its consumers resolve it
   themselves.
3. **Build computed paths through `import.meta.env.BASE_URL`**, never by
   string-concatenating a leading slash. Reuse the helpers in `src/lib/`
   (`learn-language-paths.ts`, `content-index-paths.ts`) before adding
   another one.

`npm run validate:links` enforces rule 1 and rejects absolute page-body
links. Before it did, 91 such links shipped broken in a single change. They
pointed at pages that genuinely exist, so the build succeeded and the
validator resolved every one of them as a valid route; nobody happened to
click them. That check is now the only automated thing standing between an
absolute link and a broken deploy. When in doubt, grep the built output: no
`href="/…"` in `dist/` may lack the base.

## Content structure

Learning content lives under `src/content/docs/learn/<language>/`; Swedish is
the current focus. Each learning language has its own sidebar tree, scoped at
request time by `src/starlight/learn-language-sidebar.ts` out of the single
sidebar array in `astro.config.mjs`. Do not add a second array per language.

Content that belongs to no single learning language (false friends, direct
translation errors, practice) stays outside `learn/` and appears in every tree.

The tree already names the language, so a page title must not repeat it: write
`title: Present tense`, not `title: Swedish present tense`. Import components
through the `~/*` alias rather than relative `../../` chains.

After moving or renaming content, run `npm run quality`. It includes an
internal link validator, because `related` routes are otherwise only
shape-checked and a stale route would build successfully.

## Development

When starting the dev server, use background mode:

```
npm run dev -- --background
```

Manage the background server with `npm run astro -- dev stop`,
`npm run astro -- dev status`, and `npm run astro -- dev logs`.

## Commit messages

All commit messages must follow the Conventional Commits format:

```
<type>[optional scope]: <description>
```

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
