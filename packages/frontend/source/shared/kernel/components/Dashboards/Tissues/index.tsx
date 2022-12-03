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
        StyledTissues,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface TissuesOwnProperties {
}

export interface TissuesStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface TissuesDispatchProperties {
}

export type TissuesProperties =
    & TissuesOwnProperties
    & TissuesStateProperties
    & TissuesDispatchProperties;


const Tissues: React.FC<TissuesProperties> = (
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
        <StyledTissues
            theme={stateGeneralTheme}
        >
            Tissues
        </StyledTissues>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): TissuesStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): TissuesDispatchProperties => ({
});


const ConnectedTissues = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Tissues);
// #endregion module



// #region exports
export default ConnectedTissues;
// #endregion exports
