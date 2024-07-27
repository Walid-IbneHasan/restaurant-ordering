import { Button } from "@nextui-org/button";
import Image from "next/image";

import FoodCardHero from "./FoodCardHero";
import FeaturesSection from "./FeatureSection";
import PopularDishes from "./PopularDishes";

const Hero = () => {
  return (
    <section>
      <div className="relative w-full h-[900px]">
        <Image
          alt="Hero Background Image"
          layout="fill"
          objectFit="cover"
          src="/HomeBackground/HomeBackground.jpg"
        />
        <div className=" z-10 absolute flex flex-col gap-4 top-1/2 lg:top-0 lg:bottom-1/2  left-1/2  lg:left-3/4 transform -translate-x-1/2 lg:translate-y-1/2 lg:-translate-x-0">
          <h3 className="text-white text-xl lg:text-5xl">Buy one get one</h3>
          <h1 className="text-primary text-3xl lg:text-7xl font-bold">
            PIZZA TIME
          </h1>
          <p className="text-white text-xl lg:text-3xl">
            Extra-virgin olive oil, garlic, mozzarella cheese, onions,
            mushrooms, green olives, black olives, fresh tomatoes.
          </p>
          <Button className="max-w-fit  text-black text-3xl" color="primary">
            Order Now
          </Button>
        </div>
        <div className="hidden lg:block lg:absolute left-1 bottom-1/2">
          <Image
            alt="Mint Background"
            height={600}
            src="/HomeBackground/MintBackground.png"
            width={600}
          />
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-1 left-1/2 transform -translate-x-1/2 ">
        <Image
          alt="Pizza"
          height={900}
          src="/HomeBackground/Pizza Background.png"
          width={2000}
        />
      </div>

      <div className=" lg:transform lg:-translate-y-1/2 mt-10">
        <FoodCardHero />
      </div>
      <div className="flex  justify-center pb-10">
        <FeaturesSection />
      </div>
      <div className="flex justify-center pb-10">
        <PopularDishes />
      </div>
    </section>
  );
};

export default Hero;
