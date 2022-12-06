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
        InputBox: PluridInputBox,
        InputLine: PluridInputLine,
        InputSwitch: PluridInputSwitch,
        Textline: PluridTextline,
        Dropdown: PluridDropdown,
        EntityPillGroup: PluridEntityPillGroup,
        Switch: PluridSwitch,
    },
    form: {
        FormLeftRight: PluridFormLeftRight,
    },
    markers: {
        Spinner: PluridSpinner,
        Tooltip: PluridTooltip,
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


export const StyledNewEntity = styled.div`
    h1 {
        font-size: 1.4rem;
        margin: 0;
    }

    hr {
        width: 100%;
        margin: 1.4rem 0;
    }

    display: grid;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;
// #endregion module



// #region exports
export {
    PluridPureButton,
    PluridLinkButton,
    PluridInputBox,
    PluridInputLine,
    PluridInputSwitch,
    PluridTextline,
    PluridDropdown,
    PluridEntityPillGroup,
    PluridSwitch,
    PluridFormLeftRight,
    PluridSpinner,
    PluridTooltip,

    ToolbarSpecific,
};
// #endregion exports
