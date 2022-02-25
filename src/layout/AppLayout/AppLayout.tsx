import { Grid, Stack, Typography, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import React from 'react';

import BottomNavbar from '../../components/navigation/BottomNavbar/BottomNavbar';
import SideNavigation from '../../components/navigation/SideNavbar/SideNavigation';
import SideCalendar from '../../components/SideCalendar/SideCalendar';
import SideHistory from '../../components/SideHistory/SideHistory';

const AppLayout: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: {
            xs: 'none',
            md: 'block',
          },
          width: '100%',
          backgroundColor: 'white',
          height: 125,
          position: 'absolute',
          // borderBottom: '1px solid #e8e8e8',
        }}
      ></Box>
      <Grid
        container
        maxWidth='xl'
        sx={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          margin: 'auto',
        }}
      >
        <Grid item sm={2} md={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <SideNavigation />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={6}
          sx={{
            display: 'flex',
            // borderLeftWidth: { xs: 0, sm: '1px' },
            // borderLeftStyle: 'solid',
            // borderLeftColor: 'divider',
            // borderRightWidth: { xs: 0, sm: '1px' },
            // borderRightStyle: 'solid',
            // borderRightColor: 'divider',
          }}
        >
          <Outlet />
          <BottomNavbar />
        </Grid>
        <Grid item lg={3} sx={{ display: { xs: 'none', lg: 'block' } }}>
          <Stack
            spacing={5}
            sx={{
              marginLeft: 4,
              marginRight: 4,
              marginTop: { xs: '125px', md: '150px' },
            }}
          >
            <SideCalendar />
            <SideHistory />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default AppLayout;
