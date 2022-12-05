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
    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';

    import {
        FileField as IFileField,
    } from '~kernel-components/NewEntityRenderer/data';
    // #endregion external


    // #region internal
    import {
        StyledFileField,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface FileFieldOwnProperties {
    data: IFileField;
    update: (
        state: string,
        value: File,
    ) => void;
}

export interface FileFieldStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface FileFieldDispatchProperties {
}

export type FileFieldProperties =
    & FileFieldOwnProperties
    & FileFieldStateProperties
    & FileFieldDispatchProperties;


const FileField: React.FC<FileFieldProperties> = (
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
    ] = useState<File | undefined>();
    // #endregion state


    // #region effects
    useEffect(() => {
        update(
            data.state,
            value as File,
        );
    }, [
        value,
    ]);
    // #endregion effects


    // #region render
    return (
        <StyledFileField
            theme={stateGeneralTheme}
        >
            {data.label}
        </StyledFileField>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): FileFieldStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): FileFieldDispatchProperties => ({
});


const ConnectedFileField = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(FileField);
// #endregion module



// #region exports
export default ConnectedFileField;
// #endregion exports
