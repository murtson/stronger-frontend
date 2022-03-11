import { graphql } from 'msw';
import { exerciseCategories } from './mock-data/exerciseCategories';
import { exercises } from './mock-data/exercises';

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
