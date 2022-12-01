// #region imports
    // #region libraries
    import gql from 'graphql-tag';
    // #endregion libraries
// #endregion imports



// #region module
export const UPDATE_USER = gql`
    mutation UpdateUser($input: InputUpdateUser!) {
        updateUser(input: $input) {
            status
            errors {
                type
                path
                message
            }
            data {
                username
            }
        }
    }
`;


export const LOGIN_USER = gql`
    mutation LoginUser($identonym: String!, $key: String!) {
        loginUser(identonym: $identonym, key: $key)
    }
`;


export const REGISTER_USER = gql`
    mutation RegisterUser($identonym: String!, $key: String!) {
        registerUser(identonym: $identonym, key: $key)
    }
`;
// #endregion module
