import json
import strawberry

from source.database.main import get
from source.database.collections import Collections
from source.graphql.types.betse import \
    BetseWorld, BetseWorldMeshRefinement, BetseWorldImportFromSVG
from source.graphql.context import Info



@strawberry.type
class QueryBetseWorld:
    @strawberry.field
    def betse_world(self, id: str, info: Info) -> BetseWorld | None:
        betse_world = get(Collections.betseWorlds, id)
        if not betse_world:
            return

        data = json.loads(betse_world['data'])
        data['id'] = betse_world['id']
        data['mesh_refinement'] = BetseWorldMeshRefinement(**data['mesh_refinement'])
        data['import_from_svg'] = BetseWorldImportFromSVG(**data['import_from_svg'])

        return BetseWorld(**data)
