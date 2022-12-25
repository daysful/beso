// #region imports
    // #region libraries
    import React, {
        useRef,
        useState,
    } from 'react';

    import {
        AnyAction,
        ThunkDispatch,
    } from '@reduxjs/toolkit';
    import { connect } from 'react-redux';


    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        DispatchAction,
    } from '@plurid/plurid-ui-state-react';
    // #endregion libraries


    // #region external
    import {
        Reaction,
    } from '~kernel-data/interfaces';

    import {
        rowsHeader,
        rowTemplate,
        rowRenderFields,
    } from '~kernel-data/constants';

    import {
        DashboardRenderProperties,
    } from '~kernel-components/DashboardsRenderer/data';

    import EntityView, {
        EntityViewRefAttributes,
    } from '~kernel-components/EntityView';

    import {
        StyledDashboardContainer,
    } from '~kernel-services/styled';

    import {
        makeEntitiesData,
    } from '~kernel-services/logic/entities';

    import graphqlClient from '~kernel-services/graphql/client';

    import {
        BETSE_MUTATIONS,
    } from '~kernel-services/graphql/mutate/betse';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    // #endregion internal
// #endregion imports



// #region module
export interface ReactionsOwnProperties {
}

export interface ReactionsStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateReactions: Reaction[];
}

export interface ReactionsDispatchProperties {
    dispatchRemoveDataEntity: DispatchAction<typeof actions.data.removeDataEntity>;
}

export type ReactionsProperties =
    & ReactionsOwnProperties & DashboardRenderProperties
    & ReactionsStateProperties
    & ReactionsDispatchProperties;


const Reactions: React.FC<ReactionsProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        setRenderView,
        setFullRenderArea,
        // #endregion own

        // #region state
        stateGeneralTheme,
        stateInteractionTheme,
        stateReactions,
        // #endregion state

        // #region dispatch
        dispatchRemoveDataEntity,
        // #endregion dispatch
    } = properties;
    // #endregion properties


    // #region references
    const entityView = useRef<EntityViewRefAttributes | null>(null);
    // #endregion references


    // #region handlers
    const handleObliterate = async (
        id: string,
    ) => {
        try {
            dispatchRemoveDataEntity({
                type: 'reactions',
                id,
            });

            await graphqlClient.mutate({
                mutation: BETSE_MUTATIONS.REMOVE_BETSE_REACTION,
                variables: {
                    input: id,
                },
            });
        } catch (error) {
            return;
        }
    }

    const filterUpdate = (
        rawValue: string,
    ) => {
    }

    const actionScrollBottom = async (
        data: any[],
    ) => {
    }
    // #endregion handlers


    // #region state
    const [
        loading,
        setLoading,
    ] = useState(false);

    const [
        filterValue,
        setFilterValue,
    ] = useState('');

    const [
        filterIDs,
        setFilterIDs,
    ] = useState<string[]>([]);
    // #endregion state


    // #region render
    return (
        <StyledDashboardContainer
            theme={stateGeneralTheme}
        >
            <EntityView
                ref={entityView}

                entities={makeEntitiesData(stateReactions, 'reaction')}
                searchFields={['name']}

                generalTheme={stateGeneralTheme}
                interactionTheme={stateInteractionTheme}

                rowTemplate={rowTemplate}
                rowsHeader={rowsHeader}
                noRows="no reactions"

                rowRenderFields={rowRenderFields}
                rowRenderMethods={{
                    handleObliterate,
                }}

                loading={loading ? 1 : 0}

                filterUpdate={filterUpdate}
                refresh={() => {
                }}

                actionButtonText="New Reaction"
                actionButtonClick={() => {
                    setFullRenderArea(true);
                    setRenderView('new-reaction');
                }}

                actionScrollBottom={actionScrollBottom}
            />
        </StyledDashboardContainer>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ReactionsStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateReactions: selectors.data.getData(state).reactions,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ReactionsDispatchProperties => ({
    dispatchRemoveDataEntity: (
        payload,
    ) => dispatch(
        actions.data.removeDataEntity(payload),
    ),
});


const ConnectedReactions = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Reactions);
// #endregion module



// #region exports
export default ConnectedReactions;
// #endregion exports
