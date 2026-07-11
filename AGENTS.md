# Codex Project Instructions

This repository uses Codex with GitHub Spec Kit. Treat the Spec Kit documents as the source of truth for product, planning, and implementation decisions.

## Source Of Truth

Read these files before changing product scope or implementation:

- `.specify/memory/constitution.md`
- `.specify/product/DECISIONS.md`
- `.specify/product/ASSUMPTIONS.md`
- `.specify/product/QUESTIONS.md`
- `.specify/product/planning/discovery/`
- `specs/*/spec.md`
- `specs/*/plan.md`
- `specs/*/tasks.md`

Decision priority:

1. `.specify/product/DECISIONS.md`
2. `.specify/memory/constitution.md`
3. Active feature `spec.md`
4. Active feature `plan.md`
5. Active feature `tasks.md`
6. Discovery and assumptions

If these conflict, stop and resolve the documentation before implementing code.

## Codex + Spec Kit Workflow

Use the local Spec Kit skills generated under `.agents/skills`:

- `$speckit-specify` to create or update feature specs.
- `$speckit-clarify` to resolve ambiguity before planning.
- `$speckit-plan` to create or update implementation plans.
- `$speckit-tasks` to generate implementation tasks.
- `$speckit-implement` to execute approved tasks.
- `$speckit-checklist`, `$speckit-analyze`, and `$speckit-converge` for quality gates.

For implementation work, do not skip straight to code unless the active `spec.md`, `plan.md`, and `tasks.md` already cover the requested change.

## Product Guardrails

- Build a Developer Productivity Platform, not a disconnected tools catalog.
- Keep the MVP within the approved scope.
- Do not add AI, payments, public API, marketplace, blog, collaboration, browser extension, IDE extension, or extra capabilities unless the spec is updated and approved first.
- Prefer local/browser-side processing for transformations when feasible.
- Do not persist sensitive capability inputs or outputs by default.
- Maintain a single workspace experience with consistent navigation, states, and visual language.
- Optimize for speed, clarity, privacy, and low cognitive load.

## Implementation Rules

- Keep code changes tied to a task in `specs/*/tasks.md`.
- Mark tasks complete only after implementation and verification.
- Update docs when behavior, architecture, commands, or scope changes.
- Prefer small, reviewable changes over broad rewrites.
- Add tests proportional to risk and user impact.
- For frontend work, preserve a focused workspace UI and avoid decorative landing-page-first implementation when the actual product surface is required.

## Current Active Feature

The active feature is:

- `specs/001-mvp-developer-productivity-platform/`

Before implementing this feature, verify that the capability list in `spec.md`, `plan.md`, and `tasks.md` remains aligned.
