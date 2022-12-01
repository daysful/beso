import jwt

import strawberry
from strawberry.tools import create_type

from source.constants import jwt_secret, allow_user_registration
from source.utilities.general import generate_id
from source.database.collections import Collections
from source.database.main import get, insert
from source.graphql.context import Info
from source.graphql.types.general import UserWithToken



def logic_login(
    user,
    info: Info,
):
    encoded_jwt = jwt.encode(
        {
            'identonym': user['name'],
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


def register_user(identonym: str, key: str, info: Info) -> UserWithToken | None:
    if not allow_user_registration:
        return

    user =  {
        'id': generate_id(),
        'name': identonym,
        'key': key,
    }

    insert(
        Collections.users,
        user,
    )

    token = logic_login(user, info)

    return UserWithToken(
        id=user['id'],
        name=user['name'],
        token=token,
    )


def delete_user(info: Info) -> bool:
    if not info.context.user:
        return False

    return True


def login_user(identonym: str, key: str, info: Info) -> UserWithToken | None:
    user = get(Collections.users, identonym, 'name')
    if not user:
        return

    if user.get('key') != key:
        return

    token = logic_login(user, info)

    return UserWithToken(
        id=user['id'],
        name=user['name'],
        token=token,
    )


def logout_user(info: Info) -> bool:
    if not info.context.user:
        return False

    info.context.response.set_cookie(
        key='Authorization',
        value='',
        httponly=True,
    )

    return True


MutationUser = create_type(
    'MutationUser',
    [
        strawberry.mutation(register_user),
        strawberry.mutation(delete_user),
        strawberry.mutation(login_user),
        strawberry.mutation(logout_user),
    ],
)
