import { CategoryColors } from '../enums/colors';

export interface ExerciseCategory {
  id: string;
  type: string;
  color: CategoryColors;
  _count?: {
    exercises: number;
  };
}
