from enum import StrEnum



class Collections(StrEnum):
    users = 'users',
    betseSimulations = 'betseSimulations',
    betseWorlds = 'betseWorlds',
    betseTissues = 'betseTissues',
    betseGlobalInterventions = 'betseGlobalInterventions',
    betseTargetedInterventions = 'betseTargetedInterventions',
    betseFunctions = 'betseFunctions',
    betseNetworks = 'betseNetworks',
    betseBiomolecules = 'betseBiomolecules',
    betseReactions = 'betseReactions',
    betseChannels = 'betseChannels',
    betseTransporters = 'betseTransporters',
    betseModulators = 'betseModulators'


class BetseCollections(StrEnum):
    simulation = Collections.betseSimulations,
    world = Collections.betseWorlds,
    tissue = Collections.betseTissues,
    globalIntervention = Collections.betseGlobalInterventions,
    targetedIntervention = Collections.betseTargetedInterventions,
    function = Collections.betseFunctions,
    network = Collections.betseNetworks,
    biomolecule = Collections.betseBiomolecules,
    reaction = Collections.betseReactions,
    channel = Collections.betseChannels,
    transporter = Collections.betseTransporters,
    modulator = Collections.betseModulators,


tables = [
    Collections.betseSimulations,
    Collections.betseWorlds,
    Collections.betseTissues,
    Collections.betseGlobalInterventions,
    Collections.betseTargetedInterventions,
    Collections.betseFunctions,
    Collections.betseNetworks,
    Collections.betseBiomolecules,
    Collections.betseReactions,
    Collections.betseChannels,
    Collections.betseTransporters,
    Collections.betseModulators,
]
