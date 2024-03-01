import React from "react";
import ItemCards from "./ItemCards";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./utils/cartSlice";
export {clearCart} from "./utils/cartSlice"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch=useDispatch()
  const handleClear=()=>{
dispatch(clearCart())
  }
  return (
    <div  className="text-center m-4 p-4">
      <h1 className="bg-lime-900 text-white font-black text-2xl text-center p-4">CART</h1>
            <br />
      {cartItems.length !==0?'':<div className="w-6/12  py-5 px-0 bg-lime-300 m-auto mt-20 rounded-lg"><h1 className="text-2xl font-extrabold text-black m-2">YOUR CART IS EMPTY</h1><h2 className="text-lg  font-extrabold  m-2 text-gray-700">💸Order Food Now!!💸</h2><h3 className="text-lg font-extrabold  m-2 text-gray-700">🥺you look HUNGRY🥺</h3><p className="bg-lime-900 w-20 m-auto p-2 rounded-md">🍕🥗🥙</p></div>}
      
      <div className="w-6/12 m-auto">
        {cartItems && cartItems.map((item,i)=><ItemCards key={i} item={item} />)}
        <br /> {cartItems.length !==0? <button className="border-2 text-right  p-2 text-lg text-white font-semibold bg-lime-900 border-green-500 rounded-md " onClick={handleClear}>clear cart</button> : ''}  
      </div>
    </div>
  );
};

export default Cart;
