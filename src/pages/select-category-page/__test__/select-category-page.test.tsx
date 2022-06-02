import { render, screen } from '../../../utilities/testing-utils';
import SelectCategoryPage from '../select-category-page';

test.skip('should first render loader then display exercise categories', async () => {
  render(<SelectCategoryPage />);

  // skeleton loader should initially be displayed (while fetching data from server)
  const skeletonLoader = screen.getByTestId('skeleton-list-loader');
  expect(skeletonLoader).toBeInTheDocument();

  // skeleton loader should disappear when categories from server have been loaded
  const categoriesList = await screen.findByRole('list');
  expect(categoriesList).toBeInTheDocument();
  expect(skeletonLoader).not.toBeInTheDocument();
});

test('should first render loader then display error message', async () => {
  // TODO
});
