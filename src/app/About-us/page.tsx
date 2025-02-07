import React from 'react'
import { MdLabelImportant } from "react-icons/md";
import Image from 'next/image';
    const About = () => {  

            const features = [
              {
        
                title: "Next day as standard",
                description: "Order before``` 3pm and get your order the next day as standard.",
              },
              {
                title: "Made by true artisans",
                description: "Handmade crafted goods made with real passion and craftsmanship.",
              },
              {
                title: "Incredible prices",
                description: "High-quality goods for less, find better value anywhere else.",
              },
              {
                title: "Recycled packaging",
                description: "We use 100% recycled to ensure our footprint is more manageable.",
              },
            ];
            
        return (

      <div >
        <div className="max-w-5xl pt-20 mx-auto gap-8 flex flex-col lg:flex-row items-center">
          
          <div className="lg:w-1/2 w-[619px] h-[478px]  bg-[#007580] text-[#FFFFFF] py-12 px-6">
            <h2 className="text-[32px] font-bold mb-4">About Us - Comforty</h2>
            <p className="text-[18px] font-normal mb-6">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
            <button className="bg-white text-blue-900 px-6 py-2 rounded shadow-lg hover:bg-teal-700">
              View collection
            </button>
          </div>

    
          <div className="lg:w-1/2 mt-8 lg:mt-0 ">
            <Image
              src="/Image (3).png"
              alt="Chair"
              width={619}
              height={478}
            />
          </div>
          </div>
    
       
        <div className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-[32px] font-semibold text-[#272343] mb-8">
          What Makes Our Brand Different
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#F9F9F9] p-6 rounded shadow-md">
                <p className='text-[#007580]'><MdLabelImportant /></p>
              <h4 className="text-[20px] font-normal text-[#007580] mb-2">{feature.title}</h4>
              <p className='text-[16px] font-normal text-[#007580]'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

      </div>
    );
        };
    
  export default About