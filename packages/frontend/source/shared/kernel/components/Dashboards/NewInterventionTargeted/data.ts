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
        value: 'new targeted intervention',
        required: true,
    },
    {
        label: 'change Na membrane',
        type: 'group',
        state: 'changeNaMem',
        value: [
            {
                label: 'event happens',
                type: 'boolean',
                state: 'eventHappens',
                value: false,
                help: 'turn the event on (True) or off (False)',
            },
        ],
        help: 'Change the membrane permeability to Na+',
    },
];
// #endregion module
