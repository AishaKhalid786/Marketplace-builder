
'use client'
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { useCart } from '../../../Context/Cartcontext';

type SanityDataForAllProducts = {
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
    title: string; 
  };
  description: string;
  inventory: number;
  tags: string[];
};

const SanityData = () => {
  const { AddToCart } = useCart();
  const [products, setProducts] = useState<SanityDataForAllProducts[]>([]);
  const [categories, setCategories] = useState<string[]>([]); 
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchData: SanityDataForAllProducts[] = await client.fetch(
          `*[_type == 'products']{
            id, 
            title, 
            price, 
            priceWithoutDiscount, 
            badge, 
            image, 
            category->{title}, 
            description, 
            inventory, 
            tags
          }`
        );
        setProducts(fetchData);

        
        const uniqueCategories = Array.from(
          new Set(fetchData.map((product) => product.category.title))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((product) =>
          selectedCategories.includes(product.category.title)
        )
      : products;

  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category) 
        : [...prev, category]
    );
  };

  return (
    <div>
      <div className="font-semibold text-[#231f3d] text-[42px] my-22 flex justify-center">
        Our Products
      </div>

      
      <div className="flex gap-4 justify-center mb-10">
        {categories.map((category) => (
          <label key={category} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="cursor-pointer"
            />
            <span className="text-sm font-medium">{category}</span>
          </label>
        ))}
      </div>

      
      <div className="grid sm:grid-cols-2 gap-12 lg:grid-cols-3 mx-13 sm:mx-5 mb-6 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="w-[315px] h-[380px] flex flex-col gap-[15px] justify-center"
          >

            <Link
              href={`/product/${product.id}`}
              className="flex flex-col gap-[12px] items-center  p-[22px] rounded-2xl"
            >
              <Image
                src={urlFor(product.image).url() || '/placeholder.svg'}
                alt={product.title}
                width={312}
                height={312}
                className="rounded-md object-cover"
              />
            </Link>

        
            <div className="w-[315px] flex justify-between h-[55px]">
              <div className="w-[256px] h-[50px] flex flex-col gap-[12px]">
                <p className="text-[15px] leading-[22.8px]">{product.title}</p>
                <p className="text-[20px] leading-[20.8px] text-[#211d36] font-bold">
                  ${product.price}
                </p>
              </div>
    
              <div className="w-10 h-10 rounded-lg bg-[#F0F2F3] flex items-center justify-center active:bg-[#028d99] active:text-[white]">
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
                <IoCartOutline />
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
