import Body from "../Body";
import { render, screen,fireEvent } from "@testing-library/react";
import Mock_data from "../mocks/mockRestaurantListData.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_data);
    },
  });
});

test("should render search input to change the length of cards", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const totatResCard=screen.getAllByTestId("rescard");
  expect (totatResCard.length).toBe(16);

  const searchBtn=screen.getByRole("button",{name:"Search"});
  const searchInput=screen.getByTestId("searchInput");

fireEvent.change(searchInput,{target:{value:"burger"}});
fireEvent.click(searchBtn);
const searchRes=screen.getAllByTestId("rescard");

expect(searchRes.length).toBe(1)

});

it('should render the filtered restaurents',async()=>{
await act(async()=>{
    render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>
    )
})
const restaurants=screen.getAllByTestId("rescard");
expect(restaurants.length).toBe(16);
const filterBtn=screen.getByRole('button',{name:"TOP RATED RESTURANT ⭐⭐⭐⭐"});
fireEvent.click(filterBtn);
const filteredResturants=screen.getAllByTestId("rescard")
expect(filteredResturants.length).toBe(14)

})