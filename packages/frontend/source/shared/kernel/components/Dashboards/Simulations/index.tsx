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
        DashboardRenderProperties,
    } from '~kernel-components/DashboardsRenderer/data';

    import EntityView, {
        EntityViewRefAttributes,
    } from '~kernel-components/EntityView';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledSimulations,
    } from './styled';

    import {
        createSearchTerms,
        simulationRowRenderer,
    } from './logic';
    // #endregion internal
// #endregion imports



// #region module
export interface Simulation {
    id: string;
    name: string;
    generatedAt: number;
    lastRun: number;
}

export interface SimulationsOwnProperties {
}

export interface SimulationsStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
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
        // #region state
        stateGeneralTheme,
        stateInteractionTheme,
        // #endregion state
    } = properties;

    const stateSimulations: Simulation[] = [
    ];
    // #endregion properties


    // #region references
    const entityView = useRef<EntityViewRefAttributes | null>(null);
    // #endregion references


    // #region handlers
    const handleRecordObliterate = async (
        id: string,
    ) => {
        try {

        } catch (error) {
            return;
        }
    }
    // #endregion handlers


    // #region state
    const [
        searchTerms,
        setSearchTerms,
    ] = useState(
        createSearchTerms(stateSimulations),
    );

    const [
        filteredRows,
        setFilteredRows,
    ] = useState(
        stateSimulations.map(
            simulation => simulationRowRenderer(
                simulation,
                handleRecordObliterate,
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
        <StyledSimulations
            theme={stateGeneralTheme}
        >
            <EntityView
                ref={entityView}

                generalTheme={stateGeneralTheme}
                interactionTheme={stateInteractionTheme}

                rowTemplate="0.5fr 0.5fr 0.5fr 30px 30px"
                rowsHeader={rowsHeader}
                rows={filteredRows}
                noRows="no simulations"

                entities={[]}
                // loading={loading ? 1 : 0}

                // filterUpdate={filterUpdate}
                // refresh={() => {
                // }}

                // actionScrollBottom={actionScrollBottom}
            />
        </StyledSimulations>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): SimulationsStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
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
