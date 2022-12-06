// #region imports
    // #region libraries
    import {
        createSlice,
        PayloadAction,
    } from '@reduxjs/toolkit';
    // #endregion libraries


    // #region external
    import {
        PasteLanguage,
    } from '~kernel-data/interfaces';

    import {
        getRandomFace,
    } from '~kernel-planes/NotFound/logic';

    import type {
        AppState,
    } from '~kernel-services/state/store';
    // #endregion external
// #endregion imports



// #region module
export interface GeneralState {
    notFoundFace: string;
    identonym: string;
    allowUserRegistration: boolean;
    pasteLanguage: PasteLanguage;
}


export const initialState: GeneralState = {
    notFoundFace: getRandomFace(),
    identonym: '',
    allowUserRegistration: true,
    pasteLanguage: 'yaml',
};


export interface SetGeneralFieldPayload<T = any> {
    field: keyof GeneralState;
    value: T;
}


export const general = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setGeneralField: (
            state,
            action: PayloadAction<SetGeneralFieldPayload>,
        ) => {
            const {
                field,
                value,
            } = action.payload;

            (state as any)[field] = value;
        },
    },
});
// #endregion module



// #region exports
export const actions = general.actions;


export const getGeneral = (state: AppState) => state.general;
export const getNotFoundFace = (state: AppState) => state.general.notFoundFace;

export const selectors = {
    getGeneral,
    getNotFoundFace,
};


export const reducer = general.reducer;
// #endregion exports
