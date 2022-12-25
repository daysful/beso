// #region imports
    // #region libraries
    import {
        AnyAction,
        ThunkDispatch,
    } from '@reduxjs/toolkit';

    import {
        DispatchAction,
    } from '@plurid/plurid-ui-state-react';
    // #endregion libraries


    // #region external
    import {
        NewEntityField,
    } from '~kernel-components/NewEntityRenderer/data';

    import graphqlClient from '~kernel-services/graphql/client';

    import {
        BETSE_USER,
    } from '~kernel-services/graphql/query';

    import actions from '~kernel-services/state/actions';
    // #endregion external
// #endregion imports



// #region module
export const extractState = (
    fields: NewEntityField[],
) => {
    const paste = {};

    for (const field of fields) {
        if (field.type === 'group') {
            const groupPaste = extractState(field.value);
            paste[field.state] = groupPaste;
            continue;
        }

        paste[field.state] = field.value;
    }

    return paste;
}


export const mergeDataIntoFields = (
    data: any,
    fields: NewEntityField[],
) => {
    const _fields = JSON.parse(JSON.stringify(fields));

    for (const field of _fields) {
        if (field.type !== 'group') {
            field.value = data[field.state];
            continue;
        }

        field.value = mergeDataIntoFields(
            data[field.state],
            field.value,
        );
    }

    return _fields;
}


export const fetchBetseData = async (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
) => {
    try {
        const dispatchSetData: DispatchAction<typeof actions.data.setData> = (
            payload,
        ) => dispatch(
            actions.data.setData(payload),
        );

        const query = await graphqlClient.query({
            query: BETSE_USER,
        });

        const {
            simulations,
            worlds,
            tissues,
            interventions,
            functions,
            networks,
            biomolecules,
            reactions,
            channels,
            transporters,
            modulators,
        } = query.data.betse;

        dispatchSetData({
            simulations: [],
            worlds,
            tissues,
            globalInterventions: [],
            targetedInterventions: [],
            modulatorFunctions: functions,
            networks,
            biomolecules,
            reactions,
            channels,
            transporters,
            modulators,
        });
    } catch (error) {
        return;
    }
}
// #endregion module
