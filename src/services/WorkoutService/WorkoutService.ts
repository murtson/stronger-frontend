import { Workout } from '../../ts/interfaces/Workout';
import getUnixTime from 'date-fns/getUnixTime';
import parseISO from 'date-fns/parseISO';

export const sortByDate = (workouts: Workout[]) => {
  const newWorkouts = [...workouts];
  newWorkouts.sort((a, b) => {
    return getUnixTime(parseISO(b.time.createdAt)) - getUnixTime(parseISO(a.time.createdAt));
  });
  return newWorkouts;
};

export const getWorkoutExerciseCategories = (workout: Workout) => {
  let categories: { id: number; color: string }[] = [];
  workout.exercises.forEach((exerciseSet) => {
    const isAlreadyIncluded = categories.some(
      (category) => category.id.toString() === exerciseSet.exercise.categoryId.toString()
    );

    if (isAlreadyIncluded) return;
    categories.push({ id: exerciseSet.exercise.categoryId, color: exerciseSet.exercise.color });
  });

  return categories;
};
