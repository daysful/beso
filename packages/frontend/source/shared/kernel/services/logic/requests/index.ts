// #region imports
    // #region libraries
    import fetch from 'cross-fetch'
    // #endregion libraries


    // #region external
    import {
        BETEKS_BACKEND,
    } from '~kernel-data/constants';
    // #endregion external
// #endregion imports



// #region module
export const newSimulation = async (
    name?: string,
    betse?: boolean,
) => {
    try {
        const {
            simulationID,
        } = await (await fetch(
            BETEKS_BACKEND + '/new',
            {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    betse,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )).json();

        return simulationID;
    } catch (error) {
        return;
    }
}


export const startSimulation = async (
    id: string,
) => {
    try {
        await fetch(
            BETEKS_BACKEND + `/start?simulationID=${id}`,
            {
                method: 'POST',
            },
        );

        return true;
    } catch (error) {
        return;
    }
}
// #endregion module
