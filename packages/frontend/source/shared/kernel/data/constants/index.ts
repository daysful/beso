// #region module
export const BESO_BACKEND = process.env.BESO_BACKEND || 'http://127.0.0.1:54567';

export const GRAPHQL_API = process.env.BESO_BACKEND_GRAPHQL || (BESO_BACKEND + '/graphql');
// #endregion module
