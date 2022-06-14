import { Drawer, Box, Divider, useTheme } from '@mui/material';
import React, { useState, Fragment } from 'react';
import { SIDEBAR_WIDTH } from '../../constants/styles-constants';

interface Props {
  sidebarIsOpen: boolean;
  closeSidebar: () => void;
}

const styles = {
  sidebar: {
    position: 'absolute',
    width: { xs: '80%', lg: SIDEBAR_WIDTH },
    height: { xs: `calc(100% - ${56}px)`, md: `calc(100% - ${64}px)` },
    mt: { xs: 7, md: 8 },
    backgroundColor: '#ffffff',
    zIndex: 200,
    transition: 'all 0.35s',
  },
  backdrop: {
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
};

const MainSidebar: React.FC<Props> = ({ sidebarIsOpen, closeSidebar }) => {
  const theme = useTheme();

  return (
    <Fragment>
      <Box
        sx={{
          ...styles.sidebar,
          left: sidebarIsOpen ? 0 : '-100%',
          borderRight: { xs: 'none', md: `1px solid ${theme.palette.neutral.main}` },
        }}
      />
      <Box onClick={closeSidebar} sx={{ ...styles.backdrop, display: sidebarIsOpen ? 'block' : 'none' }} />
    </Fragment>
  );
};

export default MainSidebar;
