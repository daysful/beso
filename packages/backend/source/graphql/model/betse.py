import json
import copy

from source.graphql.types.betse import \
    BetseSimulation, \
    BetseWorld, BetseWorldData, BetseWorldMeshRefinement, BetseWorldImportFromSVG, \
    BetseTissue, BetseTissueData, BetseTissueDiffusionConstants, BetseTissueCellTargets, \
    BetseGlobalIntervention, BetseGlobalInterventionChangeKEnv, BetseGlobalInterventionChangeClEnv, BetseGlobalInterventionChangeNaEnv, BetseGlobalInterventionChangeTemperature, BetseGlobalInterventionBlockGapJunctions, BetseGlobalInterventionBlockNaKATPPump, BetseGlobalInterventionData, \
    BetseTargetedIntervention, BetseTargetedInterventionChangeNaMem, BetseTargetedInterventionChangeKMem, BetseTargetedInterventionChangeClMem, BetseTargetedInterventionChangeCaMem, BetseTargetedInterventionApplyPressure, BetseTargetedInterventionApplyExternalVoltage, BetseTargetedInterventionBreakEcmJunctions, BetseTargetedInterventionCuttingEvent, BetseTargetedInterventionData, \
    BetseFunction, BetseFunctionData, BetseFunctionGradientX, BetseFunctionGradientY, BetseFunctionGradientR, BetseFunctionPeriodic, BetseFunctionFSweep, BetseFunctionGradientBitmap, BetseFunctionSingleCell, \
    BetseNetwork, BetseNetworkData, BetseNetworkOptimization, \
    BetseBiomolecule, BetseBiomoleculeData, BetseBiomoleculeGrowthAndDecay, BetseBiomoleculeIonChannelGating, BetseBiomoleculeActivePumping, BetseBiomoleculeChangeAtBounds, BetseBiomoleculePlotting, \
    BetseReaction, BetseReactionData, \
    BetseChannel, BetseChannelData, \
    BetseTransporter, BetseTransporterData, \
    BetseModulator, BetseModulatorData



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
        data_model['generated_by'] = model['generated_by']
        data_model['forked_from'] = None

        return data_model
    else:
        model['id'] = data['id']

        model['generated_at'] = data.get('generated_at') or 0
        model['generated_by'] = data.get('generated_by') or ''
        model['forked_from'] = data.get('forked_from') or None

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


def modelBetseGlobalIntervention(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)
    model['data']['change_K_env'] = BetseGlobalInterventionChangeKEnv(**model['data']['change_K_env'])
    model['data']['change_Cl_env'] = BetseGlobalInterventionChangeClEnv(**model['data']['change_Cl_env'])
    model['data']['change_Na_env'] = BetseGlobalInterventionChangeNaEnv(**model['data']['change_Na_env'])
    model['data']['change_temperature'] = BetseGlobalInterventionChangeTemperature(**model['data']['change_temperature'])
    model['data']['block_gap_junctions'] = BetseGlobalInterventionBlockGapJunctions(**model['data']['block_gap_junctions'])
    model['data']['block_NaKATP_pump'] = BetseGlobalInterventionBlockNaKATPPump(**model['data']['block_NaKATP_pump'])
    model['data'] = BetseGlobalInterventionData(**model['data'])

    return BetseGlobalIntervention(**model)


def modelBetseTargetedIntervention(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)
    model['data']['change_Na_mem'] = BetseTargetedInterventionChangeNaMem(**model['data']['change_Na_mem'])
    model['data']['change_K_mem'] = BetseTargetedInterventionChangeKMem(**model['data']['change_K_mem'])
    model['data']['change_Cl_mem'] = BetseTargetedInterventionChangeClMem(**model['data']['change_Cl_mem'])
    model['data']['change_Ca_mem'] = BetseTargetedInterventionChangeCaMem(**model['data']['change_Ca_mem'])
    model['data']['apply_pressure'] = BetseTargetedInterventionApplyPressure(**model['data']['apply_pressure'])
    model['data']['apply_external_voltage'] = BetseTargetedInterventionApplyExternalVoltage(**model['data']['apply_external_voltage'])
    model['data']['break_ecm_junctions'] = BetseTargetedInterventionBreakEcmJunctions(**model['data']['break_ecm_junctions'])
    model['data']['cutting_event'] = BetseTargetedInterventionCuttingEvent(**model['data']['cutting_event'])
    model['data'] = BetseTargetedInterventionData(**model['data'])

    return BetseTargetedIntervention(**model)


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
    model['data'] = BetseReactionData(**model['data'])

    return BetseReaction(**model)


def modelBetseChannel(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)
    model['data'] = BetseChannelData(**model['data'])

    return BetseChannel(**model)


def modelBetseTransporter(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)
    model['data'] = BetseTransporterData(**model['data'])

    return BetseTransporter(**model)


def modelBetseModulator(
    data: any,
    load_json: bool = True,
):
    model = model_base(data, load_json)
    model['data'] = BetseModulatorData(**model['data'])

    return BetseModulator(**model)
