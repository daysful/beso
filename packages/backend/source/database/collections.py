from enum import StrEnum



class Collections(StrEnum):
    users = 'users',
    betseSimulations = 'betseSimulations',
    betseWorlds = 'betseWorlds',
    betseTissues = 'betseTissues',
    betseInterventions = 'betseInterventions',
    betseModulators = 'betseModulators',
    betseNetworks = 'betseNetworks',
    betseBiomolecules = 'betseBiomolecules',
    betseReactions = 'betseReactions',
    betseChannels = 'betseChannels'

tables = [
    Collections.betseSimulations,
    Collections.betseWorlds,
    Collections.betseTissues,
    Collections.betseInterventions,
    Collections.betseModulators,
    Collections.betseNetworks,
    Collections.betseBiomolecules,
    Collections.betseReactions,
    Collections.betseChannels,
]
