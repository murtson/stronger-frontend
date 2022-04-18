import { Alert, Box, Grid, Typography, IconButton, Divider, AlertTitle } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { getWorkout, resetEditingExercise } from '../../../redux/slices/workoutSlice';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AdjustIcon from '@mui/icons-material/Adjust';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

const WorkoutStatus: React.FC = () => {
  const { currentWorkout } = useSelector((state: RootState) => state.workout);

  return (
    <Grid
      container
      sx={{
        backgroundColor: currentWorkout?.isCompleted ? 'success.light' : 'white',

        borderRadius: 0,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'divider',
        mb: 0,
        p: 2,
        // flex: 1,
      }}
    >
      <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: 'primary.light',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AdjustIcon sx={{ color: 'primary.dark' }} />
        </Box>
      </Grid>
      <Grid
        item
        xs={8}
        sx={{
          display: 'flex',
          // alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography sx={{ color: 'primary.dark' }} variant='subtitle1'>
          Custom Workout
        </Typography>
        <Typography sx={{ color: 'primary.main' }} variant='subtitle2'>
          {currentWorkout?.isCompleted ? 'completed' : 'in progress'} - 3 exercises - 12 sets
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      ></Grid>
    </Grid>
  );
};

export default WorkoutStatus;
