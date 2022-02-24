import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

function SideNavigation() {
  return (
    <Box sx={{ paddingRight: 4 }}>
      <Stack spacing={5} sx={{ paddingTop: 1 }}>
        <Typography variant='h6' sx={{ fontWeight: '600' }}>
          Stronger
        </Typography>
        <Typography variant='h6' sx={{ fontWeight: '400' }}>
          Home
        </Typography>
        <Typography variant='h6' sx={{ fontWeight: '400' }}>
          Workout
        </Typography>
        <Typography variant='h6' sx={{ fontWeight: '400' }}>
          Profile
        </Typography>
        <Button variant='contained' sx={{ borderRadius: 10 }}>
          New Workout
        </Button>
      </Stack>
    </Box>
  );
}

export default SideNavigation;
