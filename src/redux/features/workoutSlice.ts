import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { request, GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(process.env.REACT_APP_BACKEND_URI as string, { headers: {} });

interface SelectedDate {
  value: Date;
  displayValue: string;
}

interface WorkoutState {
  loading: boolean;
  error: null | {};
  selectedDate: SelectedDate;
}

const initialState: WorkoutState = {
  loading: false,
  error: null,
  selectedDate: {
    value: new Date(),
    displayValue: 'Today',
  },
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
  },
});

const incrementByOneDay = (selectedDate: SelectedDate) => {
  const newDate = { ...selectedDate };
  newDate.value.setDate(newDate.value.getDate() + 1);
  newDate.displayValue = formatDisplayDate(selectedDate);
  return newDate;
};

const decrementByOneDay = (selectedDate: SelectedDate) => {
  const newDate = { ...selectedDate };
  newDate.value.setDate(newDate.value.getDate() - 1);
  newDate.displayValue = formatDisplayDate(selectedDate);
  return newDate;
};

const formatDisplayDate = (selectedDate: SelectedDate) => {
  const currentDate = new Date();
  let tomorrow = new Date();
  let yesterday = new Date();
  tomorrow.setDate(currentDate.getDate() + 1);
  yesterday.setDate(currentDate.getDate() - 1);

  const selectedDateIsToday =
    selectedDate.value.toLocaleDateString() === currentDate.toLocaleDateString();
  const selectedDateIsTomorrow =
    selectedDate.value.toLocaleDateString() === tomorrow.toLocaleDateString();
  const selectedDateIsYesterday =
    selectedDate.value.toLocaleDateString() === yesterday.toLocaleDateString();

  if (selectedDateIsToday) return 'Today';
  else if (selectedDateIsTomorrow) return 'Tomorrow';
  else if (selectedDateIsYesterday) return 'Yesterday';
  else return selectedDate.value.toLocaleDateString();
};

// action creators are generated for each ase reducer function
export const { incrementDate, decrementDate } = workoutSlice.actions;

export default workoutSlice.reducer;
