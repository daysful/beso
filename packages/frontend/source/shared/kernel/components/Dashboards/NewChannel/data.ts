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
        value: 'new channel',
        required: true,
    },
    {
        label: 'channel class',
        type: 'string',
        state: 'channelClass',
        value: 'K',
        required: true,
        help: 'class of the channels: Na, K, Ca, Cl, Fun, and Cat',
    },
    {
        label: 'channel type',
        type: 'string',
        state: 'channelType',
        value: 'KLeak',
        required: true,
        help: 'identify the channel as one of the available voltage gated types in each class',
    },
    {
        label: 'max Dm',
        type: 'number',
        state: 'maxDM',
        value: 1.0e-17,
        format: 'scientific',
        required: true,
        help: 'maximum membrane diffusion constant of ion when channel fully open',
    },
    {
        label: 'apply to',
        type: 'string',
        state: 'applyTo',
        value: 'all',
        required: true,
        help: `list of profiles to apply channel to or 'all' for all cells`,
    },
    {
        label: 'init active',
        type: 'boolean',
        state: 'initActive',
        value: false,
        required: true,
        help: `is the channel active during the Init (true) or only during Sim (false)`,
    },
    {
        label: 'channel activators',
        type: 'list',
        state: 'channelActivators',
        value: [ 'ADP' ],
        required: true,
        help: `additional defined substances or ions increasing activity of transporter`,
    },


    {
        label: 'activator Km',
        type: 'list',
        state: 'activatorKm',
        value: [ 0.1 ],
        required: true,
    },
    {
        label: 'activator n',
        type: 'list',
        state: 'activatorN',
        value: [ 3.0 ],
        required: true,
    },
    {
        label: 'activator zone',
        type: 'list',
        state: 'activatorZone',
        value: [ 'cell' ],
        required: true,
    },
    {
        label: 'activator max',
        type: 'number',
        state: 'activatorMax',
        value: 0.75,
        format: 'float',
        required: true,
        help: 'saturating fraction of the activation',
    },
    {
        label: 'channel inhibitors',
        type: 'list',
        state: 'channelInhibitors',
        value: [ 'ATP' ],
        required: true,
        help: 'additional defined substances or ions decreasing activity of transporter',
    },
    {
        label: 'inhibitor Km',
        type: 'list',
        state: 'inhibitorKm',
        value: [ 1.5 ],
        required: true,
    },
    {
        label: 'inhibitor n',
        type: 'list',
        state: 'inhibitorN',
        value: [ 3.0 ],
        required: true,
    },
    {
        label: 'inhibitor zone',
        type: 'list',
        state: 'inhibitorZone',
        value: [ 'cell' ],
        required: true,
    },
    {
        label: 'inhibitor max',
        type: 'number',
        state: 'inhibitorZone',
        value: 0.3,
        format: 'float',
        required: true,
        help: 'saturating fraction of inhibition',
    },
];
// #endregion module
