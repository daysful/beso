from pydantic import BaseModel
import uuid



class SimulationOptionsModel(BaseModel):
    name: str | None = None
    betse: bool | None = None


class BetseSimulation:
    def __init__(self):
        # from betse.science.parameters import Parameters
        # from betse.science.simrunner import SimRunner

        # p = Parameters.make(conf_filename=self._args.conf_filename)
        # simRunner = SimRunner(p=p)
        pass


class Simulation:
    def __init__(self, options: SimulationOptionsModel | None) -> None:
        self.id = str(uuid.uuid4())
        self.name = self.id if options is None \
            else options.name if options.name \
            else self.id

        if options and options.betse:
            self.betse = BetseSimulation()
            pass

    def stop(self) -> None:
        pass
