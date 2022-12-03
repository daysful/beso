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
    stateUsername: string;
}

export interface HomeDispatchProperties {
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
        stateUsername,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region effects
    useEffect(() => {
        setTimeout(() => {
            if (stateUsername) {
                pubsub.publish({
                    topic: PLURID_PUBSUB_TOPIC.VIEW_SET_PLANES,
                    data: {
                        view: [
                            '/',
                        ],
                    },
                });
            } else {
                pubsub.publish({
                    topic: PLURID_PUBSUB_TOPIC.VIEW_SET_PLANES,
                    data: {
                        view: [
                            '/login',
                        ],
                    },
                });
            }
        }, 10);
    }, [
        stateUsername,
    ]);
    // #endregion effects


    // #region render
    return (
        <StyledHome>
            <Head />
        </StyledHome>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): HomeStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateUsername: selectors.general.getGeneral(state).username,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): HomeDispatchProperties => ({
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
