// #region imports
    // #region libraries
    import React, {
        useState,
        useRef,
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
    import NewEntityRenderer from '~kernel-components/NewEntityRenderer';

    import {
        StyledDashboardContainer,
        StyledNewEntity,
        PluridPureButton,
        PluridLinkButton,
    } from '~kernel-services/styled';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external
// #endregion imports



// #region module
export interface NewEntityComponentOwnProperties {
    fields: any;

    setRenderView: React.Dispatch<string>;
    renderViewPath: string;
    setFullRenderArea: React.Dispatch<boolean>;

    kind: string;
    sourceFrom: JSX.Element;
}

export interface NewEntityComponentStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface NewEntityComponentDispatchProperties {
}

export type NewEntityComponentProperties =
    & NewEntityComponentOwnProperties
    & NewEntityComponentStateProperties
    & NewEntityComponentDispatchProperties;


const NewEntityComponent: React.FC<NewEntityComponentProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        fields,

        setRenderView,
        renderViewPath,
        setFullRenderArea,

        kind,
        sourceFrom,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region references
    const rendererID = useRef(Math.random() + '');
    // #endregion references


    // #region state
    const [
        state,
        setState,
    ] = useState<any>(
        JSON.parse(JSON.stringify(fields)),
    );

    const [
        isValid,
        setIsValid,
    ] = useState(false);
    // #endregion state


    // #region render
    return (
        <StyledDashboardContainer
            theme={stateGeneralTheme}
        >
            <StyledNewEntity>
                <h1>
                    New {kind}
                </h1>

                <NewEntityRenderer
                    id={rendererID.current}
                    fields={state}
                    atChange={(newState) => {
                        setState(newState);
                    }}
                    sourceFrom={sourceFrom}
                />

                <PluridPureButton
                    text={`Add New ${kind}`}
                    atClick={() => {
                        console.log(state);
                    }}
                    theme={stateGeneralTheme}
                    level={2}
                    disabled={!isValid}
                />

                <PluridLinkButton
                    text="cancel"
                    atClick={() => {
                        setFullRenderArea(false);
                        setRenderView(renderViewPath);
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
): NewEntityComponentStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NewEntityComponentDispatchProperties => ({
});


const ConnectedNewEntityComponent = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(NewEntityComponent);
// #endregion module



// #region exports
export default ConnectedNewEntityComponent;
// #endregion exports
