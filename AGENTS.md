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

If no compliant solution can be determined, stop and ask an engineer.

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
