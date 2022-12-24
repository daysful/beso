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
        value: 'new modulator',
        required: true,
    },
    {
        label: 'target',
        type: 'string',
        state: 'target',
        value: 'GJ',
        required: true,
        help: 'sim entity targeted: GJ (for gap junctions), Na/K-ATP, or MT (for microtubule dynamics)',
    },
    {
        label: 'max effect',
        type: 'number',
        state: 'max_effect',
        value: 1.0,
        format: 'float',
        required: true,
        help: 'maximum value of modulation',
    },
    {
        label: 'target ion',
        type: 'string',
        state: 'target_ion',
        value: 'K',
        required: true,
        help: 'specific ion to target (applicable to TJ modultion only)',
    },
    {
        label: 'activators',
        type: 'list',
        state: 'activators',
        value: [ 'ADP' ],
        required: true,
        help: 'additional defined substances or ions increasing activity of transporter',
    },
    {
        label: 'activator Km',
        type: 'list',
        state: 'activator_Km',
        value: [ 0.1 ],
        required: true,
    },
    {
        label: 'activator n',
        type: 'list',
        state: 'activator_n',
        value: [ 3.0 ],
        required: true,
    },
    {
        label: 'activator zone',
        type: 'list',
        state: 'activator_zone',
        value: [ 'cell' ],
        required: true,
    },
    {
        label: 'inhibitors',
        type: 'list',
        state: 'inhibitors',
        value: [ 'ATP' ],
        required: true,
        help: 'additional defined substances or ions decreasing activity of transporter',
    },
    {
        label: 'inhibitor Km',
        type: 'list',
        state: 'inhibitor_Km',
        value: [ 1.5 ],
        required: true,
    },
    {
        label: 'inhibitor n',
        type: 'list',
        state: 'inhibitor_n',
        value: [ 3.0 ],
        required: true,
    },
    {
        label: 'inhibitor zone',
        type: 'list',
        state: 'inhibitor_zone',
        value: [ 'cell' ],
        required: true,
    },
];
// #endregion module
