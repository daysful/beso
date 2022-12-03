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
        StyledInterventionsTargeted,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface InterventionsTargetedOwnProperties {
}

export interface InterventionsTargetedStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface InterventionsTargetedDispatchProperties {
}

export type InterventionsTargetedProperties =
    & InterventionsTargetedOwnProperties
    & InterventionsTargetedStateProperties
    & InterventionsTargetedDispatchProperties;


const InterventionsTargeted: React.FC<InterventionsTargetedProperties> = (
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
        <StyledInterventionsTargeted
            theme={stateGeneralTheme}
        >
            InterventionsTargeted
        </StyledInterventionsTargeted>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): InterventionsTargetedStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): InterventionsTargetedDispatchProperties => ({
});


const ConnectedInterventionsTargeted = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(InterventionsTargeted);
// #endregion module



// #region exports
export default ConnectedInterventionsTargeted;
// #endregion exports
