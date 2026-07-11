# Tasks: MVP Developer Productivity Platform

**Input**: Design documents from `/specs/001-mvp-developer-productivity-platform/`

**Prerequisites**: [spec.md](spec.md), [plan.md](plan.md)

## Constitution and Scope Guardrails

- Every task MUST support at least one documented user problem from the approved discovery materials.
- The implementation MUST remain within the approved MVP scope and avoid introducing AI, payments, public API, marketplace, blog, or collaboration features.
- Privacy, local-first processing where feasible, simplicity, and consistency are mandatory constraints for all implementation work.
- The delivery order follows the agreed foundation-first path: platform foundation, identity, workspace shell, workflows, and validation.

## Epic 1 â€” Platform Foundation

### Feature 1.1 â€” Monorepo and local environment

#### User Story 1.1 â€” Establish a reliable development foundation

- [ ] T001 Create the monorepo structure and shared workspace tooling
  - Description: Scaffold the repository with separate frontend, backend, shared packages, and common scripts for development, linting, and build workflows.
  - Arquivos provÃ¡veis: package.json, pnpm-workspace.yaml or package.json workspaces, apps/web/package.json, apps/api/package.json, packages/ui/package.json, packages/shared/package.json, tsconfig.base.json
  - DependÃªncias: Nenhuma
  - CritÃ©rios de aceite: O repositÃ³rio possui estrutura clara para web, api, ui e shared; as dependÃªncias instaladas com sucesso; scripts bÃ¡sicos funcionam.
  - Prioridade: Alta
  - Estimativa: MÃ©dia
  - Subtasks:
    - Criar estrutura de pastas do monorepo
    - Configurar scripts de instalaÃ§Ã£o, build e lint
    - Definir padrÃµes de TypeScript e tooling compartilhado

- [ ] T002 Configure Docker Compose for local development
  - Description: Add containers for the frontend, API, PostgreSQL, and Nginx with a single local startup path.
  - Arquivos provÃ¡veis: docker-compose.yml, infra/docker/Dockerfile.web, infra/docker/Dockerfile.api, infra/docker/nginx.conf, infra/env.example
  - DependÃªncias: T001
  - CritÃ©rios de aceite: O ambiente local sobe com um Ãºnico comando; os serviÃ§os se conectam corretamente; a aplicaÃ§Ã£o fica acessÃ­vel no navegador.
  - Prioridade: Alta
  - Estimativa: MÃ©dia
  - Subtasks:
    - Criar serviÃ§os web, api, db e proxy
    - Definir variÃ¡veis de ambiente e volumes
    - Validar a inicializaÃ§Ã£o completa do ambiente

### Feature 1.2 â€” Backend base

#### User Story 1.2 â€” Build the backend foundation

- [ ] T003 Bootstrap the FastAPI application and base architecture
  - Description: Create the backend entrypoint, router structure, configuration, and core dependencies.
  - Arquivos provÃ¡veis: apps/api/app/main.py, apps/api/app/core/config.py, apps/api/app/api/__init__.py, apps/api/app/core/security.py
  - DependÃªncias: T001
  - CritÃ©rios de aceite: A API responde localmente em um endpoint de saÃºde; a estrutura modular estÃ¡ pronta para expansÃ£o.
  - Prioridade: Alta
  - Estimativa: MÃ©dia
  - Subtasks:
    - Criar app principal e rotas base
    - Configurar settings e ambiente
    - Adicionar endpoint de healthcheck

- [ ] T004 Implement database models and migrations
  - Description: Create SQLAlchemy models for users, sessions, history, analytics, and related entities, then generate Alembic migrations.
  - Arquivos provÃ¡veis: apps/api/app/db/base.py, apps/api/app/models/*.py, apps/api/app/db/session.py, apps/api/alembic/env.py, apps/api/alembic/versions/*.py
  - DependÃªncias: T003
  - CritÃ©rios de aceite: O banco Ã© criado corretamente; as migrations aplicam sem erro; os modelos refletem as entidades do MVP.
  - Prioridade: Alta
  - Estimativa: Grande
  - Subtasks:
    - Definir modelos de usuÃ¡rio, sessÃ£o, histÃ³rico e analytics
    - Criar migrations iniciais
    - Validar scripts de upgrade/downgrade

## Epic 2 â€” Identity and User Experience

### Feature 2.1 â€” Authentication

#### User Story 2.1 â€” Enable secure sign-in and account creation

- [ ] T005 Implement Google-only authentication foundation and session handling
  - Description: Add the MVP authentication foundation for Google-authenticated users, including user lookup, session issuing, refresh/access token handling, and logout. Local email/password registration is out of scope for the MVP.
  - Arquivos prováveis: apps/api/app/api/auth.py, apps/api/app/services/auth_service.py, apps/api/app/schemas/auth.py, apps/api/app/models/user.py
  - Dependências: T003, T004
  - Critérios de aceite: Um usuário autenticado via Google recebe sessão da aplicação; logout e refresh funcionam; não existe cadastro/login local com senha no MVP.
  - Prioridade: Alta
  - Estimativa: Grande
  - Subtasks:
    - Criar endpoints de sessão, refresh, logout e usuário atual
    - Implementar modelo de identidade Google sem senha local
    - Adicionar refresh/access token e logout
- [ ] T006 Implement Google OAuth login and auto-provisioning
  - Description: Add the Google OAuth flow, callback handling, and automatic user creation for first-time sign-ins.
  - Arquivos provÃ¡veis: apps/api/app/api/oauth.py, apps/api/app/services/oauth_service.py, apps/web/src/pages/auth/GoogleCallback.tsx, apps/web/src/services/auth.ts
  - DependÃªncias: T005
  - CritÃ©rios de aceite: Um usuÃ¡rio consegue entrar com Google; conta nova Ã© criada automaticamente; fluxo redireciona para o app autenticado.
  - Prioridade: Alta
  - Estimativa: Grande
  - Subtasks:
    - Configurar provider e callbacks
    - Criar fluxo de redirecionamento no frontend
    - Persistir o usuÃ¡rio Google no banco

### Feature 2.2 â€” Profile and preferences

#### User Story 2.2 â€” Manage user identity, public username, and visual preferences

- [ ] T007 Implement user profile, username, and theme preference flows
  - Description: Add the first-use onboarding data collection for public username and theme selection, plus profile update endpoints.
  - Arquivos provÃ¡veis: apps/api/app/api/users.py, apps/api/app/schemas/user.py, apps/web/src/pages/onboarding/OnboardingPage.tsx, apps/web/src/services/user.ts
  - DependÃªncias: T005, T006
  - CritÃ©rios de aceite: O usuÃ¡rio define username e tema no onboarding; os dados sÃ£o salvos e recuperados corretamente; a experiÃªncia permanece consistente.
  - Prioridade: Alta
  - Estimativa: MÃ©dia
  - Subtasks:
    - Criar endpoints de perfil e preferÃªncias
    - Implementar validaÃ§Ã£o de username Ãºnico
    - Persistir e aplicar tema selecionado

## Epic 3 â€” Frontend Experience and Product Shell

### Feature 3.1 â€” Frontend foundation

#### User Story 3.1 â€” Create the app shell for a premium workspace experience

- [ ] T008 Build the frontend base application and routing structure
  - Description: Set up the Vite app, router, layout shell, and protected/public route separation.
  - Arquivos provÃ¡veis: apps/web/src/main.tsx, apps/web/src/App.tsx, apps/web/src/routes/*.tsx, apps/web/src/pages/*.tsx
  - DependÃªncias: T001, T005
  - CritÃ©rios de aceite: O frontend carrega corretamente; rotas pÃºblicas e privadas funcionam; o shell do app estÃ¡ pronto para receber mÃ³dulos.
  - Prioridade: Alta
  - Estimativa: MÃ©dia
  - Subtasks:
    - Criar estrutura de rotas e pÃ¡ginas base
    - Definir container principal e layout shell
    - Conectar o frontend ao backend de autenticaÃ§Ã£o

- [ ] T009 Create the reusable Design System and shared UI primitives
  - Description: Build a shared UI package with tokens, buttons, cards, inputs, and layout primitives that support the premium experience.
  - Arquivos provÃ¡veis: packages/ui/src/components/*.tsx, packages/ui/src/design-tokens/*.ts, packages/ui/src/index.ts
  - DependÃªncias: T008
  - CritÃ©rios de aceite: Os componentes comuns sÃ£o reutilizÃ¡veis; eles funcionam bem em landing page, auth e dashboard; o design permanece consistente.
  - Prioridade: Alta
  - Estimativa: Grande
  - Subtasks:
    - Definir tokens de cor, tipografia e espaÃ§amento
    - Criar componentes bÃ¡sicos de interface
    - Integrar o package ui no frontend

- [ ] T010 Implement theme support through design tokens
  - Description: Support light, dark, and system-based themes with token-driven styling and persistence per user.
  - Arquivos provÃ¡veis: packages/ui/src/design-tokens/themes.ts, apps/web/src/store/theme.ts, apps/web/src/providers/ThemeProvider.tsx
  - DependÃªncias: T007, T009
  - CritÃ©rios de aceite: O usuÃ¡rio consegue alternar temas; o tema Ã© preservado na sessÃ£o e no backend quando relevante; a experiÃªncia fica visualmente consistente.
  - Prioridade: MÃ©dia
  - Estimativa: MÃ©dia
  - Subtasks:
    - Definir tokens para os temas
    - Criar troca de tema no shell
    - Persistir preferÃªncia do usuÃ¡rio

- [ ] T011 Implement the main application layout and navigation
  - Description: Build the primary shell for unauthenticated and authenticated views, including navigation and workspace entry points.
  - Arquivos provÃ¡veis: apps/web/src/layouts/MainLayout.tsx, apps/web/src/components/Sidebar.tsx, apps/web/src/components/Header.tsx
  - DependÃªncias: T008, T009
  - CritÃ©rios de aceite: O layout principal funciona em desktop e mobile bÃ¡sico; a navegaÃ§Ã£o facilita acesso Ã s capabilities e Ã¡reas principais.
  - Prioridade: Alta
  - Estimativa: MÃ©dia
  - Subtasks:
    - Criar topbar/sidebar e Ã¡rea principal
    - Definir estados vazios e loading
    - Garantir consistÃªncia visual e acessibilidade bÃ¡sica

### Feature 3.2 â€” Public experience and workspace entry

#### User Story 3.2 â€” Deliver a premium first impression and a central workspace

- [ ] T012 Build the landing page and value proposition experience
  - Description: Create a polished landing page that explains the product clearly and drives users into sign-up or sign-in.
  - Arquivos provÃ¡veis: apps/web/src/pages/LandingPage.tsx, apps/web/src/components/HeroSection.tsx, apps/web/src/components/CTASection.tsx
  - DependÃªncias: T008, T009
  - CritÃ©rios de aceite: A landing page comunica claramente o valor do produto, fica visualmente premium e guia o usuÃ¡rio para o prÃ³ximo passo.
  - Prioridade: Alta
  - Estimativa: MÃ©dia
  - Subtasks:
    - Criar hero, benefÃ­cios e CTA principal
    - Garantir responsividade e consistÃªncia visual
    - Preparar copy para validaÃ§Ã£o do MVP

- [ ] T013 Build the dashboard as the primary workspace
  - Description: Implement the main dashboard screen that acts as the central hub for capabilities, search, and recent activity.
  - Arquivos provÃ¡veis: apps/web/src/pages/DashboardPage.tsx, apps/web/src/components/CapabilityGrid.tsx, apps/web/src/components/WorkspaceShell.tsx
  - DependÃªncias: T011, T007
  - CritÃ©rios de aceite: O usuÃ¡rio entra no dashboard e consegue localizar as capabilities principais sem navegar em pÃ¡ginas isoladas.
  - Prioridade: Alta
  - Estimativa: Grande
  - Subtasks:
    - Organizar cards de capabilities e Ã¡rea de histÃ³rico
    - Garantir acesso em atÃ© dois cliques
    - Criar estados vazios e boas prÃ¡ticas de layout

## Epic 4 â€” Productivity Workflows

### Feature 4.1 â€” Search, history, and capability access

#### User Story 4.1 â€” Make workflows discoverable and resumable

- [ ] T014 Implement global search over capabilities and recent items
  - Description: Add a global search experience that helps users find capabilities and recent work quickly.
  - Arquivos provÃ¡veis: apps/web/src/components/GlobalSearch.tsx, apps/web/src/services/search.ts, apps/api/app/api/search.py
  - DependÃªncias: T013
  - CritÃ©rios de aceite: O usuÃ¡rio encontra uma capability ou item recente a partir de um termo simples; o resultado aparece de forma clara e rÃ¡pida.
  - Prioridade: MÃ©dia
  - Estimativa: MÃ©dia
  - Subtasks:
    - Criar UI de busca no shell
    - Implementar busca no frontend e backend
    - Definir ranking simples e resultados relevantes

- [ ] T015 Implement recent history and quick resume flow
  - Description: Record recent capability usage for logged-in users only and surface it on the dashboard so authenticated users can quickly resume prior work.
  - Arquivos provÃ¡veis: apps/api/app/api/history.py, apps/api/app/models/recent_item.py, apps/web/src/components/RecentHistory.tsx
  - DependÃªncias: T004, T013
  - CritÃ©rios de aceite: O histórico é salvo apenas para usuário logado após uso de uma capability; o usuário consegue abrir um item recente e retornar ao fluxo; usuários anônimos não possuem histórico persistido no MVP.
  - Prioridade: MÃ©dia
  - Estimativa: MÃ©dia
  - Subtasks:
    - Criar endpoint e modelo de histÃ³rico
    - Expor o histÃ³rico no dashboard
    - Definir retenção simples para usuários autenticados no MVP

### Feature 4.2 â€” Initial capabilities

#### User Story 4.2 â€” Support the first set of developer utilities as modular capabilities

- [ ] T016 Implement the initial capability modules
  - Description: Build the approved MVP capabilities: JWT Decoder, Base64 Encode/Decode, UUID Generator, Hash Generator, Timestamp Converter, JSON Formatter, JSON Validator, YAML Formatter, CSV to JSON, SQL Formatter, URL Encode/Decode, Query Params Parser, HTTP Status Reference, Headers Formatter, and cURL Formatter.
  - Arquivos provÃ¡veis: apps/web/src/features/*, apps/web/src/lib/transformers/*.ts, apps/web/src/components/CapabilityShell.tsx
  - DependÃªncias: T013
  - Critérios de aceite: Todas as capabilities aprovadas em FR-006 estão disponíveis no workspace; cada uma executa client-side com entrada válida; o resultado pode ser copiado; inputs/outputs não são enviados ao backend.
  - Prioridade: Alta
  - Estimativa: Grande
  - Subtasks:
    - Criar registro/metadata das capabilities
    - Implementar cada workflow aprovado com lógica client-side
    - Padronizar entrada, saída, erro, feedback visual e indicador de processamento local

## Epic 4.3 â€” Favorites and quick access

### Feature 4.3.1 â€” Favorites data model and API

- [ ] T021 [US3] Implement favorites persistence and CRUD API in apps/api/app/api/favorites.py, apps/api/app/models/favorite.py, and apps/api/app/schemas/favorite.py
  - Requirement: FR-002, FR-010, FR-014
  - User Story: US-3
  - User Problem: UP-0004, UP-0007
  - Capability: CAP-001
  - Epic: E-004
  - Notes: Support add, remove, list, and conflict-safe toggle operations for user favorites.

- [ ] T022 [US3] Implement server-side validation, authorization, and privacy-safe persistence rules for favorites in apps/api/app/services/favorites_service.py
  - Requirement: FR-002, FR-010, FR-014, NFR-005
  - User Story: US-3
  - User Problem: UP-0005, UP-0007
  - Capability: CAP-001
  - Epic: E-004
  - Notes: Ensure favorite entries only store non-sensitive metadata and never persist sensitive capability payloads.

### Feature 4.3.2 â€” Favorites experience and UX

- [ ] T023 [US3] Add favorite toggle controls to capability cards and workflow views in apps/web/src/components/CapabilityCard.tsx and apps/web/src/features/*
  - Requirement: FR-010, FR-005, NFR-003
  - User Story: US-3
  - User Problem: UP-0004, UP-0007
  - Capability: CAP-001
  - Epic: E-004
  - Notes: Users must be able to favorite and unfavorite a capability in one click from the workspace.

- [ ] T024 [US3] Implement a dedicated favorites area in the workspace shell with empty, loading, and populated states in apps/web/src/components/FavoritesPanel.tsx and apps/web/src/pages/DashboardPage.tsx
  - Requirement: FR-010, FR-003, NFR-003, NFR-004
  - User Story: US-3
  - User Problem: UP-0004, UP-0007, UP-0008
  - Capability: CAP-001
  - Epic: E-004
  - Notes: The favorites area must expose a defined empty state and support opening a favorite in one click.

- [ ] T025 [US3] Connect favorites to workspace navigation and search so favorited capabilities are discoverable from the dashboard and global search in apps/web/src/services/search.ts and apps/web/src/components/GlobalSearch.tsx
  - Requirement: FR-008, FR-010, FR-005
  - User Story: US-3
  - User Problem: UP-0004, UP-0007
  - Capability: CAP-001
  - Epic: E-004
  - Notes: Favorites should be surfaced as a first-class result type in the global search experience.

### Feature 4.3.3 â€” Persistence and analytics

- [ ] T026 [US3] Implement client-side and server-side persistence strategy for favorites in apps/web/src/store/favorites.ts and apps/api/app/db/models/favorites.py
  - Requirement: FR-002, FR-010, FR-014, NFR-005
  - User Story: US-3
  - User Problem: UP-0005, UP-0007
  - Capability: CAP-001
  - Epic: E-004
  - Notes: Use minimal metadata only; do not persist capability input payloads or sensitive content.

- [ ] T027 [US3] Track analytics events for favorite add, remove, open, and empty-state interactions in apps/web/src/lib/analytics.ts and apps/api/app/api/analytics.py
  - Requirement: FR-010, NFR-005, NFR-008
  - User Story: US-3
  - User Problem: UP-0004, UP-0007
  - Capability: CAP-001
  - Epic: E-004
  - Notes: Analytics must capture only non-sensitive event metadata and never the underlying capability inputs.

### Feature 4.3.4 â€” Acceptance criteria and tests

- [ ] T028 [US3] Add acceptance criteria validation coverage for favorites in apps/web/src/**/*.test.tsx and apps/api/tests/**/*.py
  - Requirement: FR-002, FR-005, FR-008, FR-010, FR-014
  - User Story: US-3
  - User Problem: UP-0004, UP-0007
  - Capability: CAP-001
  - Epic: E-004
  - Notes: Cover add/remove, empty state, one-click open, search visibility, and persistence behavior.

- [ ] T029 [US3] Add end-to-end tests for the favorites workflow in e2e/favorites.spec.ts
  - Requirement: FR-010, FR-003, NFR-003, NFR-004
  - User Story: US-3
  - User Problem: UP-0004, UP-0007, UP-0008
  - Capability: CAP-001
  - Epic: E-004
  - Notes: Validate that a user can favorite a capability, view it in the favorites area, reopen it, and unfavorite it successfully.

## Epic 5 â€” Validation and Delivery

### Feature 5.1 â€” Analytics, SEO, and quality

#### User Story 5.1 â€” Validate product value and prepare the MVP for real users

- [ ] T017 Implement analytics events for core product learning
  - Description: Track the minimum MVP analytics events: landing_viewed, cta_clicked, auth_google_started, auth_google_completed, auth_failed, onboarding_completed, workspace_viewed, capability_opened, capability_executed, copy_clicked, search_performed, history_item_opened, favorite_added, favorite_removed, and error_shown.
  - Arquivos provÃ¡veis: apps/api/app/api/analytics.py, apps/web/src/lib/analytics.ts
  - DependÃªncias: T006, T015, T016
  - CritÃ©rios de aceite: Eventos principais sÃ£o enviados e persistidos corretamente; a equipe consegue acompanhar o fluxo do usuÃ¡rio.
  - Prioridade: MÃ©dia
  - Estimativa: MÃ©dia
  - Subtasks:
    - Implementar conjunto mínimo de eventos definido no plano
    - Criar camada de envio no frontend e backend
    - Validar que os eventos chegam ao armazenamento

- [ ] T018 Add basic SEO for the public experience
  - Description: Add core SEO metadata and semantic structure to the landing page to support discovery and credibility.
  - Arquivos provÃ¡veis: apps/web/index.html, apps/web/src/pages/LandingPage.tsx, public/robots.txt, public/sitemap.xml
  - DependÃªncias: T012
  - CritÃ©rios de aceite: A landing page possui title, description, headings e estrutura semÃ¢ntica bÃ¡sica; a pÃ¡gina indexa corretamente em mecanismos bÃ¡sicos de busca.
  - Prioridade: MÃ©dia
  - Estimativa: Pequena
  - Subtasks:
    - Definir meta tags e tÃ­tulos
    - Criar estrutura semÃ¢ntica e links importantes
    - Validar a renderizaÃ§Ã£o bÃ¡sica do conteÃºdo

### Feature 5.2 â€” Testing, documentation, and launch readiness

#### User Story 5.2 â€” Ensure the MVP is maintainable and demo-ready

- [ ] T019 Add automated tests for core user journeys and capability flows
  - Description: Implement unit, integration, and end-to-end tests for authentication, workspace access, search, history, and representative capabilities.
  - Arquivos provÃ¡veis: apps/web/src/**/*.test.tsx, apps/api/tests/**/*.py, e2e/**/*.spec.ts
  - DependÃªncias: T005, T006, T013, T014, T015, T016
  - CritÃ©rios de aceite: Os cenÃ¡rios crÃ­ticos do MVP passam em testes automatizados; regressÃµes sÃ£o detectadas precocemente.
  - Prioridade: Alta
  - Estimativa: Grande
  - Subtasks:
    - Criar testes unitÃ¡rios para utilidades e componentes
    - Criar testes de integraÃ§Ã£o para API
    - Criar smoke tests E2E para fluxo principal

- [ ] T020 Create README and implementation documentation
  - Description: Document the architecture, environment setup, feature scope, and local startup instructions for the MVP.
  - Arquivos provÃ¡veis: README.md, docs/architecture.md, docs/adr/*.md, docs/runbook.md
  - DependÃªncias: T001, T002, T003, T019
  - CritÃ©rios de aceite: Um novo desenvolvedor consegue rodar o projeto e entender a estrutura do MVP sem ajuda adicional.
  - Prioridade: MÃ©dia
  - Estimativa: Pequena
  - Subtasks:
    - Escrever setup local e comandos principais
    - Documentar stack, estrutura e decisÃµes de arquitetura
    - Registrar limites e prÃ³ximos passos do MVP




