import React from 'react';
import { Box, Typography } from '@mui/material';

function OverviewView() {
  return (
    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant='h6' sx={{ fontWeight: 600 }}>
        Overview coming soon...
      </Typography>
    </Box>
  );
}

export default OverviewView;
