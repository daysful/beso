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
        World,
    } from '~kernel-data/interfaces';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledWorld,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface WorldOwnProperties {
    plurid: PluridPlaneComponentProperty;
}

export interface WorldStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateWorlds: World[];
}

export interface WorldDispatchProperties {
}

export type WorldProperties =
    & WorldOwnProperties
    & WorldStateProperties
    & WorldDispatchProperties;


const World: React.FC<WorldProperties> = (
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
        stateWorlds,
        // #endregion state
    } = properties;

    const {
        id,
    } = plurid.plane.parameters;

    const world = stateWorlds.find(world => world.id === id);
    // #endregion properties


    // #region render
    if (!world) {
        return (<></>);
    }

    return (
        <StyledWorld
            theme={stateGeneralTheme}
        >
            <h1>
                '{world.name}' world
            </h1>
        </StyledWorld>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): WorldStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateWorlds: selectors.data.getData(state).worlds,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): WorldDispatchProperties => ({
});


const ConnectedWorld = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(World);
// #endregion module



// #region exports
export default ConnectedWorld;
// #endregion exports
