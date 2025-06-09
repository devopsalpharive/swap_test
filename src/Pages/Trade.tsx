import { useState } from "react";
import TradeCarousel from "../components/TradeCarousel";
import BasicTrade from "./BasicTrade";
import ProTrade from "./ProTrade";
import TradeBtn from "../UIComponents/TradeBtn";


const Trade = () => {
    const [tradeMode, setTradeMode] = useState("basic"); // 'basic' or 'pro'


    return (
        <div className="pt-12 space-y-5  xl:px-[50px] 2xl:px-[100px] 3xl:px-[350px] 4xl:px-[550px] 5xl:px-[800px] 6xl:px-[950px] 7xl:px-[1000px] 8xl:px-[1250px] 9xl:px-[1400px] 10xl:px-[1600px] 11xl:px-[2100px] 12xl:px-[3000px]">
            <div className="flex flex-col lg:flex-row w-full justify-between gap-6 lg:gap-0">
                <div className="w-full px-10 sm:px-20 md:px-10 lg:px-7 lg:mx-1 lg:w-2/4">
                    <TradeCarousel />
                </div>
                <div className="w-fulllg:w-2/4 flex justify-between lg:justify-end items-center gap-4 px-2 xs:px-2 sm:px-12 xTTs:px-12 md:px-2 lg:px-3">
                    {/* Basic Mode Button */}
                    <TradeBtn
                        text="BASICS"
                        fontSize="text-[10px] md:text-[12px]"
                        onClick={() => setTradeMode("basic")}
                        className={`hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-lg ${tradeMode === "basic"
                            ? "border  w-[150px] bg-[#D3C5E5] text-white"
                            : "dark:bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-gradient-to-r from-[#a9aeae] to-[#d7deeb] border-2 border-gradient-to-r from-[#01D3FF] to-[#2954A3] w-[150px] "
                            }`}
                    />

                    {/* Pro Trading Button */}
                    <TradeBtn
                        text="PRO TRADING"
                        fontSize="text-[10px] md:text-[12px]"
                        onClick={() => setTradeMode("pro")}
                        className={`hover:shadow-lg hover:-translate-y-2 transition-all duration-300 rounded-lg ${tradeMode === "pro"
                            ? "border border-gray-500 w-[150px] bg-[#D3C5E5]  text-white"
                            : "dark:bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-gradient-to-r from-[#a9aeae] to-[#d7deeb] border-2 border-gradient-to-r from-[#01D3FF] to-[#2954A3] w-[150px] "
                            }`}
                    />
                </div>
            </div>
            <div>
                {tradeMode === "basic" ? <BasicTrade /> : <ProTrade />}
            </div>
        </div>
    );
};

export default Trade;
