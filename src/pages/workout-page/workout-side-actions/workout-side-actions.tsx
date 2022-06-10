// general
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// mui & components
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CompleteWorkoutDialog from '../../../components/dialogs/complete-workout-dialog/complete-workout-dialog';
import DeleteWorkoutDialog from '../../../components/dialogs/delete-workout-dialog/delete-workout-dialog';
import NoCurrentWorkoutActions from './no-current-workout-actions/no-current-workout-actions';
import ActiveWorkoutActions from './active-workout-actions/active-workout-actions';
import CompletedWorkoutActions from './completed-workout-actions/completed-workout-actions';
// redux
import { useSelector } from 'react-redux';
import { completeWorkout, deleteWorkout } from '../../../redux/slices/workout-slice';
import { RootState, useAppDispatch } from '../../../redux/store';
// constants & interfaces
import { CONTENT_BORDER_STYLE } from '../../../constants/styles-constants';
import { Workout } from '../../../ts/interfaces/workout-interfaces';

const styles = {
  root: {
    width: '100%',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    ...CONTENT_BORDER_STYLE,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'primary.main',
    color: 'primary.contrastText',
    padding: 1,
    transition: 'all 0.25s',
  },
  buttonContainer: {
    mt: 2,
  },
  button: {
    borderRadius: 2,
    mb: 2,
  },
};

interface Props {
  currentWorkout: Workout | null;
  loading: boolean;
}

const WorkoutSideActions: React.FC<Props> = ({ currentWorkout, loading }) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [completeDialogOpen, setCompleteDialogOpen] = useState(false);
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  let location = useLocation();

  const handleCompleteWorkout = () => {
    if (loading) return;
    setCompleteDialogOpen(false);
    dispatch(completeWorkout());
  };

  const handleDeleteWorkout = () => {
    if (loading) return;
    setDeleteDialogOpen(false);
    dispatch(deleteWorkout());
  };

  const handleEditWorkout = () => {};

  const handleCopyWorkout = () => {};

  const handleNewWorkout = () => {
    navigate('/log/category');
  };

  const renderActions = () => {
    if (!currentWorkout) return <NoCurrentWorkoutActions />;
    else if (currentWorkout && !currentWorkout.isCompleted) return <ActiveWorkoutActions />;
    else return <CompletedWorkoutActions />;
  };

  return (
    <Box sx={styles.root}>
      <DeleteWorkoutDialog
        open={deleteDialogOpen}
        handleClose={() => setDeleteDialogOpen(false)}
        handleDelete={handleDeleteWorkout}
      />
      <CompleteWorkoutDialog
        open={completeDialogOpen}
        handleClose={() => setCompleteDialogOpen(false)}
        handleComplete={handleCompleteWorkout}
      />
      {renderActions()}
    </Box>
  );
};

export default WorkoutSideActions;
