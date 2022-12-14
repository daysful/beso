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
        globalIntervention,
        setGlobalIntervention,
    ] = useState<PluridUIDropdownSelectable>();

    const [
        targetedIntervention,
        setTargetedIntervention,
    ] = useState<PluridUIDropdownSelectable>();

    const [
        modulatorFunction,
        setModulatorFunction,
    ] = useState<PluridUIDropdownSelectable>();

    const [
        network,
        setNetwork,
    ] = useState<PluridUIDropdownSelectable>();

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
                case 'add new global intervention':
                    return;
                case 'add new targeted intervention':
                    return;
                case 'add new function':
                    return;
                case 'add new network':
                    return;
                case 'add new biomolecule':
                    return;
                case 'add new reaction':
                    return;
                case 'add new channel':
                    return;
                case 'add new transporter':
                    return;
                case 'add new modulator':
                    return;
            }

            return;
        }

        const addEntityPillLogic = (
            data: PluridUIEntityPillData[],
            setter: any,
        ) => {
            const itemAdded = data.find(item => item.id === selection.id);

            if (!itemAdded) {
                setter([
                    ...data,
                    {
                        id: selection.id,
                        text: selection.value,
                    },
                ]);
            }
        }

        switch (type) {
            case 'world':
                setWorld(selection);
                return;
            case 'tissue':
                addEntityPillLogic(tissues, setTissues);
                return;
            case 'global intervention':
                setGlobalIntervention(selection);
                return;
            case 'targeted intervention':
                setTargetedIntervention(selection);
                return;
            case 'function':
                setModulatorFunction(selection);
                return;
            case 'network':
                setNetwork(selection);
                return;
            case 'biomolecule':
                addEntityPillLogic(biomolecules, setBiomolecules);
                return;
            case 'reaction':
                addEntityPillLogic(reactions, setReactions);
                return;
            case 'channel':
                addEntityPillLogic(channels, setChannels);
                return;
            case 'transporter':
                addEntityPillLogic(transporters, setTransporters);
                return;
            case 'modulator':
                addEntityPillLogic(modulators, setModulators);
                return;
        }
    }

    const removeSelected = (
        id: string,
        type: string,
    ) => {
        const data = {
            tissue: tissues,
            biomolecule: biomolecules,
            reaction: reactions,
            channel: channels,
            transporter: transporters,
            modulator: modulators,
        };

        const functions = {
            tissue: setTissues,
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
                    global_intervention: globalIntervention?.id,
                    targeted_intervention: targetedIntervention?.id,
                    modulator_function: modulatorFunction?.id,
                    network: network?.id,
                    biomolecules: extractPillsIDs(biomolecules),
                    reactions: extractPillsIDs(reactions),
                    channels: extractPillsIDs(channels),
                    transporters: extractPillsIDs(transporters),
                    modulators: extractPillsIDs(modulators),
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
            // && globalIntervention
            // && targetedIntervention
            // && modulatorFunction
            // && network
            // && biomolecules.length > 0
            // && reactions.length > 0
            // && channels.length > 0
            // && transporters.length > 0
            // && modulators.length > 0
        ) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [
        name,
        world,
        tissues,
        globalIntervention,
        targetedIntervention,
        modulatorFunction,
        network,
        biomolecules,
        reactions,
        channels,
        transporters,
        modulators,
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
            type: 'global intervention',
            single: true,
            selected: globalIntervention,
            data: stateData.globalInterventions,
        },
        {
            type: 'targeted intervention',
            single: true,
            selected: targetedIntervention,
            data: stateData.targetedInterventions,
        },
        {
            type: 'function',
            single: true,
            selected: modulatorFunction,
            data: stateData.modulatorFunctions,
        },
        {
            type: 'network',
            single: true,
            selected: network,
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
