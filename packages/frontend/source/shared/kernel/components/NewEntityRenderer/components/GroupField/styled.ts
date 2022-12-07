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
`;
// #region module
