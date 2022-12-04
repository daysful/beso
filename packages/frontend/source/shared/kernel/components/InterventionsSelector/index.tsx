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
        StyledInterventionsSelector,
        StyledInterventionsSelectorItem,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface InterventionsSelectorOwnProperties {
    targeted: boolean;
    toggleInterventions: () => void;
}

export interface InterventionsSelectorStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface InterventionsSelectorDispatchProperties {
}

export type InterventionsSelectorProperties =
    & InterventionsSelectorOwnProperties
    & InterventionsSelectorStateProperties
    & InterventionsSelectorDispatchProperties;


const InterventionsSelector: React.FC<InterventionsSelectorProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        targeted,
        toggleInterventions,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledInterventionsSelector
            theme={stateGeneralTheme}
        >
            <StyledInterventionsSelectorItem
                theme={stateGeneralTheme}
                selected={!targeted}
                onClick={() => toggleInterventions()}
            >
                global
            </StyledInterventionsSelectorItem>

            <StyledInterventionsSelectorItem
                theme={stateGeneralTheme}
                selected={targeted}
                onClick={() => toggleInterventions()}
            >
                targeted
            </StyledInterventionsSelectorItem>
        </StyledInterventionsSelector>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): InterventionsSelectorStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): InterventionsSelectorDispatchProperties => ({
});


const ConnectedInterventionsSelector = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(InterventionsSelector);
// #endregion module



// #region exports
export default ConnectedInterventionsSelector;
// #endregion exports
