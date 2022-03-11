import { graphql } from 'msw';
import { exerciseCategories } from './mock-data';

export const handlers = [
  graphql.query('exerciseCategories', (req, res, ctx) => {
    return res(
      ctx.data({
        exerciseCategories: exerciseCategories,
      })
    );
  }),
];
