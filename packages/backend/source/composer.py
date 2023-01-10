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
        "type": "interventions",
        "collection": Collections.betseGlobalInterventions,
    },
    {
        "type": "functions",
        "collection": Collections.betseFunctions,
    },
    {
        "type": "networks",
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

    world = get(Collections.betseWorlds, simulation['world'])

    entities = {}

    for entity in simulation_entities:
        type = entity['type']
        entities[type] = []
        for id in simulation[type]:
            data = get(entity['collection'], id)
            entities[type].append(
                parse(data),
            )

    simulation_path = betse_copy_data(id)

    sim_config = {
        'init time settings': simulation['data']['init_time_settings'],
        'sim time settings': simulation['data']['sim_time_settings'],
        'general options': simulation['data']['general_options'],
        'world options': world['data'],
        'tissue profile definition': {},
        'internal parameters': simulation['data']['internal_parameters'],
    }

    sim_config_yaml = yaml.dump(sim_config)

    f = open(f'{simulation_path}/sim_config.yaml', 'w')
    f.write(sim_config_yaml)
    f.close()
