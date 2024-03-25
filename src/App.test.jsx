import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { expect, describe, test } from 'vitest';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  test('Renders App correctly', () => {
    render(<App />);
    expect(screen.getByAltText(/GitHub logo/i)).toBeInTheDocument();
    expect(screen.getByText(/GitHub Actions!/i)).toBeInTheDocument();
  });

  test('Button works', async () => {
    const user = userEvent.setup();
    render(<App />);

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();

    await user.click(btn);
    expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
  });
});
