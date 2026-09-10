# Phase 1: Finish the Swedish Reference Experience

This plan expands the first roadmap bucket into a complete, coordinated content
pass. The goal is to make Swedish feel complete enough to use as the primary
reference before expanding other learning languages.

Status: implemented on 2026-09-10.

## Implemented Result

The phase was completed as one coordinated content pass:

- heavy Swedish reference pages gained practical entry paths
- everyday sentence-pattern pages were added for introductions, small talk,
  polite requests, ordering food, shopping, directions, travel, and home
- vocabulary domains were added for food, shopping, transport, home objects,
  and daily routines
- sidebar, index pages, related topics, and the learning path now expose the
  new routes
- over-budget pages are documented where content quality outweighed strict
  length

## Outcome

After this phase, the Swedish learning tree should feel practical, connected,
and stable:

- heavy reference pages answer the immediate learner question near the top
- everyday sentence-pattern pages cover common real situations
- vocabulary domains support those situations with focused word sets
- real cross-language comparisons use `LanguageComparison`
- index pages, related topics, and the learning path expose the new content
- every new page respects the reference-page length budget unless documented

## Work Model

Use a coordinated advisor-and-sub-agent workflow rather than many independent
writers working at once. The advisor owns scope, sequencing, integration,
quality gates, and final editorial consistency.

Recommended shape:

- Wave 1: read-only audit and implementation specification
- Wave 2: scoped execution by content area
- Final pass: integration, validation, and independent review

Do not spawn a large group of independent executors without a shared
specification. The risk is uneven tone, duplicate patterns, inconsistent
metadata, stale related links, and missed navigation updates.

## Sub-Bucket 1: Audit and Implementation Specification

Purpose: turn the roadmap bucket into an exact task list before editing content.

Audit:

- all Swedish reference pages by rendered length and cognitive load
- existing `sentence-patterns` pages for functional vs situational coverage
- current `vocabulary` pages and missing everyday domains
- Markdown tables that are actually German/English/Swedish comparisons
- index pages, `related` metadata, and `RelatedTopics` coverage

Deliverables:

- prioritized list of pages to revise
- list of new sentence-pattern pages
- list of new vocabulary-domain pages
- shared page template for situation pages
- metadata and linking checklist for all executors

## Sub-Bucket 2: Heavy Reference Entry Pass

Purpose: improve the heaviest or most cognitively dense pages with immediate
learner-facing entry points.

Primary candidates:

- `src/content/docs/learn/swedish/grammar/verbs/particle-verbs.mdx`
- `src/content/docs/learn/swedish/grammar/adjectives-adverbs/agreement.mdx`
- `src/content/docs/learn/swedish/grammar/pronouns-function-words/prepositions.mdx`
- `src/content/docs/learn/swedish/grammar/nouns-articles/en-ett.mdx`

Secondary candidates if the audit confirms the need:

- `src/content/docs/learn/swedish/grammar/pronouns-function-words/relative-pronouns.mdx`
- `src/content/docs/learn/swedish/grammar/pronouns-function-words/interrogatives.mdx`
- `src/content/docs/learn/swedish/grammar/adjectives-adverbs/adverbs.mdx`

Expected edit pattern:

```text
KeyTakeaway
TagList
short intro
Use this now / Fast decision path
Core rule
topic sections
Direct comparison
QuickCheck
RelatedTopics
```

Example shape for `Prepositions`:

```text
Use this now

Need location?
- city, country, enclosed area -> i
- street, activity, public transport -> pa
- destination -> till
- direction, sign, route -> mot
- fixed verb phrase -> store the phrase whole
```

Example shape for `Adjective agreement`:

```text
Use this now

Ask three questions:
1. Is the noun en, ett, or plural?
2. Is the phrase indefinite or definite?
3. Is the adjective regular or a common exception?

Fast pattern:
en stor bil
ett stort hus
stora bilar
den stora bilen
```

## Sub-Bucket 3: Everyday Situation Sentence Patterns

Purpose: add small pages that answer "I am in this situation; what can I say?"
rather than only "which communicative function do I need?"

Recommended first set:

- `introducing-yourself`
- `small-talk`
- `ordering-food`
- `shopping-and-paying`
- `asking-for-directions`
- `travel-and-transport`
- `polite-requests`
- `at-home`

Each page should stay small and practical:

- one to three `KeyTakeaway` bullets
- compact pattern table
- one tiny dialogue or sequence where useful
- one or two `LanguageComparison` blocks only for real transfer pressure
- two to four `QuickCheck` prompts
- focused `RelatedTopics`

Example page shape:

```text
KeyTakeaway
TagList
intro: when to use this page
Core patterns
Tiny dialogue
Direct comparison
Common mistakes or MemoryTip
QuickCheck
RelatedTopics
```

## Sub-Bucket 4: Focused Vocabulary Domains

Purpose: support the new situation pages with small vocabulary pages that are
useful without becoming broad dictionaries.

Recommended domains:

- food and drinks
- shopping and money
- transport and travel
- home and everyday objects
- daily routines

Each domain page should:

- group words by use, not alphabetically
- include gender and plural where nouns appear
- include short reusable phrase frames
- link to the matching sentence-pattern pages
- avoid becoming a full dictionary

## Sub-Bucket 5: Comparison Cleanup

Purpose: make comparison rendering consistent while preserving normal data
tables where they are the right tool.

Convert:

- German/English/Swedish sentence or meaning comparisons
- transfer-error examples where the comparison itself is the teaching point
- multi-language examples currently hand-built as Markdown tables

Do not convert:

- form paradigms
- endings tables
- vocabulary lists
- decision tables that are not language comparisons

## Sub-Bucket 6: Navigation, Metadata, and Learning Path Integration

Purpose: make the phase discoverable, not just present in files.

Update as needed:

- `src/content/docs/learn/swedish/sentence-patterns/index.mdx`
- `src/content/docs/learn/swedish/vocabulary/index.mdx`
- `src/content/docs/learn/swedish/learning-path.mdx`
- `RelatedTopics` blocks on changed pages
- `related` frontmatter on changed pages
- sidebar entries in `astro.config.mjs` if new pages need explicit placement

Keep the language layers separate:

- meta language remains owned by locale routes
- learning language remains the `learn/swedish` route prefix
- comparison languages remain page-internal metadata and components

## Quality Gates

Run and keep green:

```bash
npm run quality
npm run report:length
npm run build -- --base /jp-language-hub
git diff --check
```

Review manually:

- no absolute page-body links in Markdown or component `href` props
- new pages follow the didactic page order
- Swedish inline text in MDX uses `<Sv>` where applicable
- `LanguageComparison` is used only for real cross-language comparisons
- long pages either stay documented exceptions or are simplified
- sentence-pattern pages feel situational, not like duplicated grammar pages

## Recommended Execution

Use two implementation waves after the audit:

1. Reference-entry executor updates heavy pages.
2. Sentence-pattern executor creates everyday situation pages.
3. Vocabulary executor creates focused domain pages after the situation list is
   fixed.
4. Comparison-cleanup executor handles component consistency.
5. Advisor integrates indexes, links, metadata, and navigation.
6. Independent reviewer checks content consistency, validation results, and
   roadmap completeness.

This should complete the whole bucket in one coordinated pass while keeping
quality stable across multiple contributors.
