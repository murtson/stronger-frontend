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
      <Typography variant='subtitle1'>You have no logged workout for this date</Typography>
    </Box>
  );
};

export default NoLoggedExercise;
