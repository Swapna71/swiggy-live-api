import { CDN_URL } from "./utils/constant";
import { noImage } from "./utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const ItemCards = ({ item }) => {
const dispatch=useDispatch()
  const handleItems=(item)=>{
    dispatch(addItem(item))
  }
  return (
    <>
      <div data-testid="foodItem" 
      className="flex justify-between my-5 mb-10 pl-10 bg-lime-50">
        <div className="w-9/12">
          <p className="text-left">🍃</p>
          <p className="text-left text-base font-semibold">{item.name}</p>
          <p className="text-left">₹{item.price / 100 || item.defaultPrice / 100}</p>
          <p className="text-left text-xs text-gray-400">{item.description}</p>
        </div>
        <div className="w-3/12 p-4">           
          <img
            className=" w-20 h-30 rounded-md"
            src={item.imageId?CDN_URL + item.imageId: noImage}
          />   
          
       <button className="border-2 text-green-500 font-bold border-green-500  mr-16 px-2 py-1 rounded-md " onClick={()=>handleItems(item)}>Add +</button>
               
        
        </div>    
      </div>
      <hr />
    </>
  );
};

export default ItemCards;
