import { renderWithRedux, screen } from '../../../../../utilities/test-utils';
import HistoryWorkout from '../HistoryWorkout';
import { mockWorkout_1 } from '../../../../../mocks/mock-data/workouts-mock';

describe('HistoryWorkout', () => {
  test('should render correct initial content', () => {
    renderWithRedux(<HistoryWorkout data={mockWorkout_1} />);

    const dateContainer = screen.getByTestId('date-container');
    expect(dateContainer).toHaveTextContent(/may25/i);

    const workoutName = screen.getByTestId('workout-name');
    expect(workoutName).toHaveTextContent('some-workout-name-1');

    const numberOfExercises = screen.getByTestId('number-of-exercises');
    expect(numberOfExercises).toHaveTextContent(/2 exercises/i);
  });
});
