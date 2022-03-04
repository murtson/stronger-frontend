import { useQuery, gql } from '@apollo/client';

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

export const GET_ALL_EXERCISES = gql`
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

export const GET_CATEGORY_EXERCISES = gql`
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
