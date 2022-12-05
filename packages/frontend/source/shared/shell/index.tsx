// #region imports
    // #region libraries
    import React, {
        useEffect,
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
        PluridReactComponent,
    } from '@plurid/plurid-react';

    import {
        DispatchAction,
    } from '@plurid/plurid-ui-state-react';
    // #endregion libraries


    // #region external
    import {
        loadState,
    } from '~kernel-services/logic/localStorage';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        GlobalStyle,
    } from './styled';

    import './index.css';
    // #endregion internal
// #endregion imports



// #region module
export interface ShellOwnProperties {
    children?: React.ReactNode;
}

export interface ShellStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface ShellDispatchProperties {
    dispatchSetCompactSelectors: DispatchAction<typeof actions.product.setCompactSelectors>;
}

export type ShellProperties =
    & ShellOwnProperties
    & ShellStateProperties
    & ShellDispatchProperties;


const Shell: React.FC<ShellProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        children,
        // #endregion own

        // #region dispatch
        dispatchSetCompactSelectors,
        // #endregion dispatch
    } = properties;
    // #endregion properties


    // #region effects
    useEffect(() => {
        const state = loadState();

        if (typeof state?.product?.ui?.compactSelectors === 'boolean') {
            dispatchSetCompactSelectors(state.product.ui.compactSelectors);
        }
    }, []);
    // #endregion effects


    // #region render
    return (
        <>
            <GlobalStyle />

            {children}
        </>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ShellStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ShellDispatchProperties => ({
    dispatchSetCompactSelectors: (
        payload,
    ) => dispatch(
        actions.product.setCompactSelectors(payload),
    ),
});


const ConnectedShell = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Shell);

const shell: PluridReactComponent = ConnectedShell;
// #endregion module



// #region exports
export default shell;
// #endregion exports
