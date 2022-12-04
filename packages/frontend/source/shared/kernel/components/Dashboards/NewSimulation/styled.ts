// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledNewSimulation {
    theme: Theme;
}

export const StyledNewSimulation = styled.div<IStyledNewSimulation>`
    h1 {
        font-size: 1.4rem;
        margin: 0;
    }

    display: grid;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;
// #region module
