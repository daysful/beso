// #region imports
    // #region libraries
    import React from 'react';
    // #endregion libraries
// #endregion imports



// #region module
export const worldRowRenderer = (
    world: any,
    handleObliterate: any,
) => {
    const {
        name,
        generatedAt,
    } = world;

    return (<>
        <div>
            {name}
        </div>

        <div>
            {new Date(generatedAt * 1000).toLocaleString()}
        </div>

        <div />
    </>);
}
// #endregion module
