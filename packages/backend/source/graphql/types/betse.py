from enum import Enum
from typing import NewType

import strawberry
from strawberry.file_uploads import Upload



GraphqlAny = strawberry.scalar(
    NewType("Any", object),
    description="anything",
    serialize=lambda v: v,
    parse_value=lambda v: v,
)


# region BetseSimulation
# region input BetseSimulation
@strawberry.input
class InputBetseSimulationSolverOptions:
    type: str

@strawberry.input
class InputBetseSimulationInitTimeSettings:
    time_step: float
    total_time: float
    sampling_rate: float

@strawberry.input
class InputBetseSimulationSimTimeSettings:
    time_step: float
    total_time: float
    sampling_rate: float

@strawberry.input
class InputBetseSimulationGeneralOptionsCustomizedIonProfile:
    extracellular_Na_concentration: float
    extracellular_K_concentration: float
    extracellular_Cl_concentration: float
    extracellular_Ca2_concentration: float
    extracellular_protein_concentration: float
    cytosolic_Na_concentration: float
    cytosolic_K_concentration: float
    cytosolic_Cl_concentration: float
    cytosolic_Ca2_concentration: float
    cytosolic_protein_concentration: float

@strawberry.input
class InputBetseSimulationGeneralOptions:
    comp_grid_size: int
    simulate_extracellular_spaces: bool
    ion_profile: str
    customized_ion_profile: InputBetseSimulationGeneralOptionsCustomizedIonProfile

@strawberry.input
class InputBetseSimulationVariableSettingsDeformation:
    turn_on: bool
    galvanotropism: float
    viscous_damping: float
    fixed_cluster_boundary: bool
    young_modulus: float

@strawberry.input
class InputBetseSimulationVariableSettingsPressures:
    include_electrostatic_pressure: bool
    include_osmotic_pressure: bool
    membrane_water_conductivity: float

@strawberry.input
class InputBetseSimulationVariableSettingsNoise:
    static_noise_level: float
    dynamic_noise: bool
    dynamic_noise_level: float

@strawberry.input
class InputBetseSimulationVariableSettingsGapJunctions:
    gap_junction_surface_area: float
    voltage_sensitive_gj: bool
    gj_voltage_threshold: float
    gj_voltage_window: float
    gj_minimum: float

@strawberry.input
class InputBetseSimulationVariableSettingsTightJunctionRelativeDiffusion:
    Na: int
    K: int
    Cl: int
    Ca: int
    M: int
    P: int

@strawberry.input
class InputBetseSimulationVariableSettings:
    env_boundary_concentrations: str
    temperature: float
    deformation: InputBetseSimulationVariableSettingsDeformation
    pressures: InputBetseSimulationVariableSettingsPressures
    noise: InputBetseSimulationVariableSettingsNoise
    gap_junctions: InputBetseSimulationVariableSettingsGapJunctions
    tight_junction_scaling: float
    tight_junction_relative_diffusion: InputBetseSimulationVariableSettingsTightJunctionRelativeDiffusion
    adherens_junction_scaling: float
    use_Goldman_calculator: bool

@strawberry.input
class InputBetseSimulationResultsOptions:
    show_cells: bool
    enumerate_cells: bool

@strawberry.input
class InputBetseSimulationInternalParameters:
    Do_Na: float
    Do_K: float
    Do_Cl: float
    Do_Ca: float
    Do_M: float
    Do_P: float
    alpha_NaK: float
    alpha_Ca: float
    substances_affect_Vmem: bool
    environment_volume_multiplier: float
    membrane_capacitance: float
    cell_polarizability: float
    dielectric_constant: float
    fast_update_ECM: bool
    sharpness_env: float
    sharpness_cell: float
    true_cell_size: float

@strawberry.input
class InputBetseSimulationData:
    solver_options: InputBetseSimulationSolverOptions
    init_time_settings: InputBetseSimulationInitTimeSettings
    sim_time_settings: InputBetseSimulationSimTimeSettings
    general_options: InputBetseSimulationGeneralOptions
    variable_settings: InputBetseSimulationVariableSettings
    results_options: InputBetseSimulationResultsOptions
    internal_parameters: InputBetseSimulationInternalParameters
    version: str
    world: str
    tissues: list[str]
    interventions: list[str]
    modulators: list[str]
    networks: list[str]
    biomolecules: list[str]
    reactions: list[str]
    channels: list[str]

@strawberry.input
class InputAddBetseSimulation:
    name: str
    data: InputBetseSimulationData

@strawberry.input
class InputEditBetseSimulation:
    id: str
    name: str
    data: InputBetseSimulationData
# endregion input BetseSimulation

# region type BetseSimulation
@strawberry.type
class BetseSimulationSolverOptions:
    type: str

@strawberry.type
class BetseSimulationInitTimeSettings:
    time_step: float
    total_time: float
    sampling_rate: float

@strawberry.type
class BetseSimulationSimTimeSettings:
    time_step: float
    total_time: float
    sampling_rate: float

@strawberry.type
class BetseSimulationGeneralOptionsCustomizedIonProfile:
    extracellular_Na_concentration: float
    extracellular_K_concentration: float
    extracellular_Cl_concentration: float
    extracellular_Ca2_concentration: float
    extracellular_protein_concentration: float
    cytosolic_Na_concentration: float
    cytosolic_K_concentration: float
    cytosolic_Cl_concentration: float
    cytosolic_Ca2_concentration: float
    cytosolic_protein_concentration: float

@strawberry.type
class BetseSimulationGeneralOptions:
    comp_grid_size: int
    simulate_extracellular_spaces: bool
    ion_profile: str
    customized_ion_profile: BetseSimulationGeneralOptionsCustomizedIonProfile

@strawberry.type
class BetseSimulationVariableSettingsDeformation:
    turn_on: bool
    galvanotropism: float
    viscous_damping: float
    fixed_cluster_boundary: bool
    young_modulus: float

@strawberry.type
class BetseSimulationVariableSettingsPressures:
    include_electrostatic_pressure: bool
    include_osmotic_pressure: bool
    membrane_water_conductivity: float

@strawberry.type
class BetseSimulationVariableSettingsNoise:
    static_noise_level: float
    dynamic_noise: bool
    dynamic_noise_level: float

@strawberry.type
class BetseSimulationVariableSettingsGapJunctions:
    gap_junction_surface_area: float
    voltage_sensitive_gj: bool
    gj_voltage_threshold: float
    gj_voltage_window: float
    gj_minimum: float

@strawberry.type
class BetseSimulationVariableSettingsTightJunctionRelativeDiffusion:
    Na: int
    K: int
    Cl: int
    Ca: int
    M: int
    P: int

@strawberry.type
class BetseSimulationVariableSettings:
    env_boundary_concentrations: str
    temperature: float
    deformation: BetseSimulationVariableSettingsDeformation
    pressures: BetseSimulationVariableSettingsPressures
    noise: BetseSimulationVariableSettingsNoise
    gap_junctions: BetseSimulationVariableSettingsGapJunctions
    tight_junction_scaling: float
    tight_junction_relative_diffusion: BetseSimulationVariableSettingsTightJunctionRelativeDiffusion
    adherens_junction_scaling: float
    use_Goldman_calculator: bool

@strawberry.type
class BetseSimulationResultsOptions:
    show_cells: bool
    enumerate_cells: bool

@strawberry.type
class BetseSimulationInternalParameters:
    Do_Na: float
    Do_K: float
    Do_Cl: float
    Do_Ca: float
    Do_M: float
    Do_P: float
    alpha_NaK: float
    alpha_Ca: float
    substances_affect_Vmem: bool
    environment_volume_multiplier: float
    membrane_capacitance: float
    cell_polarizability: float
    dielectric_constant: float
    fast_update_ECM: bool
    sharpness_env: float
    sharpness_cell: float
    true_cell_size: float

@strawberry.type
class BetseSimulationData:
    solver_options: BetseSimulationSolverOptions
    init_time_settings: BetseSimulationInitTimeSettings
    sim_time_settings: BetseSimulationSimTimeSettings
    general_options: BetseSimulationGeneralOptions
    variable_settings: BetseSimulationVariableSettings
    results_options: BetseSimulationResultsOptions
    internal_parameters: BetseSimulationInternalParameters
    version: str
    world: str
    tissues: list[str]
    interventions: list[str]
    modulators: list[str]
    networks: list[str]
    biomolecules: list[str]
    reactions: list[str]
    channels: list[str]

@strawberry.type
class BetseSimulation:
    id: str
    name: str
    generated_at: float
    generated_by: str
    forked_from: str | None
    data: BetseSimulationData
# endregion type BetseSimulation
# endregion BetseSimulation



# region BetseWorld
# region input BetseWorld
@strawberry.input
class InputBetseWorldMeshRefinement:
    refine_mesh: bool
    maximum_steps: int
    convergence_threshold: float

@strawberry.input
class InputBetseWorldImportFromSVG:
    svg_override: bool
    cells_from_svg: str
    # cells_from_svg: Upload
    svg_size: int

@strawberry.input
class InputBetseWorldData:
    world_size: float
    cell_radius: float
    cell_height: float
    cell_spacing: float
    simulate_single_cell: bool
    lattice_type: str
    lattice_disorder: float
    mesh_refinement: InputBetseWorldMeshRefinement
    import_from_svg: InputBetseWorldImportFromSVG
    alpha_shape: float
    use_centers: bool

@strawberry.input
class InputAddBetseWorld:
    name: str
    data: InputBetseWorldData

@strawberry.input
class InputEditBetseWorld:
    id: str
    name: str
    data: InputBetseWorldData
# endregion input BetseWorld

# region type BetseWorld
@strawberry.type
class BetseWorldMeshRefinement:
    refine_mesh: bool
    maximum_steps: int
    convergence_threshold: float

@strawberry.type
class BetseWorldImportFromSVG:
    svg_override: bool
    cells_from_svg: str
    svg_size: int

@strawberry.type
class BetseWorldData:
    world_size: float
    cell_radius: float
    cell_height: float
    cell_spacing: float
    simulate_single_cell: bool
    lattice_type: str
    lattice_disorder: float
    mesh_refinement: BetseWorldMeshRefinement
    import_from_svg: BetseWorldImportFromSVG
    alpha_shape: float
    use_centers: bool

@strawberry.type
class BetseWorld:
    id: str
    name: str
    generated_at: float
    generated_by: str
    forked_from: str | None
    data: BetseWorldData
# endregion type BetseWorld
# endregion BetseWorld



# region BetseTissue
# region input BetseTissue
@strawberry.input
class InputBetseTissueDiffusionConstants:
    Dm_Na: float
    Dm_K: float
    Dm_Cl: float
    Dm_Ca: float
    Dm_M: float
    Dm_P: float

@strawberry.input
class InputBetseTissueCellTargets:
    type: str
    color: str
    image: str
    indices: list[int]
    percent: float

@strawberry.input
class InputBetseTissueData:
    insular: bool
    diffusion_constants: InputBetseTissueDiffusionConstants
    cell_targets: InputBetseTissueCellTargets

@strawberry.input
class InputAddBetseTissue:
    name: str
    data: InputBetseTissueData

@strawberry.input
class InputEditBetseTissue:
    id: str
    name: str
    data: InputBetseTissueData
# endregion input BetseTissue

# region type BetseTissue
@strawberry.type
class BetseTissueDiffusionConstants:
    Dm_Na: float
    Dm_K: float
    Dm_Cl: float
    Dm_Ca: float
    Dm_M: float
    Dm_P: float

@strawberry.type
class BetseTissueCellTargets:
    type: str
    color: str
    image: str
    indices: list[int]
    percent: float

@strawberry.type
class BetseTissueData:
    insular: bool
    diffusion_constants: BetseTissueDiffusionConstants
    cell_targets: BetseTissueCellTargets

@strawberry.type
class BetseTissue:
    id: str
    name: str
    generated_at: float
    generated_by: str
    forked_from: str | None
    data: BetseTissueData
# endregion type BetseTissue
# endregion BetseTissue



# region BetseGlobalIntervention
# region input BetseGlobalIntervention
@strawberry.input
class InputBetseGlobalInterventionChangeKEnv:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float

@strawberry.input
class InputBetseGlobalInterventionChangeClEnv:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float

@strawberry.input
class InputBetseGlobalInterventionChangeNaEnv:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float

@strawberry.input
class InputBetseGlobalInterventionChangeTemperature:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float

@strawberry.input
class InputBetseGlobalInterventionBlockGapJunctions:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    random_fraction: float

@strawberry.input
class InputBetseGlobalInterventionBlockNaKATPPump:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float

@strawberry.input
class InputBetseGlobalInterventionData:
    change_K_env: InputBetseGlobalInterventionChangeKEnv
    change_Cl_env: InputBetseGlobalInterventionChangeClEnv
    change_Na_env: InputBetseGlobalInterventionChangeNaEnv
    change_temperature: InputBetseGlobalInterventionChangeTemperature
    block_gap_junctions: InputBetseGlobalInterventionBlockGapJunctions
    block_NaKATP_pump: InputBetseGlobalInterventionBlockNaKATPPump

@strawberry.input
class InputAddBetseGlobalIntervention:
    name: str
    data: InputBetseGlobalInterventionData

@strawberry.input
class InputEditBetseGlobalIntervention:
    id: str
    name: str
    data: InputBetseGlobalInterventionData
# endregion input BetseGlobalIntervention

# region type BetseGlobalIntervention
@strawberry.type
class BetseGlobalInterventionChangeKEnv:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float

@strawberry.type
class BetseGlobalInterventionChangeClEnv:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float

@strawberry.type
class BetseGlobalInterventionChangeNaEnv:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float

@strawberry.type
class BetseGlobalInterventionChangeTemperature:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float

@strawberry.type
class BetseGlobalInterventionBlockGapJunctions:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    random_fraction: float

@strawberry.type
class BetseGlobalInterventionBlockNaKATPPump:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float

@strawberry.type
class BetseGlobalInterventionData:
    change_K_env: BetseGlobalInterventionChangeKEnv
    change_Cl_env: BetseGlobalInterventionChangeClEnv
    change_Na_env: BetseGlobalInterventionChangeNaEnv
    change_temperature: BetseGlobalInterventionChangeTemperature
    block_gap_junctions: BetseGlobalInterventionBlockGapJunctions
    block_NaKATP_pump: BetseGlobalInterventionBlockNaKATPPump

@strawberry.type
class BetseGlobalIntervention:
    id: str
    name: str
    generated_at: float
    generated_by: str
    forked_from: str | None
    data: BetseGlobalInterventionData
# endregion type BetseGlobalIntervention
# endregion BetseGlobalIntervention



# region BetseTargetedIntervention
# region input BetseTargetedIntervention
@strawberry.input
class InputBetseTargetedInterventionChangeNaMem:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float
    modulator_function: str
    apply_to: list[str]

@strawberry.input
class InputBetseTargetedInterventionChangeKMem:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float
    modulator_function: str
    apply_to: list[str]

@strawberry.input
class InputBetseTargetedInterventionChangeClMem:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float
    modulator_function: str
    apply_to: list[str]

@strawberry.input
class InputBetseTargetedInterventionChangeCaMem:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float
    modulator_function: str
    apply_to: list[str]

@strawberry.input
class InputBetseTargetedInterventionApplyPressure:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float
    modulator_function: str
    apply_to: list[str]

@strawberry.input
class InputBetseTargetedInterventionApplyExternalVoltage:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    peak_voltage: float
    positive_voltage_boundary: str
    negative_voltage_boundary: str

@strawberry.input
class InputBetseTargetedInterventionBreakEcmJunctions:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float
    apply_to: list[str]

@strawberry.input
class InputBetseTargetedInterventionCuttingEvent:
    event_happens: bool
    apply_to: list[str]
    break_TJ: bool
    wound_TJ: float

@strawberry.input
class InputBetseTargetedInterventionData:
    change_Na_mem: InputBetseTargetedInterventionChangeNaMem
    change_K_mem: InputBetseTargetedInterventionChangeKMem
    change_Cl_mem: InputBetseTargetedInterventionChangeClMem
    change_Ca_mem: InputBetseTargetedInterventionChangeCaMem
    apply_pressure: InputBetseTargetedInterventionApplyPressure
    apply_external_voltage: InputBetseTargetedInterventionApplyExternalVoltage
    break_ecm_junctions: InputBetseTargetedInterventionBreakEcmJunctions
    cutting_event: InputBetseTargetedInterventionCuttingEvent

@strawberry.input
class InputAddBetseTargetedIntervention:
    name: str
    data: InputBetseTargetedInterventionData

@strawberry.input
class InputEditBetseTargetedIntervention:
    id: str
    name: str
    data: InputBetseTargetedInterventionData
# endregion input BetseTargetedIntervention

# region type BetseTargetedIntervention
@strawberry.type
class BetseTargetedInterventionChangeNaMem:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float
    modulator_function: str
    apply_to: list[str]

@strawberry.type
class BetseTargetedInterventionChangeKMem:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float
    modulator_function: str
    apply_to: list[str]

@strawberry.type
class BetseTargetedInterventionChangeClMem:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float
    modulator_function: str
    apply_to: list[str]

@strawberry.type
class BetseTargetedInterventionChangeCaMem:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float
    modulator_function: str
    apply_to: list[str]

@strawberry.type
class BetseTargetedInterventionApplyPressure:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float
    modulator_function: str
    apply_to: list[str]

@strawberry.type
class BetseTargetedInterventionApplyExternalVoltage:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    peak_voltage: float
    positive_voltage_boundary: str
    negative_voltage_boundary: str

@strawberry.type
class BetseTargetedInterventionBreakEcmJunctions:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    multiplier: float
    apply_to: list[str]

@strawberry.type
class BetseTargetedInterventionCuttingEvent:
    event_happens: bool
    apply_to: list[str]
    break_TJ: bool
    wound_TJ: float

@strawberry.type
class BetseTargetedInterventionData:
    change_Na_mem: BetseTargetedInterventionChangeNaMem
    change_K_mem: BetseTargetedInterventionChangeKMem
    change_Cl_mem: BetseTargetedInterventionChangeClMem
    change_Ca_mem: BetseTargetedInterventionChangeCaMem
    apply_pressure: BetseTargetedInterventionApplyPressure
    apply_external_voltage: BetseTargetedInterventionApplyExternalVoltage
    break_ecm_junctions: BetseTargetedInterventionBreakEcmJunctions
    cutting_event: BetseTargetedInterventionCuttingEvent

@strawberry.type
class BetseTargetedIntervention:
    id: str
    name: str
    generated_at: float
    generated_by: str
    forked_from: str | None
    data: BetseTargetedInterventionData
# endregion type BetseTargetedIntervention
# endregion BetseTargetedIntervention



# region BetseFunctions
# region input BetseFunction
@strawberry.input
class InputBetseFunctionGradientX:
    slope: float
    x_offset: float
    z_offset: float
    exponent: float

@strawberry.input
class InputBetseFunctionGradientY:
    slope: float
    x_offset: float
    z_offset: float
    exponent: float

@strawberry.input
class InputBetseFunctionGradientR:
    slope: float
    x_offset: float
    z_offset: float
    exponent: float

@strawberry.input
class InputBetseFunctionPeriodic:
    frequency: float
    phase: float

@strawberry.input
class InputBetseFunctionFSweep:
    start_frequency: float
    end_frequency: float

@strawberry.input
class InputBetseFunctionGradientBitmap:
    file: str
    z_offset: float

@strawberry.input
class InputBetseFunctionSingleCell:
    z_offset: float

@strawberry.input
class InputBetseFunctionData:
    gradient_x: InputBetseFunctionGradientX
    gradient_y: InputBetseFunctionGradientY
    gradient_r: InputBetseFunctionGradientR
    periodic: InputBetseFunctionPeriodic
    f_sweep: InputBetseFunctionFSweep
    gradient_bitmap: InputBetseFunctionGradientBitmap
    single_cell: InputBetseFunctionSingleCell

@strawberry.input
class InputAddBetseFunction:
    name: str
    data: InputBetseFunctionData

@strawberry.input
class InputEditBetseFunction:
    id: str
    name: str
    data: InputBetseFunctionData
# endregion input BetseFunction

# region type BetseFunction
@strawberry.type
class BetseFunctionGradientX:
    slope: float
    x_offset: float
    z_offset: float
    exponent: float

@strawberry.type
class BetseFunctionGradientY:
    slope: float
    x_offset: float
    z_offset: float
    exponent: float

@strawberry.type
class BetseFunctionGradientR:
    slope: float
    x_offset: float
    z_offset: float
    exponent: float

@strawberry.type
class BetseFunctionPeriodic:
    frequency: float
    phase: float

@strawberry.type
class BetseFunctionFSweep:
    start_frequency: float
    end_frequency: float

@strawberry.type
class BetseFunctionGradientBitmap:
    file: str
    z_offset: float

@strawberry.type
class BetseFunctionSingleCell:
    z_offset: float

@strawberry.type
class BetseFunctionData:
    gradient_x: BetseFunctionGradientX
    gradient_y: BetseFunctionGradientY
    gradient_r: BetseFunctionGradientR
    periodic: BetseFunctionPeriodic
    f_sweep: BetseFunctionFSweep
    gradient_bitmap: BetseFunctionGradientBitmap
    single_cell: BetseFunctionSingleCell

@strawberry.type
class BetseFunction:
    id: str
    name: str
    generated_at: float
    generated_by: str
    forked_from: str | None
    data: BetseFunctionData
# endregion type BetseFunction
# endregion BetseFunction



# region BetseNetwork
@strawberry.enum
class BetseNetworkOptimizationOptimizationMethod(Enum):
    COBYLA = 'COBYLA'
    LBFGSB = 'L-BFGS-B'
    CG = 'CG'
    NELDER_MEAD = 'Nelder-Mead'
    POWELL = 'Powell'
    BFGS = 'BFGS'
    TNC = 'TNC'
    SLSQP = 'SLSQP'

# region input BetseNetwork
@strawberry.input
class InputBetseNetworkOptimization:
    optimize_network: bool
    optimization_steps: int
    # optimization_method: BetseNetworkOptimizationOptimizationMethod
    optimization_method: str
    optimization_T: float
    optimization_step: float
    target_Vmem: float

@strawberry.input
class InputBetseNetworkData:
    enable_mitochondria: bool
    optimization: InputBetseNetworkOptimization
    time_dilation_factor: float
    reset_microtubules: bool
    recalculate_fluid: bool

@strawberry.input
class InputAddBetseNetwork:
    name: str
    data: InputBetseNetworkData

@strawberry.input
class InputEditBetseNetwork:
    id: str
    name: str
    data: InputBetseNetworkData
# endregion input BetseNetwork

# region type BetseNetwork
@strawberry.type
class BetseNetworkOptimization:
    optimize_network: bool
    optimization_steps: int
    # optimization_method: BetseNetworkOptimizationOptimizationMethod
    optimization_method: str
    optimization_T: float
    optimization_step: float
    target_Vmem: float

@strawberry.type
class BetseNetworkData:
    enable_mitochondria: bool
    optimization: BetseNetworkOptimization
    time_dilation_factor: float
    reset_microtubules: bool
    recalculate_fluid: bool

@strawberry.type
class BetseNetwork:
    id: str
    name: str
    generated_at: float
    generated_by: str
    forked_from: str | None
    data: BetseNetworkData
# endregion type BetseNetwork
# endregion BetseNetwork



# region BetseBiomolecule
# region input BetseBiomolecule
@strawberry.input
class InputBetseBiomoleculeGrowthAndDecay:
    production_rate: float
    decay_rate: float
    apply_to: list[str]
    modulator_function: str
    activators: list[str]
    # Km_activators: list[float]
    # n_activators: list[float]
    Km_activators: GraphqlAny
    n_activators: GraphqlAny
    inhibitors: list[str]
    # Km_inhibitors: list[float]
    # n_inhibitors: list[float]
    Km_inhibitors: GraphqlAny
    n_inhibitors: GraphqlAny

@strawberry.input
class InputBetseBiomoleculeIonChannelGating:
    channel_name: str
    ion_channel_target: list[str]
    target_Hill_coefficient: float
    target_Hill_exponent: float
    peak_channel_opening: float
    acts_extracellularly: bool
    activators: list[str]
    # Km_activators: list[float]
    # n_activators: list[float]
    Km_activators: GraphqlAny
    n_activators: GraphqlAny
    zone_activators: str
    inhibitors: list[str]
    # Km_inhibitors: list[float]
    # n_inhibitors: list[float]
    Km_inhibitors: GraphqlAny
    n_inhibitors: GraphqlAny
    zone_inhibitors: str

@strawberry.input
class InputBetseBiomoleculeActivePumping:
    turn_on: bool
    pump_to_cell: bool
    maximum_rate: float
    pump_Km: float
    uses_ATP: bool

@strawberry.input
class InputBetseBiomoleculeChangeAtBounds:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    concentration: float

@strawberry.input
class InputBetseBiomoleculePlotting:
    plot_2D: bool
    animate: bool
    autoscale_colorbar: bool
    max_val: float
    min_val: float

@strawberry.input
class InputBetseBiomoleculeData:
    Dm: float
    Do: float
    Dgj: float
    Mu_mem: float
    u_mtube: float
    z: float
    env_conc: float
    cell_conc: float
    mit_conc: float
    transmem: bool
    update_intracellular: bool
    initial_asymmetry: str
    TJ_permeable: bool
    GJ_impermeable: bool
    TJ_factor: float
    ignore_ECM: bool
    scale_factor: float
    use_time_dilation: bool
    growth_and_decay: InputBetseBiomoleculeGrowthAndDecay
    ion_channel_gating: InputBetseBiomoleculeIonChannelGating
    active_pumping: InputBetseBiomoleculeActivePumping
    change_at_bounds: InputBetseBiomoleculeChangeAtBounds
    plotting: InputBetseBiomoleculePlotting

@strawberry.input
class InputAddBetseBiomolecule:
    name: str
    data: InputBetseBiomoleculeData

@strawberry.input
class InputEditBetseBiomolecule:
    id: str
    name: str
    data: InputBetseBiomoleculeData
# endregion input BetseBiomolecule

# region type BetseBiomolecule
@strawberry.type
class BetseBiomoleculeGrowthAndDecay:
    production_rate: float
    decay_rate: float
    apply_to: list[str]
    modulator_function: str
    activators: list[str]
    # Km_activators: list[float]
    # n_activators: list[float]
    Km_activators: GraphqlAny
    n_activators: GraphqlAny
    inhibitors: list[str]
    # Km_inhibitors: list[float]
    # n_inhibitors: list[float]
    Km_inhibitors: GraphqlAny
    n_inhibitors: GraphqlAny

@strawberry.type
class BetseBiomoleculeIonChannelGating:
    channel_name: str
    ion_channel_target: list[str]
    target_Hill_coefficient: float
    target_Hill_exponent: float
    peak_channel_opening: float
    acts_extracellularly: bool
    activators: list[str]
    # Km_activators: list[float]
    # n_activators: list[float]
    Km_activators: GraphqlAny
    n_activators: GraphqlAny
    zone_activators: str
    inhibitors: list[str]
    # Km_inhibitors: list[float]
    # n_inhibitors: list[float]
    Km_inhibitors: GraphqlAny
    n_inhibitors: GraphqlAny
    zone_inhibitors: str

@strawberry.type
class BetseBiomoleculeActivePumping:
    turn_on: bool
    pump_to_cell: bool
    maximum_rate: float
    pump_Km: float
    uses_ATP: bool

@strawberry.type
class BetseBiomoleculeChangeAtBounds:
    event_happens: bool
    change_start: float
    change_finish: float
    change_rate: float
    concentration: float

@strawberry.type
class BetseBiomoleculePlotting:
    plot_2D: bool
    animate: bool
    autoscale_colorbar: bool
    max_val: bool
    min_val: bool

@strawberry.type
class BetseBiomoleculeData:
    Dm: float
    Do: float
    Dgj: float
    Mu_mem: float
    u_mtube: float
    z: float
    env_conc: float
    cell_conc: float
    mit_conc: float
    transmem: bool
    update_intracellular: bool
    initial_asymmetry: str
    TJ_permeable: bool
    GJ_impermeable: bool
    TJ_factor: float
    ignore_ECM: bool
    scale_factor: float
    use_time_dilation: bool
    growth_and_decay: BetseBiomoleculeGrowthAndDecay
    ion_channel_gating: BetseBiomoleculeIonChannelGating
    active_pumping: BetseBiomoleculeActivePumping
    change_at_bounds: BetseBiomoleculeChangeAtBounds
    plotting: BetseBiomoleculePlotting

@strawberry.type
class BetseBiomolecule:
    id: str
    name: str
    generated_at: float
    generated_by: str
    forked_from: str | None
    data: BetseBiomoleculeData
# endregion type BetseBiomolecule
# endregion BetseBiomolecule



# region BetseReaction
# region input BetseReaction
@strawberry.input
class InputBetseReactionData:
    reaction_zone: str
    reactants: list[str]
    reactant_multipliers: list[float]
    Km_reactants: list[float]
    products: list[str]
    product_multipliers: list[float]
    Km_products: list[float]
    max_rate: float
    # standard_free_energy: str
    # reaction_activators: list[str]
    # activator_Km: list[float]
    # activator_n: list[float]
    # activator_zone: list[str]
    # reaction_inhibitors: list[str]
    # inhibitor_Km: list[float]
    # inhibitor_n: list[float]
    # inhibitor_zone: list[str]
    standard_free_energy: GraphqlAny
    reaction_activators: GraphqlAny
    activator_Km: GraphqlAny
    activator_n: GraphqlAny
    activator_zone: GraphqlAny
    reaction_inhibitors: GraphqlAny
    inhibitor_Km: GraphqlAny
    inhibitor_n: GraphqlAny
    inhibitor_zone: GraphqlAny

@strawberry.input
class InputAddBetseReaction:
    name: str
    data: InputBetseReactionData

@strawberry.input
class InputEditBetseReaction:
    id: str
    name: str
    data: InputBetseReactionData
# endregion input BetseReaction

# region type BetseReaction
@strawberry.type
class BetseReactionData:
    reaction_zone: str
    reactants: list[str]
    reactant_multipliers: list[float]
    Km_reactants: list[float]
    products: list[str]
    product_multipliers: list[float]
    Km_products: list[float]
    max_rate: float
    # standard_free_energy: str
    # reaction_activators: list[str]
    # activator_Km: list[float]
    # activator_n: list[float]
    # activator_zone: list[str]
    # reaction_inhibitors: list[str]
    # inhibitor_Km: list[float]
    # inhibitor_n: list[float]
    # inhibitor_zone: list[str]
    standard_free_energy: GraphqlAny
    reaction_activators: GraphqlAny
    activator_Km: GraphqlAny
    activator_n: GraphqlAny
    activator_zone: GraphqlAny
    reaction_inhibitors: GraphqlAny
    inhibitor_Km: GraphqlAny
    inhibitor_n: GraphqlAny
    inhibitor_zone: GraphqlAny

@strawberry.type
class BetseReaction:
    id: str
    name: str
    generated_at: float
    generated_by: str
    forked_from: str | None
    data: BetseReactionData
# endregion type BetseReaction
# endregion BetseReaction



# region BetseChannel
# region input BetseChannel
@strawberry.input
class InputBetseChannelData:
    channel_class: str
    channel_type: str
    max_Dm: float
    apply_to: list[str]
    init_active: bool
    channel_activators: list[str]
    activator_Km: list[float]
    activator_n: list[float]
    activator_zone: list[str]
    activator_max: float
    channel_inhibitors: list[str]
    inhibitor_Km: list[float]
    inhibitor_n: list[float]
    inhibitor_zone: list[str]
    inhibitor_max: float

@strawberry.input
class InputAddBetseChannel:
    name: str
    data: InputBetseChannelData

@strawberry.input
class InputEditBetseChannel:
    id: str
    name: str
    data: InputBetseChannelData
# endregion input BetseChannel

# region type BetseChannel
@strawberry.type
class BetseChannelData:
    channel_class: str
    channel_type: str
    max_Dm: float
    apply_to: list[str]
    init_active: bool
    channel_activators: list[str]
    activator_Km: list[float]
    activator_n: list[float]
    activator_zone: list[str]
    activator_max: float
    channel_inhibitors: list[str]
    inhibitor_Km: list[float]
    inhibitor_n: list[float]
    inhibitor_zone: list[str]
    inhibitor_max: float

@strawberry.type
class BetseChannel:
    id: str
    name: str
    generated_at: float
    generated_by: str
    forked_from: str | None
    data: BetseChannelData
# endregion type BetseChannel
# endregion BetseChannel



# region BetseTransporter
# region input BetseTransporter
@strawberry.input
class InputBetseTransporterData:
    reaction_zone: str
    reactants: list[str]
    reactant_multipliers: list[float]
    Km_reactants: list[float]
    products: list[str]
    product_multipliers: list[float]
    Km_products: list[float]
    transfered_out_of_cell: list[str]
    transfered_into_cell: list[str]
    max_rate: float
    standard_free_energy: float
    apply_to: list[str]
    ignore_ECM: bool
    transporter_activators: list[str]
    activator_Km: str
    activator_n: str
    transporter_inhibitors: list[str]
    inhibitor_Km: str
    inhibitor_n: str

@strawberry.input
class InputAddBetseTransporter:
    name: str
    data: InputBetseTransporterData

@strawberry.input
class InputEditBetseTransporter:
    id: str
    name: str
    data: InputBetseTransporterData
# endregion input BetseTransporter

# region type BetseTransporter
@strawberry.type
class BetseTransporterData:
    reaction_zone: str
    reactants: list[str]
    reactant_multipliers: list[float]
    Km_reactants: list[float]
    products: list[str]
    product_multipliers: list[float]
    Km_products: list[float]
    transfered_out_of_cell: list[str]
    transfered_into_cell: list[str]
    max_rate: float
    standard_free_energy: float
    apply_to: list[str]
    ignore_ECM: bool
    transporter_activators: list[str]
    activator_Km: str
    activator_n: str
    transporter_inhibitors: list[str]
    inhibitor_Km: str
    inhibitor_n: str

@strawberry.type
class BetseTransporter:
    id: str
    name: str
    generated_at: float
    generated_by: str
    forked_from: str | None
    data: BetseTransporterData
# endregion type BetseTransporter
# endregion BetseTransporter



# region BetseModulator
# region input BetseModulator
@strawberry.input
class InputBetseModulatorData:
    target: str
    max_effect: float
    target_ion: str
    activators: list[str]
    activator_Km: list[float]
    activator_n: list[float]
    activator_zone: list[str]
    inhibitors: list[str]
    inhibitor_Km: list[float]
    inhibitor_n: list[float]
    inhibitor_zone: list[str]

@strawberry.input
class InputAddBetseModulator:
    name: str
    data: InputBetseModulatorData

@strawberry.input
class InputEditBetseModulator:
    id: str
    name: str
    data: InputBetseModulatorData
# endregion input BetseModulator

# region type BetseModulator
@strawberry.type
class BetseModulatorData:
    target: str
    max_effect: float
    target_ion: str
    activators: list[str]
    activator_Km: list[float]
    activator_n: list[float]
    activator_zone: list[str]
    inhibitors: list[str]
    inhibitor_Km: list[float]
    inhibitor_n: list[float]
    inhibitor_zone: list[str]

@strawberry.type
class BetseModulator:
    id: str
    name: str
    generated_at: float
    generated_by: str
    forked_from: str | None
    data: BetseModulatorData
# endregion type BetseModulator
# endregion BetseModulator



@strawberry.type
class Betse:
    simulations: list[BetseSimulation]
    worlds: list[BetseWorld]
    tissues: list[BetseTissue]
    globalInterventions: list[BetseGlobalIntervention]
    targetedInterventions: list[BetseTargetedIntervention]
    functions: list[BetseFunction]
    networks: list[BetseNetwork]
    biomolecules: list[BetseBiomolecule]
    reactions: list[BetseReaction]
    channels: list[BetseChannel]
    transporters: list[BetseTransporter]
    modulators: list[BetseModulator]
