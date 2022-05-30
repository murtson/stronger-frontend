// general
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// mui & components
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import WorkoutHeader from './WorkoutHeader/WorkoutHeader';
import DatePicker from './Datepicker/DatePicker';
import WorkoutPageError from './WorkoutPageError/WorkoutPageError';
import NoSavedWorkout from './NoLoggedWorkout/NoLoggedWorkout';
import SideCalendar from './SideCalendar/SideCalendar';
import SideHistory from './SideHistory/SideHistory';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getWorkout, resetEditingExercise } from '../../redux/slices/workoutSlice';
// constants
import { pageRoot } from '../../constants/styles';

const styles = {
  root: pageRoot,
  contentGrid: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  sideGrid: {
    px: 3,
  },
};

const WorkoutPage: React.FC = () => {
  const { selectedDate, currentWorkout, error, loading } = useSelector((state: RootState) => state.workout);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isLargerAndUpScreen = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    dispatch(resetEditingExercise());
  }, []);

  useEffect(() => {
    dispatch(getWorkout());
  }, [selectedDate]);

  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12} lg={8} xl={8.5} sx={styles.contentGrid}>
        <WorkoutHeader />
        <DatePicker />
        <Outlet />
      </Grid>
      {isLargerAndUpScreen ? (
        <Grid item lg={4} xl={3.5} sx={styles.sideGrid}>
          <SideCalendar />
          <SideHistory />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default WorkoutPage;
