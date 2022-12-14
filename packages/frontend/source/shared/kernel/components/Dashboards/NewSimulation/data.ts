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
                        state: 'extracellularNa+Concentration',
                        value: 12.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `intracellular sodium`,
                    },
                    {
                        label: 'cytosolic K+ concentration',
                        type: 'number',
                        state: 'extracellularK+Concentration',
                        value: 139.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `intracellular potassium`,
                    },
                    {
                        label: 'cytosolic Cl- concentration',
                        type: 'number',
                        state: 'extracellularCl-Concentration',
                        value: 4.0,
                        format: 'float',
                        required: true,
                        unit: 'mmol/L',
                        help: `intracellular chloride`,
                    },
                    {
                        label: 'cytosolic Ca2+ concentration',
                        type: 'number',
                        state: 'extracellularCa2+Concentration',
                        value: 2.0e-5,
                        format: 'scientific',
                        required: true,
                        unit: 'mmol/L',
                        help: `intracellular calcium`,
                    },
                    {
                        label: 'cytosolic protein- concentration',
                        type: 'number',
                        state: 'extracellularProtein-Concentration',
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
];
// #endregion module
