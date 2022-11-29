from functools import cached_property

import strawberry
from strawberry.fastapi import BaseContext, GraphQLRouter

from source.graphql.query.main import Query
from source.graphql.mutation.main import Mutation
from source.constants import production



class Context(BaseContext):
    @cached_property
    def user(self) -> None:
        if not self.request:
            return None

        authorization = self.request.headers.get("Authorization", None)
        beso_username = self.request.headers.get("Beso-Username", None)
        print(authorization, beso_username)
        return

async def get_context() -> Context:
    return Context()


schema = strawberry.Schema(
    query=Query,
    mutation=Mutation,
)


graphql_app = GraphQLRouter(
    schema,
    graphiql=not production,
    context_getter=get_context,
)
