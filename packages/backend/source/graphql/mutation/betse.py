import strawberry
from strawberry.tools import create_type

from source.utilities.general import now, generate_id
from source.database.main import insert
from source.database.collections import Collections
from source.graphql.context import Info
from source.graphql.types.betse import BetseWorld, InputBetseWorld



def add_betse_world(input: InputBetseWorld, info: Info) -> BetseWorld | None:
    user = info.context.user
    if not user:
        return

    betse_world = input.__dict__
    betse_world['id'] = generate_id()
    betse_world['mesh_refinement'] = betse_world['mesh_refinement'].__dict__
    betse_world['import_from_svg'] = betse_world['import_from_svg'].__dict__

    data = betse_world.copy()
    data['generated_by'] = user.id
    data['generated_at'] = now()
    data['is_json'] = True

    insert(Collections.betseWorlds, data)

    return BetseWorld(**betse_world)


def remove_betse_world(id: str, info: Info) -> bool | None:
    user = info.context.user
    if not user:
        return

    return True


MutationBetseWorld = create_type(
    'MutationBetseWorld',
    [
        strawberry.mutation(add_betse_world),
        strawberry.mutation(remove_betse_world),
    ],
)
