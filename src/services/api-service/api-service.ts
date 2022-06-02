import axios from 'axios';
// interfaces & types
import { Workout } from '../../ts/interfaces/workout-interfaces';
import {
  AuthResponse,
  RegisterUserInput,
  LoginUserInput,
  GetWorkoutResponse,
  CreateWorkoutInput,
  UpdateWorkoutSetsInput,
  CreateWorkoutSetInput,
  CreateWorkoutSetResponse,
  UpdateWorkoutSetsResponse,
  GetWorkoutsResponse,
} from '../../ts/interfaces/api-interfaces';

export const BASE_URL = 'http://localhost:4000/api/v1';

axios.defaults.withCredentials = true;

// workout

export const getWorkout = async (date: string) => {
  try {
    return await axios.get<GetWorkoutResponse>(`${BASE_URL}/user-workout/${date}`);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getWorkouts = async (page: number, perPage: number) => {
  try {
    return await axios.get<GetWorkoutsResponse>(`${BASE_URL}/user-workout?page=${page}&perPage=${perPage}`);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const createWorkout = async (data: CreateWorkoutInput) => {
  try {
    return await axios.post<Workout>(`${BASE_URL}/user-workout/create`, data);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const createWorkoutSet = async (data: CreateWorkoutSetInput) => {
  try {
    const { exercise, sets, workoutId } = data;
    const reqBody = { exercise, sets };
    return await axios.post<CreateWorkoutSetResponse>(`${BASE_URL}/user-workout/${workoutId}/set`, reqBody);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const updateWorkoutSets = async (data: UpdateWorkoutSetsInput) => {
  try {
    const { workoutId, setId, sets } = data;
    const reqBody = { updatedSets: sets };
    return await axios.put<UpdateWorkoutSetsResponse>(
      `${BASE_URL}/user-workout/${workoutId}/set/${setId}`,
      reqBody
    );
  } catch (e: any) {
    throw new Error(e);
  }
};

export const completeWorkout = async (workoutId: string) => {
  try {
    return await axios.post<Workout>(`${BASE_URL}/user-workout/complete/${workoutId}`);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const deleteWorkout = async (workoutId: string) => {
  try {
    return await axios.post<string>(`${BASE_URL}/user-workout/delete/${workoutId}`);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getWorkoutsBetweenIntervals = async (startDate: string, endDate: string) => {
  try {
    return await axios.get<Workout[]>(`${BASE_URL}/user-workout/?startDate=${startDate}&endDate=${endDate}`);
  } catch (e: any) {
    throw new Error(e);
  }
};

// Auth

export const registerUser = async (data: RegisterUserInput) => {
  try {
    return await axios.post<AuthResponse>(`${BASE_URL}/auth/register`, data);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const loginUser = async (data: LoginUserInput) => {
  try {
    return await axios.post<AuthResponse>(`${BASE_URL}/auth/login`, data);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const checkAuthStatus = async () => {
  try {
    return await axios.get<AuthResponse>(`${BASE_URL}/auth/status`);
  } catch (e: any) {
    throw new Error(e);
  }
};
