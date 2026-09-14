# Phase 6: Align Sentence-Schema Terminology

## Status and Dependencies

**Status:** Planned; unblocked; implementation has not started.

**Dependencies:** The Learn Swedish meta-language package is complete. This step
sits between that bucket and the Learn English bucket, and both the Learn
English and Learn German buckets wait for it.

The ordering is the point. The English and German trees exist in the root locale
only, and Phase 6 is about to copy each canonical page into two more meta
languages. Every schema defect left in a canonical page is copied three times
instead of once. Fixing the sources first makes the remaining buckets
mechanical; fixing them afterwards triples the work.

## Goal

Bring every `SentenceSchema` in the repository in line with the terminology rule
in [Content Didactics](./rules/content-didactics.md), and add a check that keeps
the column labels identical across meta locales.

## The Rule

[Content Didactics](./rules/content-didactics.md) owns the rule and stays
authoritative. In short: the `columns` labels carry the learning language's own
grammar terminology, identical in every meta locale; everything around them —
`caption`, `rowHeader`, row `label` — is translated per locale; a comparison row
fills the learning language's fields and never receives columns of its own.

## Owned Surface

Every `SentenceSchema` usage, in three learning trees:

| Tree | Locales | Schemas |
| --- | --- | --- |
| Learn Swedish | `en`, `de`, `sv` | 14 per locale, 42 total |
| Learn English | `en` only | 9 |
| Learn German | `en` only | 12 |

Also owned: the terminology ledger, and the new validator plus its wiring into
`npm run quality`.

Not owned: page prose, examples, routes, navigation, frontmatter, and the
`de`/`sv` mirrors of Learn English and Learn German, which do not exist yet.

## T1. Terminology Review and Ledger

The validator from T5 already exists and generates the ledger:

```
npm run validate:schema-terminology -- --ledger
```

It writes [the ledger](./roadmap-phase-6-schema-terminology-ledger.md) with one
row per finding. The first run scanned 63 schema instances and reported 264
findings, 28 of them locale divergences — that is every single Swedish mirror
schema.

What T1 still owes is human: one agreed target vocabulary per learning tree.
The validator currently holds a placeholder list covering the six core Swedish
field names, so it over-reports. Not every `SentenceSchema` is a satsschema;
the conditional and reported-speech pages use clause-level tables whose labels
(`huvudsats`, `bisats`, `frågeord`, `länkord`) are legitimate and simply missing
from the list. Agreeing the vocabularies closes that gap and turns the finding
count into the real worklist.

Defect classes observed so far:

- **translated field name** — the label changes with the meta locale
  (`Finite verb` / `Finites Verb` / `Finit verb`).
- **invented field name** — the label belongs to no published model (`Rest`,
  `Opening`, `1 First field`).
- **merged field** — one column carries two fields of the model, as `Rest` does
  for object and adverbial.
- **wrong model language** — the structure is right, the names are borrowed from
  another language, as on the German pages.
- **two names for one field** — the same tree names a field twice over.
  Learn Swedish carries both `Fundament` and `Första fält`; Learn German carries
  both `Middle` and `Middle field`. This one is independent of the locale.

The ledger is the acceptance record for T2-T4. No page is edited during T1.

## T1 Proposal: Target Vocabularies

This is the T1 deliverable awaiting sign-off. Each table maps every label that
occurs today to its target term. Rows marked **open** need a decision before
T2-T4 start; everything else is mechanical.

One principle decides most rows: a field is named after its **position**, never
after what happens to fill it. The fundament is the fundament whether a subject,
a question word or a whole subordinate clause sits in it. Labelling it
`Frågeord` on the question page would re-introduce exactly the position-versus-
role confusion the model exists to remove.

### Learn Swedish

Model: `satsschema`, terminology per Svenska Akademiens grammatik.

Allowed terms: `fundament`, `finit verb`, `subjekt`, `satsadverbial`,
`infinit verb`, `objekt / predikativ`, `adverbial`, `subjunktion`, `huvudsats`,
`bisats`. Where a page teaches adverbial order, `adverbial` may be split into
`sätt`, `plats`, `tid`.

| Today | Target | Note |
| --- | --- | --- |
| `1 Fundament`, `First field`, `Första fält`, `Första fältet`, `1 Vorfeld`, `Opening` | `fundament` | six names, one field |
| `2 Finite verb`, `Finite verb`, `Finites Verb`, `Finit verb` | `finit verb` | locale translation only |
| `3 Subject`, `Subjekt` | `subjekt` | locale translation only |
| `Sentence adverb`, `Satzadverbial`, `Satsadverbial` | `satsadverbial` | locale translation only |
| `Non-finite verb`, `Verb group`, `Verbgrupp`, `Verbgruppe` | `infinit verb` | same slot, two different names |
| `Rest` | `objekt / predikativ` **+** `adverbial` | one column becomes two |
| `Subordinator`, `Subjunktion`, `Link`, `Länkord`, `Einleitung`, `Inledning` | `subjunktion` | the bisats introducer, `att` included |
| `Question phrase`, `Question word`, `Frågefras`, `Frågeord` | `fundament` | the question phrase fills the fundament |
| `Condition`, `Villkor`, `Bedingung` | `fundament` | the `om` clause fills the fundament |
| `Main clause`, `Huvudsats`, `Hauptsatz` | `huvudsats` | clause-level table, not a field |
| `Finite verb (direct)`, `Verb (indirect)` | **open** | see below |

**Decided — direct versus indirect questions.** On `question-words` and
`questions` one table contrasts a direct and an indirect question in the same
columns, which is why two columns carry a `(direct)` / `(indirect)` qualifier. A
column is a position, so the contrast belongs in the rows. Resolution: split
each into two tables, one per clause type, each with its own schema. The
indirect one uses the bisats schema, opening with `subjunktion`.

### Learn German

Model: topologisches Feldermodell, terminology per Duden-Grammatik. German
labels on an English page follow the same principle as `fundament` does.

Allowed terms: `Vorfeld`, `linke Satzklammer`, `Mittelfeld`,
`rechte Satzklammer`, `Nachfeld`, `Bezugswort`, `Hauptsatz`, `Nebensatz`,
`Konjunktion`.

| Today | Target | Note |
| --- | --- | --- |
| `1 First field`, `First field`, `Left field`, `Clause start`, `Question field` | `Vorfeld` | five names, one field |
| `2 Finite verb`, `Finite verb`, `Finite modal` | `linke Satzklammer` | the finite verb *occupies* the left bracket |
| `Left bracket` | `linke Satzklammer` | already correct, only translated |
| `Connector` (subordinating) | `linke Satzklammer` | the subjunction fills the left bracket of a Nebensatz |
| `Middle`, `Middle field`, `Adverbial material`, `Subject if not first`, `Rest` | `Mittelfeld` | five names, one field |
| `Right bracket`, `Final verb`, `Final finite verb`, `zu + infinitive` | `rechte Satzklammer` | four names, one field |
| `Noun` (relative clauses) | `Bezugswort` | stands outside the clause |
| `Relative pronoun` | `linke Satzklammer` | it fills the left bracket; say *relative pronoun* in the row label |
| `Clause 1`, `Clause 2`, `Main clause` | `Hauptsatz` | clause-level table |
| `Connector` (coordinating) | `Konjunktion` | sits before the Vorfeld, in no field |

**Note.** No German page currently uses a `Nachfeld` column. The term stays in
the vocabulary because the model has the field, not because a page needs it now.

### Learn English

English has no field model, so there is no official schema to adopt. The
vocabulary is therefore the clause-element analysis (S V O C A, per Quirk and
per Huddleston & Pullum) plus the auxiliary-versus-main-verb distinction that
English genuinely needs for do-support and the passive. The requirement here is
internal consistency, not fidelity to one published schema.

Allowed terms: `subject`, `auxiliary`, `main verb`, `object / complement`,
`adverbial`, `manner`, `place`, `time`, `frequency`, `agent`, `antecedent`,
`relative pronoun`, `subordinator`, `main clause`, `question word`, `not`,
`reporting verb`, `past participle`.

| Today | Target | Note |
| --- | --- | --- |
| `Opening` | `adverbial` | name the fronted element in the row label |
| `Rest` | `object / complement` **+** `adverbial` | same split as Swedish |
| `Finite verb`, `Verb`, `First verb` | `auxiliary` or `main verb` | pick per table; English needs the distinction |
| `Be` (passive) | `auxiliary` | the row shows which form |
| `Noun` (relative clauses) | `antecedent` | stands outside the clause |
| `Relative word` | `relative pronoun` | |
| `Connector` | `subordinator` | |
| `Question word`, `Reporting verb`, `Past participle`, `Agent`, `Frequency`, `Manner`, `Place`, `Time`, `Subject`, `Auxiliary`, `Main verb`, `Object / complement`, `Main clause` | unchanged | already standard |
| `Not` | **open** | see below |

**Reverted — the question word.** An earlier draft replaced `Question word`
with `wh-word`. Both are standard, but `wh-word` names a word class while this
vocabulary is built on clause elements, and the Swedish tree maps the same
phenomenon onto a position (`fundament`). `question word` stays.

**Decided — the negator.** `not` is the word itself, not a term, which breaks
the one-name-per-concept rule the other two trees follow. The alternative,
`negator`, is correct but heavier for an A1 reader. Resolution: keep `not` as a
deliberate exception. It is recorded here so that a later reader finds a
decision rather than an oversight.

**Decided — adverbial order.** On the Swedish page that teaches adverbial order,
`adverbial` is split into `sätt`, `plats`, `tid`, in that order. Everywhere else
it stays one field.

### Column Economy

A table carries only the fields the page actually teaches. It does not have to
show the whole model. Diderichsen tables in published textbooks routinely omit
the fields a given example does not exercise, and a seven- to nine-column table
side-scrolls on a phone, which defeats the one thing a schema is for: seeing the
whole clause at a glance.

This narrows the `Rest` split. `Rest` is replaced by the field that the column
actually holds — usually `adverbial` alone — and becomes two columns only where
the page teaches the difference between object and adverbial. The same applies
to the `sätt` / `plats` / `tid` split, which stays on the adverbial-order page.

Every column that exists must be a real field, correctly named. Not every field
must have a column.

### Sign-Off

Accepted on 2026-09-14, including the three decisions recorded above. The three
vocabulary tables are now binding for T2-T4.

## T2. Learn Swedish Remediation

Target vocabulary, identical in all three locales:

`fundament`, `finit verb`, `subjekt`, `satsadverbial`, `infinit verb`,
`objekt / predikativ`, `adverbial`

Split the merged `Rest` column into `objekt / predikativ` and `adverbial`, and
re-cut every affected cell. Where a page teaches adverbial order, split the
final field further into `sätt`, `plats`, `tid`.

Do the three locales of a page in one commit. A page whose locales disagree
mid-way is worse than one not yet started.

## T3. Learn English Remediation

English has no field model. Label the clause elements instead: `subject`,
`verb`, `object`, `complement`, `adverbial`. Replace `Opening` — on a page about
fronting, name the element that moved.

## T4. Learn German Remediation

Target vocabulary: `Vorfeld`, `linke Satzklammer`, `Mittelfeld`,
`rechte Satzklammer`, `Nachfeld`. This replaces `1 First field`,
`Subject if not first` and `Rest`, which describe the German model under English
names.

## T5. Automated Guard

`scripts/validate-schema-terminology.mjs` exists and runs as
`npm run validate:schema-terminology`. It checks two things: that no label falls
outside the tree's vocabulary, and that the `columns` array is identical across
the meta locales of a page. Cell content stays out of scope, because splitting a
merged field correctly is a judgement a script cannot make.

What remains is the wiring: add it to the `quality` script. That is deliberately
not done yet. With 63 schemas still non-compliant it would turn every
`npm run quality` red and block unrelated work. Wire it in at the end of T4,
the way `validate:links` guards the base path.

The guard must tolerate a page that has no mirror yet, so that it does not block
the Learn English and Learn German buckets.

## Non-Goals

- No route, navigation, frontmatter or topic-scope change.
- No new schema on a page that has none.
- No rewrite of page prose beyond the sentences that name a field.
- No translation work; the meta-language buckets keep that.
- No SFI-style `verb1` / `verb2` glosses. They name the same two fields as
  `finit verb` and `infinit verb`, but numbering implies exactly two forms where
  the field holds any number. Named fields only.

## Quality Gates

1. `npm run quality` passes, including the new guard.
2. Every ledger row is resolved or carries a recorded exception.
3. No `columns` label outside the three target vocabularies remains.
4. Spot-check in the browser: the Swedish schema renders without wrapping in the
   narrow viewport after the column split.

## Definition of Done

All 63 schema instances match the rule, the guard is green in `npm run quality`,
the ledger is closed, and the deviations list in
[Content Didactics](./rules/content-didactics.md) is removed because nothing
deviates any more.

## Carry-Over

The Learn English and Learn German meta-language buckets author their mirrors
against the corrected sources. Their acceptance criteria gain one line: the
`columns` array is copied verbatim from the canonical page, never translated.
