# Authentication Checklist: MVP Developer Productivity Platform

**Purpose**: Validate that authentication flows are secure, clear, and consistent for the MVP.
**Created**: 2026-07-09
**Feature**: [spec.md](../spec.md)

## Identity and Session Handling

- [ ] CHK001 Google OAuth creates or resumes a user record with the required profile fields.
- [ ] CHK002 Failed or cancelled Google Auth returns the user to a clear and safe state.
- [ ] CHK003 Access and refresh tokens are issued and invalidated correctly.
- [ ] CHK004 Logout clears the session state and blocks further access to protected routes.
- [ ] CHK005 Unauthenticated users are redirected to sign-in when they access protected content.

## Notes

- Checklist updated for D-0013: Google Auth only. Local email/password auth is out of scope for the MVP.
- All items require implementation validation.
