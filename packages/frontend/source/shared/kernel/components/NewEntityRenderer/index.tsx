// #region imports
    // #region libraries
    import React, {
        useState,
        useCallback,
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
        PluridInputBox,
    } from '~kernel-services/styled';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledNewEntityRenderer,
    } from './styled';

    import {
        NewEntityField,
    } from './data';

    import StringField from './components/StringField';
    import NumberField from './components/NumberField';
    import BooleanField from './components/BooleanField';
    import FileField from './components/FileField';
    import GroupField from './components/GroupField';
    // #endregion internal
// #endregion imports



// #region module
export interface NewEntityRendererOwnProperties {
    fields: NewEntityField[];

    atChange: (state: Record<string, any>) => void;
}

export interface NewEntityRendererStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface NewEntityRendererDispatchProperties {
}

export type NewEntityRendererProperties =
    & NewEntityRendererOwnProperties
    & NewEntityRendererStateProperties
    & NewEntityRendererDispatchProperties;


const NewEntityRenderer: React.FC<NewEntityRendererProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        fields,

        atChange,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;

    const rendererID = Math.random() + '';
    // const rendererID = 'one';
    // #endregion properties


    // #region state
    const [
        paste,
        setPaste,
    ] = useState('');

    const [
        entityState,
        setEntityState,
    ] = useState('{}');
    // #endregion state


    // #region handlers
    const update = useCallback((
        state: any,
        value: any,
    ) => {
        // console.log('entityState', entityState, state, value);
        const newEntityState = {
            ...JSON.parse(entityState),
        };
        newEntityState[state] = value;

        setEntityState(JSON.stringify(newEntityState));
    }, [
        entityState,
    ]);
    // #endregion handlers


    // #region render
    return (
        <StyledNewEntityRenderer
            theme={stateGeneralTheme}
        >
            <PluridInputBox
                name="paste"
                text={paste}
                atChange={(event) => {
                    setPaste(event.target.value);
                }}
                theme={stateGeneralTheme}
            />

            {fields.map(field => {
                const key = rendererID + field.state;

                const properties: any = {
                    key: key,
                    data: field,
                    update: update,
                };

                switch (field.type) {
                    case 'string':
                        return (
                            <StringField
                                {...properties}
                            />
                        );
                    case 'number':
                        return (
                            <NumberField
                                {...properties}
                            />
                        );
                    case 'boolean':
                        return (
                            <BooleanField
                                {...properties}
                            />
                        );
                    case 'file':
                        return (
                            <FileField
                                {...properties}
                            />
                        );
                    case 'group':
                        return (
                            <GroupField
                                key={key}
                                data={field}
                            />
                        );
                }
            })}
        </StyledNewEntityRenderer>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): NewEntityRendererStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NewEntityRendererDispatchProperties => ({
});


const ConnectedNewEntityRenderer = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(NewEntityRenderer);
// #endregion module



// #region exports
export default ConnectedNewEntityRenderer;
// #endregion exports
