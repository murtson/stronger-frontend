// general
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// mui & components
import { Box } from '@mui/material';
import WorkoutHeader from './WorkoutHeader/WorkoutHeader';
import DatePicker from '../../components/Datepicker/DatePicker';
import WorkoutPageError from './WorkoutPageError/WorkoutPageError';
import NoSavedWorkout from './NoSavedWorkout/NoSavedWorkout';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getWorkout, resetEditingExercise } from '../../redux/slices/workoutSlice';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    paddingBottom: { xs: '56px', md: 0 },
  },
};

const WorkoutPage: React.FC = () => {
  const { selectedDate, currentWorkout, error, loading } = useSelector((state: RootState) => state.workout);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(resetEditingExercise());
  }, []);

  useEffect(() => {
    dispatch(getWorkout());
  }, [selectedDate]);

  return (
    <Box sx={styles.root}>
      <WorkoutHeader />
      <DatePicker />
      {error ? (
        <WorkoutPageError loading={loading} handleRetryClick={() => dispatch(getWorkout())} />
      ) : !currentWorkout ? (
        <NoSavedWorkout />
      ) : (
        <Outlet />
      )}
    </Box>
  );
};

export default WorkoutPage;
