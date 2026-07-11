from fastapi import APIRouter

router = APIRouter(tags=["health"])


@router.get("/health")
def health_check() -> dict[str, object]:
    return {
        "data": {
            "status": "ok",
            "service": "develop-kit-api",
        },
        "request_id": "local-healthcheck",
    }
