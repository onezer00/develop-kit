# Runbook

## Local Frontend

```powershell
npm install
npm run dev
```

Open `http://127.0.0.1:5173`.

## Local API

```powershell
cd apps/api
python -m uvicorn app.main:app --reload
```

Open `http://127.0.0.1:8000/health`.

## Docker Compose

```powershell
docker compose up --build
```

Proxy: `http://127.0.0.1:8080`.
