# Analytics Checklist: MVP Developer Productivity Platform

**Purpose**: Validate that the MVP collects enough product signals to learn from real usage.
**Created**: 2026-07-09
**Feature**: [spec.md](../spec.md)

## Event and Measurement Quality

- [x] CHK001 Core events are defined for landing page views, Google Auth, workspace view, capability open, capability execution, copy, search, history, favorites, and errors.
- [ ] CHK002 Analytics events are emitted without breaking the main user flow.
- [x] CHK003 Event payloads contain only the minimum necessary user and product context.
- [ ] CHK004 The analytics implementation can be validated locally and in a staging environment.
- [ ] CHK005 The MVP can demonstrate the success criteria using analytics or event logs.

## Notes

- CHK001 and CHK003 are covered by `research.md`, `plan.md`, and `contracts/api-contract.md`.
- Remaining items require implementation and tests.
