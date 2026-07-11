# Implementation Plan: MVP Developer Productivity Platform

**Branch**: `001-mvp-developer-productivity-platform` | **Date**: 2026-07-09 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-mvp-developer-productivity-platform/spec.md`

## Summary

This plan covers the implementation of an MVP SaaS for developers focused on reducing context switching and cognitive load through a premium single-workspace experience. The solution will ship as a monorepo with a React/Vite frontend and a FastAPI backend, supporting Google authentication, user preferences, authenticated history, analytics, and modular capabilities that run client-side whenever possible.

## Product Discovery and Constitution Alignment

This implementation plan is anchored to the approved decision and discovery artifacts in .specify/product. It keeps the MVP scoped to the user problems related to context switching, tool fragmentation, privacy concerns, and inconsistent experiences, while preserving the approved positioning as a Developer Productivity Platform rather than a tools catalog. The work below intentionally avoids introducing AI, payments, public API, marketplace, blog, or collaboration features, and it prioritizes local-first processing, privacy, simplicity, and a consistent single-workspace experience.

## Technical Context

**Language/Version**: TypeScript 5.x, Python 3.11

**Primary Dependencies**: React, Vite, Tailwind CSS, React Router, React Hook Form, FastAPI, PostgreSQL, SQLAlchemy, Alembic, JWT, Docker, Docker Compose, Nginx

**Storage**: PostgreSQL for Google-authenticated users, preferences, authenticated history, favorites, analytics, and auth state; browser local storage/session usage only for non-sensitive UI state where appropriate

**Testing**: Vitest + React Testing Library for frontend, Pytest for backend, Playwright for end-to-end validation

**Target Platform**: Web application deployed via Docker Compose with Nginx

**Project Type**: Monorepo web application

**Performance Goals**: Fast initial load, sub-second interactions for capability workflows, low-latency client-side transformations

**Constraints**: Must support a premium experience, client-side-first processing, moderate initial scope, easy future extension without overengineering

**Scale/Scope**: MVP for an initial user cohort with a constrained set of capabilities and simple user data model

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Every feature MUST be evaluated against Developer First, Stay in Flow, Solve Real Problems, Simplicity Wins, Speed is a Feature, Consistency Creates Trust, Privacy by Design, AI is an Accelerator, Evidence-Driven Product, Quality Before Quantity, One Workspace, and Build for Daily Use.
- Every feature MUST tie its scope to a documented user problem and explain its expected impact on flow, cognitive load, speed, privacy, and trust.
- New capabilities MUST justify user value, performance impact, privacy implications, and consistency with existing workflows.
- If AI is introduced, the plan MUST state how it reduces time, cognitive load, or steps and why local processing was not preferred when feasible.
- Any deviation from these rules MUST be documented with a concrete rationale and a simpler alternative considered.

This plan satisfies the constitution because it prioritizes a simple, high-trust developer workspace, keeps transformations client-side where possible, and limits the first release to the MVP scope defined in the spec.

## Project Structure

### Documentation (this feature)

```text
specs/001-mvp-developer-productivity-platform/
â”œâ”€â”€ spec.md
â”œâ”€â”€ plan.md
â”œâ”€â”€ research.md
â”œâ”€â”€ data-model.md
â”œâ”€â”€ quickstart.md
â”œâ”€â”€ contracts/
â””â”€â”€ tasks.md
```

### Source Code (repository root)

```text
apps/
â”œâ”€â”€ web/
â”‚   â”œâ”€â”€ src/
â”‚   â”‚   â”œâ”€â”€ app/
â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ features/
â”‚   â”‚   â”œâ”€â”€ lib/
â”‚   â”‚   â”œâ”€â”€ pages/
â”‚   â”‚   â”œâ”€â”€ routes/
â”‚   â”‚   â”œâ”€â”€ services/
â”‚   â”‚   â”œâ”€â”€ styles/
â”‚   â”‚   â””â”€â”€ types/
â”‚   â”œâ”€â”€ public/
â”‚   â””â”€â”€ package.json
â””â”€â”€ api/
    â”œâ”€â”€ app/
    â”‚   â”œâ”€â”€ api/
    â”‚   â”œâ”€â”€ core/
    â”‚   â”œâ”€â”€ db/
    â”‚   â”œâ”€â”€ models/
    â”‚   â”œâ”€â”€ schemas/
    â”‚   â”œâ”€â”€ services/
    â”‚   â””â”€â”€ main.py
    â”œâ”€â”€ alembic/
    â”œâ”€â”€ tests/
    â””â”€â”€ requirements.txt

packages/
â”œâ”€â”€ ui/
â”‚   â”œâ”€â”€ src/
â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ design-tokens/
â”‚   â”‚   â”œâ”€â”€ hooks/
â”‚   â”‚   â””â”€â”€ index.ts
â”‚   â””â”€â”€ package.json
â””â”€â”€ shared/
    â”œâ”€â”€ src/
    â”‚   â”œâ”€â”€ types/
    â”‚   â”œâ”€â”€ constants/
    â”‚   â””â”€â”€ index.ts
    â””â”€â”€ package.json

infra/
â”œâ”€â”€ docker/
â”‚   â”œâ”€â”€ Dockerfile.api
â”‚   â”œâ”€â”€ Dockerfile.web
â”‚   â””â”€â”€ nginx.conf
â”œâ”€â”€ docker-compose.yml
â””â”€â”€ env.example
```

**Structure Decision**: A monorepo with separate frontend, backend, reusable design system, and shared types will support rapid MVP delivery while preserving a clean path for future modular expansion.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Monorepo structure | The product needs shared UI and types while keeping frontend and backend independently deployable | A single app folder would make design-system reuse and future modularity harder |

## Architecture Overview

The platform will be split into three main layers:

1. Frontend application for landing page, authentication, workspace, search, and capabilities.
2. Backend API for authentication, user management, preferences, history, analytics, and storage of minimal user state.
3. Infrastructure layer for containerized deployment and reverse proxy.

The architecture will use client-side execution for all approved MVP capabilities. Capability workflows that perform approved transformations such as JWT decoding, Base64 operations, UUID generation, hash generation, timestamp conversion, JSON formatting/validation, YAML formatting, CSV to JSON conversion, SQL formatting, URL encoding/decoding, query parameter parsing, HTTP status lookup, headers formatting, and cURL formatting will run primarily in the browser. The backend will be responsible for server-side concerns such as user identity, persistence, analytics, and secure session handling.

## Feature Modules

### 1. Public Experience
- Landing page with clear value proposition and CTAs.
- Authentication entry point through Google Auth only for the MVP.
- Lightweight onboarding for username and theme selection.

### 2. Workspace Experience
- Dashboard shell with search, recent history, and capability entry points.
- Modular capability modules that load as part of a single workspace experience.
- Shared layout and navigation primitives.

### 3. Capability System
- Capability registry for core tools.
- Each capability exposes a standard interface: title, description, input schema, output rendering, and analytics event hooks.
- Capability implementations are isolated, client-side modules so new tools can be added without rewriting the shell or sending sensitive inputs to the backend.

### 4. User State and Preferences
- Google-authenticated user profile, auth provider, username, theme selection, favorites, and authenticated recent usage history.
- Local persistence for transient UI preferences where appropriate.

### 5. Analytics and Feedback
- Event tracking for discovery, sign-up, login, capability open, capability use, and completion.
- Analytics stored server-side to validate the MVP value proposition.

## Data Model

### Core Entities

#### User
- id: UUID
- email: string
- password_hash: string | null
- auth_provider: enum (local, google)
- username: string
- display_name: string | null
- theme_preference: enum (system, dark, light)
- created_at: datetime
- updated_at: datetime
- is_active: boolean

#### UserSession
- id: UUID
- user_id: UUID
- refresh_token_hash: string
- expires_at: datetime
- created_at: datetime

#### CapabilityUsage
- id: UUID
- user_id: UUID
- capability_key: string
- action_type: string
- metadata: JSONB
- created_at: datetime

#### RecentItem
- id: UUID
- user_id: UUID
- item_type: string
- item_key: string
- title: string
- summary: string | null
- created_at: datetime

### Data Rules
- Username MUST be unique.
- Email MUST be unique for Google-authenticated accounts.
- google_sub MUST be unique and is the primary external identity for Google Auth.
- Recent items are stored only for authenticated users and limited to a bounded retention window for MVP.
- Capability usage events should be lightweight and privacy-conscious.

## API Endpoints

### Authentication
- POST /auth/register
- POST /auth/login
- POST /auth/logout
- POST /auth/refresh
- GET /auth/me
- GET /auth/google/login
- GET /auth/google/callback

### User Profile and Preferences
- GET /users/me
- PATCH /users/me
- PATCH /users/me/theme
- PATCH /users/me/username

### Workspace and History
- GET /history/recent
- POST /history/items
- DELETE /history/items/{id}

### Analytics
- POST /analytics/events

### Capability Metadata
- GET /capabilities

## Authentication Flow

1. User chooses Google Auth from the public entry or workspace gate.
2. Backend starts the Google OAuth flow and handles the callback.
3. Backend validates the Google identity and auto-provisions the local user record when needed.
4. Backend issues access and refresh JWTs.
5. Frontend stores access token in memory and uses a secure HTTP-only refresh cookie when feasible.
6. Protected routes request a fresh access token as needed.
7. Logout invalidates session and clears client state.

## Google OAuth Flow
1. Frontend redirects the user to the backend OAuth initiation endpoint.
2. Backend redirects to Google authorization endpoint.
3. Google returns an authorization code to the backend callback endpoint.
4. Backend exchanges the code for user profile information.
5. If the user is new, a local user record is created with the Google identity.
6. Backend issues application JWTs and redirects the user to the app.

## Frontend Strategy

### Rendering and Routing
- React + Vite for fast development and build performance.
- React Router for public and authenticated routes.
- Route-based separation for landing, auth, onboarding, dashboard, and capability workflows.

### State Management
- React Hook Form for forms and validation.
- Lightweight local state and context for auth/session and workspace shell state.
- TanStack Query or React Query can be considered later if data-fetching grows; for MVP, simple service layer + state may be enough.

### UI Architecture
- Shared design system package under packages/ui for tokens, primitives, and layout composition.
- The workspace shell and capability modules will share the same primitives to preserve a premium and consistent experience.
- Tailwind CSS will be used together with a token-driven theme system.

### Client-Side Capability Execution
- Capability logic will be implemented as modular features under apps/web/src/features.
- Transforms such as JWT decoding, Base64 encoding/decoding, UUID generation, hash generation, timestamp conversion, JSON formatting/validation, YAML formatting, CSV to JSON conversion, SQL formatting, URL encoding/decoding, query parameter parsing, HTTP status lookup, headers formatting, and cURL formatting will run in the browser using pure TypeScript utilities where possible.
- Backend interaction is limited to Google-authenticated user state, authenticated history metadata, favorites, analytics metadata, and preferences. Capability inputs and outputs are not sent to the backend in the MVP.

## Backend Strategy

### API Structure
- FastAPI app organized into modular routers under app/api.
- SQLAlchemy models and Alembic migrations under app/db and alembic.
- Shared schemas under app/schemas for request/response validation.
- Services under app/services to isolate auth, user, history, and analytics logic.

### Persistence
- PostgreSQL will store Google-authenticated user accounts, profile preferences, authenticated recent history, favorites, and analytics events.
- Sensitive transformation results are not persisted by default unless explicitly required by a later feature.

### Privacy by Design Strategy
- Processing will be local in the browser whenever technically feasible for the approved capabilities, especially for transformations such as formatting, validation, encoding/decoding, generation, parsing, and conversion.
- The following data will never be stored by the MVP unless explicitly required by a later feature: raw input payloads for sensitive transformations, secrets, tokens, passwords, private API material, and full transformation outputs containing sensitive values.
- The following data may be persisted: minimal Google-authenticated user profile data, authentication identifiers, theme preference, authenticated recent capability usage metadata, favorites metadata, and non-sensitive analytics events.
- Data retention will be limited to the minimum required for the MVP: recent history entries are available only for logged-in users, favorites are tied to logged-in users, both can be deleted by the user, and analytics events will be retained in aggregate form without storing sensitive payload contents.
- LocalStorage will be used only for non-sensitive UI preferences that benefit from persistence across sessions, such as theme preference and lightweight feature flags.
- SessionStorage will be used for short-lived session state that should not survive a browser restart, such as temporary auth flow state and transient workspace context.
- IndexedDB will not be used in the initial MVP unless a later requirement justifies offline or larger client-side history storage; the default approach is to keep client-side state small and ephemeral.
- Cookies will be limited to strictly necessary session or CSRF-related behavior, and any auth-related cookie must be secure, HttpOnly, and SameSite-aware when supported.
- Analytics will capture only non-sensitive event names, timestamps, and coarse metadata; payload contents, secrets, and sensitive transformation inputs will never be included.
- Sensitive data handling will be explicit in the implementation: inputs that contain credentials, tokens, secrets, or private content will be treated as ephemeral and must not be logged, persisted, or transmitted unless the user explicitly opts in to a future feature.

### Security
- Password hashing via a strong password-hashing library.
- JWT-based access and refresh handling.
- Environment-based secrets and CORS configuration.
- Privacy-first data handling on both server and client.

## Testing Strategy

### Frontend
- Unit tests for utility functions, form validation, and capability transforms.
- Component tests for shared UI primitives and workspace shell behavior.
- E2E tests using Playwright for main onboarding, auth, capability access, and search flows.

### Backend
- Unit tests for auth, user profile, history, and schema validation.
- Integration tests with a test PostgreSQL instance for API flows.

### Definition of Done
- Google Auth flow works end-to-end.
- At least one capability works fully from browser execution.
- Search and history can be exercised in a real user session.
- Main workflow passes a Playwright smoke test.

## Deployment Strategy

### Local Development
- Docker Compose for app, API, PostgreSQL, and Nginx.
- Shared env file and seeded development data.

### Production
- Build frontend assets and serve them through Nginx.
- Run FastAPI behind Nginx or a containerized reverse proxy.
- Use PostgreSQL managed service or containerized deployment depending on the environment.
- Expose only the necessary ports and use HTTPS termination at the edge.

## Risks and Mitigations

### Technical Risks
- Client-side execution may increase frontend bundle size or browser performance pressure for heavier parsers.
  - Mitigation: Keep the initial capability set constrained, lazy-load heavier capability libraries, define input limits, and keep cURL Formatter to a clear MVP subset.

- OAuth and authentication integration may introduce security and configuration complexity.
  - Mitigation: Keep the MVP to Google Auth only with a minimal but secure session model.

- UI consistency may drift if capability modules are built independently.
  - Mitigation: Enforce a shared design system and capability contract from the start.

- Search and history can become over-scoped if implemented too broadly.
  - Mitigation: Limit MVP search and history to key workspace items and recent activity.

- Overengineering may slow delivery and obscure the core value proposition.
  - Mitigation: Favor simple abstractions, modular capability folders, and a thin backend surface.

## Minimum Analytics Event Set

Analytics for the MVP MUST avoid sensitive payloads and capture only event names, timestamps, user/session identifiers, capability keys, coarse status, and non-sensitive metadata.

Recommended minimum events:

- `landing_viewed`: public entry was viewed.
- `cta_clicked`: primary entry action was clicked.
- `auth_google_started`: user started Google Auth.
- `auth_google_completed`: Google Auth completed successfully.
- `auth_failed`: authentication failed, with coarse reason only.
- `onboarding_completed`: username/theme onboarding completed.
- `workspace_viewed`: authenticated workspace loaded.
- `capability_opened`: user opened a capability.
- `capability_executed`: capability execution completed, with capability key, status, duration bucket, and no input/output content.
- `copy_clicked`: user copied generated or transformed output, with capability key only.
- `search_performed`: global search used, with result count bucket and no raw query unless explicitly approved later.
- `history_item_opened`: logged-in user opened a recent item.
- `favorite_added`: user favorited a capability.
- `favorite_removed`: user removed a favorite.
- `error_shown`: user-facing error occurred, with coarse error code and surface.

This set supports MVP funnel, activation, retention signals, capability adoption, and quality monitoring without collecting sensitive developer data.






