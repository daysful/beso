// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledListField {
    theme: Theme;
}

export const StyledListField = styled.div<IStyledListField>`
    position: relative;
    margin-top: 1.4rem;
`;


export const StyledTextLine = styled.div`
    width: 100%;
    margin-left: 14px;
    display: flex;
    gap: 0.7rem;
    justify-content: space-between;
`;
// #region module
