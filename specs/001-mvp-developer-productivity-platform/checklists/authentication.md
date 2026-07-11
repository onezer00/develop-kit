# Authentication Checklist: MVP Developer Productivity Platform

**Purpose**: Validate that authentication flows are secure, clear, and consistent for the MVP.
**Created**: 2026-07-09
**Feature**: [spec.md](../spec.md)

## Identity and Session Handling

- [ ] CHK001 Local registration creates a user record with the required profile fields.
- [ ] CHK002 Login rejects invalid credentials with a clear error message.
- [ ] CHK003 Access and refresh tokens are issued and invalidated correctly.
- [ ] CHK004 Logout clears the session state and blocks further access to protected routes.
- [ ] CHK005 Unauthenticated users are redirected to sign-in when they access protected content.

## Notes

- Check items off as completed: `[x]`
- Add any auth edge-case observations inline.
