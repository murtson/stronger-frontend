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

const weightIncrement = 2.5;
const repsIncrement = 1;

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

  const handleSaveButton = (set: { weight: number; reps: number }) => {
    console.log(set);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      {/* <Snackbar open={snackbarOpen} snackbarType={snackbarType} onClose={handleSnackbarClose}>
        {snackbarText}
      </Snackbar> */}
      <LogExerciseHeader title='sbopp' />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: { xs: 1, md: 2 },
          mb: { xs: 1, md: 2 },
          ml: { xs: 2, md: 0 },
          mr: { xs: 1, md: 0 },
        }}
      >
        <Typography variant='subtitle1'>Barbell Bench Press</Typography>
        <IconButton>
          <InfoOutlinedIcon sx={{ color: 'text.primary' }} />
        </IconButton>
      </Box>
      <LogController handleSaveButton={handleSaveButton} />
      <Divider sx={{ border: { md: 0 } }} />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: { xs: 0, md: 2 },
            border: { xs: 0, md: `1px solid ${theme.palette.neutral.main}` },
            mb: { xs: 0, md: 3 },
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              bottom: 0,
              width: '100%',
              transform: 'translateX(-50%)',
              boxSizing: 'border-box',
              padding: 2,
              textAlign: 'center',
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

// const mapStateToProps = (state, ownProps) => {
//   const allExercises = state.appData.exercises;
//   const exercise = allExercises.find(
//     (e) => e.exerciseId.toString() === ownProps.exerciseId.toString()
//   );

//   return {
//     appDataloading: state.appData.loading,
//     appDataError: state.appData.error,
//     exercise: exercise,
//     currentWorkout: state.workout.currentWorkout,
//     workoutError: state.workout.error,
//     workoutLoading: state.workout.loading,
//     selectedDate: state.workout.selectedDate,
//     editingSet: state.workout.editingSet,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onGetExercise: (exerciseId) => dispatch(getExercise(exerciseId)),
//     onResetEditingExercise: () => dispatch(resetEditingExercise()),
//     onSetEditingExercise: (editingExerciseData) =>
//       dispatch(setEditingExercise(editingExerciseData)),
//     onLogWorkoutSet: (exerciseData) => dispatch(logWorkoutSet(exerciseData)),
//     onGetWorkoutSet: (workoutId, setId) => dispatch(getWorkoutSet(workoutId, setId)),
//   };
// };

export default LogExercisePage;
