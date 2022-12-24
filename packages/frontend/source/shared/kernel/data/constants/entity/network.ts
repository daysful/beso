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
        label: 'name',
        type: 'string',
        state: 'name',
        value: 'new network',
        required: true,
    },
    {
        label: 'enable mitochondria',
        type: 'boolean',
        state: 'enable_mitochondria',
        value: false,
        required: true,
        help: 'enable distinct mitochondrial volumes in each cell',
    },
    {
        label: 'optimization',
        type: 'group',
        state: 'optimization',
        value: [
            {
                label: 'optimize network',
                type: 'boolean',
                state: 'optimize_network',
                value: false,
                required: true,
                help: 'run an optimization of the network to obtain max rates at steady state concentrations',
            },
            {
                label: 'optimization steps',
                type: 'number',
                state: 'optimization_steps',
                value: 50,
                format: 'integer',
                required: true,
                help: 'number of iteration steps to run with basinhopper',
            },
            {
                label: 'optimization method',
                type: 'string',
                state: 'optimization_method',
                value: 'L-BFGS-B',
                required: true,
                help: `optimization algorithm to run ('COBYLA', 'L-BFGS-B', 'CG', Nelder-Mead, Powell, BFGS, 'TNC', 'SLSQP')`,
            },
            {
                label: 'optimization T',
                type: 'number',
                state: 'optimization_T',
                value: 1.0,
                format: 'float',
                required: true,
            },
            {
                label: 'optimization step',
                type: 'number',
                state: 'optimization_step',
                value: 0.5,
                format: 'float',
                required: true,
            },
            {
                label: 'target Vmem',
                type: 'number',
                state: 'target_Vmem',
                value: -50e-3,
                format: 'scientific',
                required: true,
                help: 'Vmem to use in optimization',
            },
        ],
        required: true,
    },
    {
        label: 'time dilation factor',
        type: 'number',
        state: 'time_dilation_factor',
        value: 144.0,
        format: 'float',
        required: true,
        help: 'factor altering the simulation timestep for certain substances',
    },
    {
        label: 'reset microtubules',
        type: 'boolean',
        state: 'reset_microtubules',
        value: false,
        required: true,
        help: '(sim-grn) reinitialize the MT to disorganized state at begining of network simulation',
    },
    {
        label: 'recalculate fluid',
        type: 'boolean',
        state: 'recalculate_fluid',
        value: false,
        required: true,
    },
];
// #endregion module
