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
        StyledBiomolecules,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface BiomoleculesOwnProperties {
}

export interface BiomoleculesStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface BiomoleculesDispatchProperties {
}

export type BiomoleculesProperties =
    & BiomoleculesOwnProperties
    & BiomoleculesStateProperties
    & BiomoleculesDispatchProperties;


const Biomolecules: React.FC<BiomoleculesProperties> = (
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
        <StyledBiomolecules
            theme={stateGeneralTheme}
        >
            Biomolecules
        </StyledBiomolecules>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): BiomoleculesStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): BiomoleculesDispatchProperties => ({
});


const ConnectedBiomolecules = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Biomolecules);
// #endregion module



// #region exports
export default ConnectedBiomolecules;
// #endregion exports
