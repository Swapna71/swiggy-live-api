import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurentMenu from "../RestaurentMenu";
import { act } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockRestaurentMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should return restaurantMenu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurentMenu /> <Header /> <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accrdionHeader = screen.getByText("100 Ml Ice Creams (16)");
  fireEvent.click(accrdionHeader);
  expect(screen.getAllByTestId("foodItem").length).toBe(16);
  const addbtns=screen.getAllByRole("button", {name:"Add +"})
  fireEvent.click(addbtns[0]);
  expect(screen.getByText("Cart (1 item)")).toBeInTheDocument();
  fireEvent.click(addbtns[1]);
  expect(screen.getByText("Cart (2 item)")).toBeInTheDocument()
  expect(screen.getAllByTestId("foodItem").length).toBe(18);
  fireEvent.click(screen.getByRole("button",{name:"clear cart"}))
  expect(screen.getAllByTestId("foodItem").length).toBe(16);
expect(screen.getByText("YOUR CART IS EMPTY")).toBeInTheDocument();
});
