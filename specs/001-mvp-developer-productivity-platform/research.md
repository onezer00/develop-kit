# Research: MVP Developer Productivity Platform

**Feature**: MVP Developer Productivity Platform  
**Date**: 2026-07-11  
**Status**: Approved for MVP implementation

## Resolved Decisions

### Authentication

Decision: the MVP uses Google Auth only.

Rationale: this reduces initial security scope, avoids password reset and credential-management flows, and keeps the MVP focused on product validation.

Implications:

- No local email/password registration in the MVP.
- No password reset flow in the MVP.
- Backend still owns session issuing, refresh, logout, and user profile persistence.
- Future local auth requires a separate spec/plan/tasks update.

### Recent History

Decision: recent history is available only for logged-in users in the MVP.

Rationale: this avoids anonymous storage complexity, privacy ambiguity, and future account-merge behavior.

Implications:

- Anonymous visitors do not get persisted history.
- Recent items are associated with authenticated users.
- Future anonymous history requires a separate product decision and privacy review.

## Capability Execution Classification Report

Decision: all approved MVP capabilities will run client-side initially. Use this table to document the execution model and remaining implementation constraints.

Backend is used only for Google Auth, session state, profile/preferences, favorites, authenticated history metadata, analytics metadata, and optional capability metadata. Backend must not process or persist capability inputs/outputs.

| Capability | Recommended Execution | Why | Backend Needed For MVP? | Sensitive Input Risk | Product Decision Needed |
|---|---|---|---|---|---|
| JWT Decoder | Client-side | Decoding JWT header/payload does not require server execution. Signature verification is not in current scope. | No | High | Confirm decode-only vs future verification |
| Base64 Encode/Decode | Client-side | Pure deterministic string transform. | No | Medium | Confirm text/binary limits |
| UUID Generator | Client-side | Browser crypto APIs can generate UUIDs locally. | No | Low | Confirm versions supported, likely UUID v4 only |
| Hash Generator | Client-side | Browser crypto APIs support common secure hashes; some legacy hashes may need libraries. | No for modern hashes | Medium | Confirm algorithms: SHA-256/SHA-512 vs MD5/SHA-1 |
| Timestamp Converter | Client-side | Date/time conversion is deterministic and local. | No | Low | Confirm timezone handling and supported formats |
| JSON Formatter | Client-side | Native JSON parse/stringify can handle formatting locally. | No | High | Confirm max input size |
| JSON Validator | Client-side | Native JSON parsing can validate locally. | No | High | Confirm error detail format |
| YAML Formatter | Client-side | Can run locally with a browser YAML parser/formatter library. | No | High | Confirm selected library and max input size |
| CSV to JSON | Client-side | Can run locally with parser library. | No | Medium | Confirm delimiter/header behavior and max input size |
| SQL Formatter | Client-side | Can run locally with a formatter library. | No | Medium | Confirm SQL dialects supported |
| URL Encode/Decode | Client-side | Browser APIs support URL encoding/decoding. | No | Medium | Confirm component vs full URL modes |
| Query Params Parser | Client-side | Browser URLSearchParams handles parsing locally. | No | Medium | Confirm duplicate key handling |
| HTTP Status Reference | Client-side | Static reference data can ship in frontend bundle. | No | Low | Confirm source/list and grouping |
| Headers Formatter | Client-side | Text parsing/formatting can run locally. | No | Medium | Confirm duplicate/multiline header handling |
| cURL Formatter | Client-side initially | Simple parsing/formatting runs in browser for MVP; advanced shell interpretation is explicitly deferred. | No | High | Confirm supported cURL syntax subset |

## Analytics Recommendation

The MVP analytics layer should answer four questions:

1. Are users entering the product?
2. Are users authenticating and reaching the workspace?
3. Which capabilities are used and completed?
4. Do users return through history/favorites/search?

Minimum event set:

| Event | Purpose | Required Metadata | Must Not Capture |
|---|---|---|---|
| landing_viewed | Entry/funnel baseline | anonymous session id, timestamp, referrer category | full URL query with sensitive data |
| cta_clicked | Landing-to-auth intent | CTA id, surface | payloads |
| auth_google_started | Auth funnel start | surface | Google tokens |
| auth_google_completed | Auth success | user id, new/existing user flag | Google profile beyond approved profile fields |
| auth_failed | Auth quality | coarse reason code | token contents, detailed provider response |
| onboarding_completed | Activation setup | selected theme, has username flag | raw sensitive profile data |
| workspace_viewed | Activation | user id, timestamp | workspace input contents |
| capability_opened | Capability adoption | capability key, workflow group | input content |
| capability_executed | Core value event | capability key, success/error, duration bucket | input/output content |
| copy_clicked | Value completion proxy | capability key | copied content |
| search_performed | Discoverability | result count bucket, surface | raw query unless explicitly approved later |
| history_item_opened | Retention/resume | capability key, item age bucket | stored payloads |
| favorite_added | Retention intent | capability key | inputs/outputs |
| favorite_removed | Retention signal | capability key | inputs/outputs |
| error_shown | Quality monitoring | surface, coarse error code | stack traces with sensitive data |

Privacy rule: analytics must never store capability input, capability output, tokens, secrets, private API material, or full payload content.

## Remaining Product Decisions

- Confirm max input sizes for text-heavy tools such as JSON, YAML, CSV, SQL, headers, and cURL.
- Confirm whether cURL Formatter is a simple formatter/parser in MVP or a richer command inspector later.

