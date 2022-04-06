import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LogController from '../LogController';

describe('LogController', () => {
  const mockEditData = {
    selectedSetIndex: null,
    weight: null,
    reps: null,
  };

  beforeEach(() => {
    render(
      <LogController
        editData={mockEditData}
        handleSaveButton={jest.fn()}
        handleUpdateButton={jest.fn()}
        handleDeleteButton={jest.fn()}
        loading={false}
      />
    );
  });

  test('LogController has correct initial values and functionality', () => {
    // WeightInput should initially be empty
    const weightInput = screen.getByLabelText('weight');
    expect(weightInput).toHaveValue(null);
    expect(weightInput).toHaveTextContent('');

    // RepsInput should initially be empty
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

  test("LogInput's value updates correctly when interacting with increment/decrement buttons", () => {
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
    // WeightInput do not accept negative values
    userEvent.clear(screen.getByLabelText('weight'));
    userEvent.type(screen.getByLabelText('weight'), '-21');
    expect(screen.getByLabelText('weight')).toHaveValue(null);

    // WeightInput do not accept alphabetical characters
    userEvent.clear(screen.getByLabelText('weight'));
    userEvent.type(screen.getByLabelText('weight'), 'Ninety Nine');
    expect(screen.getByLabelText('weight')).toHaveValue(null);

    // WeightInput do not accept numbers larger than 9999
    userEvent.clear(screen.getByLabelText('weight'));
    userEvent.type(screen.getByLabelText('weight'), '9999999');
    expect(screen.getByLabelText('weight')).toHaveValue(9999);

    // WeightInput should not accept numbers starting with 0
    userEvent.clear(screen.getByLabelText('weight'));
    userEvent.type(screen.getByLabelText('weight'), '0');
    expect(screen.getByLabelText('weight')).toHaveValue(null);

    // RepsInput do not accept negative values
    userEvent.clear(screen.getByLabelText('reps'));
    userEvent.type(screen.getByLabelText('reps'), '-21');
    expect(screen.getByLabelText('reps')).toHaveValue(null);

    // RepsInput do not accept alphabetical characters
    userEvent.clear(screen.getByLabelText('reps'));
    userEvent.type(screen.getByLabelText('reps'), 'Ninety Nine');
    expect(screen.getByLabelText('reps')).toHaveValue(null);

    // RepsInput do not accept numbers larger than 99
    userEvent.clear(screen.getByLabelText('reps'));
    userEvent.type(screen.getByLabelText('reps'), '9999999');
    expect(screen.getByLabelText('reps')).toHaveValue(99);

    // RepsInput should not accept numbers starting with 0
    userEvent.clear(screen.getByLabelText('reps'));
    userEvent.type(screen.getByLabelText('reps'), '0');
    expect(screen.getByLabelText('reps')).toHaveValue(null);
  });

  test("LogInput's value updates correctly when interacting with both the increment/decrement buttons and input", () => {
    const decreaseWeightButton = screen.getByTestId('decrease-weight');
    const decreaseRepsButton = screen.getByTestId('decrease-reps');
    const increaseWeightButton = screen.getByTestId('increase-weight');
    const increaseRepsButton = screen.getByTestId('increase-reps');

    // WeightInput have correct value after interaction
    userEvent.clear(screen.getByLabelText('weight'));
    userEvent.type(screen.getByLabelText('weight'), '22.5');
    userEvent.click(increaseWeightButton);
    expect(screen.getByLabelText('weight')).toHaveValue(25);
    userEvent.click(decreaseWeightButton);
    expect(screen.getByLabelText('weight')).toHaveValue(22.5);

    // RepsInput have correct value after interaction
    userEvent.clear(screen.getByLabelText('reps'));
    userEvent.type(screen.getByLabelText('reps'), '20');
    userEvent.click(increaseRepsButton);
    expect(screen.getByLabelText('reps')).toHaveValue(21);
    userEvent.click(decreaseRepsButton);
    expect(screen.getByLabelText('reps')).toHaveValue(20);
  });

  test("increment/decrement-buttons are disabled on LogInput's end values", () => {
    // set WeightInput to max value and expect increase weight button to be disabled
    userEvent.clear(screen.getByLabelText('weight'));
    userEvent.type(screen.getByLabelText('weight'), '9999');
    expect(screen.getByTestId('increase-weight')).toBeDisabled();
    expect(screen.getByTestId('decrease-weight')).toBeEnabled();

    // clear WeightInput and expect decrease weight button to be disabled
    userEvent.clear(screen.getByLabelText('weight'));
    expect(screen.getByTestId('increase-weight')).toBeEnabled();
    expect(screen.getByTestId('decrease-weight')).toBeDisabled();

    // set RepsInput to max value and expect increase reps button to be disabled
    userEvent.clear(screen.getByLabelText('reps'));
    userEvent.type(screen.getByLabelText('reps'), '99');
    expect(screen.getByTestId('increase-reps')).toBeDisabled();
    expect(screen.getByTestId('decrease-reps')).toBeEnabled();

    // clear RepsInput and expect decrease reps button to be disabled
    userEvent.clear(screen.getByLabelText('reps'));
    expect(screen.getByTestId('increase-reps')).toBeEnabled();
    expect(screen.getByTestId('decrease-reps')).toBeDisabled();
  });

  test('clicking ClearButton resets LogInput values', () => {
    // find and type values in Weight- and RepsInput
    userEvent.clear(screen.getByLabelText('weight'));
    userEvent.type(screen.getByLabelText('weight'), '100');
    userEvent.clear(screen.getByLabelText('reps'));
    userEvent.type(screen.getByLabelText('reps'), '10');

    // find and click clearButton
    const clearButton = screen.getByRole('button', { name: /clear$/i });
    userEvent.click(clearButton);

    // expect input values to be null
    expect(screen.getByLabelText('weight')).toHaveValue(null);
    expect(screen.getByLabelText('reps')).toHaveValue(null);
  });
});
