import jwt

from functools import cached_property

from strawberry.fastapi import BaseContext
from strawberry.types import Info as _Info
from strawberry.types.info import RootValueType

from source.constants import jwt_secret
from source.graphql.types.general import User



class Context(BaseContext):
    @cached_property
    def user(self) -> User | None:
        if not self.request:
            return None

        authorization = self.request.headers.get('Authorization', None)
        if not authorization:
            return

        try:
            token = authorization.replace('Bearer ', '')
            payload = jwt.decode(token, jwt_secret, algorithms=['HS256'])

            return User(name=payload.username)
        except:
            return


Info = _Info[Context, RootValueType]

async def get_context() -> Context:
    return Context()
