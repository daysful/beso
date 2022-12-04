// #region imports
    // #region libraries
    import {
        createSlice,
        PayloadAction,
    } from '@reduxjs/toolkit';
    // #endregion libraries


    // #region external
    import {
        Simulation,
    } from '~kernel-data/interfaces';

    import type {
        AppState,
    } from '~kernel-services/state/store';
    // #endregion external
// #endregion imports



// #region module
export interface DataState {
    simulations: Simulation[];
    worlds: any[];
    tissues: any[];
    globalInterventions: any[];
    targetedInterventions: any[];
    modulators: any[];
    networks: any[];
    biomolecules: any[];
    reactions: any[];
    channels: any[];
}


const initialState: DataState = {
    simulations: [],
    worlds: [],
    tissues: [],
    globalInterventions: [],
    targetedInterventions: [],
    modulators: [],
    networks: [],
    biomolecules: [],
    reactions: [],
    channels: [],
};


export interface SetDataFieldPayload<T = any> {
    field: string;
    value: T;
}


export const data = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setDataField: (
            state,
            action: PayloadAction<SetDataFieldPayload>,
        ) => {
            const {
                field,
                value,
            } = action.payload;

            state[field] = value;
        },
    },
});
// #endregion module



// #region exports
export const actions = data.actions;


export const getData = (state: AppState) => state.data;

export const selectors = {
    getData,
};


export const reducer = data.reducer;
// #endregion exports
