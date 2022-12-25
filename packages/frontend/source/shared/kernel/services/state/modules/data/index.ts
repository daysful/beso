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

export interface RemoveDataEntityPayload {
    type: keyof DataState;
    id: string;
}


export const data = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (
            state,
            action: PayloadAction<any>,
        ) => {
            state.simulations = action.payload.simulations || state.simulations;
            state.worlds = action.payload.worlds || state.worlds;
            state.tissues = action.payload.tissues || state.tissues;
            state.globalInterventions = action.payload.globalInterventions || state.globalInterventions;
            state.targetedInterventions = action.payload.targetedInterventions || state.targetedInterventions;
            state.modulatorFunctions = action.payload.modulatorFunctions || state.modulatorFunctions;
            state.networks = action.payload.networks || state.networks;
            state.biomolecules = action.payload.biomolecules || state.biomolecules;
            state.reactions = action.payload.reactions || state.reactions;
            state.channels = action.payload.channels || state.channels;
            state.transporters = action.payload.transporters || state.transporters;
            state.modulators = action.payload.modulators || state.modulators;
        },
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
        removeDataEntity: (
            state,
            action: PayloadAction<RemoveDataEntityPayload>,
        ) => {
            const {
                id,
                type,
            } = action.payload;

            (state as any)[type] = state[type].filter((entity: any) => entity.id !== id);
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
