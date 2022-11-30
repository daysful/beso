from source.utilities.general import now
from source.simulation import \
    Simulation, \
    clean_simulation_data
from source.datastore import write_simulations



cleaning_time = 60 * 60 * 24 # one day


def self_clean(simulations: dict[str, Simulation]):
    print('BESO :: self-cleaning simulation data')

    updates_simulations = simulations.copy()

    for id, simulation in simulations.items():
        if simulation.generated_at + cleaning_time < now():
            clean_simulation_data(simulation)
            del updates_simulations[id]

    write_simulations(updates_simulations)
