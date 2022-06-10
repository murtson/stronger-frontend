// general
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// mui & components
import { Stack, Grid, useMediaQuery, useTheme } from '@mui/material';
import WorkoutHeader from './workout-header/workout-header';
import DatePicker from './date-picker/date-picker';
import SideCalendar from './side-calendar/side-calendar';
import SideHistory from './side-history/side-history';
import WorkoutSideActions from './workout-side-actions/workout-side-actions';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getWorkout, resetEditingExercise } from '../../redux/slices/workout-slice';
// constants
import { PAGE_ROOT } from '../../constants/styles-constants';

const styles = {
  root: PAGE_ROOT,
  contentGrid: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  sideGrid: {
    pr: 3,
    marginTop: '60px',
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
      {isLargerAndUpScreen ? (
        <Grid item lg={2.5} sx={styles.sideGrid}>
          <WorkoutSideActions currentWorkout={currentWorkout} loading={loading} />
        </Grid>
      ) : null}
      <Grid item xs={12} lg={7} sx={styles.contentGrid}>
        {/* <WorkoutHeader /> */}
        <DatePicker />
        <Outlet />
      </Grid>
      <Grid item lg={2.5} sx={styles.sideGrid}></Grid>
    </Grid>
  );
};

export default WorkoutPage;
