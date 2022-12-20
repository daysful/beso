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
        unit: 'm',
        help: 'dimension of the square world space · the world is square with x = y · recommended range 80e-6 to 1000e-6 m',
    },
    {
        label: 'cell radius',
        type: 'number',
        state: 'cellRadius',
        value: 5.0e-6,
        format: 'scientific',
        required: true,
        unit: 'm',
        help: 'radius of single cell · recommended ~ 5.0e-6',
    },
    {
        label: 'cell height',
        type: 'number',
        state: 'cellHeight',
        value: 10.0e-6,
        format: 'scientific',
        required: true,
        unit: 'm',
        help: 'the height of a cell in the z-direction · used in cell volume and surface area calculations · recommended 10.0e-6',
    },
    {
        label: 'cell spacing',
        type: 'number',
        state: 'cellSpacing',
        value: 26.0e-9,
        format: 'scientific',
        required: true,
        unit: 'm',
        help: 'the spacing between cells · recommended 26.0e-9 m for animal cells',
    },
    {
        label: 'simulate single cell',
        type: 'boolean',
        state: 'simulateSingleCell',
        value: false,
        required: true,
        help: 'ignore all geometry and simulate a single hexagonal cell',
    },
    {
        label: 'lattice type',
        type: 'string',
        state: 'latticeType',
        value: 'hex',
        required: true,
        help: `
            type of base cell lattice (i.e., uniform grid to
            which cells are situated before random lattice
            disorder is applied), as any following string:
            "hex" for hexagonal cells · "square" for square cells
        `,
    },
    {
        label: 'lattice disorder',
        type: 'number',
        state: 'latticeDisorder',
        value: 0.4,
        format: 'float',
        required: true,
        help: `
            noise level for the lattice ·
            recommended range 0 to 0.8 ·
            this randomizes lattice points from the rectangular or
            hexagonal base grid. If equal to 0, a perfect
            hexagonal or rectangular grid is created.
        `,
    },
    {
        label: 'mesh refinement',
        type: 'group',
        state: 'meshRefinement',
        help: `use Llyod's algorithm to optimize the Voronoi mesh`,
        value: [
            {
                label: 'refine mesh',
                type: 'boolean',
                state: 'refineMesh',
                value: true,
                required: true,
                help: 'turn optimization on (only works for Convex model shapes)',
            },
            {
                label: 'maximum steps',
                type: 'number',
                state: 'maximumSteps',
                value: 10,
                format: 'integer',
                required: true,
                help: 'maximum number of itterations',
            },
            {
                label: 'convergence threshold',
                type: 'number',
                state: 'convergenceThreshold',
                value: 1.5,
                format: 'float',
                required: true,
                help: 'threshhold below which optimization is considered complete',
            },
        ],
    },
    {
        label: 'import from svg',
        type: 'group',
        state: 'importFromSvg',
        help: 'import individual cell centres and clipping curve from an svg file',
        value: [
            {
                label: 'svg override',
                type: 'boolean',
                state: 'svgOverride',
                value: false,
                help: 'turn to true to enable imports from SVG files',
            },
            {
                label: 'cells from svg',
                type: 'file',
                state: 'cellsFromSvg',
                help: `read in exact cell centre locations from 'circles' in svg file`,
            },
            {
                label: 'svg size',
                type: 'number',
                state: 'svgSize',
                value: 500,
                format: 'integer',
                unit: 'mm',
                help: 'size of the svg page area in mm',
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
        help: 'alpha shape threshhold (used for working with non-convex shapes) 0.01 to 0.9',
    },
    {
        label: 'use centers',
        type: 'boolean',
        state: 'useCenters',
        value: false,
        required: true,
        help: 'use cell centroids instead of circumcentres when building meshes',
    },
];
// #endregion module
