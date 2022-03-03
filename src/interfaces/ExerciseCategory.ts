import { CategoryColors } from '../enums/colors';

export default interface ExerciseCategory {
  id: string;
  type: string;
  color: CategoryColors;
  _count?: {
    exercises: number;
  };
}
