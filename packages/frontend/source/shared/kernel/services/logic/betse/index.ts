// #region imports
    // #region external
    import {
        NewEntityField,
    } from '~kernel-components/NewEntityRenderer/data';
    // #endregion external
// #endregion imports



// #region module
export const extractState = (
    fields: NewEntityField[],
) => {
    const paste = {};

    for (const field of fields) {
        if (field.type === 'group') {
            const groupPaste = extractState(field.value);
            paste[field.state] = groupPaste;
            continue;
        }

        paste[field.state] = field.value;
    }

    return paste;
}


export const mergeDataIntoFields = (
    data: any,
    fields: NewEntityField[],
) => {
    const _fields = JSON.parse(JSON.stringify(fields));

    for (const field of _fields) {
        if (field.type !== 'group') {
            field.value = data[field.state];
            continue;
        }

        field.value = mergeDataIntoFields(
            data[field.state],
            field.value,
        );
    }

    return _fields;
}
// #endregion module
