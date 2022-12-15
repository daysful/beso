import json

from source.graphql.types.betse import \
    BetseSimulation, \
    BetseWorld, BetseWorldMeshRefinement, BetseWorldImportFromSVG, \
    BetseTissue, BetseTissueDiffusionConstants, BetseTissueCellTargets, \
    BetseIntervention, \
    BetseFunction, BetseFunctionGradientX, BetseFunctionGradientY, BetseFunctionGradientR, BetseFunctionPeriodic, BetseFunctionFSweep, BetseFunctionGradientBitmap, BetseFunctionSingleCell, \
    BetseNetwork, \
    BetseBiomolecule, \
    BetseReaction, \
    BetseChannel, \
    BetseTransporter, \
    BetseModulator



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
    model['diffusion_constants'] = BetseTissueDiffusionConstants(**model['diffusion_constants'])
    model['cell_targets'] = BetseTissueCellTargets(**model['cell_targets'])

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
    model['gradient_x'] = BetseFunctionGradientX(**model['gradient_x'])
    model['gradient_y'] = BetseFunctionGradientY(**model['gradient_y'])
    model['gradient_r'] = BetseFunctionGradientR(**model['gradient_r'])
    model['periodic'] = BetseFunctionPeriodic(**model['periodic'])
    model['f_sweep'] = BetseFunctionFSweep(**model['f_sweep'])
    model['gradient_bitmap'] = BetseFunctionGradientBitmap(**model['gradient_bitmap'])
    model['single_cell'] = BetseFunctionSingleCell(**model['single_cell'])

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
