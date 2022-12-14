// #region imports
    // #region libraries
    import {
        PluridIconPlay,
        PluridIconGlobal,
        PluridIconPalette,
        PluridIconAdminSpace,
        PluridIconBrainCircuits,
        PluridIconShare,
        PluridIconBlocks,
        PluridIconLoop,
        PluridIconWebhook,
        PluridIconReset,
        PluridIconApps,
    } from '@plurid/plurid-icons-react';
    // #endregion libraries


    // #region external
    import Simulations from '~kernel-components/Dashboards/Simulations';
    import NewSimulation from '~kernel-components/Dashboards/NewSimulation';

    import Worlds from '~kernel-components/Dashboards/Worlds';
    import NewWorld from '~kernel-components/Dashboards/NewWorld';

    import Tissues from '~kernel-components/Dashboards/Tissues';
    import NewTissue from '~kernel-components/Dashboards/NewTissue';

    import InterventionsTargeted from '~kernel-components/Dashboards/InterventionsTargeted';
    import NewInterventionTargeted from '~kernel-components/Dashboards/NewInterventionTargeted';

    import InterventionsGlobal from '~kernel-components/Dashboards/InterventionsGlobal';
    import NewInterventionGlobal from '~kernel-components/Dashboards/NewInterventionGlobal';

    import Functions from '~kernel-components/Dashboards/Functions';
    import NewFunction from '~kernel-components/Dashboards/NewFunction';

    import Networks from '~kernel-components/Dashboards/Networks';
    import NewNetwork from '~kernel-components/Dashboards/NewNetwork';

    import Biomolecules from '~kernel-components/Dashboards/Biomolecules';
    import NewBiomolecule from '~kernel-components/Dashboards/NewBiomolecule';

    import Reactions from '~kernel-components/Dashboards/Reactions';
    import NewReaction from '~kernel-components/Dashboards/NewReaction';

    import Channels from '~kernel-components/Dashboards/Channels';
    import NewChannel from '~kernel-components/Dashboards/NewChannel';

    import Transporters from '~kernel-components/Dashboards/Transporters';
    import NewTransporter from '~kernel-components/Dashboards/NewTransporter';

    import Modulators from '~kernel-components/Dashboards/Modulators';
    import NewModulator from '~kernel-components/Dashboards/NewModulator';
    // #endregion external
// #endregion imports



// #region module
export const icons = {
    simulations: PluridIconPlay,
    worlds: PluridIconGlobal,
    tissues: PluridIconPalette,
    interventions: PluridIconAdminSpace,
    functions: PluridIconBrainCircuits,
    networks: PluridIconShare,
    biomolecules: PluridIconBlocks,
    reactions: PluridIconLoop,
    channels: PluridIconWebhook,
    transporters: PluridIconReset,
    modulators: PluridIconApps,
};


export const dashboards = [
    {
        id: 'simulations',
        icon: icons.simulations,
        label: 'simulations',
        renderers: {
            'simulations': Simulations,
            'new-simulation': NewSimulation,
        },
    },
    {
        id: 'worlds',
        icon: icons.worlds,
        label: 'worlds',
        renderers: {
            'worlds': Worlds,
            'new-world': NewWorld,
        },
    },
    {
        id: 'tissues',
        icon: icons.tissues,
        label: 'tissues',
        renderers: {
            'tissues': Tissues,
            'new-tissue': NewTissue,

        },
    },
    {
        id: 'interventions',
        icon: icons.interventions,
        label: 'interventions',
        defaultRender: 'interventionsTargeted',
        renderers: {
            'interventionsTargeted': InterventionsTargeted,
            'new-interventionTargeted': NewInterventionTargeted,
            'interventionsGlobal': InterventionsGlobal,
            'new-interventionGlobal': NewInterventionGlobal,
        },
    },
    {
        id: 'functions',
        icon: icons.functions,
        label: 'functions',
        renderers: {
            'functions': Functions,
            'new-function': NewFunction,
        },
    },
    {
        id: 'networks',
        icon: icons.networks,
        label: 'networks',
        renderers: {
            'networks': Networks,
            'new-network': NewNetwork,
        },
    },
    {
        id: 'biomolecules',
        icon: icons.biomolecules,
        label: 'biomolecules',
        renderers: {
            'biomolecules': Biomolecules,
            'new-biomolecule': NewBiomolecule,
        },
    },
    {
        id: 'reactions',
        icon: icons.reactions,
        label: 'reactions',
        renderers: {
            'reactions': Reactions,
            'new-reaction': NewReaction,
        },
    },
    {
        id: 'channels',
        icon: icons.channels,
        label: 'channels',
        renderers: {
            'channels': Channels,
            'new-channel': NewChannel,
        },
    },
    {
        id: 'transporters',
        icon: icons.transporters,
        label: 'transporters',
        renderers: {
            'transporters': Transporters,
            'new-transporter': NewTransporter,
        },
    },
    {
        id: 'modulators',
        icon: icons.modulators,
        label: 'modulators',
        renderers: {
            'modulators': Modulators,
            'new-modulator': NewModulator,
        },
    },
];
// #endregion module
