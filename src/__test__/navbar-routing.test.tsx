import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from '../material-theme';

const withProvider: React.FC = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </ReduxProvider>
  );
};

test('bottom navbar works properly', async () => {
  render(<App />, { wrapper: withProvider });

  // expect to initially be on workout page (initial route on app load)
  const workoutHeader = screen.getByRole('heading', { name: /workout/i });
  expect(workoutHeader).toBeInTheDocument();

  const exercisesTab = screen.getByRole('tab', { name: /exercises/i });
  expect(exercisesTab).toBeInTheDocument();

  const overviewTab = screen.getByRole('tab', { name: /overview/i });
  expect(overviewTab).toBeInTheDocument();

  // find Profile NavbarButton and click it
  const profileNavbar = screen.getByTestId('profile-bottom-navbar');
  userEvent.click(profileNavbar);

  // expect to have been navigated to profile page.
  const profileHeader = screen.getByRole('heading', { name: /profile/i });
  expect(profileHeader).toBeInTheDocument();

  const editYourProfileButton = screen.getByRole('button', { name: /edit your profile/i });
  expect(editYourProfileButton).toBeInTheDocument();

  // TODO: add more checks here later

  // find Home NavbarButton and click it
  const homeNavbar = screen.getByTestId('home-bottom-navbar');
  userEvent.click(homeNavbar);

  // expect to have been navigated to home page
  const homeHeader = screen.getByRole('heading', { name: /home/i });
  expect(homeHeader).toBeInTheDocument();

  const statsTab = screen.getByRole('tab', { name: /stats/i });
  expect(statsTab).toBeInTheDocument();

  const musclesTab = screen.getByRole('tab', { name: /muscles/i });
  expect(musclesTab).toBeInTheDocument();

  // find Workout NavbarButton and click it
  const workoutNavbar = screen.getByTestId('workout-bottom-navbar');
  userEvent.click(workoutNavbar);

  // expect to have been navigated to workout page
  const workoutHeaderSecond = screen.getByRole('heading', { name: /workout/i });
  expect(workoutHeaderSecond).toBeInTheDocument();

  const exercisesTabSecond = screen.getByRole('tab', { name: /exercises/i });
  expect(exercisesTabSecond).toBeInTheDocument();

  const overviewTabSecond = screen.getByRole('tab', { name: /overview/i });
  expect(overviewTabSecond).toBeInTheDocument();
});
