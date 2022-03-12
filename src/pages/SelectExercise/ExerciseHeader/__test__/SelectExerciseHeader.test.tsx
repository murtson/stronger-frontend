import { render, screen } from '../../../../utilities/test-utils';
import SelectExerciseHeader from '../SelectExerciseHeader';

test('should contain correct elements', async () => {
  render(<SelectExerciseHeader />);

  // categories heading should be in document
  const categoriesHeading = screen.getByRole('heading', { name: /exercises/i });
  expect(categoriesHeading).toBeInTheDocument();

  // arrowBack-IconButton should be in the document
  const arrowBackButton = screen.getByTestId('ArrowBackOutlinedIcon');
  expect(arrowBackButton).toBeInTheDocument();

  // moreVert-IconButton should be in document
  const moreVertButton = screen.getByTestId('MoreVertIcon');
  expect(moreVertButton).toBeInTheDocument();
});
