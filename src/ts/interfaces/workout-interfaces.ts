import { CategoryColors } from '../enums/colors';

export interface Workout {
  _id: string;
  name: string;
  userId: string;
  exercises: ExerciseSet[];
  isCompleted: boolean;
  time: {
    createdAt: string;
  };
}

export interface ExerciseSet {
  setId: string;
  exercise: Exercise;
  sets: Set[];
}

export interface Exercise {
  id: string | number;
  name: string;
  logType: string;
  description?: string;
  color: string;
  categoryId: number;
}

export interface Set {
  weight: number;
  reps: number;
}

export interface ExerciseCategory {
  id: string;
  name: string;
  color: CategoryColors;
  _count?: {
    exercises: number;
  };
}
