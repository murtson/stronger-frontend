import React from 'react';
import { Box } from '@mui/material';

import ProfileHeader from '../../components/Headers/ProfileHeader/ProfileHeader';
import ProfileView from './views/ProfileView';

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
      {/* <ProfileHeader /> */}
      <ProfileView />
    </Box>
  );
};

export default HomePage;
