import React from "react";
import { FaShippingFast, FaClock, FaPizzaSlice } from "react-icons/fa";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  borderColor,
}) => {
  return (
    <div
      className={`border-2 ${borderColor} px-4 py-8 border-dashed rounded-lg flex items-center`}
    >
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="text-xl font-bold text-black ">{title}</h3>
        <p className="text-gray-800 text-lg">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-yellow-500" size={80} />,
      title: "Free shipping",
      description: "Sign up for updates and get free shipping",
      borderColor: "border-yellow-500",
    },
    {
      icon: <FaClock className="text-yellow-500" size={80} />,
      title: "30 Minutes Delivery",
      description:
        "Everything you order will be quickly delivered to your door.",
      borderColor: "border-yellow-500",
    },
    {
      icon: <FaPizzaSlice className="text-yellow-500" size={80} />,
      title: "Best Quality Guarantee",
      description: "Poco is an international chain of family restaurants.",
      borderColor: "border-yellow-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 m-4 w-full lg:w-2/3">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          borderColor={feature.borderColor}
          description={feature.description}
          icon={feature.icon}
          title={feature.title}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
