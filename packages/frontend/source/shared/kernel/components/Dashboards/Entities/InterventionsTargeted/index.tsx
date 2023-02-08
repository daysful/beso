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
        TargetedIntervention,
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

    import InterventionsSelector from '~kernel-components/InterventionsSelector';

    import {
        makeEntitiesData,
        abstractRowRenderer,
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
export interface InterventionsTargetedOwnProperties {
}

export interface InterventionsTargetedStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateTargetedInterventions: TargetedIntervention[];
}

export interface InterventionsTargetedDispatchProperties {
    dispatchRemoveDataEntity: DispatchAction<typeof actions.data.removeDataEntity>;
}

export type InterventionsTargetedProperties =
    & InterventionsTargetedOwnProperties & DashboardRenderProperties
    & InterventionsTargetedStateProperties
    & InterventionsTargetedDispatchProperties;


const InterventionsTargeted: React.FC<InterventionsTargetedProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        renderView,
        setRenderView,
        setFullRenderArea,
        // #endregion own

        // #region state
        stateGeneralTheme,
        stateInteractionTheme,
        stateTargetedInterventions,
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
                type: 'targetedInterventions',
                id,
            });

            await graphqlClient.mutate({
                mutation: BETSE_MUTATIONS.REMOVE_BETSE_TARGETED_INTERVENTION,
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


    // #region handlers
    const toggleInterventions = () => {
        if (renderView === 'interventionsTargeted') {
            setRenderView('interventionsGlobal');
        } else {
            setRenderView('interventionsTargeted');
        }
    }
    // #endregion handlers


    // #region render
    return (
        <StyledDashboardContainer
            theme={stateGeneralTheme}
        >
            <InterventionsSelector
                targeted={renderView === 'interventionsTargeted'}
                toggleInterventions={toggleInterventions}
            />

            <EntityView
                ref={entityView}

                entities={makeEntitiesData(stateTargetedInterventions, 'intervention')}
                searchFields={['name']}

                generalTheme={stateGeneralTheme}
                interactionTheme={stateInteractionTheme}

                rowTemplate={rowTemplate}
                rowsHeader={rowsHeader}
                noRows="no targeted interventions"

                abstractRowRenderer={abstractRowRenderer}
                rowRenderFields={rowRenderFields}
                rowRenderMethods={{
                    handleObliterate,
                }}

                loading={loading ? 1 : 0}

                filterUpdate={filterUpdate}
                refresh={() => {
                }}

                actionButtonText="New Targeted Intervention"
                actionButtonClick={() => {
                    setFullRenderArea(true);
                    setRenderView('new-interventionTargeted');
                }}

                actionScrollBottom={actionScrollBottom}
            />
        </StyledDashboardContainer>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): InterventionsTargetedStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateTargetedInterventions: selectors.data.getData(state).targetedInterventions,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): InterventionsTargetedDispatchProperties => ({
    dispatchRemoveDataEntity: (
        payload,
    ) => dispatch(
        actions.data.removeDataEntity(payload),
    ),
});


const ConnectedInterventionsTargeted = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(InterventionsTargeted);
// #endregion module



// #region exports
export default ConnectedInterventionsTargeted;
// #endregion exports
