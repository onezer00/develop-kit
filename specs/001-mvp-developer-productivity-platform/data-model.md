# Data Model: MVP Developer Productivity Platform

**Feature**: MVP Developer Productivity Platform  
**Date**: 2026-07-11  
**Status**: Ready for implementation planning

## Data Principles

- Store only data required for Google-authenticated workspace continuity.
- Do not store capability inputs or outputs.
- Store only metadata for history, favorites, and analytics.
- Treat JWTs, payloads, headers, cURL commands, JSON/YAML/CSV/SQL content, secrets, tokens, and private API material as ephemeral browser-only data.
- Prefer deletion-capable user-owned records for recent history and favorites.

## Entities

### User

Represents a Google-authenticated user.

| Field | Type | Required | Notes |
|---|---|---:|---|
| id | UUID | Yes | Internal primary key |
| email | string | Yes | Unique email from Google profile |
| google_sub | string | Yes | Unique Google subject identifier |
| auth_provider | enum | Yes | `google` for MVP |
| username | string | Yes | Unique public/workspace username |
| display_name | string | No | From Google or user profile |
| avatar_url | string | No | Optional Google profile image |
| theme_preference | enum | Yes | `system`, `dark`, `light`; default `system` |
| onboarding_completed_at | datetime | No | Null until username/theme onboarding completes |
| created_at | datetime | Yes | Server generated |
| updated_at | datetime | Yes | Server generated |
| is_active | boolean | Yes | Default true |

Rules:

- `email` must be unique.
- `google_sub` must be unique.
- `username` must be unique.
- No password hash is stored in the MVP.

### UserSession

Represents an application session issued after Google Auth.

| Field | Type | Required | Notes |
|---|---|---:|---|
| id | UUID | Yes | Internal primary key |
| user_id | UUID | Yes | FK to User |
| refresh_token_hash | string | Yes | Store hash only, never raw refresh token |
| user_agent_hash | string | No | Optional coarse session metadata |
| ip_hash | string | No | Optional coarse anti-abuse metadata |
| expires_at | datetime | Yes | Refresh expiry |
| revoked_at | datetime | No | Set on logout/revocation |
| created_at | datetime | Yes | Server generated |

Rules:

- Raw refresh tokens must not be persisted.
- Revoked sessions cannot refresh access tokens.

### Favorite

Represents a user's saved capability shortcut.

| Field | Type | Required | Notes |
|---|---|---:|---|
| id | UUID | Yes | Internal primary key |
| user_id | UUID | Yes | FK to User |
| capability_key | string | Yes | Matches static capability registry key |
| created_at | datetime | Yes | Server generated |

Rules:

- Unique pair: `user_id`, `capability_key`.
- No capability input or output is stored.

### RecentItem

Represents authenticated recent capability usage.

| Field | Type | Required | Notes |
|---|---|---:|---|
| id | UUID | Yes | Internal primary key |
| user_id | UUID | Yes | FK to User |
| capability_key | string | Yes | Matches static capability registry key |
| title | string | Yes | Human-readable capability title |
| summary | string | No | Non-sensitive summary only, never payload content |
| last_used_at | datetime | Yes | Used for ordering |
| created_at | datetime | Yes | Server generated |

Rules:

- Recent history exists only for authenticated users.
- Keep at most 5 visible recent items in the workspace.
- Retention target for MVP: keep recent metadata for up to 30 days or until user deletion, whichever comes first.
- No capability input or output is stored.

### AnalyticsEvent

Represents privacy-safe product telemetry.

| Field | Type | Required | Notes |
|---|---|---:|---|
| id | UUID | Yes | Internal primary key |
| user_id | UUID | No | Present only when authenticated |
| anonymous_session_id | string | No | For public funnel events only |
| event_name | string | Yes | One of the approved MVP event names |
| surface | string | No | Page/workspace/component surface |
| capability_key | string | No | Required for capability events |
| status | string | No | `success`, `error`, `cancelled`, etc. |
| duration_bucket | string | No | Bucketed timing only, not raw detailed tracing |
| metadata | JSONB | No | Non-sensitive coarse metadata |
| created_at | datetime | Yes | Server generated |

Rules:

- Never store capability input, output, tokens, secrets, payloads, stack traces with user content, or raw search queries.
- Search analytics should store only result count buckets unless raw query capture is explicitly approved later.

### Capability Metadata

Static registry item, likely shipped in frontend code for MVP.

| Field | Type | Required | Notes |
|---|---|---:|---|
| key | string | Yes | Stable capability identifier |
| title | string | Yes | UI title |
| workflow_group | enum | Yes | `authentication`, `data`, `api-web` |
| execution_mode | enum | Yes | `client-side` for MVP |
| privacy_level | enum | Yes | `low`, `medium`, `high` |
| enabled | boolean | Yes | Feature availability flag |

Rules:

- All MVP capabilities are client-side.
- Backend may serve capability metadata later, but does not execute capability logic in the MVP.

## Relationships

```text
User 1 -- * UserSession
User 1 -- * Favorite
User 1 -- * RecentItem
User 1 -- * AnalyticsEvent
CapabilityMetadata 1 -- * Favorite
CapabilityMetadata 1 -- * RecentItem
CapabilityMetadata 1 -- * AnalyticsEvent
```

## Approved MVP Analytics Events

- `landing_viewed`
- `cta_clicked`
- `auth_google_started`
- `auth_google_completed`
- `auth_failed`
- `onboarding_completed`
- `workspace_viewed`
- `capability_opened`
- `capability_executed`
- `copy_clicked`
- `search_performed`
- `history_item_opened`
- `favorite_added`
- `favorite_removed`
- `error_shown`

## Retention

- Recent history metadata: 30 days for MVP, visible list capped to 5 entries.
- Favorites: retained until user removes them or account deletion is requested.
- Sessions: retained until expiry/revocation; refresh token hash only.
- Analytics: retain privacy-safe event metadata for product learning; never retain sensitive payload content.
