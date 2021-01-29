import { createStore } from "redux";
import reducer from "../reducers/reducer";
import getData from "../helpers/getData";

const generateStore = async () => {
  const initialState = await getData();
  return createStore(reducer, initialState);
};

const store = generateStore();

export default store;
