'use client';
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../../../Context/Cartcontext";


type SanityData = {
  id: string;
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  category: {
    _ref: string;
    _type: string;
  };
  description: string;
  inventory: number;
  tags: string[];
};

const SanityData = () => {
  const { AddToCart } = useCart();
  const [products, setProducts] = useState<SanityData[]>([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      const productTitles = [
        "Rose Luxe Armchair",
        "Citrus Edge",
        "Ivory Charm",
        "Library Stool Chair",
      ];

      try {
        
        const fetchData: SanityData[] = await client.fetch(
          `*[_type == 'products' && title in $titles]{
            id, 
            title, 
            price, 
            priceWithoutDiscount, 
            badge, 
            image, 
            category->, 
            description, 
            inventory, 
            tags
          }`,
          { titles: productTitles }
        );
        setProducts(fetchData); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-12 lg:grid-cols-3 mx-6 mb-5 xl:grid-cols-4">
        {products.map((product) => (
          
            <div  key={product.id} className="w-[310px] h-[380px] flex flex-col gap-[15px] ml-7  ">
          
              <Link
              href={`/product/${product.id}`} className="flex flex-col gap-[12px] items-center p-[20px] rounded-2xl">
              <Image
                src={urlFor(product.image).url() || "/placeholder.svg"}
                alt={product.title}
                width={310}
                height={310}
                className="rounded-md object-cover"
              />
              </Link>
              
            
              <div className="w-[310px] flex justify-between h-[50px]">
                <div className="w-[260px] h-[50px] flex flex-col gap-[12px]">
                  <p className="text-[20px] leading-[22.8px]">{product.title}</p>
                  <p className="text-[20px] leading-[10.8px] text-[#211e36] font-bold">
                    ${product.price}
                  </p>
                </div>
                
                <div className="w-10 h-10 rounded-lg bg-[#F0F2F3] flex items-center justify-center active:bg-[#027d88] active:text-[white]">
                  <div 
                  onClick={() =>
                    AddToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      quantity: 1,
                      image: urlFor(product.image).url(),
                    })
                  }
                  className="w-6 h-6 cursor-pointer "
                  >
                  <IoCartOutline/>
                  </div>
                </div>
              </div>
            </div>
           
         
        ))}
      </div>
    </div>
  );
};

export default SanityData;