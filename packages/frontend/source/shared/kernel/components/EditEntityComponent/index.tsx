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
        NewEntityField,
    } from '~kernel-components/NewEntityRenderer/data';

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
    fields: NewEntityField[];
    kind: string;

    onEdit: (state: NewEntityField[]) => void;
    onCancel: () => void;
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

        kind,

        onEdit,
        onCancel,
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
    ] = useState(true);
    // #endregion state


    // #region render
    return (
        <StyledDashboardContainer
            theme={stateGeneralTheme}
        >
            <StyledNewEntity>
                <PluridPureButton
                    text={`Edit ${kind}`}
                    atClick={() => {
                        onEdit(state);
                    }}
                    theme={stateGeneralTheme}
                    level={2}
                    disabled={!isValid}
                />

                <PluridLinkButton
                    text="cancel"
                    atClick={() => {
                        onCancel();
                    }}
                    theme={stateGeneralTheme}
                />

                <NewEntityRenderer
                    id={rendererID.current}
                    fields={state}
                    atChange={(newState) => {
                        setState(newState);
                    }}
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
