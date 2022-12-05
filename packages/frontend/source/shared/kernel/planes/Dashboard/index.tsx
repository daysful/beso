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
        DispatchAction,
    } from '@plurid/plurid-ui-state-react';

    import {
        PluridPlaneComponentProperty,
        PLURID_PUBSUB_TOPIC,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import besoLogo from '../../assets/beso-logo.png';

    import DashboardsRenderer from '~kernel-components/DashboardsRenderer';

    import {
        logout as logoutLogic,
    } from '~kernel-services/logic/general';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        dashboards,
    } from './data';

    import {
        StyledDashboard,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface DashboardOwnProperties {
    plurid: PluridPlaneComponentProperty;
}

export interface DashboardStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateIdentonym: string;
    stateCompactSelectors: boolean;
}

export interface DashboardDispatchProperties {
    dispatchSetGeneralField: DispatchAction<typeof actions.general.setGeneralField>;
    dispatchSetCompactSelectors: DispatchAction<typeof actions.product.setCompactSelectors>;
}

export type DashboardProperties =
    & DashboardOwnProperties
    & DashboardStateProperties
    & DashboardDispatchProperties;


const Dashboard: React.FC<DashboardProperties> = (
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
        stateIdentonym,
        stateCompactSelectors,
        // #endregion state

        // #region dispatch
        dispatchSetCompactSelectors,
        // #endregion dispatch
    } = properties;

    const {
        activeDashboard,
        activeRender,
        fullRenderArea,
    } = plurid.plane.query;
    // #endregion properties


    // #region handlers
    const logout = () => {
        plurid.pubSub.publish({
            topic: PLURID_PUBSUB_TOPIC.VIEW_SET_PLANES,
            data: {
                view: [ '/login' ],
            },
        });

        logoutLogic();
    }
    // #endregion handlers


    // #region render
    return (
        <StyledDashboard
            theme={stateGeneralTheme}
        >
            <DashboardsRenderer
                dashboards={dashboards}
                theme={stateGeneralTheme}

                activeDashboard={activeDashboard || 'simulations'}
                activeRender={activeRender}
                fullRenderArea={typeof fullRenderArea === 'undefined' ? undefined : fullRenderArea === 'true'}
                // activeDashboard={'worlds'}
                // activeRender="new-world"
                // fullRenderArea={true}
                compactSelectors={stateCompactSelectors}
                rendererID={plurid.plane.planeID}
                identonym={stateIdentonym}
                usageType="PRIVATE_USAGE"
                brandingName="beso"
                brandingNameStyle={{
                    textTransform: 'uppercase',
                    fontWeight: 'bolder',
                }}
                brandingLogo={besoLogo}
                noDashboardRender={<>select a dashboard</>}

                atDashboardChange={(newDashboard: string) => {}}
                openManual={() => {
                    window.open('https://github.com/daysful/beso', '_blank');
                }}

                logout={logout}

                atUIChange={(
                    type,
                    value,
                ) => {
                    if (type === 'compactSelectors') {
                        dispatchSetCompactSelectors(value);
                    }
                }}
            />
        </StyledDashboard>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): DashboardStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateIdentonym: selectors.general.getGeneral(state).identonym,
    stateCompactSelectors: selectors.product.getProductUI(state).compactSelectors,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): DashboardDispatchProperties => ({
    dispatchSetGeneralField: (
        payload,
    ) => dispatch(
        actions.general.setGeneralField(payload),
    ),
    dispatchSetCompactSelectors: (
        payload,
    ) => dispatch(
        actions.product.setCompactSelectors(payload),
    ),
});


const ConnectedDashboard = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Dashboard);
// #endregion module



// #region exports
export default ConnectedDashboard;
// #endregion exports
