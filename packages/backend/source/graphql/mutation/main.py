from strawberry.tools import merge_types

# from .general import MutationGeneral
from .user import MutationUser
from .betse import MutationBetseWorld
from .simulation import MutationSimulation



Mutation = merge_types(
    'Mutation',
    (
        # MutationGeneral,
        MutationUser,
        MutationBetseWorld,
        MutationSimulation,
    ),
)
