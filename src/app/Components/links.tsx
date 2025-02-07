import React from 'react';
import Link from 'next/link';

const Links = () => {
  return (
    <div className='w-full bg-[#E1E3E5] border-b-2 p-4'>
    
      <div className='max-w-7xl flex mx-auto gap-4 '>
  
        <div className='flex gap-4 w-full '>
          <Link href={"#"} className='text-sm font-normal text-[#007580] hover:text-teal-500'>
            Home
          </Link>

        <Link href="/Single-product" className='text-sm font-normal hover:text-teal-500'>
            Shop
          </Link>

          <li><Link href="/Products-page" className='text -sm font-normal hover:text-teal-500'>
            Products
          </Link></li>

          <Link href="/" className='text-sm font-normal hover:text-teal-500'>
            Pages
          </Link>

          <Link href="/About-us" className='text-sm font-normal hover:text-teal-500'>
            About
          </Link>
        </div>

      <div className='flex items-end justify-end w-full'>
        <p className='text-sm font-normal text-gray-600'>Contact: (808) 555-0111</p>
        </div>
     
     
      </div>
    </div>
  );
  };

export default Links;
