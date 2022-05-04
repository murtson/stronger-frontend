// general
import React, { useEffect, useState } from 'react';
// mui & components
import { Box, Typography, Button, Divider, List } from '@mui/material';
import HistoryWorkout from './HistoryWorkout/HistoryWorkout';
// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
// services
import { getWorkouts } from '../../services/ApiService/ApiService';
// interfaces
import { Workout } from '../../ts/interfaces/Workout';

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
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const { currentWorkout } = useSelector((state: RootState) => state.workout);

  useEffect(() => {
    const getHistoryWorkouts = async () => {
      try {
        const response = await getWorkouts(1, 5);
        setWorkouts(response.data.workouts);
      } catch (e: any) {
        console.log(e);
      }
    };
    getHistoryWorkouts();
  }, [currentWorkout]);

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
      <Divider sx={{ mx: 1, userSelect: 'none' }} />
      <List sx={{ userSelect: 'none' }}>
        {workouts ? (
          workouts.map((workout) => <HistoryWorkout key={workout._id} data={workout} />)
        ) : (
          <div>no workouts</div>
        )}
      </List>
    </Box>
  );
};

export default SideHistory;
