// #region imports
    // #region libraries
    import React, {
        useEffect
    } from 'react';

    import {
        AnyAction,
        ThunkDispatch,
    } from '@reduxjs/toolkit';
    import { connect } from 'react-redux';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import {
        DashboardRenderProperties,
    } from '~kernel-components/DashboardsRenderer/data';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledSimulations,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface SimulationsOwnProperties {
}

export interface SimulationsStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface SimulationsDispatchProperties {
}

export type SimulationsProperties =
    & SimulationsOwnProperties & DashboardRenderProperties
    & SimulationsStateProperties
    & SimulationsDispatchProperties;


const Simulations: React.FC<SimulationsProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledSimulations
            theme={stateGeneralTheme}
        >
            Simulations
        </StyledSimulations>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): SimulationsStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): SimulationsDispatchProperties => ({
});


const ConnectedSimulations = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Simulations);
// #endregion module



// #region exports
export default ConnectedSimulations;
// #endregion exports
