import json
import copy

from source.graphql.types.betse import \
    BetseSimulation, \
    BetseWorld, BetseWorldData, BetseWorldMeshRefinement, BetseWorldImportFromSVG, \
    BetseTissue, BetseTissueData, BetseTissueDiffusionConstants, BetseTissueCellTargets, \
    BetseIntervention, \
    BetseFunction, BetseFunctionData, BetseFunctionGradientX, BetseFunctionGradientY, BetseFunctionGradientR, BetseFunctionPeriodic, BetseFunctionFSweep, BetseFunctionGradientBitmap, BetseFunctionSingleCell, \
    BetseNetwork, BetseNetworkData, BetseNetworkOptimization, \
    BetseBiomolecule, BetseBiomoleculeData, BetseBiomoleculeGrowthAndDecay, BetseBiomoleculeIonChannelGating, BetseBiomoleculeActivePumping, BetseBiomoleculeChangeAtBounds, BetseBiomoleculePlotting, \
    BetseReaction, \
    BetseChannel, \
    BetseTransporter, \
    BetseModulator



def model_base(
    data: any,
    load_json: bool = True,
):
    model = data.copy()

    if load_json:
        model['data'] = json.loads(data['data'])

        data_model = copy.deepcopy(model)['data']
        data_model['id'] = model['id']
        data_model['generated_at'] = model['generated_at']

        return data_model
    else:
        model['id'] = data['id']
        if data.get('generated_at'):
            model['generated_at'] = data['generated_at']

        return model


def modelBetseSimulation(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)

    return BetseSimulation(**model)


def modelBetseWorld(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)
    model['data']['mesh_refinement'] = BetseWorldMeshRefinement(**model['data']['mesh_refinement'])
    model['data']['import_from_svg'] = BetseWorldImportFromSVG(**model['data']['import_from_svg'])
    model['data'] = BetseWorldData(**model['data'])

    return BetseWorld(**model)


def modelBetseTissue(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)
    model['data']['diffusion_constants'] = BetseTissueDiffusionConstants(**model['data']['diffusion_constants'])
    model['data']['cell_targets'] = BetseTissueCellTargets(**model['data']['cell_targets'])
    model['data'] = BetseTissueData(**model['data'])

    return BetseTissue(**model)


def modelBetseIntervention(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)

    return BetseIntervention(**model)


def modelBetseFunction(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)
    model['data']['gradient_x'] = BetseFunctionGradientX(**model['data']['gradient_x'])
    model['data']['gradient_y'] = BetseFunctionGradientY(**model['data']['gradient_y'])
    model['data']['gradient_r'] = BetseFunctionGradientR(**model['data']['gradient_r'])
    model['data']['periodic'] = BetseFunctionPeriodic(**model['data']['periodic'])
    model['data']['f_sweep'] = BetseFunctionFSweep(**model['data']['f_sweep'])
    model['data']['gradient_bitmap'] = BetseFunctionGradientBitmap(**model['data']['gradient_bitmap'])
    model['data']['single_cell'] = BetseFunctionSingleCell(**model['data']['single_cell'])
    model['data'] = BetseFunctionData(**model['data'])

    return BetseFunction(**model)


def modelBetseNetwork(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)
    model['data']['optimization'] = BetseNetworkOptimization(**model['data']['optimization'])
    model['data'] = BetseNetworkData(**model['data'])

    return BetseNetwork(**model)


def modelBetseBiomolecule(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)
    model['data']['growth_and_decay'] = BetseBiomoleculeGrowthAndDecay(**model['data']['growth_and_decay'])
    model['data']['ion_channel_gating'] = BetseBiomoleculeIonChannelGating(**model['data']['ion_channel_gating'])
    model['data']['active_pumping'] = BetseBiomoleculeActivePumping(**model['data']['active_pumping'])
    model['data']['change_at_bounds'] = BetseBiomoleculeChangeAtBounds(**model['data']['change_at_bounds'])
    model['data']['plotting'] = BetseBiomoleculePlotting(**model['data']['plotting'])
    model['data'] = BetseBiomoleculeData(**model['data'])

    return BetseBiomolecule(**model)


def modelBetseReaction(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)

    return BetseReaction(**model)


def modelBetseChannel(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)

    return BetseChannel(**model)


def modelBetseTransporter(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)

    return BetseTransporter(**model)


def modelBetseModulator(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)

    return BetseModulator(**model)
