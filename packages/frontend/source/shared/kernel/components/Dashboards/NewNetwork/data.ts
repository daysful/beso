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
        state: 'enableMitochondria',
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
                state: 'optimizeNetwork',
                value: false,
                required: true,
                help: 'run an optimization of the network to obtain max rates at steady state concentrations',
            },
            {
                label: 'optimization steps',
                type: 'number',
                state: 'optimizationSteps',
                value: 50,
                format: 'integer',
                required: true,
                help: 'number of iteration steps to run with basinhopper',
            },
            {
                label: 'optimization method',
                type: 'string',
                state: 'optimizationMethod',
                value: 'L-BFGS-B',
                required: true,
                help: `optimization algorithm to run ('COBYLA', 'L-BFGS-B', 'CG', Nelder-Mead, Powell, BFGS, 'TNC', 'SLSQP')`,
            },
            {
                label: 'optimization T',
                type: 'number',
                state: 'optimizationT',
                value: 1.0,
                format: 'float',
                required: true,
            },
            {
                label: 'optimization step',
                type: 'number',
                state: 'optimizationStep',
                value: 0.5,
                format: 'float',
                required: true,
            },
            {
                label: 'target Vmem',
                type: 'number',
                state: 'targetVmem',
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
        state: 'timeDilationFactor',
        value: 144.0,
        format: 'float',
        required: true,
        help: 'factor altering the simulation timestep for certain substances',
    },
    {
        label: 'reset microtubules',
        type: 'boolean',
        state: 'resetMicrotubules',
        value: false,
        required: true,
        help: '(sim-grn) reinitialize the MT to disorganized state at begining of network simulation',
    },
    {
        label: 'recalculate fluid',
        type: 'boolean',
        state: 'recalculateFluid',
        value: false,
        required: true,
    },
];
// #endregion module
