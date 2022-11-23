import time
import shutil

from source.simulation import Simulation



cleaning_time = 60 * 60 * 24 # one day

def self_clean(simulations: dict[str, Simulation]):
    print('beteks :: self-cleaning simulation data')
    for simulation in simulations.values():
        if simulation.generated_at + cleaning_time < int(time.time()):
            if (simulation.betse.simulation_path):
                shutil.rmtree(simulation.betse.simulation_path)
