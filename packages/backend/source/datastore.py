import json

from source.constants import simulation_datastore

from source.simulation import Simulation, SimulationOptionsModel



def serialize_simulations(
    simulations: dict[str, Simulation],
):
    simulations_data = {}
    for simulation_id, simulation in simulations.items():
        simulations_data[simulation_id] = {
            "name": simulation.name,
            "generated_at": simulation.generated_at,
            "generated_by": simulation.generated_by,
            "betse": True if simulation.betse else False,
        }

    return simulations_data


def load_simulations():
    try:
        file = open(simulation_datastore, 'r').read()
        simulations_data = json.loads(file)

        simulations = {}
        for simulation_id, simulation_data in simulations_data.items():
            options = SimulationOptionsModel()
            options.name = simulation_data['name']
            options.betse = simulation_data['betse']
            options.id = simulation_id
            options.generated_at = simulation_data['generated_at']
            options.generated_by = simulation_data['generated_by']
            simulations[simulation_id] = Simulation(options)

        return simulations
    except:
        return {}


def write_simulations(
    simulations: dict[str, Simulation],
):
    try:
        text = json.dumps(serialize_simulations(simulations), indent=4)
        file = open(simulation_datastore, 'w')
        file.write(text)
        file.close()
    except:
        pass


simulations: dict[str, Simulation] = load_simulations()
