import { render, screen } from '@testing-library/react';
import BottomNavbar from '../bottom-navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const WithProvider: React.FC = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

test('should consist of three navbar buttons', () => {
  render(<BottomNavbar />, { wrapper: WithProvider });
  const navbarButtons = screen.getAllByRole('button');
  expect(navbarButtons).toHaveLength(3);
});
