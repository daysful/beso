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
    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledInterventionsGlobal,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface InterventionsGlobalOwnProperties {
}

export interface InterventionsGlobalStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface InterventionsGlobalDispatchProperties {
}

export type InterventionsGlobalProperties =
    & InterventionsGlobalOwnProperties
    & InterventionsGlobalStateProperties
    & InterventionsGlobalDispatchProperties;


const InterventionsGlobal: React.FC<InterventionsGlobalProperties> = (
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
        <StyledInterventionsGlobal
            theme={stateGeneralTheme}
        >
            InterventionsGlobal
        </StyledInterventionsGlobal>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): InterventionsGlobalStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): InterventionsGlobalDispatchProperties => ({
});


const ConnectedInterventionsGlobal = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(InterventionsGlobal);
// #endregion module



// #region exports
export default ConnectedInterventionsGlobal;
// #endregion exports