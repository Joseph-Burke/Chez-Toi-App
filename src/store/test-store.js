import { createStore } from 'redux';
import reducer from '../reducers/reducer';

const data = {
  houses: [
    {
      id: 1,
      location: 'New Street, Donisthorpe, Swadlincote, DE12',
      description:
        'A reasonably priced terraced house, perfect for first-time buyers',
      bedrooms: 2,
      bathrooms: 1,
      created_at: '2021-01-31T15:06:46.851Z',
      updated_at: '2021-01-31T15:06:47.140Z',
    },
    {
      id: 2,
      location: 'Moor Lane, Coleorton, Leicestershire, LE67',
      description:
        'A cottage brimming with character features, beautiful private established gardens, a 3.75 acre paddock and stunning views over the open countryside. ',
      bedrooms: 4,
      bathrooms: 2,
      created_at: '2021-01-31T15:06:47.231Z',
      updated_at: '2021-01-31T15:06:47.449Z',
    },
    {
      id: 3,
      location: 'Netherhall Drive, Quorn, Leicester, LE12',
      description:
        'A stunning six bedroom house built by David Wilson Homes, which offers flexible accommodation over three floors.',
      bedrooms: 6,
      bathrooms: 4,
      created_at: '2021-01-31T15:06:47.476Z',
      updated_at: '2021-01-31T15:06:47.698Z',
    },
  ],
  users: [
    {
      id: 1,
      name: 'Joseph Burke',
      created_at: '2021-01-31T15:06:46.769Z',
      updated_at: '2021-01-31T15:06:46.769Z',
      email: 'joseph_burke@outlook.com',
    },
    {
      id: 2,
      name: 'Deborah Burke',
      created_at: '2021-01-31T15:06:46.775Z',
      updated_at: '2021-01-31T15:06:46.775Z',
      email: 'deborah_burke@outlook.co.uk',
    },
    {
      id: 3,
      name: 'Martin Burke',
      created_at: '2021-01-31T15:06:46.789Z',
      updated_at: '2021-01-31T15:06:46.789Z',
      email: 'martin@hotmail.com',
    },
  ],
  viewings: [
    {
      id: 20,
      when: '2020-02-01T12:00:00.000Z',
      created_at: '2021-02-01T17:03:40.803Z',
      updated_at: '2021-02-01T17:03:40.803Z',
      house_id: 3,
      user_id: 11,
    },
    {
      id: 21,
      when: '2020-02-01T20:00:00.000Z',
      created_at: '2021-02-01T17:04:36.254Z',
      updated_at: '2021-02-01T17:04:36.254Z',
      house_id: 1,
      user_id: 11,
    },
    {
      id: 24,
      when: '2020-02-20T11:00:00.000Z',
      created_at: '2021-02-02T07:08:18.259Z',
      updated_at: '2021-02-02T07:08:18.259Z',
      house_id: 1,
      user_id: 12,
    },
    {
      id: 25,
      when: '2020-02-01T20:00:00.000Z',
      created_at: '2021-02-02T07:08:33.785Z',
      updated_at: '2021-02-02T07:08:33.785Z',
      house_id: 2,
      user_id: 12,
    },
  ],
};

const testStore = createStore(
  reducer,
  data,
);

export default testStore;
