import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LogController from '../LogController';

describe('LogController', () => {
  test('LogController has correct initial values and functionality', () => {
    render(<LogController handleSaveButton={jest.fn()} />);

    // weight input should initially be empty
    const weightInput = screen.getByLabelText('weight');
    expect(weightInput).toHaveValue(null);
    expect(weightInput).toHaveTextContent('');

    // reps input should initially be empty
    const repsInput = screen.getByLabelText('reps');
    expect(repsInput).toHaveValue(null);
    expect(repsInput).toHaveTextContent('');

    // decrease weight and reps button should be disabled
    const decreaseWeightButton = screen.getByTestId('decrease-weight');
    expect(decreaseWeightButton).toBeDisabled();

    const decreaseRepsButton = screen.getByTestId('decrease-reps');
    expect(decreaseRepsButton).toBeDisabled();

    // increase weight and reps button should be enabled
    const increaseWeightButton = screen.getByTestId('increase-weight');
    expect(increaseWeightButton).toBeEnabled();

    const increaseRepsButton = screen.getByTestId('increase-reps');
    expect(increaseRepsButton).toBeEnabled();
  });

  test("LogInput's value updates correctly when interacting with buttons", () => {
    render(<LogController handleSaveButton={jest.fn()} />);
    const decreaseWeightButton = screen.getByTestId('decrease-weight');
    const decreaseRepsButton = screen.getByTestId('decrease-reps');
    const increaseWeightButton = screen.getByTestId('increase-weight');
    const increaseRepsButton = screen.getByTestId('increase-reps');

    // click twice on increase weight button
    userEvent.click(increaseWeightButton);
    userEvent.click(increaseWeightButton);

    // click thrice on increase reps button
    userEvent.click(increaseRepsButton);
    userEvent.click(increaseRepsButton);
    userEvent.click(increaseRepsButton);

    // expect output to be 5 kg and 1 reps
    expect(screen.getByLabelText('weight')).toHaveValue(5);
    expect(screen.getByLabelText('reps')).toHaveValue(3);

    // click twice on decrease weight button
    userEvent.click(decreaseWeightButton);
    userEvent.click(decreaseWeightButton);

    // click once on decrease
    userEvent.click(decreaseRepsButton);

    // expect output to be 0 kg and 2 reps
    expect(screen.getByLabelText('weight')).toHaveValue(null);
    expect(screen.getByLabelText('reps')).toHaveValue(2);
  });

  test("LogInput's value updates correctly when interacting with the input itself", () => {
    render(<LogController handleSaveButton={jest.fn()} />);

    // weight input do not accept negative values
    userEvent.clear(screen.getByLabelText('weight'));
    userEvent.type(screen.getByLabelText('weight'), '-21');
    expect(screen.getByLabelText('weight')).toHaveValue(null);

    // weight input do not accept alphabetical characters
    userEvent.clear(screen.getByLabelText('weight'));
    userEvent.type(screen.getByLabelText('weight'), 'Ninety Nine');
    expect(screen.getByLabelText('weight')).toHaveValue(null);

    // weight input do not accept numbers larger than 9999
    userEvent.clear(screen.getByLabelText('weight'));
    userEvent.type(screen.getByLabelText('weight'), '9999999');
    expect(screen.getByLabelText('weight')).toHaveValue(9999);

    // reps input do not accept negative values
    userEvent.clear(screen.getByLabelText('reps'));
    userEvent.type(screen.getByLabelText('reps'), '-21');
    expect(screen.getByLabelText('reps')).toHaveValue(null);

    // reps input do not accept alphabetical characters
    userEvent.clear(screen.getByLabelText('reps'));
    userEvent.type(screen.getByLabelText('reps'), 'Ninety Nine');
    expect(screen.getByLabelText('reps')).toHaveValue(null);

    // reps input do not accept numbers larger than 99
    userEvent.clear(screen.getByLabelText('reps'));
    userEvent.type(screen.getByLabelText('reps'), '9999999');
    expect(screen.getByLabelText('reps')).toHaveValue(99);
  });

  test("LogInput's value updates correctly when interacting with both the buttons and input", () => {
    // TODO:
  });
});
