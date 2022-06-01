import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// services
import * as ApiService from '../../services/api-service/api-service';
// interfaces
import { User } from '../../ts/interfaces/user-interfaces';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (args: { firstname: string; lastname: string; password: string; email: string }) => {
    const response = await ApiService.registerUser(args);
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (args: { password: string; email: string }) => {
    const response = await ApiService.loginUser(args);
    return response.data;
  }
);

export const checkAuthStatus = createAsyncThunk('auth/checkAuthStatus', async () => {
  const response = await ApiService.checkAuthStatus();
  return response.data;
});

interface AuthState {
  loading: boolean;
  error: null | {};
  isAuth: boolean;
  user: User | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  isAuth: false,
  user: null,
};

export const contentSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload.user;
      state.isAuth = action.payload.isLoggedIn;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload.user;
      state.isAuth = action.payload.isLoggedIn;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.user = null;
      state.isAuth = false;
    });
    builder.addCase(checkAuthStatus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(checkAuthStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload.user;
      state.isAuth = action.payload.isLoggedIn;
    });
    builder.addCase(checkAuthStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.user = null;
      state.isAuth = false;
    });
  },
});

export default contentSlice.reducer;
