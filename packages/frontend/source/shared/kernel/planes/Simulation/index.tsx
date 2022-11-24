// #region imports
    // #region libraries
    import React, {
        useState,
    } from 'react';

    import {
        PluridReactComponent,
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
    // #endregion external


    // #region internal
    import {
        StyledSimulation,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
const Simulation: PluridReactComponent<{}> = (
    properties,
) => {
    // #region properties
    // const {
    //     plurid,
    // } = properties;
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
                beteks
            </h1>

            <h2>
                BioElectrical Tissue Simulator
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
// #endregion module



// #region exports
export default Simulation;
// #endregion exports
