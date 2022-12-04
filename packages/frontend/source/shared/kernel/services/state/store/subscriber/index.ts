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
    // #endregion external
// #endregion imports



// #region module
const stateID = 'beso-state';

const loadState = () => {
    try {
        const serializedState = localStorage.getItem(stateID);
        if (serializedState === null) {
            return {};
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return {};
    }
};

const saveState = (state: any) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateID, serializedState);
};


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
