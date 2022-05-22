import React from 'react';
// mui & components
import { Box, Typography } from '@mui/material';
import NoSavedWorkout from '../../NoSavedWorkout/NoSavedWorkout';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const styles = {
  root: {
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
