import jwt

import strawberry
from strawberry.tools import create_type

from source.constants import jwt_secret, allow_user_registration
from source.utilities.general import generate_id
from source.database.collections import Collections
from source.database.main import get, insert
from source.graphql.context import Info



def logic_login(
    user,
    info: Info,
):
    encoded_jwt = jwt.encode(
        {
            'username': user['name'],
        },
        jwt_secret,
        algorithm='HS256',
    )

    info.context.response.set_cookie(
        key='Authorization',
        value=f'Bearer {encoded_jwt}',
        httponly=True,
    )

    return encoded_jwt


def register_user(identonym: str, key: str, info: Info) -> bool:
    if not allow_user_registration:
        return False

    user =  {
        'id': generate_id(),
        'name': identonym,
        'key': key,
    }

    insert(
        Collections.users,
        user,
    )

    logic_login(user, info)

    return True


def delete_user(info: Info) -> bool:
    if not info.context.user:
        return False

    return True


def login_user(identonym: str, key: str, info: Info) -> str | None:
    user = get(Collections.users, identonym, 'name')
    if not user:
        return

    if user.get('key') != key:
        return

    encoded_jwt = logic_login(user, info)
    return encoded_jwt


def logout_user(info: Info) -> bool:
    if not info.context.user:
        return False

    info.context.response.set_cookie(
        key='Authorization',
        value='',
        httponly=True,
    )

    return True


MutationGeneral = create_type(
    'MutationGeneral',
    [
        strawberry.mutation(register_user),
        strawberry.mutation(delete_user),
        strawberry.mutation(login_user),
        strawberry.mutation(logout_user),
    ],
)
