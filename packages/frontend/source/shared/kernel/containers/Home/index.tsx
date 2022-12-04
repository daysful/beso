// #region imports
    // #region libraries
    import React, {
        useEffect,
    } from 'react';

    import { AnyAction } from 'redux';
    import { connect } from 'react-redux';
    import { ThunkDispatch } from 'redux-thunk';


    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        PluridRouteComponentProperty,
        PluridPubSub,
        PLURID_PUBSUB_TOPIC,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import Head from '~kernel-components/Head';
    import ToolbarHomeControls from '~shared/kernel/components/Toolbar/HomeControls';

    import {
        addNewPlane,
    } from '~kernel-services/logic/general';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledHome,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface HomeOwnProperties {
    plurid: PluridRouteComponentProperty;
    pubsub: PluridPubSub;
}

export interface HomeStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateIdentonym: string;
    statePlanes: any[];
}

export interface HomeDispatchProperties {
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
}

export type HomeProperties = HomeOwnProperties
    & HomeStateProperties
    & HomeDispatchProperties;


const Home: React.FC<HomeProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        pubsub,
        // #endregion own

        // #region state
        stateIdentonym,
        // #endregion state

        // #region dispatch
        dispatch,
        // #endregion dispatch
    } = properties;
    // #endregion properties


    // #region effects
    useEffect(() => {
        setTimeout(() => {
            const {
                plane,
            } = addNewPlane(dispatch);

            const view = stateIdentonym
                ? [ plane ]
                : [ '/login' ];

            pubsub.publish({
                topic: PLURID_PUBSUB_TOPIC.VIEW_SET_PLANES,
                data: {
                    view,
                },
            });
        }, 50);
    }, [
        stateIdentonym,
    ]);
    // #endregion effects


    // #region render
    return (
        <StyledHome>
            <Head />

            {stateIdentonym && (
                <ToolbarHomeControls
                    pubsub={pubsub}
                />
            )}
        </StyledHome>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): HomeStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateIdentonym: selectors.general.getGeneral(state).identonym,
    statePlanes: selectors.product.getProduct(state).planes,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): HomeDispatchProperties => ({
    dispatch,
});


const ConnectedHome = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Home);
// #endregion module



// #region exports
export default ConnectedHome;
// #endregion exports
