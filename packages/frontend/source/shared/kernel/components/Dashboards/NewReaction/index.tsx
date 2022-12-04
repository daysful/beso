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
    import {
        DashboardRenderProperties,
    } from '~kernel-components/DashboardsRenderer/data';

    import {
        PluridLinkButton,
        StyledDashboardContainer,
    } from '~kernel-services/styled';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    // #endregion internal
// #endregion imports



// #region module
export interface NewReactionOwnProperties {
}

export interface NewReactionStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface NewReactionDispatchProperties {
}

export type NewReactionProperties =
    & NewReactionOwnProperties & DashboardRenderProperties
    & NewReactionStateProperties
    & NewReactionDispatchProperties;


const NewReaction: React.FC<NewReactionProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        setRenderView,
        setFullRenderArea,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledDashboardContainer
            theme={stateGeneralTheme}
        >
            <h1>
                New Reaction
            </h1>

            <PluridLinkButton
                text="cancel"
                atClick={() => {
                    setFullRenderArea(false);
                    setRenderView('reactions');
                }}
                theme={stateGeneralTheme}
            />
        </StyledDashboardContainer>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): NewReactionStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NewReactionDispatchProperties => ({
});


const ConnectedNewReaction = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(NewReaction);
// #endregion module



// #region exports
export default ConnectedNewReaction;
// #endregion exports
