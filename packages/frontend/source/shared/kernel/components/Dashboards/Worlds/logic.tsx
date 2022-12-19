// #region imports
    // #region libraries
    import React from 'react';
    // #endregion libraries
// #endregion imports



// #region module
export const abstractRowRenderer = (
    columns: string[],
    data: any,
    methods: any,
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
                        {new Date(data.generatedAt * 1000).toLocaleString()}
                    </div>
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
