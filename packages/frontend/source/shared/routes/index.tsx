// #region imports
    // #region libraries
    import React from 'react';

    import {
        PluridReactRoute,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import Head from '~kernel-components/Head';

    import IndexPlane from '~kernel-planes/Index';
    import SimulationPlane from '~kernel-planes/Simulation';
    import NotFoundPlane from '~kernel-planes/NotFound';

    import Home from '~kernel-containers/Home';
    // #endregion external
// #endregion imports



// #region module
const indexRoute: PluridReactRoute = {
    value: '/',
    exterior: Home,
    planes: [
        [
            '/',
            IndexPlane,
        ],
        [
            '/simulation',
            SimulationPlane,
        ],
    ],
    view: [
        '/',
        '/simulation',
    ],
};


const notFoundRoute: PluridReactRoute = {
    value: '/not-found',
    exterior: () => (
        <Head
            title="not found · beteks"
        />
    ),
    planes: [
        [ '/not-found', NotFoundPlane ],
    ],
    view: [
        '/not-found',
    ],
};


const routes: PluridReactRoute[] = [
    indexRoute,
    notFoundRoute,
];
// #endregion module



// #region exports
export default routes;
// #endregion exports
