# jp-language-hub

`jp-language-hub` is a personal language reference and learning hub for German, English, and Swedish, with a current focus on Swedish.

Before working on the project, read the [project concept and implementation plan](docs/jp-language-hub-plan.md).

## Required reading

Before generating code, modifying code, refactoring, or proposing architecture
changes:

1. Read [`docs/rules/engineering-guidelines.md`](docs/rules/engineering-guidelines.md).
2. Follow all applicable rules.
3. Validate the solution against those rules.

If no compliant solution can be determined, stop and ask an engineer.

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
