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
        Transporter,
    } from '~kernel-data/interfaces';

    import {
        fields,
    } from '~kernel-data/constants/entity/transporter';

    import Head from '~kernel-components/Head';
    import EditEntityComponent from '~kernel-components/EditEntityComponent';

    import {
        mergeDataIntoFields,
    } from '~kernel-services/logic/betse';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledTransporter,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface TransporterOwnProperties {
    plurid: PluridPlaneComponentProperty;
}

export interface TransporterStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateTransporters: Transporter[];
}

export interface TransporterDispatchProperties {
}

export type TransporterProperties =
    & TransporterOwnProperties
    & TransporterStateProperties
    & TransporterDispatchProperties;


const Transporter: React.FC<TransporterProperties> = (
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
        stateTransporters,
        // #endregion state
    } = properties;

    const {
        id,
    } = plurid.plane.parameters;

    const transporter = stateTransporters.find(transporter => transporter.id === id);
    // #endregion properties


    // #region render
    if (!transporter) {
        return (<></>);
    }

    return (
        <StyledTransporter
            theme={stateGeneralTheme}
        >
            <Head />

            <EditEntityComponent
                title={`'${transporter.name}' transporter`}
                fields={mergeDataIntoFields(transporter['data'], fields)}
                kind="Transporter"

                onEdit={(state) => {
                }}
                onCancel={() => {
                }}
            />
        </StyledTransporter>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): TransporterStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateTransporters: selectors.data.getData(state).transporters,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): TransporterDispatchProperties => ({
});


const ConnectedTransporter = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Transporter);
// #endregion module



// #region exports
export default ConnectedTransporter;
// #endregion exports
