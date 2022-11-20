from pydantic import BaseModel
import uuid



class SimulationOptionsModel(BaseModel):
    name: str | None = None
    betse: bool | None = None


class BetseSimulation:
    def __init__(self):
        from betse.science.parameters import Parameters
        from betse.science.simrunner import SimRunner

        p = Parameters.make(conf_filename='./source/data/yaml/sim_config.yaml')
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
            self.betse = BetseSimulation()
            pass

    def start(self) -> None:
        if (self.betse):
            self.betse.start()

    def stop(self) -> None:
        pass
