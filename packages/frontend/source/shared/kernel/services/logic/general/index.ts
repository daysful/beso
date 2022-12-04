// #region imports
    // #region libraries
    import { AnyAction } from 'redux';
    import { ThunkDispatch } from 'redux-thunk';


    import {
        uuid,
    } from '@plurid/plurid-functions';

    import {
        DispatchAction,
    } from '@plurid/plurid-ui-state-react';
    // #endregion libraries


    // #region external
    import actions from '~kernel-services/state/actions';
    // #endregion external
// #endregion imports



// #region module
export const addNewPlane = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
    const dispatchAddPlane: DispatchAction<typeof actions.product.addPlane> = (
        payload,
    ) => dispatch(
        actions.product.addPlane(payload),
    );

    const id = uuid.multiple();
    dispatchAddPlane(id);

    return {
        id,
        plane: `/index/${id}`,
    };
}
// #endregion module
