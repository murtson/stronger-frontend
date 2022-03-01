export default interface ExerciseCategory {
  id: string;
  type: string;
  color: string;
  _count?: {
    exercises: number;
  };
}
