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
    } from '~shared/kernel/data/constants/entity/world';

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
export interface NewWorldOwnProperties {
}

export interface NewWorldStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface NewWorldDispatchProperties {
    dispatchAddDataEntity: DispatchAction<typeof actions.data.addDataEntity>;
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

        // #region dispatch
        dispatchAddDataEntity,
        // #endregion dispatch
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

            onAdd={async (state) => {
                try {

                    const value = extractState(state);
                    const name = value['name'];
                    delete value['name'];

                    value['import_from_svg']['cells_from_svg'] = '';

                    const input = {
                        name,
                        data: {
                            ...value,
                        },
                    };

                    setRenderView('worlds');
                    setFullRenderArea(false);

                    const response = await graphqlClient.mutate({
                        mutation: BETSE_MUTATIONS.ADD_BETSE_WORLD,
                        variables: {
                            input,
                        },
                    });
                    const addedWorld = response.data.addBetseWorld;

                    dispatchAddDataEntity({
                        type: 'worlds',
                        data: addedWorld,
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
): NewWorldStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NewWorldDispatchProperties => ({
    dispatchAddDataEntity: (
        payload,
    ) => dispatch(
        actions.data.addDataEntity(payload),
    ),
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
