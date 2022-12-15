from enum import Enum

import strawberry
from strawberry.file_uploads import Upload



# region BetseSimulation
# region input BetseSimulation
# endregion input BetseSimulation

# region type BetseSimulation
@strawberry.type
class BetseSimulation:
    id: str
    name: str
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

default_betse_world = BetseWorld(
    id='one',
    name='one',
    world_size=150e-6,
    cell_radius=5.0e-6,
    cell_height=10.0e-6,
    cell_spacing=26.0e-9,
    simulate_single_cell=False,
    lattice_type='hex',
    lattice_disorder=0.4,
    mesh_refinement=BetseWorldMeshRefinement(
        refine_mesh=True,
        maximum_steps=10,
        convergence_threshold=1.5,
    ),
    import_from_svg=BetseWorldImportFromSVG(
        svg_override=False,
        cells_from_svg='geo/root/root_cells.svg',
        svg_size=500,
    ),
    alpha_shape=0.01,
    use_centers=False,
)

# {
#   "input": {
#     "name": "one",
#   	"worldSize": 150e-6,
#     "cellRadius": 5.0e-6,
#     "cellHeight": 10.0e-6,
#     "cellSpacing": 26.0e-9,
#     "simulateSingleCell": false,
#     "latticeType": "hex",
#     "latticeDisorder": 0.4,
#     "meshRefinement": {
#         "refineMesh": true,
#         "maximumSteps": 10,
#         "convergenceThreshold": 1.5
#     },
#     "importFromSvg": {
#         "svgOverride": false,
#         "cellsFromSvg": "geo/root/root_cells.svg",
#         "svgSize": 500
#     },
#     "alphaShape": 0.01,
#     "useCenters": false
#   }
# }
# endregion type BetseWorld
# endregion BetseWorld



# region BetseTissue
# region input BetseTissue
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
    insular: bool
    diffusion_constants: BetseTissueDiffusionConstants
    cell_targets: BetseTissueCellTargets
# endregion type BetseTissue
# endregion BetseTissue



# region BetseIntervention
# region input BetseIntervention
@strawberry.input
class InputBetseIntervention:
    id: str
    name: str
    type: str # 'targeted' | 'global'
    data: str
# endregion input BetseIntervention

# region type BetseIntervention
@strawberry.type
class BetseIntervention:
    id: str
    name: str
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
    id: str
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
    id: str
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
    Km_activators: list[float]
    n_activators: list[float]
    inhibitors: list[str]
    Km_inhibitors: list[float]
    n_inhibitors: list[float]

@strawberry.input
class InputBetseBiomoleculeIonChannelGating:
    channel_name: str
    ion_channel_target: list[str]
    target_Hill_coefficient: float
    target_Hill_exponent: float
    peak_channel_opening: float
    acts_extracellularly: bool
    activators: list[str]
    Km_activators: list[float]
    n_activators: list[float]
    zone_activators: str
    inhibitors: list[str]
    Km_inhibitors: list[float]
    n_inhibitors: list[float]
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
    max_val: bool
    min_val: bool

@strawberry.input
class InputBetseBiomolecule:
    id: str
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
    Km_activators: list[float]
    n_activators: list[float]
    inhibitors: list[str]
    Km_inhibitors: list[float]
    n_inhibitors: list[float]

@strawberry.type
class BetseBiomoleculeIonChannelGating:
    channel_name: str
    ion_channel_target: list[str]
    target_Hill_coefficient: float
    target_Hill_exponent: float
    peak_channel_opening: float
    acts_extracellularly: bool
    activators: list[str]
    Km_activators: list[float]
    n_activators: list[float]
    zone_activators: str
    inhibitors: list[str]
    Km_inhibitors: list[float]
    n_inhibitors: list[float]
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
    id: str
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
    id: str
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
    id: str
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
    id: str
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
