from fastapi import FastAPI


def create_app() -> FastAPI:
    app = FastAPI(title="bnb-api")

    @app.get("/health")
    async def health_check() -> dict[str, str]:
        return {"status": "ok"}

    return app


app = create_app()
