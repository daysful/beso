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
        StyledWorlds,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface WorldsOwnProperties {
}

export interface WorldsStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface WorldsDispatchProperties {
}

export type WorldsProperties =
    & WorldsOwnProperties
    & WorldsStateProperties
    & WorldsDispatchProperties;


const Worlds: React.FC<WorldsProperties> = (
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
        <StyledWorlds
            theme={stateGeneralTheme}
        >
            Worlds
        </StyledWorlds>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): WorldsStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): WorldsDispatchProperties => ({
});


const ConnectedWorlds = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Worlds);
// #endregion module



// #region exports
export default ConnectedWorlds;
// #endregion exports
