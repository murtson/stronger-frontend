import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SelectedDate } from '../../ts/interfaces/SelectedDate';
import * as DatePickerService from '../../services/DatePickerService/DatePickerService';
import * as WorkoutService from '../../services/WorkoutService/WorkoutService';
import dayjs from 'dayjs';
import { RootState } from '../store';
import axios from 'axios';
import { Exercise } from '../../ts/interfaces/Exercise';
import { Workout } from '../../ts/interfaces/Workout';
import { ExerciseSet } from '../../ts/interfaces/ExerciseSet';
import { Set } from '../../ts/interfaces/Set';
import { PayloadAction } from '@reduxjs/toolkit';

const baseURL = 'http://192.168.1.177:4000/api/v1';

export const getAllWorkouts = createAsyncThunk(
  'workout/getAllWorkouts',
  async (_, { getState }) => {
    const workouts = await axios.get(`${baseURL}/user-workout`);
    return workouts.data;
  }
);

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
    const { currentWorkout, editingExercise } = appState.workout;
    // if no workout exists, create new workout
    if (!currentWorkout) dispatch(createWorkout(args));
    // add new set to existing workout
    else if (!editingExercise) dispatch(createWorkoutSet(args));
    // we are editing an existing set on an existing workout
    else {
      const input = {
        workoutId: currentWorkout._id,
        setId: editingExercise.setId,
        sets: args.sets,
      };
      dispatch(updateWorkoutSets(input));
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

export const completeWorkout = createAsyncThunk(
  'workout/completeWorkout',
  async (_, { getState }) => {
    const appState = getState() as RootState;
    const { currentWorkout } = appState.workout;
    if (!currentWorkout) return;
    const workout = await axios.post(`${baseURL}/user-workout/complete/${currentWorkout._id}`);
    return workout.data;
  }
);

export const deleteWorkout = createAsyncThunk('workout/deleteWorkout', async (_, { getState }) => {
  const appState = getState() as RootState;
  const { currentWorkout } = appState.workout;
  if (!currentWorkout) return;
  const workout = await axios.post(`${baseURL}/user-workout/delete/${currentWorkout._id}`);
  return workout.data;
});

interface WorkoutState {
  loading: boolean;
  error: null | {};
  selectedDate: SelectedDate;
  currentWorkout: null | Workout;
  editingExercise: null | ExerciseSet;
  userWorkouts: null | Workout[];
}

const initialState: WorkoutState = {
  loading: false,
  error: null,
  selectedDate: {
    value: dayjs().toJSON(),
    displayValue: 'Today',
  },
  currentWorkout: null,
  editingExercise: null,
  userWorkouts: null,
};

export const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    setEditingExercise: (state, action: PayloadAction<ExerciseSet>) => {
      state.editingExercise = action.payload;
    },
    resetEditingExercise: (state) => {
      state.editingExercise = null;
    },
    incrementDate: (state) => {
      state.selectedDate = DatePickerService.incrementByOneDay(state.selectedDate);
    },
    decrementDate: (state) => {
      state.selectedDate = DatePickerService.decrementByOneDay(state.selectedDate);
    },
    setSelectedDate: (state, action: PayloadAction<string>) => {
      const newDate = {
        value: action.payload,
        displayValue: DatePickerService.formatDisplayDate(action.payload),
      };
      state.selectedDate = newDate;
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
      state.editingExercise = updatedExerciseSet;
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
      state.editingExercise = newSet;
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
      state.editingExercise = exerciseSet;
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
    builder.addCase(getAllWorkouts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllWorkouts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.userWorkouts = WorkoutService.sortByDate(action.payload);
    });
    builder.addCase(getAllWorkouts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(completeWorkout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(completeWorkout.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentWorkout = action.payload;
    });
    builder.addCase(completeWorkout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(deleteWorkout.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteWorkout.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentWorkout = action.payload;
    });
    builder.addCase(deleteWorkout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

// action creators are generated for each case reducer function
export const {
  incrementDate,
  decrementDate,
  setSelectedDate,
  resetEditingExercise,
  setEditingExercise,
} = workoutSlice.actions;

export default workoutSlice.reducer;
