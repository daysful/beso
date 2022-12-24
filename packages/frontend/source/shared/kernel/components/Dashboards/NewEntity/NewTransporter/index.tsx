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
        fields,
    } from '~shared/kernel/data/constants/entity/transporter';

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
// #endregion imports



// #region module
export interface NewTransporterOwnProperties {
}

export interface NewTransporterStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface NewTransporterDispatchProperties {
}

export type NewTransporterProperties =
    & NewTransporterOwnProperties & DashboardRenderProperties
    & NewTransporterStateProperties
    & NewTransporterDispatchProperties;


const NewTransporter: React.FC<NewTransporterProperties> = (
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
            renderViewPath="transporters"
            setFullRenderArea={setFullRenderArea}

            kind="Transporter"
            sourceFrom={(
                <PluridDropdown
                    selected={'select transporter'}
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
                const value = extractState(state);
                const name = value['name'];
                delete value['name'];

                const input = {
                    name,
                    data: {
                        ...value,
                    },
                };

                graphqlClient.mutate({
                    mutation: BETSE_MUTATIONS.ADD_BETSE_TRANSPORTER,
                    variables: {
                        input,
                    },
                });

                setRenderView('transporters');
                setFullRenderArea(false);
            }}
        />
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): NewTransporterStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NewTransporterDispatchProperties => ({
});


const ConnectedNewTransporter = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(NewTransporter);
// #endregion module



// #region exports
export default ConnectedNewTransporter;
// #endregion exports
