// #region imports
    // #region libraries
    import React from 'react';

    import {
        PluridIconDelete,
        PluridIconInfo,
    } from '@plurid/plurid-icons-react';

    import {
        PluridLink,
    } from '@plurid/plurid-react';
    // #endregion libraries
// #endregion imports



// #region module
export const simulationRowRenderer = (
    simulation: any,
    handleRecordObliterate: (
        id: string,
    ) => void,
) => {
    const {
        id,
        name,
        generatedAt,
        lastRun,
    } = simulation;

    return (
        <>
            <div>
                {name}
            </div>

            <div>
                {new Date(generatedAt).toLocaleString()}
            </div>

            <div>
                {new Date(lastRun).toLocaleString()}
            </div>

            <PluridLink
                route={`/simulation/${id}`}
                devisible={true}
                style={{
                    display: 'grid',
                    placeContent: 'center',
                }}
            >
                <PluridIconInfo
                    atClick={() => {}}
                />
            </PluridLink>

            <PluridIconDelete
                atClick={() => handleRecordObliterate(id)}
            />
        </>
    );
}


export const createSearchTerms = (
    simulations: any[],
) => {
    const searchTerms = simulations.map(
        simulation => {
            const {
                id,
                name,
            } = simulation;

            const searchTerm = {
                id,
                data: [
                    name.toLowerCase(),
                ],
            };

            return searchTerm;
        },
    );

    return searchTerms;
}
// #endregion module
