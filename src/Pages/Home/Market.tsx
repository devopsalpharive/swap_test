import React, { useState } from "react";
import btc from "../../assets/images/btc.svg";
import eth from "../../assets/images/eth.svg";
import doge from "../../assets/images/doge.svg";
import bnb from "../../assets/images/bnb.svg";
import bch from "../../assets/images/bch.svg";
import sol from "../../assets/images/sol.svg";
import xrp from "../../assets/images/xrp.svg";
import ada from "../../assets/images/ada.svg";
import shib from "../../assets/images/shib.svg";



const marketDate = [
  { name: "BTC", fullName: "Bitcoin", icon: btc, price: 67040.61, change: 1.26, volume: 930.68, marketCap: "1.34T", favorite: true },
  { name: "ETH", fullName: "Ethereum", icon: eth, price: 3625.7, change: 0.87, volume: 616.48, marketCap: "436.8B", favorite: true },
  { name: "DOGE", fullName: "Dogecoin", icon: doge, price: 0.131, change: 0.98, volume: 155.23, marketCap: "18.9B", favorite: false },
  { name: "BNB", fullName: "Binance", icon: bnb, price: 0.00000775, change: 1.53, volume: 78.3, marketCap: "10.4B", favorite: false },
  { name: "BCH", fullName: "Bitcoin Cash", icon: bch, price: 11.88, change: -0.42, volume: 91.3, marketCap: "7.1B", favorite: true },
  { name: "SOL", fullName: "Solana", icon: sol, price: 5.775, change: 1.53, volume: 78.3, marketCap: "10.4B", favorite: false },
  { name: "XRP", fullName: "XRP", icon: xrp, price: 11.88, change: -0.42, volume: 91.3, marketCap: "7.1B", favorite: true },
  { name: "ADA", fullName: "Cardano", icon: ada, price: 0.3439, change: 0.53, volume: 78.3, marketCap: "10.4B", favorite: false },
  { name: "SHIB", fullName: "SHIBA INU", icon: shib, price: 0.00001775, change: 0.42, volume: 91.3, marketCap: "7.1B", favorite: true },
];

const Market: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "usdt">("all");

  const filteredData = activeTab === "usdt"
    ? marketDate.filter((item) => item.price >= 1)  
    : marketDate;

  return (
    <div className="dark:text-white rounded-lg mt-11 md:mt-auto">
      <h2 className="text-[32px] xs:text-[24px] font-funnel font-bold mb-10 dark:text-white">
        Markets Overview
      </h2>
      <div className='p-[2px] bg-gradient-primary  rounded-3xl mt-10 mb-4'>
        <div className="dark:text-white p-4 sx:!p-2 rounded-3xl dark:bg-gradient-to-r from-[#222222] via-[#3C3C3C] to-[#494949] bg-white">
          <h3 className="font-medium font-funnel text-[20px] mb-2">Top Tokens by Market Capitalization</h3>
          <p className="font-medium font-funnel text-[14px]">Get a comprehensive snapshot of all cryptocurrencies available on alphaswap. This page displays the latest prices, 24-hour trading volume, price changes, and market capitalizations for all listed assets, helping you stay informed and make data-driven trading decisions.</p>
        </div>
      </div>

      <div className="flex space-x-4 mb-6 border-b border-gray-700">
        <button
          className={`px-4 py-2 text-sm font-semibold ${
            activeTab === "all"
              ? "border-b-2 border-[#735DA5] bg-gradient-primary bg-clip-text text-transparent"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("all")}
        >
          Show All
        </button>
        <button
          className={`px-4 py-2 text-sm font-semibold ${
            activeTab === "usdt"
              ? "border-b-2  bg-gradient-primary bg-clip-text text-transparent"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => setActiveTab("usdt")}
        >
          USDT Market
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="dark:text-[#FFFFFF]">
              <th className="py-3 px-4 font-medium text-[14px] whitespace-nowrap">Name</th>
              <th className="py-3 px-4 font-medium text-[14px] whitespace-nowrap">Price</th>
              <th className="py-3 px-4 font-medium text-[14px] whitespace-nowrap">24h % Change</th>
              <th className="py-3 px-4 font-medium text-[14px] whitespace-nowrap">24h Volume</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((crypto) => (
              <tr key={crypto.name}>
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <img
                      src={crypto.icon}
                      alt={crypto.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <div className="flex flex-col leading-tight">
                      <span className="font-semibold text-sm uppercase dark:text-white">{crypto.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{crypto.fullName}</span>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">${crypto.price.toLocaleString()}</td>
                <td className="py-3 px-4">
                  <div
                    className={`inline-block px-2 py-1 rounded text-[13px] font-semibold 
                    ${crypto.change >= 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                  >
                    {crypto.change >= 0 ? "+" : ""}
                    {crypto.change.toFixed(2)}%
                  </div>
                </td>
                <td className="py-3 px-4">{crypto.volume.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Market;
