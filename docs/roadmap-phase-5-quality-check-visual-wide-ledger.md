# Phase 5 Quality Check — Visual Wide-Viewport Ledger

## Scope and verdict

**Verdict: PASS.** The interactive desktop-width inspection found no visual
regression, clipping, overflow, navigation, or post-fix menu-state failure in
the sampled Phase 5 route matrix. This ledger is evidence for the wide half of
the interactive viewport gate; it does not change content, configuration, the
frozen IA, or the Phase 5/Q6 status.

## Execution proof

- **Browser:** Codex In-app Browser, IAB tab `1` (temporary test tab).
- **Target:** `http://127.0.0.1:4321/jp-language-hub/`.
- **Viewport override:** explicitly set to **1440 × 900 CSS px**; in-page
  verification returned `innerWidth: 1440`, `innerHeight: 900`.
- **Width result:** every sampled document reported `clientWidth: 1425` and
  `scrollWidth: 1425`; no document-level horizontal overflow occurred.
- **Method:** for every route below, inspected its rendered screenshot and
  accessibility tree after the `load` state, then checked the rendered DOM for
  headings, the sidebar and table/schema/comparison/reference-tail components.
  The CUA screenshots are ephemeral run evidence associated with IAB tab `1`;
  no persistent screenshot files were created.

## Advisor Post-Fix Desktop Retest

The Advisor performed the following root-session IAB retest on refreshed local
content; it is not claimed as a sub-agent browser execution.

| Test | Verified evidence |
| --- | --- |
| Route and viewport | German Grammar at `1440 x 900` CSS px. |
| Initial desktop state | `clientWidth: 1425`; `scrollWidth: 1425`; no horizontal overflow; host state `null`; native button state `false`; body state `false`; desktop sidebar visible. |
| Visual confirmation | Advisor IAB screenshot passed: stable desktop grammar layout and visible sidebar, with no clipping or overflow. |
| VIS-01 breakpoint reset | The narrow retest resized an open drawer from 390 px to 900 px and verified native button/body state reset to `false`, inert removal, and a visible desktop sidebar. |

**VIS-01 disposition at desktop width: resolved.** The menu state does not
leak into the desktop layout.

## Representative route matrix

| # | Route | Layout / component coverage | Result |
| ---: | --- | --- | --- |
| 1 | `/learn/swedish/grammar/` | Swedish grammar overview; nested sidebar and practical entry paths | PASS |
| 2 | `/learn/english/grammar/` | English grammar overview; decision table and reference tail | PASS |
| 3 | `/learn/german/grammar/` | German grammar overview; intentional question/negation entry split | PASS |
| 4 | `/learn/swedish/grammar/sentence-structure/v2/` | `SentenceSchema` (1), `LanguageComparison` (2), `TagList`, `QuickCheck`, `RelatedTopics` | PASS |
| 5 | `/learn/swedish/grammar/sentence-structure/basic-word-order/` | schema/table, comparison, QuickCheck and related-topic tail | PASS |
| 6 | `/learn/swedish/sentence-patterns/conditions-and-consequences/` | practical production page; 2 tables, 4 comparisons, reference tail | PASS |
| 7 | `/learn/swedish/common-mistakes/from-german/` | Common Mistakes diagnostics, callouts, 8 comparisons | PASS |
| 8 | `/learn/swedish/grammar/verbs-time-forms/tense-perspectives/` | longer grammar page; 2 tables and 6 comparisons | PASS |
| 9 | `/learn/english/grammar/verbs-time-forms/simple-present-vs-present-progressive/` | decision table, 3 comparisons, QuickCheck and related topics | PASS |
| 10 | `/learn/german/grammar/prepositions/genitive-prepositions/` | German reference-tail page, tags, QuickCheck and related topics | PASS |
| 11 | `/learn/swedish/vocabulary/telling-time/` | vocabulary layout; 4 tables and 5 comparisons | PASS |
| 12 | `/de/learn/swedish/grammar/sentence-structure/basic-word-order/` | authored German Swedish-learning mirror; localized chrome, schema and tail | PASS |
| 13 | `/sv/learn/swedish/grammar/sentence-structure/basic-word-order/` | authored Swedish Swedish-learning mirror; localized chrome, schema and tail | PASS |
| 14 | `/learn/swedish/grammar/nouns-articles/en-ett/` | dense reference page; 7 tables and 2 comparisons | PASS |
| 15 | `/learn/german/grammar/sentence-structure/questions/` | German question layout; schema/table and reference tail | PASS |
| 16 | `/learn/english/grammar/verb-patterns-voice/passive/` | English passive page; schema/table, comparison and reference tail | PASS |

## Visual observations

- The three overview pages retain the expected learning-language sidebar,
  visible nesting/order, active item, readable central column, and right-side
  on-page navigation at desktop width.
- The sampled tables and all `SentenceSchema` instances fit their content
  column without horizontal table overflow. Comparison cards, tag pills,
  callouts, headings, examples, and QuickCheck answer controls remained
  aligned and readable; no overflowing `pre` or `code` element was found.
- The V2 screenshot and its scrolled reference-tail screenshot show the
  schema, QuickCheck, related-topic cards, and previous/next navigation
  without clipping. The Common Mistakes page preserved its warning/correction
  callout contrast and wrapping. The dense `en / ett`, tense, conditions, and
  telling-time table layouts remained contained.
- Both authored localized mirrors render the correct localized meta-language
  chrome and translated headings while retaining the Swedish learning-language
  tree, schema, QuickCheck, and related-topic structure.

## Interaction evidence

- Clicked the Swedish Grammar sidebar item **V2 rule**; it navigated to
  `/jp-language-hub/learn/swedish/grammar/sentence-structure/v2/`.
- Clicked the first V2 **Related topics** card; it navigated to
  `/jp-language-hub/learn/swedish/grammar/sentence-structure/basic-word-order/`.
- Used the rendered meta-language selector to change the canonical Basic word
  order page to German. It navigated to
  `/jp-language-hub/de/learn/swedish/grammar/sentence-structure/basic-word-order/`
  and rendered German navigation/chrome. All observed navigation URLs retained
  the `/jp-language-hub/` base path.

## Findings

VIS-01 is resolved by the post-fix root-session retest. The 32 x 32 px mobile
menu target remains a P3 advisory recorded in the narrow ledger; it is not a
wide-viewport finding or gate blocker.

## Gate disposition

**Wide viewport: PASS.** Together with the narrow ledger's resolved VIS-01
retest, both visual viewport gates pass.
