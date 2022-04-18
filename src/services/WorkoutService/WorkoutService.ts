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

export const getNumberOfSets = (workout: Workout | null) => {
  if (!workout) return '0 sets';
  let numOfSets = 0;
  let stringFormat = 'set';
  workout.exercises.forEach((exerciseSet) => {
    numOfSets += exerciseSet.sets.length;
  });
  if (numOfSets > 1) stringFormat = 'sets';
  return `${numOfSets} ${stringFormat}`;
};

export const getNumberOfExercises = (workout: Workout | null) => {
  if (!workout) return '0 exercises';
  let stringFormat = 'exercise';
  const numOfExercises = workout.exercises.length;
  if (numOfExercises > 1) stringFormat = 'exercises';
  return `${numOfExercises} ${stringFormat}`;
};
