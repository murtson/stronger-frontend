import { useQuery, gql } from '@apollo/client';
import Exercise from '../interfaces/Exercise';
import ExerciseCategory from '../interfaces/ExerciseCategory';

export const GET_EXERCISE_CATEGORIES = gql`
  query {
    exerciseCategories {
      id
      type
      color
      _count {
        exercises
      }
    }
  }
`;

const GET_ALL_EXERCISES = gql`
  query {
    exercises {
      id
      name
      categoryId
      logType
      description
      color
    }
  }
`;

const GET_CATEGORY_EXERCISES = gql`
  query categoryExercises($id: Int!) {
    categoryExercises(categoryId: $id) {
      id
      name
      logType
      description
      color
      categoryId
    }
  }
`;

export const useGetAllExerciseCategories = () => {
  const { data, error, loading } = useQuery(GET_EXERCISE_CATEGORIES);
  return { data, error, loading };
};

export const useGetAllExercises = () => {
  const { data, error, loading } = useQuery(GET_ALL_EXERCISES);
  return { data, error, loading };
};

export const useGetCategoryExercises = (id: number) => {
  const { data: allExercises, error, loading } = useQuery(GET_ALL_EXERCISES);
  const filteredExercises = {
    exercises: allExercises?.exercises.filter(
      (e: Exercise) => e.categoryId.toString() === id.toString()
    ),
  };
  return { data: filteredExercises, error, loading };
};

export const useGetExerciseCategory = (id: number) => {
  const { data: allCategories, error, loading } = useQuery(GET_EXERCISE_CATEGORIES);
  const category = {
    exerciseCategory: allCategories?.exerciseCategories.find(
      (e: ExerciseCategory) => e.id.toString() === id.toString()
    ),
  };
  return { data: category, error, loading };
};

export const useGetExercise = (id: number) => {
  const { data: allExercises, error, loading } = useQuery(GET_ALL_EXERCISES);
  const filteredExercises = {
    exercise: allExercises?.exercises.find((e: Exercise) => e.id.toString() === id.toString()),
  };
  return { data: filteredExercises, error, loading };
};
