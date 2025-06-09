import React from "react";
import btc from "../../assets/images/btc.svg";
import doge from "../../assets/images/doge.svg";
import eth from "../../assets/images/eth.svg";
import sol from "../../assets/images/sol.svg";
import GradientButton from "../../UIComponents/GradientButton";

interface CryptoData {
  name: string;
  symbol: string;
  price: string;
  change: string;
  marketCap: string;
  volume: string;
  image: string;
}

const cryptoData: CryptoData[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$96,777.59",
    change: "+1.18%",
    marketCap: "$1.9T",
    volume: "$41.7B",
    image: btc,
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    price: "$0.33",
    change: "+1.99%",
    marketCap: "$49.8B",
    volume: "$2.5B",
    image: doge,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,452.41",
    change: "+1.18%",
    marketCap: "$416B",
    volume: "$20.2B",
    image: eth,
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$3,452.41",
    change: "+1.18%",
    marketCap: "$416B",
    volume: "$20.2B",
    image: sol,
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$96,777.59",
    change: "+1.18%",
    marketCap: "$1.9T",
    volume: "$41.7B",
    image: btc,
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    price: "$0.33",
    change: "+1.99%",
    marketCap: "$49.8B",
    volume: "$2.5B",
    image: doge,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,452.41",
    change: "+1.18%",
    marketCap: "$416B",
    volume: "$20.2B",
    image: eth,
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$3,452.41",
    change: "+1.18%",
    marketCap: "$416B",
    volume: "$20.2B",
    image: sol,
  },
];

const CryptoMarket: React.FC = () => {
  return (
    <div className="dark:text-white mt-11 ">
      <div>
        <h2 className="max-w-2xl  font-[500] leading-none font-funnel lg:text-[55px] text-[30px] dark:text-white mb-10 lg:mb-20">
          Capture Every Trading Opportunity
          <span className="text-themeColor">.</span>
        </h2>
      </div>
      <div className="lg:px-20 px-0">
        <p className="text-[22px] font-funnel lg:mb-10 mb-4">
          Top Cryptos in market:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-transparent dark:bg-[#0A0B0D]">
            <thead>
              <tr className="dark:bg-[#0A0B0D] dark:text-[#FFFFFFB2] font-normal">
                <th className="p-4 font-normal">Name</th>
                <th className="p-4 font-normal whitespace-nowrap">
                  Last Price
                </th>
                <th className="p-4 font-normal whitespace-nowrap">
                  24h Change
                </th>
                <th className="p-4 font-normal whitespace-nowrap">
                  Market Cap
                </th>
                <th className="p-4 font-normal whitespace-nowrap">
                  24h Volume
                </th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((crypto, index) => (
                <tr key={index}>
                  <td className="p-4 flex items-center font-[500]">
                    <img
                      src={crypto.image}
                      alt={crypto.name}
                      className="w-6 h-6 mr-2"
                    />
                    <p className="text-[16px] ml-2">{crypto.name}</p>{" "}
                    <span className="text-[15px] ml-2 dark:text-[#FFFFFF66]">
                      {crypto.symbol}
                    </span>
                  </td>
                  <td className="p-4 whitespace-nowrap">{crypto.price}</td>
                  <td className="p-4 whitespace-nowrap">{crypto.change}</td>
                  <td className="p-4 whitespace-nowrap">{crypto.marketCap}</td>
                  <td className="p-4 whitespace-nowrap">{crypto.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <GradientButton
          text="More"
          paddingX="px-9"
          paddingY="py-2"
          fontSize="text-sx"
          className="mt-5 lg:mt-10  mx-auto w-fit text-center flex 
              justify-center rounded-2xl"
        />
      </div>
    </div>
  );
};

export default CryptoMarket;
