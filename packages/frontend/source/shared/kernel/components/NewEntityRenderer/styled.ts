// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledNewEntityRenderer {
    theme: Theme;
}

export const StyledNewEntityRenderer = styled.div<IStyledNewEntityRenderer>`
`;


export const StyledPastedBox = styled.div`
    position: relative;
`;

export const StyledPastedLanguage = styled.div`
    position: absolute;
    top: -4px;
    right: 8px;
`;
// #region module
