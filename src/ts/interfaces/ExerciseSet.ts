import { Exercise } from './Exercise';
import { Set } from './Set';

export interface ExerciseSet {
  setId: string;
  exercises: Exercise;
  sets: Set[];
}
