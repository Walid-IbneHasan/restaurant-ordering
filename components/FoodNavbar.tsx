import Image from "next/image";

const NavbarFoodImages = [
  {
    src: "/NavbarFoods/NavbarBurger.webp",
    name: "Burger",
  },
  {
    src: "/NavbarFoods/NavbarPizza.png",
    name: "Pizza",
  },
  {
    src: "/NavbarFoods/NavbarPasta.webp",
    name: "Pasta",
  },
  {
    src: "/NavbarFoods/NavbarCoffee.webp",
    name: "Coffee",
  },

  {
    src: "/NavbarFoods/NavbarChicken.webp",
    name: "Chicken",
  },
];
const FoodNavbar = () => {
  return (
    <div className="w-full  bg-[#00A149] py-8">
      <div className="flex gap-16 flex-wrap items-center justify-center">
        {NavbarFoodImages.map((item, index) => (
          <div
            key={index}
            className="hover:text-primary flex flex-col  items-center justify-between min-h-max"
          >
            <div className="w-full mb-4 ">
              <Image
                alt={item.name}
                className=""
                height={100}
                objectFit="cover"
                src={item.src}
                width={100}
              />
            </div>
            <p className="text-white text-xl">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodNavbar;
