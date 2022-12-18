// #region imports
    // #region libraries
    import gql from 'graphql-tag';
    // #endregion libraries
// #endregion imports



// #region module
export const BETSE_WORLD_FRAGMENT = gql`
    fragment BetseWorldFields on BetseWorld {
        id
        name
    }
`;


export const BETSE_TISSUE_FRAGMENT = gql`
    fragment BetseTissueFields on BetseTissue {
        id
        name
    }
`;
// #endregion module
