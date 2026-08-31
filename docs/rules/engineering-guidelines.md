# Engineering Principles & Coding Guidelines

## Purpose

Mandatory engineering principles for all source code, architecture decisions,
refactorings, and feature implementations. The goals: simplicity,
maintainability, testability, scalability, readability.

## Guiding Principles Priority

Apply principles in this order; never violate a higher-priority principle to
satisfy a lower-priority one:

1. Simplicity over Cleverness
2. YAGNI (You Aren't Gonna Need It)
3. Existing Code First
4. Separation of Concerns (SoC)
5. SOLID
6. Clean Code

## The Principles

### 1. Simplicity over Cleverness

Prefer the simplest solution that correctly solves the problem — code is
maintained far longer than it is written, so optimize for the reader, not the
writer. Avoid clever one-liners, complex generic abstractions, and advanced
patterns without clear benefit.

> Decision test: Would a new team member immediately understand this solution?
> If not, simplify it.

### 2. YAGNI (You Aren't Gonna Need It)

Implement only what is required today. No abstractions, extension points,
configuration options, interfaces, or architectural layers for hypothetical
future requirements — introduce an abstraction only after multiple real use
cases exist.

> Decision test: Is this solving a real problem that exists right now?
> If not, do not implement it.

### 3. Existing Code First

Consistency is preferred over theoretical perfection. Before introducing a new
pattern, abstraction, library, or architecture style, reuse and extend what the
codebase already does; do not introduce alternative patterns for a problem the
project already solves.

> Decision test: Does the project already solve this problem somewhere else?
> If yes, prefer the existing approach.

### 4. Separation of Concerns (SoC)

Every module has one clear responsibility and one reason to change. Keep
business logic out of controllers and UI components; dependencies flow inward
toward business logic, and business rules must not depend on frameworks,
databases, or UI technologies.

> Decision test: Can this responsibility change independently from the rest?
> If yes, it should likely be separated.

### 5. SOLID

Apply SOLID after responsibilities are correctly separated:

- **Single Responsibility Principle:** one reason to change per module.
- **Open/Closed Principle:** extend through composition instead of repeatedly
  modifying conditional structures.
- **Liskov Substitution Principle:** implementations must be valid,
  unsurprising substitutes for their abstraction.
- **Interface Segregation Principle:** small focused interfaces over broad
  managers.
- **Dependency Inversion Principle:** high-level logic depends on
  abstractions, not infrastructure details.

### 6. Clean Code

Code is written for humans first: intent-revealing names; small,
single-purpose functions without hidden side effects; comments only for
intent, business context, or non-obvious decisions — never to restate the
code; early returns and composition over deep nesting and inheritance; errors
are explicit, actionable, and preserve context — never swallow exceptions
silently. Tests verify behavior, not implementation details: unit tests for
business rules, integration tests for boundaries, end-to-end tests for
critical workflows.

## Design Preferences

Prefer composition over inheritance, explicit dependencies, immutable data
where practical, small modules, and clear boundaries. Avoid shared mutable
state, circular dependencies, hidden side effects, framework-driven design,
and over-abstraction.

## Refactoring Rule

Abstractions emerge from usage, not prediction: implement the simplest
solution for today's problem, reuse what already exists, observe duplication,
and refactor to an abstraction only when it becomes obvious.

## Final Engineering Principle

Make the smallest and simplest change that solves the current problem, follows
existing project conventions, preserves separation of concerns, and remains
easy to understand and modify. If multiple valid solutions exist, choose the
simplest; then the one most consistent with the existing codebase; then the
one with the smallest change surface.

If conflicts remain, requirements are ambiguous, or no compliant solution can
be determined, stop and ask an engineer.
