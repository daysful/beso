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
        value: 'new world',
        required: true,
    },
    {
        label: 'world size',
        type: 'number',
        state: 'worldSize',
        value: 150e-6,
        format: 'scientific',
        required: true,
    },
    {
        label: 'cell radius',
        type: 'number',
        state: 'cellRadius',
        value: 5.0e-6,
        format: 'scientific',
        required: true,
    },
    {
        label: 'cell height',
        type: 'number',
        state: 'cellHeight',
        value: 10.0e-6,
        format: 'scientific',
        required: true,
    },
    {
        label: 'cell spacing',
        type: 'number',
        state: 'cellSpacing',
        value: 26.0e-9,
        format: 'scientific',
        required: true,
    },
    {
        label: 'simulate single cell',
        type: 'boolean',
        state: 'simulateSingleCell',
        value: false,
        required: true,
    },
    {
        label: 'lattice type',
        type: 'string',
        state: 'latticeType',
        value: 'hex',
        required: true,
    },
    {
        label: 'mesh refinement',
        type: 'group',
        state: 'meshRefinement',
        value: [
            {
                label: 'refine mesh',
                type: 'boolean',
                state: 'refineMesh',
                value: true,
                required: true,
            },
            {
                label: 'maximum steps',
                type: 'number',
                state: 'maximumSteps',
                value: 10,
                format: 'integer',
                required: true,
            },
            {
                label: 'convergence threshold',
                type: 'number',
                state: 'convergenceThreshold',
                value: 1.5,
                format: 'float',
                required: true,
            },
        ],
    },
    {
        label: 'import from svg',
        type: 'group',
        state: 'importFromSvg',
        value: [
            {
                label: 'svg override',
                type: 'boolean',
                state: 'svgOverride',
                value: false,
            },
            {
                label: 'cells from svg',
                type: 'file',
                state: 'cellsFromSvg',
            },
            {
                label: 'svg size',
                type: 'number',
                state: 'svgSize',
                value: 500,
                format: 'integer',
            },
        ],
    },
    {
        label: 'alpha shape',
        type: 'number',
        state: 'alphaShape',
        value: 0.01,
        format: 'float',
        required: true,
    },
    {
        label: 'use centers',
        type: 'boolean',
        state: 'useCenters',
        value: false,
        required: true,
    },
];


export const pasteParser = (
    text: string,
    language: 'yaml' | 'json' | 'deon',
) => {
    return {
        // name, worldSize, etc.
        // ...
    };
}
// #endregion module
