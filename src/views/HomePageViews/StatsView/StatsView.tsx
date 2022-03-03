import { Box, Typography } from '@mui/material';
import React from 'react';

const StatsView: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginBottom: { xs: 0, md: '25px' },
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'divider',
        borderRadius: { xs: 0, md: 2 },
      }}
    >
      <Typography variant='h6' sx={{ color: 'text.secondary' }}>
        Stats coming soon...
      </Typography>
    </Box>
  );
};

export default StatsView;
