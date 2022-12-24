// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledWorld {
    theme: Theme;
}

export const StyledWorld = styled.div<IStyledWorld>`
    padding: 2rem;
`;
// #region module
