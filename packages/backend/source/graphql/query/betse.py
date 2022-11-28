import strawberry

from source.graphql.types.betse import default_betse_world, BetseWorld



@strawberry.type
class QueryBetseWorld:
    @strawberry.field
    def betse_world(self, id: str) -> BetseWorld:
        return default_betse_world
