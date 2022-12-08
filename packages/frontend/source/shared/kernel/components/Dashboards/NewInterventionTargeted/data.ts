// #region imports
    // #region libraries
    import {
        NewEntityField,
        PrimitiveField
    } from '~kernel-components/NewEntityRenderer/data';
    // #endregion libraries
// #endregion imports



// #region module
const eventRecords: Record<string, PrimitiveField> = {
    eventHappens: {
        label: 'event happens',
        type: 'boolean',
        state: 'eventHappens',
        value: false,
        help: 'turn the event on (True) or off (False)',
    },
    changeStart: {
        label: 'change start',
        type: 'number',
        state: 'changeStart',
        value: 1.0,
        format: 'float',
        unit: 's',
        help: 'time to start change',
    },
    changeFinish: {
        label: 'change finish',
        type: 'number',
        state: 'changeFinish',
        value: 4.0,
        format: 'float',
        unit: 's',
        help: 'time to end change and return to original',
    },
    changeRate: {
        label: 'change rate',
        type: 'number',
        state: 'changeRate',
        value: 1.0,
        format: 'float',
        unit: 's',
        help: 'rate of change',
    },
    multiplier: {
        label: 'multiplier',
        type: 'number',
        state: 'multiplier',
        value: 10.0,
        format: 'float',
        unit: 's',
        help: 'factor to multiply base level',
    },
    modulatorFunction: {
        label: 'modulator function',
        type: 'string',
        state: 'modulatorFunction',
        value: '',
        help: `spatial function: 'gradient_x','gradient_y', 'gradient_r' or 'None'`,
    },
    applyTo: {
        label: 'apply to',
        type: 'list',
        state: 'applyTo',
        value: [ 'Spot' ],
        help: `name(s) of the tissue profile(s) to apply intervention to`,
    },
};

const eventFields: PrimitiveField[] = Object.values(eventRecords);


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
        value: eventFields,
        help: 'change the membrane permeability to Na+',
    },
    {
        label: 'change K mem',
        type: 'group',
        state: 'changeKMem',
        value: eventFields,
        help: 'change the membrane permeability to K+',
    },
    {
        label: 'change Cl mem',
        type: 'group',
        state: 'changeClMem',
        value: eventFields,
        help: 'change the membrane permeability to Cl-',
    },
    {
        label: 'change Ca mem',
        type: 'group',
        state: 'changeCaMem',
        value: eventFields,
        help: 'change the membrane permeability to Ca2+',
    },
    {
        label: 'apply pressure',
        type: 'group',
        state: 'applyPressure',
        value: eventFields,
        help: 'schedule application of mechanical pressure',
    },
    {
        label: 'apply external voltage',
        type: 'group',
        state: 'applyExternalVoltage',
        value: eventFields,
        help: `apply an external voltage to two edges of the environmental boundary if the "simulate extracellular spaces" option is enabled`,
    },
    {
        label: 'break ecm junctions',
        type: 'group',
        state: 'breakEcmJunctions',
        value: eventFields,
        help: `break extracellular junctions between cells`,
    },
    {
        label: 'cutting event',
        type: 'group',
        state: 'cuttingEvent',
        value: eventFields,
        help: `remove all cells selected by one or more cut profiles defined above at an arbitrary simulation time step (ignored unless at least one such profile is defined)`,
    },
];
// #endregion module
