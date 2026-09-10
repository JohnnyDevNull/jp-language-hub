# Phase 2: Prepare Real Meta-Language Localization

This plan expands the second roadmap bucket into a careful localization
preparation pass. The goal is to make German and Swedish meta-language routes
ready to carry translated explanations without turning them into separate
learning-language trees.

Status: completed on 2026-09-10.

## Desired Outcome

After this phase, the project should have a clear, low-churn path for
localized explanation text:

- `/de/` and `/sv/` mean the same reference explained in German or Swedish
- the active learning-language tree remains selected by `/learn/<language>/`
- sidebar and selector labels can be localized without duplicating navigation
  structure
- translated pages mirror canonical English source pages predictably
- validation catches missing, stale, or structurally confused localized routes
- contributors know when to translate, when to defer, and when not to create a
  localized page

This phase prepares localization infrastructure and workflow first. It should
not become a broad translation sprint until the mirroring rules, labels, and
validation are stable.

## Implemented Pilot

The phase shipped a narrow German and Swedish meta-language pilot using
Starlight's locale-folder mirroring convention:

- home page
- Swedish learning path
- basic word order as a short grammar page with `LanguageComparison`
- sentence patterns index
- introducing yourself as a sentence-pattern page

The pilot intentionally stops there. Remaining translated pages should be added
only after the canonical English source page is stable enough to maintain.

## Work Model

Use a coordinated advisor-and-sub-agent workflow if the implementation touches
Starlight locale routing, sidebar behavior, content mirroring, and validation
in one pass. A single engineer can write the plan and make narrow
documentation edits, but the implementation should separate investigation,
routing, content, and validation concerns.

Recommended shape:

- Wave 1: read-only audit of locale behavior and page mirroring options
- Wave 2: scoped infrastructure changes for localized labels and route safety
- Wave 3: small translated-page pilot
- Final pass: validation, documentation, and independent review

Do not translate a large number of pages before the pilot proves that the
route shape, navigation labels, metadata, links, and search behavior all work
under `/`, `/de/`, and `/sv/`.

## Sub-Bucket 1: Locale and Mirroring Audit

Purpose: determine the exact content-shape Starlight expects for translated
pages and choose one source-of-truth strategy before editing.

Audit:

- current generated routes for `/`, `/de/`, and `/sv/`
- how Starlight maps localized pages to default-locale pages
- whether localized pages should live as sibling locale folders or through
  Starlight's recommended translation structure
- how frontmatter such as `metaLanguage`, `grammarLanguage`,
  `comparisonLanguages`, `levels`, `tags`, and `related` should be copied or
  adjusted
- how Pagefind/search treats untranslated fallback pages and translated pages
- whether localized page-body links remain relative and preserve the active
  locale

Deliverables:

- selected mirroring convention for translated content files
- list of files/helpers that need localization awareness
- minimum translated-page pilot set
- metadata checklist for translated pages
- validation gaps to close before broader translation

## Sub-Bucket 2: Localized UI and Navigation Labels

Purpose: make locale routes feel intentional even before many pages are
translated.

Localize:

- Starlight locale labels where needed
- sidebar group labels such as `Grammar`, `Vocabulary`, `Sentence Patterns`,
  `Common Mistakes`, and `Cheat Sheets`
- top-level labels such as `Home`, `Overview`, `Learning path`, and
  `Important`
- the learning-language selector title and option labels
- page chrome or helper labels introduced by custom components, if any

Keep one sidebar structure in `astro.config.mjs`. If label localization needs
helpers, they should transform labels by current meta locale rather than
creating separate sidebar arrays per locale.

## Sub-Bucket 3: Translation Workflow Documentation

Purpose: make future translation work repeatable and safe.

Document:

- which English page is the canonical source for each translation
- how to decide whether a translated page should exist yet
- which frontmatter values must mirror the source page exactly
- which values must change, especially `metaLanguage`
- how to handle `related` frontmatter versus relative page-body links
- how to mark Swedish, German, and English inline examples with the right
  language attributes
- how to review translations for didactic equivalence instead of literal
  word-by-word matching

The workflow should explicitly say that Swedish meta-language pages may explain
Swedish learning content in Swedish, but they must not introduce extra Swedish
learning topics that are absent from the canonical learning tree.

## Sub-Bucket 4: Translated-Page Pilot

Purpose: test the localization workflow with a small set of representative
pages before multiplying files.

Recommended pilot:

- the home page
- the Swedish learning path
- one short grammar page with `LanguageComparison`
- one sentence-pattern page
- one index page such as vocabulary or sentence patterns

The pilot should cover:

- a normal MDX reference page
- an index-style page
- relative links in page bodies
- `related` frontmatter
- `TagList`, `RelatedTopics`, `LanguageComparison`, and `QuickCheck`
- Swedish inline text markup inside translated German and Swedish prose

If the pilot reveals that translated pages create heavy maintenance churn,
stop and adjust the workflow before translating more content.

## Sub-Bucket 5: Validation and Search Safety

Purpose: make localization mistakes visible in CI and local quality checks.

Extend validation only where there is a real gap:

- `metaLanguage` should match the route locale for translated pages
- `grammarLanguage` must continue to match the learning-language route segment
- `comparisonLanguages` must remain page-internal and must not imply a route
- translated pages should not create new learning-language routes by accident
- relative links should resolve under every locale route
- `related` frontmatter should continue to point at canonical route shapes that
  existing consumers can resolve

Search behavior should be checked manually after the pilot. If German and
Swedish search indexes include fallback English pages in a confusing way,
document the limitation and defer deeper search customization unless it blocks
the localization experience.

## Sub-Bucket 6: Documentation and Roadmap Integration

Purpose: keep current-state documentation and future work clearly separated.

Update after implementation:

- `docs/app/language-layers.md` with confirmed localization behavior
- `docs/app/architecture.md` with any new locale-aware helper or validation
- `docs/app/content-system.md` with translation metadata rules, if needed
- `docs/roadmap.md` with completed status and remaining translation follow-up
- `docs/rules/content-metadata.md` only if the metadata rules themselves
  change
- `docs/rules/content-didactics.md` only if translation adds didactic rules

Do not move aspirational translation tasks into `docs/app/*` until they are
implemented. Current-state docs describe what exists; roadmap files describe
what should happen next.

## Remaining Follow-Up

- Translate more canonical pages in small batches after the source content
  stabilizes.
- Manually review search ranking as translated coverage grows; fallback
  English results remain expected on untranslated locale routes.
- Consider generated parity reports only after translation volume makes manual
  review expensive.

## Quality Gates

Run and keep green:

```bash
npm run quality
npm run report:length
npm run build -- --base /jp-language-hub
git diff --check
```

Review manually:

- `/`, `/de/`, and `/sv/` keep the same learning-language distinction
- the learning-language selector and Starlight locale selector remain separate
- sidebar labels match the current meta locale without duplicating sidebar
  structure
- translated pages mirror source structure closely enough to stay maintainable
- no localized page introduces a new learning-language axis
- no absolute page-body links appear in translated content
- language markup remains correct for Swedish, German, and English examples
- search results are not misleading enough to block the pilot

## Recommended Execution

Use a narrow pilot before any broad translation pass:

1. Locale-audit executor confirms the Starlight translation and fallback
   mechanics.
2. Navigation executor designs the minimal label-localization mechanism.
3. Validation executor identifies and closes only the gaps that can cause
   language-layer drift.
4. Translation executor creates the small pilot set after the workflow is
   documented.
5. Advisor integrates documentation, roadmap status, and final consistency
   checks.
6. Independent reviewer checks route behavior, metadata semantics, validation
   output, and the language-layer separation.

This should make real localization possible without turning `/de/` or `/sv/`
into parallel learning-language content trees.
