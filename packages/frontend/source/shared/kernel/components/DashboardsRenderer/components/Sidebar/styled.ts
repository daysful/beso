// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledSidebar {
    theme: Theme;
}

export const StyledSidebar = styled.div<IStyledSidebar>`
`;



export interface IStyledSelectors {
    theme: Theme;
    compactSelectors: boolean;
    viewUsageType?: string;
}

export const StyledSelectors = styled.div<IStyledSelectors>`
    height: 100%;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr;
    grid-template-rows: ${
        ({
            viewUsageType,
        }: IStyledSelectors) => {
            if (viewUsageType) {
                return '100px auto 90px';
            }

            return '100px auto 50px';
        }
    };

    background-color: ${
        ({
            theme,
        }: IStyledSelectors) => theme.backgroundColorTertiary
    };
    box-shadow: inset -3px 0px 3px 0px ${
        ({
            theme,
        }: IStyledSelectors) => theme.boxShadowUmbraColor
    };

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        cursor: pointer;
        padding: 0.7rem 1.4rem;
        user-select: none;
    }
`;


export interface IStyledSelector {
    theme: Theme;
    selected: boolean;
    compactSelectors: boolean;
}

export const StyledSelector = styled.li<IStyledSelector>`
    background-color: ${
        ({
            theme,
            selected,
        }: IStyledSelector) => selected
            ? theme.backgroundColorPrimary
            : 'initial'
    };

    :hover {
        background-color: ${
            ({
                theme,
            }: IStyledSelector) => theme.backgroundColorPrimary
        };
    }

    display: grid;
    grid-template-columns: ${
        ({
            compactSelectors,
        }: IStyledSelector) => compactSelectors
            ? '16px'
            : '16px auto'
    };
    grid-gap: 0.7rem;
    min-height: 45px;
    align-items: center;
`;


export interface IStyledBranding {
    compactSelectors: boolean;
}

export const StyledBranding = styled.div<IStyledBranding>`
    display: grid;
    place-content: center;
    grid-gap: 0.5rem;
    height: 100%;
    font-size: 0.9rem;
    text-align: center;
    user-select: none;

    img {
        cursor: pointer;
    }
`;

export const StyledHelp = styled.div`
    li {
        font-size: 0.9rem;
    }
`;


export interface IStyledHelpItem {
    compactSelectors: boolean;
}

export const StyledHelpItem = styled.li<IStyledHelpItem>`
    display: grid;
    align-items: center;
    grid-gap: 0.5rem;
    grid-template-columns: ${
        ({
            compactSelectors,
        }: IStyledHelpItem) => compactSelectors
            ? '16px'
            : '16px auto 16px'
    };
`;
// #region module
