import React, { useEffect } from 'react';
import { Box, Typography, Button, Divider, List } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, RootState } from '../../redux/store';
import { getAllWorkouts } from '../../redux/slices/workoutSlice';
import HistoryWorkout from './HistoryWorkout/HistoryWorkout';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const styles = {
  root: {
    minHeight: 350,
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  titleContainer: {
    display: 'flex',
    backgroundColor: 'grey.100',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 1,
  },
  title: {
    fontWeight: 600,
    lineHeight: 1.25,
    py: 2,
    color: 'text.secondary',
  },
};

const SideHistory: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { userWorkouts } = useSelector((state: RootState) => state.workout);

  useEffect(() => {
    dispatch(getAllWorkouts());
  }, []);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.titleContainer}>
        <Typography variant='subtitle1' align='left' sx={styles.title}>
          Recent workouts
        </Typography>
        <Box>
          <Button>View more</Button>
        </Box>
      </Box>
      <Divider sx={{ mx: 1 }} />
      <List>
        {userWorkouts ? (
          userWorkouts.map((workout) => <HistoryWorkout key={workout._id} data={workout} />)
        ) : (
          <div>no workouts</div>
        )}
      </List>
    </Box>
  );
};

export default SideHistory;
