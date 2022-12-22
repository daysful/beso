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
    // #endregion libraries


    // #region external
    import {
        DashboardRenderProperties,
    } from '~kernel-components/DashboardsRenderer/data';

    import NewEntityRenderer from '~kernel-components/NewEntityRenderer';

    import {
        StyledDashboardContainer,
        StyledNewEntity,
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
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        fields,
    } from './data';
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
    ] = useState<string[]>([]);

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
        selection: any,
        type: string,
    ) => {
        if (typeof selection === 'string') {
            switch (type) {
                case 'world':
                    if (selection === 'add new world') {

                    }
                    return;
            }
        }

        switch (type) {
            case 'world':
                setWorld(selection);
                return;
        }
    }
    // #endregion handlers


    // #region effects
    useEffect(() => {
        if (
            name
            && world
            && tissues.length > 0
            && interventions.length > 0
            && modulators.length > 0
            && networks.length > 0
            && biomolecules.length > 0
            && reactions.length > 0
            && channels.length > 0
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
    const worldRender = (
        <PluridFormLeftRight>
            <div>
                world
            </div>

            <PluridDropdown
                selected={world || 'select'}
                selectables={[
                    'add new world',
                    ...makeSelectables(stateData.worlds),
                ]}
                atSelect={(selection) => {
                    handleSelection(selection, 'world');
                }}
                theme={stateGeneralTheme}
                width={130}
            />
        </PluridFormLeftRight>
    );

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
                        ...makeSelectables(stateData.tissues),
                    ]}
                    atSelect={(selection) => {
                        handleSelection(selection, 'tissue');
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

    return (
        <StyledDashboardContainer
            theme={stateGeneralTheme}
        >
            <StyledNewEntity>
                <h1>
                    New Simulation
                </h1>

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

                {worldRender}
                {tissuesRender}
                {interventionsRender}
                {functionsRender}
                {networksRender}
                {biomoleculesRender}
                {reactionsRender}
                {channelsRender}
                {transportersRender}
                {modulatorsRender}

                <PluridPureButton
                    text="Add New Simulation"
                    atClick={() => {
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
            </StyledNewEntity>
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
