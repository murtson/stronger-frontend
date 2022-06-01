import { renderWithRedux, screen } from '../../../../../utilities/testing-utils';
import HistoryWorkout from '../history-workout';
import { mockWorkout_1, mockWorkout_2 } from '../../../../../mocks/mock-data/workouts-mock';
import { CategoryColors } from '../../../../../ts/enums/colors';

describe('HistoryWorkout', () => {
  test('should render correct initial content for completed workout', () => {
    renderWithRedux(<HistoryWorkout data={mockWorkout_1} />);

    const dateContainer = screen.getByTestId('date-container');
    expect(dateContainer).toHaveTextContent(/may25/i);

    const workoutName = screen.getByTestId('workout-name');
    expect(workoutName).toHaveTextContent('some-workout-name-1');

    const numberOfExercises = screen.getByTestId('number-of-exercises');
    expect(numberOfExercises).toHaveTextContent(/3 exercises/i);

    const chestCategory = screen.getByTestId('exercise-category-1');
    expect(chestCategory).toHaveStyle(`background-color: ${CategoryColors.CHEST_COLOR}`);

    const tricepCategory = screen.getByTestId('exercise-category-2');
    expect(tricepCategory).toHaveStyle(`background-color: ${CategoryColors.SHOULDER_COLOR}`);

    const progressChip = screen.getByTestId('workout-progress-chip');
    expect(progressChip).toHaveTextContent(/completed/i);
  });
  test('should render correct initial content for completed workout', () => {
    renderWithRedux(<HistoryWorkout data={mockWorkout_2} />);

    const dateContainer = screen.getByTestId('date-container');
    expect(dateContainer).toHaveTextContent(/Jun12/i);

    const workoutName = screen.getByTestId('workout-name');
    expect(workoutName).toHaveTextContent('some-workout-name-2');

    const numberOfExercises = screen.getByTestId('number-of-exercises');
    expect(numberOfExercises).toHaveTextContent(/1 exercises/i);

    const backCategory = screen.getByTestId('exercise-category-1');
    expect(backCategory).toHaveStyle(`background-color: ${CategoryColors.BACK_COLOR}`);

    const progressChip = screen.getByTestId('workout-progress-chip');
    expect(progressChip).toHaveTextContent(/in progress/i);
  });
});
