import strawberry
from strawberry.tools import create_type

from source.database.collections import Collections
from source.graphql.context import Info
from source.graphql.model.betse import \
    modelBetseSimulation, \
    modelBetseWorld, \
    modelBetseTissue, \
    modelBetseGlobalIntervention, \
    modelBetseTargetedIntervention, \
    modelBetseFunction, \
    modelBetseNetwork, \
    modelBetseBiomolecule, \
    modelBetseReaction, \
    modelBetseChannel, \
    modelBetseTransporter, \
    modelBetseModulator
from source.graphql.types.betse import \
    InputAddBetseSimulation, InputEditBetseSimulation, BetseSimulation, \
    InputAddBetseWorld, InputEditBetseWorld, BetseWorld, \
    InputAddBetseTissue, InputEditBetseTissue, BetseTissue, \
    InputAddBetseGlobalIntervention, InputEditBetseGlobalIntervention, BetseGlobalIntervention, \
    InputAddBetseTargetedIntervention, InputEditBetseTargetedIntervention, BetseTargetedIntervention, \
    InputAddBetseFunction, InputEditBetseFunction, BetseFunction, \
    InputAddBetseNetwork, InputEditBetseNetwork, BetseNetwork, \
    InputAddBetseBiomolecule, InputEditBetseBiomolecule, BetseBiomolecule, \
    InputAddBetseReaction, InputEditBetseReaction, BetseReaction, \
    InputAddBetseChannel, InputEditBetseChannel, BetseChannel, \
    InputAddBetseTransporter, InputEditBetseTransporter, BetseTransporter, \
    InputAddBetseModulator, InputEditBetseModulator, BetseModulator

from source.composer import compose_simulation

from .utilities import mutation_entity_adder_factory, \
    mutation_entity_updater_factory, \
    mutation_entity_remove



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
    "globalIntervention": {
        "collection": Collections.betseGlobalInterventions,
        "model": modelBetseGlobalIntervention,
    },
    "targetedIntervention": {
        "collection": Collections.betseTargetedInterventions,
        "model": modelBetseTargetedIntervention,
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


def addBetseSimulation(input: InputAddBetseSimulation, info: Info) -> BetseSimulation | None:
    def hook(entity):
        if not entity:
            return
        compose_simulation(entity.id)

    return mutation_entity_adder_factory(mutation_data['simulation'], hook)(input, info)

def addBetseWorld(input: InputAddBetseWorld, info: Info) -> BetseWorld | None:
    return mutation_entity_adder_factory(mutation_data['world'])(input, info)

def addBetseTissue(input: InputAddBetseTissue, info: Info) -> BetseTissue | None:
    return mutation_entity_adder_factory(mutation_data['tissue'])(input, info)

def addBetseGlobalIntervention(input: InputAddBetseGlobalIntervention, info: Info) -> BetseGlobalIntervention | None:
    return mutation_entity_adder_factory(mutation_data['globalIntervention'])(input, info)

def addBetseTargetedIntervention(input: InputAddBetseTargetedIntervention, info: Info) -> BetseTargetedIntervention | None:
    return mutation_entity_adder_factory(mutation_data['targetedIntervention'])(input, info)

def addBetseFunction(input: InputAddBetseFunction, info: Info) -> BetseFunction | None:
    return mutation_entity_adder_factory(mutation_data['function'])(input, info)

def addBetseNetwork(input: InputAddBetseNetwork, info: Info) -> BetseNetwork | None:
    return mutation_entity_adder_factory(mutation_data['network'])(input, info)

def addBetseBiomolecule(input: InputAddBetseBiomolecule, info: Info) -> BetseBiomolecule | None:
    return mutation_entity_adder_factory(mutation_data['biomolecule'])(input, info)

def addBetseReaction(input: InputAddBetseReaction, info: Info) -> BetseReaction | None:
    return mutation_entity_adder_factory(mutation_data['reaction'])(input, info)

def addBetseChannel(input: InputAddBetseChannel, info: Info) -> BetseChannel | None:
    return mutation_entity_adder_factory(mutation_data['channel'])(input, info)

def addBetseTransporter(input: InputAddBetseTransporter, info: Info) -> BetseTransporter | None:
    return mutation_entity_adder_factory(mutation_data['transporter'])(input, info)

def addBetseModulator(input: InputAddBetseModulator, info: Info) -> BetseModulator | None:
    return mutation_entity_adder_factory(mutation_data['modulator'])(input, info)



def editBetseSimulation(input: InputEditBetseSimulation, info: Info) -> BetseSimulation | None:
    return mutation_entity_updater_factory(mutation_data['simulation'])(input, info)

def editBetseWorld(input: InputEditBetseWorld, info: Info) -> BetseWorld | None:
    return mutation_entity_updater_factory(mutation_data['world'])(input, info)

def editBetseTissue(input: InputEditBetseTissue, info: Info) -> BetseTissue | None:
    return mutation_entity_updater_factory(mutation_data['tissue'])(input, info)

def editBetseGlobalIntervention(input: InputEditBetseGlobalIntervention, info: Info) -> BetseGlobalIntervention | None:
    return mutation_entity_updater_factory(mutation_data['globalIntervention'])(input, info)

def editBetseTargetedIntervention(input: InputEditBetseTargetedIntervention, info: Info) -> BetseTargetedIntervention | None:
    return mutation_entity_updater_factory(mutation_data['targetedIntervention'])(input, info)

def editBetseFunction(input: InputEditBetseFunction, info: Info) -> BetseFunction | None:
    return mutation_entity_updater_factory(mutation_data['function'])(input, info)

def editBetseNetwork(input: InputEditBetseNetwork, info: Info) -> BetseNetwork | None:
    return mutation_entity_updater_factory(mutation_data['network'])(input, info)

def editBetseBiomolecule(input: InputEditBetseBiomolecule, info: Info) -> BetseBiomolecule | None:
    return mutation_entity_updater_factory(mutation_data['biomolecule'])(input, info)

def editBetseReaction(input: InputEditBetseReaction, info: Info) -> BetseReaction | None:
    return mutation_entity_updater_factory(mutation_data['reaction'])(input, info)

def editBetseChannel(input: InputEditBetseChannel, info: Info) -> BetseChannel | None:
    return mutation_entity_updater_factory(mutation_data['channel'])(input, info)

def editBetseTransporter(input: InputEditBetseTransporter, info: Info) -> BetseTransporter | None:
    return mutation_entity_updater_factory(mutation_data['transporter'])(input, info)

def editBetseModulator(input: InputEditBetseModulator, info: Info) -> BetseModulator | None:
    return mutation_entity_updater_factory(mutation_data['modulator'])(input, info)



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

def removeBetseGlobalIntervention(id: str, info: Info) -> bool | None:
    return mutation_entity_remove(
        info,
        Collections.betseGlobalInterventions,
        id,
    )

def removeBetseTargetedIntervention(id: str, info: Info) -> bool | None:
    return mutation_entity_remove(
        info,
        Collections.betseTargetedInterventions,
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
    addBetseGlobalIntervention,
    addBetseTargetedIntervention,
    addBetseFunction,
    addBetseNetwork,
    addBetseBiomolecule,
    addBetseReaction,
    addBetseChannel,
    addBetseTransporter,
    addBetseModulator,

    editBetseSimulation,
    editBetseWorld,
    editBetseTissue,
    editBetseGlobalIntervention,
    editBetseTargetedIntervention,
    editBetseFunction,
    editBetseNetwork,
    editBetseBiomolecule,
    editBetseReaction,
    editBetseChannel,
    editBetseTransporter,
    editBetseModulator,

    removeBetseSimulation,
    removeBetseWorld,
    removeBetseTissue,
    removeBetseGlobalIntervention,
    removeBetseTargetedIntervention,
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
