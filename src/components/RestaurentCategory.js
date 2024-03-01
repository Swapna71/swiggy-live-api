import React, { useState } from "react";
import ItemCards from "./ItemCards";

const RestaurentCategory = ({ data, showStatus, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
    !showStatus;
  };
  return (
    <div className="shadow-lg shadow-lime-900 my-5 bg-lime-100 p-4">
      <div
        className="flex justify-between pl-5 pr-10 mb-10"
        onClick={handleClick}
      >
        <p className="font-black  text-lg text-gray-600">
          {data.title} ({data.itemCards.length})
        </p>
        <p>{showStatus ? "🔼" : "🔽"}</p>
      </div>
      {showStatus &&
        data.itemCards.map((item) => {
          return <ItemCards key={item.card.info.id} item={item.card.info} />;
        })}
      {}
     
    </div>
  );
};

export default RestaurentCategory;
