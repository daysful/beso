import copy
import json
import yaml

from source.database.collections import Collections
from source.database.main import get

from source.simulation import betse_copy_data



def parse(
    entity: any,
):
    if not entity:
        return

    data = copy.deepcopy(entity)
    data['data'] = json.loads(data['data'])
    return data


simulation_entities = [
    {
        "type": "tissues",
        "collection": Collections.betseTissues,
    },
    {
        "type": "global_intervention",
        "collection": Collections.betseGlobalInterventions,
    },
    {
        "type": "targeted_intervention",
        "collection": Collections.betseTargetedInterventions,
    },
    {
        "type": "modulator_function",
        "collection": Collections.betseFunctions,
    },
    {
        "type": "network",
        "collection": Collections.betseNetworks,
    },
    {
        "type": "biomolecules",
        "collection": Collections.betseBiomolecules,
    },
    {
        "type": "reactions",
        "collection": Collections.betseReactions,
    },
    {
        "type": "channels",
        "collection": Collections.betseChannels,
    },
    {
        "type": "transporters",
        "collection": Collections.betseTransporters,
    },
    {
        "type": "modulators",
        "collection": Collections.betseModulators,
    },
]


def compose_simulation(
    simulation_id: str,
):
    simulation = parse(get(Collections.betseSimulations, simulation_id))
    if not simulation:
        return
    simulation_data = simulation['data']['data']

    world = parse(get(Collections.betseWorlds, simulation_data['world']))
    if not world:
        return
    world_data = world['data']['data']

    entities = {}

    for entity in simulation_entities:
        type = entity['type']
        entities[type] = []
        for id in simulation_data[type]:
            data = get(entity['collection'], id)
            entities[type].append(
                parse(data),
            )

    simulation_path = betse_copy_data(id)

    sim_config = {
        # SOLVER SETTINGS
        'solver options': simulation_data['solver_options'],

        # FILE HANDLING
        'init file saving': {
            'directory': 'INITS',
            'worldfile': 'world_1.betse.gz',
            'file': 'init_1.betse.gz',
        },
        'sim file saving': {
            'directory': 'SIMS',
            'file': 'sim_1.betse.gz',
        },
        'results file saving': {
            'init directory': 'RESULTS/init_1',
            'sim directory': 'RESULTS/sim_1',
        },

        # INITIALIZATION SETTINGS
        'automatically run initialization': True,
        'init time settings': simulation_data['init_time_settings'],

        # SIMULATION SETTINGS
        'sim time settings': simulation_data['sim_time_settings'],

        # GENERAL OPTIONS
        'general options': simulation_data['general_options'],

        # WORLD OPTIONS
        'world options': world_data,

        # TISSUE PROFILE DESIGNATION
        'tissue profile definition': {},

        # TARGETED INTERVENTIONS

        # MODULATOR FUNCTION PROPERTIES

        # GLOBAL INTERVENTIONS

        # GENERAL NETWORK

        # GENE REGULATORY NETWORK

        # VARIABLE SETTINGS
        'variable settings': simulation_data['variable_settings'],

        # RESULTS
        'results options': simulation_data['results_options'],

        # INTERNAL USE ONLY
        'internal parameters': simulation_data['internal_parameters'],

        'version': simulation_data['version'],
    }

    sim_config_yaml = yaml.dump(sim_config)

    f = open(f'{simulation_path}/sim_config.yaml', 'w')
    f.write(sim_config_yaml)
    f.close()
