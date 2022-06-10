import { List, Divider } from '@mui/material';
import React from 'react';
import WorkoutListItem from '../workout-list-item/workout-list-item';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';

const styles = {
  icon: {
    color: '#ffffff',
  },
};

interface Props {
  openDeleteDialog: () => void;
}

const CompletedWorkoutActions: React.FC<Props> = ({ openDeleteDialog }) => {
  return (
    <List>
      <WorkoutListItem
        handleOnClick={() => console.log()}
        icon={<EditIcon sx={styles.icon} fontSize='small' />}
      >
        Edit workout
      </WorkoutListItem>
      <WorkoutListItem
        handleOnClick={() => console.log()}
        icon={<ContentCopyIcon sx={styles.icon} fontSize='small' />}
      >
        Copy this workout
      </WorkoutListItem>
      <Divider />
      <WorkoutListItem
        handleOnClick={openDeleteDialog}
        bgColor={'warning.main'}
        icon={<DeleteIcon sx={styles.icon} fontSize='small' />}
      >
        Delete workout
      </WorkoutListItem>
    </List>
  );
};

export default CompletedWorkoutActions;
