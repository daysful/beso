import strawberry
from strawberry.tools import create_type

from source.database.collections import Collections
from source.graphql.context import Info
from source.graphql.query.betse import \
    modelBetseWorld, \
    modelBetseTissue
from source.graphql.types.betse import \
    InputBetseWorld, BetseWorld, \
    InputBetseTissue, BetseTissue

from .utilities import store_entity



def add_betse_world(input: InputBetseWorld, info: Info) -> BetseWorld | None:
    user = info.context.user
    if not user:
        return

    return store_entity(
        user,
        input,
        Collections.betseWorlds,
        modelBetseWorld,
    )


def add_betse_tissue(input: InputBetseTissue, info: Info) -> BetseTissue | None:
    user = info.context.user
    if not user:
        return

    return store_entity(
        user,
        input,
        Collections.betseTissues,
        modelBetseTissue,
    )


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
        strawberry.mutation(add_betse_tissue),
    ],
)
