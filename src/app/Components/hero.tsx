import React from 'react'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='bg-[#F0F2F3]'>
        <div className='container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center'>
            <div className='text-center lg:text-left lg:w-1/2'>
                <h5 className='text-[14px] font-normal leading-[14px] text-[#272343]'>
                    Welcome to chairy
                </h5>
                <h1 className='text-[40px] sm:text-[50px] md:text-[60px] font-bold leading-tight text-[#272343]'>
                    Best Furniture Collection for your interior.
                </h1>
                <a 
                    href="#" 
                    className='inline-block bg-[#029FAE] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#029FAE] transition mt-6'
                >
                    Shop Now <MoveRight className="inline ml-2" />
                </a>
            </div>
            <div className='lg:w-1/2 mt-8 lg:mt-0'>
                <Image 
                    src="/Picture.png"
                    alt=""
                    width={500}
                    height={500}
                    layout="intrinsic"
                    className="max-w-full h-auto"
                />
            </div>
        </div>

        <div className='border-2 bg-white p-6 shadow-md rounded-lg'>
            <div className='flex flex-row justify-around items-center space-x-6 '>
                <div className='w-[1321px] h-[139px] flex items-center justify-between '>
        <Image 
        src="/Logo.png"
        alt='Zapier'
        width={85}
        height={85}
        />

        <Image 
        src="/Logo (1).png"
        alt='Pipedrive'
        width={107}
        height={109}
        />

        <Image 
        src="/Logo (2).png"
        alt='Cib'
        width={135}
        height={139}
        />

        <Image 
        src="/Logo (3).png"
        alt='Z'
        width={63}
        height={65}
        />

        <Image 
        src="/Logo (4).png"
        alt='Toast'
        width={96}
        height={101} 
        />

        <Image 
        src="/Logo (5).png"
        alt='Panda'
        width={113}
        height={115}        
        />

<Image 
        src="/Logo (6).png"
        alt='Moz'
        width={84}
        height={87}        
        />
        </div>
        </div>
        </div>
    </section>
  )
}
export default Hero