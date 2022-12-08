// #region imports
    // #region libraries
    import React, {
        useRef,
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
    // #endregion libraries


    // #region external
    import {
        DashboardRenderProperties,
    } from '~kernel-components/DashboardsRenderer/data';

    import NewEntityRenderer from '~kernel-components/NewEntityRenderer';

    import {
        StyledDashboardContainer,
        StyledNewEntity,
        PluridPureButton,
        PluridLinkButton,
    } from '~kernel-services/styled';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        fields,
    } from './data';
    // #endregion internal
// #endregion imports



// #region module
export interface NewInterventionTargetedOwnProperties {
}

export interface NewInterventionTargetedStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface NewInterventionTargetedDispatchProperties {
}

export type NewInterventionTargetedProperties =
    & NewInterventionTargetedOwnProperties & DashboardRenderProperties
    & NewInterventionTargetedStateProperties
    & NewInterventionTargetedDispatchProperties;


const NewInterventionTargeted: React.FC<NewInterventionTargetedProperties> = (
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


    // #region references
    const rendererID = useRef(Math.random() + '');
    // #endregion references


    // #region state
    const [
        state,
        setState,
    ] = useState<any>(
        JSON.parse(JSON.stringify(fields)),
    );

    const [
        isValid,
        setIsValid,
    ] = useState(false);
    // #endregion state


    // #region render
    return (
        <StyledDashboardContainer
            theme={stateGeneralTheme}
        >
            <StyledNewEntity>
                <h1>
                    New Targeted Intervention
                </h1>

                <NewEntityRenderer
                    id={rendererID.current}
                    fields={state}
                    atChange={(newState) => {
                        setState(newState);
                    }}
                />

                <PluridPureButton
                    text="Add New Targeted Intervention"
                    atClick={() => {
                        console.log(state);
                    }}
                    theme={stateGeneralTheme}
                    level={2}
                    disabled={!isValid}
                />

                <PluridLinkButton
                    text="cancel"
                    atClick={() => {
                        setFullRenderArea(false);
                        setRenderView('interventionsTargeted');
                    }}
                    theme={stateGeneralTheme}
                />
            </StyledNewEntity>
        </StyledDashboardContainer>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): NewInterventionTargetedStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NewInterventionTargetedDispatchProperties => ({
});


const ConnectedNewInterventionTargeted = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(NewInterventionTargeted);
// #endregion module



// #region exports
export default ConnectedNewInterventionTargeted;
// #endregion exports
