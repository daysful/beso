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
        GlobalIntervention,
        TargetedIntervention,
    } from '~kernel-data/interfaces';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledIntervention,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface InterventionOwnProperties {
    plurid: PluridPlaneComponentProperty;
}

export interface InterventionStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateGlobalInterventions: GlobalIntervention[];
    stateTargetedInterventions: TargetedIntervention[];
}

export interface InterventionDispatchProperties {
}

export type InterventionProperties =
    & InterventionOwnProperties
    & InterventionStateProperties
    & InterventionDispatchProperties;


const Intervention: React.FC<InterventionProperties> = (
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
        stateGlobalInterventions,
        stateTargetedInterventions,
        // #endregion state
    } = properties;

    const {
        id,
    } = plurid.plane.parameters;

    const intervention = stateGlobalInterventions.find(intervention => intervention.id === id)
        || stateTargetedInterventions.find(intervention => intervention.id === id);
    // #endregion properties


    // #region render
    if (!intervention) {
        return (<></>);
    }

    return (
        <StyledIntervention
            theme={stateGeneralTheme}
        >
            <h1>
                '{intervention.name}' intervention
            </h1>
        </StyledIntervention>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): InterventionStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateGlobalInterventions: selectors.data.getData(state).globalInterventions,
    stateTargetedInterventions: selectors.data.getData(state).targetedInterventions,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): InterventionDispatchProperties => ({
});


const ConnectedIntervention = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Intervention);
// #endregion module



// #region exports
export default ConnectedIntervention;
// #endregion exports
