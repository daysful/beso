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
    handleObliterate: (
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
                atClick={() => handleObliterate(id)}
            />
        </>
    );
}
// #endregion module
