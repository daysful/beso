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
        rendererID?: string;
        identonym?: string;
        usageType?: string;
        brandingName?: string;
        brandingNameStyle?: React.CSSProperties;
        brandingLogo?: string;
        activeDashboard?: string;
        noDashboardRender?: JSX.Element;
        // #endregion values

        // #region methods
        openManual?: () => void;
        atDashboardChange?: (newDashboard: string) => void;

        logout?: () => void;
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
            rendererID,
            identonym,
            usageType,
            brandingName,
            brandingNameStyle,
            brandingLogo,
            activeDashboard,
            noDashboardRender,
            // #endregion values

            // #region methods
            atDashboardChange,
            openManual,

            logout,
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
        selectedDashboard,
        setSelectedDashboard,
    ] = useState(activeDashboard || '');

    const [
        renderView,
        setRenderView,
    ] = useState('');
    // #endregion state


    // #region effects
    useEffect(() => {
        if (!activeDashboard) {
            return;
        }

        if (selectedDashboard === activeDashboard) {
            return;
        }

        setSelectedDashboard(activeDashboard);
    }, [
        activeDashboard,
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
                    selectedDashboard={selectedDashboard}
                    setSelectedDashboard={setSelectedDashboard}
                    identonym={identonym}
                    usageType={usageType}

                    openManual={openManual}
                    logout={logout}

                    rendererID={rendererID}
                    brandingName={brandingName}
                    brandingNameStyle={brandingNameStyle}
                    brandingLogo={brandingLogo}
                />
            )}

            {selectedDashboard && (
                <RenderArea
                    dashboards={dashboards}
                    selectedDashboard={selectedDashboard}
                    setSelectedDashboard={setSelectedDashboard}
                    renderView={renderView}
                    setRenderView={setRenderView}
                    fullRenderArea={fullRenderArea}
                    setFullRenderArea={setFullRenderArea}
                    theme={theme}
                />
            )}

            {!selectedDashboard && noDashboardRender && (
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
