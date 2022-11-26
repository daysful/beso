from source.simulation import \
    Simulation, \
    clean_simulation_data, \
    new_simulation_generated_at

from source.datastore import write_simulations



cleaning_time = 60 * 60 * 24 # one day


def self_clean(simulations: dict[str, Simulation]):
    print('beso :: self-cleaning simulation data')

    updates_simulations = simulations.copy()

    for id, simulation in simulations.items():
        if simulation.generated_at + cleaning_time < new_simulation_generated_at():
            clean_simulation_data(simulation)
            del updates_simulations[id]

    write_simulations(updates_simulations)