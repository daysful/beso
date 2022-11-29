import strawberry
from strawberry.asgi import GraphQL

from source.graphql.query.main import Query
from source.graphql.mutation.main import Mutation
from source.constants import production



schema = strawberry.Schema(
    query=Query,
    mutation=Mutation,
)


graphql_app = GraphQL(
    schema,
    graphiql=not production,
)
