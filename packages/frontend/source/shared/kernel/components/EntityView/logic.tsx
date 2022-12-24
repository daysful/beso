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


    // #region external
    import {
        PluridCopyableLine,
    } from '~kernel-services/styled';
    // #endregion external
// #endregion imports



// #region module
export const createSearchTerms = (
    rows: any[],
    fields: string[],
) => (rows.map(
    (entity) => {
        const {
            id,
        } = entity;

        const data: string[] = [];

        for (const field of fields) {
            const term = entity[field];

            if (term && typeof term === 'string') {
                data.push(
                    term.toLowerCase().trim(),
                );
            }
        }

        return {
            id,
            data,
        };
    },
));


export const abstractRowRenderer = (
    columns: string[],
    data: Record<string, any>,
    methods: Record<string, any>,
) => {
    const renderColumns: JSX.Element[] = [];

    for (const column of columns) {
        switch (column) {
            case 'link':
                renderColumns.push(
                    <PluridCopyableLine
                        key={Math.random() + ''}
                        data={data.link}
                        viewData=" "
                        copyMessage=" "
                    />
                );
                break;
            case 'name':
                renderColumns.push(
                    <div
                        key={Math.random() + ''}
                    >
                        {data.name}
                    </div>
                );
                break;
            case 'generatedAt':
                renderColumns.push(
                    <div
                        key={Math.random() + ''}
                    >
                        {new Date(data.generated_at * 1_000).toLocaleString()}
                    </div>
                );
                break;
            case 'lastRun':
                renderColumns.push(
                    <div
                        key={Math.random() + ''}
                    >
                        {new Date(data.last_run).toLocaleString()}
                    </div>
                );
                break;
            case 'pluridlink':
                renderColumns.push(
                    <PluridLink
                        key={Math.random() + ''}
                        route={data.pluridlink}
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
                );
                break;
            case 'obliterate':
                renderColumns.push(
                    <PluridIconDelete
                        key={Math.random() + ''}
                        atClick={() => methods.handleObliterate(data.id)}
                    />
                );
                break;
        }
    }

    return (
        <>
            {renderColumns}
        </>
    );
}
// #endregion module
