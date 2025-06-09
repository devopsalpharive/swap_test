import P2PTradingCard from "./P2pTradingCard"
import { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const P2pTrading=()=>{
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
     const topGradient =
       theme === "dark"
         ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent)"
         : "linear-gradient(to bottom, rgba(255, 255, 255, 1), transparent)";

     const bottomGradient =
       theme === "dark"
         ? "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)"
         : "linear-gradient(to top, rgba(255, 255, 255, 1), transparent)";
    return (
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${bannerBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        {/* Top gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100px", // adjust height as needed
            background: topGradient,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Bottom gradient overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100px", // adjust height as needed
            background: bottomGradient,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Actual content */}
        <div style={{ position: "relative", zIndex: 2, padding: "100px 0px" }}>
          <P2PTradingCard />
        </div>
      </div>
    );
}
export default P2pTrading