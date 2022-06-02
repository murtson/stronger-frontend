import React from 'react';
import { Box, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

const styles = {
  root: {
    mt: 5,
    mx: 1,
    px: 2,
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 2,
  },
  title: {
    color: 'text.secondary',
    textAlign: 'center',
  },
  button: {
    width: 150,
    borderRadius: 10,
  },
};

const SideHistoryError: React.FC = () => {
  return (
    <Box sx={styles.root}>
      <Typography variant='subtitle2' sx={styles.title}>
        An error has occured fetching your workouts
      </Typography>
      <LoadingButton sx={styles.button} variant='contained'>
        Retry
      </LoadingButton>
    </Box>
  );
};

export default SideHistoryError;
