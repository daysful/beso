from pydantic import BaseModel
import time
import uuid
import shutil

from betse.science.parameters import Parameters
from betse.science.simrunner import SimRunner



class SimulationOptionsModel(BaseModel):
    name: str | None = None
    betse: bool | None = None


def betse_copy_data(id: str):
    base_data_path = './source/data/yaml'
    new_simulation_path = f'./simulation_data/{id}'
    shutil.copytree(base_data_path, new_simulation_path)

    return new_simulation_path


class BetseSimulation:
    def __init__(self, id: str):
        self.simulation_path = betse_copy_data(id)

        conf_filename = f'{self.simulation_path}/sim_config.yaml'
        p = Parameters.make(conf_filename=conf_filename)
        self.simRunner = SimRunner(p=p)

    def start(self):
        self.simRunner.seed()
        self.simRunner.init()
        self.simRunner.sim()
        self.simRunner.plot_seed()
        self.simRunner.plot_init()


def new_simulation_id():
    return str(uuid.uuid4())

def new_simulation_generated_at():
    return int(time.time())


class Simulation:
    def __init__(self, options: SimulationOptionsModel | None) -> None:
        self.id = new_simulation_id()
        self.generated_at = new_simulation_generated_at()
        self.name = self.id if options is None \
            else options.name if options.name \
            else self.id

        if options and options.betse:
            self.betse = BetseSimulation(self.id)
        else:
            self.betse = None

    def start(self) -> None:
        if self.betse:
            self.betse.start()

    def stop(self) -> None:
        pass


def clean_simulation_data(simulation: Simulation):
    if simulation.betse and simulation.betse.simulation_path:
        shutil.rmtree(simulation.betse.simulation_path)
