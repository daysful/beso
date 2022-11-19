from fastapi import FastAPI



def generate_server():
    app = FastAPI()

    @app.get("/")
    async def __root__():
        return {"status": True}

    @app.post("/start")
    async def __start__():
        return {"status": False}

    return app
