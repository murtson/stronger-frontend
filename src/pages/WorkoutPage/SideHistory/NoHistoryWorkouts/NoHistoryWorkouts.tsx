import React from 'react';
import { Box, Typography } from '@mui/material';

const styles = {
  root: {
    mt: 2,
    mx: 1,
    px: 2,
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'text.secondary',
    textAlign: 'center',
  },
};

const NoHistoryWorkouts: React.FC = () => {
  return (
    <Box sx={styles.root}>
      <Typography variant='subtitle2' sx={styles.title}>
        You've not logged any workouts yet
      </Typography>
    </Box>
  );
};

export default NoHistoryWorkouts;
