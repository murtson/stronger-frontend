import React from 'react';
import { Box, Typography } from '@mui/material';
import HeaderAvatar from '../../main-header/header-avatar/header-avatar';

const SidebarProfileInfo: React.FC = () => {
  return (
    <Box id='sidebar-profile-info' sx={{ p: 2 }}>
      <HeaderAvatar />
      <Typography variant='subtitle1' sx={{ fontWeight: 600, mt: 2 }}>
        William Jonsson
      </Typography>
      <Typography variant='subtitle2' sx={{ color: 'text.secondary', fontWeight: 500 }}>
        @username
      </Typography>
      <Typography variant='subtitle2' sx={{ color: 'text.secondary', mt: 3 }}>
        <Box component='span'>Workouts: </Box>
        <Box component='span' sx={{ color: 'text.primary', fontWeight: 600, marginRight: 3 }}>
          12
        </Box>
        <Box component='span'>Joined: </Box>
        <Box component='span' sx={{ color: 'text.primary', fontWeight: 600 }}>
          3 months ago
        </Box>
      </Typography>
    </Box>
  );
};

export default SidebarProfileInfo;
