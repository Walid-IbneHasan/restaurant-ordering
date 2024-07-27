import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

const dishData = [
  {
    title: "Water Bottle",
    description:
      "Investing in a reusable water bottle that you can refil throughout the day.",
    price: "$10.00",
    rating: 3.5,
    image: "/NavbarFoods/NavbarPizza.png",
  },
  {
    title: "Water Bottle",
    description:
      "Investing in a reusable water bottle that you can refil throughout the day.",
    price: "$10.00",
    rating: 3.5,
    image: "/NavbarFoods/NavbarPizza.png",
  },
  {
    title: "Water Bottle",
    description:
      "Investing in a reusable water bottle that you can refil throughout the day.",
    price: "$10.00",
    rating: 3.5,
    image: "/NavbarFoods/NavbarPizza.png",
  },
  {
    title: "Water Bottle",
    description:
      "Investing in a reusable water bottle that you can refil throughout the day.",
    price: "$10.00",
    rating: 3.5,
    image: "/NavbarFoods/NavbarPizza.png",
  },
];
const PopularDishes = () => {
  return (
    <div>
      <h1 className="text-3xl  w-full lg:w-2/3  text-black pb-10">
        Popular Dishes
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mx-auto">
        {dishData.map((dish, index) => (
          <Card key={index} className="py-4 bg-white">
            <CardBody className="overflow-visible py-2 items-center">
              <Image
                isZoomed
                alt="Card background"
                className="object-cover rounded-xl"
                src={dish.image}
                width={300}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-xl uppercase font-bold text-black">
                {dish.title}
              </p>
              <small className="text-lg text-black">{dish.description}</small>
              <h4 className="text-primary text-lg">{dish.price}</h4>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularDishes;
