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
        Tissue,
    } from '~kernel-data/interfaces';

    import {
        fields,
    } from '~kernel-data/constants/entity/tissue';

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
        StyledTissue,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface TissueOwnProperties {
    plurid: PluridPlaneComponentProperty;
}

export interface TissueStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateTissues: Tissue[];
}

export interface TissueDispatchProperties {
}

export type TissueProperties =
    & TissueOwnProperties
    & TissueStateProperties
    & TissueDispatchProperties;


const Tissue: React.FC<TissueProperties> = (
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
        stateTissues,
        // #endregion state
    } = properties;

    const {
        id,
    } = plurid.plane.parameters;

    const tissue = stateTissues.find(tissue => tissue.id === id);
    // #endregion properties


    // #region render
    if (!tissue) {
        return (<></>);
    }

    return (
        <StyledTissue
            theme={stateGeneralTheme}
        >
            <Head />

            <EditEntityComponent
                title={`'${tissue.name}' tissue`}
                fields={mergeDataIntoFields(tissue['data'], fields)}
                kind="Tissue"

                onEdit={(state) => {
                }}
                onCancel={() => {
                }}
            />
        </StyledTissue>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): TissueStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateTissues: selectors.data.getData(state).tissues,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): TissueDispatchProperties => ({
});


const ConnectedTissue = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Tissue);
// #endregion module



// #region exports
export default ConnectedTissue;
// #endregion exports
