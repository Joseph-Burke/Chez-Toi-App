import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import HouseDetails from '../components/HouseDetails';
import store from '../store/test-store';

test('the HouseDetails component renders correctly', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/house/1']} initialIndex={1}>
        <Route path="/house/:id">
          <HouseDetails />
        </Route>
      </MemoryRouter>
    </Provider>,
  );

  const houseDetails = screen.getByTestId('houseDetails');
  expect(houseDetails).toBeInTheDocument();
  screen.getByText('Book a Viewing').click();
  const [modal, form] = [
    screen.getByTestId('modal'),
    screen.getByTestId('form'),
  ];

  [modal, form].forEach(item => {
    expect(item).toBeInTheDocument();
  });
});
