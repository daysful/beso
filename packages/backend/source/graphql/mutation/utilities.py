from typing import TypeVar, Type
import copy

from source.utilities.general import now, generate_id
from source.database.main import insert, get, remove
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
    entity_data['id'] = generate_id()
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
    entity_data = make_entity_data(entity, user)

    insert(collection, entity_data)

    model_data = copy.deepcopy(entity_data)
    if model_data.get('generated_by'):
        del model_data['generated_by']
    if model_data.get('is_json'):
        del model_data['is_json']

    return model(
        copy.deepcopy(model_data['data']),
        False,
    )


def mutation_entity_adder_factory(
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


def mutation_entity_remove(
    info: Info,
    collection: str,
    id: str,
):
    user = info.context.user
    if not user:
        return

    entity = get(collection, id)
    if not entity:
        return

    if not entity['generated_by'] == user.id:
        return

    return remove(
        collection,
        id,
    )
