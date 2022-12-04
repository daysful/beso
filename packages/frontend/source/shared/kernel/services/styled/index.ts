// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        universal,
        pluridal,
    } from '@plurid/plurid-ui-components-react';
    // #endregion libraries
// #endregion imports



// #region module
const {
    buttons: {
        PureButton: PluridPureButton,
        LinkButton: PluridLinkButton,
    },
    inputs: {
        InputLine: PluridInputLine,
        InputSwitch: PluridInputSwitch,
        Textline: PluridTextline,
        Dropdown: PluridDropdown,
    },
    markers: {
        Spinner: PluridSpinner,
    },
} = universal;

const {
    toolbars: {
        ToolbarSpecific,
    },
} = pluridal;



export interface IStyledDashboardContainer {
    theme: Theme;
}

export const StyledDashboardContainer = styled.div<IStyledDashboardContainer>`
    padding: 2rem;
    height: 100%;
`;
// #endregion module



// #region exports
export {
    PluridPureButton,
    PluridLinkButton,
    PluridInputLine,
    PluridInputSwitch,
    PluridTextline,
    PluridDropdown,
    PluridSpinner,

    ToolbarSpecific,
};
// #endregion exports
