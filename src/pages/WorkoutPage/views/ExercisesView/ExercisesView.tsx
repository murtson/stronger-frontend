// general
import React from 'react';
// mui & components
import LoggedExercise from './LoggedExercise/LoggedExercise';
import { Box, List, Divider } from '@mui/material';
import NoLoggedWorkout from '../../NoLoggedWorkout/NoLoggedWorkout';
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
