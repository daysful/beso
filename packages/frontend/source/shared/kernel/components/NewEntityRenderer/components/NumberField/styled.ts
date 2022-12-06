// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledNumberField {
    theme: Theme;
}

export const StyledNumberField = styled.div<IStyledNumberField>`
    position: relative;
`;
// #region module
