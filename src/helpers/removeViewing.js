import {
  refreshStore as refreshStoreThunk,
} from '../reducers/reducer';

import storePromise from '../store/store';

const removeViewing = async id => {
  // Send DELETE request
  await fetch(`http://localhost:3000/viewings/${id}`, {
    method: 'DELETE',
    mode: 'cors',
  });

  // Refresh Store
  const currentStore = await storePromise;
  const { dispatch } = currentStore;
  await dispatch(refreshStoreThunk());
};

export default removeViewing;
