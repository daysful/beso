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

    import {
        PluridPlaneComponentProperty,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import {
        Biomolecule,
    } from '~kernel-data/interfaces';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledBiomolecule,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface BiomoleculeOwnProperties {
    plurid: PluridPlaneComponentProperty;
}

export interface BiomoleculeStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateBiomolecules: Biomolecule[];
}

export interface BiomoleculeDispatchProperties {
}

export type BiomoleculeProperties =
    & BiomoleculeOwnProperties
    & BiomoleculeStateProperties
    & BiomoleculeDispatchProperties;


const Biomolecule: React.FC<BiomoleculeProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        plurid,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        stateBiomolecules,
        // #endregion state
    } = properties;

    const {
        id,
    } = plurid.plane.parameters;

    const biomolecule = stateBiomolecules.find(biomolecule => biomolecule.id === id);
    // #endregion properties


    // #region render
    if (!biomolecule) {
        return (<></>);
    }

    return (
        <StyledBiomolecule
            theme={stateGeneralTheme}
        >
            <h1>
                '{biomolecule.name}' biomolecule
            </h1>
        </StyledBiomolecule>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): BiomoleculeStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateBiomolecules: selectors.data.getData(state).biomolecules,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): BiomoleculeDispatchProperties => ({
});


const ConnectedBiomolecule = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Biomolecule);
// #endregion module



// #region exports
export default ConnectedBiomolecule;
// #endregion exports
