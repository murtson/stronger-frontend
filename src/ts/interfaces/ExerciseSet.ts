import { Exercise } from './Exercise';
import { Set } from './Set';

export interface ExerciseSet {
  setId: string;
  exercise: Exercise;
  sets: Set[];
}
