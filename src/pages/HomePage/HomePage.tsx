import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import HomeHeader from '../../components/Headers/HomeHeader/HomeHeader';
import DateIntervalSelector from '../../components/DateIntervalSelector/DateIntervalSelector';

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        paddingBottom: { xs: '56px', md: 0 },
      }}
    >
      <HomeHeader />
      <DateIntervalSelector />
      <Outlet />
    </Box>
  );
};

export default HomePage;
