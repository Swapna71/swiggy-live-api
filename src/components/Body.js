import RestaurentCard, { promoteCard } from "./RestaurentCard";
import React, { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGI_API } from "./utils/constant";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";

export const Body = () => {
  const [listOfResturents, setListOfResturents] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurentPromoteCardCard = promoteCard(RestaurentCard);
  const { userName, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGI_API);
    const json = await data.json();
    setListOfResturents(
      json.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );
    setFilteredResturant(
      json.data.cards[1].card.card.gridElements.infoWithStyle
      .restaurants
    );
    console.log(listOfResturents);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Please Check Your Network! <br>Connection is lost 😰</br>
      </h1>
    );

  return listOfResturents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className=" flex gap-5 p-2 cursor-pointer">
        <div className="rounded-md p-2 bg-lime-800 text-white font-black	mt-4 ml-6">
          <input
          data-testid="searchInput"
            className="z-40 text-black pl-2 font-semibold"
            type="text"
            id="search-id"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="pl-2"
            onClick={() => {
              const searchResult = listOfResturents.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResturant(searchResult);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="rounded-lg p-2 bg-lime-800 text-white font-bold  mt-4 shadow-lg shadow-lime-900"
          onClick={() =>
            setFilteredResturant((preValue) =>
              preValue.filter((list) => list.info.avgRating > 4)
            )
          }
        >
          TOP RATED RESTURANT ⭐⭐⭐⭐
        </button>

        <div className=" rounded-md p-2 bg-lime-800 absolute text-white font-black	mt-4 right-10 ">
         <span className=" border-black p-2 bg-lime-800 -ml-2"> UserName</span> 
          <input
            type="text"
            className="z-40 text-black pl-2 font-semibold"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {filteredResturant.map((res) => {
          return (
            <Link to={"/restaurents/" + res.info.id} key={res.info.id}>
              {res.info.promoted === true ? (
                <RestaurentPromoteCardCard resList={res.info} />
              ) : (
                <RestaurentCard resList={res.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
