# Rule Proposals

Proposed changes to `docs/rules/`. Status: `proposed` · `accepted` ·
`rejected` · `applied`. The author decides; an accepted proposal is applied
to `docs/rules/` before the fix pass starts.

R-01 – R-10 accepted and applied to `content-didactics.md` on 2026-10-11.
R-11 records decision D-01 as a rule.

| ID | Target | Proposal | Evidence | Status |
| --- | --- | --- | --- | --- |
| R-01 | `content-didactics.md` → Standard page order, item 3 | Replace "one to three sentences" with an intro contract: **2–5 sentences** that say (1) what the topic is in plain words, (2) one tiny example, (3) when the learner needs it. No new section type. | The weak pilot intros define but neither show nor motivate (`perfect`, `biff`, `dative`). The strong one (`family-and-relatives`) does all three in three sentences. A separate "The idea" section would add structure to 433 pages for a problem the intro can solve. | applied |
| R-02 | `content-didactics.md`, new section "Grammar terms" | A grammar term outside the assumed-known list (`rubric.md`) gets a glossary link on its first use per page: `[supine](../../glossary/#supine)`. An italic gloss in parentheses replaces the link only inside a component prop that cannot hold one. | SYS-04: every pilot grammar page uses unexplained terms. | applied |
| R-03 | `content-didactics.md`, new section "Reader level" | Readers are 12+. Plain words; one idea per sentence; prose sentences ideally under 25 words; every rule followed by an example within two sentences. Academic register is a defect. | P0-05, P0-18, P0-27. | applied |
| R-04 | `content-metadata.md` or `content-didactics.md` | Glossary pages: `learn/<language>/glossary/` per learning language, one `##` heading per term (stable anchor), entry = plain gloss (≤ 1 sentence) + one example + link to the main page. Mirrored to `de`/`sv` like any canonical page. | Decision of 2026-10-11. | applied |
| R-05 | `content-didactics.md` → SentenceSchema | A cell may only sit under a field label that is true for it. Main and subordinate clause have different schemas: compare them in two schemas, or use the subordinate-clause fields (`bisatsinledare`, `subjekt`, `satsadverbial`, `finit verb`, …) for subordinate rows. | P0-06 (S1): `biff` places finite `kommer` under `infinit verb`. | applied |
| R-06 | `content-didactics.md`, new "Spelling conventions" | One spelling for Swedish variants. Recommendation: `idag`, `igår`, `imorgon` — the majority form in the hub and accepted by SAOL. | SYS-01. | applied |
| R-07 | `content-didactics.md` → Translating Reference Pages | Add: translate into natural, plain meta language at the same reader level; avoid calques of English abstract nouns ("Perspektive", "strukturelle Brücke"). | P0-33. | applied |
| R-08 | `content-didactics.md` → MistakeBox | One error is taught in one place. The KeyTakeaway may name it; the page shows it in one MistakeBox. | P0-04. | applied |
| R-09 | `content-didactics.md` → RelatedTopics | Labels use sentence case, like titles. | SYS-03. | applied |
| R-10 | `content-didactics.md` → KeyTakeaway | A KeyTakeaway bullet uses plain words or carries the glossary link itself, because it comes before every explanation. | SYS-04. | applied |
| R-11 | `content-didactics.md` → Standard page order, LanguageComparison | Every grammar page in every learning-language tree has a `## Direct comparison` with the other two languages, unless no meaningful parallel exists. | D-01: the author's project standard; SYS-02. | applied |
