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
        value: 'new tissue',
        required: true,
    },
    {
        label: 'insular',
        type: 'boolean',
        state: 'insular',
        value: false,
        required: true,
    },
    {
        label: 'diffusion constants',
        type: 'group',
        state: 'diffusionConstants',
        value: [
            {
                label: 'Dm_Na',
                type: 'number',
                state: 'DmNa',
                value: 2.0e-18,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `Na+ membrane diffusion constant`,
            },
            {
                label: 'Dm_K',
                type: 'number',
                state: 'DmK',
                value: 1.0e-18,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `K+ membrane diffusion constant`,
            },
            {
                label: 'Dm_Cl',
                type: 'number',
                state: 'DmCl',
                value: 1.0e-18,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `Cl- membrane diffusion constant`,
            },
            {
                label: 'Dm_Ca',
                type: 'number',
                state: 'DmCa',
                value: 1.0e-18,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `Ca2+ membrane diffusion constant`,
            },
            {
                label: 'Dm_M',
                type: 'number',
                state: 'DmM',
                value: 1.0e-18,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `M- membrane diffusion constant`,
            },
            {
                label: 'Dm_P',
                type: 'number',
                state: 'DmP',
                value: 0.0,
                format: 'scientific',
                required: true,
                unit: 'm2/s',
                help: `proteins membrane diffusion constant`,
            },
        ],
        required: true,
    },
    {
        label: 'cell targets',
        type: 'group',
        state: 'cellTargets',
        value: [
            {
                label: 'type',
                type: 'string',
                state: 'type',
                value: 'image',
                required: true,
                help: `
                    cell population type as any following string:
                    * "all", uniformly applying this tissue profile to all cells.
                    * "color", matching only cells whose cell centres are simple circles with
                      a fill color (specified by the "color" setting below) of a vector image
                      (specified by the "cells from svg" setting above).
                    * "image", matching only cells whose cell centres are pure-black pixels
                      in a raster image (specified by the "image" setting below).
                    * "indices", matching only cells whose indices are listed below.
                    * "percent", matching only a random subset of cells.
                `,
            },
            {
                label: 'color',
                type: 'string',
                state: 'color',
                value: 'ff0000',
                required: true,
                help: `color in hexadecimal format of simple circles within this vector image`,
            },
            {
                label: 'image',
                type: 'file',
                state: 'image',
                required: true,
            },
            {
                label: 'indices',
                type: 'list',
                state: 'indices',
                value: [3, 14, 15, 9, 265],
                required: true,
                help: `list of all positive integers uniquely identifying each
                       cell in this cluster to apply this tissue profile to.
                       Ignored unless "type: indices" specified above.
                `
            },
            {
                label: 'percent',
                type: 'number',
                state: 'percent',
                value: 50,
                format: 'float',
                required: true,
                help: `
                    Percentage of all cells in this cluster to randomly apply this tissue
                    profile to in the range [0, 100] (e.g., 50 selects 50% of all cells).
                    Ignored unless "type: random" specified above,
                `,
            },
        ],
        required: true,
    },
];
// #endregion module
