// #region imports
    // #region libraries
    import {
        Store,
    } from 'redux';


    import {
        meta,
    } from '@plurid/plurid-functions';
    // #endregion libraries


    // #region external
    import {
        AppState,
    } from '../reducer';

    import {
        loadState,
        saveState,
    } from '~kernel-services/logic/localStorage';
    // #endregion external
// #endregion imports



// #region module
const subscriber = (
    store: Store<AppState, any>,
) => {
    store.subscribe(
        meta.debounce(
            () => {
                const localState = loadState();
                const currentState = store.getState();

                saveState({
                    ...localState,
                    product: currentState.product,
                    themes: currentState.themes,
                });
            },
            1_000,
        ),
    );
}
// #endregion module



// #region exports
export default subscriber;
// #endregion exports
