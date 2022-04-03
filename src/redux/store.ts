import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice';
import workoutReducer from './slices/workoutSlice';
import { getExerciseCategories, getAllExercises } from './slices/contentSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    content: contentReducer,
    workout: workoutReducer,
  },
});

store.dispatch(getExerciseCategories());
store.dispatch(getAllExercises());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
