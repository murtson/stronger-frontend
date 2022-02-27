import { Box, Grid } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Outlet } from 'react-router-dom';

const LogLayout: React.FC = () => {
  const theme = useTheme();
  const isMediumAndUpScreen = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <div>
      <Box sx={{ position: 'relative', zIndex: 0 }}>
        {isMediumAndUpScreen ? (
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: 125,
              backgroundColor: 'white',
              borderBottom: `1px solid ${theme.palette.divider}`,
              zIndex: -1,
            }}
          ></Box>
        ) : null}
        <Grid
          container
          maxWidth='xl'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            height: '100vh',
            margin: 'auto',
          }}
        >
          {/* {isMediumAndUpScreen ? <Grid item md={4} lg={3}></Grid> : null} */}
          <Grid item xs={12} md={7} lg={6} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default LogLayout;
