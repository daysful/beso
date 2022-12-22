import json
import copy

from source.database.collections import Collections
from source.database.main import get



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
        "collection": Collections.betseInterventions,
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


def simulation_composer(
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

    sim_config = {
        'init time settings': simulation['data']['init_time_settings'],
        'sim time settings': simulation['data']['sim_time_settings'],
        'general options': simulation['data']['general_options'],
        'world options': world['data'],
        'tissue profile definition': {},
        'internal parameters': simulation['data']['internal_parameters'],
    }


    # write sim_config.yaml with the gathered simulation data
