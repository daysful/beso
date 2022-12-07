// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledUtilityGroup {
    theme: Theme;
    relativePosition?: boolean;
}

export const StyledUtilityGroup = styled.div<IStyledUtilityGroup>`
    position: ${
        ({
            relativePosition,
        }) => {
            if (relativePosition) {
                return 'relative';
            }

            return 'absolute';
        }
    };
    top: -4px;
    right: 8px;
    display: flex;
`;
// #region module
