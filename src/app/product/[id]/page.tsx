
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import SuggestedProducts from "@/app/Components/Suggested/page";
import AddToCartButton from "@/app/Components/AddToCartButton";


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
    _id: string;
    name: string;
  };
  description: string;
  inventory: number;
  tags: string[];
};

export async function generatedstaticparams() {
    const product = await client.fetch('*[_type == "products"]{id}');
    return product.map ((product: {id: string }) => ({
        id: product.id,
    }));
}


async function getProduct(id: string): Promise<SanityData> {
  return client.fetch(
    `*[_type == "products" && id == $id][0]{
      id, 
      title, 
      price, 
      priceWithoutDiscount, 
      badge, 
      image, 
      category->{_id, name}, 
      description, 
      inventory, 
      tags
    }`,
    { id }
  );
}


async function getSuggestedProducts(
  categoryId: string,
  currentProductId: string
): Promise<SanityData[]> {
  return client.fetch(
    `*[_type == "products" && category._ref == $categoryId && id != $currentProductId][0...4]{
      id, 
      title, 
      price, 
      image, 
      category->{_id, name}
    }`,
    { categoryId, currentProductId }
  );
}



export default async function ProductPage({ params,}: { params: { id: string };}) {

  const product = await getProduct(params.id);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-10 text-center">
        Product not found 
      </div>
    );
  }

  const suggestedProducts = await getSuggestedProducts(
    product.category._id,
    product.id
  );

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10 mb-12">
    
        <div>
          <Image
            src={urlFor(product.image).url() || "/placeholder.svg"}
            alt={product.title}
            width={600}
            height={600}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        
        <div className="flex flex-col justify-between">
          <div className="w-[382px] sm:w-[545px] h-[605px] flex flex-col gap-12">
            
            <h1 className="w-[382px] sm:w-[505px] h-[135px] text-[#221e3a] text-[63px] leading-[65px] font-bold">
              {product.title}
            </h1>

            
            <div className="w-[145px] h-[48px] rounded-[100px] bg-[#02808c] text-[25px] leading-[25px] text-white p-5 text-center">
              ${product.price} USD
            </div>

    
            <div className="w-[383px] sm:w-[545px] h-[1px] border-[#D9D9D9] border-[1px]" />

            
            <p className="w-[383px] sm:w-[545px] h-[105px] text-[#201c37] opacity-60 text-[25px] leading-[35px] mb-4">
              {product.description}
            </p>

            
           
             
              <AddToCartButton
              product={{
                id: product.id,
                title: product.title,
                price: product.price,
                image: urlFor(product.image).url() || "/placeholder.svg",
              }}
              
            />
            
          </div>
        </div>
      </div>

    
      <SuggestedProducts products={suggestedProducts} />
    </div>
  );
}