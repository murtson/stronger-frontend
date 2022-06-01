import axios from 'axios';

// interfaces & types
import { Workout } from '../../ts/interfaces/workout-interfaces';
import { Exercise } from '../../ts/interfaces/Exercise';
import { Set } from '../../ts/interfaces/Set';
import { ExerciseSet } from '../../ts/interfaces/ExerciseSet';
import { User } from '../../ts/interfaces/user-interfaces';

const baseURL = 'http://localhost:4000/api/v1';

axios.defaults.withCredentials = true;

// workout API
export const getWorkout = async (date: string) => {
  try {
    return await axios.get<{
      message: 'found' | 'not found' | 'deleted';
      workout: Workout | null;
    }>(`${baseURL}/user-workout/${date}`);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const createWorkout = async (data: { exercise: Exercise; sets: Set[]; createdAt: string }) => {
  try {
    return await axios.post<Workout>(`${baseURL}/user-workout/create`, {
      exercise: data.exercise,
      sets: data.sets,
      createdAt: data.createdAt,
    });
  } catch (e: any) {
    throw new Error(e);
  }
};

export const createWorkoutSet = async (data: { exercise: Exercise; sets: Set[] }, workoutID: string) => {
  try {
    return await axios.post<{
      updatedWorkout: Workout;
      newExerciseSet: ExerciseSet;
    }>(`${baseURL}/user-workout/${workoutID}/set`, data);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const updateWorkoutSets = async (data: { workoutId: string; setId: string; sets: Set[] }) => {
  try {
    return await axios.put<{ updatedWorkout: Workout; updatedExerciseSet: ExerciseSet }>(
      `${baseURL}/user-workout/${data.workoutId}/set/${data.setId}`,
      {
        updatedSets: data.sets,
      }
    );
  } catch (e: any) {
    throw new Error(e);
  }
};

export const completeWorkout = async (workoutId: string) => {
  try {
    return await axios.post<Workout>(`${baseURL}/user-workout/complete/${workoutId}`);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const deleteWorkout = async (workoutId: string) => {
  try {
    return await axios.post<string>(`${baseURL}/user-workout/delete/${workoutId}`);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getWorkouts = async (page: number, perPage: number) => {
  try {
    return await axios.get<{ workouts: Workout[]; totalWorkouts: number }>(
      `${baseURL}/user-workout?page=${page}&perPage=${perPage}`
    );
  } catch (e: any) {
    throw new Error(e);
  }
};

export const getWorkoutsBetweenIntervals = async (startDate: string, endDate: string) => {
  try {
    return await axios.get<Workout[]>(`${baseURL}/user-workout/?startDate=${startDate}&endDate=${endDate}`);
  } catch (e: any) {
    throw new Error(e);
  }
};

// auth API

interface AuthResponse {
  user: User | null;
  isLoggedIn: boolean;
}

export const registerUser = async (userData: {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
}) => {
  try {
    return await axios.post<AuthResponse>(`${baseURL}/auth/register`, userData);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const loginUser = async (userData: { email: string; password: string }) => {
  try {
    return await axios.post<AuthResponse>(`${baseURL}/auth/login`, userData);
  } catch (e: any) {
    throw new Error(e);
  }
};

export const checkAuthStatus = async () => {
  try {
    return await axios.get<AuthResponse>(`${baseURL}/auth/status`);
  } catch (e: any) {
    throw new Error(e);
  }
};
// content API
