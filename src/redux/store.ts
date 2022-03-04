import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './features/contentSlice';
import { getExerciseCategories, getAllExercises } from './features/contentSlice';

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

store.dispatch(getExerciseCategories());
store.dispatch(getAllExercises());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
