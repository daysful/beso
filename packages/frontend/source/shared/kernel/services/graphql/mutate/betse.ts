// #region imports
    // #region libraries
    import gql from 'graphql-tag';

    import {
        DocumentNode,
    } from 'graphql';
    // #endregion libraries


    // #region external
    import {
        FRAGMENTS,
        FieldsNames,
    } from '../query/fragments';
    // #endregion external
// #endregion imports



// #region module
export const mutationTypes = [
    'Simulation',
    'World',
    'Tissue',
    'Global_Intervention',
    'Targeted_Intervention',
    'Function',
    'Network',
    'Biomolecule',
    'Reaction',
    'Channel',
    'Transporter',
    'Modulator',
] as const;

export type MutationNames =
    | `ADD_BETSE_${Uppercase<typeof mutationTypes[number]>}`
    | `EDIT_BETSE_${Uppercase<typeof mutationTypes[number]>}`
    | `REMOVE_BETSE_${Uppercase<typeof mutationTypes[number]>}`;

const computeMutations = () => {
    const betseMutations = {};

    for (const mutationType of mutationTypes) {
        const FRAGMENT = FRAGMENTS[mutationType];
        const FieldsName = FieldsNames[mutationType];
        const mutationTypeName = mutationType.replace(/_/, '');

        const ADD_MUTATION = gql`
            ${FRAGMENT}

            mutation AddBetse${mutationTypeName}($input: InputAddBetse${mutationTypeName}!) {
                addBetse${mutationTypeName}(input: $input) {
                    ...${FieldsName}
                }
            }
        `;

        const EDIT_MUTATION = gql`
            mutation EditBetse${mutationTypeName}($input: InputEditBetse${mutationTypeName}!) {
                editBetse${mutationTypeName}(input: $input) {
                    id
                }
            }
        `;

        const REMOVE_MUTATION = gql`
            mutation RemoveBetse${mutationTypeName}($input: String!) {
                removeBetse${mutationTypeName}(id: $input)
            }
        `;

        betseMutations[`ADD_BETSE_${mutationType.toUpperCase()}`] = ADD_MUTATION;
        betseMutations[`EDIT_BETSE_${mutationType.toUpperCase()}`] = EDIT_MUTATION;
        betseMutations[`REMOVE_BETSE_${mutationType.toUpperCase()}`] = REMOVE_MUTATION;
    }

    return betseMutations as Record<MutationNames, DocumentNode>;
}

export const BETSE_MUTATIONS = computeMutations();
// #endregion module
