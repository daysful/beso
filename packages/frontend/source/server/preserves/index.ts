// #region imports
    // #region libraries
    import express from 'express';

    import {
        PluridPreserve,
        PluridRouteMatch,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import {
        getRandomFace,
    } from '~kernel-planes/NotFound/logic';

    import * as generalState from '~kernel-services/state/modules/general';
    import reduxStore from '~kernel-services/state/store';

    import {
        serverClient,
    } from '~kernel-services/graphql/client';

    import {
        SERVER_USER,
    } from '~kernel-services/graphql/query';
    // #endregion external
// #endregion imports



// #region module
const preserves: PluridPreserve<
    PluridRouteMatch | undefined,
    express.Request,
    express.Response
>[] = [
    {
        serve: '*',
        onServe: async (
            transmission,
        ) => {
            const {
                cookies,
            } = transmission.request;

            const getUserData = async () => {
                try {
                    const graphqlClient = serverClient(
                        cookies ? (cookies['Authorization'] || '') : '',
                    );
                    const request = await graphqlClient.query({
                        query: SERVER_USER,
                    });

                    return request.data || {};
                } catch (error) {
                    return {};
                }
            }
            const data = await getUserData();

            const betseData = data.betse || {};

            const store = reduxStore({
                data: {
                    simulations: betseData.simulations || [],
                    worlds: betseData.worlds || [],
                    tissues: betseData.tissues || [],
                    globalInterventions: betseData.globalInterventions || [],
                    targetedInterventions: betseData.targetedInterventions || [],
                    modulatorFunctions: betseData.modulatorFunctions || [],
                    networks: betseData.networks || [],
                    biomolecules: betseData.biomolecules || [],
                    reactions: betseData.reactions || [],
                    channels: betseData.channels || [],
                    transporters: betseData.transporters || [],
                    modulators: betseData.modulators || [],
                },
                general: {
                    ...generalState.initialState,
                    notFoundFace: getRandomFace(),
                    identonym: data.user ? data.user.name : '',
                    allowUserRegistration: !!data.allowUserRegistration,
                },
            });

            return {
                providers: {
                    Redux: {
                        store,
                    },
                },
                globals: {
                    __PRELOADED_REDUX_STATE__: JSON.stringify(store.getState()),
                },
            };
        },
    },
];
// #endregion module



// #region exports
export default preserves;
// #endregion exports
