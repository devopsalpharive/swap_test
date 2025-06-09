import React from "react";
import AvailableBalance from "../components/AvailableBalance";
import blog from "../assets/images/blog-card.png";
import GradientButton from "../UIComponents/GradientButton";
const LiveEvents = () => {
  const cardData = [
    {
      title:
        "Trump denies tariffs report, ISM services data ahead - what’s moving markets",
      img: blog,
      time: "1. Futures edge lower",
      description:
        "U.S. futures bounced below the flat line on Tuesday with the S&P 500 and Nasdaq Composite both down more than 3% since the high in the previous session.",
      buttonText: "From 5000$",
    },
    {
      title: "Hedge Fund VIP Investors",
      img: blog,
      description:
        "Welcome, investors, to an unparalleled opportunity in hedge fund investments. Get all the insights, market analysis, and expertise in one place.",
      buttonText: "100,000$ Investment",
    },
    {
      title: "US election risks and the impact of Trump’s re-election",
      img: blog,
      description:
        "Equity markets are already expecting an increase in volatility due to U.S. presidential elections. This makes it crucial to stay updated on economic indicators.",
      buttonText: "2000$ Minimum",
    },
    {
      title: "ETH Merge",
      img: blog,
      description:
        "The Ethereum Merge Series is Ethereum’s transition from proof-of-work consensus to proof-of-stake. This major update aims to improve efficiency and scalability.",
      buttonText: "Deposit 1K Today",
    },
  ];
  return (
    <div>
      <AvailableBalance />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:text-white p-6 rounded-2xl shadow-md  hover:bg-cardHover transition duration-300 border border-gray-300 dark:bg-black 
            duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_8px_20px_0_#00cdf94d] "
          >
            <h3 className="text-md font-semibold text-gray-800 min-h-[52px] dark:text-white">
              {card.title}
            </h3>
            <div className="relative w-full h-40 bg-gray-300 rounded-lg mb-4 mt-5 dark:text-white">
              <img
                src={card.img}
                alt="Card"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <p
              className=" font-semibold text-sm mt-1 pb-3 pt-3  min-h-[40px] dark:text-white;"
            >
              {card.time}
            </p>
            <p className="text-gray-600 mt-2 dark:text-white">{card.description}</p>

                 <div className="mt-5 text-center">
                 <GradientButton text={card.buttonText} className="p-2"/>
                 </div>
            
            {/* <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              {card.buttonText}
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveEvents;
