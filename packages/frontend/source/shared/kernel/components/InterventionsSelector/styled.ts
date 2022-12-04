// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledInterventionsSelector {
    theme: Theme;
}

export const StyledInterventionsSelector = styled.div<IStyledInterventionsSelector>`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
`;


export interface IStyledInterventionsSelectorItem {
    theme: Theme;
    selected: boolean;
}

export const StyledInterventionsSelectorItem = styled.div<IStyledInterventionsSelectorItem>`
    border-bottom: 2px solid ${
        ({
            selected,
            theme,
        }: IStyledInterventionsSelectorItem) => selected ? theme.colorPrimary : 'transparent'
    };
`;
// #region module
