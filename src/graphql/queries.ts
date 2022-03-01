import { gql } from '@apollo/client';

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

export const GET_CATEGORY_EXERCISES = gql`
  query GetCategoryExercises($id: Int!) {
    categoryExercises(id: $id) {
      id
      name
      logType
      description
      color
      categoryId
    }
  }
`;
