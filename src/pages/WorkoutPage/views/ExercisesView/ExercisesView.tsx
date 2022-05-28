import React from 'react';
// mui & components
import LoggedExercise from './LoggedExercise/LoggedExercise';
import { Box, List, Divider } from '@mui/material';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const styles = {
  root: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    boxShadow: { xs: 0, md: 1 },
    borderRadius: { xs: 0, md: 2 },
    mb: { xs: 0, md: 2 },
    borderStyle: 'solid',
    borderWidth: { xs: 1, md: 1 },
    borderColor: 'divider',
    overflow: 'hidden',
  },
};

const ExercisesView: React.FC = () => {
  const { currentWorkout, loading } = useSelector((state: RootState) => state.workout);

  return (
    <Box sx={styles.root}>
      <List sx={{ p: 0, pb: 0.5 }}>
        {currentWorkout?.exercises.map((exercise, index) => (
          <LoggedExercise key={exercise.setId} exerciseSet={exercise} setIndex={index} />
        ))}
      </List>
    </Box>
  );
};

export default ExercisesView;
