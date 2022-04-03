import { CategoryColors } from '../enums/colors';

export interface ExerciseCategory {
  id: string;
  name: string;
  color: CategoryColors;
  _count?: {
    exercises: number;
  };
}
