# Phase 5: Narrow-Viewport Visual Quality Check Ledger

## Scope and Verdict

**Status:** PASS. VIS-01 is resolved; one non-blocking touch-comfort advisory
remains.

This is interactive narrow/mobile evidence for Q6 only. It does not change
implementation, the frozen information architecture, or another Quality Check
status. No blocking visual defect remains.

## Exact Test Environment

| Item | Evidence |
| --- | --- |
| Browser | Codex in-app browser, tab `1` |
| Target | `http://127.0.0.1:4321/jp-language-hub/` |
| Viewport override | `390 x 844` CSS px, set through the browser viewport capability |
| DOM proof | Every matrix page reported `window.innerWidth = 390`, `window.innerHeight = 844`, document width `375`, and `horizontalPageOverflow = false`. |
| Evidence identifiers | AX snapshots and visual screenshots from in-app tab `1`, identified as N-E01 through N-E10 below. |

## Route Matrix

`PASS` means the page loaded with readable/wrapping content, available AX
controls, and no document-level horizontal overflow.

| ID | Route | Layout or behavior exercised | Result |
| --- | --- | --- |
| N01 | `/learn/swedish/grammar/` | Swedish grammar overview; shelves and practical entry links | PASS |
| N02 | `/learn/english/grammar/` | English grammar overview and responsive decision table | PASS |
| N03 | `/learn/german/grammar/` | German grammar overview, table and inline code | PASS |
| N04 | `/learn/swedish/learning-path/` | Long practical page; five compact decision tables and dense links | PASS |
| N05 | `/learn/swedish/common-mistakes/from-german/` | Common-mistakes diagnostics, tags, callouts and reference tail | PASS |
| N06 | `/de/learn/swedish/grammar/sentence-structure/basic-word-order/` | Authored German Swedish-learning mirror; localized schema, QuickCheck and related topics | PASS |
| N07 | `/sv/learn/swedish/grammar/sentence-structure/basic-word-order/` | Authored Swedish Swedish-learning mirror; localized schema | PASS |
| N08 | `/learn/swedish/grammar/sentence-structure/v2/` | `SentenceSchema`, `LanguageComparison`, callouts, QuickCheck and related topics | PASS |
| N09 | `/learn/swedish/grammar/nouns-articles/en-ett/` | Multi-table noun/article reference | PASS |
| N10 | `/learn/swedish/grammar/adjectives-adverbs/agreement/` | Wide agreement table and reference tables | PASS |
| N11 | `/learn/swedish/sentence-patterns/introducing-yourself/` | Practical sentence-pattern page and reference tail | PASS |
| N12 | `/learn/english/grammar/sentence-structure/subordinate-clauses/` | Wide schema, German-English comparison, callouts and QuickCheck | PASS |
| N13 | `/learn/english/grammar/nouns-articles/countable-and-uncountable-nouns/` | Multi-table English reference layout | PASS |
| N14 | `/learn/english/grammar/mood-politeness-reports/polite-requests/` | Concise rule, table and QuickCheck layout | PASS |
| N15 | `/learn/english/common-mistakes/from-german/` | Dense diagnostic/recovery-link layout | PASS |
| N16 | `/learn/german/grammar/cases/dative/` | German case-reference layout | PASS |
| N17 | `/learn/german/grammar/sentence-structure/verb-bracket/` | German `SentenceSchema` | PASS |
| N18 | `/learn/german/common-mistakes/from-swedish/` | German common-mistakes layout and table | PASS |

## Visual and Interaction Evidence

| Evidence ID | Check | Observation |
| --- | --- | --- |
| N-E01 | Home at 390 x 844 | Header collapsed to brand plus search; primary actions, three-language cards, text and headings wrapped without clipping. |
| N-E02 | Swedish grammar overview | Mobile `Menu` and `On this page` controls were exposed in AX; shelf and practical-entry links remained readable. |
| N-E03 | Mobile sidebar | Menu opened a scrollable nested Swedish tree with learning-language selector, shelf disclosures, theme and meta-locale controls; closing restored page content. |
| N-E04 | Learning-language navigation | Selecting `English` from the mobile learning-language control navigated to `/learn/english/`; its two-column decision table remained contained. |
| N-E05 | Meta-locale navigation | Selecting `Deutsch` from the canonical Swedish Basic word order page navigated to the authored `/de/learn/swedish/.../basic-word-order/` mirror; German labels, headings, QuickCheck and related links rendered correctly. |
| N-E06 | `SentenceSchema` containment | Swedish V2 (566 px), English subordinate clauses (608 px), German verb bracket (475 px), and DE/SV mirror schemas (1015/974 px) used an `overflow-x: auto` table wrapper. Screenshots showed the component scrollbar, not page clipping. |
| N-E07 | Standard wide tables | Swedish adjective agreement had a 343 px rendered table box with 452 px table scroll width and no document overflow. Overview, learning-path, noun and common-mistakes tables wrapped or remained contained. |
| N-E08 | Comparison and callouts | `LanguageComparison`, tag pills, In-short/Common-mistake/Memory-tip callouts, headings and prose were readable and wrapped on V2, Basic word order and English subordinate-clauses pages. |
| N-E09 | QuickCheck | Activating V2 `Show answer` changed AX from collapsed to expanded and revealed `I morgon åker jag till Malmö.` within the QuickCheck card. |
| N-E10 | RelatedTopics | Activating V2's `Inversion` related-topic link navigated successfully to `/learn/swedish/grammar/sentence-structure/inversion/`; its schema, comparison, QuickCheck and related tail were present. |

## Overflow and Control Measurements

| Area | Result |
| --- | --- |
| Document-level horizontal scroll | PASS — `false` on N01-N18; no page-edge clipping in inspected screenshots. |
| Intentional horizontal scroll | PASS — reserved for wide schemas/tables and contained within the component. |
| Text, code and headings | PASS — localized headings, table labels, prose, tag pills and inline code wrapped without widening the document. |
| Sidebar and locale controls | PASS — menu open/close, nested shelves, learning-language switch and meta-locale switch operated in the mobile UI. |
| QuickCheck and links | PASS — disclosure interaction and related-topic navigation were exercised. |
| Touch targets | PASS for operation and the 24 px minimum: menu measured 32 x 32 px, `On this page` 375 x 48 px, and tested RelatedTopics links 343 x 54 px. |

## Findings

| Severity | Finding | Disposition |
| --- | --- | --- |
| P3 — advisory | The visible mobile menu icon is 32 x 32 px. It clears the 24 px minimum target-size criterion and operated reliably, but is smaller than the commonly recommended 44 x 44 px comfortable target. Compact disclosure controls use a similarly dense treatment. | Non-blocking usability enhancement; no Phase 5 implementation change made. Reassess only if the project adopts a 44 px mobile-control policy. |

## VIS-01 Post-Fix Retest Evidence

The following is an **Advisor root-session** IAB retest against the refreshed
development server. It is recorded from the Advisor's verified evidence; this
ledger's original 18-route first pass was performed separately and is retained
above.

| Evidence ID | Test at 390 x 844 | Verified result |
| --- | --- | --- |
| VIS-01a | Initial state on Swedish Grammar | Native menu button `aria-expanded=false`; host state `null`; body state `false`. The button's `aria-controls` target existed. |
| VIS-01b | Pointer open | Click set native button state to `true`, AX to expanded, and body state to `true`; the drawer was visibly open. Main content and Skip link became inert, and the page had no horizontal overflow. |
| VIS-01c | Escape close and focus | `Escape` set the native button and AX state to collapsed/`false`, body state to `false`, removed inert from main and Skip link, closed the visible drawer, and returned focus to the menu button. |
| VIS-01d | Native keyboard activation | `Enter` opened the drawer with button state `true`; `Space` closed it with button state `false`. |
| VIS-01e | Sidebar navigation | Mobile sidebar navigation to V2 landed on `/jp-language-hub/learn/swedish/grammar/sentence-structure/v2/` with the base path intact and the next page's drawer closed. |
| VIS-01f | Responsive reset | Resizing an open drawer from 390 px to 900 px reset native button state to `false`, body state to `false`, and removed inert; the desktop sidebar was visible. |
| VIS-01g | Visual review | Advisor IAB screenshots passed: drawer visibility matched state, desktop reset was clean, and the tested Grammar overview, V2/schema, and long Learning Path had no layout or overflow regression. |

**VIS-01 disposition: resolved.** Native control state, host/body state,
visible drawer, AX state, focus return, keyboard operation, navigation reset,
and desktop-breakpoint reset now agree.

## Execution History

- The route matrix and N-E01 through N-E10 are the original first-pass narrow
  inspection.
- A later sub-agent post-fix attempt did not execute site checks because its
  fresh CUA session reported `browsers: []` and no IAB was available. It made
  no ledger claim or implementation/status change.
- The Advisor root-session retest above supplied the final post-fix VIS-01
  evidence. It is intentionally labelled as Advisor execution rather than
  sub-agent execution.

## Final Narrow Verdict

**PASS.** The interactive narrow viewport gate has no blocking visual,
navigation, containment, wrapping, QuickCheck, locale, RelatedTopics, or
mobile-menu accessibility failure. VIS-01 is resolved. The P3 32 px
touch-comfort note does not invalidate the narrow gate.
