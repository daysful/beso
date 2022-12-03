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
        StyledReactions,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface ReactionsOwnProperties {
}

export interface ReactionsStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface ReactionsDispatchProperties {
}

export type ReactionsProperties =
    & ReactionsOwnProperties
    & ReactionsStateProperties
    & ReactionsDispatchProperties;


const Reactions: React.FC<ReactionsProperties> = (
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
        <StyledReactions
            theme={stateGeneralTheme}
        >
            Reactions
        </StyledReactions>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ReactionsStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ReactionsDispatchProperties => ({
});


const ConnectedReactions = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Reactions);
// #endregion module



// #region exports
export default ConnectedReactions;
// #endregion exports
