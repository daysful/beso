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
class InputBetseSimulation:
    name: str
    init_time_settings: InputBetseSimulationInitTimeSettings
    sim_time_settings: InputBetseSimulationSimTimeSettings
    general_options: InputBetseSimulationGeneralOptions
    variable_settings: InputBetseSimulationVariableSettings
    world: str
    tissues: list[str]
    interventions: list[str]
    modulators: list[str]
    networks: list[str]
    biomolecules: list[str]
    reactions: list[str]
    channels: list[str]
# endregion input BetseSimulation

# region type BetseSimulation
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
class BetseSimulation:
    id: str
    name: str
    generated_at: float
    init_time_settings: BetseSimulationInitTimeSettings
    sim_time_settings: BetseSimulationSimTimeSettings
    general_options: BetseSimulationGeneralOptions
    variable_settings: BetseSimulationVariableSettings
    world: str
    tissues: list[str]
    interventions: list[str]
    modulators: list[str]
    networks: list[str]
    biomolecules: list[str]
    reactions: list[str]
    channels: list[str]
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
class InputBetseWorld:
    name: str
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
class BetseWorld:
    id: str
    name: str
    generated_at: float
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
class InputBetseTissue:
    name: str
    insular: bool
    diffusion_constants: InputBetseTissueDiffusionConstants
    cell_targets: InputBetseTissueCellTargets
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
class BetseTissue:
    id: str
    name: str
    generated_at: float
    insular: bool
    diffusion_constants: BetseTissueDiffusionConstants
    cell_targets: BetseTissueCellTargets
# endregion type BetseTissue
# endregion BetseTissue



# region BetseIntervention
# region input BetseIntervention
@strawberry.input
class InputBetseIntervention:
    name: str
    type: str # 'targeted' | 'global'
    data: str
# endregion input BetseIntervention

# region type BetseIntervention
@strawberry.type
class BetseIntervention:
    id: str
    name: str
    generated_at: float
    type: str # 'targeted' | 'global'
    data: str
# endregion type BetseIntervention
# endregion BetseIntervention



# region BetseFunction
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
class InputBetseFunction:
    name: str
    gradient_x: InputBetseFunctionGradientX
    gradient_y: InputBetseFunctionGradientY
    gradient_r: InputBetseFunctionGradientR
    periodic: InputBetseFunctionPeriodic
    f_sweep: InputBetseFunctionFSweep
    gradient_bitmap: InputBetseFunctionGradientBitmap
    single_cell: InputBetseFunctionSingleCell
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
class BetseFunction:
    id: str
    name: str
    generated_at: float
    gradient_x: BetseFunctionGradientX
    gradient_y: BetseFunctionGradientY
    gradient_r: BetseFunctionGradientR
    periodic: BetseFunctionPeriodic
    f_sweep: BetseFunctionFSweep
    gradient_bitmap: BetseFunctionGradientBitmap
    single_cell: BetseFunctionSingleCell
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
class InputBetseNetwork:
    name: str
    enable_mitochondria: bool
    optimization: InputBetseNetworkOptimization
    time_dilation_factor: float
    reset_microtubules: bool
    recalculate_fluid: bool
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
class BetseNetwork:
    id: str
    name: str
    generated_at: float
    enable_mitochondria: bool
    optimization: BetseNetworkOptimization
    time_dilation_factor: float
    reset_microtubules: bool
    recalculate_fluid: bool
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
class InputBetseBiomolecule:
    name: str
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
class BetseBiomolecule:
    id: str
    name: str
    generated_at: float
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
# endregion type BetseBiomolecule
# endregion BetseBiomolecule



# region BetseReaction
# region input BetseReaction
@strawberry.input
class InputBetseReaction:
    name: str
    reaction_zone: str
    reactant_multipliers: list[float]
    Km_reactants: list[float]
    products: list[str]
    product_multipliers: list[float]
    Km_products: list[float]
    max_rate: float
    standard_free_energy: str
    reaction_activators: list[str]
    activator_Km: list[float]
    activator_n: list[float]
    activator_zone: list[str]
    reaction_inhibitors: list[str]
    inhibitor_Km: list[float]
    inhibitor_n: list[float]
    inhibitor_zone: list[str]
# endregion input BetseReaction

# region type BetseReaction
@strawberry.type
class BetseReaction:
    id: str
    name: str
    generated_at: float
    reaction_zone: str
    reactant_multipliers: list[float]
    Km_reactants: list[float]
    products: list[str]
    product_multipliers: list[float]
    Km_products: list[float]
    max_rate: float
    standard_free_energy: str
    reaction_activators: list[str]
    activator_Km: list[float]
    activator_n: list[float]
    activator_zone: list[str]
    reaction_inhibitors: list[str]
    inhibitor_Km: list[float]
    inhibitor_n: list[float]
    inhibitor_zone: list[str]
# endregion type BetseReaction
# endregion BetseReaction



# region BetseChannel
# region input BetseChannel
@strawberry.input
class InputBetseChannel:
    name: str
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
# endregion input BetseChannel

# region type BetseChannel
@strawberry.type
class BetseChannel:
    id: str
    name: str
    generated_at: float
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
# endregion type BetseChannel
# endregion BetseChannel



# region BetseTransporter
# region input BetseTransporter
@strawberry.input
class InputBetseTransporter:
    name: str
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
# endregion input BetseTransporter

# region type BetseTransporter
@strawberry.type
class BetseTransporter:
    id: str
    name: str
    generated_at: float
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
# endregion type BetseTransporter
# endregion BetseTransporter



# region BetseModulator
# region input BetseModulator
@strawberry.input
class InputBetseModulator:
    name: str
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
# endregion input BetseModulator

# region type BetseModulator
@strawberry.type
class BetseModulator:
    id: str
    name: str
    generated_at: float
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
# endregion type BetseModulator
# endregion BetseModulator



@strawberry.type
class Betse:
    simulations: list[BetseSimulation]
    worlds: list[BetseWorld]
    tissues: list[BetseTissue]
    interventions: list[BetseIntervention]
    functions: list[BetseFunction]
    networks: list[BetseNetwork]
    biomolecules: list[BetseBiomolecule]
    reactions: list[BetseReaction]
    channels: list[BetseChannel]
    transporters: list[BetseTransporter]
    modulators: list[BetseModulator]
