import { List } from '@mui/material';
import React from 'react';
import WorkoutListItem from '../workout-list-item/workout-list-item';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const styles = {
  icon: {
    color: '#ffffff',
  },
};

const NoCurrentWorkoutActions = () => {
  return (
    <List>
      <WorkoutListItem icon={<AddIcon sx={styles.icon} fontSize='small' />}>
        Start new workout
      </WorkoutListItem>
      <WorkoutListItem icon={<ContentCopyIcon sx={styles.icon} fontSize='small' />}>
        Copy previous workout
      </WorkoutListItem>
    </List>
  );
};

export default NoCurrentWorkoutActions;
