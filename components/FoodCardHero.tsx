import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

const burgerCard = [
  {
    header: "American",
    title: "Burger",
    description: "One Phone Calls Away",
    button: "Hot & Spicy",
  },
  {
    header: "Good ",
    title: "Food",
    description: "For Online orders on wednesday",
    button: "Order Now",
  },
  {
    header: "American",
    title: "Hot Dog",
    description: "Double Sauce",
    button: "Order Now",
  },
];
const FoodCardHero = () => {
  return (
    <div className="lg:w-2/3 mx-4 lg:mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 place-items-start">
      <div className="w-full relative ">
        <Image
          isZoomed
          alt="burger"
          className="relative"
          src="/FoodCardHero/Burger.jpg"
        />
        <div className="ml-4 flex flex-col gap-2 absolute top-4  z-20">
          <h3 className="text-white text-xl">{burgerCard[0].header}</h3>
          <h1 className="text-primary text-2xl">{burgerCard[0].title}</h1>
          <p className="text-white text-xl">{burgerCard[0].description}</p>
          <Button className="text-xl text-black max-w-fit" color="primary">
            {burgerCard[0].button}
          </Button>
        </div>
      </div>
      <div className="flex relative  max-w-full">
        <Image isZoomed alt="chicken" src="/FoodCardHero/Burger.jpg" />
        <div className="ml-4 flex flex-col gap-2 absolute top-4  z-20">
          <h3 className="text-white text-xl">{burgerCard[1].header}</h3>
          <h1 className="text-primary text-2xl">{burgerCard[1].title}</h1>
          <p className="text-white text-xl text-wrap w-2/3">
            {burgerCard[1].description}
          </p>
          <Button className="text-xl max-w-fit text-black" color="primary">
            {burgerCard[1].button}
          </Button>
        </div>
      </div>
      <div className="w-full relative">
        <Image isZoomed alt="hotdog" src="/FoodCardHero/Burger.jpg" />
        <div className="ml-4 flex flex-col gap-2 absolute top-4  z-20">
          <h3 className="text-white text-xl">{burgerCard[2].header}</h3>
          <h1 className="text-primary text-2xl">{burgerCard[2].title}</h1>
          <p className="text-white text-xl">{burgerCard[2].description}</p>
          <Button className="text-xl max-w-fit text-black" color="primary">
            {burgerCard[2].button}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCardHero;
