# Systemic Findings

Patterns across many pages. Recorded once here, fixed in one pass, and not
repeated per page in the ledgers — a ledger references the ID instead.

| ID | Sev | Pattern | Evidence (73c3e93) | Fix | Status |
| --- | --- | --- | --- | --- | --- |
| SYS-01 | S3 | Swedish day adverbs spelled both ways. | `idag` 59 · `i dag` 1 · `igår` 2 · `i går` 8 · `imorgon` 21 · `i morgon` 11 in `learn/swedish` + shared pages. Both are correct Swedish. | Convention decided (D-03): `idag`, `igår`, `imorgon`, `ikväll`. Scripted replace in the fix pass. | open |
| SYS-02 | S2 | The German tree is thin. | Median 325 raw words per German page vs 425 English, 770 Swedish. 64 of 66 German grammar pages have no `LanguageComparison` and no `comparisonLanguages`. Pilot page `dative` lacks its form table. | Expect `rewrite` for most of G1–G8; plan effort accordingly. D-01: every German grammar page gets a direct comparison with `en` and `sv` (R-11). | open |
| SYS-03 | S3 | RelatedTopics labels in Title Case. | 74 German pages, 1 Swedish. | Scripted change to sentence case. | open |
| SYS-04 | S2 | Grammar terms appear before any explanation, often in the KeyTakeaway. | All pilot grammar pages. | Glossary + first-mention rule (R-02, R-10). | open |
| SYS-05 | S3 | Inline German words in italics instead of `<span lang="de">`. | 14 files match a narrow pattern; real count higher. | Search per batch; consider a validator check. | open |
| SYS-06 | S2 | The English tree compares with German only. | 4 of 51 English grammar pages list all three languages in `comparisonLanguages`; most compare `de`/`en` (pilot: `present-perfect`). Swedish: 41 of 42. | R-11: add the Swedish side to every English grammar comparison. Mostly additive; the existing German blocks stay. | open |
