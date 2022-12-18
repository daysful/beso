// #region imports
    // #region libraries
    import gql from 'graphql-tag';
    // #endregion libraries
// #endregion imports



// #region module
export const BETSE_SIMULATION_FRAGMENT = gql`
    fragment BetseSimulationFields on BetseSimulation {
        id
        name
        init_time_settings {
            time_step
            total_time
            sampling_rate
        }
        sim_time_settings {
            time_step
            total_time
            sampling_rate
        }
        general_options {
            comp_grid_size
            simulate_extracellular_spaces
            ion_profile
            customized_ion_profile {
                extracellular_Na_concentration
                extracellular_K_concentration
                extracellular_Cl_concentration
                extracellular_Ca2_concentration
                extracellular_protein_concentration
                cytosolic_Na_concentration
                cytosolic_K_concentration
                cytosolic_Cl_concentration
                cytosolic_Ca2_concentration
                cytosolic_protein_concentration
            }
        }
        variable_settings {
            env_boundary_concentrations
            temperature
            deformation {
                turn_on
                galvanotropism
                viscous_damping
                fixed_cluster_boundary
                young_modulus
            }
            pressures {
                include_electrostatic_pressure
                include_osmotic_pressure
                membrane_water_conductivity
            }
            noise {
                static_noise_level
                dynamic_noise
                dynamic_noise_level
            }
            gap_junctions {
                gap_junction_surface_area
                voltage_sensitive_gj
                gj_voltage_threshold
                gj_voltage_window
                gj_minimum
            }
            tight_junction_scaling
            tight_junction_relative_diffusion {
                Na
                K
                Cl
                Ca
                M
                P
            }
            adherens_junction_scaling
            use_Goldman_calculator
        }
        world
        tissues
        interventions
        modulators
        networks
        biomolecules
        reactions
        channels
    }
`;


export const BETSE_WORLD_FRAGMENT = gql`
    fragment BetseWorldFields on BetseWorld {
        id
        name
        worldSize
        cellRadius
        cellHeight
        cellSpacing
        simulateSingleCell
        latticeType
        latticeDisorder
        meshRefinement {
            refineMesh
            maximumSteps
            convergenceThreshold
        }
        importFromSvg {
            svgOverride
            cellsFromSvg
            svgSize
        }
        alphaShape
        useCenters
    }
`;


export const BETSE_TISSUE_FRAGMENT = gql`
    fragment BetseTissueFields on BetseTissue {
        id
        name
    }
`;
// #endregion module
