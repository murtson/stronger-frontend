import React from 'react';
import LoggedExercise from './logged-exercise/LoggedExercise';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../../../../redux/store';
import SkeletonLoggedSet from '../../../../components/Loaders/skeleton-logged-set/SkeletonLoggedSet';
import NoLoggedExercise from './no-logged-exercise/NoLoggedExercise';

const ExercisesView: React.FC = () => {
  const { currentWorkout, loading, error } = useSelector((state: RootState) => state.workout);

  if (error) return <div>error</div>;

  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        margin: { xs: 0, md: '24px 0' },
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'divider',
        borderRadius: { xs: 0, md: 2 },
        overflow: 'hidden',
      }}
    >
      {loading ? (
        <SkeletonLoggedSet numberOfLoaders={3} />
      ) : !currentWorkout ? (
        <NoLoggedExercise />
      ) : (
        currentWorkout.exercises.map((exercise, index) => (
          <LoggedExercise key={exercise.setId} exerciseSet={exercise} setIndex={index} />
        ))
      )}
    </Box>
  );
};

export default ExercisesView;
