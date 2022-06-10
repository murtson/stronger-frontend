// general
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
// mui & components
import { Grid, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import BottomNavbar from '../../components/bottom-navbar/bottom-navbar';
import AppSpeedDial from '../../components/speed-dial/speed-dial';
import SideActions from './side-actions/side-actions';
import SideNavigation from './side-navigation/side-navigation';
import SideProfile from './side-profile/side-profile';
import MainHeader from '../../components/main-header/main-header';
import MainSidebar from '../../components/main-sidebar/main-sidebar';

const styles = {
  appContentContainer: {
    display: 'flex',
    minHeight: '100vh',
    margin: 'auto',
    py: { xs: 8, lg: 9 },
  },
};

const AppLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const theme = useTheme();
  const isMediumAndUpScreen = useMediaQuery(theme.breakpoints.up('md'));

  const handleSidebarState = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box>
      <MainHeader handleSidebarOpen={handleSidebarState} />
      <MainSidebar open={sidebarOpen} />
      <Grid container maxWidth='lg' sx={styles.appContentContainer}>
        <Grid item xs={12} sx={{ display: 'flex' }}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppLayout;
