import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders brand', () => {
  const { getByText } = render(<App />);
  const brandElement = getByText(/EDirectInsuse/i);
  expect(brandElement).toBeInTheDocument();
});
