// #region imports
    // #region libraries
    import React from 'react';

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
        PluridInputLine,
    } from '~kernel-services/styled';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';

    import {
        NumberField as INumberField,
    } from '~kernel-components/NewEntityRenderer/data';

    import UtilityGroup from '../UtilityGroup';
    // #endregion external


    // #region internal
    import {
        StyledNumberField,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface NumberFieldOwnProperties {
    data: INumberField;
    update: (
        state: string,
        value: number,
    ) => void;
}

export interface NumberFieldStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface NumberFieldDispatchProperties {
}

export type NumberFieldProperties =
    & NumberFieldOwnProperties
    & NumberFieldStateProperties
    & NumberFieldDispatchProperties;


const NumberField: React.FC<NumberFieldProperties> = (
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


    // #region render
    return (
        <StyledNumberField
            theme={stateGeneralTheme}
        >
            <PluridInputLine
                theme={stateGeneralTheme}
                name={data.label}
                text={data.value + ''}
                atChange={(event) => {
                    const value = event.target.value;
                    const number = data.format === 'integer'
                        ? parseInt(value)
                        : parseFloat(value);

                    update(
                        data.state,
                        number,
                    );
                }}
            />

            <UtilityGroup
                data={data}
            />
        </StyledNumberField>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): NumberFieldStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NumberFieldDispatchProperties => ({
});


const ConnectedNumberField = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(NumberField);
// #endregion module



// #region exports
export default ConnectedNumberField;
// #endregion exports
