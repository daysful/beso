// #region imports
    // #region libraries
    import React, {
        useEffect,
        useState,
    } from 'react';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region internal
    import {
        Dashboard,
    } from './data';

    import {
        StyledDashboardsRenderer,
        StyledNoDashboardRender,
    } from './styled';

    import Sidebar from './components/Sidebar';
    import RenderArea from './components/RenderArea';
    // #endregion internal
// #region imports



// #region module
export interface DashboardsRendererProperties {
    // #region required
        // #region values
        dashboards: Dashboard[];
        theme: Theme;
        // #endregion values

        // #region methods
        // #endregion methods
    // #endregion required

    // #region optional
        // #region values
        identonym?: string;
        usageType?: string;
        brandingName?: string;
        brandingNameStyle?: React.CSSProperties;
        brandingLogo?: string;
        activeRender?: string;
        noDashboardRender?: JSX.Element;
        // #endregion values

        // #region methods
        openManual?: () => void;
        atDashboardChange?: (newDashboard: string) => void;
        // #endregion methods
    // #endregion optional
}

const DashboardsRenderer: React.FC<DashboardsRendererProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region required
            // #region values
            dashboards,
            theme,
            // #endregion values

            // #region methods
            // #endregion methods
        // #endregion required

        // #region optional
            // #region values
            identonym,
            usageType,
            brandingName,
            brandingNameStyle,
            brandingLogo,
            activeRender,
            noDashboardRender,
            // #endregion values

            // #region methods
            atDashboardChange,
            openManual,
            // #endregion methods
        // #endregion optional
    } = properties;
    // #endregion properties


    // #region state
    const [
        compactSelectors,
        setCompactSelectors,
    ] = useState(false);

    const [
        fullRenderArea,
        setFullRenderArea,
    ] = useState(false);

    const [
        renderView,
        setRenderView,
    ] = useState(activeRender || '');
    // #endregion state


    // #region effects
    useEffect(() => {
        if (!activeRender) {
            return;
        }

        if (renderView === activeRender) {
            return;
        }

        setRenderView(activeRender);
    }, [
        activeRender,
    ]);

    useEffect(() => {
        if (atDashboardChange) {
            atDashboardChange(renderView);
        }
    }, [
        renderView,
    ]);
    // #endregion effects


    // #region render
    const logout = () => {}

    return (
        <StyledDashboardsRenderer
            theme={theme}
            compactSelectors={compactSelectors}
            fullRenderArea={fullRenderArea}
        >
            {!fullRenderArea && (
                <Sidebar
                    dashboards={dashboards}
                    theme={theme}

                    compactSelectors={compactSelectors}
                    setCompactSelectors={setCompactSelectors}
                    renderView={renderView}
                    setRenderView={setRenderView}
                    identonym={identonym}
                    usageType={usageType}

                    openManual={openManual}
                    logout={logout}

                    brandingName={brandingName}
                    brandingNameStyle={brandingNameStyle}
                    brandingLogo={brandingLogo}
                />
            )}

            {renderView && (
                <RenderArea
                    dashboards={dashboards}
                    renderView={renderView}
                    theme={theme}

                    setRenderView={setRenderView}
                />
            )}

            {!renderView && noDashboardRender && (
                <StyledNoDashboardRender>
                    {noDashboardRender}
                </StyledNoDashboardRender>
            )}
        </StyledDashboardsRenderer>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default DashboardsRenderer;
// #endregion exports
