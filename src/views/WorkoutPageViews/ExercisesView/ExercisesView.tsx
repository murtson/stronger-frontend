import React from 'react';
import { Box, Typography } from '@mui/material';

const ExercisesView: React.FC = () => {
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
      <Typography variant='h6' sx={{ color: 'text.secondary' }}>
        Stats coming soon...
      </Typography>
    </Box>
  );
};

export default ExercisesView;
