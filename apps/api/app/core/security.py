"""Security helpers placeholder for Google Auth and application JWT handling."""

from datetime import datetime, timedelta, timezone


def access_token_expiry(minutes: int = 15) -> datetime:
    return datetime.now(timezone.utc) + timedelta(minutes=minutes)
