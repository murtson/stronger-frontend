import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const NoLoggedExercise: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='subtitle1' sx={{ color: 'text.secondary' }}>
        Workout Log Empty
      </Typography>
    </Box>
  );
};

export default NoLoggedExercise;
