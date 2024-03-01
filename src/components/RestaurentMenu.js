import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "./utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

function RestaurentMenu() {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo)
  const {
   name,
    avgRating,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
    sla,
    city,
  } = resInfo?.cards[0]?.card?.card?.info;

  const category =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  console.log(resInfo?.cards[0]?.card?.card?.info);
  return (
    <div className="w-6/12 text-center m-auto bg">
      <div className="flex justify-between m-auto mt-10 mb-3">
        <div className="">
          <h1 className="font-bold text-lg">{name}</h1>
          <h3 className="text-xs text-gray-500 text-left">
            {cuisines.join(", ")}
          </h3>
          <h3 className="text-xs text-gray-500 text-left">
            {city}, {sla.lastMileTravelString}🔻
          </h3>
        </div>
        <div className="border rounded flex-col justify-between">
          <h2 className="p-1 text-green-500	font-extrabold bg-lime-100">⭐{avgRating}⭐</h2>
  

          <h6 className="p-1 font-bold bg-lime-100">{totalRatingsString}</h6>
        </div>
      </div>
      <hr />
      <h6 className="p-1 font-bold">{sla.slaString}</h6>
      <h3 className="font-bold flex flex-start">💵{costForTwoMessage}</h3 >
     

      <div children="">
        <div className="mt-5 flex justify-between gap-2 mb-10">
          {resInfo.cards[1].card.card.gridElements.infoWithStyle.offers.map(
            (offer) => {
              return (
                <div
                  className="border-2 border-gray-200	flex-col justify-between rounded-md bg-lime-100"
                  key={offer.info.offerIds}
                >
                  <p className="text-sm font-bold text-gray-500">
                    💥{offer.info.header}
                  </p>
                  <p className="text-xs font-semibold text-gray-400">
                    {offer.info.couponCode} | {offer.info.description}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
      <hr />
      <div className=" mt-16">
      {category.map((category, index) => {
        return (
          <RestaurentCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showStatus={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
      </div>
    </div>
  );
}

export default RestaurentMenu;
