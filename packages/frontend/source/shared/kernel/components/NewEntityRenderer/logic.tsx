// #region imports
    // #region libraries
    import React from 'react';
    // #endregion libraries


    // #region internal
    import StringField from './components/StringField';
    import NumberField from './components/NumberField';
    import BooleanField from './components/BooleanField';
    import ListField from './components/ListField';
    import FileField from './components/FileField';
    import GroupField from './components/GroupField';

    import {
        NewEntityField,
    } from './data';
    // #endregion internal
// #endregion imports



// #region module
export const resolveView = (
    fields: NewEntityField[],
    baseID: string,
    update: (
        state: string,
        value: any,
    ) => void,
) => (
    fields.map(field => {
        const key = baseID + field.state;

        const properties: any = {
            key: key,
            data: field,
            update: update,
        };

        switch (field.type) {
            case 'string':
                return (
                    <StringField
                        {...properties}
                    />
                );
            case 'number':
                return (
                    <NumberField
                        {...properties}
                    />
                );
            case 'boolean':
                return (
                    <BooleanField
                        {...properties}
                    />
                );
            case 'list':
                return (
                    <ListField
                        {...properties}
                    />
                );
            case 'file':
                return (
                    <FileField
                        {...properties}
                    />
                );
            case 'group':
            case 'subgroup':
                return (
                    <GroupField
                        {...properties}
                        id={baseID}
                        isSubgroup={field.type === 'subgroup'}
                    />
                );
        }
    })
);
// #endregion module
