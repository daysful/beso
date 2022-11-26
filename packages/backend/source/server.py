from fastapi import FastAPI, Header
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

from source.simulation import Simulation, SimulationOptionsModel
from source.utilities.timer import RepeatedTimer
from source.utilities.self_clean import self_clean, cleaning_time
from source.datastore import \
    serialize_simulations, \
    write_simulations, \
    simulations
from source.constants import \
    favicon_path



def generate_server():
    app = FastAPI()

    app.add_middleware(
        CORSMiddleware,
        allow_origins=['*'],
        allow_credentials=True,
        allow_methods=['*'],
        allow_headers=['*'],
    )

    RepeatedTimer(cleaning_time, self_clean, simulations)


    @app.get("/")
    async def __root__(
        beso_username: str | None = Header(default=None),
    ):
        return {
            "status": True,
            "simulations": serialize_simulations(simulations),
        }

    @app.get('/favicon.ico', include_in_schema=False)
    async def __favicon__():
        return FileResponse(favicon_path)

    @app.post("/new")
    async def __new__(
        options: SimulationOptionsModel = None,
        beso_username: str | None = Header(default=None),
    ):
        options.generated_by = beso_username
        simulation = Simulation(options)
        simulations[simulation.id] = simulation
        write_simulations(simulations)

        return {
            "status": True,
            "simulationID": simulation.id,
        }

    @app.get("/status")
    async def __status__(
        simulationID: str,
        beso_username: str | None = Header(default=None),
    ):
        simulation = simulations.get(simulationID)
        if not simulation:
            return {
                "status": False,
            }

        return {
            "status": True,
            "simulation": simulation,
        }

    @app.post("/start")
    async def __start__(
        simulationID: str,
        beso_username: str | None = Header(default=None),
    ):
        simulation = simulations.get(simulationID)
        if not simulation:
            return {
                "status": False,
            }

        simulation.start()
        return {
            "status": True,
        }

    @app.post("/stop")
    async def __stop__(
        simulationID: str,
        beso_username: str | None = Header(default=None),
    ):
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
