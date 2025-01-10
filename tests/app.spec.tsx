import { test, expect } from '@playwright/test';
import App from '../src/App';
import { render } from '@testing-library/react';
import React from 'react';
import '../src/App.css';
import * as esbuild from 'esbuild';

test('renders App component without errors', async () => {
  await esbuild.build({
    entryPoints: ['src/App.css'],
    bundle: true,
    outfile: 'out.css',
    write: true,
  });
  render(<App />);
});
