// general
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
// mui & components
import { Grid, Box, useTheme, useMediaQuery, Backdrop } from '@mui/material';
import MainHeader from '../../components/main-header/main-header';
import MainSidebar from '../../components/main-sidebar/main-sidebar';

const styles = {
  root: {
    minHeight: '100vh',
    display: 'flex',
  },
  appContentContainer: {
    display: 'flex',
    flex: 1,
    minHeight: '100%',
    margin: '0 auto',
    pt: { xs: 7, lg: 8 },
    pb: { xs: 0, md: 2 },
  },
};

const AppLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const theme = useTheme();
  const isMediumAndUpScreen = useMediaQuery(theme.breakpoints.up('md'));

  const handleSidebarState = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={styles.root}>
      <MainHeader handleSidebarOpen={handleSidebarState} sideBarOpen={sidebarOpen} />
      <MainSidebar
        closeSidebar={() => setSidebarOpen(false)}
        sidebarIsOpen={isMediumAndUpScreen ? false : sidebarOpen}
      />

      <Grid container maxWidth='xl' sx={styles.appContentContainer}>
        <Grid item xs={12} sx={{ display: 'flex', flex: 1 }}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppLayout;
