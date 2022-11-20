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
    } from '~kernel-services/logic/requests';
    // #endregion external


    // #region internal
    import {
        StyledPage,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
const Page: PluridReactComponent<{}> = (
    properties,
) => {
    // #region properties
    // const {
    //     plurid,
    // } = properties;
    // #endregion properties


    // #region state
    const [
        name,
        setName,
    ] = useState('');

    const [
        betse,
        setBetse,
    ] = useState(true);
    // #endregion state


    // #region render
    return (
        <StyledPage>
            beteks

            <PluridInputLine
                name="name"
                text={name}
                atChange={(event) => setName(event.target.value)}
            />

            <PluridInputSwitch
                name="betse"
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
                }}
                style={{
                    marginTop: '2rem',
                }}
            />
        </StyledPage>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default Page;
// #endregion exports
