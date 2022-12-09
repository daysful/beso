// #region imports
    // #region libraries
    import React, {
        useState,
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
        PluridIconArrowDown,
        PluridIconArrowUp,
    } from '@plurid/plurid-icons-react';
    // #endregion libraries


    // #region external
    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';

    import {
        GroupField as IGroupField,
    } from '~kernel-components/NewEntityRenderer/data';

    import StringField from '~kernel-components/NewEntityRenderer/components/StringField';
    import NumberField from '~kernel-components/NewEntityRenderer/components/NumberField';
    import BooleanField from '~kernel-components/NewEntityRenderer/components/BooleanField';
    import ListField from '~kernel-components/NewEntityRenderer/components/ListField';
    import FileField from '~kernel-components/NewEntityRenderer/components/FileField';

    import UtilityGroup from '../UtilityGroup';
    // #endregion external


    // #region internal
    import {
        StyledGroupField,
        StyledExpander,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface GroupFieldOwnProperties {
    id: string;
    data: IGroupField;
    update: (
        state: string,
        value: any,
    ) => void;
}

export interface GroupFieldStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface GroupFieldDispatchProperties {
}

export type GroupFieldProperties =
    & GroupFieldOwnProperties
    & GroupFieldStateProperties
    & GroupFieldDispatchProperties;


const GroupField: React.FC<GroupFieldProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        id,
        data,
        update,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;

    const groupID = data.state;
    // #endregion properties


    // #region state
    const [
        show,
        setShow,
    ] = useState(true);
    // #endregion state


    // #region handlers
    const updateGroup = (
        state: string,
        value: any,
    ) => {
        const newGroupValue = data.value.map(groupField => {
            if (groupField.state === state) {
                return {
                    ...groupField,
                    value,
                }
            }

            return {
                ...groupField,
            }
        });

        update(
            data.state,
            newGroupValue,
        );
    }
    // #endregion handlers


    // #region render
    return (
        <StyledGroupField
            theme={stateGeneralTheme}
        >
            <UtilityGroup
                data={data}
                topDistance="3px"
            />

            <StyledExpander>
                {show && (
                    <PluridIconArrowUp
                        atClick={() => setShow(false)}
                        size={'small'}
                        theme={stateGeneralTheme}
                    />
                )}

                {!show && (
                    <PluridIconArrowDown
                        atClick={() => setShow(true)}
                        size={'small'}
                        theme={stateGeneralTheme}
                    />
                )}
            </StyledExpander>

            <h2>
                {data.label}
            </h2>

            {show && (
                <>
                    {data.value.map(field => {
                        const key = id + groupID + field.state;

                        const properties: any = {
                            key: key,
                            data: field,
                            update: updateGroup,
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
                            case 'list':
                                return (
                                    <ListField
                                        {...properties}
                                    />
                                );
                            case 'file':
                                return (
                                    <FileField
                                        {...properties}
                                    />
                                );
                        }
                    })}

                    <hr />
                </>
            )}
        </StyledGroupField>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): GroupFieldStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): GroupFieldDispatchProperties => ({
});


const ConnectedGroupField = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(GroupField);
// #endregion module



// #region exports
export default ConnectedGroupField;
// #endregion exports
