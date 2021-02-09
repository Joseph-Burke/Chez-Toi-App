import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import LogIn from '../components/LogIn';
import store from '../store/test-store';

test('the LogIn component renders correctly', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/log_in']} initialIndex={1}>
        <Route path="/log_in">
          <LogIn />
        </Route>
      </MemoryRouter>
    </Provider>,
  );

  const [logIn, header] = [
    screen.getByTestId('logIn'),
    screen.getByText('Log In'),
  ];

  [logIn, header].forEach(
    item => {
      expect(item).toBeInTheDocument();
    },
  );

  document.getElementById('email').nodeValue = 'not_a_valid_email@test.com';
  document.getElementById('submit').click();

  const alert = screen.getByTestId('alert');
  expect(alert).toBeInTheDocument();
});
