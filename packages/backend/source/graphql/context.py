from functools import cached_property

from strawberry.fastapi import BaseContext
from strawberry.types import Info as _Info
from strawberry.types.info import RootValueType

from source.graphql.types.general import User



class Context(BaseContext):
    @cached_property
    def user(self) -> User | None:
        if not self.request:
            return None

        # authorization = self.request.headers.get('Authorization', None)
        beso_username = self.request.headers.get('Beso-Username', None)
        if not beso_username:
            return

        return User(name=beso_username)


Info = _Info[Context, RootValueType]

async def get_context() -> Context:
    return Context()
