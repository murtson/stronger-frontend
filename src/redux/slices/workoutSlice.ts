import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SelectedDate } from '../../ts/interfaces/SelectedDate';
import {
  incrementByOneDay,
  decrementByOneDay,
} from '../../services/DatePickerService/DatePickerService';
import dayjs from 'dayjs';
import { RootState } from '../store';
import axios from 'axios';
import { Exercise } from '../../ts/interfaces/Exercise';
import { Workout } from '../../ts/interfaces/Workout';
import { ExerciseSet } from '../../ts/interfaces/ExerciseSet';
import { Set } from '../../ts/interfaces/Set';

const baseURL = 'http://localhost:4000/api/v1';

export const getWorkout = createAsyncThunk('workout/getWorkout', async (_, { getState }) => {
  const appState = getState() as RootState;
  const { selectedDate } = appState.workout;
  const workout = await axios.get(`${baseURL}/user-workout/${selectedDate.value}`);
  return !workout.data ? null : workout.data;
});

export const logExerciseSet = createAsyncThunk(
  'workout/logExerciseSet',
  async (args: { exercise: Exercise; sets: Set[] }, { getState, dispatch }) => {
    const appState = getState() as RootState;
    const { currentWorkout, currentExercise } = appState.workout;
    // if no workout exists, create new workout
    if (!currentWorkout) return dispatch(createWorkout(args));
    // add new set to existing workout
    else if (!currentExercise) return dispatch(createWorkoutSet(args));
    // we are editing an existing set on an existing workout
    else {
      const input = {
        workoutId: currentWorkout._id,
        setId: currentExercise.setId,
        sets: args.sets,
      };
      return dispatch(updateWorkoutSets(input));
    }
  }
);

export const createWorkout = createAsyncThunk(
  'workout/createWorkout',
  async (args: { exercise: Exercise; sets: Set[] }, { getState }) => {
    const appState = getState() as RootState;
    const { selectedDate } = appState.workout;
    const workout = await axios.post(`${baseURL}/user-workout/create`, {
      ...args,
      createdAt: selectedDate.value,
    });
    return workout.data;
  }
);

export const createWorkoutSet = createAsyncThunk(
  'workout/createWorkoutSet',
  async (args: { exercise: Exercise; sets: Set[] }, { getState }) => {
    const appState = getState() as RootState;
    const { currentWorkout } = appState.workout;
    const updatedWorkout = await axios.post(
      `${baseURL}/user-workout/${currentWorkout?._id}/set`,
      args
    );
    return updatedWorkout.data;
  }
);

export const updateWorkoutSets = createAsyncThunk(
  'workout/updateWorkoutSets',
  async (args: { workoutId: string; setId: string; sets: Set[] }, thunkAPI) => {
    const workout = await axios.put(`${baseURL}/user-workout/${args.workoutId}/set/${args.setId}`, {
      sets: args.sets,
    });
    return workout.data;
  }
);

interface WorkoutState {
  loading: boolean;
  error: null | {};
  selectedDate: SelectedDate;
  currentWorkout: null | Workout;
  currentExercise: null | ExerciseSet;
}

const initialState: WorkoutState = {
  loading: false,
  error: null,
  selectedDate: {
    value: dayjs().toJSON(),
    displayValue: 'Today',
  },
  currentWorkout: null,
  currentExercise: null,
};

export const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    resetCurrentExercise: (state) => {
      state.currentExercise = null;
    },
    incrementDate: (state) => {
      state.selectedDate = incrementByOneDay(state.selectedDate);
    },
    decrementDate: (state) => {
      state.selectedDate = decrementByOneDay(state.selectedDate);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateWorkoutSets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateWorkoutSets.fulfilled, (state, action) => {
      const { updatedExerciseSet, updatedWorkout } = action.payload;
      state.loading = false;
      state.error = null;
      state.currentWorkout = updatedWorkout;
      state.currentExercise = updatedExerciseSet;
    });
    builder.addCase(updateWorkoutSets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(createWorkoutSet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createWorkoutSet.fulfilled, (state, action) => {
      const { updatedWorkout, newSet } = action.payload;
      state.loading = false;
      state.error = null;
      state.currentWorkout = updatedWorkout;
      state.currentExercise = newSet;
    });
    builder.addCase(createWorkoutSet.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(createWorkout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createWorkout.fulfilled, (state, action) => {
      const exerciseSet = action.payload.exercises[0];
      const workout = action.payload;
      state.loading = false;
      state.error = null;
      state.currentWorkout = workout;
      state.currentExercise = exerciseSet;
    });
    builder.addCase(createWorkout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(getWorkout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getWorkout.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentWorkout = action.payload;
    });
    builder.addCase(getWorkout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

// action creators are generated for each case reducer function
export const { incrementDate, decrementDate, resetCurrentExercise } = workoutSlice.actions;

export default workoutSlice.reducer;
