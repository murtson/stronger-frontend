import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, RootState } from '../../redux/store';
import { getAllWorkouts } from '../../redux/slices/workoutSlice';
import HistoryWorkout from './history-workout/HistoryWorkout';
import * as WorkoutService from '../../services/WorkoutService/WorkoutService';

const SideHistory: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { userWorkouts } = useSelector((state: RootState) => state.workout);

  useEffect(() => {
    dispatch(getAllWorkouts());
  }, []);

  return (
    <Box
      sx={{
        minHeight: 350,
        backgroundColor: 'white',
        boxSizing: 'border-box',
        overflow: 'hidden',
        borderRadius: 2,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'divider',
      }}
    >
      <Typography
        variant='subtitle1'
        align='center'
        sx={{
          fontWeight: 600,
          lineHeight: 1.25,
          py: 2,
          backgroundColor: 'grey.200',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        Workout History
      </Typography>
      <Box>
        {userWorkouts ? (
          userWorkouts.map((workout) => <HistoryWorkout key={workout._id} data={workout} />)
        ) : (
          <div>no workouts</div>
        )}
      </Box>
    </Box>
  );
};

export default SideHistory;
