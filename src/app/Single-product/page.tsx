import React from 'react'

import { LuShoppingCart } from "react-icons/lu";
import Image from 'next/image';



const Shop = () => {
    const products = [
        { id: 1, name: "Library Stool Chair", price: "$99", image: "/Image 7.png" },
        { id: 2, name: "Library Stool Chair", price: "$99", oldPrice: "$30", image: "/Image 8.png" },
        { id: 3, name: "Library Stool Chair", price: "$99", image: "/Image (10).png" },
        { id: 4, name: "Library Stool Chair", price: "$99", image: "/Image (5).png" },
        { id: 4, name: "Library Stool Chair", price: "$99", image: "/Image (8).png" },
      ];
    
  return (
    <div>

      <div className='py-10 px-5 '>
        <div className='grid md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto items-center gap-10'>
        <div className='bg-white p-5 rounded shadow-md'>
            <Image src="/Image (4).png" alt="Library Stool Chair" width={100} height={100}/>
        </div>
        <div>
            <h1 className='font-bold text-[60px] text-[#272343] mb-2'>Library Stool Chair</h1>
            <p className='font-semibold text-[20px] text-[#FFFFFF] bg-[#029FAE]  py-3 px-6 w-[144px] h-[44px]  rounded'>$20.00 USD</p>
            <p className='mb-6 text-[#272343] font-normal text-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            
            <button className='bg-[#029FAE] text-[#FFFFFF] py-3 px-6 rounded hover:bg-[#038a97] focus:outline-none'><LuShoppingCart/> Add To Cart</button>
        </div>
        </div>
      </div>
      <div className="px-6 py-8">
        <h2 className='text-[28px] font-bold text-[#000000] '>FEATURED PRODUCTS</h2>
        <button className='underline font-bold text-[#000000] text-[18px]'>View All</button>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="relative">
        
                <Image
                  src={product.image}
                  alt={product.name}
                 width={270} height={270}
                />
              </div>
              <div className="mt-4 ">
                <h3 className="text-[16px] font-normal">{product.name}</h3>
                <div className="flex space-x-2 mt-1">
                  <span className="text-[18px] text-[#272343]">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-[#9A9CAA] line-through">{product.oldPrice}</span>
                  )}
                </div>
                <div className="flex justify-end">
                <button className="mt-4 w-[44px] h-[px] rounded bg-[#F0F2F3] py-2">
                
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

       </div>
      
    
  )
}

export default Shop