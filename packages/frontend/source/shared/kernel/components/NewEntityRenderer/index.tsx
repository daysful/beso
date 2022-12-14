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

    import yaml from 'js-yaml';
    import {
        DeonPure,
    } from '@plurid/deon/distribution/pure';


    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        DispatchAction,
    } from '@plurid/plurid-ui-state-react';
    // #endregion libraries


    // #region external
    import {
        PasteLanguage,
    } from '~kernel-data/interfaces';

    import {
        PluridInputBox,
        PluridDropdown,
        PluridFormLeftRight,
    } from '~kernel-services/styled';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledNewEntityRenderer,
        StyledPastedBox,
        StyledPastedLanguage,
    } from './styled';

    import {
        NewEntityField,
    } from './data';

    import {
        resolveView,
    } from './logic';
    // #endregion internal
// #endregion imports



// #region module
export interface NewEntityRendererOwnProperties {
    id: string;
    fields: NewEntityField[];

    atChange: (fields: NewEntityField[]) => void;

    sourceFrom?: JSX.Element;
}

export interface NewEntityRendererStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    statePasteLanguage: PasteLanguage;
}

export interface NewEntityRendererDispatchProperties {
    dispatchSetGeneralField: DispatchAction<typeof actions.general.setGeneralField>;
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
        id,
        fields,

        atChange,

        sourceFrom,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        statePasteLanguage,
        // #endregion state

        // #region dispatch
        dispatchSetGeneralField,
        // #endregion dispatch
    } = properties;
    // #endregion properties


    // #region state
    const [
        paste,
        setPaste,
    ] = useState('');
    // #endregion state


    // #region handlers
    const extractPasteState = (
        fields: NewEntityField[],
    ) => {
        const paste = {};

        for (const field of fields) {
            if (field.type === 'group') {
                const groupPaste = extractPasteState(field.value);
                paste[field.state] = groupPaste;
                continue;
            }

            paste[field.state] = field.value;
        }

        return paste;
    }

    const composePaste = (
        newEntityState?: NewEntityField[],
    ) => {
        const paste = extractPasteState(newEntityState || fields);

        let text = '';
        switch (statePasteLanguage) {
            case 'yaml':
                text = yaml.dump(paste);
                break;
            case 'json':
                text = JSON.stringify(paste, null, 4);
                break;
            case 'deon':
                const deon = new DeonPure();
                text = deon.stringify(paste);
                break;
        }

        setPaste(text);
    }

    const parsePaste = (
        text: string,
    ) => {
        let data: any;
        switch (statePasteLanguage) {
            case 'yaml':
                data = yaml.load(text);
                break;
            case 'json':
                data = JSON.parse(text);
                break;
            case 'deon':
                const deon = new DeonPure();
                data = deon.parse(text);
                break;
        }

        const newEntityState: NewEntityField[] = [
            ...JSON.parse(JSON.stringify(fields)),
        ].map((field: NewEntityField) => {
            if (field.type === 'group') {
                const newValue = field.value.map(
                    groupField => {
                        if (typeof data[field.state] === 'undefined') {
                            return {
                                ...groupField,
                            };
                        }

                        const newValue = data[field.state][groupField.state];
                        if (typeof newValue !== 'undefined') {
                            return {
                                ...groupField,
                                value: newValue,
                            };
                        }

                        return {
                            ...groupField,
                        };
                    },
                );

                return {
                    ...field,
                    value: newValue,
                };
            }

            const newValue = data[field.state];
            if (typeof newValue !== 'undefined') {
                return {
                    ...field,
                    value: newValue,
                };
            }

            return {
                ...field,
            };
        });

        atChange(newEntityState);
    }

    const update = (
        state: string,
        value: any,
    ) => {
        const newEntityState: NewEntityField[] = [
            ...JSON.parse(JSON.stringify(fields)),
        ].map(field => {
            if (field.state === state) {
                return {
                    ...field,
                    value,
                };
            }

            return {
                ...field,
            };
        });

        atChange(newEntityState);
        composePaste(newEntityState);
    }
    // #endregion handlers


    // #region effects
    useEffect(() => {
        composePaste();
    }, []);

    useEffect(() => {
        composePaste();
    }, [
        statePasteLanguage,
    ]);
    // #endregion effects


    // #region render
    const view = resolveView(
        fields,
        id,
        update,
    );

    return (
        <StyledNewEntityRenderer
            theme={stateGeneralTheme}
        >
            {sourceFrom && (
                <PluridFormLeftRight
                    style={{
                        padding: '0.7rem',
                    }}
                >
                    <div>
                        source from
                    </div>

                    {sourceFrom}
                </PluridFormLeftRight>
            )}

            <StyledPastedBox>
                <PluridInputBox
                    name="paste"
                    text={paste}
                    atChange={(event) => {
                        setPaste(event.target.value);
                        parsePaste(event.target.value);
                    }}
                    theme={stateGeneralTheme}
                    style={{
                        fontFamily: 'monospace',
                    }}
                />

                <StyledPastedLanguage>
                    <PluridDropdown
                        selected={statePasteLanguage || 's'}
                        selectables={[
                            'yaml',
                            'json',
                            'deon',
                        ]}
                        atSelect={(selection) => {
                            if (typeof selection !== 'string') {
                                return;
                            }

                            dispatchSetGeneralField({
                                field: 'pasteLanguage',
                                value: selection,
                            });
                        }}
                        style={{
                            fontSize: '0.9rem',
                        }}
                        theme={stateGeneralTheme}
                    />
                </StyledPastedLanguage>
            </StyledPastedBox>

            {view}
        </StyledNewEntityRenderer>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): NewEntityRendererStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    statePasteLanguage: selectors.general.getGeneral(state).pasteLanguage,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NewEntityRendererDispatchProperties => ({
    dispatchSetGeneralField: (
        payload,
    ) => dispatch(
        actions.general.setGeneralField(payload),
    ),
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
