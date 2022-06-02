import NoHistoryWorkouts from '../no-history-workout';
import { render, screen } from '@testing-library/react';

describe('NoHistoryWorkouts', () => {
  test('should render correct elements', () => {
    render(<NoHistoryWorkouts />);
    const heading = screen.getByRole('heading', { name: /You've not logged any workouts yet/i });
    expect(heading).toBeInTheDocument();
  });
});
