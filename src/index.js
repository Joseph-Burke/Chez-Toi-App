import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./components/App";

store.then(fulfilledStore => {
  ReactDOM.render(
    <Provider store={fulfilledStore}>
      <React.StrictMode>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>,
    document.getElementById("root")
  );
});
