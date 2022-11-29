import time

import strawberry
from strawberry.tools import create_type

from source.graphql.types.betse import default_betse_world, BetseWorld

from source.database.main import insert
from source.database.collections import Collections



def add_betse_world(info, name: str) -> BetseWorld:
    betse_world = default_betse_world.__dict__
    betse_world['mesh_refinement'] = betse_world['mesh_refinement'].__dict__
    betse_world['import_from_svg'] = betse_world['import_from_svg'].__dict__
    betse_world['name'] = name

    data = betse_world.copy()
    data['generated_by'] = 'user'
    data['generated_at'] = int(time.time())
    data['is_json'] = True

    insert(Collections.betseWorlds, data)

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
