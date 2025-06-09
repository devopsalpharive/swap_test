import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GradientButton from "../../UIComponents/GradientButton";
import { RootState } from "../../redux/store";
import BannerRight from "../../assets/images/banner-right.png";
import BannerAnime from "./BannerAnime";


// Dynamic image imports
const BannerSection = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [bannerBg, setBannerBg] = useState("");
console.log("theme", theme)
  useEffect(() => {
    const loadImage = async () => {
      const imageModule = await import(
        theme === "dark"
          ? "../../assets/images/banner-bg.png"
          : "../../assets/images/bannerbgLight.png"
      );
      setBannerBg(imageModule.default);
    };
    loadImage();
  }, [theme]);

  return (
    <div className="md:pb-[30px] pb-[20px] pt-1 px-4 overflow-hidden"
    style={{
      backgroundImage: `url(${bannerBg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",

    }}
    >
      <div
        className="w-full pt-20 text-black dark:text-white flex flex-col sm:flex-row items-center h-full  font-funnel relative container"
      >
        <div className="w-full lg:w-3/6 items-center space-y-7 font-funnel">
      
          <div className="lg:text-[44px] text-[30px] leading-tight font-[700]">
          The Fastest Way to Swap Your Crypto
          </div>
          <h1 className="lg:text-[44px] text-[30px] leading-[1.2] font-[700] !mt-0">
          Welcome to <span className="text-transparent bg-clip-text bg-banner-gradient"> ALPHA SWAP</span>
          </h1>
          <div className="text-[18px]">
          Trade any token with lightning speed, zero limits, and full control. ALPHA SWAP is your gateway to effortless, decentralized 
          swaps – fast, secure, and permissionless.
          </div>
          <div className="flex justify-center sm:justify-start gap-3 flex-wrap">
   
            <GradientButton
              text="Learn More"
              onClick={() => alert("Button Clicked")}
              paddingX="px-[10px]"
              paddingY="py-[10px]"
              width="w-[150px]"
              fontSize="text-[18px]"
              fontWeight="font-medium"
              className="hover:scale-110 rounded-md transition-transform duration-300 ease-out will-change-transform transform-gpu"
            />
          </div>
        </div>
        <div className="relative mt-10 md:mt-0">
          {/* <BannerRound/> */}
        <div className="lg:flex w-full h-full justify-center items-center text-center mx-auto p-2 lg:p-12">
        <img src={BannerRight} alt="alpha swap"  className="relative z-10 w-full max-w-full"/>
        <div className="absolute -top-[40px] left-0 -z-[-1]"> 
<BannerAnime/>

</div>
        </div>

        </div>
       
      </div>
    </div>
  );
};

export default BannerSection;
