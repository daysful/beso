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
    // #endregion libraries


    // #region external
    import {
        PluridFormLeftRight,
        PluridEntityPillGroup,
        PluridTextline,
    } from '~kernel-services/styled';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';

    import {
        ListField as IListField,
    } from '~kernel-components/NewEntityRenderer/data';

    import UtilityGroup from '../UtilityGroup';
    // #endregion external


    // #region internal
    import {
        StyledListField,
        StyledTextLine,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface ListFieldOwnProperties {
    data: IListField;
    update: (
        state: string,
        value: (string | number)[],
    ) => void;
}

export interface ListFieldStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface ListFieldDispatchProperties {
}

export type ListFieldProperties =
    & ListFieldOwnProperties
    & ListFieldStateProperties
    & ListFieldDispatchProperties;


const ListField: React.FC<ListFieldProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        data,

        update,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region state
    const [
        newValue,
        setNewValue,
    ] = useState('');
    // #endregion state


    // #region handlers
    const parseNewValue = () => {
        const valueAsInt = parseInt(newValue);
        const valueAsFloat = parseFloat(newValue);

        if (isNaN(valueAsInt) && isNaN(valueAsFloat)) {
            // string
            return newValue;
        }

        if (newValue.indexOf('.') > -1 ) {
            return valueAsFloat;
        }

        return valueAsInt;
    }
    // #endregion handlers


    // #region render
    return (
        <StyledListField
            theme={stateGeneralTheme}
        >
            <PluridFormLeftRight>
                <StyledTextLine>
                    <div>
                        {data.label}
                    </div>

                    <UtilityGroup
                        data={data}
                        relativePosition={true}
                        topDistance={'0px'}
                    />
                </StyledTextLine>
            </PluridFormLeftRight>

            <PluridTextline
                placeholder="new value"
                text={newValue}
                atChange={(event) => {
                    setNewValue(event.target.value);
                }}
                theme={stateGeneralTheme}
                enterAtClick={() => {
                    update(
                        data.state,
                        [...data.value, parseNewValue()],
                    );

                    setNewValue('');
                }}
                level={2}
                style={{
                    margin: '0.5rem auto',
                }}
            />

            <PluridEntityPillGroup
                entities={data.value.map(value => value + '')}
                remove={(removedValue) => {
                    update(
                        data.state,
                        data.value.filter(value => value + '' !== removedValue + ''),
                    );
                }}
                theme={stateGeneralTheme}
                style={{
                    maxWidth: '350px',
                }}
            />
        </StyledListField>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ListFieldStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ListFieldDispatchProperties => ({
});


const ConnectedListField = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(ListField);
// #endregion module



// #region exports
export default ConnectedListField;
// #endregion exports
