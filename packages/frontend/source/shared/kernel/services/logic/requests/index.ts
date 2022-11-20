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
export const newSimulation = async () => {
    try {
        const {
            simulationID,
        } = await (await fetch(
            BETEKS_BACKEND + '/new',
            {
                method: 'POST',
                body: JSON.stringify({
                    name: 'new_sim',
                    betse: true,
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
// #endregion module
