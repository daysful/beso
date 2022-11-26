// #region imports
    // #region libraries
    import fetch from 'cross-fetch'
    // #endregion libraries


    // #region external
    import {
        BESO_BACKEND,
    } from '~kernel-data/constants';
    // #endregion external
// #endregion imports



// #region module
export const newSimulation = async (
    name?: string,
    betse?: boolean,
    username?: string,
) => {
    try {
        const {
            simulationID,
        } = await (await fetch(
            BESO_BACKEND + '/new',
            {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    betse,
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Beso-Username': username || '',
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
            BESO_BACKEND + `/start?simulationID=${id}`,
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
