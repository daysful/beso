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
        Tissue,
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
    // #endregion internal
// #endregion imports



// #region module
export interface TissuesOwnProperties {
}

export interface TissuesStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateTissues: Tissue[];
}

export interface TissuesDispatchProperties {
}

export type TissuesProperties =
    & TissuesOwnProperties & DashboardRenderProperties
    & TissuesStateProperties
    & TissuesDispatchProperties;


const Tissues: React.FC<TissuesProperties> = (
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
        stateTissues,
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
            <EntityView
                ref={entityView}

                entities={stateTissues}
                searchFields={['name']}

                generalTheme={stateGeneralTheme}
                interactionTheme={stateInteractionTheme}

                rowTemplate="0.5fr 0.5fr 0.5fr 30px 30px"
                rowsHeader={rowsHeader}
                rows={filteredRows}
                noRows="no tissues"

                loading={loading ? 1 : 0}

                filterUpdate={filterUpdate}
                refresh={() => {
                }}

                actionButtonText="New Tissue"
                actionButtonClick={() => {
                    setFullRenderArea(true);
                    setRenderView('new-tissue');
                }}

                actionScrollBottom={actionScrollBottom}
            />
        </StyledDashboardContainer>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): TissuesStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateTissues: selectors.data.getData(state).tissues,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): TissuesDispatchProperties => ({
});


const ConnectedTissues = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Tissues);
// #endregion module



// #region exports
export default ConnectedTissues;
// #endregion exports
