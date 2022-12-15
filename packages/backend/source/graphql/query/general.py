import strawberry

from source.constants import allow_user_registration
from source.graphql.types.general import User
from source.graphql.types.betse import Betse
from source.graphql.context import Info
from source.database.collections import Collections
from source.database.main import get_all



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

        simulations=get_all(Collections.betseSimulations, user.id, 'generated_by') or []
        worlds=get_all(Collections.betseWorlds, user.id, 'generated_by') or []
        tissues=get_all(Collections.betseTissues, user.id, 'generated_by') or []
        interventions=get_all(Collections.betseInterventions, user.id, 'generated_by') or []
        functions=get_all(Collections.betseFunctions, user.id, 'generated_by') or []
        networks=get_all(Collections.betseNetworks, user.id, 'generated_by') or []
        biomolecules=get_all(Collections.betseBiomolecules, user.id, 'generated_by') or []
        reactions=get_all(Collections.betseReactions, user.id, 'generated_by') or []
        channels=get_all(Collections.betseChannels, user.id, 'generated_by') or []
        transporters=get_all(Collections.betseTransporters, user.id, 'generated_by') or []
        modulators=get_all(Collections.betseModulators, user.id, 'generated_by') or []

        return Betse(
            simulations=simulations,
            worlds=worlds,
            tissues=tissues,
            interventions=interventions,
            functions=functions,
            networks=networks,
            biomolecules=biomolecules,
            reactions=reactions,
            channels=channels,
            transporters=transporters,
            modulators=modulators,
        )
