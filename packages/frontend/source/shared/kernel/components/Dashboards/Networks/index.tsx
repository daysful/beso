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
export interface NetworksOwnProperties {
}

export interface NetworksStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface NetworksDispatchProperties {
}

export type NetworksProperties =
    & NetworksOwnProperties & DashboardRenderProperties
    & NetworksStateProperties
    & NetworksDispatchProperties;


const Networks: React.FC<NetworksProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region state
        stateGeneralTheme,
        stateInteractionTheme,
        // #endregion state
    } = properties;

    const stateNetworks: any[] = [];
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

                entities={stateNetworks}
                searchFields={['name']}

                generalTheme={stateGeneralTheme}
                interactionTheme={stateInteractionTheme}

                rowTemplate="0.5fr 0.5fr 0.5fr 30px 30px"
                rowsHeader={rowsHeader}
                rows={filteredRows}
                noRows="no networks"

                loading={loading ? 1 : 0}

                filterUpdate={filterUpdate}
                refresh={() => {
                }}

                actionButtonText="New Network"
                actionButtonClick={() => {
                    // setRenderView('new-network');
                }}

                actionScrollBottom={actionScrollBottom}
            />
        </StyledDashboardContainer>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): NetworksStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NetworksDispatchProperties => ({
});


const ConnectedNetworks = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Networks);
// #endregion module



// #region exports
export default ConnectedNetworks;
// #endregion exports
