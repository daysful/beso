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
    # get tissues, interventions, etc.

    results = {}

    for entity in simulation_entities:
        type = entity['type']
        results[type] = []
        for id in simulation[type]:
            data = get(entity['collection'], id)
            results[type].append(
                parse(data),
            )


    # write sim_config.yaml with the gathered simulation data
