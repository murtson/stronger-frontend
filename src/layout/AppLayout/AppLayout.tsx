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

const AppLayout: React.FC = () => {
  const theme = useTheme();
  const isMediumAndUpScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isLargerAndUpScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      {isMediumAndUpScreen ? (
        <Box
          sx={{
            position: 'absolute',
            height: 125,
            width: '100%',
            backgroundColor: 'white',
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        ></Box>
      ) : null}
      <Grid
        container
        maxWidth='xl'
        sx={{
          position: 'relative',
          display: 'flex',
          height: '100vh',
          margin: 'auto',
        }}
      >
        {isMediumAndUpScreen ? (
          <Grid item md={4} lg={3}>
            <SideNavigation />
          </Grid>
        ) : null}
        <Grid item xs={12} md={7} lg={6} sx={{ display: 'flex' }}>
          <Outlet />
          {isMediumAndUpScreen ? null : <BottomNavbar />}
          {isMediumAndUpScreen ? null : <AppSpeedDial />}
        </Grid>
        {isLargerAndUpScreen ? (
          <Grid item lg={3}>
            <Stack spacing={3} sx={{ marginLeft: 4, marginRight: 4, marginTop: '150px' }}>
              <SideCalendar />
              <SideHistory />
            </Stack>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default AppLayout;
