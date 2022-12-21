import strawberry
from strawberry.tools import create_type

from source.database.collections import Collections
from source.graphql.context import Info
from source.graphql.model.betse import \
    modelBetseSimulation, \
    modelBetseWorld, \
    modelBetseTissue, \
    modelBetseIntervention, \
    modelBetseFunction, \
    modelBetseNetwork, \
    modelBetseBiomolecule, \
    modelBetseReaction, \
    modelBetseChannel, \
    modelBetseTransporter, \
    modelBetseModulator
from source.graphql.types.betse import \
    InputBetseSimulation, BetseSimulation, \
    InputBetseWorld, BetseWorld, \
    InputBetseTissue, BetseTissue, \
    InputBetseIntervention, BetseIntervention, \
    InputBetseFunction, BetseFunction, \
    InputBetseNetwork, BetseNetwork, \
    InputBetseBiomolecule, BetseBiomolecule, \
    InputBetseReaction, BetseReaction, \
    InputBetseChannel, BetseChannel, \
    InputBetseTransporter, BetseTransporter, \
    InputBetseModulator, BetseModulator

from .utilities import mutation_entity_adder_factory, mutation_entity_remove



mutation_data = {
    "simulation": {
        "collection": Collections.betseSimulations,
        "model": modelBetseSimulation,
    },
    "world": {
        "collection": Collections.betseWorlds,
        "model": modelBetseWorld,
    },
    "tissue": {
        "collection": Collections.betseTissues,
        "model": modelBetseTissue,
    },
    "intervention": {
        "collection": Collections.betseInterventions,
        "model": modelBetseIntervention,
    },
    "function": {
        "collection": Collections.betseFunctions,
        "model": modelBetseFunction,
    },
    "network": {
        "collection": Collections.betseNetworks,
        "model": modelBetseNetwork,
    },
    "biomolecule": {
        "collection": Collections.betseBiomolecules,
        "model": modelBetseBiomolecule,
    },
    "reaction": {
        "collection": Collections.betseReactions,
        "model": modelBetseReaction,
    },
    "channel": {
        "collection": Collections.betseChannels,
        "model": modelBetseChannel,
    },
    "transporter": {
        "collection": Collections.betseTransporters,
        "model": modelBetseTransporter,
    },
    "modulator": {
        "collection": Collections.betseModulators,
        "model": modelBetseModulator,
    },
}


def addBetseSimulation(input: InputBetseSimulation, info: Info) -> BetseSimulation | None:
    return mutation_entity_adder_factory(mutation_data['simulation'])(input, info)

def addBetseWorld(input: InputBetseWorld, info: Info) -> BetseWorld | None:
    return mutation_entity_adder_factory(mutation_data['world'])(input, info)

def addBetseTissue(input: InputBetseTissue, info: Info) -> BetseTissue | None:
    return mutation_entity_adder_factory(mutation_data['tissue'])(input, info)

def addBetseIntervention(input: InputBetseIntervention, info: Info) -> BetseIntervention | None:
    return mutation_entity_adder_factory(mutation_data['intervention'])(input, info)

def addBetseFunction(input: InputBetseFunction, info: Info) -> BetseFunction | None:
    return mutation_entity_adder_factory(mutation_data['function'])(input, info)

def addBetseNetwork(input: InputBetseNetwork, info: Info) -> BetseNetwork | None:
    return mutation_entity_adder_factory(mutation_data['network'])(input, info)

def addBetseBiomolecule(input: InputBetseBiomolecule, info: Info) -> BetseBiomolecule | None:
    return mutation_entity_adder_factory(mutation_data['biomolecule'])(input, info)

def addBetseReaction(input: InputBetseReaction, info: Info) -> BetseReaction | None:
    return mutation_entity_adder_factory(mutation_data['reaction'])(input, info)

def addBetseChannel(input: InputBetseChannel, info: Info) -> BetseChannel | None:
    return mutation_entity_adder_factory(mutation_data['channel'])(input, info)

def addBetseTransporter(input: InputBetseTransporter, info: Info) -> BetseTransporter | None:
    return mutation_entity_adder_factory(mutation_data['transporter'])(input, info)

def addBetseModulator(input: InputBetseModulator, info: Info) -> BetseModulator | None:
    return mutation_entity_adder_factory(mutation_data['modulator'])(input, info)


def removeBetseSimulation(id: str, info: Info) -> bool | None:
    return mutation_entity_remove(
        info,
        Collections.betseSimulations,
        id,
    )

def removeBetseWorld(id: str, info: Info) -> bool | None:
    return mutation_entity_remove(
        info,
        Collections.betseWorlds,
        id,
    )

def removeBetseTissue(id: str, info: Info) -> bool | None:
    return mutation_entity_remove(
        info,
        Collections.betseTissues,
        id,
    )

def removeBetseIntervention(id: str, info: Info) -> bool | None:
    return mutation_entity_remove(
        info,
        Collections.betseInterventions,
        id,
    )

def removeBetseFunction(id: str, info: Info) -> bool | None:
    return mutation_entity_remove(
        info,
        Collections.betseFunctions,
        id,
    )

def removeBetseNetwork(id: str, info: Info) -> bool | None:
    return mutation_entity_remove(
        info,
        Collections.betseNetworks,
        id,
    )

def removeBetseBiomolecule(id: str, info: Info) -> bool | None:
    return mutation_entity_remove(
        info,
        Collections.betseBiomolecules,
        id,
    )

def removeBetseReaction(id: str, info: Info) -> bool | None:
    return mutation_entity_remove(
        info,
        Collections.betseReactions,
        id,
    )

def removeBetseChannel(id: str, info: Info) -> bool | None:
    return mutation_entity_remove(
        info,
        Collections.betseChannels,
        id,
    )

def removeBetseTransporter(id: str, info: Info) -> bool | None:
    return mutation_entity_remove(
        info,
        Collections.betseTransporters,
        id,
    )

def removeBetseModulator(id: str, info: Info) -> bool | None:
    return mutation_entity_remove(
        info,
        Collections.betseModulators,
        id,
    )



mutations = [
    addBetseSimulation,
    addBetseWorld,
    addBetseTissue,
    addBetseIntervention,
    addBetseFunction,
    addBetseNetwork,
    addBetseBiomolecule,
    addBetseReaction,
    addBetseChannel,
    addBetseTransporter,
    addBetseModulator,

    removeBetseSimulation,
    removeBetseWorld,
    removeBetseTissue,
    removeBetseIntervention,
    removeBetseFunction,
    removeBetseNetwork,
    removeBetseBiomolecule,
    removeBetseReaction,
    removeBetseChannel,
    removeBetseTransporter,
    removeBetseModulator,
]


MutationBetseWorld = create_type(
    'MutationBetseWorld',
    [
        *[strawberry.mutation(mutation) for mutation in mutations],
    ],
)
