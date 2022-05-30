import { reduxRender, screen } from '../../../../utilities/test-utils';
import userEvent from '@testing-library/user-event';
import DatePicker from '../DatePicker';

describe('DatePicker', () => {
  test('should render correct initial elements', () => {
    reduxRender(<DatePicker />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);

    const heading = screen.getByRole('heading', { name: /today/i });
    expect(heading).toBeInTheDocument();
  });
  test('should change date when clicking navigation buttons', () => {
    reduxRender(<DatePicker />);
    const heading = screen.getByRole('heading');
    const backButton = screen.getByTestId('ArrowBackOutlinedIcon');
    const forwardButton = screen.getByTestId('ArrowForwardOutlinedIcon');

    // heading should initially display "Today"
    expect(heading).toHaveTextContent(/today/i);

    // heading should after backButton click display 'Yesterday'
    userEvent.click(backButton);
    expect(heading).toHaveTextContent(/yesterday/i);

    // heading should after forwardButton click display 'Today' again
    userEvent.click(forwardButton);
    expect(heading).toHaveTextContent(/today/i);

    // heading should after another forwardButton click display 'Tomorrow'
    userEvent.click(forwardButton);
    expect(heading).toHaveTextContent(/tomorrow/i);
  });
});
