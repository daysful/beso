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

    tissues = []
    for tissue_id in simulation['tissues']:
        tissue = get(Collections.betseTissues, tissue_id)
        tissues.append(tissue)

    interventions = []
    for intervention_id in simulation['interventions']:
        intervention = get(Collections.betseInterventions, intervention_id)
        interventions.append(intervention)

    functions = []
    for function_id in simulation['functions']:
        function = get(Collections.betseFunctions, function_id)
        functions.append(function)

    networks = []
    for network_id in simulation['networks']:
        network = get(Collections.betseFunctions, network_id)
        networks.append(network)

    biomolecules = []
    for biomolecule_id in simulation['biomolecules']:
        biomolecule = get(Collections.betseFunctions, biomolecule_id)
        biomolecules.append(biomolecule)

    reactions = []
    for reaction_id in simulation['reactions']:
        reaction = get(Collections.betseFunctions, reaction_id)
        reactions.append(reaction)

    channels = []
    for channel_id in simulation['channels']:
        channel = get(Collections.betseFunctions, channel_id)
        channels.append(channel)

    transporters = []
    for transporter_id in simulation['transporters']:
        transporter = get(Collections.betseFunctions, transporter_id)
        transporters.append(transporter)

    modulators = []
    for modulator_id in simulation['modulators']:
        modulator = get(Collections.betseFunctions, modulator_id)
        modulators.append(modulator)


    # write sim_config.yaml with the gathered simulation data
