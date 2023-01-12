import json
import copy

from source.graphql.types.betse import \
    BetseSimulation, BetseSimulationSolverOptions, BetseSimulationInitTimeSettings, BetseSimulationSimTimeSettings, BetseSimulationGeneralOptionsCustomizedIonProfile, BetseSimulationGeneralOptions, BetseSimulationVariableSettingsDeformation, BetseSimulationVariableSettingsPressures, BetseSimulationVariableSettingsNoise, BetseSimulationVariableSettingsGapJunctions, BetseSimulationVariableSettingsTightJunctionRelativeDiffusion, BetseSimulationVariableSettings, BetseSimulationResultsOptionsVisualsCellIndices, BetseSimulationResultsOptionsVisuals, BetseSimulationResultsOptionsWhileSolvingAnimationsColorbar, BetseSimulationResultsOptionsWhileSolvingAnimations, BetseSimulationResultsOptionsWhileSolving, BetseSimulationResultsOptionsAfterSolvingCsvsPipeline, BetseSimulationResultsOptionsAfterSolvingCsvs, BetseSimulationResultsOptionsAfterSolvingPlotsSingleCellPipeline, BetseSimulationResultsOptionsAfterSolvingPlotsCellClusterPipelineColorbar, BetseSimulationResultsOptionsAfterSolvingPlotsCellClusterPipeline, BetseSimulationResultsOptionsAfterSolvingPlots, BetseSimulationResultsOptionsAfterSolvingAnimationsPipelineColorbar, BetseSimulationResultsOptionsAfterSolvingAnimationsPipeline, BetseSimulationResultsOptionsAfterSolvingAnimations, BetseSimulationResultsOptionsAfterSolving, BetseSimulationResultsOptionsSaveCsvs, BetseSimulationResultsOptionsSavePlots, BetseSimulationResultsOptionsSaveAnimationsImages, BetseSimulationResultsOptionsSaveAnimationsVideoMetadata, BetseSimulationResultsOptionsSaveAnimationsVideo, BetseSimulationResultsOptionsSaveAnimations, BetseSimulationResultsOptionsSave, BetseSimulationResultsOptions, BetseSimulationInternalParameters, BetseSimulationData, \
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
    model['data']['solver_options'] = BetseSimulationSolverOptions(**model['data']['solver_options'])
    model['data']['init_time_settings'] = BetseSimulationInitTimeSettings(**model['data']['init_time_settings'])
    model['data']['sim_time_settings'] = BetseSimulationSimTimeSettings(**model['data']['sim_time_settings'])

    model['data']['general_options']['customized_ion_profile'] = BetseSimulationGeneralOptionsCustomizedIonProfile(**model['data']['general_options']['customized_ion_profile'])
    model['data']['general_options'] = BetseSimulationGeneralOptions(**model['data']['general_options'])

    model['data']['variable_settings']['deformation'] = BetseSimulationVariableSettingsDeformation(**model['data']['variable_settings']['deformation'])
    model['data']['variable_settings']['pressures'] = BetseSimulationVariableSettingsPressures(**model['data']['variable_settings']['pressures'])
    model['data']['variable_settings']['noise'] = BetseSimulationVariableSettingsNoise(**model['data']['variable_settings']['noise'])
    model['data']['variable_settings']['gap_junctions'] = BetseSimulationVariableSettingsGapJunctions(**model['data']['variable_settings']['gap_junctions'])
    model['data']['variable_settings']['tight_junction_relative_diffusion'] = BetseSimulationVariableSettingsTightJunctionRelativeDiffusion(**model['data']['variable_settings']['tight_junction_relative_diffusion'])
    model['data']['variable_settings'] = BetseSimulationVariableSettings(**model['data']['variable_settings'])


    model['data']['results_options']['visuals']['cell_indices'] = BetseSimulationResultsOptionsVisualsCellIndices(**model['data']['results_options']['visuals']['cell_indices'])
    model['data']['results_options']['visuals'] = BetseSimulationResultsOptionsVisuals(**model['data']['results_options']['visuals'])
    model['data']['results_options']['while_solving']['animations']['colorbar'] = BetseSimulationResultsOptionsWhileSolvingAnimationsColorbar(**model['data']['results_options']['while_solving']['animations']['colorbar'])
    model['data']['results_options']['while_solving']['animations'] = BetseSimulationResultsOptionsWhileSolvingAnimations(**['data']['results_options']['while_solving']['animations'])
    model['data']['results_options']['while_solving'] = BetseSimulationResultsOptionsWhileSolving(**model['data']['results_options']['while_solving'])
    model['data']['results_options']['after_solving']['csvs']['pipeline'] = BetseSimulationResultsOptionsAfterSolvingCsvsPipeline(**model['data']['results_options']['after_solving']['csvs']['pipeline'])
    model['data']['results_options']['after_solving']['csvs'] = BetseSimulationResultsOptionsAfterSolvingCsvs(**model['data']['results_options']['after_solving']['csvs'])
    model['data']['results_options']['after_solving']['plots']['single_cell_pipeline'] = BetseSimulationResultsOptionsAfterSolvingPlotsSingleCellPipeline(**model['data']['results_options']['after_solving']['plots']['single_cell_pipeline'])
    model['data']['results_options']['after_solving']['plots']['cell_cluster_pipeline']['colorbar'] = BetseSimulationResultsOptionsAfterSolvingPlotsCellClusterPipelineColorbar(**model['data']['results_options']['after_solving']['plots']['cell_cluster_pipeline']['colorbar'])
    model['data']['results_options']['after_solving']['plots']['cell_cluster_pipeline'] = BetseSimulationResultsOptionsAfterSolvingPlotsCellClusterPipeline(**model['data']['results_options']['after_solving']['plots']['cell_cluster_pipeline'])
    model['data']['results_options']['after_solving']['plots'] = BetseSimulationResultsOptionsAfterSolvingPlots(**model['data']['results_options']['after_solving']['plots'])
    model['data']['results_options']['after_solving']['animations']['pipeline']['colobar'] = BetseSimulationResultsOptionsAfterSolvingAnimationsPipelineColorbar(**model['data']['results_options']['after_solving']['animations']['pipeline']['colobar'])
    model['data']['results_options']['after_solving']['animations']['pipeline'] = BetseSimulationResultsOptionsAfterSolvingAnimationsPipeline(**model['data']['results_options']['after_solving']['animations']['pipeline'])
    model['data']['results_options']['after_solving']['animations'] = BetseSimulationResultsOptionsAfterSolvingAnimations(**model['data']['results_options']['after_solving']['animations'])
    model['data']['results_options']['after_solving'] = BetseSimulationResultsOptionsAfterSolving(**model['data']['results_options']['after_solving'])
    model['data']['results_options']['save'] = BetseSimulationResultsOptionsSaveCsvs(**model['data']['result_options'][''])
    model['data']['results_options']['save'] = BetseSimulationResultsOptionsSavePlots(**model['data']['result_options'][''])
    model['data']['results_options']['save'] = BetseSimulationResultsOptionsSaveAnimationsImages(**model['data']['result_options'][''])
    model['data']['results_options']['save'] = BetseSimulationResultsOptionsSaveAnimationsVideoMetadata(**model['data']['result_options'][''])
    model['data']['results_options']['save'] = BetseSimulationResultsOptionsSaveAnimationsVideo(**model['data']['result_options'][''])
    model['data']['results_options']['save'] = BetseSimulationResultsOptionsSaveAnimations(**model['data']['result_options'][''])
    model['data']['results_options']['save'] = BetseSimulationResultsOptionsSave(**model['data']['results_options']['save'])
    model['data']['results_options'] = BetseSimulationResultsOptions(**model['data']['results_options'])

    model['data']['internal_parameters'] = BetseSimulationInternalParameters(**model['data']['internal_parameters'])
    model['data'] = BetseSimulationData(**model['data'])

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
