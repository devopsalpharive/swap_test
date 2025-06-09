import { useEffect, useState } from "react";
import AssetSection from "./AssetSection";
import BannerSection from "./BannerSection";
import CryptoMarket from "./CryptoMarket";
import EarnStakeSection from "./EarnStakeSection";
import P2pTrading from "./P2pTrading";
import WhyChooseUs from "./WhyChooseUs";
import CryptoWalletFeatures from "./CryptoWalletFeatures";
import alphaswapSteps from "./alphaswapSteps";
import SecureAssets from "./SecureAssets";
import CryptoTradeLanding from "./CrytoTradeLanding";
import GetStart from "./GetStart";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import FarmsAndStaking from "./FarmsAndStaking";
import HowItWorks from "./HowItWorks";
import Trusted from "./Trusted";
// import CryptoTradeLandingMob from "./CryptoTradeLandingMob";
 
const Home = () => {
 
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [bannerBg, setBannerBg] = useState("");
 
  useEffect(() => {
    const loadImage = async () => {
      const imageModule = await import(
        theme === "dark"
          ? "../../assets/images/p2pbg.png"
          : "../../assets/images/p2pLight.png"
      );
      setBannerBg(imageModule.default);
    };
    loadImage();
  }, [theme]);
  

 
  return (
    <>
        <div>
        <BannerSection />
      </div>
    <div className=" lg:pt-24 pt-6 overflow-hidden">
   <FarmsAndStaking/>
      </div>
      <div className=" lg:pt-24 pt-6">
<HowItWorks/>
      </div>
      <div
        className="lg:mt-24 mt-10 bg-[linear-gradient(93.97deg,_rgba(110,133,247,0.3)_2.89%,_rgba(255,0,170,0.3)_99.07%),_linear-gradient(0deg,_rgba(0,0,0,0.4),_rgba(0,0,0,0.4))]"
  style={{
    border: '3px solid transparent',
    borderImageSource: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 34.74%, rgba(255, 255, 255, 0) 64.53%, #FFFFFF 99.27%)',
    borderImageSlice: 1,
    borderLeft: 'none',
    borderRight: 'none',
  }}
    >
<Trusted/>
      </div>

    </>
  );
};
export default Home;
 
 