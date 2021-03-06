import {
  refreshStore as refreshStoreThunk,
} from '../reducers/reducer';

import storePromise from '../store/store';

const logIn = async email => {
  // Dispatch a data refresh to the store.
  const currentStore = await storePromise;
  const { dispatch } = currentStore;
  await dispatch(refreshStoreThunk());

  // Get users from the new store.
  const newStore = await storePromise;
  const { users } = newStore.getState();

  // Find the user with the matching e-mail address.
  const match = users.find(user => user.email === email);
  if (match) {
    localStorage.setItem('loggedInUserId', JSON.stringify(match.id));
    window.location.href = window.location.origin;
  }
};

export default logIn;
