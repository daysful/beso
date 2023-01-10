import strawberry

from source.constants import allow_user_registration
from source.database.collections import Collections
from source.database.main import get_all
from source.graphql.types.general import User
from source.graphql.types.betse import Betse
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



def modeler(
    data: list,
    model: callable,
):
    return [model(item) for item in data]


@strawberry.type
class QueryUser:
    @strawberry.field
    def allowUserRegistration(self) -> bool:
        return allow_user_registration

    @strawberry.field
    def user(self, info: Info) -> User | None:
        return info.context.user

    @strawberry.field
    def betse(self, info: Info) -> Betse | None:
        user = info.context.user
        if not user:
            return None

        simulations=modeler(
            get_all(Collections.betseSimulations, user.id, 'generated_by') or [],
            modelBetseSimulation,
        )
        worlds=modeler(
            get_all(Collections.betseWorlds, user.id, 'generated_by') or [],
            modelBetseWorld,
        )
        tissues=modeler(
            get_all(Collections.betseTissues, user.id, 'generated_by') or [],
            modelBetseTissue,
        )
        globalInterventions=modeler(
            get_all(Collections.betseGlobalInterventions, user.id, 'generated_by') or [],
            modelBetseGlobalIntervention,
        )
        targetedInterventions=modeler(
            get_all(Collections.betseTargetedInterventions, user.id, 'generated_by') or [],
            modelBetseTargetedIntervention,
        )
        functions=modeler(
            get_all(Collections.betseFunctions, user.id, 'generated_by') or [],
            modelBetseFunction,
        )
        networks=modeler(
            get_all(Collections.betseNetworks, user.id, 'generated_by') or [],
            modelBetseNetwork,
        )
        biomolecules=modeler(
            get_all(Collections.betseBiomolecules, user.id, 'generated_by') or [],
            modelBetseBiomolecule,
        )
        reactions=modeler(
            get_all(Collections.betseReactions, user.id, 'generated_by') or [],
            modelBetseReaction,
        )
        channels=modeler(
            get_all(Collections.betseChannels, user.id, 'generated_by') or [],
            modelBetseChannel,
        )
        transporters=modeler(
            get_all(Collections.betseTransporters, user.id, 'generated_by') or [],
            modelBetseTransporter,
        )
        modulators=modeler(
            get_all(Collections.betseModulators, user.id, 'generated_by') or [],
            modelBetseModulator,
        )

        return Betse(
            simulations=simulations,
            worlds=worlds,
            tissues=tissues,
            globalInterventions=globalInterventions,
            targetedInterventions=targetedInterventions,
            functions=functions,
            networks=networks,
            biomolecules=biomolecules,
            reactions=reactions,
            channels=channels,
            transporters=transporters,
            modulators=modulators,
        )
