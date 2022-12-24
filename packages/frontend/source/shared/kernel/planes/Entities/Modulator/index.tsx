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
        Modulator,
    } from '~kernel-data/interfaces';

    import {
        fields,
    } from '~kernel-data/constants/entity/transporter';

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
        StyledModulator,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface ModulatorOwnProperties {
    plurid: PluridPlaneComponentProperty;
}

export interface ModulatorStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateModulators: Modulator[];
}

export interface ModulatorDispatchProperties {
}

export type ModulatorProperties =
    & ModulatorOwnProperties
    & ModulatorStateProperties
    & ModulatorDispatchProperties;


const Modulator: React.FC<ModulatorProperties> = (
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
        stateModulators,
        // #endregion state
    } = properties;

    const {
        id,
    } = plurid.plane.parameters;

    const modulator = stateModulators.find(modulator => modulator.id === id);
    // #endregion properties


    // #region render
    if (!modulator) {
        return (<></>);
    }

    return (
        <StyledModulator
            theme={stateGeneralTheme}
        >
            <Head />

            <EditEntityComponent
                title={`'${modulator.name}' modulator`}
                fields={mergeDataIntoFields(modulator['data'], fields)}
                kind="Modulator"

                onEdit={(state) => {
                }}
                onCancel={() => {
                }}
            />
        </StyledModulator>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ModulatorStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateModulators: selectors.data.getData(state).modulators,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ModulatorDispatchProperties => ({
});


const ConnectedModulator = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Modulator);
// #endregion module



// #region exports
export default ConnectedModulator;
// #endregion exports
