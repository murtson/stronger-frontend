import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, ListItemButton, Chip } from '@mui/material';
import { Workout } from '../../../ts/interfaces/Workout';
import { format, parseISO } from 'date-fns';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import * as WorkoutService from '../../../services/WorkoutService/WorkoutService';
import { useAppDispatch } from '../../../redux/store';
import { setSelectedDate } from '../../../redux/slices/workoutSlice';

const styles = {
  root: {
    my: 1,
    px: 1,
  },
  dateBox: {
    height: '100%',
    backgroundColor: 'grey.300',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 1,
    width: 45,
    boxSizing: 'border-box',
  },
  iconGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
};

interface Props {
  data: Workout;
}

const HistoryWorkout: React.FC<Props> = ({ data }) => {
  const [exerciseCategories, setExerciseCategories] = useState<{ id: number; color: string }[]>([]);
  const date = parseISO(data.time.createdAt);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    const categories = WorkoutService.getWorkoutExerciseCategories(data);
    setExerciseCategories(categories);
  }, []);

  const handleClick = (date: string) => {
    dispatch(setSelectedDate(date));
  };

  return (
    <ListItemButton sx={styles.root} onClick={() => handleClick(data.time.createdAt)}>
      <Grid container>
        <Grid item xs={3}>
          <Box sx={styles.dateBox}>
            <Typography variant='subtitle2'>{format(date, 'MMM')}</Typography>
            <Typography variant='subtitle2'>{format(date, 'd')}</Typography>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', gap: '5px', mb: 0.5 }}>
              {exerciseCategories.map((category) => (
                <Box
                  key={category.id}
                  sx={{ width: 20, height: 3, borderRadius: 2, backgroundColor: category.color }}
                ></Box>
              ))}
            </Box>
            <Box>
              <Typography variant='subtitle2'>Chest Shoulder</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography noWrap={true} variant='subtitle2' sx={{ color: 'text.secondary' }}>
              {data.exercises.length} exercises
            </Typography>
            <Chip
              label={data.isCompleted ? 'completed' : 'in progress'}
              color={data.isCompleted ? 'success' : 'primary'}
              sx={{ height: 24, ml: 1.5, width: 100 }}
            />
          </Box>
        </Grid>
        <Grid item xs={2} sx={styles.iconGrid}>
          <NavigateNextIcon sx={{ color: 'text.secondary' }} />
        </Grid>
      </Grid>
    </ListItemButton>
  );
};

export default HistoryWorkout;
