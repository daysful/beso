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
        Reaction,
    } from '~kernel-data/interfaces';

    import {
        fields,
    } from '~kernel-data/constants/entity/reaction';

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
        StyledReaction,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface ReactionOwnProperties {
    plurid: PluridPlaneComponentProperty;
}

export interface ReactionStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateReactions: Reaction[];
}

export interface ReactionDispatchProperties {
}

export type ReactionProperties =
    & ReactionOwnProperties
    & ReactionStateProperties
    & ReactionDispatchProperties;


const Reaction: React.FC<ReactionProperties> = (
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
        stateReactions,
        // #endregion state
    } = properties;

    const {
        id,
    } = plurid.plane.parameters;

    const reaction = stateReactions.find(reaction => reaction.id === id);
    // #endregion properties


    // #region render
    if (!reaction) {
        return (<></>);
    }

    return (
        <StyledReaction
            theme={stateGeneralTheme}
        >
            <Head />

            <EditEntityComponent
                title={`'${reaction.name}' reaction`}
                fields={mergeDataIntoFields(reaction['data'], fields)}
                kind="Reaction"

                onEdit={(state) => {
                }}
                onCancel={() => {
                }}
            />
        </StyledReaction>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ReactionStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateReactions: selectors.data.getData(state).reactions,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ReactionDispatchProperties => ({
});


const ConnectedReaction = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Reaction);
// #endregion module



// #region exports
export default ConnectedReaction;
// #endregion exports
