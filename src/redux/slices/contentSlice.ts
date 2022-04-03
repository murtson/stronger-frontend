import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ExerciseCategory } from '../../ts/interfaces/ExerciseCategory';
import { Exercise } from '../../ts/interfaces/Exercise';
import axios from 'axios';

const baseURL = 'http://localhost:4000/api/v1';

export const getExerciseCategories = createAsyncThunk('content/getExerciseCategories', async () => {
  const response = await axios.get(`${baseURL}/categories`);
  return response.data;
});

export const getAllExercises = createAsyncThunk('content/getAllExercises', async () => {
  const response = await axios.get(`${baseURL}/exercises`);
  return response.data;
});

interface ContentState {
  categories: ExerciseCategory[];
  exercises: Exercise[];
  loading: boolean;
  error: null | {};
}

const initialState: ContentState = {
  categories: [],
  exercises: [],
  loading: false,
  error: null,
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExerciseCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getExerciseCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    });
    builder.addCase(getExerciseCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(getAllExercises.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllExercises.fulfilled, (state, action) => {
      state.exercises = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllExercises.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default contentSlice.reducer;
