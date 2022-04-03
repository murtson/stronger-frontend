import { Exercise } from './Exercise';
import { Set } from './Set';
import { ExerciseSet } from './ExerciseSet';

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
