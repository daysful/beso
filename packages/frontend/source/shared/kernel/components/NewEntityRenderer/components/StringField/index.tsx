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
        PluridInputLine,
    } from '~kernel-services/styled';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';

    import {
        StringField as IStringField,
    } from '~kernel-components/NewEntityRenderer/data';
    // #endregion external


    // #region internal
    import {
        StyledStringField,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface StringFieldOwnProperties {
    data: IStringField;
    update: (
        state: string,
        value: string,
    ) => void;
}

export interface StringFieldStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface StringFieldDispatchProperties {
}

export type StringFieldProperties =
    & StringFieldOwnProperties
    & StringFieldStateProperties
    & StringFieldDispatchProperties;


const StringField: React.FC<StringFieldProperties> = (
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
        value,
        setValue,
    ] = useState(data.value);
    // #endregion state


    // #region effects
    useEffect(() => {
        update(
            data.state,
            value,
        );
    }, [
        value,
    ]);
    // #endregion effects


    // #region render
    return (
        <StyledStringField
            theme={stateGeneralTheme}
        >
            <PluridInputLine
                theme={stateGeneralTheme}
                name={data.label}
                text={value}
                atChange={(event) => {
                    setValue(event.target.value);
                }}
            />
        </StyledStringField>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): StringFieldStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): StringFieldDispatchProperties => ({
});


const ConnectedStringField = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(StringField);
// #endregion module



// #region exports
export default ConnectedStringField;
// #endregion exports
