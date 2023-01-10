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
        PluridDropdown,
        PluridEntityPillGroup,
        PluridFormLeftRight,
    } from '~kernel-services/styled';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledSelectable,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
const makeSelectables = (
    data: any[],
) => data.map(item => ({
    id: item.id,
    value: item.name,
}));


export interface SelectableOwnProperties {
    type: string;
    single?: boolean;
    selected: any;
    data: any;

    handleSelection: (s: any, t: any) => void;
    removeSelected?: (id: string) => void;
}

export interface SelectableStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface SelectableDispatchProperties {
}

export type SelectableProperties =
    & SelectableOwnProperties
    & SelectableStateProperties
    & SelectableDispatchProperties;


const Selectable: React.FC<SelectableProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        type,
        single,
        selected,
        data,

        handleSelection,
        removeSelected,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region render
    const selectables = single
        ? [...makeSelectables(data)]
        : [...makeSelectables(
            data.filter(
                (item: any) => !selected.find((added: any) => added.id === item.id),
            ),
        )];

    return (
        <StyledSelectable>
            <PluridFormLeftRight>
                <div>
                    {single ? type : type + 's'}
                </div>

                <PluridDropdown
                    selected={single ? selected || 'select' : 'select'}
                    selectables={[
                        `add new ${type}`,
                        ...selectables,
                    ]}
                    atSelect={(selection) => {
                        handleSelection(selection, type);
                    }}
                    theme={stateGeneralTheme}
                    width={210}
                />
            </PluridFormLeftRight>

            {!single && (
                <PluridEntityPillGroup
                    entities={selected}
                    remove={(id) => {
                        if (removeSelected) {
                            removeSelected(id);
                        }
                    }}
                    theme={stateGeneralTheme}
                />
            )}
        </StyledSelectable>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): SelectableStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): SelectableDispatchProperties => ({
});


const ConnectedSelectable = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Selectable);
// #endregion module



// #region exports
export default ConnectedSelectable;
// #endregion exports
