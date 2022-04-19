import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux/store';
import { logExerciseSet } from '../../redux/slices/workoutSlice';

import { useTheme } from '@mui/material';
import { Divider, Box, Typography, IconButton, Button } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import LogExerciseHeader from './LogExerciseHeader/LogExerciseHeader';
import LogController from './LogController/LogController';
import LoggedSetsTable from './LoggedSetsTable/LoggedSetsTable';
import Snackbar from '../../components/Snackbar/Snackbar';

import { Set } from '../../ts/interfaces/Set';
import { EditData } from '../../ts/interfaces/EditData';

const styles = {
  controllerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: { xs: 1, md: 2 },
    mb: { xs: 1, md: 2 },
    ml: { xs: 2, md: 0 },
    mr: { xs: 1, md: 0 },
  },
  setsAndButtonContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  loggedSetsContainer: {
    flex: 1,
    borderRadius: { xs: 0, md: 2 },
    mb: { xs: 0, md: 3 },
    position: 'relative',
    pb: '75px',
    backgroundColor: 'white',
    boxShadow: { xs: 0, md: 1 },
  },
  finishButtonContainer: {
    position: 'absolute',
    left: '50%',
    bottom: 0,
    width: '100%',
    transform: 'translateX(-50%)',
    boxSizing: 'border-box',
    padding: 2,
    textAlign: 'center',
  },
};

const initialEditDataState: EditData = { selectedSetIndex: null, weight: null, reps: null };

const LogExercisePage: React.FC = () => {
  const theme = useTheme();
  let navigate = useNavigate();
  const { id } = useParams();
  const loggingExercise = useSelector((state: RootState) => state.content.exercises).find(
    (exercise) => exercise.id.toString() === id?.toString()
  );
  const { editingExercise, loading, error } = useSelector((state: RootState) => state.workout);
  const dispatch = useDispatch<AppDispatch>();
  const [loggedSets, setLoggedSets] = useState<Set[]>([]);
  const [editData, setEditData] = useState<EditData>(initialEditDataState);
  const [snackbarType, setSnackbarType] = useState<'info' | 'error' | 'success'>('info');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');

  useEffect(() => {
    if (!editingExercise) return;
    setLoggedSets(editingExercise.sets);
    if (!snackbarText) return;
    setSnackbarOpen(true);
  }, [editingExercise]);

  const handleSaveButton = (set: Set) => {
    if (!loggingExercise) return;
    const newLoggedSets = [...loggedSets, set];
    dispatch(logExerciseSet({ exercise: loggingExercise, sets: newLoggedSets }));
    setSnackbarType('success');
    setSnackbarText('set saved');
  };

  const handleUpdateButton = (selectedSetIndex: number, updatedSet: Set) => {
    if (!loggingExercise) return;
    const newLoggedSets = [...loggedSets];
    newLoggedSets[selectedSetIndex] = updatedSet;
    dispatch(logExerciseSet({ exercise: loggingExercise, sets: newLoggedSets }));
    setEditData(initialEditDataState);
    setSnackbarType('info');
    setSnackbarText('set updated');
  };

  const handleDeleteButton = (selectedSetIndex: number) => {
    if (!loggingExercise) return;
    const newLoggedSets = [...loggedSets];
    newLoggedSets.splice(selectedSetIndex, 1);
    dispatch(logExerciseSet({ exercise: loggingExercise, sets: newLoggedSets }));
    setEditData(initialEditDataState);
    setSnackbarType('error');
    setSnackbarText('set removed');
  };

  const handleSelectSet = (selectedSetIndex: number) => {
    const clickSameSet = selectedSetIndex === editData.selectedSetIndex;
    if (clickSameSet) return setEditData(initialEditDataState);
    const { weight, reps } = loggedSets[selectedSetIndex];
    setEditData({ selectedSetIndex, weight, reps });
  };

  const handleFinishExercise = () => {
    navigate('/workout/exercises');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Snackbar
        open={snackbarOpen}
        snackbarType={snackbarType}
        onClose={() => setSnackbarOpen(false)}
      >
        {snackbarText}
      </Snackbar>
      <LogExerciseHeader />
      <Box sx={styles.controllerContainer}>
        <Typography variant='subtitle1'>{loggingExercise?.name}</Typography>
        <IconButton>
          <InfoOutlinedIcon sx={{ color: 'text.primary' }} />
        </IconButton>
      </Box>
      <LogController
        editData={editData}
        handleSaveButton={handleSaveButton}
        handleUpdateButton={handleUpdateButton}
        handleDeleteButton={handleDeleteButton}
        loading={loading}
      />
      <Divider sx={{ border: { md: 0 } }} />
      <Box sx={styles.setsAndButtonContainer}>
        <Box sx={styles.loggedSetsContainer}>
          {loggedSets.length > 0 ? (
            <LoggedSetsTable
              loggedSets={loggedSets}
              selectedSetIndex={editData.selectedSetIndex}
              handleSelectedIndex={handleSelectSet}
            />
          ) : null}
          <Box
            sx={{
              ...styles.finishButtonContainer,
              borderTop: `1px solid ${theme.palette.neutral.main}`,
            }}
          >
            <Button variant='contained' sx={{ width: 300 }} onClick={handleFinishExercise}>
              Finish Exercise
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LogExercisePage;
