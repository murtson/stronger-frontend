// general
import React from 'react';
// mui & components
import LoggedExercise from './logged-exercise/logged-exercise';
import { Box, List, Divider } from '@mui/material';
import NoLoggedWorkout from '../../no-logged-workout/no-logged-workout';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
// constants
import { CONTENT_BORDER_STYLE } from '../../../../constants/styles-constants';

const styles = {
  root: {
    ...CONTENT_BORDER_STYLE,
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    overflow: 'hidden',
  },
};

const ExercisesView: React.FC = () => {
  const { currentWorkout, loading } = useSelector((state: RootState) => state.workout);

  if (!currentWorkout) return <NoLoggedWorkout />;

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
