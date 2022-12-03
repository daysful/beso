// #region imports
    // #region libraries
    import React, {
        useState,
    } from 'react';


    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        PluridIconArrowRight,
        PluridIconDocuments,
        PluridIconExternalLink,
        PluridIconSpace,
        PluridIconExit,
    } from '@plurid/plurid-icons-react';
    // #endregion libraries


    // #region external
    import {
        Dashboard,
    } from '../../data';
    // #endregion external


    // #region internal
    import {
        StyledSidebar,
        StyledSelectors,
        StyledBranding,
        StyledSelector,
        StyledHelp,
        StyledHelpItem,
    } from './styled';
    // #endregion internal
// #region imports



// #region module
export interface SidebarProperties {
    // #region required
        // #region values
        dashboards: Dashboard[];
        theme: Theme;

        compactSelectors: boolean;
        setCompactSelectors: React.Dispatch<boolean>;
        renderView: string;
        setRenderView: React.Dispatch<string>;
        // #endregion values

        // #region methods
        logout: () => void;
        // #endregion methods
    // #endregion required

    // #region optional
        // #region values
        identonym?: string;
        usageType?: string;
        brandingName?: string;
        brandingNameStyle?: React.CSSProperties;
        brandingLogo?: string;
        // #endregion values

        // #region methods
        openManual?: () => void;
        // #endregion methods
    // #endregion optional
}

const Sidebar: React.FC<SidebarProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region required
            // #region values
            dashboards,
            theme,

            compactSelectors,
            setCompactSelectors,
            renderView,
            setRenderView,

            identonym,
            usageType,
            // #endregion values

            // #region methods
            openManual,
            logout,
            // #endregion methods
        // #endregion required

        // #region optional
            // #region values
            brandingName,
            brandingNameStyle,
            brandingLogo,
            // #endregion values

            // #region methods
            // #endregion methods
        // #endregion optional
    } = properties;

    const openManualCount = openManual ? 1 : 0;
    const usageTypeCount = usageType === 'PRIVATE_USAGE' ? 1 : 0;
    const helpItemsCount = openManualCount + usageTypeCount;
    // #endregion properties


    // #region state
    const [
        mouseOverSelectors,
        setMouseOverSelectors,
    ] = useState(false);
    // #endregion state


    // #region render
    const branding = (
        <StyledBranding
            compactSelectors={compactSelectors}
        >
            {!compactSelectors && (
                <>
                    <div>
                        {brandingLogo && (
                            <img
                                src={brandingLogo}
                                alt="icon"
                                height={40}
                                onClick={() => {
                                    setCompactSelectors(true);
                                    setMouseOverSelectors(false);
                                }}
                            />
                        )}
                    </div>

                    {brandingName && (
                        <div
                            style={brandingNameStyle}
                        >
                            {brandingName}
                        </div>
                    )}
                </>
            )}

            {compactSelectors
            && mouseOverSelectors
            && (
                <PluridIconArrowRight
                    atClick={() => setCompactSelectors(false)}
                />
            )}
        </StyledBranding>
    );

    const selectors = (
        <ul>
            {dashboards.map(dashboard => {
                const {
                    id,
                    icon,
                    label,
                } = dashboard;

                // FORCE uppercase for React
                const Icon: any = icon;

                const selectorIcon = !icon
                    ? (<PluridIconSpace theme={theme} />)
                    : typeof icon === 'function'
                        ? (<Icon theme={theme} />)
                        : (<>{icon}</>);

                return (
                    <StyledSelector
                        key={Math.random() + id}

                        onClick={() => setRenderView(id)}
                        theme={theme}
                        selected={id === renderView}
                        compactSelectors={compactSelectors}
                    >
                        {selectorIcon}

                        {!compactSelectors && (
                            <div>
                                {label}
                            </div>
                        )}
                    </StyledSelector>
                );
            })}
        </ul>
    );

    const help = (
        <StyledHelp>
            {mouseOverSelectors && (
                <ul>
                    {openManual && (
                        <StyledHelpItem
                            onClick={() => openManual()}
                            compactSelectors={compactSelectors}
                        >
                            <PluridIconDocuments />

                            {!compactSelectors && (
                                <>
                                    <div>
                                        manual
                                    </div>

                                    <PluridIconExternalLink />
                                </>
                            )}
                        </StyledHelpItem>
                    )}

                    {usageType === 'PRIVATE_USAGE' && (
                        <StyledHelpItem
                            onClick={() => logout()}
                            compactSelectors={compactSelectors}
                        >
                            <PluridIconExit />

                            {!compactSelectors && (
                                <>
                                    <div>
                                        logout ({identonym})
                                    </div>

                                    <div />
                                </>
                            )}
                        </StyledHelpItem>
                    )}
                </ul>
            )}
        </StyledHelp>
    );

    return (
        <StyledSidebar
            theme={theme}
        >
            <StyledSelectors
                onMouseEnter={() => setMouseOverSelectors(true)}
                onMouseLeave={() => setMouseOverSelectors(false)}
                theme={theme}
                compactSelectors={compactSelectors}
                helpItemsCount={helpItemsCount}
            >
                {branding}
                {selectors}
                {help}
            </StyledSelectors>
        </StyledSidebar>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default Sidebar;
// #endregion exports
