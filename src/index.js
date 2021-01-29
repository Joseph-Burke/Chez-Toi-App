import "./styles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import storePromise from "./store/store";
import App from "./components/App";

storePromise.then(store => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById("root")
  );
});
