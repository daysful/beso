// #region imports
    // #region libraries
    import React from 'react';

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

    import EntityView, {
        EntityViewRefAttributes,
    } from '~kernel-components/EntityView';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledNetworks,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface NetworksOwnProperties {
}

export interface NetworksStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface NetworksDispatchProperties {
}

export type NetworksProperties =
    & NetworksOwnProperties
    & NetworksStateProperties
    & NetworksDispatchProperties;


const Networks: React.FC<NetworksProperties> = (
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
        <StyledNetworks
            theme={stateGeneralTheme}
        >
            Networks
        </StyledNetworks>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): NetworksStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NetworksDispatchProperties => ({
});


const ConnectedNetworks = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Networks);
// #endregion module



// #region exports
export default ConnectedNetworks;
// #endregion exports
