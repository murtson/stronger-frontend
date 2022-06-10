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

interface Props {
  handleNewWorkout: () => void;
}

const NoCurrentWorkoutActions: React.FC<Props> = ({ handleNewWorkout }) => {
  return (
    <List>
      <WorkoutListItem handleOnClick={handleNewWorkout} icon={<AddIcon sx={styles.icon} fontSize='small' />}>
        Start new workout
      </WorkoutListItem>
      <WorkoutListItem
        handleOnClick={() => {
          console.log();
        }}
        icon={<ContentCopyIcon sx={styles.icon} fontSize='small' />}
      >
        Copy previous workout
      </WorkoutListItem>
    </List>
  );
};

export default NoCurrentWorkoutActions;
