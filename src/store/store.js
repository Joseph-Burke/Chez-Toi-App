import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';
import getData from '../helpers/getData';

const generateStore = async () => {
  const initialState = await getData();
  return createStore(reducer, initialState, applyMiddleware(thunk));
};

const store = generateStore();

export default store;
