// general
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// mui & components
import { Stack, Grid, useMediaQuery, useTheme, Box, Divider } from '@mui/material';
import WorkoutHeader from './workout-header/workout-header';
import DatePicker from './date-picker/date-picker';
import SideCalendar from './side-calendar/side-calendar';
import SideHistory from './side-history/side-history';
import WorkoutSideActions from './workout-side-actions/workout-side-actions';
import WorkoutSpeedDial from './workout-speed-dial/workout-speed-dial';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { getWorkout, resetEditingExercise } from '../../redux/slices/workout-slice';
// constants
import { PAGE_ROOT, CONTENT_BORDER_STYLE } from '../../constants/styles-constants';

const styles = {
  root: PAGE_ROOT,
  contentGrid: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  contentContainer: {
    ...CONTENT_BORDER_STYLE,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
  },
  sideGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    px: 2,
    marginTop: '60px',
  },
};

const WorkoutPage: React.FC = () => {
  const { selectedDate, currentWorkout, error, loading } = useSelector((state: RootState) => state.workout);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isLargerAndUpScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMediumAndUpScreen = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    dispatch(resetEditingExercise());
  }, []);

  useEffect(() => {
    dispatch(getWorkout());
  }, [selectedDate]);

  return (
    <Grid container sx={styles.root}>
      {isLargerAndUpScreen ? (
        <Grid item lg={3} sx={styles.sideGrid}>
          <WorkoutSideActions currentWorkout={currentWorkout} loading={loading} />
        </Grid>
      ) : null}
      <Grid item xs={12} lg={6} sx={styles.contentGrid}>
        <DatePicker />
        <Box sx={styles.contentContainer}>
          <WorkoutHeader />
          <Outlet />
        </Box>
        {isMediumAndUpScreen ? null : <WorkoutSpeedDial />}
      </Grid>
      {isLargerAndUpScreen ? (
        <Grid item lg={3} sx={styles.sideGrid}>
          <SideCalendar />
          <SideHistory />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default WorkoutPage;
