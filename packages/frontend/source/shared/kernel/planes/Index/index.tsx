// #region imports
    // #region libraries
    import React, {
        useState,
    } from 'react';

    import {
        AnyAction,
        ThunkDispatch,
    } from '@reduxjs/toolkit';
    import { connect } from 'react-redux';


    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        DispatchAction,
    } from '@plurid/plurid-ui-state-react';
    // #endregion libraries


    // #region external
    import {
        PluridInputLine,
    } from '~kernel-services/styled';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledIndex,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface IndexOwnProperties {
}

export interface IndexStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateIdentonym: string;
}

export interface IndexDispatchProperties {
    dispatchSetGeneralField: DispatchAction<typeof actions.general.setGeneralField>;
}

export type IndexProperties =
    & IndexOwnProperties
    & IndexStateProperties
    & IndexDispatchProperties;


const Index: React.FC<IndexProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        stateIdentonym,
        // #endregion state

        // #region dispatch
        dispatchSetGeneralField,
        // #endregion dispatch
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledIndex
            theme={stateGeneralTheme}
        >
            <h1>
                beso
            </h1>

            <h2>
                BioElectric Simulation Orchestrator
            </h2>
        </StyledIndex>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): IndexStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateIdentonym: selectors.general.getGeneral(state).identonym,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): IndexDispatchProperties => ({
    dispatchSetGeneralField: (
        payload,
    ) => dispatch(
        actions.general.setGeneralField(payload),
    ),
});


const ConnectedIndex = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Index);
// #endregion module



// #region exports
export default ConnectedIndex;
// #endregion exports
