# Architecture Notes

Develop Kit is currently implemented as a monorepo:

- `apps/web`: React/Vite frontend and the Modern Developer Workspace experience.
- `apps/api`: FastAPI backend for health, future Google Auth, sessions, profile, favorites, history metadata, and analytics metadata.
- `packages/ui`: shared UI primitives and design/motion tokens.
- `packages/shared`: shared TypeScript types and constants.
- `infra/docker`: Dockerfiles and reverse proxy configuration.

MVP capability execution remains client-side. Backend services must not process or persist capability inputs or outputs.
