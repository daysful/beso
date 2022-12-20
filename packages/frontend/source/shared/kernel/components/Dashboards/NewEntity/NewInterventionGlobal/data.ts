// #region imports
    // #region external
    import {
        NewEntityField,
        NumberField,
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
        value: 'new global intervention',
        required: true,
    },
    {
        label: 'change K env',
        type: 'group',
        state: 'changeKEnv',
        value: [
            eventRecords.eventHappens,
            {
                ...eventRecords.changeStart,
                value: 1.0,
            } as NumberField,
            {
                ...eventRecords.changeFinish,
                value: 12.0,
            } as NumberField,
            {
                ...eventRecords.changeRate,
                value: 1.0,
            } as NumberField,
            {
                ...eventRecords.multiplier,
                value: 20,
            } as NumberField,
        ],
        help: 'change the environmental concentration of K+',
    },
    {
        label: 'change Cl env',
        type: 'group',
        state: 'changeClEnv',
        value: [
            eventRecords.eventHappens,
            {
                ...eventRecords.changeStart,
                value: 5.0,
            } as NumberField,
            {
                ...eventRecords.changeFinish,
                value: 25.0,
            } as NumberField,
            {
                ...eventRecords.changeRate,
                value: 2.0,
            } as NumberField,
            {
                ...eventRecords.multiplier,
                value: 10,
            } as NumberField,
        ],
        help: 'change the environmental concentration of Cl-',
    },
    {
        label: 'change Na env',
        type: 'group',
        state: 'changeNaEnv',
        value: [
            eventRecords.eventHappens,
            {
                ...eventRecords.changeStart,
                value: 1.0,
            } as NumberField,
            {
                ...eventRecords.changeFinish,
                value: 9.0,
            } as NumberField,
            {
                ...eventRecords.changeRate,
                value: 1.0,
            } as NumberField,
            {
                ...eventRecords.multiplier,
                value: 5,
            } as NumberField,
        ],
        help: 'change the environmental concentration of Na+',
    },
    {
        label: 'change temperature',
        type: 'group',
        state: 'changeTemperature',
        value: [
            eventRecords.eventHappens,
            {
                ...eventRecords.changeStart,
                value: 1.0,
            } as NumberField,
            {
                ...eventRecords.changeFinish,
                value: 9.0,
            } as NumberField,
            {
                ...eventRecords.changeRate,
                value: 0.5,
            } as NumberField,
            {
                ...eventRecords.multiplier,
                value: 0.5,
            } as NumberField,
        ],
        help: 'change the environmental temperature',
    },
    {
        label: 'block gap junctions',
        type: 'group',
        state: 'blockGapJunctions',
        value: [
            eventRecords.eventHappens,
            {
                ...eventRecords.changeStart,
                value: 2.0,
            } as NumberField,
            {
                ...eventRecords.changeFinish,
                value: 6.0,
            } as NumberField,
            {
                ...eventRecords.changeRate,
                value: 1.5,
            } as NumberField,
            {
                label: 'random fraction',
                type: 'number',
                state: 'randomFraction',
                value: 100,
                format: 'integer',
                help: 'percentage of gap junctions randomly targeted',
            },
        ],
        help: 'block the gap junctions between cells',
    },
    {
        label: 'block NaKATP pump',
        type: 'group',
        state: 'blockNaKATPpump',
        value: [
            eventRecords.eventHappens,
            {
                ...eventRecords.changeStart,
                value: 5.0,
            } as NumberField,
            {
                ...eventRecords.changeFinish,
                value: 25.0,
            } as NumberField,
            {
                ...eventRecords.changeRate,
                value: 1.0,
            } as NumberField,
        ],
        help: 'block the NaKATP pump',
    },
];
// #endregion module
