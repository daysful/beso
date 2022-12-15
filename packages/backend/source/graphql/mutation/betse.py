import strawberry
from strawberry.tools import create_type

from source.database.collections import Collections
from source.graphql.context import Info
from source.graphql.query.betse import \
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

from .utilities import mutation_maker



mutation_data = {
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


def add_betse_world(input: InputBetseWorld, info: Info) -> BetseWorld | None:
    return mutation_maker(mutation_data['world'])(input, info)

def add_betse_tissue(input: InputBetseTissue, info: Info) -> BetseTissue | None:
    return mutation_maker(mutation_data['tissue'])(input, info)

def add_betse_intervention(input: InputBetseIntervention, info: Info) -> BetseIntervention | None:
    return mutation_maker(mutation_data['intervention'])(input, info)

def add_betse_function(input: InputBetseFunction, info: Info) -> BetseFunction | None:
    return mutation_maker(mutation_data['function'])(input, info)

def add_betse_network(input: InputBetseNetwork, info: Info) -> BetseNetwork | None:
    return mutation_maker(mutation_data['network'])(input, info)

def add_betse_biomolecule(input: InputBetseBiomolecule, info: Info) -> BetseBiomolecule | None:
    return mutation_maker(mutation_data['biomolecule'])(input, info)

def add_betse_reaction(input: InputBetseReaction, info: Info) -> BetseReaction | None:
    return mutation_maker(mutation_data['reaction'])(input, info)

def add_betse_channel(input: InputBetseChannel, info: Info) -> BetseChannel | None:
    return mutation_maker(mutation_data['channel'])(input, info)

def add_betse_transporter(input: InputBetseTransporter, info: Info) -> BetseTransporter | None:
    return mutation_maker(mutation_data['transporter'])(input, info)

def add_betse_modulator(input: InputBetseModulator, info: Info) -> BetseModulator | None:
    return mutation_maker(mutation_data['modulator'])(input, info)


def remove_betse_world(id: str, info: Info) -> bool | None:
    user = info.context.user
    if not user:
        return

    return True



MutationBetseWorld = create_type(
    'MutationBetseWorld',
    [
        strawberry.mutation(add_betse_world),
        strawberry.mutation(add_betse_tissue),
        strawberry.mutation(add_betse_intervention),
        strawberry.mutation(add_betse_function),
        strawberry.mutation(add_betse_network),
        strawberry.mutation(add_betse_biomolecule),
        strawberry.mutation(add_betse_reaction),
        strawberry.mutation(add_betse_channel),
        strawberry.mutation(add_betse_transporter),
        strawberry.mutation(add_betse_modulator),

        strawberry.mutation(remove_betse_world),
    ],
)
