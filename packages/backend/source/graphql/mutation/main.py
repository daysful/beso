from strawberry.tools import merge_types

from .general import MutationGeneral
from .betse import MutationBetseWorld



Mutation = merge_types(
    'Mutation',
    (
        MutationGeneral,
        MutationBetseWorld,
    ),
)
