# Phase 6 Review Report: Learn Swedish Meta-Language Packages

## Status

**Status:** Complete. The review is finished, every finding is remediated, and
the package passes. R1–R5 are implemented (section 10), R6–R8 are implemented
(section 12), the gloss validator R9 is wired into `npm run quality`
(section 11), and all three canonical defects were corrected at their source on
the plan owner's decision (section 13). No review item remains open.

**Verdict: PASS.** The review opened as a conditional pass: the package was
structurally sound and linguistically strong, but carried one blocker and six
major findings that had to be fixed before the Learn English plan started,
because the later packages copy this one's patterns. All of them are now fixed
and verified.

**Review date:** 2026-09-13
**Reviewed commits:** `8222e2f` (translation batches) and `c8dd312` (package completion)
**Reviewed surface:** `src/content/docs/de/learn/swedish/` and
`src/content/docs/sv/learn/swedish/`, 90 mirrors each, against the 90 canonical
files under `src/content/docs/learn/swedish/`.

This report reviews the work described in the
[implementation report](./roadmap-phase-6-finalize-swedish-meta-translations-implementation-report.md)
against the [Learn Swedish plan](./roadmap-phase-6-finalize-swedish-meta-translations.md)
and the [Phase 6 coordination plan](./roadmap-phase-6-complete-meta-language-packages.md).
It does not change content. Remediation is tracked in section 7.

## 1. Method

Three independent reviewers ran in parallel, none of them the author of the
translations:

| Reviewer     | Scope                                  | Coverage                                      |
| ------------ | -------------------------------------- | --------------------------------------------- |
| Structural   | 12 mechanical and rule checks          | all 180 mirrors, scripted, no sampling        |
| German-meta  | fidelity, German quality, terminology  | 30 file pairs, stratified across every bucket |
| Swedish-meta | fidelity, Swedish quality, circularity | 34 file pairs plus 2 tree-wide regex passes   |

Every finding quoted below was re-verified directly against the files before it
entered this report. Claims that did not survive that check are recorded in
section 5 as false positives, so they are not chased again.

## 2. Findings by severity

### BLOCKER

**B1 — `de/learn/swedish/grammar/sentence-structure/biff.mdx:159`: the BIFF
mnemonic teaches the opposite rule.**

```
canonical  In a **BI**sats, put **I**nte **F**öre the **F**inite verb.
german     Im **BI**satz steht **I**nte **F**ür das **F**inite Verb.
swedish    I en **BI**sats kommer **I**nte **F**öre det **F**inita verbet.
```

Swedish `före` ("before") was replaced by German `für` ("for"). The rule box on
the same page is correct, but `MemoryTip` is the one line the learner is meant
to memorize, and it now states a relation that does not exist. The Swedish
mirror is correct; only the German one is wrong.

Fix: `Im **BI**satz steht **I**nte **F**öre dem **F**initen Verb.` — keeping the
Swedish cue word preserves both the acronym and the rule.

### MAJOR

**M1 — Untranslated English in visible Swedish-meta component titles.**
`sv/learn/swedish/grammar/prepositions-function-words/dar-har-adverbs.mdx:118`
and `:124` render as UI headings:

```
<LanguageComparison title="Therefore, en huvudsats">
<LanguageComparison title="Because, en bisats">
```

The German mirror handled the same two blocks correctly
(`Deshalb, ein Hauptsatz`). A tree-wide pass over every `LanguageComparison`
title found no other case. This violates the plan's Definition of Done: "no
untranslated canonical English explanatory fallback remains".

**M2 — Circular self-glosses in the Swedish-meta package (8 table rows,
3 files).** A meaning column that repeats its own term teaches nothing:

| File                                                                | Rows                                                                     |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `sv/.../grammar/nouns-articles/en-ett.mdx:64-65`                    | `en bil \| en bil`, `ett hus \| ett hus` (canonical: `a car`, `a house`) |
| `sv/.../grammar/pronouns-roles/man-varandra-varsin.mdx:112,113,126` | `alla \| alla`, `allt \| allt`, `när som helst \| när som helst`         |
| `sv/.../grammar/pronouns-roles/reflexive-pronouns.mdx:77-79`        | `känna sig`, `lära sig`, `gifta sig`, each glossed with itself           |

The same files elsewhere solve this correctly, by paraphrasing (`var och en →
varje person`) or by dropping the now-redundant column. Both solutions are
acceptable; the duplicated cell is not.

**M3 — Leftover English gloss inside a Swedish-meta table.**
`sv/.../grammar/pronouns-roles/man-varandra-varsin.mdx:111`: `<Sv>varje</Sv> |
each, every`. The canonical English gloss was carried over untranslated in a
table whose other rows are Swedish.

**M4 — `learning-path.mdx` (de and sv) rewrites canonical markdown links as raw
HTML.** The canonical file contains zero `<a href>` elements. Both mirrors
replaced `[en / ett](../grammar/nouns-articles/en-ett/)` with
`<a href="../grammar/nouns-articles/en-ett/"><Sv>en</Sv> / <Sv>ett</Sv></a>`,
6 times in German and 6 times in Swedish, raising the `<Sv>` count from 12 in
the canonical file to 34 (de) and 29 (sv).

The intent is good — it marks Swedish words as Swedish inside a link label —
but it is a structural change beyond a meta-language translation, it introduces
a second link syntax into a tree that otherwise uses markdown links only, and
it is the sole cause of the `<Sv>` count drift reported in section 3. Decide
one way for the whole project: either canonical adopts the pattern and mirrors
follow, or the mirrors revert to plain markdown link labels. Do not leave the
two syntaxes side by side.

**M5 — German terminology drift: `Satzadverb` vs `Satsadverbial`.**
`de/.../grammar/sentence-structure/basic-word-order.mdx` translates the
`SentenceSchema` column label to `Satzadverb`, while `inte-placement.mdx`,
`biff.mdx`, `subordinate-clauses.mdx`, `questions.mdx`, `question-words.mdx`
and `reported-speech.mdx` keep the Swedish linguistic term `Satsadverbial`.
These seven pages cross-link each other densely, so the learner meets both
labels for one slot in one reading session.

**M6 — German terminology drift: the reflexive possessive has three names.**
`reflexives Possessivpronomen` (`sin-sitt-sina.mdx`), `Reflexivpossessiv` and
`reflexives Possessivum` (both inside `man-varandra-varsin.mdx`), and
`reflexives Possessivum` (`reported-speech.mdx`).

### MINOR

| ID  | File(s)                                                                 | Finding                                                                                                                                                                                                                                                      |
| --- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| m1  | 10 mirrors, e.g. `de/.../prepositions.mdx`, `de/.../inte-placement.mdx` | Cited Swedish forms inside `<Sv>` were capitalized at sentence start: `Till`, `Mot`, `På`, `Om`, `Inte`, `Att`, `Där-`, `Som helst`, `Imperativ`. The cited form is the thing being taught; prefer restructuring the sentence so it stays lowercase.         |
| m2  | `de`+`sv` `reflexive-pronouns.mdx`, `possessive-pronouns.mdx`           | Trailing commas dropped inside `<Sv>` spans (`mig, dig, sig, oss,` → `… oss`). Harmless, but breaks the byte-identity rule.                                                                                                                                  |
| m3  | German tree                                                             | The recurring "Use this now" heading appears as `Jetzt anwenden` (4 files), `Nutze das jetzt` (2), `Sofort anwenden` (1). It is a structural signpost on nearly every page.                                                                                  |
| m4  | `de/learn/swedish/learning-path.mdx`                                    | Plain hyphens where canonical and every other German mirror use em dashes.                                                                                                                                                                                   |
| m5  | `sv/.../dar-har-adverbs.mdx`                                            | `därav` ("hence, from that") and `därför` ("therefore") both glossed `av den anledningen`, collapsing a distinction the canonical table keeps. One `<Sv>det</Sv>` span was also lost. At 81.7% of canonical length, this is the weakest file in the package. |
| m6  | `de/.../man-varandra-varsin.mdx`                                        | `MemoryTip` drops the canonical closing clause about `som helst` phrases coming free once question words are secure.                                                                                                                                         |
| m7  | `de/learn/swedish/sentence-patterns/index.mdx`                          | Typographic ellipsis `…` replaced by three dots.                                                                                                                                                                                                             |
| m8  | `de/.../pronunciation-basics.mdx`, `sv/.../negation.mdx`                | Two slightly translationese sentences; understandable, not idiomatic.                                                                                                                                                                                        |
| m9  | `sv/learn/swedish/important.mdx:38`                                     | The JSX render block was collapsed onto a single line; canonical and the German mirror keep it formatted across several lines. Output is identical, but the file is no longer diffable against its canonical source.                                         |

### IMPROVEMENT (not defects)

- `de/.../man-varandra-varsin.mdx` and `de/.../dar-har-adverbs.mdx` explicitly
  use the German↔Swedish parallel (`man` = `man`, `darum/hiermit` =
  `därför/härmed`) instead of mirroring the English "no single equivalent"
  framing. This is the house style the Learn English and Learn German packages
  should copy.
- Add a lint rule for the self-gloss pattern (`| <Sv>X</Sv> | X |`). One regex
  pass finds every instance tree-wide, so it is cheap to guard in CI and would
  have caught M2 and M3 before commit.

## 3. Architecture and rules compliance

Scripted over all 180 mirrors, no sampling.

| #   | Check                                                                                                                             | Result                                                                                                |
| --- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 1   | Path parity, no orphans                                                                                                           | PASS — 90/90/90, identical relative paths                                                             |
| 2   | Frontmatter parity (`grammarLanguage`, `comparisonLanguages`, `levels`, `tags`, `related` byte-identical; `metaLanguage` correct) | PASS — 0 deviations in 180 files                                                                      |
| 3   | No page-body link or `href` starting with `/`                                                                                     | PASS — 0 hits                                                                                         |
| 4   | `related` absolute, canonical, no locale prefix                                                                                   | PASS                                                                                                  |
| 5   | Component parity (imports, instance counts, table rows, QuickCheck counts)                                                        | PASS except `<Sv>` counts in 4 files, all caused by M4 and m5                                         |
| 6   | Length band 80–130% of canonical                                                                                                  | PASS — 1 flag, resolved as a false positive (section 5)                                               |
| 7   | Swedish text inside `<Sv>` byte-identical                                                                                         | FAIL — 18 file/locale pairs, covered by M4, m1, m2, m5; 15 further pairs differ only in line wrapping |
| 8   | No English `sidebar.label` left                                                                                                   | PASS — 0 of 180                                                                                       |
| 9   | Titles match `roadmap-phase-6-swedish-title-glossary.md`                                                                          | PASS — 90 rows, 0 mismatches                                                                          |
| 10  | Canonical tree untouched                                                                                                          | PASS — `git diff 2ca5327..c8dd312 -- src/content/docs/learn/` is empty                                |
| 11  | Language layers kept separate (meta / learning / comparison)                                                                      | PASS — no comparison language received a route, page or sidebar entry                                 |
| 12  | Metadata vocabulary valid                                                                                                         | PASS — all `tags` and `levels` from `content-metadata.md`                                             |

### Automated gates

| Gate                                       | Result                                                                                                                 |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `npm run quality`                          | PASS — exit 0; `astro check` 0 errors / 0 warnings; `validate:links` and `validate:language-layers` 424 pages OK       |
| `npm run build -- --base /jp-language-hub` | PASS — exit 0, 727 pages                                                                                               |
| `npm run report:length`                    | PASS — exit 0; 424 pages, 14 over budget, all 14 have an exception row in `docs/rules/content-didactics.md` (verified) |
| `git diff --check`                         | PASS — exit 0                                                                                                          |
| `dist/` base-path grep                     | PASS — 0 `href="/…"` without the `/jp-language-hub` base                                                               |

## 4. Language quality assessment

| Package      | Score | Summary                                                                                                                                                                                                                                                                                                                                       |
| ------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| German-meta  | 8/10  | Fidelity excellent, no leftover English prose in 30 sampled pairs, QuickCheck answers correct and non-leaking, terminology overwhelmingly consistent (`Nebensatz`, `Hauptsatz`, `Genus`, `Kongruenz`, `bestimmte/unbestimmte Form`). One inverted mnemonic and two terminology drifts hold it below 9.                                        |
| Swedish-meta | 8/10  | Idiomatic Swedish, correct terminology (`huvudsats`, `bisats`, `subjunktion`, `satsadverbial`, `supinum`, `s-passiv`, `dubbel bestämdhet`), no wrong answers. Translate-tasks were correctly converted to fill-in-the-blank, so the Swedish-in-Swedish answer-leak risk was handled. Circular glosses and two English titles hold it below 9. |

The harder pages — `passive.mdx`, `particle-verbs.mdx`, `agreement.mdx`,
`adverbs.mdx` — are the strongest in the package. The defects cluster in short
reference tables, not in the explanatory prose.

## 5. Claims checked and rejected

Recorded so they are not re-investigated:

- **`sv/learn/swedish/index.md` at 75.4% of canonical word count is not
  truncated.** Every section, table row and link of the canonical page is
  present. Swedish prose is simply denser here. The 80% floor is a heuristic,
  not a rule.
- **The four Swedish vocabulary pages at 1.15–1.23× are not bloated.** Their
  gloss column paraphrases each item in Swedish instead of translating it,
  which is the correct solution to the Swedish-in-Swedish problem.
- **`<Sv>Eftersom jag var sjuk stannade jag hemma.</Sv>` in
  `sv/.../dar-har-adverbs.mdx` was not added by the translator.** It exists in
  the canonical file at line 103.
- **15 further `<Sv>` differences are line-wrap artifacts only**, with identical
  words and casing. They are not mistranslations.

## 6. Canonical defects to hand back

Per the Phase 6 rule "a canonical defect found during translation is recorded
separately and returned to the canonical owner", these belong to the Phase 5
owner and must not be fixed inside this package:

1. ~~`learn/swedish/grammar/verb-patterns-voice/verb-groups.mdx` puts English
   text inside a `<Sv>` tag.~~ **Resolved 2026-09-13 at the canonical source**,
   on the plan owner's decision — see section 13.
2. ~~The canonical `SentenceSchema` column label mixes naming styles.~~
   **Resolved 2026-09-13** — see section 13.
3. ~~Canonical pages link `grammar/nouns-articles/en-ett/` with different label
   shapes.~~ **Resolved 2026-09-13** — see section 13.

## 7. Required remediation before the Learn English package starts

| ID  | Action                                                                                                     | Severity    | Effort            |
| --- | ---------------------------------------------------------------------------------------------------------- | ----------- | ----------------- |
| R1  | Fix the German BIFF mnemonic (`Für` → `Före`)                                                              | blocker     | 1 line            |
| R2  | Translate the two English `LanguageComparison` titles in `sv/.../dar-har-adverbs.mdx`                      | major       | 2 lines           |
| R3  | Replace the 8 circular self-gloss rows and the `each, every` gloss                                         | major       | 3 files           |
| R4  | Decide and apply one link syntax in `learning-path.mdx` (de and sv)                                        | major       | 2 files, 12 links |
| R5  | Unify `Satzadverb`/`Satsadverbial` and the reflexive-possessive term in German                             | major       | 7 + 3 files       |
| R6  | Restore `därav` vs `därför` and the lost `<Sv>det</Sv>` in `sv/.../dar-har-adverbs.mdx`                    | minor       | 1 file            |
| R7  | Unify the German "Use this now" heading and the em dashes in `learning-path.mdx`                           | minor       | 8 files           |
| R8  | Restore casing and trailing commas inside `<Sv>` spans, and re-expand the collapsed JSX block (m1, m2, m9) | minor       | 13 files          |
| R9  | Add a CI check for the self-gloss pattern and for English words in component title props                   | improvement | 1 script          |

R1–R5 are required for a clean pass. R6–R9 may be batched with the Learn
English work, but R9 should land before it, because the same defect class will
reappear in the Swedish-meta Learn English package.

## 8. Definition of Done assessment

Against the [Learn Swedish plan](./roadmap-phase-6-finalize-swedish-meta-translations.md):

| Criterion                                                                                 | Status                                                        |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| all canonical pages have authored German and Swedish mirrors                              | MET — 90/90 in both                                           |
| every pair classified, reviewed, complete in the implementation report                    | MET                                                           |
| no known revision hidden in the verified or fresh buckets                                 | MET — the legacy sweep is documented                          |
| packages preserve metadata, structure, topic boundaries, examples, links, didactic intent | MET with exceptions M4, m1, m2, m5                            |
| no untranslated English explanatory fallback remains                                      | **NOT MET** — M1 and M3                                       |
| shared gates plus independent German and Swedish review pass                              | gates MET; review passes **with the conditions in section 7** |

Phase 6 Bucket 2 (Learn English) should start only after R1–R5 land, so the
Learn English executors inherit corrected patterns rather than copied defects.

## 9. Lessons for the next two packages

1. Freeze titles in a glossary before translation. This worked and prevented
   cross-agent title drift. Extend it to **recurring heading labels** and
   **grammar terminology**, which are where drift actually occurred (M5, M6, m3).
2. A Swedish-in-Swedish package needs the self-gloss rule as a machine check,
   not a written instruction. It was written down and still missed 9 times.
3. Component **prop values** are visible text. Title props escaped both the
   prose review and the automated English check. Add them to the check.
4. Structural "improvements" a translator invents (M4) cost more than they
   return. A mirror changes meta language and nothing else.

## 10. Remediation log — R1 to R5 (2026-09-13)

All five required items are implemented. Canonical sources were not touched
(`git status --short -- src/content/docs/learn/` is empty). Gates after the fix:
`npm run quality` exit 0 (424 pages), `npm run build -- --base /jp-language-hub`
exit 0 (727 pages), `npm run report:length` exit 0 (14 over budget, all with an
exception row), `git diff --check` exit 0.

### R1 — BIFF mnemonic (blocker, closed)

`de/.../grammar/sentence-structure/biff.mdx` now reads:

```
Im **BI**satz steht **I**nte **F**öre (vor) dem **F**initen Verb.
```

The acronym survives, the Swedish cue word is restored, and the German gloss
makes the relation unambiguous for a reader who does not yet know `före`.

### R2 — English component titles (closed)

`sv/.../prepositions-function-words/dar-har-adverbs.mdx`:
`"Therefore, en huvudsats"` → `"Därför, en huvudsats"`,
`"Because, en bisats"` → `"Därför att, en bisats"`. A sweep of every component
`title` prop in the Swedish tree found no other English text.

### R3 — circular glosses and the English gloss (closed)

| File                                            | Change                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sv/.../nouns-articles/en-ett.mdx`              | The `Betydelse` column was removed from the core-rule table. A Swedish gloss of `en bil` can only be `en bil`, so the column carried no information in a Swedish-meta page. The same file already used this solution in its definite-form table. The German mirror keeps its `Bedeutung` column, because there the gloss is real information. |
| `sv/.../pronouns-roles/man-varandra-varsin.mdx` | `each, every` → `var och en för sig, inte som grupp`; `alla \| alla` → `samtliga`; `allt \| allt` → `alltsammans, hela mängden`; `när som helst` → `vilken tidpunkt som helst`; `hur som helst` → `på vilket sätt som helst, i alla fall`. The `som helst` table now follows one paraphrase pattern across all five rows.                     |
| `sv/.../pronouns-roles/reflexive-pronouns.mdx`  | `känna sig` → `må, uppleva sig vara (t.ex. glad, trött)`; `lära sig` → `tillägna sig en kunskap eller färdighet`; `gifta sig` → `ingå äktenskap`.                                                                                                                                                                                             |

The self-gloss detector now reports zero rows across the Swedish tree.

### R4 — one link syntax (closed)

**Decision: the mirror follows the canonical link syntax.** All 12 raw
`<a href="…"><Sv>…</Sv></a>` elements in `de/` and `sv/` `learning-path.mdx`
were converted back to markdown links with the canonical label text
(`[en / ett](../grammar/nouns-articles/en-ett/)`). Raw anchors remain only in
`important.mdx`, where the canonical file has one too, inside a JSX render
block.

**Secondary decision: extra `<Sv>` marking in mirror prose is allowed; removing
one is not.** After R4 the German mirror still carries six `<Sv>` spans the
canonical does not have (`inte`, `här`, `där`, twice each), because German
prose cites those Swedish words where the English source did not mark them.
Nothing is missing in either mirror. Marking a cited Swedish word is the point
of the component, so the `<Sv>`-count check is now a one-sided check: a mirror
may add spans, never drop them.

### R5 — German terminology (closed)

**Decision: `Satzadverbial` is the single German term**, in prose, headings,
descriptions and every `SentenceSchema` column literal. This replaced
`Satzadverb` (7 places), the untranslated Swedish `Satsadverbial` (2 column
literals) and the plural `Satzadverbien` (13 places across 6 further files,
declined as `Satzadverbiale` / `Satzadverbialen`). The canonical file keeps its
own mixed usage; that is recorded in section 6 as a canonical defect.

**Decision: `reflexives Possessivpronomen` is the single German term**,
replacing `Reflexivpossessiv` (3 places) and `Possessivum` (1 place). The tight
table cell in `man-varandra-varsin.mdx` uses the full term rather than an
abbreviation.

The German tree now greps clean for all four retired spellings.

### Side effect

Three rows in `docs/rules/content-didactics.md` were refreshed, because the
edits changed the recorded word counts: `de/learn/swedish/learning-path`
1116 → 1109, `sv/learn/swedish/learning-path` 1103 → 1096,
`sv/learn/swedish/grammar/nouns-articles/en-ett` 1111 → 1106.

## 11. R9 — the gloss validator (2026-09-13)

`scripts/validate-language-glosses.mjs`, wired into `npm run quality` as
`validate:language-glosses`. It fails the build on errors; warnings do not.

### Why a script and not a rule

Both defect classes were already written down in the Executor Contract and were
still violated eleven times. Neither is visible to a reviewer reading prose: one
lives in a table cell that is individually correct, the other in a component
prop. Nothing in this repository is hand-written, so there is no author whose
judgement can be relied on to notice — every tree is generated, and the clean
trees are clean because their task had no trap, not because anyone saw one.

### Check 1 — circular self-gloss

A marked target-language cell (`<Sv>x</Sv>` or `<span lang="…">x</span>`) whose
plain-text neighbour repeats the same text.

Severity is derived per page from frontmatter, never hardcoded:

| Condition                          | Severity | Reason                                                                             |
| ---------------------------------- | -------- | ---------------------------------------------------------------------------------- |
| `metaLanguage === grammarLanguage` | error    | An identical gloss cannot inform; the explanation language is the taught language. |
| `metaLanguage !== grammarLanguage` | warning  | Usually a real cognate (`<Sv>lunch</Sv> \| lunch`), occasionally a defect.         |

Three of the project's nine meta/learning combinations hit the error case:
`learn/english/` (en/en), `sv/learn/swedish/` (sv/sv) and the not-yet-written
`de/learn/german/` (de/de). The remaining six get the warning.

Two neighbouring cells that are _both_ marked are a paradigm table
(`hen`/`hen`, `sie`/`sie`), not a gloss, and are not flagged.

Allowlist: per file and text, two entries — the genuine cognates `under` and
`lunch` in the canonical Swedish tree.

### Check 2 — untranslated visible text in a mirror

Mirror-versus-canonical comparison, so it is language-agnostic and works for all
six mirror packages. It covers component props (`title`, `caption`, `label`,
`alt`, `columns` entries) and markdown table header rows, paired positionally.
Body cells are excluded deliberately: they carry target-language examples that
are identical by design, and comparing them would drown the output.

Byte-identity alone was not enough. The defect that actually shipped —
`title="Therefore, en huvudsats"` against a canonical
`title="Therefore, a main clause"` — was _half_ translated and passed a
byte-identity check silently. The rule is therefore a shared content token: any
alphabetic token of four or more characters appearing in both values.

Suppression, in order: first a general rule (ignore a token the canonical page
itself marks as target-language text), then a global cognate allowlist of 27
tokens such as `adverb`, `plural`, `position`, `satsadverbial`, `form`.

**Known blind spot:** a short mirror value whose every token is allowlisted is
missed — an untranslated header `Form` or `Rest` would pass. Multi-word values
almost always carry one non-cognate token, so the gap is narrow, and widening
the allowlist further would be the wrong trade.

### Proof of catch

Verified independently by reintroducing the two real historical defects, not
synthetic ones:

| Injected                                                          | Result                                              |
| ----------------------------------------------------------------- | --------------------------------------------------- |
| `\| <Sv>alla</Sv> \| alla \|` in `sv/.../man-varandra-varsin.mdx` | error, exit 1                                       |
| `title="Therefore, en huvudsats"` in `sv/.../dar-har-adverbs.mdx` | error `shares content token(s) [therefore]`, exit 1 |
| English header row in `de/.../en-ett.mdx`                         | 3 errors, exit 1                                    |

Clean tree: 0 errors, 0 warnings across 424 pages. `npm run quality` exit 0.

### Status of the remaining items

R6, R7 and R8 remain open. They are small and carry no wrong teaching content;
R8 in particular is editorial rather than mechanical, because a cited Swedish
form capitalized at the start of a German sentence needs the sentence rebuilt,
not the word lowercased.

## 12. R6 to R8 (2026-09-13)

All remaining review items are implemented. Canonical sources untouched; gates
after the fix: `quality` exit 0, base-path build exit 0 (727 pages),
`report:length` exit 0, `git diff --check` exit 0.

### R6 — restored content in `sv/.../dar-har-adverbs.mdx`

`därav` now reads `av det` instead of repeating `därför`'s gloss
`av den anledningen`, so the canonical distinction between "hence, from that"
and "therefore" survives. The missing standalone `<Sv>det</Sv>` reference and
its clause about the normal spoken choice are back. A section-by-section
comparison against the canonical found no further losses. The page moved from
612 to 623 words against a canonical 732.

### R7 — one heading, both trees

The drift was larger than the review first recorded, and it affected both
packages: 20 canonical `## Use this now` headings were rendered in four German
variants and three Swedish ones.

**Decision: `## Jetzt anwenden` in German, `## Använd detta nu` in Swedish** —
each the majority form and the closest reading of the canonical heading. Both
trees now show 20 of 20. Headings were changed only where the canonical file
carries `## Use this now` at the same position; near-misses such as
`## Die Jetzt-Perspektive` (canonical `## The now perspective`) and
`## Använd när som helst` (canonical `## Use at any stage`) were verified and
left alone.

`de/.../learning-path.mdx` also regained its 14 em dashes.

### R8 — cited Swedish forms restored

Every capitalized citation inside `<Sv>` is back to the canonical form, and in
each case the surrounding sentence was rebuilt rather than the word
lowercased — `<Sv>Till</Sv> steht, wenn …` became
`Die Präposition <Sv>till</Sv> steht, wenn …`. The same was done in Swedish
(`Prepositionen <Sv>på</Sv> är …`). Seven dropped trailing commas inside `<Sv>`
lists were restored, the typographic ellipsis in `de/.../sentence-patterns/index.mdx`
was put back, and the collapsed JSX block in `sv/.../important.mdx` was
re-expanded to the canonical formatting.

One side effect: rebuilding the German preposition sentences pushed
`de/.../prepositions-function-words/prepositions` to 1002 words. It received its
own row in the exceptions table, and seven mirror rows there were refreshed to
their current counts.

### Open consequence — a canonical defect now visible in both mirrors

Restoring byte-identity also restored two canonical defects into the mirrors:

```
<Sv>imperative + inte</Sv>        should be  imperativ + inte
<Sv>-er/-de or -te/-t</Sv>        should be  -er/-de eller -te/-t
```

Both put English inside a Swedish-text tag. All three trees are now
byte-identical here, which is consistent, but the content is wrong in every one
of them. Fixing it in the mirrors alone would re-create the divergence this
package just removed, so it belongs in the canonical — see section 6, item 1.
Decision pending with the plan owner.

## 13. Canonical corrections, approved (2026-09-13)

All three canonical defects from section 6 were corrected at the source, on the
plan owner's decision. The "record it and hand it back" rule assumes a separate
owner who will act later; Phase 5 is closed and nobody is going to pick these
up, so deferring them would have meant never fixing them.

None of the three touches a route, a navigation entry or a topic boundary, so
the frozen Phase 5 information architecture stays closed.

### 13.1 English words inside Swedish-text tags

A mirror-only fix would have recreated the canonical/mirror divergence this
package had just removed.

| Was                          | Now                             | Files                                |
| ---------------------------- | ------------------------------- | ------------------------------------ |
| `<Sv>-er/-de or -te/-t</Sv>` | `<Sv>-er/-de eller -te/-t</Sv>` | `verb-groups.mdx` in all three trees |
| `<Sv>imperative + inte</Sv>` | `<Sv>imperativ + inte</Sv>`     | `imperative.mdx` in all three trees  |

This touches no route, no navigation entry and no topic boundary, so it does not
reopen the frozen Phase 5 information architecture. All three trees stay
byte-identical inside these tags.

A sweep for English words inside every `<Sv>` span across the whole content
directory found no further cases; the remaining matches are genuine Swedish
(endings such as `-a`, `-or`, `-are`, vowel lists, and the false friend
`en present`).

### 13.2 The `SentenceSchema` sentence-adverb slot

The canonical tree labelled the same slot two ways: the Swedish term
`'Satsadverbial'` in the four `sentence-structure` pages, and the English
`'Sentence adverb'` in the five others.

**Decision: `'Sentence adverb'` in the English canonical**, because the
canonical's own prose says "sentence adverb" throughout. Each meta language now
uses its own term for the slot: English `Sentence adverb`, German
`Satzadverbial`, Swedish `Satsadverbial`. Four canonical files changed; the
mirrors already read consistently after R5 and needed no edit.

### 13.3 The `en / ett` cross-link label

The drift was wider than the review first recorded. The canonical used four
label shapes for one route — `en / ett` (6), `en and ett` (5), `en or ett` (4),
`en/ett` (1) — and both mirrors had faithfully reproduced the split in their own
languages (`en und ett` / `en oder ett`, `en och ett` / `en eller ett`).

**Decision: `en / ett` everywhere, in all three trees.** These are Swedish word
forms, not a phrase to translate, and a cross-link label names its target rather
than forming a sentence. All three trees now show 16 of 16.

English prose that reads "choose en or ett for one" was deliberately left alone.
It is a sentence, not a label.
