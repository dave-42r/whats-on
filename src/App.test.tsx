import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page title', () => {
  render(<App />);
  const title = screen.getByText(/what's on/i);
  expect(title).toBeInTheDocument();
});

test('renders home page tag line', () => {
  render(<App />);
  const tagLine = screen.getByText(/TV Show and web series database/i);
  expect(tagLine).toBeInTheDocument();
});
