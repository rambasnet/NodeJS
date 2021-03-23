import { render, screen } from '@testing-library/react';
import LoginForm from '../components/login_form';

test('email text box must be included in the form', () => {
  render(<LoginForm />);
  const emailBox = screen.getByRole('textbox');
  expect(emailBox).toBeInTheDocument();
});

test('password text box must be included in the form', () => {
  render(<LoginForm />);
  const linkElement = screen.getByPlaceholderText(/password/i); // case insensitive regex
  expect(linkElement).toBeInTheDocument();
});

test('Checkbox or "I accept the terms and conditions" must be present in the form', () => {
  render(<LoginForm />);
  const chkBox = screen.getByRole('checkbox', {
    name: /i accept the terms and conditions/i
  })
  expect(chkBox).toBeInTheDocument();
});

test('Submit button must be included in the Login form', () => {
  render(<LoginForm />);
  const submitBtn = screen.getByRole('button', {
    name: /submit/i
  });
  expect(submitBtn).toBeInTheDocument();
});