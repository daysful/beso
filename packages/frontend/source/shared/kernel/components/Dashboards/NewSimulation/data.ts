// #region imports
    // #region libraries
    import {
        NewEntityField,
    } from '~kernel-components/NewEntityRenderer/data';
    // #endregion libraries
// #endregion imports



// #region module
export const fields: NewEntityField[] = [
    {
        label: 'solver type',
        type: 'string',
        state: 'solverType',
        value: 'full',
        required: true,
        help: `
        type of solver to enable for this simulation, as any following string:
        * "full", a complete but slower solver producing publication-quality results
          by comprehensively simulating all possible bioelectrical phenomena.
        * "fast", an incomplete but faster solver producing draft-quality results
          by the well-known equivalent circuit formalism analogizing biological
          systems to electronic circuits. While integrated with gene regulatory
          networks (GRNs), this solver *CANNOT* simulate:
          * Bioelectric fields or currents.
          * Extracellular voltages or voltage polarities.
          * Ion concentrations.
          These phenomena are silently ignored when this solver is enabled.
        `,
    },
    {
        label: 'init time settings',
        type: 'group',
        state: 'initTimeSettings',
        value: [
            {
                label: 'time step',
                type: 'number',
                state: 'timeStep',
                value: 1.0e-2,
                format: 'scientific',
                required: true,
                unit: 's',
                help: `time step-size (recommended at least 1.0e-2 or smaller)`,
            },
            {
                label: 'total time',
                type: 'number',
                state: 'totalTime',
                value: 5.0,
                format: 'float',
                required: true,
                unit: 's',
                help: `end time`,
            },
            {
                label: 'sampling rate',
                type: 'number',
                state: 'samplingRate',
                value: 1.0,
                format: 'float',
                required: true,
                unit: 's',
                help: `time interval to sample data (at least value of time-step or larger)`,
            },
        ],
        required: true,
    },
    {
        label: 'sim time settings',
        type: 'group',
        state: 'simTimeSettings',
        value: [
            {
                label: 'time step',
                type: 'number',
                state: 'timeStep',
                value: 1.0e-4,
                format: 'scientific',
                required: true,
                unit: 's',
                help: `time step-size (recommended at least 1.0e-4 or smaller)`,
            },
            {
                label: 'total time',
                type: 'number',
                state: 'totalTime',
                value: 0.035,
                format: 'float',
                required: true,
                unit: 's',
                help: `time to end sim run`,
            },
            {
                label: 'sampling rate',
                type: 'number',
                state: 'samplingRate',
                value: 1.0e-3,
                format: 'scientific',
                required: true,
                unit: 's',
                help: `period to sample data (at least time step or larger)`,
            },
        ],
        required: true,
    },
    {
        label: 'general options',
        type: 'group',
        state: 'generalOptions',
        value: [
            {
                label: 'comp grid size',
                type: 'number',
                state: 'compGridSize',
                value: 25,
                format: 'integer',
                required: true,
                help: `grid used in computation of environmental parameters (min 10; keep smaller than 50)`,
            },
            {
                label: 'simulate extracellular spaces',
                type: 'boolean',
                state: 'simulateExtracellularSpaces',
                value: true,
                required: true,
                help: `include extracellular spaces and true environment simulation`,
            },
            {
                label: 'ion profile',
                type: 'string',
                state: 'ionProfile',
                value: 'basic',
                required: true,
                help: `
                    ion profile options:
                      * 'basic' (Na+, K+, M-, and proteins-)
                      * 'basic_Ca' (Na+, K+, Ca2+, M- and proteins-)
                      * 'mammal' (Na+, K+, Cl-, Ca2+, M- and proteins-) typical mammal
                      * 'amphibian' (Na+, K+, Cl-, Ca2+, M- and proteins-) Xenopus
                      * 'custom' (user-specified settings, see below)
                    (all profiles contain an unidentified charge-balance anion, M-)
                `,
            },
            {
                label: 'customized ion profile',
                type: 'group',
                state: 'customizedIonProfile',
                value: [
                    {
                        label: 'extracellular Na+ concentration',
                        type: 'number',
                        state: 'extracellularNa+Concentration',
                        value: 145.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `extracellular sodium`,
                    },
                    {
                        label: 'extracellular K+ concentration',
                        type: 'number',
                        state: 'extracellularK+Concentration',
                        value: 5.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `extracellular potassium`,
                    },
                    {
                        label: 'extracellular Cl- concentration',
                        type: 'number',
                        state: 'extracellularCl-Concentration',
                        value: 115.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `extracellular chloride`,
                    },
                    {
                        label: 'extracellular Ca2+ concentration',
                        type: 'number',
                        state: 'extracellularCa2+Concentration',
                        value: 2.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `extracellular calcium`,
                    },
                    {
                        label: 'extracellular protein- concentration',
                        type: 'number',
                        state: 'extracellularProtein-Concentration',
                        value: 10.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `extracellular protein`,
                    },

                    {
                        label: 'cytosolic Na+ concentration',
                        type: 'number',
                        state: 'cytosolicNa+Concentration',
                        value: 12.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `intracellular sodium`,
                    },
                    {
                        label: 'cytosolic K+ concentration',
                        type: 'number',
                        state: 'cytosolicK+Concentration',
                        value: 139.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `intracellular potassium`,
                    },
                    {
                        label: 'cytosolic Cl- concentration',
                        type: 'number',
                        state: 'cytosolicCl-Concentration',
                        value: 4.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `intracellular chloride`,
                    },
                    {
                        label: 'cytosolic Ca2+ concentration',
                        type: 'number',
                        state: 'cytosolicCa2+Concentration',
                        value: 2.0e-5,
                        format: 'scientific',
                        required: true,
                        unit: 'mmol/L',
                        help: `intracellular calcium`,
                    },
                    {
                        label: 'cytosolic protein- concentration',
                        type: 'number',
                        state: 'cytosolicProtein-Concentration',
                        value: 135.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `intracellular protein`,
                    },
                ],
                required: true,
                help: `
                    User-defined initial values of ion concentrations for the "init" phase.
                    Extracellular and cytosolic levels of all ions must sum to zero charge.
                `,
            },
        ],
        required: true,
    },
    {
        label: 'internal parameters',
        type: 'group',
        state: 'internalParameters',
        value: [
            // default free diffusion constants (cytoplasmic)
            {
                label: 'Do_Na',
                type: 'number',
                state: 'Do_Na',
                value: 1.33e-9,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `free diffusion constant sodium`,
            },
            {
                label: 'Do_K',
                type: 'number',
                state: 'Do_K',
                value: 1.96e-9,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `free diffusion constant potassium`,
            },
            {
                label: 'Do_Cl',
                type: 'number',
                state: 'Do_Cl',
                value: 2.03e-9,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `free diffusion constant chloride`,
            },
            {
                label: 'Do_Ca',
                type: 'number',
                state: 'Do_Ca',
                value: 1.0e-10,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `free diffusion constant calcium`,
            },
            {
                label: 'Do_M',
                type: 'number',
                state: 'Do_M',
                value: 1.0e-9,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `free diffusion constant mystery anchor ion`,
            },
            {
                label: 'Do_P',
                type: 'number',
                state: 'Do_P',
                value: 0.0,
                format: 'float',
                required: true,
                unit: 'm2/s',
                help: `free diffusion constant protein`,
            },

            // pump parameters
            {
                label: 'alpha_NaK',
                type: 'number',
                state: 'alpha_NaK',
                value: 1.0e-7,
                format: 'scientific',
                required: true,
                unit: 'm/mol*s',
                help: `max rate Na-K-ATPase pump (1.0e-6 to 1.0e-12)`,
            },
            {
                label: 'alpha_Ca',
                type: 'number',
                state: 'alpha_Ca',
                value: 5.0e-8,
                format: 'scientific',
                required: true,
                unit: 'm/mol*s',
                help: `pump rate for calcium ATPase in membrane per unit surface area`,
            },
            {
                label: 'substances affect Vmem',
                type: 'boolean',
                state: 'substancesAffectVmem',
                value: true,
                required: true,
                help: `do ionic biochemicals, metabolites and gene products affect charge state`,
            },
            {
                label: 'environment volume multiplier',
                type: 'number',
                state: 'environmentVolumeMultiplier',
                value: 1.0,
                format: 'float',
                required: true,
                help: `level to multiply size of box-environment (applies for no ecm spaces only) 1.0`,
            },
            {
                label: 'membrane capacitance',
                type: 'number',
                state: 'membraneCapacitance',
                value: 0.05,
                format: 'float',
                required: true,
                unit: 'F/m2',
                help: `~0.05 to 0.1 cell membrane capacitance`,
            },
            {
                label: 'cell polarizability',
                type: 'number',
                state: 'cellPolarizability',
                value: 0.0,
                format: 'float',
                required: true,
                help: `cell relative dielectric constant (static, low frequency) (0.0 to 5.0e7)`,
            },
            {
                label: 'dielectric constant',
                type: 'number',
                state: 'dielectricConstant',
                value: 6.0,
                format: 'float',
                required: true,
                help: `dielectric constant of electrical double layer`,
            },
            {
                label: 'fast update ecm',
                type: 'boolean',
                state: 'fastUpdateEcm',
                value: false,
                required: true,
                help: `use a coarse (fast) or fine (slow) method to update between env and cell grids`,
            },
            {
                label: 'sharpness env',
                type: 'number',
                state: 'sharpnessEnv',
                value: 1.0,
                format: 'float',
                required: true,
                help: `factor smoothing environmental concentrations, 0.0 max smoothing, 1.0 no smoothing`,
            },
            {
                label: 'sharpness cell',
                type: 'number',
                state: 'sharpnessCell',
                value: 0.5,
                format: 'float',
                required: true,
                help: `factor smoothing cellular fields, 0.0 maximum smoothing, 1.0 no smoothing`,
            },
            {
                label: 'true cell size',
                type: 'number',
                state: 'trueCellSize',
                value: 1.0e-5,
                format: 'scientific',
                required: true,
                help: `true cell size (important for scaling larger grid patches) 1.0e-5 to 2.5e-6 m`,
            },
        ],
        required: true,
        help: `
            While the following settings are available to you, please avoid editing them.
            Simulation instability may result from poor choice of these more sensitive parameters.
            BETSE requires these parameters for its internal use only.
        `,
    },
    {
        label: 'version',
        type: 'string',
        state: 'version',
        value: '1.0',
        required: true,
        help: `
            Configuration file version that this file conforms to. For reliable
            comparability, this is stored as a string rather than float scalar.
        `,
    },
];
// #endregion module
