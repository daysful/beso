// #region imports
    // #region external
    import {
        BESO_FRONTEND,
    } from '~kernel-data/constants';
    // #endregion external
// #endregion imports



// #region module
export const makeEntitiesData = <T = any>(
    items: T[],
    type: string,
) => {
    return items.map(item => ({
        ...item,
        link: BESO_FRONTEND + `/${type}/${item['id']}`,
        pluridlink: `/${type}/${item['id']}`,
    }));
}
// #endregion module
