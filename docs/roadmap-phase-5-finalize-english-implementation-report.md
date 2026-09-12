# Phase 5: Finalize English — Implementation Report

This file is the durable execution state for the English part of Phase 5.
Update it after every implementation or review hand-off so work can resume
safely after context loss. It records execution evidence and English-specific
decisions; it does not redefine the frozen information architecture.

## Current State

**Last updated:** 2026-09-12

**Overall status:** Ready for implementation. Swedish is complete, English has
not started, and E1 is the next approved batch.

**Repository baseline:** Commit `a1f4548` (`docs: fix sub-agent guidance
wording`) on `main`. Swedish implementation and its completion report were
committed in `4dc1aab` and `358516b`. No English implementation path has been
changed for Phase 5.

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

No English-specific implementation decision is recorded yet. Append only
decisions that arise during execution, with date, reason, affected files, and
validation consequences. Shared Phase 5 decisions remain in the owning plans.

## English Batch Ledger

Status values: `ready`, `in progress`, `dependency-blocked`, `review`,
`complete`, or `blocked`.

| Order | Batch | Status | Changed files | Evidence and review | Required follow-up |
| ---: | --- | --- | --- | --- | --- |
| 1 | English E1 — Sentence Structure, Questions, and Negation | **ready** | None | Prepared read-only only; implementation not started | Start with the E1 plan, Blueprint shelves, and Inventory rows |
| 2 | English E2 — Nouns, Articles, Quantifiers, Pronouns, and Roles | dependency-blocked by E1 | None | Not started | Start only after E1 is complete |
| 3 | English E3 — Verbs and Time Forms | dependency-blocked by E2 | None | Not started | Start only after E2 is complete |
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

## Unresolved Blockers and Risks

- No English implementation blocker is known at start.
- English has not started; E1 is ready.
- Interactive visual inspection availability must be confirmed when a batch
  changes components, CSS, or layout-sensitive content. If unavailable,
  record the unverified surface and residual risk explicitly.

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
| `npm run quality` | Pending E1 | — | Not run for English implementation |
| `npm run build -- --base /jp-language-hub` | Pending E1 | — | Not run for English implementation |
| `npm run report:length` | Pending E1 | — | Not run for English implementation |
| `git diff --check` | Pending E1 | — | Not run for English implementation |
| Inventory totals and unique targets | Pending E1 | — | Reconcile affected rows per batch and all English rows in E6 |
| Retired-route repository search | Pending E1 | — | Verify every migration before batch closure |
| Blueprint/sidebar order | Pending E1 | — | Verify affected shelves per batch and the complete English tree in E6 |
| Affected localized mirrors | Pending E1 | — | Record one disposition per affected authored mirror |
| Generated base-path links | Pending E1 | — | Scan generated output after each batch |
| English Architecture review | Pending E6 | — | Required before English completion |
| English Linguistic/Didactic review | Pending E6 | — | Required before English completion |

## Baseline Contradictions and Additional Decisions

None recorded at implementation start.
