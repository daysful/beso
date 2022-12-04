// #region imports
    // #region libraries
    import {
        createSlice,
        PayloadAction,
    } from '@reduxjs/toolkit';
    // #endregion libraries


    // #region external
    import type {
        AppState,
    } from '~kernel-services/state/store';
    // #endregion external
// #endregion imports



// #region module
export interface ProductState {
    ui: any;
    planes: any[];
}


const initialState: ProductState = {
    ui: {
        toolbars: {
            alwaysShow: true,
            location: 50,
            scaleIcons: true,
            showNames: true,
        },
    },
    planes: [],
};


export interface SetProductFieldPayload<T = any> {
    field: string;
    value: T;
}


export const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setDataField: (
            state,
            action: PayloadAction<SetProductFieldPayload>,
        ) => {
            const {
                field,
                value,
            } = action.payload;

            state[field] = value;
        },
        addPlane: (
            state,
        ) => {
            const newPlane = {
                id: Math.random() + '',
            };

            state.planes.push(newPlane);
        },
    },
});
// #endregion module



// #region exports
export const actions = product.actions;


export const getProduct = (state: AppState) => state.product;
export const getProductUI = (state: AppState) => state.product.ui;

export const selectors = {
    getProduct,
    getProductUI,
};


export const reducer = product.reducer;
// #endregion exports
