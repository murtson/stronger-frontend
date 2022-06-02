import { render, screen } from '@testing-library/react';
import SideHistoryError from '../side-history-error';

describe('SideHistoryError', () => {
  test('should render correct initial elements', () => {
    render(<SideHistoryError />);
  });
});
