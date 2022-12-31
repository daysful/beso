// #region imports
    // #region libraries
    import React, {
        useRef,
        useState,
        useEffect,
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

    import {
        PluridUIEntityPillData,
        PluridUIDropdownSelectable,
    } from '@plurid/plurid-ui-components-react';
    // #endregion libraries


    // #region external
    import {
        fields,
    } from '~shared/kernel/data/constants/entity/simulation';

    import {
        DashboardRenderProperties,
    } from '~kernel-components/DashboardsRenderer/data';

    import NewEntityRenderer from '~kernel-components/NewEntityRenderer';

    import {
        StyledDashboardContainer,
        StyledEntity,
        PluridInputLine,
        PluridPureButton,
        PluridLinkButton,
    } from '~kernel-services/styled';

    import {
        extractState,
    } from '~kernel-services/logic/betse';

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
    import Selectable from './components/Selectable';
    // #endregion internal
// #endregion imports



// #region module
export interface NewSimulationOwnProperties {
}

export interface NewSimulationStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateData: AppState['data'];
}

export interface NewSimulationDispatchProperties {
    dispatchAddDataEntity: DispatchAction<typeof actions.data.addDataEntity>;
}

export type NewSimulationProperties =
    & NewSimulationOwnProperties & DashboardRenderProperties
    & NewSimulationStateProperties
    & NewSimulationDispatchProperties;


const NewSimulation: React.FC<NewSimulationProperties> = (
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
        // stateInteractionTheme,
        stateData,
        // #endregion state

        // #region dispatch
        dispatchAddDataEntity,
        // #endregion dispatch
    } = properties;
    // #endregion properties


    // #region references
    const rendererID = useRef(Math.random() + '');
    // #endregion references


    // #region state
    const [
        name,
        setName,
    ] = useState('');

    const [
        state,
        setState,
    ] = useState<any>(
        JSON.parse(JSON.stringify(fields)),
    );

    const [
        world,
        setWorld,
    ] = useState<PluridUIDropdownSelectable>();

    const [
        tissues,
        setTissues,
    ] = useState<PluridUIEntityPillData[]>([]);

    const [
        interventions,
        setInterventions,
    ] = useState<PluridUIEntityPillData[]>([]);

    const [
        modulatorFunctions,
        setModulatorFunctions,
    ] = useState<PluridUIEntityPillData[]>([]);

    const [
        networks,
        setNetworks,
    ] = useState<PluridUIEntityPillData[]>([]);

    const [
        biomolecules,
        setBiomolecules,
    ] = useState<PluridUIEntityPillData[]>([]);

    const [
        reactions,
        setReactions,
    ] = useState<PluridUIEntityPillData[]>([]);

    const [
        channels,
        setChannels,
    ] = useState<PluridUIEntityPillData[]>([]);

    const [
        transporters,
        setTransporters,
    ] = useState<PluridUIEntityPillData[]>([]);

    const [
        modulators,
        setModulators,
    ] = useState<PluridUIEntityPillData[]>([]);

    const [
        isValid,
        setIsValid,
    ] = useState(false);
    // #endregion state


    // #region handlers
    const handleSelection = (
        selection: string | PluridUIDropdownSelectable,
        type: string,
    ) => {
        if (typeof selection === 'string') {
            switch (selection) {
                case 'add new world':
                    return;
                case 'add new tissue':
                    return;
            }

            return;
        }

        switch (type) {
            case 'world':
                setWorld(selection);
                return;
            case 'tissue': {
                const tissueAdded = tissues.find(tissue => tissue.id === selection.id);

                if (!tissueAdded) {
                    setTissues([
                        ...tissues,
                        {
                            id: selection.id,
                            text: selection.value,
                        },
                    ]);
                }
                return;
            }
        }
    }

    const removeSelected = (
        id: string,
        type: string,
    ) => {
        const data = {
            tissue: tissues,
            intervention: interventions,
            function: modulatorFunctions,
            network: networks,
            biomolecule: biomolecules,
            reaction: reactions,
            channel: channels,
            transporter: transporters,
            modulator: modulators,
        };

        const functions = {
            tissue: setTissues,
            intervention: setInterventions,
            function: setModulatorFunctions,
            network: setNetworks,
            biomolecule: setBiomolecules,
            reaction: setReactions,
            channel: setChannels,
            transporter: setTransporters,
            modulator: setModulators,
        };

        functions[type](
            data[type].filter((item: any) => item.id !== id),
        );
    }

    const addNewSimulation = async () => {
        try {
            const value = extractState(state);

            const extractPillsIDs = (
                data: PluridUIEntityPillData[],
            ) => data.map(item => item.id);

            const input = {
                name,
                data: {
                    ...value,
                    world: world?.id,
                    tissues: extractPillsIDs(tissues),
                    interventions: extractPillsIDs(interventions),
                    modulators: extractPillsIDs(modulators),
                    networks: extractPillsIDs(networks),
                    biomolecules: extractPillsIDs(biomolecules),
                    reactions: extractPillsIDs(reactions),
                    channels: extractPillsIDs(channels),
                },
            };

            setRenderView('simulations');
            setFullRenderArea(false);

            const response = await graphqlClient.mutate({
                mutation: BETSE_MUTATIONS.ADD_BETSE_SIMULATION,
                variables: {
                    input,
                },
            });
            const addedSimulation = response.data.addBetseSimulation;

            dispatchAddDataEntity({
                type: 'simulations',
                data: addedSimulation,
            });
        } catch (error) {
            return;
        }
    }
    // #endregion handlers


    // #region effects
    useEffect(() => {
        if (
            name
            // && world
            // && tissues.length > 0
            // && interventions.length > 0
            // && modulators.length > 0
            // && networks.length > 0
            // && biomolecules.length > 0
            // && reactions.length > 0
            // && channels.length > 0
        ) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [
        name,
        world,
        tissues,
        interventions,
        modulators,
        networks,
        biomolecules,
        reactions,
        channels,
    ]);
    // #endregion effects


    // #region render
    const selectables = [
        {
            type: 'world',
            single: true,
            selected: world,
            data: stateData.worlds,
        },
        {
            type: 'tissue',
            selected: tissues,
            data: stateData.tissues,
        },
        {
            type: 'intervention',
            selected: interventions,
            data: [
                ...stateData.globalInterventions,
                ...stateData.targetedInterventions,
            ],
        },
        {
            type: 'function',
            selected: modulatorFunctions,
            data: stateData.modulatorFunctions,
        },
        {
            type: 'network',
            selected: networks,
            data: stateData.networks,
        },
        {
            type: 'biomolecule',
            selected: biomolecules,
            data: stateData.biomolecules,
        },
        {
            type: 'reaction',
            selected: reactions,
            data: stateData.reactions,
        },
        {
            type: 'channel',
            selected: channels,
            data: stateData.channels,
        },
        {
            type: 'transporter',
            selected: transporters,
            data: stateData.transporters,
        },
        {
            type: 'modulator',
            selected: modulators,
            data: stateData.modulators,
        },
    ];

    return (
        <StyledDashboardContainer
            theme={stateGeneralTheme}
        >
            <StyledEntity>
                <PluridPureButton
                    text="Add New Simulation"
                    atClick={() => {
                        addNewSimulation();
                    }}
                    theme={stateGeneralTheme}
                    level={2}
                    disabled={!isValid}
                />

                <PluridLinkButton
                    text="cancel"
                    atClick={() => {
                        setFullRenderArea(false);
                        setRenderView('simulation');
                    }}
                    theme={stateGeneralTheme}
                />

                <PluridInputLine
                    theme={stateGeneralTheme}
                    name="name"
                    text={name}
                    atChange={(event) => {
                        setName(event.target.value);
                    }}
                />

                <NewEntityRenderer
                    id={rendererID.current}
                    fields={state}
                    atChange={(newState) => {
                        setState(newState);
                    }}
                />

                {selectables.map(selectable => {
                    const {
                        type,
                        single,
                        selected,
                        data,
                    } = selectable;

                    return (
                        <Selectable
                            key={Math.random() + ''}
                            type={type}
                            single={single}
                            selected={selected}
                            data={data}

                            handleSelection={handleSelection}
                            removeSelected={(id) => removeSelected(id, type)}
                        />
                    );
                })}
            </StyledEntity>
        </StyledDashboardContainer>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): NewSimulationStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateData: selectors.data.getData(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NewSimulationDispatchProperties => ({
    dispatchAddDataEntity: (
        payload,
    ) => dispatch(
        actions.data.addDataEntity(payload),
    ),
});


const ConnectedNewSimulation = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(NewSimulation);
// #endregion module



// #region exports
export default ConnectedNewSimulation;
// #endregion exports
