import { render, screen } from '../../../../utilities/test-utils';
import LogExerciseHeader from '../LogExerciseHeader';

test('should contain correct elements', async () => {
  render(<LogExerciseHeader />);

  // categories heading should be in document
  const logHeading = screen.getByRole('heading', { name: /log$/i });
  expect(logHeading).toBeInTheDocument();

  // arrowBack-IconButton should be in the document
  const arrowBackButton = screen.getByTestId('ArrowBackOutlinedIcon');
  expect(arrowBackButton).toBeInTheDocument();

  // moreVert-IconButton should be in document
  const moreVertButton = screen.getByTestId('MoreVertIcon');
  expect(moreVertButton).toBeInTheDocument();
});
