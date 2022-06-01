import { render, screen } from '@testing-library/react';
import LoggedSetsTable from '../logged-sets-table';

describe('LoggedSetsTable', () => {
  test('should render no content if props loggedSets is emtpy', () => {
    render(<LoggedSetsTable loggedSets={[]} handleSelectedIndex={jest.fn()} />);

    const tableRows = screen.queryAllByRole('row');
    expect(tableRows).toHaveLength(0);
    screen.debug();
  });

  test('should render correct amount of sets', () => {
    const mockLoggedSets = [
      { weight: 100, reps: 10 },
      { weight: 105, reps: 8 },
      { weight: 110, reps: 6 },
    ];

    render(<LoggedSetsTable loggedSets={mockLoggedSets} handleSelectedIndex={jest.fn()} />);
    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(4);
  });
});
