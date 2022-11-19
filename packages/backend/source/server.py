from fastapi import FastAPI
from typing import Optional

from source.simulation import Simulation, SimulationOptionsModel



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
    async def __start__(options: SimulationOptionsModel = None):
        simulation = Simulation(options)
        simulations[simulation.id] = simulation

        return {
            "status": True,
            "simulationID": simulation.id,
        }

    @app.get("/status")
    async def __status__(simulationID: str):
        simulation = simulations.get(simulationID)
        if not simulation:
            return {
                "status": False,
            }

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
