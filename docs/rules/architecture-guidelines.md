# Architecture Guidelines

## Purpose

Mandatory project-specific architecture rules for components, source files,
and CSS. These rules supplement the general engineering guidelines. If the two
documents appear to conflict, follow the engineering guidelines and choose the
simplest architecture that preserves the boundaries defined here.

## Component Boundaries

- Each component must have one clear UI responsibility and one primary reason
  to change.
- Prefer composition of focused components over large components controlled by
  many properties, modes, or conditional branches.
- Keep content and data definitions out of presentation components when they
  can change independently.
- Do not extract a component merely to reduce line count. Extract it when it
  represents a distinct responsibility, is reused, or makes complex behavior
  independently understandable.
- Do not create god components that coordinate unrelated content, behavior,
  layout, and styling concerns.

## File Boundaries

- Each Astro component file must define one primary component.
- Each source file must have one clear purpose. Do not use generic files as
  dumping grounds for unrelated helpers, types, data, or configuration.
- Supporting types, tests, data, and utilities may use separate files when they
  have an independent responsibility.
- Split files by responsibility, not by an arbitrary line-count limit.
- Avoid circular dependencies and ambiguous barrel exports.

## Global CSS Architecture

All project CSS is global and centrally managed. Do not use scoped component
styles, CSS Modules, component-local stylesheets, or `<style>` blocks in Astro
components.

Use `src/styles/global.css` as the single stylesheet entry point. Divide the
implementation into focused files imported by that entry point. Create only
the files and directories currently needed, following this structure as the
project grows:

```text
src/styles/
├── global.css
├── tokens/
├── foundations/
├── layout/
├── components/
├── utilities/
└── integrations/
```

The directories have these responsibilities:

- `tokens`: semantic custom properties for color, spacing, typography, borders,
  and other theme values.
- `foundations`: reset, document defaults, base elements, and accessibility
  foundations.
- `layout`: shared page- and content-level layout rules.
- `components`: styles owned by individual project components.
- `utilities`: a small set of intentional, reusable utility classes.
- `integrations`: isolated overrides for Starlight or other external systems.

Declare and preserve an explicit cascade order:

```css
@layer starlight, tokens, foundations, layout, components, utilities, integrations;
```

The external `starlight` layer must remain first so project layers have an
explicit and predictable position relative to framework styles. Do not add
unlayered project rules. Import each stylesheet into its matching layer through
the global entry point.

## CSS Ownership and Naming

- Every styled project component must have a unique, descriptive root class.
- Start every component rule at that root class or at a component-prefixed
  descendant class.
- Use component-specific descendant names such as
  `.language-comparison__heading` when an element needs a stable styling hook.
- Use explicit modifier classes such as `.language-comparison--stacked` for
  meaningful component variants.
- Keep selectors shallow. Do not mirror the complete DOM tree in CSS.
- A component must not depend on incidental ancestor structure or on the page
  where it happens to be rendered.
- Do not style project components through element IDs, generated framework
  attributes, or fragile positional selectors.
- Prefer classes for styling. Use semantic HTML for meaning and classes for
  visual ownership.

Example:

```css
.language-comparison {
  display: grid;
  gap: var(--space-md);
}

.language-comparison__heading {
  color: var(--color-text-heading);
}
```

Avoid structurally coupled selectors:

```css
main article section > div h3 {
  /* Do not couple component styling to the surrounding page structure. */
}
```

## Theming

- Implement themes primarily by changing semantic CSS custom properties.
- Components consume semantic tokens; they must not implement independent
  theme systems.
- Reuse suitable Starlight custom properties before duplicating them as project
  tokens.
- Keep project tokens independent from a single light or dark color value.
- All component states must remain usable in Starlight's light, dark, and auto
  modes.
- Keep Starlight overrides isolated in the `integrations` layer so framework
  upgrades and redesigns have a clear review surface.

## Cascade and Specificity

- Resolve styling through ownership, layer order, and clear selectors before
  increasing specificity.
- Do not use `!important` in project styles. An unavoidable external-framework
  override requires a short comment explaining why it is necessary.
- Do not add inline `style` attributes for static presentation. Runtime values
  may be passed through custom properties only when a real dynamic requirement
  cannot be represented by classes.
- Do not introduce arbitrary one-off values when an existing semantic token
  expresses the same design decision.
- Add global element rules only to the appropriate foundation layer. Component
  files must not redefine unrelated elements globally.

## Accessibility

Develop all user-facing content and components against
[WCAG 2.2 Level AA](https://www.w3.org/TR/WCAG22/) as the normative
accessibility target. Use the
[MDN Accessibility guides](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
as the primary practical implementation reference.

- Prefer native semantic HTML and built-in browser behavior over custom roles,
  controls, or interaction patterns.
- Use ARIA only when native semantics cannot express the required behavior. Do
  not use ARIA to repair avoidable semantic HTML problems.
- Preserve a meaningful heading hierarchy, landmarks, labels, table structure,
  link purpose, and document reading order.
- Make every interactive element operable by keyboard with visible focus and
  without keyboard traps.
- Provide appropriate text alternatives for meaningful non-text content and
  hide purely decorative content from assistive technology.
- Do not communicate meaning through color, position, shape, or motion alone.
- Meet applicable WCAG AA contrast, reflow, text resizing, target size, and
  motion requirements in every supported theme and viewport.
- Identify the document language and mark passages or examples in a different
  language with the appropriate `lang` attribute.
- Preserve accessibility when extending or overriding Starlight components.
- Treat automated accessibility linting as a minimum safety net, not as proof
  of WCAG conformance. Review keyboard behavior, focus order, semantics, and
  visual accessibility manually for every new interaction pattern.
- Enable the recommended Astro-compatible ESLint accessibility rules when they
  can be installed without dependency conflicts. Do not bypass peer dependency
  validation to force the tooling into the project.

### Astro and Starlight Implementation

- Treat Astro components as generators of standard HTML. Use native elements
  and attributes in component templates instead of recreating browser semantics
  with generic elements and ARIA.
- Prefer Starlight's existing navigation, search, theme, table-of-contents, and
  page-layout components when they meet the requirement.
- Override a Starlight component only for a concrete project requirement. Use
  the lowest-level override that solves the problem and preserve the original
  accessible name, keyboard behavior, landmarks, focus handling, and states.
- Preserve Starlight's skip link and the target it references. Do not remove or
  duplicate the primary page landmarks.
- Give icon-only controls and links an accessible name. When using Starlight's
  `Icon` component, provide `label` when the icon conveys otherwise missing
  meaning and omit it when the icon is purely decorative.
- Use standard Markdown image syntax with meaningful alternative text for
  informative images. Use empty alternative text for decorative images rather
  than repeating nearby content.
- Set the primary document language through Starlight's locale configuration.
  Mark inline examples and passages in another language with the appropriate
  `lang="de"`, `lang="en"`, or `lang="sv"` attribute.
- Keep slotted content in a logical DOM and reading order. Do not use CSS visual
  reordering to create a sequence that differs from keyboard or screen-reader
  navigation.
- For every new interactive Astro component, verify native keyboard operation,
  focus visibility, focus order, and accessible names manually.
- Run Astro's development-toolbar accessibility audit on representative pages
  after introducing new layouts, components, or significant styling. Treat its
  results as supplementary to WCAG review and manual testing.

## Architecture Review

Before completing a component or styling change, verify that:

1. Each changed component and file has one clear responsibility.
2. No component-local or scoped CSS was introduced.
3. New CSS is reachable through `src/styles/global.css` and uses the correct
   cascade layer.
4. Selectors are owned by a component or an explicitly global foundation.
5. Theme differences are expressed through semantic tokens where practical.
6. The change does not introduce unnecessary abstractions or speculative
   structure.
7. Applicable WCAG 2.2 Level AA requirements have been considered beyond the
   checks provided by automated tooling.
