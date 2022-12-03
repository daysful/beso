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
}

export interface SimulationStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateIdentonym: string;
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
        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        stateIdentonym,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region state
    const [
        loading,
        setLoading,
    ] = useState(false);

    const [
        name,
        setName,
    ] = useState('');

    const [
        betse,
        setBetse,
    ] = useState(true);

    const [
        simulationID,
        setSimulationID,
    ] = useState('');
    // #endregion state


    // #region render
    if (simulationID) {
        return (
            <StyledSimulation>
                <PluridPureButton
                    text={`Start Simulation '${name}'`}
                    atClick={async () => {
                        await startSimulation(simulationID);
                    }}
                />
            </StyledSimulation>
        );
    }

    return (
        <StyledSimulation>
            <h1>
                beso
            </h1>

            <h2>
                BioElectric Simulation Orchestrator
            </h2>

            <PluridInputLine
                name="new simulation name"
                text={name}
                atChange={(event) => setName(event.target.value)}
            />

            <PluridInputSwitch
                name="use BETSE"
                checked={betse}
                atChange={() => setBetse(value => !value)}
            />

            <PluridPureButton
                text="New Simulation"
                atClick={async () => {
                    const id = await newSimulation(
                        name,
                        betse,
                        stateIdentonym,
                    );
                    if (id) {
                        setSimulationID(id);

                        if (!name) {
                            setName(id);
                        }
                    }
                }}
                style={{
                    marginTop: '2rem',
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
