// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledGroupField {
    theme: Theme;
}

export const StyledGroupField = styled.div<IStyledGroupField>`
    position: relative;

    h2 {
        font-size: 1.1rem;
        font-weight: normal;
    }
`;


export interface IStyledExpander {
    isSubgroup: boolean;
}

export const StyledExpander = styled.div<IStyledExpander>`
    position: absolute;
    top: 3px;
    left: ${
        ({
            isSubgroup,
        }) => isSubgroup ? '25px' : '10px'
    };
`;
// #region module
