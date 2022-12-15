import copy

import strawberry
from strawberry.tools import create_type

from source.utilities.general import now, generate_id
from source.database.main import insert
from source.database.collections import Collections
from source.graphql.context import Info
from source.graphql.query.betse import modelBetseWorld
from source.graphql.types.general import User
from source.graphql.types.betse import BetseWorld, InputBetseWorld



def make_dict(
    data: any,
):
    new_dict = {}

    for property in data.__dict__:
        value = getattr(data, property)
        if hasattr(value, '__dict__'):
            new_dict[property] = make_dict(value)
        else:
            new_dict[property] = value

    return new_dict


def make_entity_data(
    data: dict,
    user: User,
):
    entity_data = copy.deepcopy(data)
    entity_data['generated_by'] = user.id
    entity_data['generated_at'] = now()
    entity_data['is_json'] = True
    return entity_data


def store_entity(
    user: User,
    input: any,
    collection: any,
    model: callable,
):
    entity = make_dict(input)
    entity['id'] = generate_id()

    insert(collection, make_entity_data(entity, user))

    return model(
        copy.deepcopy(entity),
        False,
    )


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
