'use client';

import { useCart } from "../../../Context/Cartcontext";
import { IoCartOutline } from 'react-icons/io5';

interface AddToCartButtonProps {
    product : {
        id: string,
        title: string,
        price: number,
        image: string,
    };
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
    const { AddToCart } = useCart ();

    return (
        <div className="w-[210px] h-[60px] bg-[#01919e] rounded-lg py-[15px] px-[25px] text-white flex gap-4 items-center transform duration-500  active:bg-[white] active:text-[#51bdc7f8]">
            <div className="w-[29px] h-[29px]">
            <IoCartOutline/>
            </div>
            <button
            onClick={() => 
            AddToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: 1,
                image: product.image,
            })
            }
            className="text-[22px] leading-[20px]"
            >Add To Cart
            </button>
        </div>
    );
};

export default AddToCartButton;