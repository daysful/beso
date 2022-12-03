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
        StyledChannels,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface ChannelsOwnProperties {
}

export interface ChannelsStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface ChannelsDispatchProperties {
}

export type ChannelsProperties =
    & ChannelsOwnProperties
    & ChannelsStateProperties
    & ChannelsDispatchProperties;


const Channels: React.FC<ChannelsProperties> = (
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
        <StyledChannels
            theme={stateGeneralTheme}
        >
            Channels
        </StyledChannels>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ChannelsStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ChannelsDispatchProperties => ({
});


const ConnectedChannels = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Channels);
// #endregion module



// #region exports
export default ConnectedChannels;
// #endregion exports
