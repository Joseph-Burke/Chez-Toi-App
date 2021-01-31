import { refreshStore as refreshStoreAction } from "../actions/actions";
import getData from "../helpers/getData";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "REFRESH_STORE":
      return action.payload;
    default:
      return state;
  }
};

export const refreshStore = () => async dispatch => {
  const data = await getData();
  dispatch(refreshStoreAction(data));
};

export default filterReducer;
