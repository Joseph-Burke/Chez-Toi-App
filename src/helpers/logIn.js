import { connect } from "react-redux";

import storePromise from "../store/store";

const logIn = async email => {
  const { users } = await storePromise.then(store => store.getState());
  const match = users.find(user => user.email === email);
  if (match) {
    localStorage.setItem('loggedInUserId', JSON.stringify(match.id))
  } else {
    alert(
      `\"${email}\" does not match any of the users in our database! Try creating an account instead.`
    )
  }
};

export default logIn;
