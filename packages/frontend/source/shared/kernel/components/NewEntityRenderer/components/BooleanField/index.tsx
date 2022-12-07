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
        PluridSwitch,
        PluridFormLeftRight,
    } from '~kernel-services/styled';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';

    import {
        BooleanField as IBooleanField,
    } from '~kernel-components/NewEntityRenderer/data';

    import UtilityGroup from '../UtilityGroup';
    // #endregion external


    // #region internal
    import {
        StyledBooleanField,
        StyledTextLine,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface BooleanFieldOwnProperties {
    data: IBooleanField;
    update: (
        state: string,
        value: boolean,
    ) => void;
}

export interface BooleanFieldStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface BooleanFieldDispatchProperties {
}

export type BooleanFieldProperties =
    & BooleanFieldOwnProperties
    & BooleanFieldStateProperties
    & BooleanFieldDispatchProperties;


const BooleanField: React.FC<BooleanFieldProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        data,

        update,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledBooleanField
            theme={stateGeneralTheme}
        >
            <PluridFormLeftRight>
                <StyledTextLine>
                    <div>
                        {data.label}
                    </div>

                    <UtilityGroup
                        data={data}
                        relativePosition={true}
                        topDistance={'0px'}
                    />
                </StyledTextLine>

                <PluridSwitch
                    theme={stateGeneralTheme}
                    checked={data.value}
                    atChange={() => {
                        update(
                            data.state,
                            !data.value,
                        );
                    }}
                    exclusive={true}
                    level={2}
                />
            </PluridFormLeftRight>
        </StyledBooleanField>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): BooleanFieldStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): BooleanFieldDispatchProperties => ({
});


const ConnectedBooleanField = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(BooleanField);
// #endregion module



// #region exports
export default ConnectedBooleanField;
// #endregion exports
