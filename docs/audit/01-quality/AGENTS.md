# Audit 01 — Content Quality

Audit of every content page for comprehensibility, correctness and
consistency, and of `docs/rules/` for rules that hold quality back. It runs
over many sessions; this folder is the only memory between them. The
project-root `AGENTS.md` still applies in full.

`CLAUDE.md` in this folder is a symlink to this file. Edit `AGENTS.md` only.

## Start of a session

1. Read `state.md`. It says the phase, the next step, and every batch's
   status.
2. Read `plan.md` for the current phase only, and `rubric.md` once it exists.
3. Read the `docs/rules/` files the root `AGENTS.md` names for the work.
4. A batch marked `wip`: open its ledger and continue at the first page row
   whose verdict is `open`.

## End of a session (mandatory)

1. Update the batch cells and the **Next** line in `state.md`.
2. Add one entry at the top of **History** below: date and 1–5 sentences.

Do this even when the session stops mid-batch. A session that ends without
it forces the next one to re-audit.

## Decisions

| Date | Decision |
| --- | --- |
| 2026-10-11 | Target readers are 12 and older, with basic school knowledge. |
| 2026-10-11 | One glossary page per learning language, `learn/<language>/glossary/`, one anchor per term, mirrored to `de`/`sv`. |
| 2026-10-11 | Audit and fix are separate passes. An audit pass changes no content. |
| 2026-10-11 | Translations are audited only after their canonical batch is fixed. |

## Files

| File | Holds | Created |
| --- | --- | --- |
| `state.md` | phase, next step, batch board | now |
| `plan.md` | goal, phases, rubric draft | now |
| `rubric.md` | final criteria and severity | Phase 0 |
| `ledgers/<batch>.md` | per-page verdicts and findings | at batch start |
| `rule-proposals.md` | proposed `docs/rules/` changes, with status | on first entry |
| `terms.md` | grammar-term register: term, gloss, glossary anchor | on first entry |
| `backlog.md` | out-of-scope observations | on first entry |

## Ledger format

Create the ledger at batch start, with one `open` row per file in the
batch's scope from `state.md`. Batch IDs: `P0` pilot; `S`, `X`, `E`, `G`
canonical; `D<n>`, `V<n>` for the `de` and `sv` mirrors of `S<n>`.

```md
# S3 — sentence-structure, questions-negation

Audited against: <sha>

| Page | Verdict | Findings |
| --- | --- | --- |
| `grammar/sentence-structure/v2-word-order.mdx` | fix | S3-01, S3-02 |

## Findings

| ID | Sev | Dim | Page | Finding | Status |
| --- | --- | --- | --- | --- | --- |
| S3-01 | S2 | C1 | v2-word-order | `finit verb` used before it is explained | open |
```

- Verdict: `open` · `pass` · `fix` · `rewrite`.
- Severity: `S1` wrong or misleading · `S2` hinders understanding ·
  `S3` polish. Dimensions are defined in `rubric.md`.
- Finding status: `open` · `fixed` · `wontfix` (reason in the row).

## Checks

Stale audit — pages changed after a batch was audited:

```bash
git log --oneline <audit-sha>..HEAD -- src/content/docs/<scope>
```

New files in an audited scope are added as `open` rows. A new directory that
no scope covers gets a new batch row in `state.md`.

Per fixed batch: `npm run quality`, then
`npm run build && npm run report:length`.

## History

- 2026-10-11 — Audit set up: plan, state board with 24 canonical and 9×2
  translation batches, session protocol. Decisions on reader age, glossary
  placement and audit/fix separation recorded. Next: Phase 0 pilot.
