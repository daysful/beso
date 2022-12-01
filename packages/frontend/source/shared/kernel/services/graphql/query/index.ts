// #region imports
    // #region libraries
    import gql from 'graphql-tag';
    // #endregion libraries
// #endregion imports



// #region module
export const USER = gql`
    query User {
        user {
            id
            name
        }
    }
`;
// #endregion module
