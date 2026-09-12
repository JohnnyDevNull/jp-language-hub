# Content Didactics

Rules for how a reference page teaches, not for what metadata it carries. For
frontmatter fields and the tag vocabulary see
[`content-metadata.md`](content-metadata.md).

The hub is a reference first: a page must answer a lookup in seconds and still
reward someone who reads it fully. Both goals fail the same way — through walls
of text.

## Standard page order

Use this order and omit what a page does not need. Never add an empty section
for symmetry.

1. `<KeyTakeaway>` — the first block on the page, before any prose.
2. `<TagList>` — the page's level and tags, passed straight from the
   frontmatter as `levels={frontmatter.levels} tags={frontmatter.tags}`.
3. Intro prose, one to three sentences.
4. `## Use this now` or another fast decision path, where a practical lookup
   page benefits from an immediate action layer.
5. `## Core rule` — the rule itself, plus a `<SentenceSchema>` where the rule is
   about positions in a clause.
6. Topic sections.
7. `## Direct comparison` — one `<LanguageComparison>` per compared meaning.
8. `<MistakeBox>` for the typical transfer error.
9. `<SpecialRule>` where Swedish deviates from both German and English.
10. `<MemoryTip>` for the one thing worth memorizing.
11. `<QuickCheck>` — the self-check, always directly before the related topics.
12. `<RelatedTopics>` — the last block.

Index pages — the learning path and the important-rules page — carry no
`<TagList>`: their own pills would link back to themselves. Cheat sheets are
plain Markdown and cannot render it at all.

Use the fast decision path for pages where the learner needs to choose a form,
phrase, or pattern quickly before reading the full explanation. Keep it short
and practical; do not use it to duplicate the full rule.

## KeyTakeaway

One to three bullets, each a full statement a learner could repeat from memory.
It replaces neither the intro nor the core rule: it is the answer a returning
learner needs without reading anything else.

Do not restate the page title, do not tease ("read on to learn…"), and do not
exceed three bullets. If a page needs four, it is really two pages.

## TagList

A pill becomes a link only where an index page can answer it: the CEFR levels
point at the learning path, and `important` points at the important-rules page,
which is generated from that tag. Every other tag stays a plain pill, because a
link that leads nowhere is worse than no link.

That is also the test for a new tag. If no index could ever be built on it, it
classifies nothing a reader can act on.

## QuickCheck

Two to four items per page. Each item is one prompt and one short answer,
revealed through the native disclosure — the answer is a form or a sentence, not
an explanation.

Test production, not recognition: ask for a form, a correction, or a rewritten
sentence. Never ask for something the page did not teach, and never write a
prompt whose answer is a paragraph.

Practice pages may go further. A reference page carries a self-check, not an
exercise set.

## LanguageComparison

Every explicit German/English/Swedish comparison uses `<LanguageComparison>`.
Do not hand-build a comparison table in Markdown: the component keeps the
`🇩🇪 → 🇬🇧 → 🇸🇪` order, marks each column with the right `lang`, carries the
language colors, and stacks on narrow viewports where a four-column table does
not.

One component per compared meaning. When a page compares several functions, use
the component's `title` for the function ("Neutral order", "Time first") and
stack the blocks.

A Markdown table stays correct for data that is not a language comparison —
form paradigms, endings, vowel pairs.

## SentenceSchema

Use it for every rule about position in the clause: V2, inversion, BIFF, the
placement of `inte`, and subordinate word order. Fields as columns, sentence
variants as rows. Where German shares the pattern, add a German row with
`lang: 'de'` — the parallel is the point.

Keep cell content short enough to stay readable without wrapping, and leave a
field empty when the sentence does not fill it.

## Marking Swedish text

In `.mdx`, wrap inline Swedish in `<Sv>`. In plain `.md` — the cheat sheets —
components are unavailable, so `<span lang="sv">` stays correct there.

Mark German and English examples with `lang="de"` and `lang="en"` directly; the
comparison and schema components do this for their own content.

## Translating Reference Pages

Translate for didactic equivalence, not literal sentence-by-sentence matching.
The translated page should preserve the same answer, route through the topic,
examples, warnings, self-checks, and related-topic intent as the canonical
English source.

Translate page titles, descriptions, headings, prose, visible helper labels,
card text, related-topic labels, and quick-check prompts. Keep Swedish example
sentences and forms in Swedish, still marked with `<Sv>` in MDX.

Do not use a Swedish meta-language translation to add extra Swedish-learning
content that does not exist in the canonical learning tree. New learning
topics belong in the root-locale source first, then translations can mirror
them.

## Length budget

A reference page targets at most **1000 rendered words**.

The budget counts what a reader reads, not what an author types: frontmatter,
imports and component markup do not count. Measure it with

```bash
npm run build && npm run report:length
```

which reads the rendered article body, marks pages over budget, measures
authored localized pages, and ignores only Starlight fallback locale routes
that render the same English source.

Over budget, split the page only when it holds two concepts that a learner
would look up independently — then each part gets its own route, title and
`related` links. If the content is one concept, keep it in one file and record
it below. A page that has to be read as a whole is not improved by cutting it in
half.

Length is not an excuse for a wall of text either way. Under budget, a page can
still be unreadable: break prose with a schema, a comparison, a paradigm table
or a callout at least every few paragraphs.

### Documented exceptions

| Page | Rendered words | Why it stays in one file |
| --- | --- | --- |
| `grammar/verb-patterns-voice/particle-verbs` | 1480 | Loose and bound particles are the same rule seen from two sides, the frequency glossary is the page's lookup value, and the practical entry path keeps the long page usable. A learner who consults one needs the other on the same page. |
| `grammar/adjectives-adverbs/agreement` | 1306 | Agreement and double definiteness form one paradigm. `en-ett` deep-links into its definite section, and the practical decision path prevents the exception list from becoming the entry point. |
| `grammar/prepositions-function-words/prepositions` | 1172 | A survey page whose value is the collected contrast with German and the practical decision path for place, direction, time, and fixed phrases; splitting it by preposition would produce stubs. |
| `grammar/nouns-articles/en-ett` | 1219 | Gender, ending signals and the compound rule are one lookup, and the fast decision path makes the longer page usable for real noun choices. Nobody needs the endings without the rule they serve. |
| `learning-path` | 1220 | This is an index route, not a single reference page. The ordered map now includes practical situation, vocabulary, S1-S4 grammar integration, and B2 report/conditional routes so learners can choose between grammar-first and situation-first paths without leaving the page. |
| `de/learn/swedish/learning-path` | 1117 | Authored meta-language mirror of the canonical Learning Path; it preserves the same route structure, B2 additions, and learner choices rather than falling back to the English source. |
| `sv/learn/swedish/learning-path` | 1101 | Authored meta-language mirror of the canonical Learning Path; it preserves the same route structure, B2 additions, and learner choices rather than falling back to the English source. |

Add a row when a page crosses the budget for a real reason. Do not add one to
avoid editing.
