from pydantic import BaseModel
import uuid
import shutil



class SimulationOptionsModel(BaseModel):
    name: str | None = None
    betse: bool | None = None


class BetseSimulation:
    def __init__(self, id: str):
        base_data = './source/data/yaml'
        new_simulation = f'./simulation_data/{id}/'
        shutil.copytree(base_data, new_simulation)

        from betse.science.parameters import Parameters
        from betse.science.simrunner import SimRunner

        conf_filename = f'./simulation_data/{id}/sim_config.yaml'
        p = Parameters.make(conf_filename=conf_filename)
        self.simRunner = SimRunner(p=p)
        print(self.simRunner)

    def start(self):
        self.simRunner.seed()
        self.simRunner.init()
        self.simRunner.sim()
        self.simRunner.plot_seed()
        self.simRunner.plot_init()


class Simulation:
    def __init__(self, options: SimulationOptionsModel | None) -> None:
        self.id = str(uuid.uuid4())
        self.name = self.id if options is None \
            else options.name if options.name \
            else self.id

        if options and options.betse:
            self.betse = BetseSimulation(self.id)
            pass

    def start(self) -> None:
        if (self.betse):
            self.betse.start()

    def stop(self) -> None:
        pass
