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
        Network,
    } from '~kernel-data/interfaces';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledNetwork,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface NetworkOwnProperties {
    plurid: PluridPlaneComponentProperty;
}

export interface NetworkStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateNetworks: Network[];
}

export interface NetworkDispatchProperties {
}

export type NetworkProperties =
    & NetworkOwnProperties
    & NetworkStateProperties
    & NetworkDispatchProperties;


const Network: React.FC<NetworkProperties> = (
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
        stateNetworks,
        // #endregion state
    } = properties;

    const {
        id,
    } = plurid.plane.parameters;

    const network = stateNetworks.find(network => network.id === id);
    // #endregion properties


    // #region render
    if (!network) {
        return (<></>);
    }

    return (
        <StyledNetwork
            theme={stateGeneralTheme}
        >
            <h1>
                '{network.name}' network
            </h1>
        </StyledNetwork>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): NetworkStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateNetworks: selectors.data.getData(state).networks,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NetworkDispatchProperties => ({
});


const ConnectedNetwork = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Network);
// #endregion module



// #region exports
export default ConnectedNetwork;
// #endregion exports
