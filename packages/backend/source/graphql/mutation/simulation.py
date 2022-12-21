import strawberry
from strawberry.tools import create_type

from source.graphql.context import Info



def startSimulation(info: Info) -> bool:
    return True



MutationSimulation = create_type(
    'MutationSimulation',
    [
        strawberry.mutation(startSimulation),
    ],
)
