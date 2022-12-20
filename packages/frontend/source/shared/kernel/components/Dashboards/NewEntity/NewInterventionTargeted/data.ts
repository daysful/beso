// #region imports
    // #region external
    import {
        NewEntityField,
        NumberField,
        ListField,
        StringField,
        BooleanField,
    } from '~kernel-components/NewEntityRenderer/data';

    import {
        eventRecords,
    } from '~kernel-data/constants';
    // #endregion external
// #endregion imports



// #region module
export const fields: NewEntityField[] = [
    {
        label: 'name',
        type: 'string',
        state: 'name',
        value: 'new targeted intervention',
        required: true,
    },
    {
        label: 'change Na mem',
        type: 'group',
        state: 'changeNaMem',
        value: [
            eventRecords.eventHappens,
            {
                ...eventRecords.changeStart,
                value: 1.0,
            } as NumberField,
            {
                ...eventRecords.changeFinish,
                value: 4.0,
            } as NumberField,
            {
                ...eventRecords.changeRate,
                value: 1.0,
            } as NumberField,
            {
                ...eventRecords.multiplier,
                value: 10.0,
            } as NumberField,
            eventRecords.modulatorFunction,
            eventRecords.applyTo,
        ],
        help: 'change the membrane permeability to Na+',
    },
    {
        label: 'change K mem',
        type: 'group',
        state: 'changeKMem',
        value: [
            eventRecords.eventHappens,
            {
                ...eventRecords.changeStart,
                value: 1.0,
            } as NumberField,
            {
                ...eventRecords.changeFinish,
                value: 2.0,
            } as NumberField,
            {
                ...eventRecords.changeRate,
                value: 0.5,
            } as NumberField,
            {
                ...eventRecords.multiplier,
                value: 50.0,
            } as NumberField,
            eventRecords.modulatorFunction,
            eventRecords.applyTo,
        ],
        help: 'change the membrane permeability to K+',
    },
    {
        label: 'change Cl mem',
        type: 'group',
        state: 'changeClMem',
        value: [
            eventRecords.eventHappens,
            {
                ...eventRecords.changeStart,
                value: 1.0,
            } as NumberField,
            {
                ...eventRecords.changeFinish,
                value: 4.0,
            } as NumberField,
            {
                ...eventRecords.changeRate,
                value: 0.5,
            } as NumberField,
            {
                ...eventRecords.multiplier,
                value: 10.0,
            } as NumberField,
            eventRecords.modulatorFunction,
            eventRecords.applyTo,
        ],
        help: 'change the membrane permeability to Cl-',
    },
    {
        label: 'change Ca mem',
        type: 'group',
        state: 'changeCaMem',
        value: [
            eventRecords.eventHappens,
            {
                ...eventRecords.changeStart,
                value: 2.0,
            } as NumberField,
            {
                ...eventRecords.changeFinish,
                value: 8.0,
            } as NumberField,
            {
                ...eventRecords.changeRate,
                value: 1.0,
            } as NumberField,
            {
                ...eventRecords.multiplier,
                value: 10.0,
            } as NumberField,
            eventRecords.modulatorFunction,
            {
                ...eventRecords.applyTo,
                value: [ 'Base' ],
            } as ListField,
        ],
        help: 'change the membrane permeability to Ca2+',
    },
    {
        label: 'apply pressure',
        type: 'group',
        state: 'applyPressure',
        value: [
            eventRecords.eventHappens,
            {
                ...eventRecords.changeStart,
                value: 0.0,
            } as NumberField,
            {
                ...eventRecords.changeFinish,
                value: 1.0,
            } as NumberField,
            {
                ...eventRecords.changeRate,
                value: 5.0e-2,
            } as NumberField,
            {
                ...eventRecords.multiplier,
                value: 100.0,
            } as NumberField,
            {
                ...eventRecords.modulatorFunction,
                value: 'periodic',
            } as StringField,
            eventRecords.applyTo,
        ],
        help: 'schedule application of mechanical pressure',
    },
    {
        label: 'apply external voltage',
        type: 'group',
        state: 'applyExternalVoltage',
        value: [
            eventRecords.eventHappens,
            {
                ...eventRecords.changeStart,
                value: 0.5,
                help: 'time [s] at which to begin applying voltage',
            } as NumberField,
            {
                ...eventRecords.changeFinish,
                value: 1.0,
                help: 'time [s] at which to cease applying voltage',
            } as NumberField,
            {
                ...eventRecords.changeRate,
                value: 0.1,
                help: 'time [s] over which voltage proceeds from background to peak and from peak to background',
            } as NumberField,
            {
                label: 'peak voltage',
                type: 'number',
                state: 'peakVoltage',
                value: 1.0e-3,
                format: 'scientific',
                unit: 'V',
                help: 'max voltage [V] applied by this event',
            },
            {
                label: 'positive voltage boundary',
                type: 'string',
                state: 'positiveVoltageBoundary',
                value: 'top',
                help: 'env boundary to apply positive voltage ("top", "bottom", "left", or "right")',
            },
            {
                label: 'negative voltage boundary',
                type: 'string',
                state: 'negativeVoltageBoundary',
                value: 'bottom',
                help: 'env boundary to apply negative voltage ("top", "bottom", "left", or "right")',
            },
        ],
        help: `apply an external voltage to two edges of the environmental boundary if the "simulate extracellular spaces" option is enabled`,
    },
    {
        label: 'break ecm junctions',
        type: 'group',
        state: 'breakEcmJunctions',
        value: [
            eventRecords.eventHappens,
            {
                ...eventRecords.changeStart,
                value: 2.0,
            } as NumberField,
            {
                ...eventRecords.changeFinish,
                value: 7.0,
            } as NumberField,
            {
                ...eventRecords.changeRate,
                value: 0.5,
            } as NumberField,
            {
                ...eventRecords.multiplier,
                value: 0.0,
            } as NumberField,
            eventRecords.modulatorFunction,
            eventRecords.applyTo,
        ],
        help: `break extracellular junctions between cells`,
    },
    {
        label: 'cutting event',
        type: 'group',
        state: 'cuttingEvent',
        value: [
            {
                ...eventRecords.eventHappens,
                value: true,
            } as BooleanField,
            {
                ...eventRecords.applyTo,
                value: [ 'surgery' ],
            } as ListField,
            {
                label: 'break TJ',
                type: 'boolean',
                state: 'breakTJ',
                value: true,
                help: 'break tight junctions? (otherwise assumes instant barrier healing)',
            },
            {
                label: 'wound TJ',
                type: 'number',
                state: 'woundTJ',
                value: 1.0e-1,
                format: 'scientific',
                help: 'how leaky are the tight junctions at the wound (max 1.0)',
            },
        ],
        help: `remove all cells selected by one or more cut profiles defined above at an arbitrary simulation time step (ignored unless at least one such profile is defined)`,
    },
];
// #endregion module
