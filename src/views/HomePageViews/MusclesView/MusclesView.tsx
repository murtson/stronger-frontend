import { Box, Typography } from '@mui/material';
import React from 'react';

const MusclesView: React.FC = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h6' sx={{ fontWeight: 600, color: 'text.secondary' }}>
        Muscles coming soon...
      </Typography>
    </Box>
  );
};

export default MusclesView;
