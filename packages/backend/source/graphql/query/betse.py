import strawberry

from source.graphql.types.betse import BetseWorld
from source.database.main import get
from source.database.collections import Collections



@strawberry.type
class QueryBetseWorld:
    @strawberry.field
    def betse_world(self, id: str) -> BetseWorld | None:
        betse_world = get(Collections.betseWorlds, id)
        if not betse_world:
            return

        return BetseWorld(**betse_world['data'])
