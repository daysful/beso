// #region imports
    // #region libraries
    import {
        PluridIconInfo,
    } from '@plurid/plurid-icons-react';
    // #endregion libraries


    // #region external
    import Simulations from '~kernel-components/Dashboards/Simulations';
    import Worlds from '~kernel-components/Dashboards/Worlds';
    import Tissues from '~kernel-components/Dashboards/Tissues';
    import InterventionsTargeted from '~kernel-components/Dashboards/InterventionsTargeted';
    import InterventionsGlobal from '~kernel-components/Dashboards/InterventionsGlobal';
    import Modulators from '~kernel-components/Dashboards/Modulators';
    import Networks from '~kernel-components/Dashboards/Networks';
    import Biomolecules from '~kernel-components/Dashboards/Biomolecules';
    import Reactions from '~kernel-components/Dashboards/Reactions';
    import Channels from '~kernel-components/Dashboards/Channels';
    // #endregion external
// #endregion imports



// #region module
export const dashboards = [
    {
        id: 'simulations',
        icon: PluridIconInfo,
        label: 'simulations',
        renderers: {
            'simulations': Simulations,
        },
    },
    {
        id: 'worlds',
        icon: PluridIconInfo,
        label: 'worlds',
        renderers: {
            'worlds': Worlds,
        },
    },
    {
        id: 'tissues',
        icon: PluridIconInfo,
        label: 'tissues',
        renderers: {
            'tissues': Tissues,
        },
    },
    {
        id: 'interventions',
        icon: PluridIconInfo,
        label: 'interventions',
        defaultRender: 'interventionsTargeted',
        renderers: {
            'interventionsTargeted': InterventionsTargeted,
            'interventionsGlobal': InterventionsGlobal,
        },
    },
    {
        id: 'modulators',
        icon: PluridIconInfo,
        label: 'modulators',
        renderers: {
            'modulators': Modulators,
        },
    },
    {
        id: 'networks',
        icon: PluridIconInfo,
        label: 'networks',
        renderers: {
            'networks': Networks,
        },
    },
    {
        id: 'biomolecules',
        icon: PluridIconInfo,
        label: 'biomolecules',
        renderers: {
            'biomolecules': Biomolecules,
        },
    },
    {
        id: 'reactions',
        icon: PluridIconInfo,
        label: 'reactions',
        renderers: {
            'reactions': Reactions,
        },
    },
    {
        id: 'channels',
        icon: PluridIconInfo,
        label: 'channels',
        renderers: {
            'channels': Channels,
        },
    },
];
// #endregion module
