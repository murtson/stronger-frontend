import { gql } from '@apollo/client';

export const GET_EXERCISE_CATEGORIES = gql`
  query {
    exerciseCategories {
      id
      type
      color
    }
  }
`;
