import strawberry

from source.graphql.types.betse import default_betse_world, BetseWorld



@strawberry.type
class MutationBetseWorld:
    @strawberry.mutation
    def add_betse_world(self, name: str) -> BetseWorld:
        betse_world = default_betse_world.__dict__
        betse_world['name'] = name

        return BetseWorld(**betse_world)
