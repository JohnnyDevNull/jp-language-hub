# Audit State

**Phase:** 2 — canonical audit (find only)
**Next:** audit batch F0 (front door), canonical and both mirrors.
**Rules frozen:** yes, since 2026-10-11 (after R-15). New rule ideas go to
`rule-proposals.md` as `proposed` and wait for Phase 5.

Open decisions for the author: none.

Cell values: `open` · `wip` · `done@<sha>` (commit the work was done
against). Scopes are relative to `src/content/docs/`.

## Front door

The pages a new reader meets first, run end to end before S1: audit, fix,
translate, then a native `de` reader checks them. Their regular batches
(S1, S3, S6, X1) skip these pages once F0 is fixed.

| Batch | Scope (canonical, `de/`, `sv/`) | Pages | Audit | Fix | de review |
| --- | --- | --- | --- | --- | --- |
| F0 | `index.mdx`, `learn/swedish/{learning-path.mdx,grammar/sentence-structure/v2.mdx,grammar/sentence-structure/biff.mdx,grammar/nouns-articles/en-ett.mdx}` | 15 | open | open | open |

## Outside the pages

Reader-visible text that no page batch covers. Runs after F0. Scope is
relative to the repository root.

| Batch | Scope | Audit | Fix |
| --- | --- | --- | --- |
| U1 | `src/lib/ui-labels.ts` (component labels, all locales); `src/data/{verbs,adjectives,vocabulary}.json` (forms rendered into page tables) | open | open |

Sidebar labels are not in U1; they are backlog B-05 with their own task.

## Canonical

| Batch | Scope | Pages | Audit | Fix |
| --- | --- | --- | --- | --- |
| S1 | `learn/swedish/{index.md,learning-path.mdx,important.mdx,pronunciation-basics.mdx,common-mistakes/}` | 7 | open | open |
| S2 | `learn/swedish/grammar/{index.md,pronouns-roles/}` | 10 | open | open |
| S3 | `learn/swedish/grammar/{sentence-structure,questions-negation}/` | 12 | open | open |
| S4 | `learn/swedish/grammar/{verbs-time-forms,mood-politeness-reports}/` | 10 | open | open |
| S5 | `learn/swedish/grammar/{verb-patterns-voice,prepositions-function-words}/` | 11 | open | open |
| S6 | `learn/swedish/grammar/{nouns-articles,adjectives-adverbs}/` | 9 | open | open |
| S7 | `learn/swedish/sentence-patterns/` | 14 | open | open |
| S8 | `learn/swedish/vocabulary/` | 9 | open | open |
| S9 | `learn/swedish/cheat-sheets/` | 11 | open | open |
| X1 | `{index.mdx,false-friends.mdx,direct-translation-errors.mdx,practice/}` | 4 | open | open |
| E1 | `learn/english/{index.md,common-mistakes/,grammar/index.mdx,grammar/sentence-structure/}` | 10 | open | open |
| E2 | `learn/english/grammar/verbs-time-forms/` | 15 | open | open |
| E3 | `learn/english/grammar/{verb-patterns-voice,mood-politeness-reports}/` | 11 | open | open |
| E4 | `learn/english/grammar/{pronouns-roles,questions-negation}/` | 11 | open | open |
| E5 | `learn/english/grammar/{nouns-articles,adjectives-adverbs}/` | 11 | open | open |
| E6 | `learn/english/grammar/{prepositions-function-words,word-formation-particles}/` | 8 | open | open |
| G1 | `learn/german/{index.md,common-mistakes/,grammar/index.md,grammar/cases/}` | 11 | open | open |
| G2 | `learn/german/grammar/sentence-structure/` | 9 | open | open |
| G3 | `learn/german/grammar/verbs-time-forms/` | 11 | open | open |
| G4 | `learn/german/grammar/verb-patterns-voice/` | 8 | open | open |
| G5 | `learn/german/grammar/{mood-politeness-reports,function-words-negation}/` | 12 | open | open |
| G6 | `learn/german/grammar/prepositions/` | 8 | open | open |
| G7 | `learn/german/grammar/{pronouns-roles,nouns-articles}/` | 12 | open | open |
| G8 | `learn/german/grammar/{adjectives-adverbs,word-formation-particles}/` | 11 | open | open |

## Translations

Runs directly after the matching canonical batch is fixed, not after all
of them. Scope is the
canonical scope under `de/` (ledger `D<n>`) and `sv/` (ledger `V<n>`); batch
1 also includes the locale's root `index.mdx`.

| Batch | de audit | de fix | sv audit | sv fix |
| --- | --- | --- | --- | --- |
| 1 | open | open | open | open |
| 2 | open | open | open | open |
| 3 | open | open | open | open |
| 4 | open | open | open | open |
| 5 | open | open | open | open |
| 6 | open | open | open | open |
| 7 | open | open | open | open |
| 8 | open | open | open | open |
| 9 | open | open | open | open |
