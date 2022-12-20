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
    import Simulations from '~shared/kernel/components/Dashboards/Entities/Simulations';
    import NewSimulation from '~shared/kernel/components/Dashboards/NewEntity/NewSimulation';

    import Worlds from '~shared/kernel/components/Dashboards/Entities/Worlds';
    import NewWorld from '~shared/kernel/components/Dashboards/NewEntity/NewWorld';

    import Tissues from '~shared/kernel/components/Dashboards/Entities/Tissues';
    import NewTissue from '~shared/kernel/components/Dashboards/NewEntity/NewTissue';

    import InterventionsTargeted from '~shared/kernel/components/Dashboards/Entities/InterventionsTargeted';
    import NewInterventionTargeted from '~shared/kernel/components/Dashboards/NewEntity/NewInterventionTargeted';

    import InterventionsGlobal from '~shared/kernel/components/Dashboards/Entities/InterventionsGlobal';
    import NewInterventionGlobal from '~shared/kernel/components/Dashboards/NewEntity/NewInterventionGlobal';

    import Functions from '~shared/kernel/components/Dashboards/Entities/Functions';
    import NewFunction from '~shared/kernel/components/Dashboards/NewEntity/NewFunction';

    import Networks from '~shared/kernel/components/Dashboards/Entities/Networks';
    import NewNetwork from '~shared/kernel/components/Dashboards/NewEntity/NewNetwork';

    import Biomolecules from '~shared/kernel/components/Dashboards/Entities/Biomolecules';
    import NewBiomolecule from '~shared/kernel/components/Dashboards/NewEntity/NewBiomolecule';

    import Reactions from '~shared/kernel/components/Dashboards/Entities/Reactions';
    import NewReaction from '~shared/kernel/components/Dashboards/NewEntity/NewReaction';

    import Channels from '~shared/kernel/components/Dashboards/Entities/Channels';
    import NewChannel from '~kernel-components/Dashboards/NewEntity/NewChannel';

    import Transporters from '~shared/kernel/components/Dashboards/Entities/Transporters';
    import NewTransporter from '~shared/kernel/components/Dashboards/NewEntity/NewTransporter';

    import Modulators from '~shared/kernel/components/Dashboards/Entities/Modulators';
    import NewModulator from '~shared/kernel/components/Dashboards/NewEntity/NewModulator';
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
