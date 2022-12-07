// #region imports
    // #region libraries
    import React from 'react';

    import {
        AnyAction,
        ThunkDispatch,
    } from '@reduxjs/toolkit';
    import { connect } from 'react-redux';


    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import {
        BaseField,
    } from '~kernel-components/NewEntityRenderer/data';

    import {
        PluridTooltip,
    } from '~kernel-services/styled';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledUtilityGroup,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface UtilityGroupOwnProperties {
    data: BaseField;

    relativePosition?: boolean;
    topDistance?: string;
}

export interface UtilityGroupStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface UtilityGroupDispatchProperties {
}

export type UtilityGroupProperties =
    & UtilityGroupOwnProperties
    & UtilityGroupStateProperties
    & UtilityGroupDispatchProperties;


const UtilityGroup: React.FC<UtilityGroupProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        data,

        relativePosition,
        topDistance,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledUtilityGroup
            theme={stateGeneralTheme}
            relativePosition={relativePosition}
            style={{
                top: topDistance,
            }}
        >
            {data.unit && (
                <div>
                    [{data.unit}]
                </div>
            )}

            {data.help && (
                <PluridTooltip
                    tool={'?'}
                    tip={data.help}
                    theme={stateGeneralTheme}
                />
            )}
        </StyledUtilityGroup>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): UtilityGroupStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): UtilityGroupDispatchProperties => ({
});


const ConnectedUtilityGroup = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(UtilityGroup);
// #endregion module



// #region exports
export default ConnectedUtilityGroup;
// #endregion exports
