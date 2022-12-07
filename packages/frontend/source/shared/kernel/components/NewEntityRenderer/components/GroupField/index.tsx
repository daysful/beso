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
    import FileField from '~kernel-components/NewEntityRenderer/components/FileField';

    import UtilityGroup from '../UtilityGroup';
    // #endregion external


    // #region internal
    import {
        StyledGroupField,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface GroupFieldOwnProperties {
    id: string;
    data: IGroupField;
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
        groupState,
        setGroupState,
    ] = useState('{}');
    // #endregion state


    // #region handlers
    const update = useCallback((
        state: any,
        value: any,
    ) => {
        const newGroupState = {
            ...JSON.parse(groupState),
        };
        newGroupState[state] = value;

        setGroupState(JSON.stringify(newGroupState));
    }, [
        groupState,
    ]);
    // #endregion handlers


    // #region render
    return (
        <StyledGroupField
            theme={stateGeneralTheme}
        >
            <UtilityGroup
                data={data}
                topDistance="6px"
            />

            <h2>
                {data.label}
            </h2>

            {data.value.map(field => {
                const key = id + groupID + field.state;

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
                }
            })}

            <hr />
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
