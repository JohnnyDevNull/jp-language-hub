# jp-language-hub — Implementation Plan

## 0. Agent Directive

Implement this project autonomously.

Repository/project name:

```text
jp-language-hub
```

Expected local path:

```text
~/Projects/GitHub/jp-language-hub
```

Before changing anything:

1. Inspect the existing directory.
2. Read `AGENTS.md` if present.
3. Read this `IMPLEMENTATION_PLAN.md`.
4. Inspect existing Git state and files.
5. Preserve useful existing work.
6. Do not overwrite user-created files without reason.

Do not ask for clarification when a reasonable technical decision can be made autonomously.

When uncertain:

> Choose the simplest, maintainable, current, Astro/Starlight-idiomatic solution.

Use current stable versions of Astro and Starlight that are mutually compatible.

If package APIs or setup instructions have changed, verify the current official documentation and adapt the implementation instead of following outdated syntax literally.

After significant implementation steps run:

```bash
npm run build
```

Before finishing:

```bash
git status
```

The final project must build successfully.

---

# 1. Project Goal

Build a personal static language reference called:

```text
jp-language-hub
```

Languages:

```text
🇩🇪 Deutsch
🇬🇧 English
🇸🇪 Svenska
```

The project is primarily:

```text
language reference
knowledge base
cheat-sheet system
learning support
```

It is explicitly not primarily:

```text
a traditional language course
a gamified learning application
a Duolingo clone
```

The website must support:

- grammar reference
- vocabulary
- sentence structures
- language-specific rules
- common mistakes
- direct DE/EN/SE comparison
- cheat sheets
- reusable sentence patterns
- later practice functionality

The website must be optimized for:

- quick lookup
- clear explanations
- practical examples
- mobile use
- structured comparison
- maintainability
- static deployment
- future extension

---

# 2. Learning Context

Primary language:

```text
German
```

German is the reference language.

Current approximate English level:

```text
B1–B2
```

Current approximate Swedish level:

```text
A1–A2
```

Primary learning focus:

```text
Swedish
```

Important current Swedish learning areas:

- basic sentence structure
- V2
- subordinate clauses
- BIFF
- word order
- vocabulary
- noun forms
- en / ett
- definite and indefinite forms
- adjective agreement
- adjective comparison
- verb forms
- verb groups
- pronouns
- everyday sentence patterns

The architecture must nevertheless treat German, English and Swedish as first-class reference languages.

---

# 3. Core Learning Principle

Do not maintain three isolated language courses.

Build one interconnected reference system.

Prefer direct comparisons such as:

```text
🇩🇪 Ich habe ein Auto.
🇬🇧 I have a car.
🇸🇪 Jag har en bil.
```

And:

```text
🇩🇪 Ich hatte ein Auto.
🇬🇧 I had a car.
🇸🇪 Jag hade en bil.
```

And:

```text
🇩🇪 Ich habe gekauft.
🇬🇧 I have bought.
🇸🇪 Jag har köpt.
```

Use German as the primary explanation/reference language.

Use English as an additional bridge to Swedish where useful.

Explicitly highlight structural similarities and differences.

Do not force artificial 1:1 equivalence between languages.

Example:

```text
🇬🇧 I'm working right now.
🇩🇪 Ich arbeite gerade.
🇸🇪 Jag jobbar just nu.
```

Explain that English uses a progressive construction while German and Swedish usually express this differently.

---

# 4. Technology Stack

Use:

```text
Astro
Astro Starlight
Markdown / MDX
Astro Content Collections
HTML
CSS
TypeScript where useful
minimal Vanilla JavaScript
Git
GitHub Actions
GitHub Pages
```

Architecture must remain static-first.

Do not introduce:

```text
React
Vue
Svelte
Tailwind
large UI frameworks
large component libraries
external application backends
databases
```

unless there is a concrete technical requirement that cannot reasonably be solved using Astro/Starlight.

Prefer static HTML rendered by Astro.

Use client-side JavaScript only when required for functionality such as:

- small interactive filters
- future exercises
- minor progressive enhancement

Do not convert the project into an SPA.

---

# 5. Astro Starlight

Use Astro Starlight as the primary documentation and knowledge-base framework.

Use Starlight features instead of recreating them manually whenever possible.

Prefer Starlight for:

- documentation layout
- sidebar
- navigation
- mobile navigation
- page table of contents
- search
- Markdown/MDX rendering
- dark/light mode
- documentation structure
- pagination where appropriate

Do not build replacement systems for these features unless Starlight cannot satisfy a concrete requirement.

---

# 6. Theme

Use Starlight's default theme as the visual foundation.

Customize Starlight subtly with project-specific CSS so that the site develops
its own language-reference identity while retaining a professional
documentation appearance.

Do not add a third-party theme unless a concrete design requirement justifies
the additional dependency. A compatible theme may be evaluated later.

The final visual direction should feel like:

```text
Starlight
+
modern documentation
+
personal knowledge base
+
language reference
```

Avoid:

```text
gamification-first design
cartoon visuals
large decorative illustrations
excessive gradients
large animations
visual clutter
bright full-screen language colors
```

---

# 7. Deployment

Host the site on:

```text
GitHub Pages
```

Deploy using:

```text
GitHub Actions
```

Use the current official Astro-recommended GitHub Pages deployment approach.

Deployment flow:

```text
local changes
↓
git commit
↓
git push
↓
GitHub Actions
↓
Astro build
↓
GitHub Pages
```

Primary branch:

```text
main
```

The GitHub Actions workflow should support:

```text
push to main
workflow_dispatch
```

Commit the package manager lockfile.

---

# 8. GitHub Pages Base Path

Expected project-page URL:

```text
https://<username>.github.io/jp-language-hub/
```

Configure Astro appropriately using:

```text
site
base
```

Expected base:

```text
/jp-language-hub
```

Do not assume the GitHub username if it can be discovered automatically.

Try to discover repository/user information through:

- existing Git remote
- authenticated GitHub CLI
- repository metadata

If the repository does not yet exist and GitHub CLI is authenticated, create:

```text
jp-language-hub
```

Default repository visibility:

```text
public
```

If GitHub authentication is unavailable:

- prepare the local project completely
- prepare the deployment workflow
- document the remaining manual GitHub step
- do not block local implementation

All internal links and assets must work correctly under the GitHub Pages base path.

Do not use broken root-relative links.

---

# 9. Information Architecture

Top-level user-facing areas:

```text
Home
Grammar
Vocabulary
Language-specific Rules
Common Mistakes
Cheat Sheets
Practice
```

Practice is secondary and may initially be a placeholder.

The primary product is the reference system.

---

# 10. Grammar Master Structure

## A. Sentence Structure

Topics:

1. basic word order
2. declarative sentences
3. yes/no questions
4. question-word questions
5. negation
6. V2
7. inversion
8. subordinate clauses
9. BIFF
10. relative clauses
11. complex sentence structures

Swedish priority topics:

```text
V2
inversion
inte placement
subordinate clause word order
BIFF
```

---

## B. Verbs

Topics:

1. infinitive
2. imperative
3. present
4. preterite / past
5. perfect
6. pluperfect
7. future constructions
8. conjugation
9. Swedish verb groups
10. regular verbs
11. irregular verbs
12. modal verbs
13. passive
14. reflexive verbs
15. Swedish particle verbs
16. English phrasal verbs
17. supine
18. participles

Do not assume that tense systems map directly between all three languages.

Explain functional differences.

---

## C. Nouns & Articles

Topics:

1. gender
2. articles
3. singular
4. plural
5. indefinite form
6. definite form
7. genitive
8. compound nouns
9. English countable / uncountable nouns
10. Swedish plural groups

Swedish noun morphology must receive detailed treatment.

---

## D. Adjectives & Adverbs

Topics:

1. base form
2. adjective agreement
3. gender agreement
4. number agreement
5. indefinite form
6. definite form
7. comparative
8. superlative
9. irregular comparison
10. adverbs
11. sentence adverbs

Important Swedish pattern:

```text
en stor bil
ett stort hus
stora bilar

den stora bilen
det stora huset
de stora bilarna
```

---

## E. Pronouns & Function Words

Topics:

1. personal pronouns
2. possessive pronouns
3. reflexive pronouns
4. demonstrative pronouns
5. relative pronouns
6. interrogative pronouns
7. prepositions
8. conjunctions
9. question words
10. quantity expressions
11. sentence adverbs
12. Swedish `sin / sitt / sina`
13. Swedish `hans / hennes / deras`
14. Swedish `de / dem / dom`
15. Swedish `man / en`

---

# 11. Sentence Patterns / Active Communication

Create a dedicated area for reusable sentence patterns.

Topics:

1. expressing opinions
2. agreeing
3. disagreeing
4. expressing uncertainty
5. asking follow-up questions
6. explaining something
7. giving reasons
8. comparing
9. giving examples
10. making assumptions
11. expressing conditions
12. continuing a conversation
13. changing topics
14. interrupting politely
15. summarizing

Example:

```text
🇩🇪 Ich glaube, dass ...
🇬🇧 I think that ...
🇸🇪 Jag tror att ...
```

Further examples:

```text
🇩🇪 Ich bin mir nicht sicher, ob ...
🇬🇧 I'm not sure if ...
🇸🇪 Jag är inte säker på om ...
```

```text
🇩🇪 Es kommt darauf an ...
🇬🇧 It depends ...
🇸🇪 Det beror på ...
```

```text
🇩🇪 Soweit ich weiß ...
🇬🇧 As far as I know ...
🇸🇪 Så vitt jag vet ...
```

This area is important because fluent communication requires reusable constructions, not only isolated vocabulary.

---

# 12. Vocabulary Structure

Organize vocabulary primarily by real-life domain.

Top-level domains:

1. basic vocabulary
2. home
3. food
4. shopping
5. transport
6. travel
7. people & relationships
8. leisure
9. small talk
10. feelings & opinions
11. society
12. everyday life in Sweden
13. work
14. meetings
15. business communication
16. advanced business

CEFR level is metadata, not the primary navigation structure.

---

# 13. CEFR Metadata

Where meaningful, content may have one or more CEFR levels:

```text
A1
A2
B1
B2
C1
```

Do not force an exact level onto content where doing so would be artificial.

---

# 14. Common Mistakes

Create:

```text
Common Mistakes
```

Subcategories:

```text
DE → EN
DE → SE
EN → SE
False Friends
Direct Translation Errors
```

Focus particularly on:

- literal translations
- word order transfer
- wrong prepositions
- false friends
- article mistakes
- en/ett mistakes
- adjective agreement
- tense transfer
- pronoun confusion

Example:

```text
🇩🇪 warten auf
🇬🇧 wait for
🇸🇪 vänta på
```

Do not teach prepositions as isolated direct translations where usage depends on collocation.

---

# 15. Language-specific Rules

Create a dedicated:

```text
Language-specific Rules
```

section.

This section is supplementary.

Canonical full explanations remain in their appropriate grammar topic.

Language-specific pages should:

- summarize important special behavior
- provide quick reference
- link to canonical explanations
- avoid duplicating long independent explanations

## German

Include:

- four cases
- three grammatical genders
- article declension
- strong adjective declension
- weak adjective declension
- mixed adjective declension
- separable verbs
- verb-final subordinate clauses
- two-way prepositions

## English

Include:

- simple vs progressive
- do-support
- Present Perfect vs Simple Past
- gerund vs infinitive
- countable vs uncountable
- some / any
- phrasal verbs
- article usage
- irregular verbs

## Swedish

Treat especially thoroughly:

- en / ett
- indefinite form
- definite form
- definite suffixes
- double definiteness
- plural groups
- adjective agreement
- adjective comparison
- V2
- inversion
- BIFF
- `inte` placement
- verb groups
- supine
- particle verbs
- `sin / sitt / sina`
- `hans / hennes / deras`
- `man / en`
- `de / dem / dom`
- `vara / bli`
- common preposition patterns

---

# 16. Cheat Sheets

Create compact quick-reference pages.

Initial targets:

```text
Swedish en / ett
Swedish noun forms
Swedish adjective agreement
Swedish adjective comparison
Swedish V2
Swedish BIFF
Swedish V2 + BIFF
Swedish pronouns
Swedish verb groups
Swedish verb forms
DE/EN/SE personal pronouns
DE/EN/SE possessive pronouns
DE/EN/SE tense comparison
common irregular verbs
```

Cheat sheets must be:

- compact
- visually scannable
- usable on mobile
- mostly self-contained
- linked to detailed reference pages

Do not turn cheat sheets into long articles.

---

# 17. Content Granularity

Prefer small, focused topics.

Good:

```text
en-ett
definite-form
plural-groups
adjective-agreement
adjective-comparison
v2
biff
sin-sitt-sina
```

Avoid monolithic pages such as:

```text
all-swedish-grammar
```

Each primary reference page should explain one clearly defined concept.

---

# 18. Standard Reference Page Structure

Use a consistent structure where applicable:

```text
Title
Summary
Level
Tags

Core Rule
German
English
Swedish
Direct Comparison
Examples
Common Mistakes
Language-specific Notes
Memory Tip
Related Topics
```

Not every section is mandatory on every page.

Do not add empty or meaningless sections merely for consistency.

---

# 19. Language Comparison Order

Preferred order:

```text
🇩🇪 Deutsch
🇬🇧 English
🇸🇪 Svenska
```

German is the primary reference language.

English often functions as a bridge.

Swedish usually receives the most detailed explanation where the feature is especially relevant to Swedish.

Do not artificially give all three languages equal space when one language needs significantly more explanation.

---

# 20. Single Source of Truth

Avoid maintaining the same long explanation independently in several locations.

Example concept:

```text
en / ett
```

Canonical explanation:

```text
Grammar → Nouns & Articles → en / ett
```

Other areas may contain:

```text
Special Rules → Swedish → en / ett summary
Cheat Sheets → en / ett quick reference
Adjective Agreement → link to en / ett
```

These should summarize or link to the canonical content.

Apply the same principle to:

- V2
- BIFF
- definite forms
- adjective agreement
- sin/sitt/sina
- verb groups
- other cross-linked concepts

---

# 21. Related Topics

Reference pages should expose meaningful related topics.

Example:

```text
en / ett

Related Topics:
→ Definite Form
→ Swedish Plural Groups
→ Adjective Agreement
→ Swedish Articles
```

Use stable slugs.

Keep related-topic metadata maintainable.

---

# 22. Tags

Support structured tags.

## Language

```text
DE
EN
SE
```

## CEFR

```text
A1
A2
B1
B2
C1
```

## Categories

Examples:

```text
grammar
vocabulary
sentence-structure
verbs
nouns
adjectives
pronouns
prepositions
business
daily-life
smalltalk
```

## Properties

Examples:

```text
important
common-mistake
irregular
cheat-sheet
swedish-specific
english-specific
german-specific
```

Do not create an uncontrolled tag explosion.

Prefer a small documented vocabulary of tags.

---

# 23. Vocabulary Data Model

Vocabulary must not be stored merely as translation pairs.

Avoid:

```text
bil = Auto
```

Prefer structured data.

Example:

```yaml
id: bil
wordClass: noun

swedish:
  lemma: bil
  gender: en
  forms:
    indefiniteSingular: en bil
    definiteSingular: bilen
    indefinitePlural: bilar
    definitePlural: bilarna

german:
  lemma: Auto

english:
  lemma: car

levels:
  - A1

tags:
  - transport
  - noun
  - en-word
  - daily-life
```

Where useful include:

- example sentences
- collocations
- common mistakes
- synonyms
- usage notes
- register

---

# 24. Swedish Noun Model

For Swedish nouns store where applicable:

```text
lemma
gender: en | ett
indefinite singular
definite singular
indefinite plural
definite plural
plural group if useful
```

Example:

```text
bil
en
en bil
bilen
bilar
bilarna
```

Display noun forms together whenever practical.

---

# 25. Verb Data Model

For Swedish verbs store where applicable:

```text
infinitive
imperative
present
preterite
supine
perfect
verb group
```

Example:

```yaml
id: kopa
wordClass: verb

swedish:
  infinitive: köpa
  imperative: köp
  present: köper
  preterite: köpte
  supine: köpt
  perfect: har köpt
  verbGroup: 2

german:
  infinitive: kaufen

english:
  infinitive: buy
  past: bought
  pastParticiple: bought

levels:
  - A1

tags:
  - verb
  - daily-life
```

Do not assume German, English and Swedish verb morphology use identical field sets.

Use language-appropriate fields.

---

# 26. Adjective Data Model

For Swedish adjectives store where applicable:

```text
base / en-form
ett-form
plural
definite
comparative
superlative
```

Example:

```yaml
id: stor

swedish:
  base: stor
  en: stor
  ett: stort
  plural: stora
  definite: stora
  comparative: större
  superlative: störst

german:
  lemma: groß

english:
  lemma: big
```

---

# 27. Prepositions and Collocations

Do not teach prepositions mainly as isolated translations.

Prefer construction-based data.

Example:

```text
🇩🇪 warten auf
🇬🇧 wait for
🇸🇪 vänta på
```

Another example:

```text
🇩🇪 denken an
🇬🇧 think about / think of
🇸🇪 tänka på
```

Show differences in:

- meaning
- required preposition
- register
- common contexts

---

# 28. Search

Use Starlight's integrated search first.

Do not implement a separate search engine unless a concrete limitation is demonstrated.

Search should make relevant content discoverable through:

- page title
- headings
- rendered text
- vocabulary
- translations
- word forms
- verb forms
- tags where feasible

Structured vocabulary and morphology should be rendered/indexable enough that searches for inflected forms can lead to the correct reference.

Example query:

```text
köpt
```

Should ideally lead to:

```text
köpa
Supine
Perfect
Swedish verb forms
```

Example query:

```text
sitt
```

Should ideally lead to:

```text
sin / sitt / sina
reflexive possessives
related pronoun content
```

Only add custom static search/index generation if Starlight's built-in search is demonstrably insufficient.

---

# 29. Design System

Use Starlight's default design system as the base.

Keep the interface:

- clean
- calm
- modern
- documentation-like
- highly readable
- structured
- professional
- restrained

Use CSS Custom Properties for custom design tokens.

Prefer Starlight variables where practical.

Do not fight Starlight's existing design system unnecessarily.

---

# 30. Language Color System

Use subtle language accents.

Suggested direction:

```css
:root {
  --color-language-de: #d9a441;
  --color-language-en: #4f7cff;
  --color-language-se: #4db6c9;
}
```

Meaning:

```text
German  → warm gold / yellow
English → medium blue
Swedish → light blue / turquoise
```

Use language colors for:

- language labels
- language cards
- language badges
- thin borders
- small accents
- comparison tables
- vocabulary cards
- filters if later added

Do not use them for:

- entire page backgrounds
- all headings
- entire navigation
- large buttons
- large decorative areas

Language identification must never rely on color alone.

Use visible labels:

```text
🇩🇪 Deutsch
🇬🇧 English
🇸🇪 Svenska
```

---

# 31. Semantic Content Colors

Create restrained semantic styling.

Suggested meaning:

```text
Rule
→ neutral

Example
→ subtle neutral background

Memory Tip
→ green accent

Common Mistake
→ red accent

Language-specific Rule
→ violet accent
```

Use these colors for orientation, not decoration.

Ensure adequate contrast in both light and dark mode.

---

# 32. Dark Mode

Use Starlight's existing dark/light mode support.

Do not build a parallel theme engine.

All custom components must work in:

```text
light mode
dark mode
```

Prefer:

- Starlight CSS variables
- project CSS variables
- relative color treatment

Avoid hard-coded colors that only work on white backgrounds.

Explicitly test:

- language cards
- RuleBox
- ExampleBox
- MistakeBox
- MemoryTip
- SpecialRule
- tables
- code blocks
- links
- badges
- focus states

---

# 33. LanguageComparison Component

Create a reusable Astro component:

```text
LanguageComparison
```

This is one of the most important custom components.

Desktop concept:

```text
┌────────────────────┬────────────────────┬────────────────────┐
│ 🇩🇪 Deutsch        │ 🇬🇧 English        │ 🇸🇪 Svenska        │
│ gold accent        │ blue accent        │ turquoise accent   │
├────────────────────┼────────────────────┼────────────────────┤
│ ...                │ ...                │ ...                │
└────────────────────┴────────────────────┴────────────────────┘
```

Mobile:

```text
🇩🇪 Deutsch
...

🇬🇧 English
...

🇸🇪 Svenska
...
```

Requirements:

- responsive
- no mandatory horizontal scrolling for normal content
- semantic HTML
- usable in MDX
- language accent colors
- light/dark compatible
- visually consistent with Starlight

Prefer subtle accents such as:

- thin top border
- thin left border
- small badge
- very subtle tinted background

Do not use strong full-card saturation.

---

# 34. Reusable Components

Implement reusable components where useful.

Priority components:

```text
LanguageComparison
RuleBox
ExampleBox
MistakeBox
MemoryTip
SpecialRule
VocabularyCard
VerbTable
NounForms
AdjectiveForms
TagList
RelatedTopics
```

Use Starlight-native functionality where it already provides an equivalent component.

Do not create custom:

```text
Breadcrumbs
PageNavigation
Sidebar
TableOfContents
Search
```

unless Starlight's existing implementation cannot meet the requirement.

---

# 35. Component Behavior

## RuleBox

Purpose:

```text
important grammar rule
```

Style:

- neutral
- compact
- visually clear

## ExampleBox

Purpose:

```text
example sentence or construction
```

Style:

- subtle background
- highly readable

## MistakeBox

Purpose:

```text
common incorrect construction
```

Example:

```text
❌ Idag jag köper en bil.
✅ Idag köper jag en bil.
```

Style:

- subtle red accent
- correction immediately visible

## MemoryTip

Purpose:

```text
short memorable learning rule
```

Style:

- green accent
- compact

## SpecialRule

Purpose:

```text
language-specific behavior
```

Style:

- violet accent

## VocabularyCard

Example:

```text
🇸🇪 en bil

bilen
bilar
bilarna

🇩🇪 Auto
🇬🇧 car
```

## VerbTable

Example:

```text
Infinitive:  köpa
Imperative:  köp
Present:     köper
Preterite:   köpte
Supine:      köpt
Perfect:     har köpt
```

## NounForms

Example:

```text
en bil
bilen
bilar
bilarna
```

## AdjectiveForms

Example:

```text
stor
stort
stora
större
störst
```

---

# 36. Mobile-first Design

The website will often be used for quick reference on a phone.

Design mobile-first.

Desktop may display DE/EN/SE in three columns.

Mobile should stack content cleanly.

Avoid standard-content horizontal scrolling.

Tables that cannot reasonably collapse must remain usable through an appropriate responsive strategy.

Ensure:

- comfortable touch targets
- readable font sizes
- short scan paths
- obvious hierarchy
- useful sticky/navigation behavior inherited from Starlight where appropriate

---

# 37. Accessibility

Minimum requirements:

- semantic HTML
- correct heading hierarchy
- keyboard navigation
- visible focus states
- sufficient contrast
- descriptive link text
- accessible tables
- language labels not represented by color alone

Use ARIA only when native semantics are insufficient.

Do not degrade accessibility when customizing Starlight.

---

# 38. Performance

Optimize for static performance.

Prefer:

```text
HTML
CSS
Astro server/build rendering
```

over client JavaScript.

Avoid:

- unnecessary hydration
- large dependencies
- remote font dependencies
- CDN-only resources
- heavy animation
- oversized images
- unnecessary third-party scripts

The core reference must function without external services.

---

# 39. Offline-friendly Architecture

Do not require external runtime dependencies for normal reference usage.

Avoid external:

```text
fonts
CDNs
UI libraries
analytics dependencies
APIs
```

unless explicitly added later.

A full PWA/service worker is not part of MVP.

Do not build one now.

---

# 40. Recommended Content Structure

Use the current idiomatic Starlight structure generated/recommended by the installed version.

Do not force an outdated directory layout.

Expected logical structure:

```text
jp-language-hub/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   └── docs/
│   │       ├── grammar/
│   │       ├── vocabulary/
│   │       ├── language-specific-rules/
│   │       ├── common-mistakes/
│   │       ├── cheat-sheets/
│   │       └── practice/
│   │
│   ├── data/
│   │   ├── vocabulary/
│   │   └── verbs/
│   │
│   └── styles/
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── AGENTS.md
├── IMPLEMENTATION_PLAN.md
└── README.md
```

Actual Starlight-generated config filenames may differ depending on the current version.

Follow the current idiomatic project structure.

Do not create custom layouts or page routing unnecessarily.

---

# 41. Navigation Structure

Configure the Starlight sidebar logically.

Target structure:

```text
Home

Grammar
├── Sentence Structure
├── Verbs
├── Nouns & Articles
├── Adjectives & Adverbs
└── Pronouns & Function Words

Vocabulary
├── Basic Vocabulary
├── Home
├── Food
├── Shopping
├── Transport
├── Travel
├── People & Relationships
├── Leisure
├── Small Talk
├── Feelings & Opinions
├── Society
├── Everyday Sweden
├── Work
├── Meetings
├── Business Communication
└── Advanced Business

Language-specific Rules
├── German
├── English
└── Swedish

Common Mistakes

Cheat Sheets

Practice
```

Do not create empty navigation clutter.

If a large section has no content yet, use a useful overview page rather than dozens of empty placeholders.

---

# 42. Home Page

Home should communicate immediately what the project is.

Use:

```text
jp-language-hub
Deutsch · English · Svenska
```

Short description:

```text
A personal language reference for German, English and Swedish.
```

Primary cards/links:

```text
Grammar
Vocabulary
Language-specific Rules
Common Mistakes
Cheat Sheets
Practice
```

Also provide a prominent:

```text
Swedish Basics
```

or equivalent entry point because Swedish is currently the primary learning focus.

Potential quick links:

```text
en / ett
V2
BIFF
Definite Forms
Adjective Agreement
Verb Forms
```

Do not overload the homepage.

---

# 43. Initial Content

MVP must contain real useful content.

Do not ship only placeholders.

Create at least the following complete reference content.

## Sentence Structure

```text
Swedish basic word order
Swedish V2
Swedish inversion
Swedish BIFF
inte placement
```

## Nouns

```text
Swedish en / ett
Swedish indefinite and definite noun forms
Swedish plural overview
```

## Adjectives

```text
Swedish adjective agreement
Swedish adjective comparison
```

## Verbs

```text
Swedish verb forms
Swedish present
Swedish preterite
Swedish perfect
basic Swedish verb-group overview
```

## Pronouns

At least:

```text
sin / sitt / sina
```

## Language-specific Rules

At least summaries for:

```text
Swedish en / ett
Swedish V2 + BIFF
Swedish sin / sitt / sina
```

## Cheat Sheets

At least:

```text
en / ett + adjective endings
V2 + BIFF
Swedish noun forms
Swedish verb forms
```

---

# 44. Initial en / ett Content

Create a complete reference page.

Metadata concept:

```text
Title:
Swedish en / ett

Level:
A1

Languages:
SE

Tags:
grammar
noun
important
swedish-specific
```

Explain that Swedish nouns primarily use:

```text
en
ett
```

Examples:

```text
en bil
ett hus
```

Definite:

```text
bilen
huset
```

Adjective agreement:

```text
en stor bil
ett stort hus
```

Plural:

```text
stora bilar
stora hus
```

Definite adjective constructions:

```text
den stora bilen
det stora huset
de stora bilarna
```

Include:

- clear rule
- examples
- common mistakes
- memory tip
- connection to adjective agreement
- connection to definite forms
- related topics

Do not imply that en/ett can always be predicted reliably from meaning.

Where useful, recommend learning Swedish nouns together with their article.

---

# 45. Initial V2 Content

Explain the Swedish V2 rule clearly.

Example:

```text
Jag köper en bil idag.
```

Fronted time expression:

```text
Idag köper jag en bil.
```

Incorrect:

```text
❌ Idag jag köper en bil.
```

Correct:

```text
✅ Idag köper jag en bil.
```

Core explanation:

> In a Swedish main clause, the finite verb normally occupies the second sentence position.

Explain that "position" means sentence constituent, not necessarily second individual word.

Compare with German where useful.

---

# 46. Initial BIFF Content

Explain:

```text
BIFF
Bisats Inte Före Finit
```

Main clause:

```text
Jag kommer inte idag.
```

Subordinate clause:

```text
... eftersom jag inte kommer idag.
```

Show direct comparison between:

```text
main clause
subordinate clause
```

Connect BIFF to:

- subordinate clauses
- V2
- `inte`
- sentence adverbs

Do not present BIFF as a complete description of all Swedish subordinate-clause grammar; present it as a useful learning rule.

---

# 47. Initial Adjective Agreement Content

Use these core forms:

```text
en stor bil
ett stort hus
stora bilar
```

Definite:

```text
den stora bilen
det stora huset
de stora bilarna
```

Explain the basic pattern:

```text
en → base form
ett → often -t
plural → often -a
definite → often -a
```

Clearly note irregularities/exceptions where relevant without overwhelming the A1/A2 page.

Link to:

```text
en / ett
definite forms
adjective comparison
```

---

# 48. Adjective Comparison

Include typical regular and irregular patterns.

Example:

```text
stor
större
störst
```

Compare:

```text
🇩🇪 groß → größer → am größten
🇬🇧 big → bigger → biggest
🇸🇪 stor → större → störst
```

Also cover Swedish adjectives that use:

```text
mer
mest
```

where appropriate.

Use English comparison where it provides a useful structural bridge.

---

# 49. Practice Architecture

Practice is not the MVP priority.

Do not overbuild it.

Prepare the architecture so structured content could later support exercises.

Potential future exercise types:

## Vocabulary

```text
🇩🇪 kaufen
→ 🇸🇪 ?
```

Answer:

```text
köpa
```

## Verb Forms

```text
köpa
→ present?
```

Answer:

```text
köper
```

## Adjective Agreement

```text
ett ___ hus

stor
stort
stora
```

Answer:

```text
stort
```

## Word Order

```text
Jag kommer inte idag.

Create a subordinate clause:
... eftersom jag ___ ___ idag.
```

Answer:

```text
inte kommer
```

Do not build persistence, accounts, scoring or gamification in MVP.

---

# 50. README

Create/update `README.md`.

Include:

- project purpose
- stack
- local prerequisites
- installation
- development
- build
- preview
- GitHub Pages deployment
- content structure
- how to add a reference page
- how to add vocabulary
- component overview
- naming conventions

Expected commands:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Document any additional lint/check command if one is added.

---

# 51. Code Quality

Use:

- current Astro conventions
- Starlight conventions
- TypeScript where useful
- semantic HTML
- plain maintainable CSS
- CSS Custom Properties
- small components
- clear names
- minimal dependencies

Avoid:

- premature abstractions
- complex state management
- unnecessary build tooling
- duplicate components
- giant monolithic files
- clever code at the expense of readability

---

# 52. Naming

Use clear English technical names.

Examples:

```text
LanguageComparison.astro
MistakeBox.astro
adjective-agreement
definite-form
swedish-v2
swedish-biff
sin-sitt-sina
```

User-facing explanations may primarily be German.

Swedish and English examples should remain in their respective languages.

Keep URLs predictable and stable.

---

# 53. Git Rules

Initialize Git if necessary.

Preserve existing Git history.

Do not:

- force push
- rewrite history
- delete branches
- remove unrelated user work

unless explicitly instructed.

If there are pre-existing uncommitted user changes, do not discard them.

Inspect:

```bash
git status
```

before and after significant work.

If commits are requested or appropriate, keep them logically scoped.

---

# 54. MVP Requirements

The MVP must contain:

## Infrastructure

- Astro
- Starlight
- static build
- Git repository
- GitHub Pages configuration
- GitHub Actions deployment
- working base path
- Starlight navigation
- Starlight search
- light/dark mode
- project styling
- responsive behavior

## Content Architecture

- documentation structure
- grammar section
- vocabulary section
- language-specific rules
- common mistakes
- cheat sheets
- practice placeholder
- related-topic capability
- tags / metadata where useful

## Components

At minimum:

```text
LanguageComparison
RuleBox
ExampleBox
MistakeBox
MemoryTip
SpecialRule
TagList
RelatedTopics
```

Additionally implement where already useful:

```text
VocabularyCard
VerbTable
NounForms
AdjectiveForms
```

## Real Content

At minimum:

```text
en / ett
definite / indefinite forms
adjective agreement
adjective comparison
V2
BIFF
verb forms
sin / sitt / sina
```

## Cheat Sheets

At minimum:

```text
en / ett + adjectives
V2 + BIFF
Swedish noun forms
Swedish verb forms
```

---

# 55. Acceptance Criteria

The MVP is complete only if all applicable items below are true.

## Build

```text
npm install succeeds
npm run build succeeds
npm run preview can serve the production build
```

No obvious build errors.

No unresolved broken imports.

No obvious console/runtime errors in normal use.

## Navigation

- main navigation works
- sidebar works
- internal links work
- related-topic links work
- GitHub Pages base path works

## Design

- Starlight is clearly used as the visual base
- custom language styling integrates cleanly
- DE/EN/SE comparison is easy to scan
- mobile layout is usable
- dark mode works
- light mode works

## Content

- initial Swedish reference pages contain real explanations
- examples are present
- common mistakes are present where appropriate
- cheat sheets exist
- cross-linking works

## Quality

- no unnecessary framework dependencies
- no separate SPA
- no custom search system unless justified
- no custom navigation replacing Starlight without reason
- README is complete
- GitHub Actions workflow exists
- final `git status` has been reviewed

---

# 56. Validation

After implementation:

1. Install dependencies.
2. Run the development server.
3. Run the production build.
4. Run production preview where practical.
5. Verify representative pages.
6. Verify mobile-responsive behavior.
7. Verify light mode.
8. Verify dark mode.
9. Verify internal links.
10. Verify GitHub Pages base-path behavior.
11. Verify search.
12. Inspect final Git status.

Fix discovered implementation problems before declaring the task complete.

---

# 57. Agent Decision Authority

The implementation agent may autonomously decide:

- exact current Astro version
- exact current Starlight version
- current installation commands
- Starlight config structure
- content schema implementation
- CSS organization
- Content Collection details
- component implementation details
- exact responsive breakpoints
- minor design refinements
- file organization where current Starlight conventions differ from examples in this document

Do not request approval for routine engineering decisions.

Prefer current official conventions over literal outdated examples.

---

# 58. Fixed Decisions

Do not change these without a strong technical reason:

```text
Project:
jp-language-hub

Core framework:
Astro

Documentation framework:
Astro Starlight

Theme:
Starlight default theme with project-specific custom CSS

Hosting:
GitHub Pages

Deployment:
GitHub Actions

Languages:
German
English
Swedish

Primary current language-learning focus:
Swedish

Core concept:
Reference + Vocabulary + Cheat Sheets + later Practice

Architecture:
Static-first
```

---

# 59. Priority Order

When trade-offs are necessary, prioritize:

```text
1. Correct language content
2. Maintainable architecture
3. Readability
4. Mobile usability
5. Useful DE/EN/SE comparison
6. Starlight-native implementation
7. Static architecture
8. GitHub Pages compatibility
9. Reusable content structure
10. Performance
11. Visual polish
```

Visual quality matters, but not at the cost of maintainability or readability.

---

# 60. Final Implementation Instruction

Implement `jp-language-hub` as a polished static language knowledge base using:

```text
Astro
Starlight
Markdown / MDX
Content Collections
CSS
minimal Vanilla JavaScript
GitHub Actions
GitHub Pages
```

Use Starlight for documentation infrastructure.

Use Starlight's default theme for the visual foundation and customize it only
where the language-reference design requires it.

Build custom language-reference components on top of that foundation.

Focus initial content on Swedish fundamentals:

```text
en / ett
definite / indefinite forms
adjective agreement
adjective comparison
basic word order
V2
BIFF
inte placement
verb forms
sin / sitt / sina
```

Keep German as the primary reference language.

Use English as a bridge where useful.

Create meaningful direct comparisons between:

```text
🇩🇪 Deutsch
🇬🇧 English
🇸🇪 Svenska
```

Do not stop at boilerplate.

The first completed state should already feel like a useful, polished language reference that can be used immediately and expanded systematically.

Work autonomously until the MVP and acceptance criteria above are satisfied.
