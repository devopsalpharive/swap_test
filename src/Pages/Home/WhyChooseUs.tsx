// components/WhyChooseUs.tsx
import React from "react";
import {
  Heart,
  Diamond,
  MailLetter,
  WhyChooseUsSVG,
} from "../../SVGComponents";

type Feature = {
  title: string;
  description: string;
  icon: string | any;
  badge?: string;
};
const features: Feature[] = [
  {
    title: "User-Friendly",
    description:
      "Intuitive and easy-to-navigate platform designed for all levels of traders.",
    icon: Heart, // Replace with your image path
  },
  {
    title: "High Liquidity",
    description: "Earn passive income by staking your crypto assets.",
    icon: Diamond, // Replace with your image path
  },
  {
    title: "24/7 Support",
    description:
      "Trade directly with other users, ensuring flexibility and control.",
    icon: MailLetter, // Replace with your image path
    badge: "7",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white dark:bg-[#111] text-white py-12 rounded-2xl max-w-6xl mx-auto">
      <div className="flex items-center space-x-3 absolute ml-[0px] top-[-72px] md:top-[-50px] md:ml-[-100px]">
        {/* <div className="bg-green-500 text-white font-bold px-4 py-2 rounded-full text-sm">
          WHY <br /> CHOOSE <br /> US
        </div> */}
        <WhyChooseUsSVG />
      </div>
      <div className="grid grid-cols-1 mx-[12px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 rounded-3xl shadow-[0_0_15px_1px_gray]  bg-white dark:bg-gradient-to-r from-[#494949] via-[#3C3C3C] to-[#222222]">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-0 rounded-xl text-center relative transition px-5 py-7"
          >
            <div className="relative inline-block mb-[-20px]">
              {typeof feature.icon === "string" ? (
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-20 h-20 mx-auto object-contain shadow-[0_0_15px_1px_gray]"
                />
              ) : (
                feature.icon()
              )}
            
            </div>
            <h3 className="text-[24px] mb-2 text-black dark:text-white">
              {feature.title}
            </h3>
            <p className="text-[12px] text-black dark:text-white">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
