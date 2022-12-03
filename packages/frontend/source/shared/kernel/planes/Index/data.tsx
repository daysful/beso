// #region imports
    // #region libraries
    import {
        PluridIconPlay,
        PluridIconGlobal,
        PluridIconPalette,
        PluridIconAdminSpace,
        PluridIconApps,
        PluridIconShare,
        PluridIconBlocks,
        PluridIconLoop,
        PluridIconWebhook,
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
export const icons = {
    simulations: PluridIconPlay,
    worlds: PluridIconGlobal,
    tissues: PluridIconPalette,
    interventions: PluridIconAdminSpace,
    modulators: PluridIconApps,
    networks: PluridIconShare,
    biomolecules: PluridIconBlocks,
    reactions: PluridIconLoop,
    channels: PluridIconWebhook,
};


export const dashboards = [
    {
        id: 'simulations',
        icon: icons.simulations,
        label: 'simulations',
        renderers: {
            'simulations': Simulations,
        },
    },
    {
        id: 'worlds',
        icon: icons.worlds,
        label: 'worlds',
        renderers: {
            'worlds': Worlds,
        },
    },
    {
        id: 'tissues',
        icon: icons.tissues,
        label: 'tissues',
        renderers: {
            'tissues': Tissues,
        },
    },
    {
        id: 'interventions',
        icon: icons.interventions,
        label: 'interventions',
        defaultRender: 'interventionsTargeted',
        renderers: {
            'interventionsTargeted': InterventionsTargeted,
            'interventionsGlobal': InterventionsGlobal,
        },
    },
    {
        id: 'modulators',
        icon: icons.modulators,
        label: 'modulators',
        renderers: {
            'modulators': Modulators,
        },
    },
    {
        id: 'networks',
        icon: icons.networks,
        label: 'networks',
        renderers: {
            'networks': Networks,
        },
    },
    {
        id: 'biomolecules',
        icon: icons.biomolecules,
        label: 'biomolecules',
        renderers: {
            'biomolecules': Biomolecules,
        },
    },
    {
        id: 'reactions',
        icon: icons.reactions,
        label: 'reactions',
        renderers: {
            'reactions': Reactions,
        },
    },
    {
        id: 'channels',
        icon: icons.channels,
        label: 'channels',
        renderers: {
            'channels': Channels,
        },
    },
];
// #endregion module
