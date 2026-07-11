# API Contracts: MVP Developer Productivity Platform

**Feature**: MVP Developer Productivity Platform  
**Date**: 2026-07-11  
**Status**: Ready for implementation planning

## Contract Rules

- These are application-internal API contracts for the web app, not a public developer API.
- All authenticated endpoints require a valid application access token.
- Capability inputs and outputs must not be sent to backend endpoints.
- Analytics payloads must contain only privacy-safe metadata.
- Error responses use a consistent envelope.

## Response Envelopes

### Success

```json
{
  "data": {},
  "request_id": "req_..."
}
```

### Error

```json
{
  "error": {
    "code": "string",
    "message": "Human-safe message",
    "details": {}
  },
  "request_id": "req_..."
}
```

## Health

### GET /health

Returns service health for local development and deployment checks.

Response:

```json
{
  "data": {
    "status": "ok"
  },
  "request_id": "req_..."
}
```

## Authentication

### GET /auth/google/login

Starts the Google OAuth flow.

Query parameters:

| Name | Required | Notes |
|---|---:|---|
| redirect_to | No | Safe frontend return path |

Response: HTTP redirect to Google authorization URL.

### GET /auth/google/callback

Handles Google OAuth callback.

Query parameters:

| Name | Required | Notes |
|---|---:|---|
| code | Yes | Authorization code from Google |
| state | Yes | CSRF/session state |

Response: redirects to frontend authenticated route or safe error route.

### GET /auth/me

Returns the current authenticated user.

Response:

```json
{
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "username": "user_name",
    "display_name": "User Name",
    "avatar_url": null,
    "theme_preference": "system",
    "onboarding_completed": false
  },
  "request_id": "req_..."
}
```

### POST /auth/refresh

Refreshes the access token using the secure refresh session.

Response:

```json
{
  "data": {
    "access_token": "jwt",
    "token_type": "bearer",
    "expires_in": 900
  },
  "request_id": "req_..."
}
```

### POST /auth/logout

Invalidates the current session.

Response:

```json
{
  "data": {
    "logged_out": true
  },
  "request_id": "req_..."
}
```

## User Profile And Preferences

### GET /users/me

Returns the current user profile and preferences.

### PATCH /users/me

Request:

```json
{
  "username": "new_username",
  "display_name": "Optional Display Name"
}
```

### PATCH /users/me/theme

Request:

```json
{
  "theme_preference": "system"
}
```

Allowed values: `system`, `dark`, `light`.

### PATCH /users/me/username

Request:

```json
{
  "username": "new_username"
}
```

Errors:

- `USERNAME_TAKEN`
- `INVALID_USERNAME`

## History

### GET /history/recent

Returns recent items for the authenticated user only.

Response:

```json
{
  "data": {
    "items": [
      {
        "id": "uuid",
        "capability_key": "json-formatter",
        "title": "JSON Formatter",
        "summary": null,
        "last_used_at": "2026-07-11T00:00:00Z"
      }
    ]
  },
  "request_id": "req_..."
}
```

### POST /history/items

Records privacy-safe recent usage metadata.

Request:

```json
{
  "capability_key": "json-formatter",
  "title": "JSON Formatter",
  "summary": null
}
```

Rules:

- `summary` must not contain capability input or output.
- Backend enforces authenticated user ownership.

### DELETE /history/items/{id}

Deletes one recent item owned by the authenticated user.

## Favorites

### GET /favorites

Returns favorite capabilities for the authenticated user.

### PUT /favorites/{capability_key}

Adds a favorite idempotently.

### DELETE /favorites/{capability_key}

Removes a favorite idempotently.

## Analytics

### POST /analytics/events

Records one privacy-safe event.

Request:

```json
{
  "event_name": "capability_executed",
  "surface": "workspace",
  "capability_key": "json-formatter",
  "status": "success",
  "duration_bucket": "under_200ms",
  "metadata": {
    "result_size_bucket": "small"
  }
}
```

Rules:

- Never include capability input or output.
- Never include raw JWTs, headers, cURL commands, JSON/YAML/CSV/SQL payloads, secrets, or tokens.
- Raw search query capture is not approved for MVP.

## Capabilities

### GET /capabilities

Returns the approved MVP capability metadata. May be served statically by frontend in MVP; this endpoint is optional unless implementation chooses backend-served metadata.

Response:

```json
{
  "data": {
    "items": [
      {
        "key": "json-formatter",
        "title": "JSON Formatter",
        "workflow_group": "data",
        "execution_mode": "client-side",
        "privacy_level": "high",
        "enabled": true
      }
    ]
  },
  "request_id": "req_..."
}
```
