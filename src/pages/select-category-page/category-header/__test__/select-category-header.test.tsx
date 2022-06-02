import { render, screen } from '../../../../utilities/testing-utils';
import SelectCategoryHeader from '../select-category-header';

test.skip('should contain correct elements', async () => {
  render(<SelectCategoryHeader />);

  // categories heading should be in document
  const categoriesHeading = screen.getByRole('heading', { name: /categories/i });
  expect(categoriesHeading).toBeInTheDocument();

  // arrowBack-IconButton should be in the document
  const arrowBackButton = screen.getByTestId('ArrowBackOutlinedIcon');
  expect(arrowBackButton).toBeInTheDocument();

  // moreVert-IconButton should be in document
  const moreVertButton = screen.getByTestId('MoreVertIcon');
  expect(moreVertButton).toBeInTheDocument();
});
