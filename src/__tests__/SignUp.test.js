import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import SignUp from '../components/SignUp';
import store from '../store/test-store';

test('the SignUp component renders correctly', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/sign_up']} initialIndex={1}>
        <Route path="/sign_up">
          <SignUp />
        </Route>
      </MemoryRouter>
    </Provider>,
  );

  const [title, nameInput, emailInput] = [
    screen.getByText('Sign Up'),
    document.getElementById('name'),
    document.getElementById('email'),
  ];

  [title, nameInput, emailInput].forEach(item => {
    expect(item).toBeInTheDocument();
  });
});
