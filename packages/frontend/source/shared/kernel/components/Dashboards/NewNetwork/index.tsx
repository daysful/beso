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

    import {
        PluridLinkButton,
        StyledDashboardContainer,
    } from '~kernel-services/styled';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    // #endregion internal
// #endregion imports



// #region module
export interface NewNetworkOwnProperties {
}

export interface NewNetworkStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface NewNetworkDispatchProperties {
}

export type NewNetworkProperties =
    & NewNetworkOwnProperties & DashboardRenderProperties
    & NewNetworkStateProperties
    & NewNetworkDispatchProperties;


const NewNetwork: React.FC<NewNetworkProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        setRenderView,
        setFullRenderArea,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledDashboardContainer
            theme={stateGeneralTheme}
        >
            <h1>
                New Network
            </h1>

            <PluridLinkButton
                text="cancel"
                atClick={() => {
                    setFullRenderArea(false);
                    setRenderView('networks');
                }}
                theme={stateGeneralTheme}
            />
        </StyledDashboardContainer>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): NewNetworkStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NewNetworkDispatchProperties => ({
});


const ConnectedNewNetwork = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(NewNetwork);
// #endregion module



// #region exports
export default ConnectedNewNetwork;
// #endregion exports
