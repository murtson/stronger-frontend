// general
import React from 'react';
// mui & components
import { Box, Typography } from '@mui/material';
import NoLoggedWorkout from '../../no-logged-workout/no-logged-workout';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
// constants
import { CONTENT_BORDER_STYLE } from '../../../../constants/styles-constants';

const styles = {
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const OverviewView: React.FC = () => {
  const { currentWorkout, loading, error } = useSelector((state: RootState) => state.workout);

  if (!currentWorkout) return <NoLoggedWorkout />;

  return (
    <Box sx={styles.root}>
      <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
        Overview coming soon...
      </Typography>
    </Box>
  );
};

export default OverviewView;
