import React,{lazy, Suspense, useContext, useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import UserContext from "./components/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./components/utils/appStore";
import Cart from "./components/Cart";

const About=lazy(()=>import("./components/About"))


const AppLayout = () => {
  const[userName, setUserName]=useState()
useEffect(()=>{
const name ='Swapna Sikdar'
setUserName(name)
}, [])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedIn: userName, setUserName}}>
    <div>
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};





const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element:(<Suspense fallback="page is loading.."><About /></Suspense>) ,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurents/:resId",
        element:<RestaurentMenu/>
      },
    ],
    errorElement: <Error />,
  },
  
]);

const root =createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

