import jwt

import strawberry
from strawberry.tools import create_type

from source.constants import jwt_secret, allow_user_registration
from source.utilities.general import generate_id
from source.database.collections import Collections
from source.database.main import get, insert
from source.graphql.context import Info



def register_user(name: str, key: str) -> bool:
    if not allow_user_registration:
        return False

    insert(
        Collections.users,
        {
            'id': generate_id(),
            'name': name,
            'key': key,
        },
    )

    return True


def delete_user(info: Info) -> bool:
    if not info.context.user:
        return False

    return True


def login_user(username: str, key: str, info: Info) -> str | None:
    user = get(Collections.users, username, 'name')
    if not user:
        return

    if user.get('key') != key:
        return

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
