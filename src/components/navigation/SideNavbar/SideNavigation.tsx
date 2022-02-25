import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';

const SideNavigation: React.FC = () => {
  return (
    <Box
      sx={{
        padding: 3,
        marginRight: 4,
        marginLeft: 4,
        marginTop: { xs: '125px', md: '150px' },
        backgroundColor: 'white',
        borderRadius: 4,
      }}
    >
      <Stack spacing={5} sx={{ paddingTop: 0 }}>
        <Typography variant='h6' sx={{ fontWeight: '600', lineHeight: 1.25 }}>
          Navigation
        </Typography>
        <Typography variant='h6' sx={{ fontWeight: '400', display: 'flex', alignItems: 'center' }}>
          <DonutSmallOutlinedIcon sx={{ marginRight: 2 }} /> Home
        </Typography>
        <Typography variant='h6' sx={{ fontWeight: '400', display: 'flex', alignItems: 'center' }}>
          <WhatshotOutlinedIcon sx={{ marginRight: 2 }} /> Workout
        </Typography>
        <Typography variant='h6' sx={{ fontWeight: '400', display: 'flex', alignItems: 'center' }}>
          <AccountCircleOutlinedIcon sx={{ marginRight: 2 }} /> Profile
        </Typography>
        <Button variant='contained' sx={{ borderRadius: 10, fontSize: 16 }}>
          New workout
        </Button>
      </Stack>
    </Box>
  );
};

export default SideNavigation;
