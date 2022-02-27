import React from 'react';
import { Box, Typography } from '@mui/material';

const OverviewView: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: { xs: 0, md: '24px 0' },
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'divider',
        borderRadius: { xs: 0, md: 2 },
      }}
    >
      <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.secondary' }}>
        Overview coming soon...
      </Typography>
    </Box>
  );
};

export default OverviewView;
