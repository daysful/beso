// #region imports
    // #region libraries
    import React, {
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

    import {
        PluridPlaneComponentProperty,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import {
        PluridPureButton,
        PluridInputLine,
        PluridInputSwitch,
    } from '~kernel-services/styled';

    import {
        newSimulation,
        startSimulation,
    } from '~kernel-services/logic/requests';

    import {
        fields,
    } from '~kernel-data/constants/entity/simulation';

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
        StyledSimulation,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface SimulationOwnProperties {
    plurid: PluridPlaneComponentProperty;
}

export interface SimulationStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateIdentonym: string;
    stateSimulations: any[];
}

export interface SimulationDispatchProperties {
}

export type SimulationProperties =
    & SimulationOwnProperties
    & SimulationStateProperties
    & SimulationDispatchProperties;


const Simulation: React.FC<SimulationProperties> = (
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
        stateSimulations,
        // #endregion state
    } = properties;

    const {
        id,
    } = plurid.plane.parameters;

    const simulation = stateSimulations.find(simulation => simulation.id === id);
    // #endregion properties


    // #region render
    if (!simulation) {
        return (<></>);
    }

    return (
        <StyledSimulation>
            <Head />

            <EditEntityComponent
                title={`'${simulation.name}' simulation`}
                fields={mergeDataIntoFields({
                    name: simulation.name,
                    ...simulation['data'],
                }, fields)}
                kind="Simulation"

                onEdit={(state) => {
                }}
                onCancel={() => {
                }}
            />
        </StyledSimulation>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): SimulationStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateIdentonym: selectors.general.getGeneral(state).identonym,
    stateSimulations: selectors.data.getData(state).simulations,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): SimulationDispatchProperties => ({
});


const ConnectedSimulation = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Simulation);
// #endregion module



// #region exports
export default ConnectedSimulation;
// #endregion exports
