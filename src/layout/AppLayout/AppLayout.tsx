import { Outlet } from 'react-router-dom';
import React from 'react';

import { Grid, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import BottomNavbar from '../../components/Navigation/BottomNavbar/BottomNavbar';
import SideNavigation from '../../components/Navigation/SideNavbar/SideNavigation';
import SideCalendar from '../../components/SideCalendar/SideCalendar';
import SideHistory from '../../components/SideHistory/SideHistory';
import AppSpeedDial from '../../components/Buttons/SpeedDial/SpeedDial';
import AppHeader from './AppHeader/AppHeader';
import SideActions from '../../components/SideActions/SideActions';

const styles = {
  gridContainer: {
    position: 'relative',
    display: 'flex',
    minHeight: '100vh',
    margin: 'auto',
    pt: { xs: 0, md: 2 },
  },
  leftSideGrid: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    mx: 4,
  },
};

const AppLayout: React.FC = () => {
  const theme = useTheme();
  const isMediumAndUpScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isLargerAndUpScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={{ position: 'relative', zIndex: 0 }}>
      {/* {isMediumAndUpScreen ? <AppHeader /> : null} */}
      <Grid container maxWidth='xl' sx={styles.gridContainer}>
        {isMediumAndUpScreen ? (
          <Grid item md={4} lg={3.5}>
            <Box sx={styles.leftSideGrid}>
              <SideNavigation />
              <SideActions />
            </Box>
          </Grid>
        ) : null}
        <Grid item xs={12} md={7} lg={5} sx={{ display: 'flex' }}>
          <Outlet />
          {isMediumAndUpScreen ? null : <BottomNavbar />}
          {isMediumAndUpScreen ? null : <AppSpeedDial />}
        </Grid>
        {isLargerAndUpScreen ? (
          <Grid item lg={3.5}>
            <Stack spacing={3} sx={{ marginLeft: 4, marginRight: 4 }}>
              <SideCalendar />
              <SideHistory />
            </Stack>
          </Grid>
        ) : null}
      </Grid>
    </Box>
  );
};

export default AppLayout;
