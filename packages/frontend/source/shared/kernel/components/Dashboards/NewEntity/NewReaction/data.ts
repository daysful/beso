// #region imports
    // #region libraries
    import {
        NewEntityField,
    } from '~kernel-components/NewEntityRenderer/data';
    // #endregion libraries
// #endregion imports



// #region module
export const fields: NewEntityField[] = [
    {
        label: 'name',
        type: 'string',
        state: 'name',
        value: 'new reaction',
        required: true,
    },
    {
        label: 'reaction zone',
        type: 'string',
        state: 'reaction_zone',
        value: 'cell',
        required: true,
        help: `reaction zone identifier: 'cell', 'env', or 'mit'; where reaction takes place`,
    },
    {
        label: 'reactants',
        type: 'list',
        state: 'reactants',
        value: [ 'Substance_A' ],
        required: true,
        help: `list of reagents; must be from set of names defined for biomolecules in above`,
    },
    {
        label: 'reactant multipliers',
        type: 'list',
        state: 'reactant_multipliers',
        value: [ 1 ],
        required: true,
        help: `reaction coefficients for reagents, in same order as reagent definition`,
    },
    {
        label: 'Km reactants',
        type: 'list',
        state: 'Km_reactants',
        value: [ 1.0 ],
        required: true,
        help: `list of half-max coefficients for reagents, in same order as reagents list`,
    },
    {
        label: 'products',
        type: 'list',
        state: 'products',
        value: [ 'B', 'C' ],
        required: true,
        help: `list of products; must be from set of names defined for biomolecules in above`,
    },
    {
        label: 'product multipliers',
        type: 'list',
        state: 'product_multipliers',
        value: [ 1, 1 ],
        required: true,
        help: `reaction coefficients for products, in same order as product definition`,
    },
    {
        label: 'Km products',
        type: 'list',
        state: 'Km_products',
        value: [ 0.1, 0.1 ],
        required: true,
        help: `list of half-max coefficients for reagents, in same order as reagents list`,
    },
    {
        label: 'max rate',
        type: 'number',
        state: 'max_rate',
        value: 5.0e-3,
        format: 'scientific',
        required: true,
        help: `list of half-max coefficients for reagents, in same order as reagents list`,
    },
    {
        label: 'standard free energy',
        type: 'string',
        state: 'standard_free_energy',
        value: 'None',
        required: true,
        unit: 'J/mol',
        help: `standard free energy of reaction in J/mol. 'None' creates non-reversible reaction`,
    },
    {
        label: 'reaction activators',
        type: 'string',
        state: 'reaction_activators',
        value: 'None',
        required: true,
        help: `additional defined substances or ions increasing activity of transporter`,
    },
    {
        label: 'activator Km',
        type: 'string',
        state: 'activator_Km',
        value: 'None',
        required: true,
    },
    {
        label: 'activator n',
        type: 'string',
        state: 'activator_n',
        value: 'None',
        required: true,
    },
    {
        label: 'activator zone',
        type: 'string',
        state: 'activator_zone',
        value: 'None',
        required: true,
        help: `location of concentration having an influence ('cell' or 'env')`,
    },
    {
        label: 'reaction inhibitors',
        type: 'string',
        state: 'reaction_inhibitors',
        value: 'None',
        required: true,
        help: `additional defined substances or ions decreasing activity of transporter`,
    },
    {
        label: 'inhibitor Km',
        type: 'string',
        state: 'inhibitor_Km',
        value: 'None',
        required: true,
    },
    {
        label: 'inhibitor n',
        type: 'string',
        state: 'inhibitor_n',
        value: 'None',
        required: true,
    },
    {
        label: 'inhibitor zone',
        type: 'string',
        state: 'inhibitor_zone',
        value: 'None',
        required: true,
    },
];
// #endregion module
