import { render, screen } from '../../../../utilities/test-utils';
import ExerciseList from '../ExerciseList';
import { exercises as AllExercises } from '../../../../mocks/mock-data/exercises';

const chestExercises = AllExercises.filter((exercise) => exercise.categoryId.toString() === '1');

test('should display loader while loading', async () => {
  render(<ExerciseList isLoading={true} categoryExercises={chestExercises} category={'Chest'} />);

  // expect loader to be displayed
  const skeletonLoader = screen.getByTestId('skeleton-list-loader');
  expect(skeletonLoader).toBeInTheDocument();

  // expect exercises list to not be displayed
  const categoriesList = screen.queryByRole('list');
  expect(categoriesList).not.toBeInTheDocument();

  // expect 'Chest exercises' heading and 'add exercise' button to be present
  const listHeading = screen.getByText(/chest exercises/i);
  expect(listHeading).toBeInTheDocument();

  const addExerciseButton = screen.getByRole('button', { name: /add exercise/i });
  expect(addExerciseButton).toBeInTheDocument();
});

test('should display exercises while not loading', async () => {
  render(<ExerciseList isLoading={false} categoryExercises={chestExercises} category={'Chest'} />);

  // expect loader to not be displayed
  const skeletonLoader = screen.queryByTestId('skeleton-list-loader');
  expect(skeletonLoader).not.toBeInTheDocument();

  // expect exercises list to be displayed and consist of 11 exercises
  const categoriesList = screen.getAllByRole('listitem');
  expect(categoriesList).toHaveLength(chestExercises.length);

  // expect 'Chest exercises' heading and 'add exercise' button to be present
  const listHeading = screen.getByText(/chest exercises/i);
  expect(listHeading).toBeInTheDocument();

  const addExerciseButton = screen.getByRole('button', { name: /add exercise/i });
  expect(addExerciseButton).toBeInTheDocument();
});
