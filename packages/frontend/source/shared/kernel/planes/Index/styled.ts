// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledIndex {
    theme: Theme;
}

export const StyledIndex = styled.div<IStyledIndex>`
    font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
    min-height: 400px;
    margin: 2rem auto;
    display: grid;
    place-content: center;
    text-align: center;

    h1 {
        font-size: 1.3rem;
        margin: 1.5rem;
    }
`;
// #region module
