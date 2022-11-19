from fastapi import FastAPI

from source.simulation import Simulation



def generate_server():
    app = FastAPI()

    simulations: dict[str, Simulation] = {}

    @app.get("/")
    async def __root__():
        return {
            "status": True,
            "simulations": simulations,
        }

    @app.post("/start")
    async def __start__():
        simulation = Simulation()
        simulations[simulation.id] = simulation

        return {
            "status": True,
            "simulationID": simulation.id,
        }

    @app.get("/status")
    async def __status__(simulationID: str):
        simulation = simulations.get(simulationID)

        return {
            "status": True,
            "simulation": simulation,
        }

    @app.post("/stop")
    async def __stop__(simulationID: str):
        simulation = simulations.get(simulationID)
        if not simulation:
            return {
                "status": False,
            }

        simulation.stop()
        return {
            "status": True,
        }

    return app
