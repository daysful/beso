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
                const graphqlClient = serverClient(
                    cookies ? (cookies['Authorization'] || '') : '',
                );
                const request = await graphqlClient.query({
                    query: SERVER_USER,
                });

                return request.data;
            }
            const data = await getUserData();


            const store = reduxStore({
                general: {
                    notFoundFace: getRandomFace(),
                    username: data?.user ? data.user.name : '',
                    allowUserRegistration: data?.allowUserRegistration,
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
