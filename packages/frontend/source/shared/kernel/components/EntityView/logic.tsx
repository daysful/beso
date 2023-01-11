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


export const renderDate = (
    value: any,
) => {
    if (!value) {
        return '';
    }

    return new Date(value * 1_000).toLocaleString();
}


export const abstractRowRenderer = (
    columns: string[],
    data: Record<string, any>,
    methods: Record<string, any>,
) => {
    const renderColumns: JSX.Element[] = [];

    for (const column of columns) {
        const key = Math.random() + '';

        switch (column) {
            case 'link':
                renderColumns.push(
                    <PluridCopyableLine
                        key={key}
                        data={data.link}
                        viewData=" "
                        copyMessage=" "
                    />
                );
                break;
            case 'name':
                renderColumns.push(
                    <div
                        key={key}
                    >
                        {data.name}
                    </div>
                );
                break;
            case 'generatedAt':
                renderColumns.push(
                    <div
                        key={key}
                    >
                        {renderDate(data.generated_at)}
                    </div>
                );
                break;
            case 'lastRun':
                renderColumns.push(
                    <div
                        key={key}
                    >
                        {renderDate(data.last_run)}
                    </div>
                );
                break;
            case 'pluridlink':
                renderColumns.push(
                    <PluridLink
                        key={key}
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
                        key={key}
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
