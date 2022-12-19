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
        GlobalIntervention,
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
export interface InterventionsGlobalOwnProperties {
}

export interface InterventionsGlobalStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateGlobalInterventions: GlobalIntervention[];
}

export interface InterventionsGlobalDispatchProperties {
}

export type InterventionsGlobalProperties =
    & InterventionsGlobalOwnProperties & DashboardRenderProperties
    & InterventionsGlobalStateProperties
    & InterventionsGlobalDispatchProperties;


const InterventionsGlobal: React.FC<InterventionsGlobalProperties> = (
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
        stateGlobalInterventions,
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

                entities={stateGlobalInterventions}
                searchFields={['name']}

                generalTheme={stateGeneralTheme}
                interactionTheme={stateInteractionTheme}

                rowTemplate="0.5fr 0.5fr 0.5fr 30px 30px"
                rowsHeader={rowsHeader}
                noRows="no global interventions"

                rowRenderFields={[
                    'name', 'generatedAt', 'pluridlink:intervention', 'obliterate',
                ]}
                rowRenderMethods={{
                    handleObliterate,
                }}

                loading={loading ? 1 : 0}

                filterUpdate={filterUpdate}
                refresh={() => {
                }}

                actionButtonText="New Global Intervention"
                actionButtonClick={() => {
                    setFullRenderArea(true);
                    setRenderView('new-interventionGlobal');
                }}

                actionScrollBottom={actionScrollBottom}
            />
        </StyledDashboardContainer>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): InterventionsGlobalStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateGlobalInterventions: selectors.data.getData(state).globalInterventions,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): InterventionsGlobalDispatchProperties => ({
});


const ConnectedInterventionsGlobal = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(InterventionsGlobal);
// #endregion module



// #region exports
export default ConnectedInterventionsGlobal;
// #endregion exports
