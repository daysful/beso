// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledLogin {
    theme: Theme;
}

export const StyledLogin = styled.div<IStyledLogin>`
    padding: 3rem;
    display: grid;
    place-content: center;
    text-align: center;

    h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
        margin-bottom: 0;
    }

    h2 {
        font-size: 1.1rem;
    }
`;


export const StyledLoginButtons = styled.div`
    margin: 10px auto;
    display: grid;
`;


export const StyledLoginButton = styled.div`
    width: 200px;
    margin: 1rem auto;
    text-align: center;
    display: flex;
    justify-content: center;
`;
// #region module
