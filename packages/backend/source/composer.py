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

    'name': 'name',
    'insular': 'insular',
    'diffusion_constants': 'diffusion constants',
    'Dm_Na': 'Dm_Na',
    'Dm_K': 'Dm_K',
    'Dm_Cl': 'Dm_Cl',
    'Dm_Ca': 'Dm_Ca',
    'Dm_M': 'Dm_M',
    'Dm_P': 'Dm_P',
    'cell_targets': 'cell targets',
    'type': 'type',
    'color': 'color',
    'image': 'image',
    'indices': 'indices',
    'percent': 'percent',

    'change_Na_mem': 'change Na mem',
    'event_happens': 'event happens',
    'change_start': 'change start',
    'change_finish': 'change finish',
    'change_rate': 'change rate',
    'multiplier': 'multiplier',
    'modulator_function': 'modulator function',
    'apply_to': 'apply to',
    'change_K_mem': 'change K mem',
    'change_Cl_mem': 'change Cl mem',
    'change_Ca_mem': 'change Ca mem',
    'apply_pressure': 'apply pressure',
    'apply_external_voltage': 'apply external voltage',
    'peak_voltage': 'peak voltage',
    'positive_voltage_boundary': 'positive voltage boundary',
    'negative_voltage_boundary': 'negative voltage boundary',
    'break_ecm_junctions': 'break ecm junctions',
    'cutting_event': 'cutting event',
    'break_TJ': 'break TJ',
    'wound_TJ': 'wound TJ',
    'change_K_env': 'change K env',
    'change_Cl_env': 'change Cl env',
    'change_Na_env': 'change Na env',
    'change_temperature': 'change temperature',
    'block_gap_junctions': 'block gap junctions',
    'random_fraction': 'random fraction',
    'block_NaKATP_pump': 'block NaKATP pump',

    'gradient_x': 'gradient_x',
    'slope': 'slope',
    'x_offset': 'x-offset',
    'z_offset': 'z-offset',
    'exponent': 'exponent',
    'gradient_y': 'gradient_y',
    'gradient_r': 'gradient_r',
    'periodic': 'periodic',
    'frequency': 'frequency',
    'phase': 'phase',
    'f_sweep': 'f_sweep',
    'start_frequency': 'start frequency',
    'end_frequency': 'end frequency',
    'gradient_bitmap': 'gradient_bitmap',
    'file': 'file',
    'single_cell': 'single_cell',

    'name': 'name',
    'Dm': 'Dm',
    'Do': 'Do',
    'Dgj': 'Dgj',
    'z': 'z',
    'env_conc': 'env conc',
    'cell_conc': 'cell conc',
    'scale_factor': 'scale factor',
    'update_intracellular': 'update intracellular',
    'use_time_dilation': 'use time dilation',
    'transmem': 'transmem',
    'initial_asymmetry': 'initial asymmetry',
    'TJ_permeable': 'TJ permeable',
    'GJ_impermeable': 'GJ impermeable',
    'TJ_factor': 'TJ factor',
    'growth_and_decay': 'growth and decay',
    'production_rate': 'production rate',
    'decay_rate': 'decay rate',
    'apply_to': 'apply to',
    'modulator_function': 'modulator function',
    'plotting': 'plotting',
    'plot_2D': 'plot 2D',
    'animate': 'animate',
    'autoscale_colorbar': 'autoscale colorbar',
    'max_val': 'max val',
    'min_val': 'min val',

    'channel_class': 'channel class',
    'channel_type': 'channel type',
    'max_Dm': 'max Dm',
    'apply_to': 'apply to',
    'init_active': 'init active',
    'channel_inhibitors': 'channel inhibitors',
    'inhibitor_Km': 'inhibitor Km',
    'inhibitor_n': 'inhibitor n',
    'inhibitor_zone': 'inhibitor zone',

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
        entity_type = entity['type']
        simulation_entity = simulation_data[entity_type]

        if type(simulation_entity) == str:
            data = parse(get(entity['collection'], simulation_entity))
            if not data:
                return
            entity_data = data['data']['data']
            entities[entity_type] = entity_data
        else:
            entities[entity_type] = []
            for id in simulation_entity:
                data = parse(get(entity['collection'], id))
                if not data:
                    return
                entity_data = data['data']['data']
                entities[entity_type].append(
                    entity_data,
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
        'tissue profile definition': {
            'profiles enabled': True,
            'tissue': {
                'default': {
                    'name': 'Base',
                    'image': '',
                    'diffusion constants': {
                        'Dm_Na': 2.0e-18,
                        'Dm_K':  1.0e-18,
                        'Dm_Cl': 1.0e-18,
                        'Dm_Ca': 1.0e-18,
                        'Dm_M':  1.0e-18,
                        'Dm_P':  0.0,
                    },
                },
                'profiles': [
                    map_to_fields(tissue) for tissue in entities['tissues']
                ],
            },
        },

        # TARGETED INTERVENTIONS
        **map_to_fields(entities['targeted_intervention']),

        # MODULATOR FUNCTION PROPERTIES
        'modulator function properties': map_to_fields(entities['modulator_function']),

        # GLOBAL INTERVENTIONS
        **map_to_fields(entities['global_intervention']),

        # GENERAL NETWORK
        'general network': {
            'implement network': True,
            'expression data file': '',
            'biomolecules': [
                map_to_fields(biomolecule) for biomolecule in entities['biomolecules']
            ],
            'reactions': [],
            'transporters': [],
            'channels': [
                map_to_fields(channel) for channel in entities['channels']
            ],
            'modulators': [],
        },

        # GENE REGULATORY NETWORK
        'gene regulatory network settings': {
            'gene regulatory network simulated': False,
            'gene regulatory network config': '',
            'sim-grn settings': {
                'run as sim': False,
                'run network on': 'seed',
                'save to directory': 'RESULTS/GRN',
                'save to file': 'GRN_1.betse.gz',
                'load from': '',
                'time step': 0.1,
                'total time': 1.8e2,
                'sampling rate': 1.8e1,
            },
        },

        # VARIABLE SETTINGS
        'variable settings': map_to_fields(simulation_data['variable_settings']),

        # RESULTS
        'results options': map_to_fields(simulation_data['results_options']),

        # INTERNAL USE ONLY
        'internal parameters': map_to_fields(simulation_data['internal_parameters']),

        'version': simulation_data['version'],
    }

    sim_config_yaml = yaml.dump(
        sim_config,
        default_flow_style=False,
        sort_keys=False,
    )

    f = open(f'{simulation_path}/sim_config.yaml', 'w')
    f.write(sim_config_yaml)
    f.close()
