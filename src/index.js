import "./styles/index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./components/App";

store.then(fulfilledStore => {
  ReactDOM.render(
    <Provider store={fulfilledStore}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById("root")
  );
});
