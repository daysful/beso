from strawberry.tools import merge_types

from .betse import MutationBetseWorld



Mutation = merge_types(
    'Mutation',
    (
        MutationBetseWorld,
    ),
)
