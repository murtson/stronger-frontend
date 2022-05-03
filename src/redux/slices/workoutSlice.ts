import axios, { AxiosResponse } from 'axios';
import { formatISO } from 'date-fns';

// redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  updateWorkoutInCalendar,
  pushToCalendarWorkouts,
  deleteFromCalendarWorkouts,
} from './calendarSlice';

// services
import * as ApiService from '../../services/ApiService/ApiService';

// interfaces & types
import { SelectedDate } from '../../ts/interfaces/SelectedDate';
import { Exercise } from '../../ts/interfaces/Exercise';
import { Workout } from '../../ts/interfaces/Workout';
import { ExerciseSet } from '../../ts/interfaces/ExerciseSet';
import { Set } from '../../ts/interfaces/Set';
import {
  incrementByOneDay,
  decrementByOneDay,
  formatDisplayDate,
} from '../../services/DatePickerService/DatePickerService';

export const getWorkout = createAsyncThunk(
  'workout/getWorkout',
  async (_, { getState, dispatch }) => {
    const appState = getState() as RootState;
    const { selectedDate } = appState.workout;
    const response = await ApiService.getWorkout(selectedDate.value);
    const { message, workout } = response.data;
    if (message !== 'not found') dispatch(updateWorkoutInCalendar(response.data));
    return message !== 'found' ? null : workout;
  }
);

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
  async (args: { exercise: Exercise; sets: Set[] }, { getState, dispatch }) => {
    const appState = getState() as RootState;
    const { selectedDate } = appState.workout;
    const response = await ApiService.createWorkout(args, selectedDate.value);
    dispatch(pushToCalendarWorkouts(response.data));
    return response.data;
  }
);

export const createWorkoutSet = createAsyncThunk(
  'workout/createWorkoutSet',
  async (args: { exercise: Exercise; sets: Set[] }, { getState }) => {
    const appState = getState() as RootState;
    const { currentWorkout } = appState.workout;
    if (!currentWorkout) throw new Error('no currentWorkout found in Redux Store');
    const response = await ApiService.createWorkoutSet(args, currentWorkout._id);
    return response.data;
  }
);

export const updateWorkoutSets = createAsyncThunk(
  'workout/updateWorkoutSets',
  async (args: { workoutId: string; setId: string; sets: Set[] }, thunkAPI) => {
    const response = await ApiService.updateWorkoutSets(args);
    return response.data;
  }
);

export const completeWorkout = createAsyncThunk(
  'workout/completeWorkout',
  async (_, { getState }) => {
    const appState = getState() as RootState;
    const { currentWorkout } = appState.workout;
    if (!currentWorkout) throw new Error('no currentWorkout found in Redux Store');
    const response = await ApiService.completeWorkout(currentWorkout._id);
    return response.data;
  }
);

export const deleteWorkout = createAsyncThunk(
  'workout/deleteWorkout',
  async (_, { getState, dispatch }) => {
    const appState = getState() as RootState;
    const { currentWorkout } = appState.workout;
    if (!currentWorkout) throw new Error('no currentWorkout found in Redux Store');
    const response = await ApiService.deleteWorkout(currentWorkout._id);
    const deletedWorkoutId = response.data;
    dispatch(deleteFromCalendarWorkouts(deletedWorkoutId));
    return deletedWorkoutId;
  }
);

interface WorkoutState {
  loading: boolean;
  error: null | {};
  selectedDate: SelectedDate;
  currentWorkout: null | Workout;
  editingExercise: null | ExerciseSet;
}

const initialDate = formatISO(new Date());

const initialState: WorkoutState = {
  loading: false,
  error: null,
  selectedDate: {
    value: initialDate,
    displayValue: 'Today',
  },
  currentWorkout: null,
  editingExercise: null,
};

export const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    incrementDate: (state) => {
      state.selectedDate = incrementByOneDay(state.selectedDate);
    },
    decrementDate: (state) => {
      state.selectedDate = decrementByOneDay(state.selectedDate);
    },
    setSelectedDate: (state, action: PayloadAction<string>) => {
      const newDate = {
        value: action.payload,
        displayValue: formatDisplayDate(action.payload),
      };
      state.selectedDate = newDate;
    },
    setEditingExercise: (state, action: PayloadAction<ExerciseSet>) => {
      state.editingExercise = action.payload;
    },
    resetEditingExercise: (state) => {
      state.editingExercise = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateWorkoutSets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateWorkoutSets.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentWorkout = action.payload.updatedWorkout;
      state.editingExercise = action.payload.updatedExerciseSet;
    });
    builder.addCase(updateWorkoutSets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(createWorkoutSet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createWorkoutSet.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentWorkout = action.payload.updatedWorkout;
      state.editingExercise = action.payload.newExerciseSet;
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
    builder.addCase(deleteWorkout.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
      state.currentWorkout = null;
    });
    builder.addCase(deleteWorkout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

// action creators are generated for each case reducer function
export const {
  resetEditingExercise,
  setEditingExercise,
  incrementDate,
  decrementDate,
  setSelectedDate,
} = workoutSlice.actions;

export default workoutSlice.reducer;
