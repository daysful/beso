import strawberry
from strawberry.tools import create_type

from source.graphql.context import Info



def new_simulation(info: Info) -> bool:
    return True

def start_simulation(info: Info) -> bool:
    return True

def delete_simulation(info: Info) -> bool:
    return True


MutationSimulation = create_type(
    'MutationSimulation',
    [
        strawberry.mutation(new_simulation),
        strawberry.mutation(start_simulation),
        strawberry.mutation(delete_simulation),
    ],
)
