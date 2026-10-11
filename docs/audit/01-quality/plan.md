# jp-language-hub — Content Quality Audit: Meta Plan

How the audit is structured, split into sessions, and handed over. It holds
no findings and no status: findings live in `ledgers/`, status in
`state.md`, the session protocol in `AGENTS.md`.

## Goal

Raise every page to a level where a reader from roughly school age to adult
understands it on the first read, and where content, terminology and
structure are consistent across pages and locales.

Priority order for every judgement:

1. **Comprehensibility** — plain words, short sentences, examples before
   abstraction, every necessary grammar term explained on first use.
2. **Correctness** — rules, forms and examples are right and natural, in the
   learning language and in every comparison language.
3. **Consistency** — the same thing has the same name and the same
   explanation on every page and in every locale.
4. **Rule compliance** — `docs/rules/`, checked with judgement: where a rule
   blocks comprehensibility, the audit proposes a rule change instead of
   forcing the page to comply.

## Non-goals

- Re-running what `npm run quality` and `report:length` already verify
  (links, layer validation, glosses, schema labels). Run them per batch and
  record the result; do not review those aspects by hand.
- Navigation or IA redesign. Phase 5 settled it; report contradictions only.
- New topics. Missing topics go into a backlog list, not into this audit.
- Creating `/de/` or `/sv/` mirrors for the English and German learning
  trees (they exist in the root locale only). Flag it once, nothing more.

## Inventory (2026-10-11)

| Package | Scope | Pages |
| --- | --- | --- |
| Swedish canonical | `src/content/docs/learn/swedish/` | 93 |
| English canonical | `src/content/docs/learn/english/` | 66 |
| German canonical | `src/content/docs/learn/german/` | 82 |
| Shared | `index`, `false-friends`, `direct-translation-errors`, `practice/` | 4 |
| `de` mirror | `src/content/docs/de/` (Swedish tree + index) | 94 |
| `sv` mirror | `src/content/docs/sv/` (Swedish tree + index) | 94 |
| **Total** | | **433** |

## Folder layout

See the file table in `AGENTS.md`. Ledgers are flat, one per batch
(`ledgers/S3.md`, `ledgers/D3.md`); the batch ID already names the package.

## Rubric (draft, finalised in Phase 0)

| Dim | Checks |
| --- | --- |
| C1 Comprehensibility | Intro says what the topic is and why it matters; terms explained on first use (glossary link or italic gloss); sentence length; one idea per paragraph; example before abstract rule; no unexplained academic words. |
| C2 Correctness | Rules accurate; examples natural; comparison-language (`de`/`en`) examples correct and idiomatic. |
| C3 Consistency | Term names match `terms.md`; same rule explained the same way as on linked pages. |
| C4 Didactics | Page order; KeyTakeaway quality; QuickCheck tests production; no wall of text; length budget. |
| C5 Rules & layers | `docs/rules/` compliance beyond automated checks; layer separation. |
| T (translations only) | Didactic equivalence with canonical; natural meta language; same comprehensibility level as canonical; Swedish examples unchanged. |

Severity: **S1** wrong or misleading · **S2** hinders understanding ·
**S3** polish. Finding ID: `<batch>-<nn>`, e.g. `S4-07`. Page verdict:
`pass` · `fix` · `rewrite`.

## Phases

### Phase 0 — Setup and pilot (1 session)

1. Folder, `AGENTS.md`, `state.md` — done 2026-10-11.
2. Pilot-audit 10 deliberately different pages into `ledgers/P0.md`
   (paths under `src/content/docs/`):

   | # | Page | Why |
   | --- | --- | --- |
   | 1 | `learn/swedish/grammar/verbs-time-forms/perfect.mdx` | term-heavy (supine) |
   | 2 | `learn/swedish/grammar/sentence-structure/biff.mdx` | `SentenceSchema`, field names |
   | 3 | `learn/swedish/cheat-sheets/verb-forms.md` | plain-Markdown cheat sheet |
   | 4 | `learn/swedish/sentence-patterns/polite-requests.mdx` | practical phrase page |
   | 5 | `learn/swedish/vocabulary/family-and-relatives.mdx` | vocabulary page |
   | 6 | `learn/swedish/common-mistakes/from-german.mdx` | diagnostic router |
   | 7 | `false-friends.mdx` | shared, outside `learn/` |
   | 8 | `learn/english/grammar/verbs-time-forms/present-perfect.mdx` | same topic as #1 in another tree |
   | 9 | `learn/german/grammar/cases/dative.mdx` | German grammar terms |
   | 10 | `de/learn/swedish/grammar/verbs-time-forms/perfect.mdx` | mirror of #1, calibrates dimension T |
3. Calibrate the rubric with the pilot results; confirm batch sizes.
4. Write `rubric.md`; draft rule proposals from the pilot evidence (see
   Phase 1). Pilot pages are re-audited in their batch against the final
   rubric.

### Phase 1 — Rule decisions (1 session, author decides)

Known candidates, decided on pilot evidence:

- **R-01 Intro length.** Today "one to three sentences". Options: (a) 1–5
  sentences, each one idea; (b) keep 1–3 and add an optional
  `## The idea` section before `## Core rule` for complex topics. (b) keeps
  lookup pages short and gives hard topics room.
- **R-02 Glossary.** Placement decided (see `AGENTS.md`). Open: the
  first-mention rule — link on first mention per page; italic gloss in
  parentheses only where a link would interrupt.
- **R-03 Reader level.** Readers 12+ (decided). Open: the plain-language
  rule itself — target sentence length, words that need a gloss,
  example-first.
- **R-04 Term consistency.** `terms.md` becomes a rule-backed register.

After Phase 1 the rules are **frozen** for the audit. Later proposals are
collected and applied in Phase 5 with a re-check list.

Optional tooling (decide here): `report:terms` — flags register terms whose
first occurrence on a page has neither a glossary link nor a gloss.

### Phase 2 — Canonical audit (find only)

Batches of 7–15 pages, one sidebar shelf or two small ones. Order: Swedish
(S1–S9), shared (X1), English (E1–E6), German (G1–G8). Exact scopes are in
`state.md`.

Per batch: one Sonnet sub-agent reads rubric + rules + pages and writes the
ledger; the orchestrator spot-checks every S1/S2 finding and updates
`terms.md`. A session handles 2–4 batches.

### Phase 3 — Canonical fixes

Fix per batch, S1 findings first. One commit per batch,
`fix(content): …` / `docs(rules): …`. `npm run quality` and
`report:length` after each batch. Glossary pages are created at the start
of this phase.

### Phase 4 — Translation audit (after Phase 3)

Mirrors follow the canonical source, so they are audited only after its
fixes land — auditing earlier would review text that is about to change.
Batches D1–D9 and V1–V9 mirror S1–S9; D1/V1 add the locale's root `index.mdx`. Check dimension T plus C1 in the
meta language.

### Phase 5 — Closing

Apply deferred rule proposals, re-check affected pages, final
`npm run quality` + build, close `AGENTS.md` with a summary.

## Session protocol

See `AGENTS.md`.
