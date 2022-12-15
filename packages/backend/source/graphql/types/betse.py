import strawberry



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
class Betse:
    # simulations: list[BetseSimulations]
    worlds: list[BetseWorld]
    # tissues: list[BetseTissues]
    # interventions: list[BetseInterventions]
    # functions: list[BetseFunctions]
    # networks: list[BetseNetworks]
    # biomolecules: list[BetseBiomolecules]
    # reactions: list[BetseReactions]
    # channels: list[BetseChannels]
    # transporters: list[BetseTransporters]
    # modulators: list[BetseModulators]
