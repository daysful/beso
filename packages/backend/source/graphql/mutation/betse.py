import strawberry
from strawberry.tools import create_type

from source.graphql.types.betse import default_betse_world, BetseWorld

from source.database.main import insert, Collections



def add_betse_world(info, name: str) -> BetseWorld:
    betse_world = default_betse_world.__dict__
    betse_world['mesh_refinement'] = betse_world['mesh_refinement'].__dict__
    betse_world['import_from_svg'] = betse_world['import_from_svg'].__dict__
    betse_world['name'] = name

    insert(Collections.betseWorlds, betse_world)

    return BetseWorld(**betse_world)

def remove_betse_world(info, id: str) -> bool:
    return True


MutationBetseWorld = create_type(
    'MutationBetseWorld',
    [
        strawberry.mutation(add_betse_world),
        strawberry.mutation(remove_betse_world),
    ],
)
