import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import ExerciseCategory from '../../interfaces/ExerciseCategory';
import Exercise from '../../interfaces/Exercise';
import { request, GraphQLClient, gql } from 'graphql-request';
import { GET_EXERCISE_CATEGORIES, GET_ALL_EXERCISES } from '../../graphql/queries';

const client = new GraphQLClient(process.env.REACT_APP_BACKEND_URI as string, { headers: {} });

export const getExerciseCategories = createAsyncThunk('content/getExerciseCategories', async () => {
  try {
    const response = await client.request(GET_EXERCISE_CATEGORIES);
    return response.exerciseCategories;
  } catch (err) {
    return err;
  }
});

export const getAllExercises = createAsyncThunk('content/getAllExercises', async () => {
  try {
    const response = await client.request(GET_ALL_EXERCISES);
    return response.exercises;
  } catch (err) {
    return err;
  }
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
    });
  },
});

export default contentSlice.reducer;
