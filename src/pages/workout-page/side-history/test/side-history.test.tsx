import { renderWithRedux, screen } from '../../../../utilities/testing-utils';
import SideHistory from '../side-history';
import { workoutsMock1 } from '../../../../mocks/mock-data/workouts-mock';
import { server } from '../../../../mocks/server';
import { rest } from 'msw';
import { BASE_URL } from '../../../../services/api-service/api-service';

describe('SideHistory', () => {
  test('renders correct elements with 2 history workouts', async () => {
    renderWithRedux(<SideHistory />);
    const mainHeading = screen.getByRole('heading', { name: /recent workouts/i });
    expect(mainHeading).toBeInTheDocument();

    const viewMoreButton = screen.getByRole('button', { name: /view more/i });
    expect(viewMoreButton).toBeInTheDocument();

    const workoutHistories = await screen.findAllByRole('listitem');
    expect(workoutHistories).toHaveLength(workoutsMock1.length);
  });

  test('renders correct elements with 0 history workouts', async () => {
    server.resetHandlers(
      rest.get(`${BASE_URL}/user-workout`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ workouts: [], totalWorkouts: 0 }));
      })
    );

    renderWithRedux(<SideHistory />);
    const mainHeading = screen.getByRole('heading', { name: /recent workouts/i });
    expect(mainHeading).toBeInTheDocument();

    const viewMoreButton = screen.getByRole('button', { name: /view more/i });
    expect(viewMoreButton).toBeInTheDocument();

    const noHistoryWorkout = await screen.findByRole('heading', {
      name: /you've not logged any workouts yet/i,
    });
    expect(noHistoryWorkout).toBeInTheDocument();
  });

  test('renders correct elements with error response', async () => {
    server.resetHandlers(
      rest.get(`${BASE_URL}/user-workout`, (req, res, ctx) => {
        return res(ctx.status(400), ctx.json({ message: 'error' }));
      })
    );

    renderWithRedux(<SideHistory />);
    const mainHeading = screen.getByRole('heading', { name: /recent workouts/i });
    expect(mainHeading).toBeInTheDocument();

    const viewMoreButton = screen.getByRole('button', { name: /view more/i });
    expect(viewMoreButton).toBeInTheDocument();

    const noHistoryWorkout = await screen.findByRole('heading', {
      name: /An error has occured fetching your workouts/i,
    });
    expect(noHistoryWorkout).toBeInTheDocument();

    const retryButton = await screen.findByRole('button', { name: /retry/i });
    expect(retryButton).toBeInTheDocument();
  });
});
