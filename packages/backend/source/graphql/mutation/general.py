import jwt

import strawberry
from strawberry.tools import create_type

from source.constants import jwt_secret
from source.graphql.context import Info
from source.database.collections import Collections
from source.database.main import get



def login_user(username: str, key: str, info: Info) -> str | None:
    user = get(Collections.users, username)
    if not user:
        return

    if user.get('key') != key:
        return

    encoded_jwt = jwt.encode(
        {
            'username': 'payload',
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


MutationGeneral = create_type(
    'MutationGeneral',
    [
        strawberry.mutation(login_user),
    ],
)
