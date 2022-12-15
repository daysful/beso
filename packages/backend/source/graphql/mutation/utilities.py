from typing import TypeVar, Type
import copy

from source.utilities.general import now, generate_id
from source.database.main import insert
from source.graphql.context import Info
from source.graphql.types.general import User



def make_dict(
    data: callable,
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
    input: callable,
    collection: str,
    model: callable,
):
    entity = make_dict(input)
    entity['id'] = generate_id()

    insert(collection, make_entity_data(entity, user))

    return model(
        copy.deepcopy(entity),
        False,
    )


def mutation_maker(
    data: dict[str, str],
):
    Input = TypeVar('Input')
    Result = TypeVar('Result')

    def adder(input: Type[Input], info: Info) -> Type[Result] | None:
        user = info.context.user
        if not user:
            return

        return store_entity(
            user,
            input,
            data['collection'],
            data['model'],
        )

    return adder
