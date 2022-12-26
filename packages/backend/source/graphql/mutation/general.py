import strawberry
from strawberry.tools import create_type

from source.graphql.context import Info
from source.graphql.types.general import InputForkResource



def forkResource(input: InputForkResource, info: Info) -> bool | None:
    return True


mutations = [
    forkResource,
]


MutationGeneral = create_type(
    'MutationGeneral',
    [
        *[strawberry.mutation(mutation) for mutation in mutations],
    ],
)
