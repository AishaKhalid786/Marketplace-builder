import Image from "next/image";
const ExploreStyles = () => {
    const chairs = [
      { id: 1, imageUrl: "/item-category 1.png", alt: "Orange Chair" },
      { id: 2, imageUrl: "/Image (3).png", alt: "White Chair" },
      { id: 3, imageUrl: "/Image (6).png", alt: "Wooden Chair" },
      { id: 4, imageUrl: "/card.png", alt: "Grey Chair" },
      { id: 5, imageUrl: "/Image (3).png", alt: "Duplicate White Chair" },
    ];
  
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        
          <div className="col-span-2 flex flex-col items-center">
            <div className="relative w-full">
              <Image
                src={chairs[0].imageUrl}
                alt={chairs[0].alt}
               width={648} height={648}
              />
            </div>
            <div className="absolute  left-[-52px] transform translate-y-1/2 rotate-90">
              <h2 className="text-lg font-semibold tracking-widest uppercase">
                Explore New And Popular Styles
              </h2>
            </div>
          </div>
          <div className="col-span-3 grid grid-cols-2 gap-4">
            {chairs.slice(1).map((chair) => (
              <div key={chair.id} className="relative w-full">
                <Image
                  src={chair.imageUrl}
                  alt={chair.alt}
                 width={302} height={302}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ExploreStyles;