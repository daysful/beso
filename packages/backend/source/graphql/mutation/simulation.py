import strawberry
from strawberry.tools import create_type

from source.graphql.context import Info
from source.graphql.types.betse import InputBetseRunSimulation
from source.composer import compose_simulation



def betseRunSimulation(input: InputBetseRunSimulation, info: Info) -> bool:
    compose_simulation(input.id)

    return True



MutationSimulation = create_type(
    'MutationSimulation',
    [
        strawberry.mutation(betseRunSimulation),
    ],
)
