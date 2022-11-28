import strawberry
from strawberry.asgi import GraphQL



@strawberry.type
class User:
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
class Query:
    @strawberry.field
    def user(self) -> User:
        return User(
            name='user',
        )

    @strawberry.field
    def betse_world(self, id: str) -> BetseWorld:
        return default_betse_world


@strawberry.type
class Mutation:
    @strawberry.mutation
    def add_betse_world(self, name: str) -> BetseWorld:
        betse_world = default_betse_world.__dict__
        betse_world['name'] = name

        return BetseWorld(**betse_world)


schema = strawberry.Schema(
    query=Query,
    mutation=Mutation,
)


graphql_app = GraphQL(schema)
