# Phase 5: Finalize English — Implementation Report

This file is the durable execution state for the English part of Phase 5.
Update it after every implementation or review hand-off so work can resume
safely after context loss. It records execution evidence and English-specific
decisions; it does not redefine the frozen information architecture.

## Current State

**Last updated:** 2026-09-12

**Overall status:** E1 and E2 are complete. Work is paused awaiting the
user's Go before E3; E3 through E6 remain blocked by the approved batch order.

**Repository baseline:** Commit `d3816a6` (`docs: split phase 5
implementation reports`) on `main`, confirmed as current HEAD when this state
was recorded. The execution wave started from a clean worktree at that
baseline. The current worktree contains the in-progress E2 content edits in
addition to the completed E1 work; they are not part of the baseline and have
not been committed.

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

## English Batch Ledger

Status values: `ready`, `in progress`, `dependency-blocked`, `review`,
`complete`, or `blocked`.

| Order | Batch | Status | Changed files | Evidence and review | Required follow-up |
| ---: | --- | --- | --- | --- | --- |
| 1 | English E1 — Sentence Structure, Questions, and Negation | **complete** | Sentence Structure and Questions & Negation pages; English landing/Grammar/Common Mistakes consumers; Verbs overview; `astro.config.mjs`; this report | Executor fixes applied; independent reviewer rechecked all nine targets and consumers: **PASS**; all closure checks and gates passed on 2026-09-12 | None; E1 is closed |
| 2 | English E2 — Nouns, Articles, Quantifiers, Pronouns, and Roles | **complete** | Nouns & Articles and Pronouns & Roles pages; English landing and Grammar overview; `astro.config.mjs`; this report | Executor fixes applied; independent reviewer rechecked all twelve targets and consumers: **PASS**; all closure checks and gates passed on 2026-09-12 | None; E2 is closed |
| 3 | English E3 — Verbs and Time Forms | **ready** | None | E2 dependency satisfied; execution paused pending user Go | Await user Go before starting E3 |
| 4 | English E4 — Verb Patterns, Voice, Mood, and Reported Speech | dependency-blocked by E3 | None | Not started | Start only after E3 is complete |
| 5 | English E5 — Adjectives, Prepositions, Connectors, and Word Formation | dependency-blocked by E4 | None | Not started | Start only after E4 is complete |
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

- E3 through E5 intentionally remain unimplemented. E3 owns the eventual
  `verbs/` move; E2 adds no route or link to later-batch targets.
- E2 adds no component or CSS behavior. No interactive narrow- and wide-layout
  review was run.

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
| `npm run quality` | Pass for E1 and E2 | 2026-09-12 | ESLint, Stylelint, Astro Check (0 errors, 0 warnings, 0 hints), link validation (219 docs pages), and language-layer validation (219 docs pages) passed |
| `npm run build -- --base /jp-language-hub` | Pass for E1 and E2 | 2026-09-12 | Final E2 attempt built 628 static pages; two earlier E2 MDX syntax failures and their fixes are retained in E2 Evidence |
| `npm run report:length` | Pass for E1 and E2 | 2026-09-12 | 219 pages measured; all 12 E2 targets are 160--801 rendered words; 7 pre-existing documented Swedish exceptions remain over 1000 words |
| `git diff --check` | Pass for E1 and E2 | 2026-09-12 | No whitespace errors |
| Inventory totals and unique targets | Pass for E1 and E2 | 2026-09-12 | E1 has 9 and E2 has 12 canonical targets, each exactly once; E2 has 2 unique shelf index routes; complete English reconciliation remains E6 |
| Retired-route repository search | Pass for E1; N/A E2 | 2026-09-12 | E1 old source and generated route absent; E2 has no planned move or retired route |
| Blueprint/sidebar order | Pass for E1 and E2 | 2026-09-12 | Every implemented E1/E2 shelf and child page matches Blueprint order; no E3+ English content or route was introduced; complete English tree remains E6 |
| Affected localized mirrors | Pass for E1 and E2 | 2026-09-12 | No authored `de/` or `sv/` Learn-English source exists; canonical fallback verified by representative root/de/sv E2 routes |
| Generated base-path links | Pass for E1 and E2 | 2026-09-12 | 0 generated base-less internal `href="/..."` matches |
| English Architecture review | Pending E6 | — | Required before English completion |
| English Linguistic/Didactic review | Pending E6 | — | Required before English completion |

## Baseline Contradictions and Additional Decisions

None recorded at implementation start.
