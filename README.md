# bnb-motherboard

Internal operations platform for the bits&bytes network.

The repo is a hybrid monorepo:

- `apps/web` and `packages/ui` are Bun-managed TypeScript workspaces.
- `apps/api` is an independent Python FastAPI project managed by `uv`.
- `plugins/*` holds first-party and third-party plugin packages.

## What It Covers

- Discord-backed identity and access management.
- Provisioning and sync for guild roles and internal memberships.
- Plugin loading and extension points.
- A Next.js 15 dashboard backed by a FastAPI REST API.
- Docker-based local and production deployment.

## Repository Layout

```text
bnb-motherboard/
├── apps/
│   ├── web/                    # Next.js 15 App Router frontend
│   └── api/                    # FastAPI backend managed with uv
├── packages/
│   └── ui/                     # Shared React component library
├── plugins/                    # First-party plugin workspace
├── docker/                     # Service Dockerfiles
├── docker-compose.yml          # Local orchestration
├── docker-compose.prod.yml     # Production orchestration
├── .env.example                # Environment template
├── turbo.json                  # Bun/Turborepo task graph
└── AGENTS.md                   # Workspace instructions
```

## Local Setup

```bash
bun install
docker compose up -d postgres redis
```

For the backend, use `uv` inside `apps/api` once the Python scaffold is in place.

## Environment

Copy [.env.example](/home/equation/Projects/motherboard/.env.example) to `.env` and fill in the Discord OAuth, session, and API secrets.
