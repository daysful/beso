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

    import {
        PluridPlaneComponentProperty,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import {
        Channel,
    } from '~kernel-data/interfaces';

    import {
        fields,
    } from '~kernel-data/constants/entity/transporter';

    import Head from '~kernel-components/Head';
    import EditEntityComponent from '~kernel-components/EditEntityComponent';

    import {
        mergeDataIntoFields,
    } from '~kernel-services/logic/betse';

    import { AppState } from '~kernel-services/state/store';
    import StateContext from '~kernel-services/state/context';
    import selectors from '~kernel-services/state/selectors';
    // import actions from '~kernel-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledChannel,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface ChannelOwnProperties {
    plurid: PluridPlaneComponentProperty;
}

export interface ChannelStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateChannels: Channel[];
}

export interface ChannelDispatchProperties {
}

export type ChannelProperties =
    & ChannelOwnProperties
    & ChannelStateProperties
    & ChannelDispatchProperties;


const Channel: React.FC<ChannelProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        plurid,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        stateChannels,
        // #endregion state
    } = properties;

    const {
        id,
    } = plurid.plane.parameters;

    const channel = stateChannels.find(channel => channel.id === id);
    // #endregion properties


    // #region render
    if (!channel) {
        return (<></>);
    }

    return (
        <StyledChannel
            theme={stateGeneralTheme}
        >
            <Head />

            <EditEntityComponent
                title={`'${channel.name}' channel`}
                fields={mergeDataIntoFields(channel['data'], fields)}
                kind="Channel"

                onEdit={(state) => {
                }}
                onCancel={() => {
                }}
            />
        </StyledChannel>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ChannelStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateChannels: selectors.data.getData(state).channels,
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ChannelDispatchProperties => ({
});


const ConnectedChannel = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Channel);
// #endregion module



// #region exports
export default ConnectedChannel;
// #endregion exports
