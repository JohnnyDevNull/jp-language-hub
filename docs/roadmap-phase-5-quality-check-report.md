# Phase 5: Whole-Tree Quality Check — Implementation Report

This file is the durable execution state for the cross-language Phase 5
Quality Check. It records evidence, findings, remediation, and final-gate
status; it does not redefine the frozen information architecture.

## Current State

**Last updated:** 2026-09-12

**Overall status:** Q1 through Q6 are complete. The Phase 5 Whole-Tree Quality
Check is complete after VIS-01 remediation and independent visual retest.
Phase 6 is unblocked but has not started. The P3 target-size observation is
advisory and non-blocking.

**Baseline:** HEAD `db9a2ed` (`docs(roadmap): update phase 5 implementation
status`) on `main`; the worktree was clean at preflight. German G1-G5 is
complete through `c298e83`; English and Swedish finalization reports are
complete. The final Quality Check state is recorded here; no release or push
is implied by this report.

## Sources of Truth and Change Policy

1. [`roadmap-phase-5-quality-check.md`](./roadmap-phase-5-quality-check.md)
   owns Q1-Q6 scope, gates, finding policy, and Definition of Done.
2. [`roadmap-phase-5-align-grammar-ia.md`](./roadmap-phase-5-align-grammar-ia.md)
   owns Phase 5 process, frozen scope, order, and mirror policy.
3. [`roadmap-phase-5-navigation-blueprint.md`](./roadmap-phase-5-navigation-blueprint.md)
   owns visible shelves, route names, page order, and language deviations.
4. [`roadmap-phase-5-topic-inventory.md`](./roadmap-phase-5-topic-inventory.md)
   owns source rows, target routes, actions, priorities, and can-do coverage.
5. Language implementation evidence is recorded in the [Swedish](./roadmap-phase-5-finalize-swedish-implementation-report.md),
   [English](./roadmap-phase-5-finalize-english-implementation-report.md), and
   [German](./roadmap-phase-5-finalize-german-implementation-report.md)
   implementation reports under `docs/`. The independent QC evidence is
   recorded in the structure, mirrors, cross-language, Swedish, English, and
   German ledgers under `docs/roadmap-phase-5-quality-check-*.md`.
6. `docs/rules/` remains authoritative for engineering, architecture,
   metadata, and didactics.

Do not redesign the approved IA, add unrelated grammar topics, or begin broad
meta-language translation. Classify findings before changing anything:

- language-specific implementation defect: return it to the owning language
  report and rerun that plan's final gate;
- cross-language/shared-system defect: fix within this Quality Check;
- baseline contradiction: stop and explicitly reopen the owning planning
  decision;
- later enhancement: record outside Phase 5 without blocking completion.

## Preflight Evidence

The frozen Topic Inventory contains 202 rows and 201 unique targets:

- Swedish: 55 rows / 55 unique targets;
- English: 65 rows / 65 unique targets;
- German: 82 rows / 81 unique targets because of the approved Active merge.

Preflight checks found all Blueprint targets present, all 132 historical
source routes represented exactly once in the Inventory, and all 77 retired
routes absent from current source references. Automated validators passed
across 252 documentation pages. The repository contains 10 authored localized
files: five under `de/` and five under `sv/`. Of these, eight are affected
authored Swedish-learning mirror files (four `de` and four `sv`) and two are
locale homepages. No authored English- or German-learning mirrors exist. The
source absolute-body-link scan returned 0 matches.

These counts were independently rechecked during Q1-Q5 closure. The final
system gate and Definition of Done are recorded below.

## Review Package Ledger

Status values: `pending`, `in review`, `in progress`, `complete`, or `blocked`.

| Package | Status | Scope | Evidence / blocker | Required follow-up |
| --- | --- | --- | --- | --- |
| Q1 — Inventory and route reconciliation | **complete** | All 202 rows, 201 targets, Blueprint entries, historical/retired routes, actions, and explicit merges | 202/132/201 reconciliation complete; 77 retired routes have 0 current refs; independent Q1 ledger PASS | None; evidence included in Q6 |
| Q2 — Navigation and architecture | **complete** | Complete sidebar, shelf overviews, P0 visibility, German deviation, Swedish entries, Common Mistakes placement, language layers | German missing `dependent-prepositions` child fixed; S54/E65/G81 sidebar checks PASS | None; evidence included in Q6 |
| Q3 — Whole-tree linguistic review | **complete** | Every canonical target, transfer claim, learner question, depth, and adjacent-topic boundary | Full read: S90/E66/G82 = 238 pages; German findings remediated; independent Q3 semantic PASS | None; evidence included in Q6 |
| Q4 — Whole-tree didactic review | **complete** | Lookup speed, order, schemas, comparisons, QuickChecks, diagnostics, stubs, walls, and length exceptions | Full read: S90/E66/G82 = 238 pages; independent Q4 didactic PASS | None; evidence included in Q6 |
| Q5 — Metadata, links, and mirrors | **complete** | Metadata, links, mirrors, retired routes, and generated hrefs | Validators PASS; 10 localized files (8 affected Swedish mirrors + 2 homepages); no E/G learning mirrors; base href checks PASS | None; evidence included in Q6 |
| Q6 — Final system gate | **complete** | Commands, can-do coverage, duplicates, comparable roots, final status, and Phase 6 readiness | Cross-language review: 87 pages and 177 `LanguageComparison` instances; can-do PASS; automated/semantic and visual gates PASS; VIS-01 resolved | None; Phase 6 is unblocked but not started |

## Q1-Q5 Closure Evidence

The five package ledgers are closed as follows: Q1 inventory/reconciliation,
Q2 navigation/architecture, Q3 linguistic review, Q4 didactic review, and Q5
metadata/links/mirrors. Their implementation evidence remains in the linked
Swedish, English, and German ledgers above.

- Q1 reconciles 202 Inventory rows, 132 historical routes, and 201 unique
  targets; all 77 retired routes have zero current references. The stale 207
  Blueprint-occurrence count is resolved as 201 unique target/sidebar entries.
- Q2 passes the final sidebar counts S54/E65/G81. The German
  `Dependent Prepositions` child was added at the approved location and the
  known Q2 defect was independently rechecked as fixed.
- Q3 and Q4 each covered a full read of S90/E66/G82 = 238 canonical pages.
  German findings were remediated; both independent semantic and didactic
  reviews passed.
- Q5 validators pass. There are 10 localized files total: eight affected
  authored Swedish-learning mirrors (4 `de` + 4 `sv`) and two locale
  homepages; no authored English- or German-learning mirrors exist. Absolute
  body-link and generated base-path checks pass with zero violations.
- Cross-language review covered 87 pages and 177 `LanguageComparison`
  instances. The A1-B2 can-do checklist has a passing disposition across all
  13/13 capabilities.

**Final gate evidence:** `npm run quality` passed across 252 documentation
pages with 0 errors, warnings, or hints. `npm run build -- --base
/jp-language-hub` passed with 727 pages. `npm run report:length` passed across
252 pages with exactly seven documented Swedish exceptions. `git diff --check`
passed. The generated output contains 66,551 absolute hrefs and 0 base-less
internal hrefs. The planning-marker scan found 0 unresolved markers.

Interactive viewport inspection was executed and is recorded in the [wide
ledger](./roadmap-phase-5-quality-check-visual-wide-ledger.md) and [narrow
ledger](./roadmap-phase-5-quality-check-visual-narrow-ledger.md). Wide coverage
at 1440x900 passed across 16 routes; narrow coverage at 390x844 passed across
18 routes for layout, reflow, and navigation. An independent spot-check found
the visible mobile menu control is 32x32: it exceeds the WCAG 2.2 AA 24px
minimum target criterion but is below the 44px comfort guideline (P3 advisory).
The historical blocking finding **VIS-01 (P1)** was that when the drawer was
visually open, the native menu button's `aria-expanded` remained `false` and
the accessibility tree remained collapsed, indistinguishable from the closed
state.

**VIS-01 root cause and decision:** Starlight `0.41.10` exposes a host-level
menu component whose visual drawer state is not reflected on the nested native
button's `aria-expanded` state. A Starlight/Astro upgrade now was rejected as
too broad for this gate; a `MutationObserver` was rejected as indirect and
fragile; and a CSS-only change cannot repair accessibility semantics. The
chosen narrow fix is a `MobileMenuToggle` override in which the native button
is the sole `aria-expanded` owner. The body-driven
`data-mobile-menu-expanded` state controls the visible drawer, while the host
intentionally carries no `aria-expanded` attribute. This preserves Starlight's
existing keyboard operation, focus handling, and labels. The override was
implemented, independently code-reviewed, and retested in the root IAB;
VIS-01 is resolved and Q6 is complete. The P3 32x32 target-size observation
remains advisory.

## Known Documentation Contradictions

- The coordination plan retains historical execution prose for traceability;
  its current status header records the Phase 5 review state.
- Can-do coverage passed its cross-language review and is included in the
  completed Q6 evidence.

## Required Commands

```bash
npm run quality
npm run build -- --base /jp-language-hub
npm run report:length
git diff --check
```

Targeted checks must also prove Inventory/history/target uniqueness, explicit
merges, Blueprint coverage, absence of `TBD`, `TODO`, `maybe`, and
`audit/create` markers, absence of retired canonical routes, valid mirrors,
and no generated internal href without `/jp-language-hub`.

## Risks and Resume Instructions

- Q1-Q6 are closed after VIS-01 remediation and independent retest. Phase 6
  is unblocked but has not started.
- Automated validators do not prove sidebar order, linguistic accuracy,
  didactic quality, duplicate ownership, or can-do completeness.
- The eight affected authored Swedish-learning mirrors (4 `de` + 4 `sv`)
  require their recorded structural and didactic dispositions; fallback pages
  are not authored translations.
- VIS-01 is resolved; the P3 32x32 target-size finding is advisory only. Phase
  7 remains the later package-wide meta-language review.

1. Preserve the passing Q1-Q6 evidence and frozen IA/Inventory.
2. Begin Phase 6 only as a separately authorized translation effort; Phase 7
   remains the later package-wide meta-language review.

**Whole-Tree Quality Check status:** complete; Phase 6 is unblocked but not
started.
