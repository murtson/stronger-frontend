import { graphql } from 'msw';
import { exerciseCategories } from './mock-data/exercise-categories-mock';
import { exercises } from './mock-data/exercises-mock';

export const handlers = [
  graphql.query('exerciseCategories', (req, res, ctx) => {
    return res(
      ctx.data({
        exerciseCategories: exerciseCategories,
      })
    );
  }),

  graphql.query('exercises', (req, res, ctx) => {
    return res(
      ctx.data({
        exercises: exercises,
      })
    );
  }),
];
