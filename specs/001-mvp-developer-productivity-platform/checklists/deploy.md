# Deploy Checklist: MVP Developer Productivity Platform

**Purpose**: Validate that the MVP can be run and demonstrated locally and in a deployment environment.
**Created**: 2026-07-09
**Feature**: [spec.md](../spec.md)

## Deployment Readiness

- [ ] CHK001 The project starts locally with Docker Compose using a single documented command.
- [ ] CHK002 Frontend, backend, and database services connect successfully in the local environment.
- [ ] CHK003 The application builds successfully for production or preview deployment.
- [x] CHK004 Environment variables and secrets are documented and externalized.
- [ ] CHK005 The MVP can be demonstrated end to end without requiring AI, payments, or collaboration features.

## Notes

- CHK004 is covered by `quickstart.md` and `contracts/api-contract.md`.
- Remaining items require implementation.
