# jp-language-hub — Learning Tips from a Video: Intake Plan

Status: draft, nothing implemented. Decide the open questions before any
content change.

## Source

- Video: "Meistere jede Sprache in nur 180 Tagen: 5 Steps aus der
  Gehirnforschung" — Henry Hildebrandt, 14:30, published 2025-07-13
- URL: https://www.youtube.com/watch?v=pP4ak7Evyyc
- Transcript: German auto-captions only (no manual subtitles). The raw
  transcript is not stored here (third-party content). Regenerate it with:

```bash
yt-dlp --skip-download --write-auto-subs --sub-langs de-orig --sub-format vtt \
  -o "%(id)s.%(ext)s" "https://www.youtube.com/watch?v=pP4ak7Evyyc"
```

The title says 5 steps; the video presents 5 principles, 7 actions and
4 add-ons. Timestamps below point into the video.

## What the video says (paraphrased)

### Five principles (05:55–08:00)

| # | Principle | Claim |
| - | --- | --- |
| P1 | Relevance | Only personally meaningful material sticks (emotion, reward). |
| P2 | Comprehensible input | Understand before you speak; input slightly above your level. |
| P3 | Language as a tool | Use it to get real things done, not as a school subject. |
| P4 | Safe emotional state | Stress blocks learning; mistakes must be allowed, even sought. |
| P5 | Don't translate | Link the word to an image or feeling, not to the native word. |

### Seven actions (08:00–12:55)

| # | Action | Concrete advice |
| - | --- | --- |
| A1 | "Brain soaking" | Lots of listening (video, TV, radio), even when not understood yet. |
| A2 | Meaning before grammar | Get the message across first; fix sentence structure later. |
| A3 | Mix and combine | Pick topic clusters by priority; 10 nouns + 10 verbs + 10 adjectives each, then combine them into many sentences. |
| A4 | High-frequency words | Top ~1000 words cover most everyday text; learn the core first. |
| A5 | Toolbox phrases | Learn the most-used everyday phrases as whole chunks from day one. |
| A6 | Face copying | Watch speakers; imitate mouth, mimicry and gestures for pronunciation. |
| A7 | Think in images | Picture the meaning instead of reading the translation. |

### Add-ons (12:55–13:57)

Learn in good condition (sleep, food, focus, time of day); combine learning
with movement (walks); humour, surprise and odd mnemonics help memory; fear
hurts it.

## Evidence check

The practical advice is mostly mainstream in second-language research
(comprehensible input, frequency-first vocabulary, chunks, low anxiety). Several
neuroscience explanations in the video are simplified or wrong, so do not
quote them on the site:

- "Neuroplasticity = growing new nerve cells" is wrong; it is mostly changing
  connections.
- "Selective attention collapse", alpha-wave and mirror-neuron explanations are
  pop-science framing, not established mechanisms for adult language learning.
- "Top 1000 words = 85 %" is roughly in line with frequency research for
  spoken text coverage, but the exact figure depends on the corpus.
- "Grammar-first learners speak slower and make more errors" is cited without
  a source. Explicit grammar teaching has measurable benefits in research, so
  this claim conflicts with the project's grammar-reference purpose.

Take the actions, not the brain explanations.

## Fit with the project

The hub is a reference site with static self-checks (`docs/roadmap.md`,
Phase 8: no accounts, scores, streaks). Every item below belongs to the
**learning-language** layer (`learn/swedish/…`) unless noted.

| Tip | Already covered | Gap |
| --- | --- | --- |
| P1, add-on humour | `MemoryTip` component | Tips are rule-focused; no guidance asks for vivid or funny hooks. |
| P2 | Level ordering in `learning-path.mdx`; QuickCheck tests only taught content | — |
| P3, A5 | 13 task pages in `sentence-patterns/` | No single "first phrases" page of ready-made chunks. |
| P4 | `MistakeBox` | Tone check only; no gap. |
| P5, A7 | — | Conflicts with the project core: `LanguageComparison` is built on translation. See open decision D1. |
| A1 | — | No pointer to listening material (easy-Swedish news, radio, TV). |
| A2 | "manage everyday situations" route in the learning path | "Your first five pages" is grammar-only. |
| A3 | 8 topic pages in `vocabulary/` (clusters) | No combination drill. |
| A4 | — | No frequency-based core word list. |
| A6 | `pronunciation-basics.mdx` | No advice to watch and imitate speakers; audio waits on Phase 8 licensing. |
| Add-ons | — | Generic study advice; outside the reference scope. See D3. |

## Proposed work items

Ordered by value for effort. Each item follows `docs/rules/content-didactics.md`
and `docs/rules/content-metadata.md`, and ends with `npm run quality`.

1. **Learning-path start (A2, P3).** Add one sentence-pattern page to
   "Your first five pages" (or a sixth entry), so a beginner gets a usable
   phrase on day one. Small edit to `learn/swedish/learning-path.mdx`.
2. **Listening resources (A1, P2).** New short page under `learn/swedish/`
   that lists free easy-Swedish listening and reading sources by level.
   Verify every source and its URL before writing; candidates to check are
   easy-Swedish news and radio offers of the Swedish public broadcasters.
   External links only, no embedded media.
3. **Core phrases page (A5).** One page or cheat sheet with ~30 survival
   chunks, each linking to the sentence-pattern page that explains it. Must
   reuse, not duplicate, existing pattern content.
4. **Core vocabulary list (A4).** Frequency-based core word list. Needs a
   licensing-clean frequency source (to check: the Swedish "Kelly" list from
   Språkbanken and its license). Do not generate the list with an LLM: the
   frequency claim would be unverifiable.
5. **Combination drill (A3).** Phase 8 item: a static mini-drill per
   vocabulary topic that combines nouns, verbs and adjectives from that page
   into sentences. Fits "static mini-drills derived from existing reference
   pages".
6. **MemoryTip guidance (P1).** Add one rule to `content-didactics.md` under
   `MemoryTip`: prefer a concrete, vivid or funny hook over a restated rule.
   Apply in the normal audit flow, not as a separate sweep.
7. **Pronunciation imitation (A6).** One short section in
   `pronunciation-basics.mdx`: watch and copy native speakers' mouth
   movements. Revisit together with Phase 8 audio.

## Open decisions

- **D1 — Images instead of translation (P5, A7).** The project explains rules
  through German/English/Swedish comparison. Options: (a) ignore the tip;
  (b) add images only to vocabulary pages; (c) add a learner tip that
  recommends picturing words while keeping the comparisons. Recommendation:
  (c) now, (b) only with a licensing-clean image source.
- **D2 — Where items 2–4 live.** New pages under `learn/swedish/` vs. sections
  in existing pages. Affects sidebar, length budget and translations to `de`
  and `sv` meta locales.
- **D3 — Study-habit advice (add-ons).** Sleep, movement and time of day are
  generic, not Swedish-specific. Options: skip, or one short "How to study"
  section on the learning path. Recommendation: skip unless a reader asks.
- **D4 — Planning home.** This file is the intake. If items are accepted,
  move them into `docs/roadmap.md` or `docs/audit/`, and leave a pointer here.
