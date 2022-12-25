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

    import {
        DispatchAction,
    } from '@plurid/plurid-ui-state-react';
    // #endregion libraries


    // #region external
    import {
        fields,
    } from '~shared/kernel/data/constants/entity/modulator';

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
    import actions from '~kernel-services/state/actions';
    // #endregion external
// #endregion imports



// #region module
export interface NewModulatorOwnProperties {
}

export interface NewModulatorStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface NewModulatorDispatchProperties {
    dispatchAddDataEntity: DispatchAction<typeof actions.data.addDataEntity>;
}

export type NewModulatorProperties =
    & NewModulatorOwnProperties & DashboardRenderProperties
    & NewModulatorStateProperties
    & NewModulatorDispatchProperties;


const NewModulator: React.FC<NewModulatorProperties> = (
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

        // #region dispatch
        dispatchAddDataEntity,
        // #endregion dispatch
    } = properties;
    // #endregion properties


    // #region render
    return (
        <NewEntityComponent
            fields={fields}

            setRenderView={setRenderView}
            renderViewPath="modulators"
            setFullRenderArea={setFullRenderArea}

            kind="Modulator"
            sourceFrom={(
                <PluridDropdown
                    selected={'select modulator'}
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

            onAdd={async (state) => {
                try {
                    const value = extractState(state);
                    const name = value['name'];
                    delete value['name'];

                    const input = {
                        name,
                        data: {
                            ...value,
                        },
                    };

                    setRenderView('modulators');
                    setFullRenderArea(false);

                    const response = await graphqlClient.mutate({
                        mutation: BETSE_MUTATIONS.ADD_BETSE_MODULATOR,
                        variables: {
                            input,
                        },
                    });
                    const addedModulator = response.data.addBetseModulator;

                    dispatchAddDataEntity({
                        type: 'modulators',
                        data: addedModulator,
                    });
                } catch (error) {
                    return;
                }
            }}
        />
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): NewModulatorStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NewModulatorDispatchProperties => ({
    dispatchAddDataEntity: (
        payload,
    ) => dispatch(
        actions.data.addDataEntity(payload),
    ),
});


const ConnectedNewModulator = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(NewModulator);
// #endregion module



// #region exports
export default ConnectedNewModulator;
// #endregion exports
