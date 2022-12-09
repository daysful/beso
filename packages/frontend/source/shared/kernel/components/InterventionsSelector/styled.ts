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
    position: absolute;
    z-index: 9999;
    left: 65%;
    top: 42px;
    transform: translateX(-65%);

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
    border-bottom: 1px solid ${
        ({
            selected,
            theme,
        }: IStyledInterventionsSelectorItem) => selected ? theme.colorPrimary : 'transparent'
    };
    cursor: pointer;
    user-select: none;
`;
// #region module
