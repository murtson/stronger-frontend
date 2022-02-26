import React from 'react';
import { Box } from '@mui/material';

import ProfileInfo from '../../../components/ProfileInfo/ProfileInfo';

const ProfileView: React.FC = () => {
  return (
    <Box sx={{ flex: 1, backgroundColor: { xs: 'white', md: 'transparent' } }}>
      <ProfileInfo />
    </Box>
  );
};

export default ProfileView;
