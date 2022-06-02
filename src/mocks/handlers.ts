import { rest } from 'msw';
import { workoutsMock1 } from './mock-data/workouts-mock';
import { BASE_URL } from '../services/api-service/api-service';

export const handlers = [
  rest.get(`${BASE_URL}/user-workout`, (req, res, ctx) => {
    const page = req.url.searchParams.get('page');
    const perPage = req.url.searchParams.get('perPage');
    return res(ctx.status(200), ctx.json({ workouts: workoutsMock1, totalWorkouts: workoutsMock1.length }));
  }),
];
