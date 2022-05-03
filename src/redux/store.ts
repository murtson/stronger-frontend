import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice';
import workoutReducer from './slices/workoutSlice';
import calendarReducer from './slices/calendarSlice';
import { getExerciseCategories, getAllExercises } from './slices/contentSlice';
import { getWorkoutsFromCalendarDates } from './slices/calendarSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    content: contentReducer,
    workout: workoutReducer,
    calendar: calendarReducer,
  },
});

store.dispatch(getExerciseCategories());
store.dispatch(getAllExercises());
store.dispatch(getWorkoutsFromCalendarDates());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
