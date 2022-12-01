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


export const SERVER_USER = gql`
    query User {
        user {
            id
            name
        }
        allowUserRegistration
    }
`;
// #endregion module
