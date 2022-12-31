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
        PluridDropdown,
        PluridEntityPillGroup,
        PluridLinkButton,
        PluridFormLeftRight,
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
    ] = useState<any>();

    const [
        tissues,
        setTissues,
    ] = useState<PluridUIEntityPillData[]>([]);

    const [
        interventions,
        setInterventions,
    ] = useState<string[]>([]);

    const [
        modulators,
        setModulators,
    ] = useState<string[]>([]);

    const [
        networks,
        setNetworks,
    ] = useState<string[]>([]);

    const [
        biomolecules,
        setBiomolecules,
    ] = useState<string[]>([]);

    const [
        reactions,
        setReactions,
    ] = useState<string[]>([]);

    const [
        channels,
        setChannels,
    ] = useState<string[]>([]);

    const [
        isValid,
        setIsValid,
    ] = useState(false);
    // #endregion state


    // #region handlers
    const makeSelectables = (
        data: any[],
    ) => data.map(item => ({
        id: item.id,
        value: item.name,
    }));

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

    const addNewSimulation = async () => {
        try {
            const value = extractState(state);

            const input = {
                name,
                data: {
                    ...value,
                    world,
                    tissues,
                    interventions,
                    modulators,
                    networks,
                    biomolecules,
                    reactions,
                    channels,
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

    const tissuesRender = (
        <>
            <PluridFormLeftRight>
                <div>
                    tissues
                </div>

                <PluridDropdown
                    selected={'select'}
                    selectables={[
                        'add new tissue',
                        ...makeSelectables(stateData.tissues.filter(
                            tissue => !tissues.find(added => added.id === tissue.id),
                        )),
                    ]}
                    atSelect={(selection) => {
                        handleSelection(selection, 'tissue');
                    }}
                    theme={stateGeneralTheme}
                    width={130}
                />
            </PluridFormLeftRight>

            <PluridEntityPillGroup
                entities={tissues}
                remove={(id) => {
                    setTissues(
                        tissues.filter(tissue => tissue.id !== id),
                    );
                }}
                theme={stateGeneralTheme}
            />
        </>
    );

    const interventionsRender = (
        <>
            <PluridFormLeftRight>
                <div>
                    interventions
                </div>

                <PluridDropdown
                    selected={'select'}
                    selectables={[
                        'new intervention',
                    ]}
                    atSelect={(selection) => {}}
                    theme={stateGeneralTheme}
                    width={130}
                />
            </PluridFormLeftRight>

            <PluridEntityPillGroup
                entities={[
                ]}
                remove={() => {}}
                theme={stateGeneralTheme}
            />
        </>
    );

    const functionsRender = (
        <>
            <PluridFormLeftRight>
                <div>
                    functions
                </div>

                <PluridDropdown
                    selected={'select'}
                    selectables={[
                        'add new function',
                        ...makeSelectables(stateData.modulatorFunctions),
                    ]}
                    atSelect={(selection) => {
                        handleSelection(selection, 'function');
                    }}
                    theme={stateGeneralTheme}
                    width={130}
                />
            </PluridFormLeftRight>

            <PluridEntityPillGroup
                entities={[
                ]}
                remove={() => {}}
                theme={stateGeneralTheme}
            />
        </>
    );

    const networksRender = (
        <>
            <PluridFormLeftRight>
                <div>
                    networks
                </div>

                <PluridDropdown
                    selected={'select'}
                    selectables={[
                        'add new network',
                        ...makeSelectables(stateData.networks),
                    ]}
                    atSelect={(selection) => {
                        handleSelection(selection, 'network');
                    }}
                    theme={stateGeneralTheme}
                    width={130}
                />
            </PluridFormLeftRight>

            <PluridEntityPillGroup
                entities={[
                ]}
                remove={() => {}}
                theme={stateGeneralTheme}
            />
        </>
    );

    const biomoleculesRender = (
        <>
            <PluridFormLeftRight>
                <div>
                    biomolecules
                </div>

                <PluridDropdown
                    selected={'select'}
                    selectables={[
                        'add new biomolecule',
                        ...makeSelectables(stateData.biomolecules),
                    ]}
                    atSelect={(selection) => {
                        handleSelection(selection, 'biomolecule');
                    }}
                    theme={stateGeneralTheme}
                    width={130}
                />
            </PluridFormLeftRight>

            <PluridEntityPillGroup
                entities={[
                ]}
                remove={() => {}}
                theme={stateGeneralTheme}
            />
        </>
    );

    const reactionsRender = (
        <>
            <PluridFormLeftRight>
                <div>
                    reactions
                </div>

                <PluridDropdown
                    selected={'select'}
                    selectables={[
                        'add new reaction',
                        ...makeSelectables(stateData.reactions),
                    ]}
                    atSelect={(selection) => {
                        handleSelection(selection, 'reaction');
                    }}
                    theme={stateGeneralTheme}
                    width={130}
                />
            </PluridFormLeftRight>

            <PluridEntityPillGroup
                entities={[
                ]}
                remove={() => {}}
                theme={stateGeneralTheme}
            />
        </>
    );

    const channelsRender = (
        <>
            <PluridFormLeftRight>
                <div>
                    channels
                </div>

                <PluridDropdown
                    selected={'select'}
                    selectables={[
                        'add new channel',
                        ...makeSelectables(stateData.channels),
                    ]}
                    atSelect={(selection) => {
                        handleSelection(selection, 'channel');
                    }}
                    theme={stateGeneralTheme}
                    width={130}
                />
            </PluridFormLeftRight>

            <PluridEntityPillGroup
                entities={[
                ]}
                remove={() => {}}
                theme={stateGeneralTheme}
            />
        </>
    );

    const transportersRender = (
        <>
            <PluridFormLeftRight>
                <div>
                    transporters
                </div>

                <PluridDropdown
                    selected={'select'}
                    selectables={[
                        'add new function',
                        ...makeSelectables(stateData.transporters),
                    ]}
                    atSelect={(selection) => {
                        handleSelection(selection, 'transporter');
                    }}
                    theme={stateGeneralTheme}
                    width={130}
                />
            </PluridFormLeftRight>

            <PluridEntityPillGroup
                entities={[
                ]}
                remove={() => {}}
                theme={stateGeneralTheme}
            />
        </>
    );

    const modulatorsRender = (
        <>
            <PluridFormLeftRight>
                <div>
                    modulators
                </div>

                <PluridDropdown
                    selected={'select'}
                    selectables={[
                        'add new modulator',
                        ...makeSelectables(stateData.modulators),
                    ]}
                    atSelect={(selection) => {
                        handleSelection(selection, 'modulator');
                    }}
                    theme={stateGeneralTheme}
                    width={130}
                />
            </PluridFormLeftRight>

            <PluridEntityPillGroup
                entities={[
                ]}
                remove={() => {}}
                theme={stateGeneralTheme}
            />
        </>
    );

    const selectables = [
        {
            type: 'world',
            single: true,
            selected: world,
            data: stateData.worlds,
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
                        />
                    );
                })}

                {tissuesRender}
                {interventionsRender}
                {functionsRender}
                {networksRender}
                {biomoleculesRender}
                {reactionsRender}
                {channelsRender}
                {transportersRender}
                {modulatorsRender}
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
