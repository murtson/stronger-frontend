// general
import React from 'react';
// mui & components
import { Box, Typography } from '@mui/material';
import NoSavedWorkout from '../../NoLoggedWorkout/NoLoggedWorkout';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
// constants
import { contentBorderStyle } from '../../../../constants/styles';

const styles = {
  root: {
    ...contentBorderStyle,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
};

const OverviewView: React.FC = () => {
  const { currentWorkout, loading, error } = useSelector((state: RootState) => state.workout);

  return (
    <Box sx={styles.root}>
      <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
        Overview coming soon...
      </Typography>
    </Box>
  );
};

export default OverviewView;
