// general
import React from 'react';
// mui
import { Box, Grid, Typography, ListItemButton, Chip } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// services & libs
import { getWorkoutExerciseCategories } from '../../../../services/workout-service/workout-service';
import { Workout } from '../../../../ts/interfaces/workout-interfaces';
import { format, parseISO } from 'date-fns';
// redux
import { useAppDispatch } from '../../../../redux/store';
import { setSelectedDate } from '../../../../redux/slices/workout-slice';

const styles = {
  root: {
    my: 1,
    px: 1,
    borderRadius: 2,
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
  const date = parseISO(data.time.createdAt);
  const dispatch = useAppDispatch();

  const handleClick = (date: string) => {
    dispatch(setSelectedDate(date));
  };

  const renderExerciseCategories = () => {
    const categories = getWorkoutExerciseCategories(data);
    return categories.map((category) => (
      <Box
        key={category.id}
        sx={{ width: 20, height: 3, borderRadius: 2, backgroundColor: category.color }}
      ></Box>
    ));
  };

  return (
    <ListItemButton sx={styles.root} onClick={() => handleClick(data.time.createdAt)}>
      <Grid container>
        <Grid item xs={3}>
          <Box sx={styles.dateBox} data-testid='date-container'>
            <Typography variant='subtitle2'>{format(date, 'MMM')}</Typography>
            <Typography variant='subtitle2'>{format(date, 'd')}</Typography>
          </Box>
        </Grid>
        <Grid item xs={7.5}>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', gap: '5px', mb: 0.5 }}>{renderExerciseCategories()}</Box>
            <Box>
              <Typography variant='subtitle2' data-testid='workout-name'>
                {data.name}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              noWrap={true}
              variant='subtitle2'
              sx={{ color: 'text.secondary' }}
              data-testid='number-of-exercises'
            >
              {data.exercises.length} exercises
            </Typography>
            <Chip
              data-testid='workout-progress-chip'
              label={data.isCompleted ? 'completed' : 'in progress'}
              color={data.isCompleted ? 'success' : 'primary'}
              sx={{ height: 24, ml: 1.25, width: 100 }}
            />
          </Box>
        </Grid>
        <Grid item xs={1.5} sx={styles.iconGrid}>
          <NavigateNextIcon sx={{ color: 'text.secondary' }} />
        </Grid>
      </Grid>
    </ListItemButton>
  );
};

export default HistoryWorkout;
