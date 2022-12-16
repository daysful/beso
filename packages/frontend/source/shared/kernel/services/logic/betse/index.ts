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
// #endregion module
