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
        ListField as IListField,
    } from '~kernel-components/NewEntityRenderer/data';

    import UtilityGroup from '../UtilityGroup';
    // #endregion external


    // #region internal
    import {
        StyledListField,
        StyledTextLine,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface ListFieldOwnProperties {
    data: IListField;
    update: (
        state: string,
        value: boolean,
    ) => void;
}

export interface ListFieldStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface ListFieldDispatchProperties {
}

export type ListFieldProperties =
    & ListFieldOwnProperties
    & ListFieldStateProperties
    & ListFieldDispatchProperties;


const ListField: React.FC<ListFieldProperties> = (
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
        <StyledListField
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

            </PluridFormLeftRight>
        </StyledListField>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ListFieldStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ListFieldDispatchProperties => ({
});


const ConnectedListField = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(ListField);
// #endregion module



// #region exports
export default ConnectedListField;
// #endregion exports
