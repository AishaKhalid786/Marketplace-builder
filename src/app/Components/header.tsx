import React from 'react'

import { ShoppingCart, Sofa } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-full flex border-b-2 p-4'>
        
        <div className='max-w-7xl ml-20 mx-auto flex items-center justify-between px-4 '>
    
          <div className='bg-teal-500 text-white p-2 rounded-md'>
            <Sofa />
          </div>
          <h1 className='font-medium text-[26px] leading-[31.2px]'>
            Comforty
          </h1>
        </div>
        
    
        <div className='mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 mt-4 lg:mt-0'>
          <p className='flex items-center gap-2'>
         <ShoppingCart/>
          <Link href="/Cart" className='font-semibold font-serif hover:text-teal-500'>
          <button className='font-semibold font-serif hover:text-teal-500 rounded-3xl '> Cart </button>
          </Link>
          </p>
        </div>
    </div>
  )
}

export default Header
