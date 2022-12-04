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

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        simulationRowRenderer,
    } from './logic';
    // #endregion internal
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
        // #endregion own

        // #region state
        stateGeneralTheme,
        stateInteractionTheme,
        stateSimulations,
        // #endregion state
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
        filteredRows,
        setFilteredRows,
    ] = useState(
        stateSimulations.map(
            simulation => simulationRowRenderer(
                simulation,
                handleObliterate,
            ),
        ),
    );

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

    return (
        <StyledDashboardContainer
            theme={stateGeneralTheme}
        >
            <EntityView
                ref={entityView}

                entities={stateSimulations}
                searchFields={['name']}

                generalTheme={stateGeneralTheme}
                interactionTheme={stateInteractionTheme}

                rowTemplate="0.5fr 0.5fr 0.5fr 30px 30px"
                rowsHeader={rowsHeader}
                rows={filteredRows}
                noRows="no simulations"

                loading={loading ? 1 : 0}

                filterUpdate={filterUpdate}
                refresh={() => {
                }}

                actionButtonText="New Simulation"
                actionButtonClick={() => {
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
