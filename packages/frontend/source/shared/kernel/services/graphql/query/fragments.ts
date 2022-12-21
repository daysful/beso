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
        generated_at
        data {
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
                tight_junction_elative_diffusion {
                    Na
                    K
                    Cl
                    Ca
                    M
                    P
                }
                adherens_junction_scaling
                use_goldman_calculator
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
    }
`;


export const BETSE_WORLD_FRAGMENT = gql`
    fragment BetseWorldFields on BetseWorld {
        id
        name
        generated_at
        data {
            world_size
            cell_radius
            cell_height
            cell_spacing
            simulate_single_cell
            lattice_type
            lattice_disorder
            mesh_refinement {
                refine_mesh
                maximum_steps
                convergence_threshold
            }
            import_from_svg {
                svg_override
                cells_from_svg
                svg_size
            }
            alpha_shape
            use_centers
        }
    }
`;


export const BETSE_TISSUE_FRAGMENT = gql`
    fragment BetseTissueFields on BetseTissue {
        id
        name
        generated_at
        data {
            insular
            diffusion_constants {
                Dm_Na
                Dm_K
                Dm_Cl
                Dm_Ca
                Dm_M
                Dm_P
            }
            cell_targets {
                type
                color
                image
                indices
                percent
            }
        }
    }
`;


export const BETSE_INTERVENTION_FRAGMENT = gql`
    fragment BetseInterventionFields on BetseIntervention {
        id
        name
        generated_at
    }
`;


export const BETSE_FUNCTION_FRAGMENT = gql`
    fragment BetseFunctionFields on BetseFunction {
        id
        name
        generated_at
        data {
            gradient_x {
                slope
                x_offset
                z_offset
                exponent
            }
            gradient_y {
                slope
                x_offset
                z_offset
                exponent
            }
            gradient_r {
                slope
                x_offset
                z_offset
                exponent
            }
            periodic {
                frequency
                phase
            }
            f_sweep {
                start_frequency
                end_frequency
            }
            gradient_bitmap {
                file
                z_offset
            }
            single_cell {
                z_offset
            }
        }
    }
`;


export const BETSE_NETWORK_FRAGMENT = gql`
    fragment BetseNetworkFields on BetseNetwork {
        id
        name
        generated_at
        data {
            enable_mitochondria
            optimization {
                optimize_network
                optimization_steps
                optimization_method
                optimization_T
                optimization_step
                target_Vmem
            }
            time_dilation_factor
            reset_microtubules
            recalculate_fluid
        }
    }
`;


export const BETSE_BIOMOLECULE_FRAGMENT = gql`
    fragment BetseBiomoleculeFields on BetseBiomolecule {
        id
        name
        generated_at
        data {
            Dm
            Do
            Dgj
            Mu_mem
            u_mtube
            z
            env_conc
            cell_conc
            mit_conc
            transmem
            update_intracellular
            initial_asymmetry
            TJ_permeable
            GJ_impermeable
            TJ_factor
            ignore_ECM
            scale_factor
            use_time_dilation
            growth_and_decay {
                production_rate
                decay_rate
                apply_to
                modulator_function
                activators
                Km_activators
                n_activators
                inhibitors
                Km_inhibitors
                n_inhibitors
            }
            ion_channel_gating {
                channel_name
                ion_channel_target
                target_Hill_coefficient
                target_Hill_exponent
                peak_channel_opening
                acts_extracellularly
                activators
                Km_activators
                n_activators
                zone_activators
                inhibitors
                Km_inhibitors
                n_inhibitors
                zone_inhibitors
            }
            active_pumping {
                turn_on
                pump_to_cell
                maximum_rate
                pump_Km
                uses_ATP
            }
            change_at_bounds {
                event_happens
                change_start
                change_finish
                change_rate
                concentration
            }
            plotting {
                plot_2D
                animate
                autoscale_colorbar
                max_val
                min_val
            }
        }
    }
`;


export const BETSE_REACTION_FRAGMENT = gql`
    fragment BetseReactionFields on BetseReaction {
        id
        name
        generated_at
        data {
            reaction_zone
            reactant_multipliers
            Km_reactants
            products
            product_multipliers
            Km_products
            max_rate
            standard_free_energy
            reaction_activators
            activator_Km
            activator_n
            activator_zone
            reaction_inhibitors
            inhibitor_Km
            inhibitor_n
            inhibitor_zone
        }
    }
`;


export const BETSE_CHANNEL_FRAGMENT = gql`
    fragment BetseChannelFields on BetseChannel {
        id
        name
        generated_at
        data {
            channel_class
            channel_type
            max_Dm
            apply_to
            init_active
            channel_activators
            activator_Km
            activator_n
            activator_zone
            activator_max
            channel_inhibitors
            inhibitor_Km
            inhibitor_n
            inhibitor_zone
            inhibitor_max
        }
    }
`;


export const BETSE_TRANSPORTER_FRAGMENT = gql`
    fragment BetseTransporterFields on BetseTransporter {
        id
        name
        generated_at
        data {
            reaction_zone
            reactants
            reactant_multipliers
            Km_reactants
            products
            product_multipliers
            Km_products
            transfered_out_of_cell
            transfered_into_cell
            max_rate
            standard_free_energy
            apply_to
            ignore_ECM
            transporter_activators
            activator_Km
            activator_n
            transporter_inhibitors
            inhibitor_Km
            inhibitor_n
        }
    }
`;


export const BETSE_MODULATOR_FRAGMENT = gql`
    fragment BetseModulatorFields on BetseModulator {
        id
        name
        generated_at
        data {
            target
            max_effect
            target_ion
            activators
            activator_Km
            activator_n
            activator_zone
            inhibitors
            inhibitor_Km
            inhibitor_n
            inhibitor_zone
        }
    }
`;
// #endregion module
