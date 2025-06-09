
import left_line from "../../../public/home/left-line.png";
import tick from "../../../public/home/tickmark.svg";
import { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { RightArrow } from "../../SVGComponents";

const AssetSection = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [bannerBg, setBannerBg] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      const imageModule = await import(
        theme === "dark"
          ? "../../../public/home/spot-trade.png"
          : "../../assets/images/spotLight.png"
      );
      setBannerBg(imageModule.default);
    };
    loadImage();
  }, [theme]);

  return (
    <div className="w-full text-black relative dark:text-white my-10 grid lg:grid-cols-2 grid-cols-1 gap-5 overflow-hidden">
      <div className="relative flex justify-center items-center">
        <img
          src={bannerBg}
          alt="spot"
          className="relative z-10 max-w-full h-auto"
        />
        <img
          src={left_line}
          alt="line"
          className="absolute top-0 left-0 z-0 w-2/3 max-w-[300px] opacity-40"
        />
      </div>

      <div className="my-auto mx-auto max-w-md text-center lg:text-left">
        <h2 className="font-[500] leading-none font-funnel lg:text-[60px] text-[30px] dark:text-white mb-3 lg:mb-4">
          Spot Trading
          {/* <span className="text-themeColor"></span> */}
        </h2>
        <div className="mt-10">
          <p className="paragraph text-[20px]">
            Experience lightning-fast trade execution with competitive fees and
            real-time market updates.
          </p>
          <ul className="mt-5 space-y-2 text-[20px] text-left inline-block">
            <li className="flex items-center gap-3">
              <img src={tick} alt="tick" />
              Lowest fees in market
            </li>
            <li className="flex items-center gap-3">
              <img src={tick} alt="tick" />
              Fast and secure transactions
            </li>
            <li className="flex items-center gap-3">
              <img src={tick} alt="tick" />
              256-bit secure encryption
            </li>
          </ul>
        </div>
        {/* <WhiteBtn
          fontSize="16px"
          className="rounded-full mt-10"
          text="Download App"
        /> */}
        <button
                    // type={type}
                    // onClick={onClick}
                    className={`relative p-[1.02px] mt-4 font-bold rounded-3xl bg-gradient-to-r from-[#DADADA] to-[#DADADA60] transition-all duration-300 ease-in-out `}
                  >
                    <span
                      className={`block w-full gap-5 flex items-center rounded-3xl h-full px-6 py-2 bg-white dark:bg-black text-[#FDB81E]  content-center text-center transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#237249] hover:to-[#35C66B] hover:text-white `}
                    >
                      Download App <RightArrow/>
                    </span>
                  </button>
      </div>
    </div>
  );
};

export default AssetSection;
