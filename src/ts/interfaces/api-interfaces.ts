import { User } from './user-interfaces';
import { Exercise, Workout, Set, ExerciseSet } from './workout-interfaces';

export interface AuthResponse {
  user: User | null;
  isLoggedIn: boolean;
}

export interface GetWorkoutResponse {
  message: 'found' | 'not found' | 'deleted';
  workout: Workout | null;
}

export interface GetWorkoutsResponse {
  workouts: Workout[];
  totalWorkouts: number;
}

export interface CreateWorkoutInput {
  exercise: Exercise;
  sets: Set[];
  createdAt: string;
}

export interface UpdateWorkoutSetsInput {
  workoutId: string;
  setId: string;
  sets: Set[];
}

export interface UpdateWorkoutSetsResponse {
  updatedWorkout: Workout;
  updatedExerciseSet: ExerciseSet;
}

export interface CreateWorkoutSetInput {
  exercise: Exercise;
  sets: Set[];
  workoutId: string;
}

export interface CreateWorkoutSetResponse {
  updatedWorkout: Workout;
  newExerciseSet: ExerciseSet;
}

export interface RegisterUserInput {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}
