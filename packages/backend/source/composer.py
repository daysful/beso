import copy
import json
import yaml

from source.utilities.general import generate_id

from source.database.collections import Collections
from source.database.main import get

from source.simulation import betse_copy_data



def parse(
    entity: any,
):
    if not entity:
        return

    data = copy.deepcopy(entity)
    data['data'] = json.loads(data['data'])
    return data


simulation_entities = [
    {
        "type": "tissues",
        "collection": Collections.betseTissues,
    },
    {
        "type": "global_intervention",
        "collection": Collections.betseGlobalInterventions,
    },
    {
        "type": "targeted_intervention",
        "collection": Collections.betseTargetedInterventions,
    },
    {
        "type": "modulator_function",
        "collection": Collections.betseFunctions,
    },
    {
        "type": "network",
        "collection": Collections.betseNetworks,
    },
    {
        "type": "biomolecules",
        "collection": Collections.betseBiomolecules,
    },
    {
        "type": "reactions",
        "collection": Collections.betseReactions,
    },
    {
        "type": "channels",
        "collection": Collections.betseChannels,
    },
    {
        "type": "transporters",
        "collection": Collections.betseTransporters,
    },
    {
        "type": "modulators",
        "collection": Collections.betseModulators,
    },
]


fields_mapping = {
    'time_step': 'time step',
    'total_time': 'total time',
    'sampling_rate': 'sampling rate',

    'comp_grid_size': 'comp grid size',
    'simulate_extracellular_spaces': 'simulate extracellular spaces',
    'ion_profile': 'ion profile',
    'customized_ion_profile': 'customized ion profile',
    'extracellular_Na_concentration': 'extracellular Na+ concentration',
    'extracellular_K_concentration': 'extracellular K+ concentration',
    'extracellular_Cl_concentration': 'extracellular Cl- concentration',
    'extracellular_Ca2_concentration': 'extracellular Ca2+ concentration',
    'extracellular_protein_concentration': 'extracellular protein- concentration',
    'cytosolic_Na_concentration': 'cytosolic Na+ concentration',
    'cytosolic_K_concentration': 'cytosolic K+ concentration',
    'cytosolic_Cl_concentration': 'cytosolic Cl- concentration',
    'cytosolic_Ca2_concentration': 'cytosolic Ca2+ concentration',
    'cytosolic_protein_concentration': 'cytosolic protein- concentration',

    'world_size': 'world size',
    'cell_radius': 'cell radius',
    'cell_height': 'cell height',
    'cell_spacing': 'cell spacing',
    'simulate_single_cell': 'simulate single cell',
    'lattice_type': 'lattice type',
    'lattice_disorder': 'lattice disorder',
    'mesh_refinement': 'mesh refinement',
    'refine_mesh': 'refine mesh',
    'maximum_steps': 'maximum steps',
    'convergence_threshold': 'convergence threshold',
    'import_from_svg': 'import from svg',
    'svg_override': 'svg override',
    'cells_from_svg': 'cells from svg',
    'svg_size': 'svg size',
    'alpha_shape': 'alpha shape',
    'use_centers': 'use centers',

    'env_boundary_concentrations': 'env boundary concentrations',
    'temperature': 'temperature',
    'deformation': 'deformation',
    'turn_on': 'turn on',
    'galvanotropism': 'galvanotropism',
    'viscous_damping': 'viscous damping',
    'fixed_cluster_boundary': 'fixed cluster boundary',
    'young_modulus': 'young modulus',
    'pressures': 'pressures',
    'include_osmotic_pressure': 'include osmotic pressure',
    'membrane_water_conductivity': 'membrane water conductivity',
    'noise': 'noise',
    'static_noise_level': 'static noise level',
    'dynamic_noise': 'dynamic noise',
    'dynamic_noise_level': 'dynamic noise level',
    'gap_junctions': 'gap junctions',
    'gap_junction_surface_area': 'gap junction surface area',
    'voltage_sensitive_gj': 'voltage sensitive gj',
    'gj_voltage_threshold': 'gj voltage threshold',
    'gj_voltage_window': 'gj voltage window',
    'gj_minimum': 'gj minimum',
    'tight_junction_scaling': 'tight junction scaling',
    'tight_junction_relative_diffusion': 'tight junction relative diffusion',
    'Na': 'Na',
    'K': 'K',
    'Cl': 'Cl',
    'Ca': 'Ca',
    'M': 'M',
    'P': 'P',
    'adherens_junction_scaling': 'adherens junction scaling',
    'use_Goldman_calculator': 'use Goldman calculator',

    'Do_Na': 'Do_Na',
    'Do_K': 'Do_K',
    'Do_Cl': 'Do_Cl',
    'Do_Ca': 'Do_Ca',
    'Do_M': 'Do_M',
    'Do_P': 'Do_P',
    'alpha_NaK': 'alpha_NaK',
    'alpha_Ca': 'alpha_Ca',
    'substances_affect_Vmem': 'substances affect Vmem',
    'environment_volume_multiplier': 'environment volume multiplier',
    'membrane_capacitance': 'membrane capacitance',
    'cell_polarizability': 'cell polarizability',
    'dielectric_constant': 'dielectric constant',
    'fast_update_ecm': 'fast update ecm',
    'sharpness_env': 'sharpness env',
    'sharpness_cell': 'sharpness cell',
    'true_cell_size': 'true cell size',
}


def map_to_fields(
    data: dict,
):
    mapped = {}

    for item in data:
        mapped_field = fields_mapping.get(item)

        if isinstance(data[item], dict):
            item_data = map_to_fields(data[item])
        else:
            item_data = data[item]

        if mapped_field:
            mapped[mapped_field] = item_data
        else:
            mapped[item] = item_data

    return mapped


def compose_simulation(
    simulation_id: str,
):
    simulation = parse(get(Collections.betseSimulations, simulation_id))
    if not simulation:
        return
    simulation_data = simulation['data']['data']

    world = parse(get(Collections.betseWorlds, simulation_data['world']))
    if not world:
        return
    world_data = world['data']['data']

    entities = {}

    for entity in simulation_entities:
        type = entity['type']
        entities[type] = []
        for id in simulation_data[type]:
            data = get(entity['collection'], id)
            entities[type].append(
                parse(data),
            )

    simulation_run_id = generate_id()
    simulation_path = betse_copy_data(id)


    sim_config = {
        # SOLVER SETTINGS
        'solver options': map_to_fields(simulation_data['solver_options']),

        # FILE HANDLING
        'init file saving': {
            'directory': 'INITS',
            'worldfile': 'world_1.betse.gz',
            'file': 'init_1.betse.gz',
        },
        'sim file saving': {
            'directory': 'SIMS',
            'file': 'sim_1.betse.gz',
        },
        'results file saving': {
            'init directory': 'RESULTS/init_1',
            'sim directory': 'RESULTS/sim_1',
        },

        # INITIALIZATION SETTINGS
        'automatically run initialization': True,
        'init time settings': map_to_fields(simulation_data['init_time_settings']),

        # SIMULATION SETTINGS
        'sim time settings': map_to_fields(simulation_data['sim_time_settings']),

        # GENERAL OPTIONS
        'general options': map_to_fields(simulation_data['general_options']),

        # WORLD OPTIONS
        'world options': map_to_fields(world_data),

        # TISSUE PROFILE DESIGNATION
        'tissue profile definition': {},

        # TARGETED INTERVENTIONS

        # MODULATOR FUNCTION PROPERTIES

        # GLOBAL INTERVENTIONS

        # GENERAL NETWORK

        # GENE REGULATORY NETWORK

        # VARIABLE SETTINGS
        'variable settings': map_to_fields(simulation_data['variable_settings']),

        # RESULTS
        'results options': map_to_fields(simulation_data['results_options']),

        # INTERNAL USE ONLY
        'internal parameters': map_to_fields(simulation_data['internal_parameters']),

        'version': simulation_data['version'],
    }

    sim_config_yaml = yaml.dump(sim_config, sort_keys=False)

    f = open(f'{simulation_path}/sim_config.yaml', 'w')
    f.write(sim_config_yaml)
    f.close()
