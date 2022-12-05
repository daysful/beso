// #region imports
    // #region libraries
    import React, {
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

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    // #endregion internal
// #endregion imports



// #region module
export interface NewSimulationOwnProperties {
}

export interface NewSimulationStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
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
        // #endregion state
    } = properties;
    // #endregion properties


    // #region state
    const [
        name,
        setName,
    ] = useState('');

    const [
        world,
        setWorld,
    ] = useState('');

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
                    'new world',
                ]}
                atSelect={(selection) => {}}
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
                        'new tissue',
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

    const modulatorsRender = (
        <>
            <PluridFormLeftRight>
                <div>
                    modulators
                </div>

                <PluridDropdown
                    selected={'select'}
                    selectables={[
                        'new modulator',
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

    const networksRender = (
        <>
            <PluridFormLeftRight>
                <div>
                    networks
                </div>

                <PluridDropdown
                    selected={'select'}
                    selectables={[
                        'new network',
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

    const biomoleculesRender = (
        <>
            <PluridFormLeftRight>
                <div>
                    biomolecules
                </div>

                <PluridDropdown
                    selected={'select'}
                    selectables={[
                        'new biomolecule',
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

    const reactionsRender = (
        <>
            <PluridFormLeftRight>
                <div>
                    reactions
                </div>

                <PluridDropdown
                    selected={'select'}
                    selectables={[
                        'new reaction',
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

    const channelsRender = (
        <>
            <PluridFormLeftRight>
                <div>
                    channels
                </div>

                <PluridDropdown
                    selected={'select'}
                    selectables={[
                        'new channel',
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

                {worldRender}
                {tissuesRender}
                {interventionsRender}
                {modulatorsRender}
                {networksRender}
                {biomoleculesRender}
                {reactionsRender}
                {channelsRender}

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
