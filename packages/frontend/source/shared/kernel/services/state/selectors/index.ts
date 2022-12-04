// #region imports
    // #region external
    import modules from '../modules';
    // #endregion external
// #endregion imports



// #region module
const selectors = {
    data: modules.data.selectors,
    general: modules.general.selectors,
    // FORCE prevent Toolbar/Spaces error
    owner: {
        getIdentonym: () => '',
    },
    product: modules.product.selectors,
    themes: modules.themes.selectors,
};
// #endregion module



// #region exports
export default selectors;
// #endregion exports
