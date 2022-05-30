import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

const AllTheProviders: React.FC = ({ children }) => {
  return (
    <Router>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </Router>
  );
};

const WithReduxProvider: React.FC = ({ children }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

const withAllRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

const reduxRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: WithReduxProvider, ...options });

export * from '@testing-library/react';
export { withAllRender as render, reduxRender };
