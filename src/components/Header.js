import React, { useEffect, useState,useContext } from "react";
import { LOGO_URL } from "./utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedIn}=useContext(UserContext);
  // console.log(loggedIn)
  const items=useSelector((store)=>store.cart.items)
console.log(items)
  return (
    <div className="h-[120px] flex justify-between items-center   shadow-2xl bg-lime-100 sticky top-0 z-10 shadow-lime-900">
      <div className="w-[110px] m-6">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex mr-[20px]">
          <li className="list-none p-3 text-lg font-bold">onlinestatus:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="list-none text-sm p-3.5 font-semibold bg-lime-800 text-white rounded-full mr-2 hover:text-lg hover:font-bold duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="list-none  text-sm p-3.5 font-semibold bg-lime-800 text-white rounded-full mr-2 hover:text-lg hover:font-bold duration-300">
            <Link to="/about">About Us</Link>
          </li>
          <li className="list-none text-sm p-3.5 font-semibold bg-lime-800 text-white rounded-full mr-2 hover:text-lg hover:font-bold duration-300">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="list-none text-sm p-3.5 font-semibold bg-lime-800 text-white rounded-full mr-2 hover:text-lg hover:font-bold duration-300">
          <Link to="/cart">Cart ({items.length} item)</Link>
          </li>
          <button
             className="list-none text-sm p-3 font-semibold bg-sky-800 text-white rounded-full mr-2 hover:text-lg hover:font-bold duration-300"
            onClick={() =>
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login")
            }
          >
            {btnNameReact}
          </button>
          <li className="list-none text-sm p-3.5 font-semibold bg-lime-800 text-white rounded-full mr-2 hover:text-lg hover:font-bold duration-300">{loggedIn}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
