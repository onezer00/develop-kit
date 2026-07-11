# Privacy Checklist: MVP Developer Productivity Platform

**Purpose**: Validate that the MVP respects privacy by design and avoids unnecessary data collection.
**Created**: 2026-07-09
**Feature**: [spec.md](../spec.md)

## Privacy and Data Minimization

- [x] CHK001 The platform collects only the user data required for the MVP experience.
- [x] CHK002 No capability stores user content without a clear and necessary purpose.
- [x] CHK003 The platform clearly limits the use of analytics to product learning and not broader tracking.
- [x] CHK004 The MVP avoids storing sensitive transformation results unless explicitly necessary.
- [ ] CHK005 The user can understand what data is stored and why in the product UI.

## Notes

- CHK001-CHK004 are covered by D-0013, D-0014, D-0015, `data-model.md`, `research.md`, and `contracts/api-contract.md`.
- CHK005 requires implementation of visible product disclosure/copy.
