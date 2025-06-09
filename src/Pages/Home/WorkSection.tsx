import lady from "../../../public/home/Adobe Express - file (17) 1.png";
import diamond from "../../../public/home/daiamond.png";
import bgImage from "../../../public/home/ladyCircle.png";
import GradientButton from "../../UIComponents/GradientButton";

const WorkSection = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row">
        {/* <div className="w-2/4">
          <img src={lady} alt="" width={300} height={300} />
        </div> */}
        <div className="w-full md:w-2/4 relative flex flex-col md:justify-start md:items-center">
          {/* Background Image */}
          <img
            src={bgImage}
            alt="background"
            width={320}
            height={320}
            className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 opacity-50 z-0"
          />

          {/* Foreground Image */}
          <div className="relative z-10 flex justify-center md:items-start">
            <img
              src={lady}
              alt="lady"
              width={300}
              height={300}
              className="mx-auto md:mt-0"
            />
          </div>
        </div>

        <div className="w-full md:w-5/6 space-y-5">
          <div className="text-[28px] md:text-[38px] font-medium dark:text-white">
            How <span className="text-3xl font-medium bg-gradient-to-r from-black via-black to-[#00cdf9] bg-clip-text text-transparent">
              alphaswap{" "}
            </span>
            works
          </div>
          <div className="paragraph font-SF dark:text-white">
            Stake Your Cryptocurrency:Choose a cryptocurrency that supports
            staking, acquire it, and transfer it to a compatible staking
            platform or wallet.
          </div>
          <div className="paragraph font-SF dark:text-white">
            Stake Your Cryptocurrency:Choose a cryptocurrency that supports
            staking, acquire it, and transfer it to a compatible staking
            platform or wallet.
          </div>
          <div className="paragraph font-SF dark:text-white">
            Stake Your Cryptocurrency:Choose a cryptocurrency that supports
            staking, acquire it, and transfer it to a compatible staking
            platform or wallet.
          </div>
          <div>
            <GradientButton
              text="Stake Now!"
              onClick={() => alert("Button Clicked")}
              paddingX="px-6"
              paddingY="py-[8px]"
              width="w-[200px]"
              fontSize="text-[14px]"
              fontWeight="font-medium"
              // className="shadow-[1px_3px_9px_#4fb2d1] shadow-themeGreen/80 "
              className="shadow-[1px_3px_9px_#4fb2d1] shadow-themeGreen/80
                                                              hover:shadow-[0px_0px_2px_#4fb2d1,0px_0px_5px_#4fb2d1] 
                                                              hover:scale-110 transition-transform duration-300 ease-out 
                                                              will-change-transform transform-gpu"
            />
          </div>
          <div className="w-full flex justify-end">
            <div className="w-3/4 flex justify-end">
              <img src={diamond} alt="diamond" width={200} height={200} />
            </div>
            <div className="w-1/4"></div>
          </div>
        </div>
        {/* <div className="w-1/6"></div> */}
      </div>
    </>
  );
};
export default WorkSection;
