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


export const createSearchTermsGeneric = (
    data: any[],
    fields: string[],
) => {
    const searchTerms = data.map(
        entity => {
            const {
                id,
            } = entity;

            const termData: string[] = [];

            for (const field of fields) {
                const term = entity[field];

                if (term && typeof term === 'string') {
                    termData.push(term.toLowerCase());
                }
            }

            const searchTerm = {
                id,
                data: termData,
            };

            return searchTerm;
        },
    );

    return searchTerms;
}


export const createSearchTerms = (
    simulations: any[],
) => createSearchTermsGeneric(simulations, ['name']);
// #endregion module
