// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledSimulations {
    theme: Theme;
}

export const StyledSimulations = styled.div<IStyledSimulations>`
    padding: 2rem;
    height: 100%;
`;
// #region module
