import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render the header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("should render the cartItems", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems=screen.getByText("Cart (0 item)");
  expect(cartItems).toBeInTheDocument();
});

it("should render the cartItems using REJEX", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems=screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
  });

  it('should return the loginb button with logout text',()=>{
    render(
<BrowserRouter>
<Provider store={appStore}>
    <Header/>
</Provider>
</BrowserRouter>
    );
    const loginBtn=screen.getByRole('button',{name: 'Login'});
fireEvent.click(loginBtn);
const logoutBtn=screen.getByRole('button',{name: 'Logout'});
expect(logoutBtn).toBeInTheDocument()
  })
