import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice';
import workoutReducer from './slices/workoutSlice';
import calendarReducer from './slices/calendarSlice';
import authReducer from './slices/authSlice';
import { getExerciseCategories, getAllExercises } from './slices/contentSlice';
import { getWorkoutsFromCalendarDates } from './slices/calendarSlice';
import { checkAuthStatus } from './slices/authSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    content: contentReducer,
    workout: workoutReducer,
    calendar: calendarReducer,
    auth: authReducer,
  },
});

store.dispatch(checkAuthStatus());
store.dispatch(getExerciseCategories());
store.dispatch(getAllExercises());
store.dispatch(getWorkoutsFromCalendarDates());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
