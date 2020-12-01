import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the welcome title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Temporary News/i);
  expect(linkElement).toBeInTheDocument();
});
