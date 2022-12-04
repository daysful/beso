// #region imports
    // #region libraries
    import {
        PluridIconAdd,
    } from '@plurid/plurid-icons-react';

    import {
        ToolbarButton,
    } from '@plurid/plurid-ui-components-react';
    // #endregion libraries
// #endregion imports



// #region module
export const buttons: ToolbarButton[] = [
    {
        type: 'new-dashboard',
        text: 'new dashboard',
        icon: PluridIconAdd,
        first: true,
        last: true,
    },
];
// #endregion module
