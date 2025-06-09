import React from "react";
import img from "../../assets/images/p2pRight.png"
import { RightArrow } from "../../SVGComponents";
import { useNavigate } from "react-router-dom";

const P2PTradingCard: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div
      className="relative sm:pt-14 pb-10 px-4 xs:px-xs-px sm:px-sm-px md:px-md-px md-lg:px-md-lg-px lg:px-lg-px xl:px-[150px] 2xl:px-[250px] 3xl:px-[350px] 4xl:px-[550px] 5xl:px-[800px] 6xl:px-[950px] 7xl:px-[1000px] 8xl:px-[1250px] 9xl:px-[1400px] 10xl:px-[1600px] 11xl:px-[2100px] 12xl:px-[2400px]
  before:absolute before:top-[150px] before:left-[-15%] xl:before:w-[300px] 2xl:before:w-[400px] 3xl:before:w-[400px] xl:before:h-[500px] 2xl:before:h-[500px] xl:before:h-[500px]  before:-translate-y-1/2 before:rounded-full"
    >
      <div className="w- bg-white/30 backdrop-blur-md  dark:bg-black/60 dark:backdrop-blur-md z-50 rounded-3xl p-10 text-white flex flex-col lg:flex-row items-center justify-between shadow-lg ">
        {/* Left content */}
        <div className="w-full md:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-[50px] text-black dark:text-white lg:text-5xl font-bold mb-6">
            P2P Trading
          </h2>
          <p className="text-black dark:text-white mb-6">
            Enjoy flexible, peer-to-peer transactions with complete control over
            your deals.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              // type={type}
              onClick={() => { navigate("/p2p"); window.scrollTo(0, 0); }}
              className={`relative  p-[1.02px] mt-4 font-bold rounded-3xl bg-gradient-to-r from-[#DADADA] to-[#DADADA60] transition-all duration-300 ease-in-out `}
            >
              <span
                className={`w-full gap-5 flex items-center rounded-3xl h-full px-6 py-2 bg-white dark:bg-black text-[#FDB81E]  content-center text-center transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#237249] hover:to-[#35C66B] hover:text-white `}
              >
                Start Deal <RightArrow />
              </span>
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2">
          <img src={img} alt="P2P trading" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default P2PTradingCard;
