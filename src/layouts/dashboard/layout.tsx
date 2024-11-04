import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import { useState } from 'react';

import { useTheme } from '@mui/material/styles';

import { Main } from './main';
import { layoutClasses } from '../classes';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';
import { FooterSection } from '../core/footer-section';

// ----------------------------------------------------------------------

export type DashboardLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  header?: {
    sx?: SxProps<Theme>;
  };
};

export function DashboardLayout({ sx, children, header }: DashboardLayoutProps) {
  const theme = useTheme();

  const [navOpen, setNavOpen] = useState(false);

  const layoutQuery: Breakpoint = 'lg';

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={<HeaderSection />}
      /** **************************************
       * Sidebar
       *************************************** */
      sidebarSection={null}
      /** **************************************
       * Footer
       *************************************** */
      footerSection={<FooterSection />}
      /** **************************************
       * Style
       *************************************** */
      cssVars={{
        '--layout-nav-vertical-width': '300px',
        '--layout-dashboard-content-pt': theme.spacing(1),
        '--layout-dashboard-content-pb': theme.spacing(8),
        '--layout-dashboard-content-px': theme.spacing(5),
      }}
      sx={{
        [`& .${layoutClasses.hasSidebar}`]: {
          [theme.breakpoints.up(layoutQuery)]: {
            pl: 'var(--layout-nav-vertical-width)',
          },
        },
        ...sx,
      }}
    >
      <Main>{children}</Main>
    </LayoutSection>
  );
}
