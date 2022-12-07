// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledBooleanField {
    theme: Theme;
}

export const StyledBooleanField = styled.div<IStyledBooleanField>`
    position: relative;
    margin-top: 1.4rem;
`;


export const StyledTextLine = styled.div`
    display: flex;
    gap: 1rem;
`;
// #region module
