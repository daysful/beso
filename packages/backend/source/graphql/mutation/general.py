import copy

import strawberry
from strawberry.tools import create_type

from source.database.collections import BetseCollections
from source.database.main import get, insert
from source.graphql.context import Info
from source.graphql.types.general import InputForkResource

from .utilities import make_entity_fork



def forkResource(input: InputForkResource, info: Info) -> bool | None:
    user = info.context.user
    if not user:
        return

    collection = BetseCollections[input.type]
    if not collection:
        return

    entity = get(collection, input.id)
    if not entity:
        return

    forked_entity = make_entity_fork(entity, user)

    insert(collection, forked_entity)

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
