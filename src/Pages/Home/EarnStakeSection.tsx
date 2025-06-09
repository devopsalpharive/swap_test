import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import right_line from "../../../public/home/right-line.png";
import { RootState } from "../../redux/store";
import { RightArrow } from "../../SVGComponents";

const EarnStakeSection = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [bannerBg, setBannerBg] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      const imageModule = await import(
        theme === "dark"
          ? "../../../public/home/stake.png"
          : "../../assets/images/earnLight.png"
      );
      setBannerBg(imageModule.default);
    };
    loadImage();
  }, [theme]);


  return (
    <>
      <div className="w-full mt-10 text-black relative dark:text-white grid lg:grid-cols-2 grid-cols-1 gap-5 overflow-hidden">
        <div className="my-auto mx-auto max-w-md text-center lg:text-left">
          <h2 className="font-[500] leading-none font-funnel lg:text-[60px] text-[30px] dark:text-white mb-3 lg:mb-4">
            Earn & Stake
            {/* <span className="text-themeColor">.</span> */}
          </h2>
          <div className="mt-10">
            <div className="paragraph text-[20px]">
              Put your crypto to work and earn passive income with attractive
              staking rewards.
            </div>
          </div>
          {/* <WhiteBtn
            fontSize="16px"
            className="rounded-full mt-10"
            text="Earn Now"
          /> */}
          <button
            // type={type}
            // onClick={onClick}
            className={`relative p-[1.02px] mt-4 font-bold rounded-3xl bg-gradient-to-r from-[#DADADA] to-[#DADADA60] transition-all duration-300 ease-in-out `}
          >
            <span
              className={`block w-full gap-5 flex items-center rounded-3xl h-full px-6 py-2 bg-white dark:bg-black text-[#FDB81E]  content-center text-center transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#237249] hover:to-[#35C66B] hover:text-white `}
            >
              Earn Now <RightArrow/>
            </span>
          </button>
        </div>

        <div className="relative flex justify-center items-center">
          <img
            src={bannerBg}
            alt="stake"
            className="relative z-10 max-w-full h-auto"
          />
          <img
            src={right_line}
            alt="line"
            className="absolute top-0 right-0 z-0 w-2/3 max-w-[300px] opacity-40"
          />
        </div>
      </div>
    </>
  );
};

export default EarnStakeSection;
