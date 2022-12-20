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

    import {
        extractState,
    } from '~kernel-services/logic/betse';

    import graphqlClient from '~kernel-services/graphql/client';

    import {
        BETSE_MUTATIONS,
    } from '~kernel-services/graphql/mutate/betse';

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
export interface NewFunctionOwnProperties {
}

export interface NewFunctionStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface NewFunctionDispatchProperties {
}

export type NewFunctionProperties =
    & NewFunctionOwnProperties & DashboardRenderProperties
    & NewFunctionStateProperties
    & NewFunctionDispatchProperties;


const NewFunction: React.FC<NewFunctionProperties> = (
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


    // #region render
    return (
        <NewEntityComponent
            fields={fields}

            setRenderView={setRenderView}
            renderViewPath="functions"
            setFullRenderArea={setFullRenderArea}

            kind="Function"
            sourceFrom={(
                <PluridDropdown
                    selected={'select function'}
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

            onAdd={(state) => {
                const input = {
                    ...extractState(state),
                };

                input['gradientBitmap']['file'] = '';

                graphqlClient.mutate({
                    mutation: BETSE_MUTATIONS.ADD_BETSE_FUNCTION,
                    variables: {
                        input,
                    },
                });

                setRenderView('functions');
                setFullRenderArea(false);
            }}
        />
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): NewFunctionStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NewFunctionDispatchProperties => ({
});


const ConnectedNewFunction = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(NewFunction);
// #endregion module



// #region exports
export default ConnectedNewFunction;
// #endregion exports
