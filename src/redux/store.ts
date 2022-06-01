import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/content-slice';
import workoutReducer from './slices/workout-slice';
import calendarReducer from './slices/calendar-slice';
import authReducer from './slices/auth-slice';
import { getExerciseCategories, getAllExercises } from './slices/content-slice';
import { getWorkoutsFromCalendarDates } from './slices/calendar-slice';
import { checkAuthStatus } from './slices/auth-slice';
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
