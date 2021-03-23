// https://testing-library.com/docs/queries/about/
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Dashboard link', () => {
  render(<App />);
  const homeLink = screen.getByText(/dashboard/i); // case insensitive regex
  expect(homeLink).toBeInTheDocument();
});
