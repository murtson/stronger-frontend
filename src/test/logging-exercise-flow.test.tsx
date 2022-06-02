import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from '../mui-theme';

const withProvider: React.FC = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </ReduxProvider>
  );
};

test.skip('logging exercise flow works properly', async () => {
  // we start at workout page (check how routes are setup in App).
  render(<App />, { wrapper: withProvider });

  // find and click speedDial
  const speedDial = screen.getByRole('button', { name: /SpeedDial Main/i });
  userEvent.click(speedDial);

  // click on New Workout alternative from speed dial options
  const newWorkoutDialButton = screen.getByRole('menuitem', { name: /New Workout/i });
  userEvent.click(newWorkoutDialButton);

  // check that we are on SelectCategoryPage
  const categoriesHeading = screen.getByRole('heading', { name: 'Categories' });
  expect(categoriesHeading).toBeInTheDocument();

  const exerciseCategoriesHeading = screen.getByRole('heading', { name: 'Exercise categories' });
  expect(exerciseCategoriesHeading).toBeInTheDocument();

  // find and click on 'Chest ListItemButton'
  const chestListItem = await screen.findByRole('button', { name: /chest/i });
  userEvent.click(chestListItem);

  // check that we are on exercises page for chest exercises
  const chestExercisesHeader = screen.getByRole('heading', { name: 'Chest exercises' });
  expect(chestExercisesHeader).toBeInTheDocument();

  const exerciseHeader = screen.getByRole('heading', { name: 'Exercises' });
  expect(exerciseHeader).toBeInTheDocument();

  const cableCrossOver = await screen.findByRole('button', { name: /cable crossover/i });
  userEvent.click(cableCrossOver);

  // TODO: continue with log flow when functionality is implemented
});
