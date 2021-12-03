import React from 'react';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '@/app/config/store';

import App from './app';

// TODO move and fix it to setupTests.js (it doesn't work there right now)
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

test('renders home page', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
