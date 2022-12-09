// #region imports
    // #region external
    import {
        PrimitiveField,
    } from '~kernel-components/NewEntityRenderer/data';
    // #endregion external
// #endregion imports



// #region module
export const BESO_BACKEND = process.env.BESO_BACKEND || 'http://127.0.0.1:54567';

export const GRAPHQL_API = process.env.BESO_BACKEND_GRAPHQL || (BESO_BACKEND + '/graphql');


export const eventRecords: Record<string, PrimitiveField> = {
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
        help: `spatial function: 'gradient_x','gradient_y', 'gradient_r', 'periodic', or 'None'`,
    },
    applyTo: {
        label: 'apply to',
        type: 'list',
        state: 'applyTo',
        value: [ 'Spot' ],
        help: `name(s) of the tissue profile(s) to apply intervention to`,
    },
};
// #endregion module
