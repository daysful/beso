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
    } from '~shared/kernel/data/constants/entity/reaction';

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
export interface NewReactionOwnProperties {
}

export interface NewReactionStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface NewReactionDispatchProperties {
    dispatchAddDataEntity: DispatchAction<typeof actions.data.addDataEntity>;
}

export type NewReactionProperties =
    & NewReactionOwnProperties & DashboardRenderProperties
    & NewReactionStateProperties
    & NewReactionDispatchProperties;


const NewReaction: React.FC<NewReactionProperties> = (
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
            renderViewPath="reactions"
            setFullRenderArea={setFullRenderArea}

            kind="Reaction"
            sourceFrom={(
                <PluridDropdown
                    selected={'select reaction'}
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

                    setRenderView('reactions');
                    setFullRenderArea(false);

                    const response = await graphqlClient.mutate({
                        mutation: BETSE_MUTATIONS.ADD_BETSE_REACTION,
                        variables: {
                            input,
                        },
                    });
                    const addedReaction = response.data.addBetseReaction;

                    dispatchAddDataEntity({
                        type: 'reactions',
                        data: addedReaction,
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
): NewReactionStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): NewReactionDispatchProperties => ({
    dispatchAddDataEntity: (
        payload,
    ) => dispatch(
        actions.data.addDataEntity(payload),
    ),
});


const ConnectedNewReaction = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(NewReaction);
// #endregion module



// #region exports
export default ConnectedNewReaction;
// #endregion exports
