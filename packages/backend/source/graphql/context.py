import jwt

from functools import cached_property

from strawberry.fastapi import BaseContext
from strawberry.types import Info as _Info
from strawberry.types.info import RootValueType

from source.constants import jwt_secret
from source.graphql.types.general import User
from source.database.collections import Collections
from source.database.main import get



class Context(BaseContext):
    @cached_property
    def user(self) -> User | None:
        if not self.request:
            return None

        cookie = self.request.cookies.get('Authorization', None)
        header = self.request.headers.get('Authorization', None)
        print('header', header)
        authorization = cookie or header
        if not authorization:
            return

        try:
            token = authorization.replace('Bearer ', '')
            payload = jwt.decode(token, jwt_secret, algorithms=['HS256'])

            user = get(Collections.users, payload['username'], 'name')
            if not user:
                return

            return User(id=user['id'], name=user['name'])
        except Exception as e:
            print(e)
            return


Info = _Info[Context, RootValueType]

async def get_context() -> Context:
    return Context()
