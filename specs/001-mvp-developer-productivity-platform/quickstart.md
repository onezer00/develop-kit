# Quickstart: MVP Developer Productivity Platform

**Feature**: MVP Developer Productivity Platform  
**Date**: 2026-07-11  
**Status**: Implementation guide draft

## Current State

The repository currently contains Spec Kit planning artifacts and Codex instructions. Application code is not scaffolded yet. This quickstart defines the intended local workflow after T001 and T002 are implemented.

## Prerequisites

- Git
- Node.js LTS
- pnpm or npm workspaces, to be finalized in T001
- Python 3.11
- Docker Desktop or compatible Docker engine
- Google OAuth client credentials for local development

## Environment

Create environment files from the planned example file after T002:

```powershell
Copy-Item infra\env.example .env
```

Required environment values:

```text
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=http://localhost:8000/auth/google/callback
DATABASE_URL=postgresql+psycopg://postgres:postgres@db:5432/developkit
JWT_SECRET=
APP_ORIGIN=http://localhost:5173
API_ORIGIN=http://localhost:8000
```

## Planned Local Development Commands

Install dependencies after T001:

```powershell
npm install
```

Start full local stack after T002:

```powershell
docker compose up --build
```

Run frontend only after T008:

```powershell
npm run dev --workspace apps/web
```

Run backend only after T003:

```powershell
cd apps/api
python -m uvicorn app.main:app --reload
```

Run migrations after T004:

```powershell
cd apps/api
alembic upgrade head
```

Run tests after T019:

```powershell
npm test
pytest apps/api/tests
npx playwright test
```

## MVP Smoke Flow

After implementation, validate:

1. Public landing page loads.
2. User starts Google Auth.
3. OAuth callback creates or resumes the user.
4. User completes onboarding with username and theme.
5. Workspace loads with approved capability groups.
6. User opens JSON Formatter or Base64 Encode/Decode.
7. Capability executes client-side and displays local-processing indicator.
8. User copies result.
9. Recent history appears for logged-in user only.
10. Favorite can be added and reopened.
11. Analytics events are recorded without sensitive payloads.

## Implementation Notes

- All MVP capabilities run client-side.
- Backend must not receive capability inputs or outputs.
- History and favorites store only metadata.
- Anonymous users do not receive persisted history in the MVP.
- Local email/password authentication is out of scope.
