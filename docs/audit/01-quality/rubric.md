# Rubric

Calibrated on the pilot (`ledgers/P0.md`). Applies to every batch. Where
`docs/rules/` and this rubric disagree, the rule wins.

## Reader

12 years and older, with school grammar. The reader can look things up, but
must not need to in order to follow the page.

The rules for this live in `docs/rules/content-didactics.md`: "A page
carries itself", "Natural language", "Grammar terms", "Intro", "KeyTakeaway"
and "Titles, headings and labels". Record every term that needs an
explanation in `terms.md`.

**The first question for every page** — before any rule check:

> Reading only this page, without following a link, can a 12-year-old
> explain the rule in their own words and answer the QuickCheck?

If not, name what is missing on the page. That finding outranks every
finding about form. Length is never a finding by itself.

## Dimensions

| Dim | Question | Typical findings |
| --- | --- | --- |
| C1 Comprehensibility | Can a 12-year-old understand the topic from this page alone? | prerequisite neither known nor explained on the page; technical term where a school term exists; intro that defines but neither shows nor motivates; abstract sentence without example; academic register; project vocabulary (frontmatter, canonical, route) |
| N Natural language & labels | Does it read as written by a native speaker, and does every title, heading, sidebar entry, card and link label say what it leads to? | machine patterns from "Natural language" (imperative fragments, dropped articles, fragment headings, clever framing, English structure); abbreviation as title (`BIFF`, `V2`); link description that repeats the label |
| C2 Correctness | Is every rule, form and example right and natural — in the learning language and in each comparison language? | wrong example; a table cell under a field label it contradicts; missing core transfer error; a comparison that does not show what its title claims |
| C3 Consistency | Same thing, same name, same explanation? | term spelled or named differently; two "defaults"; label casing |
| C4 Didactics | Does the structure teach? | page order; QuickCheck asks for untaught material; same mistake taught several times; missing form table |
| C5 Rules & layers | `docs/rules/` beyond the automated checks; layer separation | unmarked foreign text; metadata that claims a comparison the page lacks |
| T Translation | Mirrors only. Same answer as canonical, in natural, plain meta language? | calques and stiff register; meta-language term left unexplained |

## Severity and verdict

| Severity | Meaning |
| --- | --- |
| S1 | Wrong or misleading. The learner learns something false. |
| S2 | Hinders understanding or blocks the page's purpose. |
| S3 | Polish. |

| Verdict | Condition |
| --- | --- |
| `pass` | No S1 or S2. S3 findings stay open for the fix pass. |
| `fix` | At least one S1 or S2, fixable inside the existing structure. |
| `rewrite` | Core content is missing (forms, examples, the main rule), or the structure must change. |

## Recording rules

- **Systemic first.** A pattern already in `systemic.md` is referenced by
  its ID, not recorded again per page.
- **Mirrors.** A mirror inherits every canonical finding. Record only what
  the translation adds: dimension `T`, and C1 in the meta language.
- **Correctness needs evidence.** For a C2 finding, name the correct form
  and, where it is not obvious, the source (SAOL, SAG, Duden, Cambridge).
- **N needs a human.** The auditor — an AI — is weakest at spotting
  machine-made text. Every `de` batch ends with a native reader checking 2–3
  of its pages; their notes are recorded as findings with the source
  `human`. No such reviewer exists for `sv` yet; record that risk per
  `V` batch instead of claiming a pass on N.
- **Benchmarks.** `learn/swedish/vocabulary/family-and-relatives.mdx` and
  `learn/english/grammar/verbs-time-forms/present-perfect.mdx` show the
  target level.
- **Out of scope** goes to `backlog.md`; a rule that blocks quality goes to
  `rule-proposals.md`.
