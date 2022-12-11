from enum import StrEnum



class Collections(StrEnum):
    users = 'users',
    betseSimulations = 'betseSimulations',
    betseWorlds = 'betseWorlds',
    betseTissues = 'betseTissues',
    betseInterventions = 'betseInterventions',
    betseNetworks = 'betseNetworks',
    betseBiomolecules = 'betseBiomolecules',
    betseReactions = 'betseReactions',
    betseChannels = 'betseChannels',
    betseTransporters = 'betseTransporters',
    betseModulators = 'betseModulators'

tables = [
    Collections.betseSimulations,
    Collections.betseWorlds,
    Collections.betseTissues,
    Collections.betseInterventions,
    Collections.betseNetworks,
    Collections.betseBiomolecules,
    Collections.betseReactions,
    Collections.betseChannels,
    Collections.betseTransporters,
    Collections.betseModulators,
]
