'use client';

import { useCart } from "../../../Context/Cartcontext";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <div className="container mx-auto p-8 ">
    
      {cart.map((item) => (
        <div key={item.id} className="flex flex-col gap-4 justify-between my-7">
          <div className="flex gap-[100px] sm:gap-[200px]">
          <Image src={item.image} alt={item.title} width={100} height={100}  className=" rounded-md"/>
          <button className=" font-medium text-[white] bg-[#02929f]  w-[100px] h-[40px] rounded-lg"> Buy Now</button>
          </div>
          <p className=" font-medium text-[#2e294f]">{item.title}</p>
          <p  className=" font-medium text-[#2e294f]">${item.price}</p>
          <div className="flex gap-4 ">
            <p className=" text-gray-700">Quantity</p>
          <input
          className="w-10"
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
          />
          <div  onClick= {() => removeFromCart(item.id)}>
          <RiDeleteBin6Line/>
          </div>
          </div>
          
        </div>
       
        
      ))}
      <button className=" font-medium bg-red-800 text-[white] p-5 my-12 rounded-3xl active:bg-[white] active:text-[black]" onClick={clearCart}>Clear Cart</button>
    </div>
  );
}