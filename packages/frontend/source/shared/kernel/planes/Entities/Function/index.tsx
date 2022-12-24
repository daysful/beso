// #region imports
    // #region libraries
    import React from 'react';

    import {
        AnyAction,
        ThunkDispatch,
    } from '@reduxjs/toolkit';
    import { connect } from 'react-redux';

    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        PluridPlaneComponentProperty,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import {
        ModulatorFunction,
    } from '~kernel-data/interfaces';

    import {
        fields,
    } from '~kernel-data/constants/entity/function';

    import Head from '~kernel-components/Head';
    import EditEntityComponent from '~kernel-components/EditEntityComponent';

    import {
        mergeDataIntoFields,
    } from '~kernel-services/logic/betse';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledFunction,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface FunctionOwnProperties {
    plurid: PluridPlaneComponentProperty;
}

export interface FunctionStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateFunctions: ModulatorFunction[];
}

export interface FunctionDispatchProperties {
}

export type FunctionProperties =
    & FunctionOwnProperties
    & FunctionStateProperties
    & FunctionDispatchProperties;


const Function: React.FC<FunctionProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        plurid,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        stateFunctions,
        // #endregion state
    } = properties;

    const {
        id,
    } = plurid.plane.parameters;

    const modulatorFunction = stateFunctions.find(modulatorFunction => modulatorFunction.id === id);
    // #endregion properties


    // #region render
    if (!modulatorFunction) {
        return (<></>);
    }

    return (
        <StyledFunction
            theme={stateGeneralTheme}
        >
            <Head />

            <EditEntityComponent
                title={`'${modulatorFunction.name}' function`}
                fields={mergeDataIntoFields(modulatorFunction['data'], fields)}
                kind="Function"

                onEdit={(state) => {
                }}
                onCancel={() => {
                }}
            />
        </StyledFunction>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): FunctionStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateFunctions: selectors.data.getData(state).modulatorFunctions,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): FunctionDispatchProperties => ({
});


const ConnectedFunction = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Function);
// #endregion module



// #region exports
export default ConnectedFunction;
// #endregion exports
