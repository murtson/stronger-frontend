// general
import React from 'react';
import { Outlet } from 'react-router-dom';
// mui & components
import { Grid, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import BottomNavbar from '../../components/BottomNavbar/BottomNavbar';
import AppSpeedDial from '../../components/SpeedDial/SpeedDial';
import SideActions from './SideActions/SideActions';
import SideNavigation from './SideNavigation/SideNavigation';
import SideProfile from './SideProfile/SideProfile';

const styles = {
  gridContainer: {
    position: 'relative',
    display: 'flex',
    minHeight: '100vh',
    margin: 'auto',
    py: { xs: 0, md: 2 },
  },
  leftGridContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    px: 3,
  },
};

const AppLayout: React.FC = () => {
  const theme = useTheme();
  const isMediumAndUpScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid container maxWidth='xl' sx={styles.gridContainer}>
      {isMediumAndUpScreen ? (
        <Grid item md={3} lg={2.5} xl={2.25} sx={styles.leftGridContainer}>
          <Box>
            <SideNavigation />
            <SideActions />
          </Box>
          <SideProfile />
        </Grid>
      ) : null}
      <Grid item xs={12} md={9} lg={9.5} xl={9.75} sx={{ display: 'flex' }}>
        <Outlet />
        {isMediumAndUpScreen ? null : <BottomNavbar />}
        {isMediumAndUpScreen ? null : <AppSpeedDial />}
      </Grid>
    </Grid>
  );
};

export default AppLayout;
