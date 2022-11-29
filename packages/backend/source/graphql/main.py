import strawberry
from strawberry.fastapi import GraphQLRouter

from source.graphql.query.main import Query
from source.graphql.mutation.main import Mutation
from source.constants import production

from .context import get_context



schema = strawberry.Schema(
    query=Query,
    mutation=Mutation,
)


graphql_app = GraphQLRouter(
    schema,
    graphiql=not production,
    context_getter=get_context,
)
