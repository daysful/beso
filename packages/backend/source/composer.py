from source.database.collections import Collections
from source.database.main import get



def simulation_composer(
    simulation_id: str,
):
    simulation = get(Collections.betseSimulations, simulation_id)
    if not simulation:
        return

    world = get(Collections.betseWorlds, simulation['world'])
    # get tissues, interventions, etc.

    # write sim_config.yaml with the gathered simulation data

    pass
