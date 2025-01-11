import { render } from '@testing-library/react';
import { test, expect } from '@playwright/test';
import App from '../src/App';
import React from 'react';
import '../src/App.css';
 //test App.tsx
 test('renders App component without crashing', () => {
  render(<App />);
  expect(true).toBeTruthy();
});