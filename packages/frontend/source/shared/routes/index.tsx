// #region imports
    // #region libraries
    import React from 'react';

    import {
        PluridReactRoute,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import Head from '~kernel-components/Head';

    import LoginPlane from '~kernel-planes/Login';
    import DashboardPlane from '~shared/kernel/planes/Dashboard';

    import SimulationPlane from '~kernel-planes/Entities/Simulation';
    import WorldPlane from '~kernel-planes/Entities/World';
    import TissuePlane from '~kernel-planes/Entities/Tissue';
    import InterventionPlane from '~kernel-planes/Entities/Intervention';
    import FunctionPlane from '~kernel-planes/Entities/Function';
    import NetworkPlane from '~kernel-planes/Entities/Network';
    import BiomoleculePlane from '~kernel-planes/Entities/Biomolecule';
    import ReactionPlane from '~kernel-planes/Entities/Reaction';
    import ChannelPlane from '~kernel-planes/Entities/Channel';
    import TransporterPlane from '~kernel-planes/Entities/Transporter';
    import ModulatorPlane from '~kernel-planes/Entities/Modulator';

    import NotFoundPlane from '~kernel-planes/NotFound';

    import Home from '~kernel-containers/Home';
    // #endregion external
// #endregion imports



// #region module
const indexRoute: PluridReactRoute = {
    value: '/',
    exterior: Home,
    planes: [
        [ '/login', LoginPlane ],
        [ '/dashboard/:id', DashboardPlane ],
        [ '/simulation/:id', SimulationPlane ],
        [ '/world/:id', WorldPlane ],
        [ '/tissue/:id', TissuePlane ],
        [ '/intervention/:id', InterventionPlane ],
        [ '/function/:id', FunctionPlane ],
        [ '/network/:id', NetworkPlane ],
        [ '/biomolecule/:id', BiomoleculePlane ],
        [ '/reaction/:id', ReactionPlane ],
        [ '/channel/:id', ChannelPlane ],
        [ '/transporter/:id', TransporterPlane ],
        [ '/modulator/:id', ModulatorPlane ],
    ],
    view: [],
    defaultConfiguration: {
        elements: {
            plane: {
                controls: {
                    title: false,
                },
            },
        },
    },
};


const notFoundRoute: PluridReactRoute = {
    value: '/not-found',
    exterior: () => (
        <Head
            title="not found · beso"
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
