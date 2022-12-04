// #region imports
    // #region libraries
    import React from 'react';

    import { AnyAction } from 'redux';
    import { connect } from 'react-redux';
    import { ThunkDispatch } from 'redux-thunk';


    import {
        PluridPubSub,
        PLURID_PUBSUB_TOPIC,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import {
        ToolbarSpecific,
    } from '~kernel-services/styled';

    import {
        addNewPlane,
    } from '~kernel-services/logic/general';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        buttons,
    } from './data';
    // #endregion internal
// #endregion imports



// #region module
export interface ToolbarHomeControlsOwnProperties {
    pubsub: PluridPubSub;
}

export interface ToolbarHomeControlsStateProperties {
}

export interface ToolbarHomeControlsDispatchProperties {
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
}

export type ToolbarHomeControlsProperties =
    & ToolbarHomeControlsOwnProperties
    & ToolbarHomeControlsStateProperties
    & ToolbarHomeControlsDispatchProperties;

const ToolbarHomeControls: React.FC<ToolbarHomeControlsProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        pubsub,
        // #endregion own

        // #region dispatch
        dispatch,
        // #endregion dispatch
    } = properties;
    // #endregion properties


    // #region handlers
    const handleClick = (
        type: string,
    ) => {
        switch (type) {
            case 'new-plane': {
                const {
                    plane,
                } = addNewPlane(dispatch);

                pubsub.publish({
                    topic: PLURID_PUBSUB_TOPIC.VIEW_ADD_PLANE,
                    data: {
                        plane,
                    },
                });
                break;
            }
            default:
                break;
        }
    }
    // #endregion handlers


    // #region render
    return (
        <ToolbarSpecific
            buttons={buttons}
            handleClick={handleClick}
            activeType={''}
            selectors={selectors}
            context={StateContext}
        />
    );
    // #endregion render
}


const mapStateToProps = (
    state: AppState,
): ToolbarHomeControlsStateProperties => ({
});


const mapDispatchToProps = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ToolbarHomeControlsDispatchProperties => ({
    dispatch,
});


const ConnectedToolbarHomeControls = connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {
        context: StateContext,
    },
)(ToolbarHomeControls);
// #endregion module



// #region exports
export default ConnectedToolbarHomeControls;
// #endregion exports
