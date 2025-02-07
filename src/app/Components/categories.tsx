import Image from "next/image";
const Categories = () => {
    const categories = [
      {
        id: 1,
        title: "Wing Chair",
        products: "3,564 Products",
        imageUrl: "/Image (8).png",
      },
      {
        id: 2,
        title: "Wooden Chair",
        products: "157 Products",
        imageUrl: "/Image (9).png",
      },
      {
        id: 3,
        title: "Desk Chair",
        products: "154 Products",
        imageUrl: "/Image (10).png", 
      },
    ];
  
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-[32px] text-[#272343] font-bold mb-8">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={category.imageUrl}
                alt={category.title}
                width={424} height={424}
              />
              <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-end  text-white ">
                <h3 className="text-lg font-semibold text-[20px]  bg-[#000000B2]">{category.title}</h3>
                <p className="text-[14px] bg-[#000000B2]">{category.products}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };  
  export default Categories;