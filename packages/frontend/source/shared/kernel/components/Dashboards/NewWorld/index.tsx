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
        PluridLinkButton,
        PluridSwitch,
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
export interface NewWorldOwnProperties {
}

export interface NewWorldStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface NewWorldDispatchProperties {
}

export type NewWorldProperties =
    & NewWorldOwnProperties & DashboardRenderProperties
    & NewWorldStateProperties
    & NewWorldDispatchProperties;


const NewWorld: React.FC<NewWorldProperties> = (
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
        worldSize,
        setWorldSize,
    ] = useState('150e-6');

    const [
        cellRadius,
        setCellRadius,
    ] = useState('5.0e-6');

    const [
        cellHeight,
        setCellHeight,
    ] = useState('10.0e-6');

    const [
        cellSpacing,
        setCellSpacing,
    ] = useState('26.0e-9');

    const [
        simulateSingleCell,
        setSimulateSingleCell,
    ] = useState(false);

    const [
        latticeType,
        setLatticeType,
    ] = useState('hex');

    const [
        latticeDisorder,
        setLatticeDisorder,
    ] = useState('0.4');


    const [
        refineMesh,
        setRefineMesh,
    ] = useState(true);

    const [
        maximumSteps,
        setMaximumSteps,
    ] = useState('10');

    const [
        convergenceThreshold,
        setConvergenceThreshold,
    ] = useState('1.5');


    const [
        svgOverride,
        setSvgOverride,
    ] = useState(false);

    const [
        cellsFromSvg,
        setCellsFromSvg,
    ] = useState('geo/root/root_cells.svg');

    const [
        svgSize,
        setSvgSize,
    ] = useState('500');


    const [
        alphaShape,
        setAlphaShape,
    ] = useState('0.01');

    const [
        useCenters,
        setUseCenters,
    ] = useState(false);


    const [
        isValid,
        setIsValid,
    ] = useState(false);
    // #endregion state


    // #region effects
    useEffect(() => {
        if (
            name
        ) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [
        name,
    ]);
    // #endregion effects


    // #region render
    return (
        <StyledDashboardContainer
            theme={stateGeneralTheme}
        >
            <StyledNewEntity>
                <h1>
                    New World
                </h1>

                <PluridInputLine
                    theme={stateGeneralTheme}
                    name="name"
                    text={name}
                    atChange={(event) => {
                        setName(event.target.value);
                    }}
                />

                <PluridInputLine
                    theme={stateGeneralTheme}
                    name="world size"
                    text={worldSize}
                    atChange={(event) => {
                        setWorldSize(event.target.value);
                    }}
                />

                <PluridInputLine
                    theme={stateGeneralTheme}
                    name="cell radius"
                    text={cellRadius}
                    atChange={(event) => {
                        setCellRadius(event.target.value);
                    }}
                />

                <PluridInputLine
                    theme={stateGeneralTheme}
                    name="cell height"
                    text={cellHeight}
                    atChange={(event) => {
                        setCellHeight(event.target.value);
                    }}
                />

                <PluridInputLine
                    theme={stateGeneralTheme}
                    name="cell spacing"
                    text={cellSpacing}
                    atChange={(event) => {
                        setCellSpacing(event.target.value);
                    }}
                />

                <PluridFormLeftRight>
                    <div>
                        simulate single cell
                    </div>

                    <PluridSwitch
                        theme={stateGeneralTheme}
                        checked={simulateSingleCell}
                        atChange={() => {
                            setSimulateSingleCell(value => !value);
                        }}
                        exclusive={true}
                    />
                </PluridFormLeftRight>

                <PluridInputLine
                    theme={stateGeneralTheme}
                    name="lattice type"
                    text={latticeType}
                    atChange={(event) => {
                        setLatticeType(event.target.value);
                    }}
                />

                <PluridInputLine
                    theme={stateGeneralTheme}
                    name="lattice disorder"
                    text={latticeDisorder}
                    atChange={(event) => {
                        setLatticeDisorder(event.target.value);
                    }}
                />


                <h2>
                    mesh refinement
                </h2>

                <PluridFormLeftRight>
                    <div>
                        refine mesh
                    </div>

                    <PluridSwitch
                        theme={stateGeneralTheme}
                        checked={refineMesh}
                        atChange={() => {
                            setRefineMesh(value => !value);
                        }}
                        exclusive={true}
                    />
                </PluridFormLeftRight>

                <PluridInputLine
                    theme={stateGeneralTheme}
                    name="maximum steps"
                    text={maximumSteps}
                    atChange={(event) => {
                        setMaximumSteps(event.target.value);
                    }}
                />

                <PluridInputLine
                    theme={stateGeneralTheme}
                    name="convergence threshold"
                    text={convergenceThreshold}
                    atChange={(event) => {
                        setConvergenceThreshold(event.target.value);
                    }}
                />

                <hr />


                <h2>
                    import from svg
                </h2>

                <PluridFormLeftRight>
                    <div>
                        svg override
                    </div>

                    <PluridSwitch
                        theme={stateGeneralTheme}
                        checked={svgOverride}
                        atChange={() => {
                            setSvgOverride(value => !value);
                        }}
                        exclusive={true}
                    />
                </PluridFormLeftRight>

                <PluridInputLine
                    theme={stateGeneralTheme}
                    name="cells from svg"
                    text={cellsFromSvg}
                    atChange={(event) => {
                        setCellsFromSvg(event.target.value);
                    }}
                />

                <PluridInputLine
                    theme={stateGeneralTheme}
                    name="svg size"
                    text={svgSize}
                    atChange={(event) => {
                        setSvgSize(event.target.value);
                    }}
                />

                <hr />


                <PluridInputLine
                    theme={stateGeneralTheme}
                    name="alpha shape"
                    text={alphaShape}
                    atChange={(event) => {
                        setAlphaShape(event.target.value);
                    }}
                />

                <PluridFormLeftRight>
                    <div>
                        use centers
                    </div>

                    <PluridSwitch
                        theme={stateGeneralTheme}
                        checked={useCenters}
                        atChange={() => {
                            setUseCenters(value => !value);
                        }}
                        exclusive={true}
                    />
                </PluridFormLeftRight>


                <PluridPureButton
                    text="Add New World"
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
                        setRenderView('worlds');
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
): NewWorldStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NewWorldDispatchProperties => ({
});


const ConnectedNewWorld = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(NewWorld);
// #endregion module



// #region exports
export default ConnectedNewWorld;
// #endregion exports
