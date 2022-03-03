import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import ExerciseCategory from '../../interfaces/ExerciseCategory';

export const fetchContent = createAsyncThunk('content/fetchContent', async () => {
  return { test: 'test' };
});

interface ContentState {
  categories: ExerciseCategory[];
  loading: boolean;
}

const initialState: ContentState = {
  categories: [],
  loading: false,
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    fetchAppContent: (state, action: PayloadAction<ExerciseCategory>) => {
      state.categories.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      console.log('AA', action.payload);
    });
  },
});

export const { fetchAppContent } = contentSlice.actions;

export default contentSlice.reducer;
