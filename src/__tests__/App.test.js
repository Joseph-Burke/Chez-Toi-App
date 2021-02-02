import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from "react-router-dom";
import App from "../components/App";
import store from "../store/test-store";

test("the App component renders correctly", () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]} initialIndex={1}>
        <Route path="/">
          <App />
        </Route>
      </MemoryRouter>
    </Provider>
  );

  const app = screen.getByTestId("app");
  const navBar = screen.getByTestId("nav-bar");
  const houseBrowser = screen.getByTestId("houseBrowser");
  expect(app).toBeInTheDocument();
  expect(navBar).toBeInTheDocument();
  expect(houseBrowser).toBeInTheDocument();

  screen.getByText('LOG IN').click();
  const logIn = screen.getByTestId("logIn");
  expect(logIn).toBeInTheDocument();

  screen.getByText("SIGN UP").click();
  const signUp = screen.getByTestId("sign-up");
  expect(signUp).toBeInTheDocument();

  screen.getByText("VIEWINGS").click();
  const viewingsList = screen.getByTestId("viewings-list");
  expect(viewingsList).toBeInTheDocument();
});
