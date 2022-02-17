import React from 'react';
import { render, screen } from '@testing-library/react';
import { cleanup } from '@testing-library/react'
import App from './App';

// currently rendering twice
// either due to strict mode, version, or dev
describe('App', () => {
  afterEach(cleanup)
  test('renders App component', () => {
    render(<App />);

    expect(screen.getByText('VUgLi')).toBeInTheDocument();

    screen.debug();
  });
});