import { Box, Grid } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Outlet } from 'react-router-dom';

const LogLayout: React.FC = () => {
  const theme = useTheme();
  const isMediumAndUpScreen = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={{ position: 'relative', zIndex: 0 }}>
      <Grid
        container
        maxWidth='lg'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          minHeight: '100vh',
          margin: 'auto',
        }}
      >
        <Grid item xs={12} md={7} lg={7} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogLayout;
