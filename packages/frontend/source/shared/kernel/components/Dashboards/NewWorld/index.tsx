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
        DashboardRenderProperties,
    } from '~kernel-components/DashboardsRenderer/data';

    import NewEntityComponent from '~kernel-components/NewEntityComponent';

    import {
        PluridDropdown,
    } from '~kernel-services/styled';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        fields,
    } from './data';
    // #endregion internal
// #endregion imports



// #region module
export interface NewWorldOwnProperties {
}

export interface NewWorldStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface NewWorldDispatchProperties {
}

export type NewWorldProperties =
    & NewWorldOwnProperties & DashboardRenderProperties
    & NewWorldStateProperties
    & NewWorldDispatchProperties;


const NewWorld: React.FC<NewWorldProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        setRenderView,
        setFullRenderArea,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region handlers
    const checkValid = (
        state: any,
    ) => {
    //   if (
    //         name
    //     ) {
    //         setIsValid(true);
    //     } else {
    //         setIsValid(false);
    //     }
    }
    // #endregion handlers


    // #region render
    return (
        <NewEntityComponent
            fields={fields}

            setRenderView={setRenderView}
            renderViewPath="worlds"
            setFullRenderArea={setFullRenderArea}

            kind="World"
            sourceFrom={(
                <PluridDropdown
                    selected={'select world'}
                    selectables={[
                        'none',
                    ]}
                    atSelect={(selection) => {
                        if (typeof selection !== 'string') {
                            return;
                        }
                    }}
                    style={{
                        fontSize: '0.9rem',
                    }}
                    theme={stateGeneralTheme}
                />
            )}
        />
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): NewWorldStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NewWorldDispatchProperties => ({
});


const ConnectedNewWorld = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(NewWorld);
// #endregion module



// #region exports
export default ConnectedNewWorld;
// #endregion exports
