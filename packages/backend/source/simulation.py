from pydantic import BaseModel
import uuid



class SimulationOptionsModel(BaseModel):
    name: str | None


class Simulation:
    def __init__(self, options: SimulationOptionsModel | None):
        self.id = str(uuid.uuid4())
        self.name = self.id if options is None \
            else options.name if options.name \
            else self.id

    def stop(self):
        pass
