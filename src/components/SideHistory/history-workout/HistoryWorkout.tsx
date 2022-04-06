import React, { Fragment, useEffect, useState } from 'react';
import { Box, Grid, Typography, Button, Divider, IconButton } from '@mui/material';
import { Workout } from '../../../ts/interfaces/Workout';
import { format, parseISO } from 'date-fns';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import * as WorkoutService from '../../../services/WorkoutService/WorkoutService';

interface Props {
  data: Workout;
}

const HistoryWorkout: React.FC<Props> = ({ data }) => {
  const [exerciseCategories, setExerciseCategories] = useState<{ id: number; color: string }[]>([]);
  const date = parseISO(data.time.createdAt);

  useEffect(() => {
    const categories = WorkoutService.getWorkoutExerciseCategories(data);
    setExerciseCategories(categories);
  }, []);

  return (
    <Fragment>
      <Grid
        container
        sx={{
          display: 'flex',
          px: 1,
          py: 2,
          '&:hover': {
            backgroundColor: 'neutral.light',
          },
          cursor: 'pointer',
        }}
      >
        <Grid item xs={3}>
          <Box
            sx={{
              height: '100%',
              backgroundColor: 'grey.200',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              borderRadius: 1,
              width: 45,
              boxSizing: 'border-box',
            }}
          >
            <Typography variant='subtitle2'>{format(date, 'MMM')}</Typography>
            <Typography variant='subtitle2'>{format(date, 'd')}</Typography>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box sx={{ mb: 1 }}>
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
          <Box>
            <Typography variant='subtitle2' sx={{ color: 'text.secondary' }}>
              {data.exercises.length} exercises
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        >
          <NavigateNextIcon sx={{ color: 'text.secondary' }} />
        </Grid>
      </Grid>
      <Divider sx={{ '&:last-of-type': { borderBottomWidth: { xs: 1, md: 0 } } }} />
    </Fragment>
  );
};

export default HistoryWorkout;
