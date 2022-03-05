import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Divider,
  Box,
  Typography,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Button from '@mui/material/Button';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useTheme } from '@mui/material';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircle';
import LogExerciseHeader from '../../components/Headers/LogExerciseHeader/LogExerciseHeader';
import AddIcon from '@mui/icons-material/Add';
import LogController from './LogController/LogController';
import { ExerciseSet } from '../../interfaces/ExerciseSet';
import { Set } from '../../interfaces/Set';
import LoggedSetsTable from './LoggedSetsTable/LoggedSetsTable';

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

const LogExercisePage: React.FC = () => {
  const theme = useTheme();
  // const [weight, setWeight] = useState('');
  // const [reps, setReps] = useState('');
  // const [loggedSets, setLoggedSets] = useState([]);
  // const [selectedSetIndex, setSelectedSetIndex] = useState(null);
  // const [editWeight, setEditWeight] = useState(0);
  // const [editReps, setEditReps] = useState(0);
  // const [isEditMode, setIsEditMode] = useState(false);

  // const [searchParams] = useSearchParams();

  // let navigate = useNavigate();
  // const editParam = searchParams.get('edit');

  // useEffect(() => {
  //   if (!editingSet || !currentWorkout) return;
  //   const foundExercise = currentWorkout.exercises.find(
  //     (exercise) => exercise.setId.toString() === editingSet.setId.toString()
  //   );
  //   if (!foundExercise) return;
  //   setLoggedSets(foundExercise.sets);
  // }, [editParam, editingSet, setLoggedSets, currentWorkout]);

  // useEffect(() => {
  //   return isEditMode ? handleShowHelperHeader(true) : handleShowHelperHeader(false);
  // }, [isEditMode, handleShowHelperHeader]);

  // const handleIncreaseWeight = (weightState, setWeightState) => {
  //   const isNotAValidWeight = isNaN(weightState) || !weightState;
  //   return isNotAValidWeight
  //     ? setWeightState(weightIncrement)
  //     : setWeightState(parseFloat(weightState) + weightIncrement);
  // };

  // const handleDecreaseWeight = (weightState, setWeightState) => {
  //   const isNotAValidWeight = isNaN(weightState) || parseFloat(weightState) - weightIncrement < 0;
  //   if (isNotAValidWeight) return;
  //   setWeightState(parseFloat(weightState) - weightIncrement);
  // };

  // const handleIncreaseReps = (repsState, setRepsState) => {
  //   const isNotValidReps = isNaN(repsState) || !repsState;
  //   return isNotValidReps
  //     ? setRepsState(repsIncrement)
  //     : setRepsState(parseFloat(repsState) + repsIncrement);
  // };

  // const handleDecreaseReps = (repsState, setRepsState) => {
  //   const isNotValidReps = isNaN(repsState) || parseInt(repsState) - repsIncrement < 0;
  //   if (isNotValidReps) return;
  //   setRepsState((oldState) => parseFloat(oldState) - repsIncrement);
  // };

  // const handleWeightChange = (e, setWeightState) => {
  //   const parsedInputValue = parseFloat(e.target.value);
  //   if (parsedInputValue < 0) return;
  //   return isNaN(parsedInputValue) ? setWeightState('') : setWeightState(parsedInputValue);
  // };

  // const handleRepsChange = (e, setRepsState) => {
  //   const parsedInputValue = parseInt(e.target.value);
  //   if (parsedInputValue < 0) return;
  //   return isNaN(parsedInputValue) ? setRepsState('') : setRepsState(parsedInputValue);
  // };

  // const handleClearButton = () => {
  //   setWeight('');
  //   setReps('');
  // };

  // const handleSaveButton = async () => {
  //   const set = { weight: weight, reps: reps };
  //   const newLoggedSets = [...loggedSets, set];
  //   try {
  //     await onLogWorkoutSet({ ...exercise, sets: newLoggedSets });
  //     setSnackbarType('success');
  //     setSnackbarText('set saved');
  //     setSnackbarOpen(true);
  //     // setLoggedSets(newLoggedSets);
  //   } catch (error) {
  //     setSnackbarType('error');
  //     setSnackbarText('something went wrong, please try again');
  //     setSnackbarOpen(true);
  //   }
  // };

  // const handleDeleteButton = async () => {
  //   const newLoggedSets = [...loggedSets];
  //   newLoggedSets.splice(selectedSetIndex, 1);
  //   try {
  //     await onLogWorkoutSet({ ...exercise, sets: newLoggedSets });
  //     setSelectedSetIndex(null);
  //     setIsEditMode(false);
  //     setWeight(0);
  //     setReps(0);
  //     setSnackbarType('error');
  //     setSnackbarText('set deleted');
  //     setSnackbarOpen(true);
  //   } catch (error) {
  //     setSnackbarType('error');
  //     setSnackbarText('something went wrong, please try again');
  //     setSnackbarOpen(true);
  //   }
  // };

  // const handleUpdateButton = async () => {
  //   const newLoggedSets = [...loggedSets];
  //   const updatedSet = { weight: editWeight, reps: editReps };
  //   newLoggedSets[selectedSetIndex] = updatedSet;
  //   try {
  //     await onLogWorkoutSet({ ...exercise, sets: newLoggedSets });
  //     setSelectedSetIndex(null);
  //     setIsEditMode(false);
  //     setWeight(0);
  //     setReps(0);
  //     setSnackbarType('info');
  //     setSnackbarText('set updated');
  //     setSnackbarOpen(true);
  //   } catch (error) {
  //     setSnackbarType('error');
  //     setSnackbarText('something went wrong, please try again');
  //     setSnackbarOpen(true);
  //   }
  // };

  // const handleFinishExerciseButton = () => {
  //   navigate('/app/workout');
  // };

  // const handleRowClick = (index) => {
  //   if (index === selectedSetIndex) {
  //     setSelectedSetIndex(null);
  //     setIsEditMode(false);
  //     setEditReps(0);
  //     setEditWeight(0);
  //   } else {
  //     setSelectedSetIndex(index);
  //     setIsEditMode(true);
  //     const selectedSet = { ...loggedSets[index] };
  //     const { reps } = selectedSet;
  //     const { weight } = selectedSet;
  //     setEditReps(reps);
  //     setEditWeight(weight);
  //   }
  // };

  // const handleSnackbarClose = (event, reason) => {
  //   return reason !== 'clickaway' && setSnackbarOpen(false);
  // };

  // if (props.appDataLoading) return <div>loading</div>;

  const [loggedSets, setLoggedSets] = useState<Set[]>([]);

  const handleSaveButton = (set: Set) => {
    setLoggedSets([...loggedSets, set]);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      {/* <Snackbar open={snackbarOpen} snackbarType={snackbarType} onClose={handleSnackbarClose}>
        {snackbarText}
      </Snackbar> */}
      <LogExerciseHeader />
      <Box sx={styles.controllerContainer}>
        <Typography variant='subtitle1'>Barbell Bench Press</Typography>
        <IconButton>
          <InfoOutlinedIcon sx={{ color: 'text.primary' }} />
        </IconButton>
      </Box>
      <LogController handleSaveButton={handleSaveButton} />
      <Divider sx={{ border: { md: 0 } }} />
      <Box sx={styles.setsAndButtonContainer}>
        <Box
          sx={{
            ...styles.loggedSetsContainer,
            border: { xs: 0, md: `1px solid ${theme.palette.neutral.main}` },
          }}
        >
          {loggedSets.length > 0 ? <LoggedSetsTable loggedSets={loggedSets} /> : null}
          <Box
            sx={{
              ...styles.finishButtonContainer,
              borderTop: `1px solid ${theme.palette.neutral.main}`,
            }}
          >
            <Button variant='contained' sx={{ width: 300 }}>
              Finish Exercise
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LogExercisePage;
