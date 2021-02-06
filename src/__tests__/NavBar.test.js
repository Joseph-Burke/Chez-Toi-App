import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import store from '../store/test-store';

test('the NavBar component renders correctly', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <Route path="/">
          <NavBar />
        </Route>
      </MemoryRouter>
    </Provider>,
  );

  const logo = screen.getByTestId('logo');
  const linksList = screen.getByTestId('social-media-list');
  const copyright = screen.getByTestId('copyright');

  [logo, linksList, copyright].forEach(item => {
    expect(item).toBeInTheDocument();
  });
});
