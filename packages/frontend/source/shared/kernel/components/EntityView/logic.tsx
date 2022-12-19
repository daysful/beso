// #region imports
    // #region libraries
    import React from 'react';
    // #endregion libraries
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
                        {new Date(data.generatedAt * 1_000).toLocaleString()}
                    </div>
                );
                break;
            case 'obliterate':
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
