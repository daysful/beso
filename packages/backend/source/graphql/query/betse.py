import json
import strawberry

from source.database.main import get
from source.database.collections import Collections
from source.graphql.types.betse import \
    BetseSimulation, \
    BetseWorld, BetseWorldMeshRefinement, BetseWorldImportFromSVG, \
    BetseTissue, \
    BetseIntervention, \
    BetseFunction, \
    BetseNetwork, \
    BetseBiomolecule, \
    BetseReaction, \
    BetseChannel, \
    BetseTransporter, \
    BetseModulator
from source.graphql.context import Info



def modelBetseSimulation(
    data: any,
):
    model = json.loads(data['data'])
    model['id'] = data['id']

    return BetseSimulation(**model)

def modelBetseWorld(
    data: any,
):
    model = json.loads(data['data'])
    model['id'] = data['id']
    model['mesh_refinement'] = BetseWorldMeshRefinement(**model['mesh_refinement'])
    model['import_from_svg'] = BetseWorldImportFromSVG(**model['import_from_svg'])

    return BetseWorld(**model)

def modelBetseTissue(
    data: any,
):
    model = json.loads(data['data'])
    model['id'] = data['id']

    return BetseTissue(**model)

def modelBetseIntervention(
    data: any,
):
    model = json.loads(data['data'])
    model['id'] = data['id']

    return BetseIntervention(**model)

def modelBetseFunction(
    data: any,
):
    model = json.loads(data['data'])
    model['id'] = data['id']

    return BetseFunction(**model)

def modelBetseNetwork(
    data: any,
):
    model = json.loads(data['data'])
    model['id'] = data['id']

    return BetseNetwork(**model)

def modelBetseBiomolecule(
    data: any,
):
    model = json.loads(data['data'])
    model['id'] = data['id']

    return BetseBiomolecule(**model)

def modelBetseReaction(
    data: any,
):
    model = json.loads(data['data'])
    model['id'] = data['id']

    return BetseReaction(**model)

def modelBetseChannel(
    data: any,
):
    model = json.loads(data['data'])
    model['id'] = data['id']

    return BetseChannel(**model)

def modelBetseTransporter(
    data: any,
):
    model = json.loads(data['data'])
    model['id'] = data['id']

    return BetseTransporter(**model)

def modelBetseModulator(
    data: any,
):
    model = json.loads(data['data'])
    model['id'] = data['id']

    return BetseModulator(**model)



@strawberry.type
class QueryBetseWorld:
    @strawberry.field
    def betse_world(self, id: str, info: Info) -> BetseWorld | None:
        betse_world = get(Collections.betseWorlds, id)
        if not betse_world:
            return

        return modelBetseWorld(betse_world)
