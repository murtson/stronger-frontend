import { render, screen } from '../../../../utilities/testing-utils';
import CategoryList from '../category-list';
import { exerciseCategories } from '../../../../mocks/mock-data/exercise-categories-mock';

test('should display loader while loading', async () => {
  render(<CategoryList isLoading={true} categories={exerciseCategories} />);

  // expect loader to be displayed
  const skeletonLoader = screen.getByTestId('skeleton-list-loader');
  expect(skeletonLoader).toBeInTheDocument();

  // expect categories list to not be displayed
  const categoriesList = screen.queryByRole('list');
  expect(categoriesList).not.toBeInTheDocument();

  // expect 'exercise categories' heading and 'add exercise' button to be present
  const listHeading = screen.getByText(/exercise categories/i);
  expect(listHeading).toBeInTheDocument();

  const addExerciseButton = screen.getByRole('button', { name: /add exercise/i });
  expect(addExerciseButton).toBeInTheDocument();
});

test('should display categories while not loading', async () => {
  render(<CategoryList isLoading={false} categories={exerciseCategories} />);

  // expect loader to not be displayed
  const skeletonLoader = screen.queryByTestId('skeleton-list-loader');
  expect(skeletonLoader).not.toBeInTheDocument();

  // expect categories list to be displayed and consist of 9 categories
  const categoriesList = screen.getAllByRole('listitem');
  expect(categoriesList).toHaveLength(exerciseCategories.length);

  // expect 'exercise categories' heading and 'add exercise' button to be present
  const listHeading = screen.getByText(/exercise categories/i);
  expect(listHeading).toBeInTheDocument();

  const addExerciseButton = screen.getByRole('button', { name: /add exercise/i });
  expect(addExerciseButton).toBeInTheDocument();
});
