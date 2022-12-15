import json
import strawberry

from source.database.main import get
from source.database.collections import Collections
from source.graphql.types.betse import \
    BetseWorld, BetseWorldMeshRefinement, BetseWorldImportFromSVG
from source.graphql.context import Info



def modelBetseSimulation(
    data: any,
):
    return {}

def modelBetseWorld(
    betse_world: any,
):
    data = json.loads(betse_world['data'])
    data['id'] = betse_world['id']
    data['mesh_refinement'] = BetseWorldMeshRefinement(**data['mesh_refinement'])
    data['import_from_svg'] = BetseWorldImportFromSVG(**data['import_from_svg'])

    return BetseWorld(**data)

def modelBetseTissue(
    data: any,
):
    return {}

def modelBetseIntervention(
    data: any,
):
    return {}

def modelBetseFunction(
    data: any,
):
    return {}

def modelBetseNetwork(
    data: any,
):
    return {}

def modelBetseBiomolecule(
    data: any,
):
    return {}

def modelBetseReaction(
    data: any,
):
    return {}

def modelBetseChannel(
    data: any,
):
    return {}

def modelBetseTransporter(
    data: any,
):
    return {}

def modelBetseModulator(
    data: any,
):
    return {}



@strawberry.type
class QueryBetseWorld:
    @strawberry.field
    def betse_world(self, id: str, info: Info) -> BetseWorld | None:
        betse_world = get(Collections.betseWorlds, id)
        if not betse_world:
            return

        return modelBetseWorld(betse_world)
