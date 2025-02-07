import React from 'react';
import { Check, ChevronDown, CircleAlert } from 'lucide-react';

const Topheader = () => {
  return (
    <div className="w-full bg-[#272343] flex  items-center justify-between px-4 py-2">
      
      <div className="flex items-center text-[#FFFFFF] gap-2 lg:ml-20">
        <Check />
        <p className="text-sm lg:text-base">Free shipping on all orders over $50</p>
      </div>

    
      <div className="flex items-center text-[#FFFFFF] gap-4 mt-2 lg:mt-0">
        <p className="flex items-center gap-2 text-sm lg:text-base">
          English <ChevronDown />
        </p>
        <p className="flex items-center gap-2 text-sm lg:text-base">
          Faqs <CircleAlert />
        </p>
        <p className="text-sm lg:text-base">Need Help</p>
      </div>
    </div>
  );
};

export default Topheader;
