// #region module
export const rowTemplate = '0.5fr 0.5fr 0.5fr 30px 30px';

export const rowRenderFields = (
    pluridlinkType: string,
) => ([
    'name', 'generatedAt', `pluridlink:${pluridlinkType}`, 'obliterate',
]);
// #endregion module
