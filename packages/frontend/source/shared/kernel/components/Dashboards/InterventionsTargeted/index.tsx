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
        TargetedIntervention,
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

    import InterventionsSelector from '~kernel-components/InterventionsSelector';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
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
        // #endregion own

        // #region state
        stateGeneralTheme,
        stateInteractionTheme,
        stateTargetedInterventions,
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
        [],
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
    const rowsHeader = (
        <>
            <div>
                name
            </div>

            <div>
                generated on
            </div>

            <div />
        </>
    );

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

                entities={stateTargetedInterventions}
                searchFields={['name']}

                generalTheme={stateGeneralTheme}
                interactionTheme={stateInteractionTheme}

                rowTemplate="0.5fr 0.5fr 0.5fr 30px 30px"
                rowsHeader={rowsHeader}
                rows={filteredRows}
                noRows="no targeted interventions"

                loading={loading ? 1 : 0}

                filterUpdate={filterUpdate}
                refresh={() => {
                }}

                actionButtonText="New Targeted Intervention"
                actionButtonClick={() => {
                    // setRenderView('new-targeted-intervention');
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
