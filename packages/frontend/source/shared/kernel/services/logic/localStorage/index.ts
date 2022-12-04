// #region module
const stateID = 'beso-state';

export const loadState = () => {
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

export const saveState = (state: any) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateID, serializedState);
};
// #endregion module
