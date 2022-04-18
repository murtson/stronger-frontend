import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import WorkoutHeader from '../../components/Headers/WorkoutHeader/WorkoutHeader';
import DatePicker from '../../components/Datepicker/DatePicker';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getWorkout, resetEditingExercise } from '../../redux/slices/workoutSlice';
import WorkoutStatus from './WorkoutStatus/WorkoutStatus';
import { useTheme } from '@mui/material';

const WorkoutPage: React.FC = () => {
  const { selectedDate } = useSelector((state: RootState) => state.workout);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();

  useEffect(() => {
    dispatch(resetEditingExercise());
  }, []);

  useEffect(() => {
    dispatch(getWorkout());
  }, [selectedDate]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        paddingBottom: { xs: '56px', md: 0 },
        // borderLeft: `1px solid ${theme.palette.divider}`,
        // borderRight: `1px solid ${theme.palette.divider}`,
      }}
    >
      {/* <WorkoutStatus /> */}
      <WorkoutHeader />
      <DatePicker />
      <Outlet />
    </Box>
  );
};

export default WorkoutPage;
