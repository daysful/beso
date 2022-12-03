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
        StyledModulators,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface ModulatorsOwnProperties {
}

export interface ModulatorsStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface ModulatorsDispatchProperties {
}

export type ModulatorsProperties =
    & ModulatorsOwnProperties
    & ModulatorsStateProperties
    & ModulatorsDispatchProperties;


const Modulators: React.FC<ModulatorsProperties> = (
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
        <StyledModulators
            theme={stateGeneralTheme}
        >
            Modulators
        </StyledModulators>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ModulatorsStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ModulatorsDispatchProperties => ({
});


const ConnectedModulators = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Modulators);
// #endregion module



// #region exports
export default ConnectedModulators;
// #endregion exports
