import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from "react-router-dom";
import HouseBrowser from "../components/HouseBrowser";
import store from "../store/test-store";

test("the HouseBrowser component renders correctly", () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]} initialIndex={1}>
        <Route path="/">
          <HouseBrowser />
        </Route>
      </MemoryRouter>
    </Provider>
  );
  
  const houseBrowser = screen.getByTestId("houseBrowser");
  const carousel = screen.getByTestId("carousel");
  const title = screen.getByText("HOUSES");
  const subTitle = screen.getByText(
    "Browse through our houses available for a viewing"
  );
  [houseBrowser, carousel, title, subTitle].forEach(item => {
    expect(item).toBeInTheDocument();
  });
});
