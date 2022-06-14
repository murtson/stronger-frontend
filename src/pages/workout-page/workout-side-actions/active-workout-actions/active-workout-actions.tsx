import { List, Divider } from '@mui/material';
import React from 'react';
import WorkoutListItem from '../workout-list-item/workout-list-item';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

const styles = {
  icon: {
    color: '#ffffff',
  },
};

interface Props {
  openDeleteDialog: () => void;
  handleAddExercise: () => void;
  openCompleteDialog: () => void;
}

const ActiveWorkoutActions: React.FC<Props> = ({
  openDeleteDialog,
  handleAddExercise,
  openCompleteDialog,
}) => {
  return (
    <List>
      <WorkoutListItem handleOnClick={handleAddExercise} icon={<AddIcon sx={styles.icon} fontSize='small' />}>
        Add exercise
      </WorkoutListItem>
      <WorkoutListItem
        handleOnClick={openCompleteDialog}
        bgColor={'success.main'}
        icon={<CheckIcon sx={styles.icon} fontSize='small' />}
      >
        Complete workout
      </WorkoutListItem>
      <Divider sx={{ my: 1 }} />
      <WorkoutListItem
        handleOnClick={openDeleteDialog}
        bgColor={'error.main'}
        icon={<DeleteIcon sx={styles.icon} fontSize='small' />}
      >
        Delete workout
      </WorkoutListItem>
    </List>
  );
};

export default ActiveWorkoutActions;
