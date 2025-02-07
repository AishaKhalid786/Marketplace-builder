import React from 'react'

import { ShoppingCart } from "lucide-react";
import Image from 'next/image';

const Productspage = () => {

   
        const products = [
          { id: 1, name: "Library Stool Chair", price: "$20", image: "/Image (3).png", tag: "New", },
          { id: 2, name: "Library Stool Chair", price: "$20", oldPrice: "$30", image: "/Image (4).png", tag: "Sales" },
          { id: 3, name: "Library Stool Chair", price: "$20", image: "/Image (5).png" },
          { id: 4, name: "Library Stool Chair", price: "$20", image: "/Image (6).png" },
          { id: 5, name: "Library Stool Chair", price: "$20", image: "/Image (9).png", },
          { id: 6, name: "Library Stool Chair", price: "$20", oldPrice: "$30", image: "/card.png", },
          { id: 7, name: "Library Stool Chair", price: "$20", image: "/Image 7.png" },
          { id: 8, name: "Library Stool Chair", price: "$20", image: "/Image 8.png" },
          { id: 9, name: "Library Stool Chair", price: "$20", image: "/Image (8).png", tag: "New", },
          { id: 10, name: "Library Stool Chair", price: "$20", oldPrice: "$30", image: "/Image (4).png", tag: "Sales" },
          { id: 11, name: "Library Stool Chair", price: "$20", image: "/Image (5).png" },
          { id: 12, name: "Library Stool Chair", price: "$20", image: "/Image (10).png" },
        ];

      
  return (
    <div>
  
          <div className="px-6 py-8 ">
            <h2 className="text-2xl font-bold mb-6 text-[32px] text-[#272343]">All Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="relative">
                    {product.tag && (
                      <span
                        className={`absolute top-2 left-2 px-2 py-1 text-sm font-semibold rounded flex ${
                          product.tag === "New" ? "bg-[#01AD5A] text-[#FFFFFF]" : "bg-red-500 text-white"
                        }`}
                      >
                        {product.tag}
                      </span>
                    )}
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={312} height={312}
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
                        <ShoppingCart />
                    </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-[#1E28320D] py-10 px-5'>
          <div className='max-w-7xl mx-auto text-center'>
            <h2 className='font-medium text-[50px] mb-5'>Or subscribe to the newsletter</h2>
            
        <form className='text-center justify-between mb-10 gap-6'>
            <input 
            type="Email"
            placeholder='Email Address...'
            className='p-3 rounded-1-md border-gray-500 focus:outline-none focus:ring-2 focus ring-blue-500'
            />
            <button className=' text-gray-600 rounded-r-md hover:bg-teal-400'>SUBMIT</button>
             </form>
             
       <h2 className='font-medium text-[50px] text-center mb-5'>Follow products and discounts on Instagram</h2>

       <div className=' grid grid-cols-2 md:grid-cols-6 gap-[24px]'>
        <div className='bg-white rounded shadow'>
            <Image src="/Image (9).png" alt="Product 1" width={100} height={100}/>
        </div>
        <div className='bg-white rounded shadow'>
            <Image src="/Image (8).png" alt="Product 2"width={100} height={100}/>
        </div>
        <div className='bg-white rounded shadow'>
            <Image src="/Image (4).png" alt="Product 3" width={100} height={100}/>
        </div>
        <div className='bg-white rounded shadow'>
            <Image src="/Image (3).png" alt="Product 4"width={100} height={100}/>
        </div>
        <div className='bg-white rounded shadow'>
            <Image src="/Image (5).png" alt="Product 5"width={100} height={100}/>
        </div>
        <div className='bg-white rounded shadow'>
            <Image src="/Image (10).png" alt="Product 6"width={100} height={100}/>
        </div>
        

       </div>
          </div>

          </div>

    </div>
  )
}

export default Productspage
