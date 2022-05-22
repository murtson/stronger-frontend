import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { formatISO, parseISO, startOfMonth, endOfMonth } from 'date-fns';
import axios from 'axios';

// services
import {
  buildCalendar,
  decreaseByOneMonth,
  increaseByOneMonth,
} from '../../services/CalendarService/CalendarService';

import { getWorkoutsBetweenIntervals } from '../../services/ApiService/ApiService';

// interfaces & types
import { Calendar } from '../../ts/types/Calendar';
import { Workout } from '../../ts/interfaces/Workout';
import { RootState } from '../store';
import { sortByDate } from '../../services/WorkoutService/WorkoutService';

export const getWorkoutsFromCalendarDates = createAsyncThunk(
  'calendar/getWorkoutsFromCalendarDates',
  async (_, { getState }) => {
    const appState = getState() as RootState;
    const { calendar } = appState.calendar.currentCalendar;
    const startDate = calendar[0][0];
    const endDate = calendar[5][6];
    const workouts = await getWorkoutsBetweenIntervals(startDate, endDate);
    return workouts.data;
  }
);

interface CalendarState {
  calendarWorkouts: Workout[];
  currentCalendar: {
    month: string;
    firstDayOfMonth: string;
    lastDayOfMonth: string;
    calendar: Calendar;
  };
  loading: boolean;
  error: null | {};
}

const currentDate = new Date();

const initialState: CalendarState = {
  loading: false,
  error: null,
  currentCalendar: {
    month: formatISO(currentDate),
    firstDayOfMonth: formatISO(startOfMonth(currentDate)),
    lastDayOfMonth: formatISO(endOfMonth(currentDate)),
    calendar: buildCalendar(formatISO(currentDate)),
  },
  calendarWorkouts: [],
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    incrementCalendarMonth: (state) => {
      const nextMonth = increaseByOneMonth(state.currentCalendar.month);
      state.currentCalendar.month = nextMonth;
      state.currentCalendar.calendar = buildCalendar(nextMonth);
      state.currentCalendar.firstDayOfMonth = formatISO(startOfMonth(parseISO(nextMonth)));
      state.currentCalendar.lastDayOfMonth = formatISO(endOfMonth(parseISO(nextMonth)));
    },
    decrementCalendarMonth: (state) => {
      const previousMonth = decreaseByOneMonth(state.currentCalendar.month);
      state.currentCalendar.month = previousMonth;
      state.currentCalendar.calendar = buildCalendar(previousMonth);
      state.currentCalendar.firstDayOfMonth = formatISO(startOfMonth(parseISO(previousMonth)));
      state.currentCalendar.lastDayOfMonth = formatISO(endOfMonth(parseISO(previousMonth)));
    },
    updateWorkoutInCalendar: (
      state,
      action: PayloadAction<{
        message: 'found' | 'not found' | 'deleted';
        workout: Workout | null;
      }>
    ) => {
      const { message, workout: fetchedWorkout } = action.payload;
      if (message === 'deleted') {
        state.calendarWorkouts = state.calendarWorkouts.filter(
          (workout) => workout._id !== fetchedWorkout?._id
        );
      } else if (message === 'found') {
        state.calendarWorkouts = state.calendarWorkouts.map((workout) =>
          workout._id == fetchedWorkout?._id ? fetchedWorkout : workout
        );
      }
    },
    pushToCalendarWorkouts: (state, action: PayloadAction<Workout>) => {
      state.calendarWorkouts = [...state.calendarWorkouts, action.payload];
    },
    deleteFromCalendarWorkouts: (state, action: PayloadAction<string>) => {
      const deletedWorkoutId = action.payload;
      state.calendarWorkouts = state.calendarWorkouts.filter(
        (workout) => workout._id !== deletedWorkoutId
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWorkoutsFromCalendarDates.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getWorkoutsFromCalendarDates.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.calendarWorkouts = sortByDate(action.payload);
    });
    builder.addCase(getWorkoutsFromCalendarDates.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const {
  incrementCalendarMonth,
  decrementCalendarMonth,
  updateWorkoutInCalendar,
  pushToCalendarWorkouts,
  deleteFromCalendarWorkouts,
} = calendarSlice.actions;

export default calendarSlice.reducer;
