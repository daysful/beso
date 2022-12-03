// #region imports
    // #region libraries
    import React from 'react';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import {
        Dashboard,
    } from '../../data';
    // #endregion external


    // #region internal
    import {
        StyledRenderArea,
    } from './styled';
    // #endregion internal
// #region imports



// #region module
export interface RenderAreaProperties {
    // #region required
        // #region values
        dashboards: Dashboard[];
        renderView: string;
        theme: Theme;
        // #endregion values

        // #region methods
        setRenderView: React.Dispatch<string>;
        // #endregion methods
    // #endregion required

    // #region optional
        // #region values
        // #endregion values

        // #region methods
        // #endregion methods
    // #endregion optional
}

const RenderArea: React.FC<RenderAreaProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region required
            // #region values
            dashboards,
            renderView,
            theme,
            // #endregion values

            // #region methods
            setRenderView,
            // #endregion methods
        // #endregion required

        // #region optional
            // #region values
            // #endregion values

            // #region methods
            // #endregion methods
        // #endregion optional
    } = properties;

    const dashboard = dashboards.find(
        dashboard => dashboard.id === renderView,
    );
    // #endregion properties


    // #region render
    if (!dashboard) {
        return (<></>);
    }

    const renderID = dashboard.defaultRender || renderView;
    const DashboardRender = dashboard.renderers[renderID];
    if (!DashboardRender) {
        return (<></>);
    }

    return (
        <StyledRenderArea
            theme={theme}
        >
            <DashboardRender
                theme={theme}
                renderView={renderView}
                setRenderView={setRenderView}
            />
        </StyledRenderArea>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default RenderArea;
// #endregion exports
