from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Develop Kit API"
    app_origin: str = "http://127.0.0.1:5173"
    api_origin: str = "http://127.0.0.1:8000"
    database_url: str = "postgresql+psycopg://postgres:postgres@localhost:5432/developkit"
    jwt_secret: str = "local-development-secret"
    google_client_id: str = ""
    google_client_secret: str = ""
    google_redirect_uri: str = "http://127.0.0.1:8000/auth/google/callback"

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")


@lru_cache
def get_settings() -> Settings:
    return Settings()
