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
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import besoLogo from '../../assets/beso-logo.png';

    import DashboardsRenderer from '~kernel-components/DashboardsRenderer';

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
        StyledIndex,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface IndexOwnProperties {
    plurid: PluridPlaneComponentProperty;
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
        // #region own
        plurid,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        stateIdentonym,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledIndex
            theme={stateGeneralTheme}
        >
            <DashboardsRenderer
                dashboards={dashboards}
                theme={stateGeneralTheme}

                activeRender="simulations"
                rendererID={plurid.plane.planeID}
                identonym={stateIdentonym}
                // usageType="PRIVATE_USAGE"
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
            />
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
