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
        mb: { xs: 0, md: 2 },
        boxShadow: { xs: 0, md: 1 },
        borderStyle: 'solid',
        borderWidth: { xs: 1, md: 0 },
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
