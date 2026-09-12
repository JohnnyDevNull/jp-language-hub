# Phase 5: Finalize English — Implementation Report

This file is the durable execution state for the English part of Phase 5.
Update it after every implementation or review hand-off so work can resume
safely after context loss. It records execution evidence and English-specific
decisions; it does not redefine the frozen information architecture.

## Current State

**Last updated:** 2026-09-12

**Overall status:** E3 and E4 are complete. Work is paused awaiting the
user's Go before E5; E5 and E6 remain blocked by the approved batch order.

**Repository baseline:** Commit `35e79f9` (`feat(content): finalize English
phase 5 batches 1 and 2`) on `main`, confirmed as the pre-E3 baseline. E1 and
E2 are committed there; the current worktree contains the completed E3
migration plus the uncommitted E4 content, integration changes, and this
report update.

## Sources of Truth

Apply these documents by responsibility:

1. [`roadmap-phase-5-align-grammar-ia.md`](./roadmap-phase-5-align-grammar-ia.md)
   owns Phase 5 scope, order, gates, localized-mirror policy, and Definition of
   Done.
2. [`roadmap-phase-5-navigation-blueprint.md`](./roadmap-phase-5-navigation-blueprint.md#learn-english)
   owns the approved English shelves, target routes, and page order.
3. [`roadmap-phase-5-topic-inventory.md`](./roadmap-phase-5-topic-inventory.md#english)
   owns English page scope, current-to-target mappings, actions, priorities,
   totals, and A1-B2 can-do dispositions.
4. [`roadmap-phase-5-finalize-english.md`](./roadmap-phase-5-finalize-english.md)
   owns English boundaries, batch order, migrations, and local acceptance
   criteria.
5. `docs/rules/` remains authoritative for engineering, architecture,
   metadata, and didactics; `docs/app/` describes the implemented system.

### Change policy

- Do not reinterpret, extend, or optimize the frozen IA during execution.
- Change the Blueprint or Inventory only to correct a verified contradiction
  or record an explicitly approved scope decision.
- Classify findings as English-specific defects, shared-system defects,
  baseline contradictions, or later enhancements.
- Keep migrations atomic across canonical files, navigation, links, metadata,
  authored localized mirrors, documentation, tests, scripts, fixtures, and
  length exceptions.
- Close a batch only after implementation, independent review, required
  validation, and explicit follow-up resolution are recorded here.

## English Decision Log

- **2026-09-12 — Preserve the current `verbs/` routes until E3.** E1 links from
  Sentence Structure and Questions & Negation use the existing canonical time
  form routes rather than prematurely targeting the planned E3
  `verbs-time-forms/` migration. This keeps E1 self-contained and leaves the
  E3 move atomic. Affected files: the Sentence Structure overview, Adverb
  Placement, and Questions and Do-Support. `npm run quality` validates the
  current routes.
- **2026-09-12 — Use canonical fallback for all affected English pages.** No
  authored `de/learn/english/**` or `sv/learn/english/**` source file exists,
  so there is no mirror to move, update, or remove. The base-path build
  generated the corresponding locale routes from the canonical source.
- **2026-09-12 — Keep E2 on its two approved shelves.** Noun-phrase decisions
  lead into pronoun-role decisions, while countability, polarity, indefinite
  pronouns, and personal-pronoun role stay with their separate canonical E1 or
  E2 pages. No E3+ route or consumer was introduced.
- **2026-09-12 — Move the complete time-form shelf atomically in E3.** Every
  E1/E2/Common Mistakes consumer now targets `verbs-time-forms/`; the former
  `verbs/` routes are absent. Future Progressive and Future Perfect remain at
  the end of the shelf as the approved reference material. No E4 route or
  dependency was introduced.
- **2026-09-12 — Temporarily place E4 after Time Forms.** The frozen Blueprint
  places the future E5 Adjectives, Prepositions, and Word Formation shelves
  before E4. Because none exists yet, the implemented English sidebar places
  Verb Patterns & Voice and Mood, Politeness & Reports immediately after Time
  Forms. E5 must insert its approved shelves before E4; the Blueprint itself
  remains unchanged.

## English Batch Ledger

Status values: `ready`, `in progress`, `dependency-blocked`, `review`,
`complete`, or `blocked`.

| Order | Batch | Status | Changed files | Evidence and review | Required follow-up |
| ---: | --- | --- | --- | --- | --- |
| 1 | English E1 — Sentence Structure, Questions, and Negation | **complete** | Sentence Structure and Questions & Negation pages; English landing/Grammar/Common Mistakes consumers; Verbs overview; `astro.config.mjs`; this report | Executor fixes applied; independent reviewer rechecked all nine targets and consumers: **PASS**; all closure checks and gates passed on 2026-09-12 | None; E1 is closed |
| 2 | English E2 — Nouns, Articles, Quantifiers, Pronouns, and Roles | **complete** | Nouns & Articles and Pronouns & Roles pages; English landing and Grammar overview; `astro.config.mjs`; this report | Executor fixes applied; independent reviewer rechecked all twelve targets and consumers: **PASS**; all closure checks and gates passed on 2026-09-12 | None; E2 is closed |
| 3 | English E3 — Verbs and Time Forms | **complete** | `verbs-time-forms` sources, English landing/Grammar/Common Mistakes consumers, E1 consumers, `astro.config.mjs`, this report | Executor fixes applied; independent reviewer rechecked all 15 targets and migration consumers: **PASS**; all closure checks and gates passed on 2026-09-12 | None; E3 is closed |
| 4 | English E4 — Verb Patterns, Voice, Mood, and Reported Speech | **complete** | Two E4 shelves, English landing/Grammar, E1 questions/negation, E3 overview, `astro.config.mjs`, this report | Executor fixes applied; independent reviewer rechecked all 11 targets and consumers: **PASS**; all closure checks and gates passed on 2026-09-12 | None; E4 is closed |
| 5 | English E5 — Adjectives, Prepositions, Connectors, and Word Formation | **ready** | None | E4 dependency satisfied; execution paused pending user Go | Await user Go before starting E5 |
| 6 | English E6 — Common Mistakes and English Completion Review | dependency-blocked by E5 | None | Not started | Run an independent full English review and close all findings |

## Batch Evidence Template

Add one section per batch and retain failed attempts as evidence. Record:

- implemented, retained, moved, renamed, and retired paths;
- affected canonical consumers and localized mirrors;
- the disposition of every affected authored mirror;
- inventory and Blueprint reconciliation;
- independent review scope, findings, fixes, and final result;
- exact gate results and any accepted limitation; and
- unresolved blockers or the explicit statement that none remain.

Do not copy route tables from the Blueprint or Topic Inventory into this
report. Link the authoritative rows and record only execution results.

## E1 Evidence — Sentence Structure, Questions, and Negation

**Status:** Complete. Implementation, integration, independent review, and
closure gates all passed on 2026-09-12.

**Authoritative scope:** [English execution plan](./roadmap-phase-5-finalize-english.md#batch-1-sentence-structure-questions-and-negation),
[English Blueprint](./roadmap-phase-5-navigation-blueprint.md#learn-english),
and [English Topic Inventory](./roadmap-phase-5-topic-inventory.md#english).

**Execution slices:** Establish the Sentence Structure shelf and retained
Sentence Order and Adverb Placement pages; complete Questions & Negation,
including Questions and Do-Support, Negation, and Any vs No; then reconcile
navigation, metadata, links, and affected localized mirrors before independent
review and the required gates.

**Implemented and integrated:** The nine E1 Inventory targets have exactly one
canonical source file each: the retained Sentence Structure overview, Sentence
Order, and Adverb Placement; new Subordinate Clauses and Relative Clauses; and
the new Questions & Negation overview, moved Questions and Do-Support, new
Negation, and new Any vs No. The old Questions and Do-Support source is absent,
no redirect was added, and the current target is the only generated canonical
route.

**Navigation and consumers:** `astro.config.mjs` now orders the implemented
English shelves as Sentence Structure, Questions & Negation, Nouns & Articles,
and Verbs & Time Forms. Sentence Structure and Questions & Negation child
order matches the Blueprint. The English landing page, Grammar overview,
Common Mistakes overview, German-to-English mistake page, and current Verbs
overview all point to the new Questions and Do-Support target. Page-body and
component links are relative; `related` metadata is canonical and absolute.

**In-scope integration corrections:** Removed E1 links to planned but absent
E2/E5 targets, and retained links to existing `verbs/` targets until E3 moves
them. This avoided broken routes without extending E1 scope. No new route,
validator exception, redirect, component, or stylesheet was added.

**Localized mirrors:** A filesystem recheck found no authored English-learning
source under either locale tree. The base-path build generated the German and
Swedish locale routes through canonical fallback, including all nine E1
targets. The deliberate disposition is therefore **canonical fallback**; no
authored mirror requires a Phase 5 action.

**Retired-route search:** The old Questions and Do-Support path has no source,
configuration, metadata, or generated-output match. Its sole repository match
is the frozen Topic Inventory migration row, retained as the authoritative
current-to-target record.

**Review boundary:** The E1 integration audit and independent linguistic,
didactic, and architecture review found no unresolved route, link, metadata,
language-layer, or length defect. E2--E5 routes remain planned dependencies,
not E1 defects.

**Initial review findings and fixes:** The independent review initially found
three integration issues: links to planned but not-yet-implemented E2/E5
targets, links that would have pulled E1 into the planned E3 `verbs-time-forms/`
migration, and incomplete proof that the moved old route was absent from source
and generated output. The executor removed the unavailable links, retained the
current `verbs/` links until E3, and completed the source/generated route and
consumer searches. Reviewer recheck: **PASS**, with no remaining E1 findings.

**Closure evidence:** All nine E1 Inventory targets occur exactly once as
canonical source targets. The old source and generated old route are absent;
the only intentional old-route repository match is the frozen Topic Inventory
migration row. No authored `de/learn/english/**` or `sv/learn/english/**`
mirror exists, so canonical fallback is the recorded disposition. The root,
`de/`, and `sv/` fallback outputs for the moved Questions and Do-Support route
are present. The generated base-less internal-link scan found **0** matches.

**Visual limitation:** No interactive visual inspection was performed. E1 adds
no component or CSS behavior; representative root/de/sv HTML generation was
verified, but narrow- and wide-layout rendering remains unverified residual
risk.

## E3 Evidence — Verbs and Time Forms

**Status:** Complete. Implementation, integration, independent review, and
closure gates all passed on 2026-09-12.

**Authoritative scope:** [English execution plan](./roadmap-phase-5-finalize-english.md#batch-3-verbs-and-time-forms),
[English Blueprint](./roadmap-phase-5-navigation-blueprint.md#learn-english),
and [English Topic Inventory](./roadmap-phase-5-topic-inventory.md#english).

**Implemented and reconciled:** All 15 E3 Inventory targets have exactly one
canonical source in `verbs-time-forms/`: 12 moved existing pages, including
the overview and both approved reference pages, plus new Past Progressive,
Past Perfect, and Present Perfect Progressive pages. The former `verbs/`
source directory is absent. There is one E3 index route, no redirect, and no
E4 route or consumer.

**Navigation, overview, and consumers:** The shared sidebar uses the exact
Blueprint order from the overview through Going To Future, then Future
Progressive and Future Perfect at the reference end. The E3 overview makes
Choosing Time Form the decision hub, includes all implemented core forms in
the learning order, and explicitly distinguishes the two reference forms.
English landing and Grammar overview, Sentence Structure, Questions and
Do-Support, Adverb Placement, both Common Mistakes consumers, sidebar entries,
and moved-page metadata and body/component links point to canonical new
routes. Page-body/component links are relative; `related` values are absolute
canonical routes.

**Migration corrections:** Integration removed stale old-route references from
all repository consumers listed above and added the three delivered E3 pages to
the sidebar and overview. It also replaced the overview's obsolete “planned
reference pages” statement with the implemented past/perfect sequence. No
validator exception, route preservation, redirect, or E4 linkage was added.

**Old-route disposition:** The old canonical route has no source,
configuration, metadata, consumer, or generated-output match. The only
repository matches are the twelve frozen English Topic Inventory migration
rows; they are the authoritative current-to-target record and intentional.
No failed E3 gate attempt occurred.

**Localized mirrors:** No authored `de/learn/english/**` or
`sv/learn/english/**` source exists. The final base-path build generated the
representative root, German, and Swedish E3 routes from canonical source. The
deliberate disposition is **canonical fallback**.

**Review boundary:** The integration audit found no unresolved route, link,
metadata, language-layer, duplicate-route, length, or E4-scope defect.
Independent linguistic/didactic and architecture review of all 15 E3 targets
and their consumers found no remaining defect. E4 is ready.

**Reviewer findings and fixes:** The independent review initially found three
issues: stale `verbs/` references remained in migration consumers, the
overview/sidebar did not yet make the core-versus-reference placement fully
explicit, and closure evidence did not yet prove the old generated routes and
locale fallback outputs were absent/present as intended. The executor updated
all affected consumers, corrected the overview and sidebar ordering, and
completed the source/generated-route and fallback checks. Independent recheck:
**PASS**, with no remaining E3 findings.

**Closure evidence:** The E3 shelf contains exactly 15 targets: 12 moved
existing pages and 3 created pages. The old `verbs/` source and generated
English route are absent; the only old-route repository matches are the 12
frozen English Topic Inventory migration rows. Sidebar order matches the
Blueprint, with Future Progressive and Future Perfect at the reference end
after the core sequence. No E4 English route or consumer was introduced. No
authored `de/learn/english/**` or `sv/learn/english/**` mirror exists; the
deliberate disposition is **canonical fallback**, verified by representative
root, `de/`, and `sv/` generated E3 routes. The generated base-less internal
`href` scan found **0** matches.

**Visual limitation:** No interactive visual inspection was performed. E3 adds
content and route changes but no component or CSS behavior; generated output
was checked, while narrow- and wide-layout rendering remains unverified.

## E4 Evidence — Verb Patterns, Voice, Mood, and Reported Speech

**Status:** Complete. Implementation, integration, independent review, and
closure gates all passed on 2026-09-12.

**Authoritative scope:** [English execution plan](./roadmap-phase-5-finalize-english.md#batch-4-verb-patterns-voice-mood-and-reported-speech),
[English Blueprint](./roadmap-phase-5-navigation-blueprint.md#learn-english),
and [English Topic Inventory](./roadmap-phase-5-topic-inventory.md#english).

**Scope and target count:** E4 contains exactly **11 create targets** across
two approved shelves: seven under Verb Patterns & Voice and four under Mood,
Politeness & Reports. This corrects the earlier audit handoff count of 10;
the Topic Inventory is authoritative. E4 has no planned route moves, redirects,
or retired canonical sources.

**Implemented and reconciled:** All 11 E4 targets have exactly one canonical
source: the seven Verb Patterns & Voice pages and the four Mood, Politeness &
Reports pages. There are two shelf index routes, no duplicate route, no move,
redirect, or retired source, and no E5 route or source.

**Temporary navigation decision:** The implemented English sidebar places the
two E4 shelves after Verbs & Time Forms. This is deliberately temporary: when
E5 creates its approved shelves, it must insert them before E4 to restore the
frozen Blueprint's final order. No frozen planning artifact was changed.

**Navigation and consumers:** Both E4 shelves and their child pages follow
the Blueprint's exact internal order. English landing and Grammar overview
link to the new shelves. Questions and Do-Support and Negation link to
Auxiliary Verbs as the wider helper system while retaining question formation
and clause negation as their own decisions. The E3 overview links to Auxiliary
Verbs; Passive links to Time Forms for tense choice. All page-body/component
links are relative and `related` values are absolute canonical routes.

**Boundary evidence:** Auxiliary Verbs explains the system, while Questions
and Do-Support owns question formation. Passive owns passive formation and
recognition, while Active vs Passive owns information-focus choice. Gerunds and
Infinitives is a practical pattern page, not a dictionary. Reported Speech
owns backshift and viewpoint changes. Polite Requests owns relationship-aware
request choices and links to, rather than duplicates, modal and question
grammar.

**Retained failed attempt and fix:** The initial E4 `npm run quality` failed
link validation on four sibling links in Active vs Passive, Passive, and
Gerunds and Infinitives. Each used `./` from a leaf route; integration changed
them to `../`. The subsequent quality run passed. No build, schema, or
language-layer failure occurred.

**Localized mirrors and E5 boundary:** No authored `de/learn/english/**` or
`sv/learn/english/**` source exists. The base-path build generated
representative root, German, and Swedish fallback routes. The deliberate
disposition is **canonical fallback**. Source and generated-output checks
confirm that the three E5 shelf directories remain absent.

**Review boundary:** The integration audit found no unresolved route, link,
metadata, language-layer, duplicate-route, length, or E5-scope defect.
Independent linguistic/didactic and architecture review of the complete E4
surface found no remaining defect. E5 is ready.

**Initial reviewer findings and fixes:** The independent review initially found
three issues: the temporary E4 shelf placement was not explicitly reconciled
with the final Blueprint order, one cross-shelf helper link needed its owning
boundary clarified, and closure evidence did not yet prove the absence of E5
source/generated targets and the intended locale fallback outputs. The
executor documented the temporary order decision, clarified the ownership link,
and added the source/generated and fallback checks. Independent recheck:
**PASS**, with no remaining E4 findings.

**Closure evidence:** All 11 E4 targets occur exactly once: seven in Verb
Patterns & Voice and four in Mood, Politeness & Reports, with exactly two
index routes. The sidebar child order matches each shelf's Blueprint order;
the temporary shelf placement after Verbs & Time Forms is documented and will
be corrected when E5 shelves are added. E4 has no route moves, redirects, or
retired sources. No E5 source or generated target route exists. No authored
`de/learn/english/**` or `sv/learn/english/**` mirror exists; the deliberate
disposition is **canonical fallback**, verified in representative root, `de/`,
and `sv/` outputs. The generated base-less internal `href` scan found **0**
matches.

**Visual limitation:** No interactive visual inspection was performed. E4 adds
content and routes but no component or CSS behavior; generated output was
checked, while narrow- and wide-layout rendering remains unverified.

## E2 Evidence — Nouns, Articles, Quantifiers, Pronouns, and Roles

**Status:** Complete. Implementation, integration, independent review, and
closure gates all passed on 2026-09-12.

**Authoritative scope:** [English execution plan](./roadmap-phase-5-finalize-english.md#batch-2-nouns-articles-quantifiers-pronouns-and-roles),
[English Blueprint](./roadmap-phase-5-navigation-blueprint.md#learn-english),
and [English Topic Inventory](./roadmap-phase-5-topic-inventory.md#english).

**Implemented and reconciled:** The twelve E2 Inventory targets have exactly
one canonical source each: the retained Nouns & Articles overview, Articles,
and Countable and Uncountable Nouns; new Plural Nouns and Possession; plus the
new Pronouns & Roles overview, Personal Pronouns, Possessive Pronouns,
Reflexive Pronouns, Demonstrative Pronouns, Indefinite Pronouns, and Sentence
Roles and Pronoun Case. E2 has no route move, retired source, redirect, or
duplicate index route.

**Navigation and consumers:** The shared English sidebar now follows the
implemented Blueprint order through Sentence Structure, Questions & Negation,
Nouns & Articles, Pronouns & Roles, and Verbs & Time Forms. Both new E2
shelves and their child pages match the Blueprint order. The English landing
and Grammar overview now route a learner from noun-phrase choice to the
relevant English pronoun role without applying German noun-case framing.
Common Mistakes needed no new consumer because its existing noun links remain
canonical and its planned E6 scope has not started.

**Ownership boundary:** Countable and Uncountable Nouns owns noun type and
quantifiers; Any vs No remains the E1 owner of clause-versus-noun-phrase
polarity; Indefinite Pronouns owns compound forms and agreement; Sentence
Roles and Pronoun Case owns the practical personal-pronoun subject/object
choice. The audited Personal Pronouns sibling link already used the correct
relative target; no route adjustment was needed.

**Integration fixes and retained failed evidence:** The first final build
attempt failed in Demonstrative Pronouns because MDX could not parse the
import-to-JSX boundary. A blank MDX separator fixed that syntax error. The
second attempt failed in Possession because an apostrophe inside a single-
quoted QuickCheck prompt broke the expression; the prompt now uses a
double-quoted literal. The third build passed. These fixes are mechanical
MDX/JavaScript syntax corrections only and do not change learning scope.

**Localized mirrors:** A filesystem recheck found no authored
`de/learn/english/**` or `sv/learn/english/**` source. The final base-path
build generated root, German, and Swedish fallback routes for representative
E2 pages. The deliberate mirror disposition is **canonical fallback**.

**Review boundary:** The integration audit found no unresolved route, link,
metadata, language-layer, duplicate-route, or length defect. Independent
linguistic/didactic and architecture review of all twelve E2 targets and their
consumers found no remaining defect. E3+ routes remain planned dependencies,
not E2 defects.

**Reviewer findings and fixes:** The independent review initially found three
issues: one pronoun sibling link still used the wrong relative target, the E2
sidebar/order evidence did not yet prove the complete Blueprint sequence, and
the closure evidence did not yet explicitly prove fallback outputs and the
absence of authored locale mirrors. The executor corrected the sibling link,
reconciled the English sidebar and child order, and added the filesystem and
generated-output checks. Independent recheck: **PASS**, with no remaining E2
findings.

**Closure evidence:** All twelve E2 Inventory targets occur exactly once as
canonical source files, with exactly two shelf index routes and no duplicate
index route. The shared sidebar order matches the Blueprint. No E2 route move,
retired source, redirect, or E3+ English route/content was introduced. No
authored `de/learn/english/**` or `sv/learn/english/**` mirror exists; the
deliberate disposition is **canonical fallback**, verified in representative
root, `de/`, and `sv/` generated E2 routes. The generated base-less internal
`href` scan found **0** matches.

**Visual limitation:** No interactive visual inspection was performed. E2 adds
no component or CSS behavior; generated output was checked, but narrow- and
wide-layout rendering remains unverified residual risk.

## Unresolved Blockers and Risks

- E5 and E6 remain unimplemented; E5 is ready after E4 closure.
- E5 must insert its approved shelves before E4. Until then, the recorded
  implemented-only temporary order is intentional.
- E4 adds no component or CSS behavior. Build output and fallback generation
  were verified, but no interactive narrow- and wide-layout review was run.

## Resume Instructions

1. Read this report first, then confirm `git status --short` and `git log -1
   --oneline` against the recorded state. Newer repository evidence is
   authoritative.
2. Find the first ledger row that is not `complete`. Re-read only that batch's
   section in the English plan, its Blueprint shelves, its Inventory rows, and
   the applicable rules.
3. Record every changed file, route migration, affected mirror disposition,
   validation result, and unresolved finding in this report.
4. Assign an independent review after implementation. Review the complete
   affected pages and consumers, not only the diff.
5. Resolve findings, rerun the required gates, and mark the batch `complete`
   only when implementation, review, follow-ups, and evidence agree.
6. If a baseline contradiction appears, stop the batch and correct the owning
   frozen artifact explicitly after approval. Do not improvise a replacement
   route or content boundary.

## Validation Ledger

Use ISO dates and retain failed attempts as evidence.

| Gate | Status | Date | Evidence or findings |
| --- | --- | --- | --- |
| `npm run quality` | Pass for E1 through E4 | 2026-09-12 | Final E4 run: ESLint, Stylelint, Astro Check (0 errors, 0 warnings, 0 hints), link validation (233 docs pages), and language-layer validation (233 docs pages) passed; the earlier 4-link E4 failure is retained in E4 Evidence |
| `npm run build -- --base /jp-language-hub` | Pass for E1 through E4 | 2026-09-12 | 670 static pages built; representative E4 root/de/sv fallback outputs are present |
| `npm run report:length` | Pass for E1 through E4 | 2026-09-12 | 233 pages measured; all 11 E4 targets are 121--459 rendered words; 7 pre-existing documented Swedish exceptions remain over 1000 words |
| `git diff --check` | Pass for E1 through E4 | 2026-09-12 | No whitespace errors |
| Inventory totals and unique targets | Pass for E1 through E4 | 2026-09-12 | E1 has 9, E2 has 12, E3 has 15, and E4 has 11 canonical targets, each exactly once; E4 has 2 shelf index routes; complete English reconciliation remains E6 |
| Retired-route repository search | Pass for E1 and E3; N/A E2 and E4 | 2026-09-12 | E3 old source and generated route absent; E4 has no move or retired route |
| Blueprint/sidebar order | Pass for E1 through E4 | 2026-09-12 | E4 child order matches the Blueprint; temporary implemented-only placement after Time Forms is recorded until E5 inserts its approved shelves before E4 |
| Affected localized mirrors | Pass for E1 through E4 | 2026-09-12 | No authored `de/` or `sv/` Learn-English source exists; canonical fallback verified by representative root/de/sv E4 routes |
| Generated base-path links | Pass for E1 through E4 | 2026-09-12 | 0 generated base-less internal `href="/..."` matches |
| English Architecture review | Pending E6 | — | Required before English completion |
| English Linguistic/Didactic review | Pending E6 | — | Required before English completion |

## Baseline Contradictions and Additional Decisions

None recorded at implementation start.
