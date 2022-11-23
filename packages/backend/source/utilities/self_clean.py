from source.simulation import \
    Simulation, \
    clean_simulation_data, \
    new_simulation_generated_at



cleaning_time = 60 * 60 * 24 # one day


def self_clean(simulations: dict[str, Simulation]):
    print('beteks :: self-cleaning simulation data')

    for simulation in simulations.values():
        if simulation.generated_at + cleaning_time < new_simulation_generated_at():
            clean_simulation_data(simulation)
