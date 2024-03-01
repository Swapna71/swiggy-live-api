import React ,{ useEffect, useState } from "react";
import { SWIGGI_MENU_API } from "./constant";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGI_MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
    console.log(json.data);
  };
  return resInfo;
};

export default useRestaurentMenu;
