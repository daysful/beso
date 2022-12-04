// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        universal,
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
    },
    markers: {
        Spinner: PluridSpinner,
    },
} = universal;



export interface IStyledDashboardContainer {
    theme: Theme;
}

export const StyledDashboardContainer = styled.div<IStyledDashboardContainer>`
    padding: 2rem;
    height: 100%;
`;


export const StyledInterventionsSelector = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
`;
// #endregion module



// #region exports
export {
    PluridPureButton,
    PluridLinkButton,
    PluridInputLine,
    PluridInputSwitch,
    PluridTextline,
    PluridSpinner,
};
// #endregion exports
