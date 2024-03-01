import { CDN_URL } from "./utils/constant";
import React,{ useContext } from "react";
import UserContext from "./utils/UserContext";

const RestaurentCard = (props) => {
  const { resList } = props;
  console.log(resList)
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating,sla,aggregatedDiscountInfoV3 } =
    resList
    const{loggedIn}=useContext(UserContext)

  return (
    <div  data-testid='rescard' className=" flex flex-col flex-wrap p-[5px] w-[230px] h-[370px] m-[8px]  bg-lime-100 hover:cursor-pointer hover:bg-[#f0f0f0]  hover:text-black hover:w-[240px] hover:h-[390px] duration-300 hover:shadow-2xl hover:shadow-lime-900 rounded-md" >
     {aggregatedDiscountInfoV3 ? <p className="w-[210px] absolute text-white m-[5px] p-[5px] mt-[109px] text-lg font-black shadow-inner  shadow-slate-800">{aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader} </p> : ''}
      <img
        className="res-logo w-[230px] h-[150px] object-cover p-[5px]"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-semibold">{name}</h3>
      <h3 className="text-gray-400 font-semibold">{cuisines.join(", ")}</h3>
      <h3 className="text-gray-400 font-semibold">{costForTwo} </h3>
      <h3 className="text-gray-400 font-semibold">{sla.slaString}</h3>
      <h3 className="text-gray-400 font-bold">{avgRating} ⭐</h3>
      <h3 className="text-gray-400 font-semibold">{loggedIn}</h3>
    </div>
  );
};

export const promoteCard=(RestaurentCard)=>{
  return(props)=>{
    return(
      <>
     <p className=" absolute m-[15px] p-[5px] bg-black text-white rounded-md font-bold">promoted</p>
      <RestaurentCard {...props}/>
     
      </>
    )
  }
}

export default RestaurentCard;
