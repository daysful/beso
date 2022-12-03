// #region module
export const createSearchTerms = (
    data: any[],
    fields: string[],
) => {
    const searchTerms = data.map(
        entity => {
            const {
                id,
            } = entity;

            const termData: string[] = [];

            for (const field of fields) {
                const term = entity[field];

                if (term && typeof term === 'string') {
                    termData.push(term.toLowerCase());
                }
            }

            const searchTerm = {
                id,
                data: termData,
            };

            return searchTerm;
        },
    );

    return searchTerms;
}
// #endregion module
