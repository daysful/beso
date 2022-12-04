// #region imports
    // #region libraries
    import {
        configureStore,
        Store,
    } from '@reduxjs/toolkit';
    // #endregion libraries


    // #region external
    import reducer, {
        AppState,
    } from '../reducer';

    import subscriber from '../subscriber';
    // #endregion external
// #endregion imports



// #region module
const store: (
    preloadedState: AppState | {},
) => Store<AppState> = (
    preloadedState: AppState | {},
) => {
    const internalStore = configureStore({
        preloadedState,
        reducer,
        devTools: true,
    });

    internalStore.subscribe(() => subscriber((internalStore)));

    return internalStore;
}


export type AppDispatch = ReturnType<typeof store>['dispatch'];
// #endregion module



// #region exports
export default store;
// #endregion exports
