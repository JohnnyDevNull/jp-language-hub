# Phase 5: Finalize Swedish — Implementation Report

This file is the durable execution record for the Swedish part of Phase 5. It
records implementation evidence and Swedish-specific decisions; it does not
redefine the frozen information architecture. English execution is tracked in
[`roadmap-phase-5-finalize-english-implementation-report.md`](./roadmap-phase-5-finalize-english-implementation-report.md).

## Current State

**Last updated:** 2026-09-12

**Overall status:** Complete — Swedish Batches 1 through 6 and the independent
Swedish completion review passed. Phase 5 continues with English.

**Completion commits:** `4dc1aab` (`feat(content): finalize Swedish phase 5
reference tree`) and `358516b` (`docs: record Swedish phase 5 completion`).

## Historical Execution Baseline

**Implementation starting point:** Commit `c96aa42` (`docs: split phase 5
grammar execution plans`) on `main`, plus uncommitted status-only changes in
these eight files:

- `docs/roadmap-phase-5-align-grammar-ia.md`
- `docs/roadmap-phase-5-finalize-english.md`
- `docs/roadmap-phase-5-finalize-german.md`
- `docs/roadmap-phase-5-finalize-swedish.md`
- `docs/roadmap-phase-5-navigation-blueprint.md`
- `docs/roadmap-phase-5-quality-check.md`
- `docs/roadmap-phase-5-topic-inventory.md`
- `docs/roadmap.md`

Those pending edits originally marked the planning baseline and inventory as
frozen and Swedish as ready. Immediately before implementation began,
`npm run quality` and `git diff --check` were reported as passing for those
status-only edits.

**S1 closure worktree snapshot (historical):** 40 `git status --short` entries
represent 43 actual paths: the eight status-only planning files above, this
report, and 34 Swedish S1 implementation paths. Git collapses the four new files under
`questions-negation/` into one untracked-directory entry. At that snapshot, no
Phase 5 implementation change had been committed after `c96aa42`. The
subsequent S2 hand-off is recorded below; later hand-offs, including S3, are
recorded in the timeline below.

## Frozen Sources of Truth

Apply these documents by responsibility:

1. [`roadmap-phase-5-align-grammar-ia.md`](./roadmap-phase-5-align-grammar-ia.md)
   owns Phase 5 scope, order, gates, localized-mirror policy, and Definition of
   Done.
2. [`roadmap-phase-5-navigation-blueprint.md`](./roadmap-phase-5-navigation-blueprint.md)
   owns the approved Phase-5-visible shelves, target routes, and page order.
3. [`roadmap-phase-5-topic-inventory.md`](./roadmap-phase-5-topic-inventory.md)
   owns page scope, current-to-target mappings, actions, priorities, totals,
   and A1-B2 can-do dispositions.
4. The Swedish, English, and German finalization plans own their language
   boundaries, batch order, migrations, and local acceptance criteria.
5. [`roadmap-phase-5-quality-check.md`](./roadmap-phase-5-quality-check.md) owns
   the final independent cross-language gate.
6. `docs/rules/` remains authoritative for engineering, architecture,
   metadata, and didactics; `docs/app/` describes the current implemented
   system.

### Change policy

- Do not reinterpret, extend, or optimize the frozen IA during execution.
- Change the Blueprint or Inventory only to correct a verified contradiction
  or to record an explicitly approved scope decision. Record the reason in the
  decision log and revalidate every affected plan.
- Classify implementation findings as language-specific defects, shared-system
  defects, baseline contradictions, or later enhancements. Do not silently
  turn a finding into a new route, shelf, split, merge, or topic.
- Keep migrations atomic across canonical files, sidebar configuration,
  overviews, page-body links, absolute `related` routes, authored localized
  mirrors, documentation, tests, scripts, fixtures, and length exceptions.
- A batch closes only after implementation, independent review, required
  validation, and explicit follow-up resolution are recorded below.

## Swedish Decision Log

The frozen coordination plan, Blueprint, Topic Inventory, and Swedish
finalization plan own the shared Phase 5 decisions. This log records only
Swedish implementation decisions that changed execution scheduling without
changing the approved IA.

| ID | Approved decision | Execution consequence |
| --- | --- | --- |
| S-D01 | To preserve an atomic, coherently labelled sidebar when S2 removes pronouns from `pronouns-function-words`, S2 also advances the already-approved Prepositions & Function Words overview and the approved moves of `prepositions` and `dar-har-adverbs` from S4. This changes scheduling only, not IA, routes, or scope. | Avoid a temporary mislabelled shelf, the old mixed taxonomy, a target shelf without an overview, and later repair of an intentionally incomplete migration. `Connectors` and the content-finalization audit remain in S4. |

## Swedish Batch Ledger

Status values: `in progress`, `dependency-blocked`, `review`, `complete`, or
`blocked`. Replace placeholders with exact changed paths and evidence before a
batch can be marked complete.

| Order | Batch | Status | Changed files | Evidence and review | Required follow-up |
| ---: | --- | --- | --- | --- | --- |
| 1 | Swedish S1 — Sentence Structure, Questions, and Negation | **complete** | 34 implementation paths; see S1 snapshot below | All 11 routes implemented; four blocker groups and one P2 mirror-prose finding fixed; independent re-review PASS; gates pass | None |
| 2 | Swedish S2 — Nouns, Articles, Pronouns, and Roles | **complete** | Six new pages, eight moved source pages, retained-page fixes, and all route consumers | All 17 targets implemented; review chain resolved; independent final PASS; gates pass | None |
| 3 | Swedish S3 — Time Forms, Verb Patterns, Voice, and Mood | **complete** | Eight moved pages, nine new pages, and all route consumers across three shelves | All 17 targets implemented atomically; independent GPT-5.5 medium re-review PASS; gates pass | None |
| 4 | Swedish S4 — Adjectives, Prepositions, Connectors, and Numbers | **complete** | Post-S-D01 S4 scope, Numbers move, route consumers, and length records | Independent review PASS; seven findings resolved; final S4 gates pass | None |
| 5 | Swedish S5 — Cross-Tree Integration and Common Mistakes | **complete** | Entry paths, practical content, shared consumers, mirrors, and documentation; see S5 completion review | Independent review and targeted correction recheck PASS; seven findings resolved; gates pass | None |
| 6 | Swedish S6 — Swedish Completion Review | **complete** | Final report and length-exception correction only | All 55 targets reconciled; Architecture PASS and Linguistic/Didactic PASS recorded; final gates pass | None |
The Swedish execution wave closed after S6. Continue Phase 5 through the
separate English implementation report.

## Swedish S1 Review Snapshot

The implemented S1 surface contains all 11 approved target routes:

- Sentence Structure: overview, Basic Word Order, V2, Inversion, BIFF,
  Subordinate Clauses, and Inte Placement.
- Questions & Negation: overview, Questions, Question Words, and Negation.

Five pages are new: both shelf overviews, Subordinate Clauses, Questions, and
Negation. Question Words moved and was renamed from
`/learn/swedish/grammar/pronouns-function-words/interrogatives/` to
`/learn/swedish/grammar/questions-negation/question-words/`; the old canonical
source is deleted.

### Localized-mirror dispositions

- Basic Word Order: canonical, German-meta, and Swedish-meta pages were
  retranslated to preserve didactic equivalence after the canonical teaching
  changes.
- Learning Path and Introducing Yourself: canonical, German-meta, and
  Swedish-meta pages received route-only changes and remain didactically
  equivalent.
- The five new pages and moved Question Words page have no authored German- or
  Swedish-meta mirror and deliberately use canonical fallback.
- No other authored localized mirror is affected by S1.

### Changed implementation paths

- Navigation and labels: `astro.config.mjs`, `src/lib/ui-labels.ts`.
- Eleven target pages: the seven files represented by the Sentence Structure
  routes above and the four files under
  `src/content/docs/learn/swedish/grammar/questions-negation/`.
- Retired source:
  `src/content/docs/learn/swedish/grammar/pronouns-function-words/interrogatives.mdx`.
- Canonical consumers: Grammar overview; Question Words and Relative Pronouns
  cheat sheets; From English common mistakes; Adverbs; Där- and Här-Adverbs;
  Learning Path; and the seven sentence-pattern pages Asking for Directions,
  Introducing Yourself, Keeping a Conversation Going, Polite Requests,
  Shopping and Paying, Small Talk, and Travel and Transport.
- Authored mirrors: German-meta and Swedish-meta versions of Basic Word Order,
  Learning Path, and Introducing Yourself.

All known canonical, localized, navigation, label, metadata, and body-link
consumers were updated. The retired route remains only as the historical
current route in the frozen Topic Inventory and as a source-file record in the
completed Phase 1 plan; both occurrences are intentional history.

### S1 gate evidence

- Post-fix `npm run quality`: pass; 188 documentation pages validated with 0
  errors, warnings, or hints.
- `npm run build -- --base /jp-language-hub`: pass; 535 pages built.
- `npm run report:length`: pass; only the five pre-existing documented
  exceptions remain over budget.
- Post-fix `git diff --check`: pass.
- Generated-output scan: no base-less internal `href` found.
- Wide and narrow rendered visual inspection is unavailable because the runner
  cannot bind a preview server or open the generated local files. The
  independent reviewer accepted the residual risk as low because S1 changes no
  CSS or components.

### Independent review and resolved findings

The independent reviewer rechecked the exact corrected lines and returned
PASS after these four blocking groups were resolved:

1. **Question Words boundary:** `vem`/`vad` plus `som` is limited to indirect
   subject questions; the incorrect foreign `att`-to-`om` yes/no example was
   removed.
2. **Semantic consumers:** From English now sends do-support to Questions,
   negative-expression choice to Negation, and `inte` position to Inte
   Placement; Polite Requests points to Questions; the Question Words cheat
   sheet includes Questions in its related and full-reference paths.
3. **V2 KeyTakeaway:** the subject follows the finite verb only when a
   non-subject fills position one.
4. **Cheat-sheet absolutes:** `vilken` is scoped to the listed core forms;
   `var`/`vart` is presented as the standard-language reference while noting
   informal directional `var`.

The P2 mirror-prose finding was also fixed in the German- and Swedish-meta
Basic Word Order pages, including the idiomatic formulations `markiert das
Tempus` and `markerar tempus`.

## Swedish S2 Review Snapshot

The executor implemented all 17 targets: five Nouns & Articles routes, nine
Pronouns & Roles routes, and S-D01's three approved Prepositions & Function Words
targets. The file actions comprise six new pages, eight moved source pages,
and three retained pages. The old `pronouns-function-words` source and built
route are absent.

The hand-off includes the new overview decision paths and focused Possession,
Personal Pronouns, and Reflexive Pronouns coverage; preserves the boundaries
among nominal possession, possessive pronouns, and `sin`/`sitt`/`sina`; scopes
the productive-compound rule on En and Ett instead of presenting it as
exceptionless; reconciles Noun Forms and all moved-topic links; and corrects
From German so it distinguishes the absence of a German-style productive case
system from Swedish s-genitive and personal-pronoun role forms.

S-D01 is complete as a route migration only: the Prepositions & Function Words
overview exists and Prepositions plus Där-/Här-Adverbs have moved. Their full
content-finalization audit and the new Connectors page remain owned by S4.

No S2 target has an authored localized mirror. German- and Swedish-meta
Learning Path and Introducing Yourself pages received route-only consumer
updates and remain didactically equivalent.

S2 gate evidence:

- `npm run quality`: pass; 194 documentation pages validated with 0 errors,
  warnings, or hints.
- `npm run build -- --base /jp-language-hub`: pass; 553 pages built.
- `npm run report:length`: pass; only the five existing documented exceptions
  remain, with the Prepositions exception updated to its new route.
- `git diff --check` and the generated base-path `href` scan: pass.
- Retired S2 routes remain only in frozen or historical planning records and
  this implementation report.
- Representative generated structure checks pass. S2 changes no CSS or
  components, so the unavailable interactive visual pass carries low residual
  risk.

The independent review chain is resolved: Personal Pronouns now includes
`hen`/`hens` and qualifies formal `ni`; Man, Varandra, Var Sin distinguishes
`ens` from `sin` and gives `varandra` its full sentence-role range; the fast
decision path for Någon, Något, Ingen, Inget includes plural `några` and
`inga`; and the final review added a fourth production-focused QuickCheck.
Independent final review returned PASS.

## Swedish S3 Review Snapshot

The frozen Blueprint, Inventory, and Swedish plan are consistent for S3. The
batch owns 17 targets across **Verbs & Time Forms**, **Verb Patterns & Voice**,
and **Mood, Politeness & Reports**: eight moves and nine creations, comprising
10 P0 and seven P1 targets.

Atomic migration already follows from the frozen batch rules: prepare all
content first, then move all eight old verb pages and switch the sidebar and
every consumer in one integration unit. Do not expose or hand off a P0-only
intermediate tree.

Preserve these boundaries:

- Choosing time form is the decision hub; individual form pages own formation
  and their central uses.
- Modal Verbs owns the practical choice between a bare infinitive and an
  infinitive with `att`.
- Passive owns formation; Active vs Passive owns communicative choice.
- Conditionals owns the grammar system; the existing Conditions and
  Consequences sentence-pattern route remains a production entry path.
- Reported Speech stays a practical B2 reference, not an academic survey.

The executor resolved the preparatory content defects:

- Particle Verbs now uses a coherent `passa på` example and no longer contrasts
  unrelated `tala om` and `tilltala` forms.
- Verb Forms qualifies the practical five-form model, and Verb Groups no
  longer claims that the infinitive determines the group absolutely.
- Tense Perspectives presents the main future choices without overprivileging
  `ska`.
- Passive qualifies its formation and single-event guidance; Active vs
  Passive owns communicative choice.
- Conditions and Consequences no longer duplicates the Conditionals grammar
  page or makes an absolute no-`unless` claim.
- Learning Path now includes the passive supine in canonical, German-meta, and
  Swedish-meta versions.

The implementation atomically moved eight old Verb pages and created nine
pages across Verbs & Time Forms, Verb Patterns & Voice, and Mood, Politeness &
Reports. The old `grammar/verbs` source tree and its root, German-meta, and
Swedish-meta built routes are absent.

Sidebar configuration, UI labels, Grammar overview, canonical and localized
entry paths, Sentence Patterns, Cheat Sheets, Common Mistakes, shared
consumers, current documentation, and the length-exception route were updated
as applicable. No S3 target has an authored localized mirror. Learning Path in
English, German, and Swedish was updated or retranslated for the teaching
change; root/landing consumers and Introducing Yourself received route-only
updates and remain didactically equivalent.

S3 gate evidence:

- `npm run quality`: pass; 203 documentation pages validated with 0 errors,
  warnings, or hints.
- Latest revalidation `npm run quality`: pass; 203 documentation pages
  validated with 0 errors, warnings, or hints.
- `npm run build -- --base /jp-language-hub`: pass; 580 pages built.
- `npm run report:length`: 203 pages measured with exactly five documented
  exceptions, including Particle Verbs at 1480 words and Learning Path at 1085
  words.
- `git diff --check` and the generated base-path `href` scan: pass. Latest
  `git diff --check` revalidation also passes.
- An intermediate build failed because new `SentenceSchema` calls used invalid
  props. The implementation corrected them to the supported `columns` and
  `caption` API; the final quality and build gates are green.
- Interactive wide/narrow inspection remains unavailable. Residual risk is low
  because S3 changes no CSS or components.

Independent GPT-5.5 medium re-review returned PASS after confirming these
five findings were resolved:

1. Future Forms now distinguishes bare-infinitive modal behavior from
   `att`-infinitive patterns.
2. Conditionals now treats `om ... skulle` as grammatical but marked or
   tentative, while the neutral default remains unmarked.
3. Reported Speech keeps the QC prompt in a context that matches the taught
   reporting pattern.
4. Preterite now qualifies group 4 and irregular behavior instead of implying
   a fully regular pattern.
5. The Verbs & Time Forms overview wraps Swedish examples with `<Sv>` where
   required.

S3 is complete. S4 may proceed.

## Swedish S4 Review and Closure

After S-D01, S4's implementation scope was precise:

- create and audit the Adjectives & Adverbs overview while auditing Agreement,
  Adjective Comparison, and Adverbs;
- final-audit the Prepositions & Function Words overview, Prepositions, and
  Där-/Här-Adverbs already created or moved in S2, then create Connectors; and
- atomically move Numbers from Grammar to Vocabulary and remove the obsolete
  Numerals group and label.

Preserve the approved boundaries. Agreement owns adjective inflection and
double definiteness; Adjective Comparison owns degrees of comparison; Adverbs
owns adverb formation and use. Prepositions owns practical place, direction,
time, and fixed-phrase choices; Där-/Här-Adverbs owns its focused pronominal
forms; Connectors is a functional choice page and links clause-order effects to
Sentence Structure. Numbers is a Vocabulary lookup after the move, not a new
grammar home.

Preparatory defects resolved or verified during implementation:

- Adverbs contains absolute formation claims and an overgeneralized order.
- Prepositions contains an ambiguous example, presents a best guess too
  strongly, overstates preposition stranding and `inte` placement, and needs
  its V2 scope made explicit.
- Där-/Här-Adverbs needs its title, ordering, BIFF label, and the
  `därför att` claim checked against the approved boundary.
- Numbers needs its section order and compound-number claim corrected.
- Agreement needs its links reconciled while preserving its frozen documented
  length exception.

S-D01 verification included the overview and both moved routes, every
consumer, and the documented length-exception route for Prepositions, updated
from `grammar/pronouns-function-words/prepositions` to
`grammar/prepositions-function-words/prepositions`.

Numbers consumers comprise the sidebar and UI label, Grammar overview,
canonical Learning Path, Numbers cheat sheet, Shopping and Money, and Telling
Time. The canonical Numbers target has no authored localized mirror. The
German- and Swedish-meta Learning Path pages are route-only consumers and
remain didactically equivalent after their link update.

S4 implementation is complete. It closed the post-S-D01 scope by finalizing the
Adjectives & Adverbs and Prepositions & Function Words surfaces, creating the
remaining Connectors coverage, moving Numbers from Grammar to Vocabulary, and
removing the obsolete Numerals grammar home. Numbers is now treated as a
Vocabulary lookup, not as a domain page or a new grammar shelf.

S4 localized-mirror disposition: no S4 target has an authored localized mirror.
German- and Swedish-meta Learning Path pages were route-only consumers and
remain didactically equivalent after the Numbers route update.

S4 gate evidence:

- `npm run quality`: pass; 205 documentation pages validated with 0 errors,
  warnings, or hints.
- `npm run build -- --base /jp-language-hub`: pass; 586 pages built.
- `npm run report:length`: pass; exactly five documented exceptions remain:
  Particle Verbs 1480, Agreement 1306, Prepositions 1172, En and Ett 1204,
  and Learning Path 1084. Numbers measured 968 words and is not a documented
  exception.
- `git diff --check`, the generated base-path `href` scan, and old-route
  repository/build checks pass.

Independent review returned PASS after confirming these seven findings were
resolved:

1. Numbers now explains the compound-cardinal one convention without making it
   an overbroad absolute.
2. Numbers now covers ordinals in the lookup flow.
3. The Prepositions example no longer relies on the ambiguous wording flagged
   during review.
4. The Adjectives & Adverbs overview wraps Swedish examples with `<Sv>` where
   required.
5. The Adverbs page follows the expected component order.
6. Numbers is framed as a Vocabulary lookup, not as a domain page.
7. The Learning Path documented length exception now records 1084 words.

S4 is complete. S5 may proceed.

## Swedish S5 Preparatory Review

S5 is an integration and editorial batch only. It creates no route or shelf
and performs no move or merge. Any stale route originating in S1-S4 returns to
its owning batch rather than being normalized silently in S5.

The review surface is Learning Path plus its German- and Swedish-meta mirrors;
the generated Important page; 14 Sentence Patterns; eight Vocabulary pages,
including Numbers; Pronunciation Basics; 10 Cheat Sheets; all three Common
Mistakes pages; the Swedish landing page, root and meta-language homes, shared
consumers, and current-state documentation; and cross-links from the completed
Grammar tree into those practical entry paths.

Preserve these boundaries:

- Learning Path and Important organize entry and progression; they do not
  become competing grammar summaries.
- Sentence Patterns and Vocabulary answer “what can I say?” and link formation
  or position claims to the canonical grammar page.
- Cheat Sheets remain compact lookup aids and do not inherit or duplicate a
  full canonical explanation.
- Common Mistakes diagnoses transfer and points to the most specific canonical
  repair page instead of reteaching the rule.
- Shared and meta-language homes preserve the separation of meta, learning,
  and comparison language.

Known defects to resolve or verify during S5:

- Learning Path overstates its complete-map/every-page claim and will likely
  require a B2/content update plus corresponding German- and Swedish-meta
  update or retranslation.
- Important uses misleading earliest-level wording.
- Vocabulary presents plural formation too deterministically.
- Pronunciation Basics makes an absolute consonant-doubling claim.
- Cheat Sheets inherit S3 defects and need qualification around relative
  preposition usage.
- From German incorrectly presents `eftersom jag idag inte arbetar` as an
  error.
- From English contains vocabulary and adjective absolutes, and its
  preposition table needs a clearly limited scope.

Expected localized-mirror handling follows the Phase 5 mirror rule. Learning
Path's authored German- and Swedish-meta pages must be updated or retranslated
if the canonical progression or B2 guidance changes. Authored mirrors touched
only by route changes may remain equivalent after explicit comparison; pages
without authored mirrors continue to use canonical fallback. S5 does not
create a broader translation package. The completed state and evidence are
recorded below.

## Swedish S5 Completion Review

S5 completed its integration and editorial pass without adding a route, shelf,
move, merge, or other IA decision. The changed surface comprises the canonical,
German-meta, and Swedish-meta Learning Path and home entry points; Important;
the canonical and authored localized Sentence Patterns overviews plus affected
pattern pages; Vocabulary and Pronunciation Basics; the reviewed Cheat Sheets;
both Swedish Common Mistakes detail pages; shared Practice and Direct
Translation Errors; and the supporting current-state and didactic records.

Localized-mirror dispositions:

- **Learning Path — retranslate:** the German- and Swedish-meta pages were
  retranslated with the canonical progression and remain didactically
  equivalent. All three versions contain 58 consecutive steps and the same 67
  link targets.
- **Sentence Patterns overview — update:** the German- and Swedish-meta pages
  were updated with the canonical construction boundaries and remain
  didactically equivalent.
- German- and Swedish-meta home pages now describe the Learning Path as a
  curated ordered route rather than promising every page.
- **Introducing Yourself and Basic Word Order — still equivalent:** the
  localized pages remain equivalent after their earlier Phase 5 updates. Other
  reviewed S5 pages have no authored localized mirror and continue to use
  canonical fallback.

Independent review and the targeted correction recheck returned PASS after
these seven findings were resolved:

1. Root-, German-meta-, and Swedish-meta home pages now describe a curated
   ordered Learning Path instead of promising a complete every-page route.
2. Reasons and Examples limits its case comparison to the concrete example:
   Swedish uses no dative form there, rather than making a global no-case claim.
3. The canonical, German-meta, and Swedish-meta Sentence Patterns overviews use
   the accurate fixed-preposition-plus-complement formulation.
4. German- and Swedish-meta Learning Path terminology is idiomatic and
   learner-oriented, including bare infinitive without `att`,
   hypothetical/tentative conditions, reported speech, and the explanation of
   the form system.
5. The En/Ett and Adjective Endings cheat sheet qualifies the productive
   compound rule and no longer presents it as exceptionless.
6. Practice limits its QuickCheck claim to productive detail pages generally
   and preserves the separate rules for overviews, indexes, and cheat sheets.
7. Direct Translation Errors explains that `jo` contradicts a negative
   proposition while `nej` confirms it, without an absolute ban on `ja`.

S5 final evidence:

- `npm run quality`: pass; 205 documentation pages validated with 0 errors,
  warnings, or hints.
- `npm run build -- --base /jp-language-hub`: pass; 586 pages built.
- `npm run report:length`: pass; exactly seven documented exceptions remain:
  Particle Verbs 1480, Agreement 1306, canonical Learning Path 1220, En and Ett
  1204, Prepositions 1172, German-meta Learning Path 1117, and Swedish-meta
  Learning Path 1101.
- `git diff --check`, the retired-route repository scan, and the generated
  base-path `href` scan pass.
- The three Learning Path versions have 58 consecutive steps and 67 identical
  link targets.

S5 is complete with no unresolved blocker. S6 may proceed. English remains
implementation-blocked, and this execution wave stops after S6.

## Swedish S6 Preparatory Review

S6 reconciles all 55 frozen Swedish targets and their approved actions: 15
`keep`, 22 `create`, 17 `move`, and one `move, rename`. Its review matrix covers
the filesystem and built routes, exact sidebar order, Inventory actions and
priorities, every canonical target page, Grammar and outer-tree consumers,
retired routes, metadata and links, affected localized mirrors and their
dispositions, current documentation, and length exceptions.

Recheck the principal ownership boundaries as pairs: Basic Word Order versus
V2 versus Inversion; Subordinate Clauses versus BIFF; Negation versus Inte
Placement; Questions versus Question Words; Negation versus
`någon`/`något`/`ingen`/`inget`; nominal Possession versus Possessive Pronouns
versus `sin`/`sitt`/`sina`; Verbs & Time Forms versus Verb Patterns & Voice;
Passive formation versus Active-vs-Passive choice; Conditionals grammar versus
Conditions and Consequences production; Connectors versus clause-order pages;
and canonical Grammar versus Sentence Patterns and Vocabulary.

Cross-cutting risks requiring explicit evidence are semantically wrong but
valid links, broken or stale fragments, mirrored stale teaching claims,
`SentenceSchema` mismatches, self-related pages, sidebar or Inventory count
drift, and narrow-screen table usability that automated checks cannot prove.

Targeted automation should:

1. parse all 55 Inventory rows and reproduce the action counts and unique
   targets from the implemented filesystem;
2. compare the Swedish sidebar with the Blueprint line by line;
3. prove every created or retained target exists and every retired route is
   absent outside intentional frozen history;
4. validate relative body/component links, absolute canonical `related`
   routes, fragments, self-links, and generated base-path `href` values;
5. compare canonical and authored-mirror structural metadata and verify every
   affected-mirror disposition;
6. inspect position-rule pages for the required schemas and reconcile all
   over-budget pages with the frozen exception table; and
7. run `npm run quality`, the base-path build, the length report, and `git diff
   --check` before handing Swedish to the cross-language Quality Check.

At S5 closure, S6 began with this review scope. The final review also had to
record manual narrow-layout evidence for tables or explicitly classify any
remaining runner limitation.

## Swedish S6 Completion Review

S6 is complete. The completed Swedish plan reconciles all 55 frozen Swedish
targets and their approved action counts exactly: 15 `keep`, 22 `create`, 17
`move`, and one `move, rename`. Every target has one canonical source, and all
165 generated root/de/sv target outputs exist after the final base-path build.
The 18 moved or renamed old source routes are absent from source and generated
output, except for intentional historical mentions in frozen plans and this
implementation report.

Architecture review returned PASS: the Swedish sidebar matches the frozen
Blueprint order, Numbers is under Vocabulary, Common Mistakes remains outside
Grammar, no old built routes remain, and the generated output contains no
base-less internal `href`. The final structure keeps the meta-language,
learning-language, and comparison-language layers separate.

The linguistic and didactic review returned PASS: the ownership boundaries
listed in the S6 preparatory review are satisfied, the practical entry paths
point back to canonical grammar instead of duplicating it, affected authored
mirrors remain didactically equivalent, and the documented length exceptions
match the current length report exactly.

Final S6 gate evidence:

- `npm run quality`: pass; 205 documentation pages validated with 0 errors,
  warnings, or hints.
- `npm run build -- --base /jp-language-hub`: pass; 586 pages built.
- `npm run report:length`: pass; 205 pages measured with exactly seven
  documented exceptions: Particle Verbs 1480, Agreement 1306, canonical
  Learning Path 1220, En and Ett 1219, Prepositions 1172, German-meta Learning
  Path 1117, and Swedish-meta Learning Path 1101.
- `git diff --check`: pass.
- Inventory and route reconciliation: 55 rows, 55 unique targets, 15 keep, 22
  create, 17 move, one move-rename, 0 missing source targets, and 0 retired
  old source files still present.
- Built-route reconciliation: 165 expected root/de/sv target outputs, 0 missing
  built outputs, 18 retired old routes, and 0 old built outputs still present.
- Generated base-path link scan: no base-less internal `href` found.

Wide and narrow interactive visual inspection remains unavailable in the
runner. The accepted limitation is low risk for S6 because no CSS or component
changes were made during the final gate; generated structure, route output, and
link behavior were inspected instead.

Swedish has no unresolved blocker. This execution record is closed.

## Unresolved Blockers and Risks

- No baseline contradiction is known at implementation start.
- Swedish S1 has no unresolved blocker. Its independent review passed after all
  four blocker groups and the P2 mirror-prose finding were corrected.
- Swedish S2 has no unresolved blocker. Its independent final review passed
  after the complete correction chain recorded above.
- Swedish S3 has no unresolved blocker. Its independent GPT-5.5 medium
  re-review passed after the five findings recorded above were corrected.
- Swedish S4 has no unresolved blocker. Its independent review passed after
  the seven findings recorded above were corrected.
- Swedish S5 has no unresolved blocker. Its independent review and targeted
  correction recheck passed after the seven findings recorded above were
  corrected.
- Swedish S6 has no unresolved blocker. Its 55-target reconciliation matrix,
  Architecture PASS, Linguistic/Didactic PASS, and final gates are recorded
  above.
- Wide and narrow interactive visual inspection remains unavailable in the
  current runner. This limitation is accepted as low risk because the final S6
  gate changes no CSS or components and generated structure was inspected.

## Correction Instructions

This report is closed historical evidence. If a verified Swedish defect or
baseline contradiction requires a correction, record the reason, affected
files, independent review, and validation evidence here without reopening the
completed batch ledger. Continue normal Phase 5 execution in the report owned
by the active language.

## Final Validation Ledger

Use ISO dates and retain failed attempts as evidence.

| Gate | Status | Date | Evidence or findings |
| --- | --- | --- | --- |
| `npm run quality` | Swedish final pass | 2026-09-12 | 205 documentation pages; 0 errors, warnings, or hints |
| `npm run build -- --base /jp-language-hub` | Swedish final pass | 2026-09-12 | 586 pages built |
| `npm run report:length` | Swedish final pass | 2026-09-12 | Exactly seven documented exceptions: Particle Verbs 1480, Agreement 1306, canonical Learning Path 1220, En and Ett 1219, Prepositions 1172, German-meta Learning Path 1117, Swedish-meta Learning Path 1101 |
| `git diff --check` | Swedish final pass | 2026-09-12 | No whitespace errors |
| Inventory totals and unique targets | Swedish final pass | 2026-09-12 | 55 rows, 55 unique targets, 15 keep, 22 create, 17 move, one move-rename |
| Retired-route repository search | Swedish final pass | 2026-09-12 | 18 moved or renamed old source routes; 0 old source files and 0 old built outputs still present outside intentional history |
| Blueprint/sidebar order | Swedish final pass | 2026-09-12 | Sidebar matches Blueprint order; Numbers is in Vocabulary and Common Mistakes is outside Grammar |
| Swedish Architecture review | PASS | 2026-09-12 | Target source, sidebar, built routes, old routes, generated links, and language-layer boundaries reconciled |
| Swedish Linguistic/Didactic review | PASS | 2026-09-12 | Boundary pairs, canonical ownership, practical entry paths, affected mirrors, and length exceptions reconciled |
| Affected localized mirrors | Swedish final pass | 2026-09-12 | Learning Path and Sentence Patterns mirrors are didactically equivalent; all three Learning Paths have 58 steps and 67 identical link targets |
| Generated base-path links | Swedish final pass | 2026-09-12 | No base-less internal `href` found in generated output |

## Baseline Contradictions and Additional Decisions

None recorded at implementation start.
