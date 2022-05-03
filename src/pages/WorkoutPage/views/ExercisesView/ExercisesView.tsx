import React from 'react';
import LoggedExercise from './LoggedExercise/LoggedExercise';
import { Box, List, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../../../redux/store';
import SkeletonLoggedSet from '../../../../components/Loaders/skeleton-logged-set/SkeletonLoggedSet';
import NoLoggedExercise from './NoLoggedExercise/NoLoggedExercise';

const styles = {
  root: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    boxShadow: { xs: 'none', md: '0 1px 2px rgba(0, 0, 0, 0.2)' },
    borderRadius: { xs: 0, md: 2 },
    mb: { xs: 0, md: 2 },
    borderStyle: 'solid',
    borderWidth: { xs: 1, md: 0 },
    borderColor: 'divider',
    overflow: 'hidden',
  },
};

const ExercisesView: React.FC = () => {
  const { currentWorkout, loading, error } = useSelector((state: RootState) => state.workout);

  if (error) return <div>error</div>;

  return (
    <Box sx={styles.root}>
      { !currentWorkout ? (
        <NoLoggedExercise />
      ) : (
        <List sx={{ p: 0, pb: 0.5 }}>
          {currentWorkout.exercises.map((exercise, index) => (
            <LoggedExercise key={exercise.setId} exerciseSet={exercise} setIndex={index} />
          ))}
        </List>
      )}
    </Box>
  );
};

export default ExercisesView;
