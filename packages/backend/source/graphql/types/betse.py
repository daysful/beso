import strawberry
from strawberry.file_uploads import Upload



@strawberry.type
class BetseSimulation:
    id: str
    name: str



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
    cell_targets: BetseTissueDiffusionConstants



@strawberry.type
class BetseIntervention:
    id: str
    name: str



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



@strawberry.type
class BetseNetwork:
    id: str
    name: str



@strawberry.type
class BetseBiomolecule:
    id: str
    name: str



@strawberry.type
class BetseReaction:
    id: str
    name: str



@strawberry.type
class BetseChannel:
    id: str
    name: str



@strawberry.type
class BetseTransporter:
    id: str
    name: str



@strawberry.type
class BetseModulator:
    id: str
    name: str



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
