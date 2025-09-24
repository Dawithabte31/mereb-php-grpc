import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Mereb Technologies header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Mereb Technologies - gRPC Demo/i);
  expect(headerElement).toBeInTheDocument();
});

test('allows user to input text', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter your message/i);
  fireEvent.change(inputElement, { target: { value: 'Test Message' } });
  expect(inputElement.value).toBe('Test Message');
});