import os
import uuid
import shutil
import threading

from pydantic import BaseModel

from betse.science.parameters import Parameters
from betse.science.simrunner import SimRunner

from source.constants import betse_data_path, simulations_directory
from source.utilities.general import now, generate_id



class SimulationOptionsModel(BaseModel):
    name: str | None = None
    betse: bool | None = None

    id: str | None = None
    generated_at: int | None = None
    generated_by: str | None = None


def betse_copy_data(id: str):
    new_simulation_path = os.path.join(
        simulations_directory,
        id,
    )
    if os.path.exists(new_simulation_path):
        return new_simulation_path

    shutil.copytree(betse_data_path, new_simulation_path)

    return new_simulation_path


class BetseSimulation():
    def __init__(self, id: str, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.simulation_path = betse_copy_data(id)

        conf_filename = f'{self.simulation_path}/sim_config.yaml'
        p = Parameters.make(conf_filename=conf_filename)
        self.simRunner = SimRunner(p=p)

    def start(self):
        thread = threading.Thread(target=self.start_simRunner)
        thread.daemon = True
        thread.start()

    def start_simRunner(self):
        self.simRunner.seed()
        self.simRunner.init()
        self.simRunner.sim()
        self.simRunner.plot_seed()
        self.simRunner.plot_init()


class Simulation:
    def __init__(self, options: SimulationOptionsModel | None) -> None:
        self.id = options.id if options and options.id \
            else generate_id()
        self.generated_at = options.generated_at if options and options.generated_at \
            else now()
        self.generated_by = options.generated_by if options and options.generated_by \
            else generate_id()
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
