// #region imports
    // #region libraries
    import gql from 'graphql-tag';

    import {
        DocumentNode,
    } from 'graphql';
    // #endregion libraries
// #endregion imports



// #region module
const mutationTypes = [
    'Simulation',
    'World',
    'Tissue',
    'Intervention',
    'Function',
    'Network',
    'Biomolecule',
    'Reaction',
    'Channel',
    'Transporter',
    'Modulator',
] as const;

type MutationNames = `ADD_BETSE_${Uppercase<typeof mutationTypes[number]>}`;

const computeMutations = () => {
    const betseMutations = {};

    for (const mutationType of mutationTypes) {
        const MUTATION = gql`
            mutation AddBetse${mutationType}($input: InputBetse${mutationType}!) {
                addBetse${mutationType}(input: $input) {
                    id
                }
            }
        `;

        betseMutations[`ADD_BETSE_${mutationType.toUpperCase()}`] = MUTATION;
    }

    return betseMutations as Record<MutationNames, DocumentNode>;
}

export const BETSE_MUTATIONS = computeMutations();
// #endregion module
