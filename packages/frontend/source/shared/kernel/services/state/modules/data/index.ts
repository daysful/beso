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
        World,
        Tissue,
        GlobalIntervention,
        TargetedIntervention,
        ModulatorFunction,
        Modulator,
        Network,
        Biomolecule,
        Reaction,
        Channel,
        Transporter,
    } from '~kernel-data/interfaces';

    import type {
        AppState,
    } from '~kernel-services/state/store';
    // #endregion external
// #endregion imports



// #region module
export interface DataState {
    simulations: Simulation[];
    worlds: World[];
    tissues: Tissue[];
    globalInterventions: GlobalIntervention[];
    targetedInterventions: TargetedIntervention[];
    modulatorFunctions: ModulatorFunction[];
    networks: Network[];
    biomolecules: Biomolecule[];
    reactions: Reaction[];
    channels: Channel[];
    transporters: Transporter[];
    modulators: Modulator[];
}


const initialState: DataState = {
    simulations: [],
    worlds: [],
    tissues: [],
    globalInterventions: [],
    targetedInterventions: [],
    modulatorFunctions: [],
    networks: [],
    biomolecules: [],
    reactions: [],
    channels: [],
    transporters: [],
    modulators: [],
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
