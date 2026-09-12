# Phase 5 Quality Check — Structural, Navigation, and Metadata Ledger

## Scope and review basis

This is an independent read-only audit of Q1 (inventory and route
reconciliation), Q2 (navigation and architecture), and Q5 (metadata, links,
and authored mirrors). It records the state observed after the current Phase 5
working-tree fixes. It does not modify implementation, content, configuration,
the frozen Blueprint, or the Topic Inventory.

Authoritative inputs were `docs/roadmap-phase-5-quality-check.md`, the Phase 5
coordination plan, the frozen Navigation Blueprint and Topic Inventory, the
three language implementation reports, the existing Quality Check ledgers,
`AGENTS.md`, and all applicable files under `docs/rules/`.

## Q1 — Inventory and route reconciliation

**Verdict: PASS.**

The inventory was parsed from its three language tables and reconciled against
the filesystem-derived canonical routes.

| Check | Evidence | Result |
| --- | --- | --- |
| Inventory rows | 202 total: Swedish 55, English 65, German 82 | PASS |
| Historical/current source routes | 132 non-empty `Current route` cells; 132 unique | PASS |
| Target routes | 201 unique targets; all 201 exist in `src/content/docs/learn/` | PASS |
| Action totals | 55 `keep`, 70 `create`, 70 `move`, 2 `move, rename`, 4 `move, reference`, 1 `merge` | PASS |
| Target duplication | Exactly one duplicate target, German `active-vs-passive`, and both rows are the explicit `merge` + surviving `move` pair | PASS |
| Kept routes | 55/55 have `current == target` and an existing canonical file | PASS |
| Retired routes | 77 moved/renamed/merged historical routes have no source reference and no generated `dist/` route directory | PASS |
| Blueprint coverage | Blueprint parser: 201 unique entries; Inventory: 201 unique targets; missing in either direction: 0 | PASS |

The canonical filesystem contains 238 pages across the three learning trees,
including approved practical and lookup routes outside the 201-row Phase 5
target slice. The additional pages are not orphaned Phase 5 targets.

Commands and observed evidence:

```text
node --input-type=module <<'NODE' ... inventory/filesystem reconciliation ... NODE
{ rows: 202, current: 132, currentUnique: 132,
  target: 202, targetUnique: 201, targetDuplicateCount: 1,
  actionCounts: { keep: 55, create: 70, move: 70,
    "move, rename": 2, "move, reference": 4, merge: 1 } }
missing targets []
missing current []
target duplicates: /learn/german/grammar/verb-patterns-voice/active-vs-passive/

node --input-type=module <<'NODE' ... Blueprint parser and target comparison ... NODE
{ blocks: 7, blueprintTargets: 201, inventoryTargets: 201 }
bp missing inventory []
inventory absent blueprint []
```

The final reconciliation uses 201 unique Blueprint target/sidebar entries,
matching the 201 unique Inventory targets. Root overview references that also
appear in Common Mistakes are counted once for target reconciliation.

## Q2 — Navigation and architecture

**Verdict: PASS after the German reference-tail fix.** All required route
entries, order, and nesting now match the frozen Blueprint.

The sidebar was compared line-by-line by extracting its `slug` sequence from
`astro.config.mjs` and comparing the canonical grammar/Common Mistakes subset
with the Blueprint parser:

| Learning tree | Blueprint entries | Sidebar entries | Set coverage | Order | Nesting |
| --- | ---: | ---: | --- | --- | --- |
| Swedish | 54 | 54 | exact | PASS | PASS |
| English | 65 | 65 | exact | PASS | PASS |
| German | 81 | 81 | exact | PASS | PASS |

The recheck evaluated the full nested sidebar tree, not only a flat slug list.
The parser resolved each sidebar group's parent scope and compared it with the
Blueprint's indentation-derived shelf scope:

```text
Blueprint (docs/roadmap-phase-5-navigation-blueprint.md:368-376):
  ... two-way-prepositions, prepositional-adverbs,
  dependent-prepositions, genitive-prepositions

Actual after fix (astro.config.mjs:293-303):
  ... two-way-prepositions, prepositional-adverbs,
  dependent-prepositions, genitive-prepositions
```

`genitive-prepositions` is now the approved `REF` tail and is last. The full
recheck result was `sequence: true, nesting: true` for all three learning
trees (Swedish 54/54, English 65/65, German 81/81).

Additional Q2 checks:

- Every visible grammar root and section shelf has its required `Overview`
  entry and an existing target route. No P0 child is exposed behind a missing
  or later-priority overview.
- German's explicit deviation is present: `questions` remains under Sentence
  Structure, while `negation` remains under Function Words & Negation; no
  duplicate German Questions & Negation shelf was introduced.
- Swedish Numbers is under Vocabulary, and Swedish practical
  `sentence-patterns/polite-requests` and
  `sentence-patterns/conditions-and-consequences` remain outside Grammar.
- Common Mistakes is a top-level group outside Grammar for Swedish, English,
  and German. The shared tail remains `False Friends`, `Direct Translation
  Errors`, `Practice`.
- `npm run validate:language-layers` passed across 252 docs pages; learning
  language route prefixes, meta-language metadata, comparison metadata, and
  comparison component slots are separated by the validator.

### Q2 finding history

**STR-01 (P1) — German Prepositions reference-tail order.** Reorder only the
existing sidebar entries to `prepositional-adverbs`,
`dependent-prepositions`, `genitive-prepositions`. No route, scope, or
Blueprint change was authorized or required. **Resolved:** the current
`astro.config.mjs` order matches that sequence; no further Q2 action remains.

## Q5 — Metadata, links, and authored mirrors

**Verdict: PASS for metadata, links, and mirror structure.** The exact file
scope terminology is recorded below so the central report can distinguish all
localized files from the Phase-5 affected mirror subset.

### Metadata and links

A strict filesystem frontmatter scan checked all schema vocabulary, unique
arrays, canonical `related` routes, and localized structural equality:

```text
docs 252
metadata problems 0
canonical 242
authored mirrors 10 (de 5, sv 5)
mirror metadata problems 0
```

The project validators also passed:

```text
npm run validate:language-layers
Validated language layers across 252 docs pages.

npm run validate:links
Validated internal links across 252 docs pages.

git diff --check
PASS (no output)
```

This confirms valid `metaLanguage`, `grammarLanguage`,
`comparisonLanguages`, CEFR levels, controlled tags, and `related` values;
relative page-body/component links; and canonical absolute `related` routes.

### Authored localized filesystem scope

The exact authored localized count is **10 files**: five under
`src/content/docs/de/` and five under `src/content/docs/sv/`. The exact
Phase-5 affected Learn Swedish mirror scope is **8 authored localized files**
(four under each locale), representing four canonical route pairs in both
meta-languages. The two additional localized files are the locale home pages
(`de/index.mdx` and `sv/index.mdx`), not Learn Swedish mirror files. No authored
English-learning or German-learning mirrors exist under either locale. All 10
authored localized files have an existing canonical route and structural
metadata equality; only the allowed locale `metaLanguage` differs.

The central Quality Check report states both facts explicitly:
**10 authored localized docs total (5 de + 5 sv); 8 affected Learn Swedish
mirror files (4 de + 4 sv), plus 2 locale-home docs.** The earlier conflation
of localized-file totals with affected mirror scope is resolved.

Commands:

```text
find src/content/docs/de src/content/docs/sv -type f -name '*.mdx' | sort
  10 files total: de 5, sv 5

find src/content/docs/de/learn src/content/docs/sv/learn -type f | sort
  only learn/swedish paths: 4 under de, 4 under sv
```

### Retired routes, planning markers, and generated output

The targeted retired-route scan checked all 77 historical move/rename/merge
source routes against `src`, `scripts`, `astro.config.mjs`, and generated
route directories:

```text
retired rows 77
source refs 0
dist route dirs 0
```

The planning-marker scan found no unresolved `TBD`, `TODO`, or literal
`audit/create` marker. The one `maybe` match is learner-facing prose in
`src/content/docs/learn/english/common-mistakes/from-german.mdx`, not a
planning marker.

`dist/` was present and contained 727 HTML files. The generated-output scan
checked 66,551 absolute `href` values and found **0** base-less internal hrefs:

```text
{ html: 727, absoluteHrefCount: 66551, baseLessCount: 0 }
```

### Q5 finding history and terminology resolution

**STR-02 (P1) — Durable mirror-scope terminology.** Earlier ledger wording
conflated the 10-file localized total with the 8-file affected Learn Swedish
mirror scope. **Resolved in this re-review:** the filesystem distinction and
the exact wording required in the central report are now recorded above. The
central-report/ledger wording is synchronized; there is no missing-translation
requirement and no structural Q5 defect.

## Consolidated verdict and handoff

| Package | Verdict | Blocking item |
| --- | --- | --- |
| Q1 | **PASS** | None found |
| Q2 | **PASS** | Full order and nesting match Blueprint |
| Q5 | **PASS** | Metadata, links, mirrors, retired routes, and generated hrefs pass; central report retains the precise 10/8 terminology |

Q6 follow-up: none. The central report and mirror ledger contain the corrected
10-file / 8-affected-file terminology, and the targeted checks are closed as
PASS.

No implementation or content changes were made by this audit.
