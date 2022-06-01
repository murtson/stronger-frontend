// general
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// mui & components
import { LoadingButton } from '@mui/lab';
import { Box, Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CompleteWorkoutDialog from '../../../../components/dialogs/complete-workout-dialog/complete-workout-dialog';
import DeleteWorkoutDialog from '../../../../components/dialogs/delete-workout-dialog/delete-workout-dialog';
// redux
import { useSelector } from 'react-redux';
import { completeWorkout, deleteWorkout } from '../../../../redux/slices/workout-slice';
import { RootState, useAppDispatch } from '../../../../redux/store';

const styles = {
  root: {
    width: '100%',
  },
  buttonContainer: {
    mt: 2,
  },
  button: {
    borderRadius: 2,
    mb: 2,
  },
};

const WorkoutSideActions: React.FC = () => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [completeDialogOpen, setCompleteDialogOpen] = useState(false);
  const { currentWorkout, loading, error } = useSelector((state: RootState) => state.workout);
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
      <Box sx={styles.buttonContainer}>
        {currentWorkout ? (
          <>
            {currentWorkout.isCompleted ? (
              <>
                <Button
                  onClick={handleEditWorkout}
                  variant='contained'
                  fullWidth
                  sx={styles.button}
                  startIcon={<EditIcon />}
                >
                  Edit workout
                </Button>
                <Button
                  onClick={handleCopyWorkout}
                  variant='contained'
                  fullWidth
                  sx={styles.button}
                  startIcon={<ContentCopyIcon />}
                >
                  Copy this workout
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={handleNewWorkout}
                  variant='contained'
                  fullWidth
                  sx={styles.button}
                  startIcon={<AddIcon />}
                >
                  Add to workout
                </Button>
                <LoadingButton
                  onClick={() => setCompleteDialogOpen(true)}
                  variant='contained'
                  fullWidth
                  color='success'
                  sx={styles.button}
                  startIcon={<CheckIcon />}
                >
                  Complete workout
                </LoadingButton>
              </>
            )}
            <Divider sx={{ mb: 2 }} />
            <LoadingButton
              onClick={() => setDeleteDialogOpen(true)}
              variant='contained'
              fullWidth
              color='error'
              sx={{ borderRadius: 2 }}
              startIcon={<DeleteIcon />}
            >
              Remove workout
            </LoadingButton>
          </>
        ) : (
          <>
            <Button
              onClick={handleNewWorkout}
              variant='contained'
              fullWidth
              sx={styles.button}
              startIcon={<AddIcon />}
            >
              New workout
            </Button>
            <Button
              onClick={handleCopyWorkout}
              variant='contained'
              fullWidth
              sx={{ borderRadius: 2 }}
              startIcon={<ContentCopyIcon />}
            >
              Copy another workout
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default WorkoutSideActions;
