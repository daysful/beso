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
        Simulation,
    } from '~kernel-data/interfaces';

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
// #endregion imports



// #region module
export interface SimulationsOwnProperties {
}

export interface SimulationsStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateSimulations: Simulation[];
}

export interface SimulationsDispatchProperties {
    dispatchRemoveDataEntity: DispatchAction<typeof actions.data.removeDataEntity>;
}

export type SimulationsProperties =
    & SimulationsOwnProperties & DashboardRenderProperties
    & SimulationsStateProperties
    & SimulationsDispatchProperties;


const Simulations: React.FC<SimulationsProperties> = (
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
        stateSimulations,
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
                type: 'simulations',
                id,
            });

            await graphqlClient.mutate({
                mutation: BETSE_MUTATIONS.REMOVE_BETSE_SIMULATION,
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
        simulations: any[],
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
    const rowsHeader = (
        <>
            <div />

            <div>
                name
            </div>

            <div>
                generated on
            </div>

            <div>
                last run
            </div>

            <div />
        </>
    );

    const rowTemplate = '20px 0.5fr 0.5fr 0.5fr 60px 60px';
    const rowRenderFields = [
        'link', 'name', 'generatedAt', 'lastRun', 'pluridlink', 'obliterate',
    ];

    return (
        <StyledDashboardContainer
            theme={stateGeneralTheme}
        >
            <EntityView
                ref={entityView}

                entities={makeEntitiesData(stateSimulations, 'simulation')}
                searchFields={['name']}

                generalTheme={stateGeneralTheme}
                interactionTheme={stateInteractionTheme}

                rowTemplate={rowTemplate}
                rowsHeader={rowsHeader}
                noRows="no simulations"

                abstractRowRenderer={abstractRowRenderer}
                rowRenderFields={rowRenderFields}
                rowRenderMethods={{
                    handleObliterate,
                }}

                loading={loading ? 1 : 0}

                filterUpdate={filterUpdate}
                refresh={() => {
                }}

                actionButtonText="New Simulation"
                actionButtonClick={() => {
                    setFullRenderArea(true);
                    setRenderView('new-simulation');
                }}

                actionScrollBottom={actionScrollBottom}
            />
        </StyledDashboardContainer>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): SimulationsStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateSimulations: selectors.data.getData(state).simulations,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): SimulationsDispatchProperties => ({
    dispatchRemoveDataEntity: (
        payload,
    ) => dispatch(
        actions.data.removeDataEntity(payload),
    ),
});


const ConnectedSimulations = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Simulations);
// #endregion module



// #region exports
export default ConnectedSimulations;
// #endregion exports
