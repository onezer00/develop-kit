# Develop Kit

Developer Productivity Platform planned with GitHub Spec Kit and implemented with Codex.

## Current State

The repository now contains the initial application scaffold for the MVP:

- `apps/web`: React/Vite frontend with the first Modern Developer Workspace shell.
- `apps/api`: FastAPI backend with configuration, modular router structure, and `/health`.
- `packages/ui`: shared UI primitives and design tokens.
- `packages/shared`: shared TypeScript types and capability workflow constants.
- `infra/docker`: Dockerfiles, Nginx config, and environment example.
- `specs/001-mvp-developer-productivity-platform`: active Spec Kit feature artifacts.

Google Auth, persistence, real capability execution, analytics, and full end-to-end flows are still pending implementation tasks.

## Local Development

Install JavaScript dependencies:

```powershell
npm install
```

Run the frontend:

```powershell
npm run dev --workspace apps/web
```

Run the backend after installing Python dependencies:

```powershell
python -m pip install --user -r apps\api\requirements.txt
cd apps\api
python -m uvicorn app.main:app --reload
```

Validate the current scaffold:

```powershell
npm run typecheck
npm run build
python -m pytest apps\api\tests
```

Run the planned container stack:

```powershell
docker compose up --build
```

## Spec Kit Workflow With Codex

Use the generated Codex skills:

- `$speckit-specify` for feature specification
- `$speckit-clarify` for resolving ambiguous requirements
- `$speckit-plan` for implementation planning
- `$speckit-tasks` for task generation
- `$speckit-implement` for executing approved tasks
- `$speckit-checklist`, `$speckit-analyze`, and `$speckit-converge` for quality gates

The active feature is:

```text
specs/001-mvp-developer-productivity-platform/
```

Product documents under `.specify/product` and the constitution under `.specify/memory/constitution.md` remain the source of truth.