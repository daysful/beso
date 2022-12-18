// #region imports
    // #region libraries
    import gql from 'graphql-tag';
    // #endregion libraries


    // #region internal
    import {
        BETSE_WORLD_FRAGMENT,
        BETSE_TISSUE_FRAGMENT,
    } from './fragments';
    // #endregion internal
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
    ${BETSE_WORLD_FRAGMENT}
    ${BETSE_TISSUE_FRAGMENT}

    query User {
        user {
            id
            name
        }
        allowUserRegistration
        betse {
            worlds {
                ...BetseWorldFields
            }
            tissues {
                ...BetseTissueFields
            }
        }
    }
`;


export const GET_SIMULATIONS = gql`
    query GetSimulations {
        getSimulations {
            id
            name
            generatedAt
            lastRun
            runs {
                id
            }
        }
    }
`;


export const GET_WORLDS = gql`
    query GetWorlds {
        getWorlds {
            id
            name
            generatedAt
        }
    }
`;


export const GET_TISSUES = gql`
    query GetTissues {
        getTissues {
            id
            name
            generatedAt
        }
    }
`;


export const GET_GLOBAL_INTERVENTIONS = gql`
    query GetGlobalInterventions {
        getGlobalInterventions {
            id
            name
            generatedAt
        }
    }
`;


export const GET_TARGETED_INTERVENTIONS = gql`
    query GetTargetedInterventions {
        getTargetedInterventions {
            id
            name
            generatedAt
        }
    }
`;


export const GET_MODULATORS = gql`
    query GetModulators {
        getModulators {
            id
            name
            generatedAt
        }
    }
`;


export const GET_NETWOKRS = gql`
    query GetNetworks {
        getNetworks {
            id
            name
            generatedAt
        }
    }
`;


export const GET_BIOMOLECULES = gql`
    query GetBiomolecules {
        getBiomolecules {
            id
            name
            generatedAt
        }
    }
`;


export const GET_REACTIONS = gql`
    query GetReactions {
        getReactions {
            id
            name
            generatedAt
        }
    }
`;


export const GET_CHANNELS = gql`
    query GetChannels {
        getChannels {
            id
            name
            generatedAt
        }
    }
`;
// #endregion module
