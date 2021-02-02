import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from "react-router-dom";
import ViewingsList from "../components/ViewingsList";
import store from "../store/test-store";

test("the ViewingsList component renders correctly", () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/sign_up"]} initialIndex={1}>
        <Route path="/sign_up">
          <ViewingsList />
        </Route>
      </MemoryRouter>
    </Provider>
  );

  const [title, viewingsList, cardGroup] = [
    screen.getByText("Your Viewings"),
    screen.getByTestId("viewings-list"),
    screen.getByTestId("card-group")
  ];

  [title, viewingsList, cardGroup].forEach(
    item => {
      expect(item).toBeInTheDocument();
    }
  );
});
