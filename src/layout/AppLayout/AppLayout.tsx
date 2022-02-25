import { Outlet } from 'react-router-dom';
import React from 'react';

import { Grid, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import BottomNavbar from '../../components/Navigation/BottomNavbar/BottomNavbar';
import SideNavigation from '../../components/Navigation/SideNavbar/SideNavigation';
import SideCalendar from '../../components/SideCalendar/SideCalendar';
import SideHistory from '../../components/SideHistory/SideHistory';

const AppLayout: React.FC = () => {
  const theme = useTheme();
  const isMediumAndUpScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isLargerAndUpScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      {isMediumAndUpScreen ? (
        <Box
          sx={{
            width: '100%',
            backgroundColor: 'white',
            height: 125,
            position: 'absolute',
            boxShadow: '0 2px 1px 0 rgb(0 0 0 / 10%)',
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
        </Grid>
        {isLargerAndUpScreen ? (
          <Grid item lg={3}>
            <Stack spacing={5} sx={{ marginLeft: 4, marginRight: 4, marginTop: '150px' }}>
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
