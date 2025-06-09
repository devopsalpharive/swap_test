import { X } from "lucide-react";
import { useState } from "react";
import bch from "../assets/images/bch.svg";
import bnb from "../assets/images/bnb.svg";
import btc from "../assets/images/btc.svg";
import eth from "../assets/images/eth.svg";
import GradientButton from "../UIComponents/GradientButton";
import WhiteBtn from "../UIComponents/WhiteBtn";

// interface StakeCardProps {
//   id: number;
//   icon: string; // Example: Coin icon
//   title: string; // Example: "LTC"
//   value: string; // Example: "96.330000"
//   text1?: string; // Example: "Available Balance"
//   text1Value?: string; // Example: "0.00 LTC"
//   text2?: string; // Example: "Available Balance USDT"
//   text2Value?: string; // Example: "$ 0"
//   text3?: string; // Example: "APY"
//   text3Value?: string; // Example: "3.5%"
//   buttonText?: string; // Example: "Stake Now"
// }
const stakeData = [
  {
    id: 1,
    icon: btc,
    title: "BTC",
    value: "96.330000",
    text1: "Available Balance",
    text1Value: "0.00 LTC",
    text2: "Available Balance USDT",
    text2Value: "$ 0",
    text3: "APY",
    text3Value: "3.5%",
  },
  {
    id: 2,
    icon: bch,
    title: "BCH",
    value: "1500.00",
    text1: "Available Balance",
    text1Value: "1000 USDT",
    text2: "Staked Amount",
    text2Value: "$ 500",
    text3: "APY",
    text3Value: "4.2%",
  },
  {
    id: 3,
    icon: eth,
    title: "ETH",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 4,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 5,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 6,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 7,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 8,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 9,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 10,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 11,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 12,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 13,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
];

const Stake: React.FC = () => {
  const [selectedStake, setSelectedStake] = useState<number | null>(null);

 
  return (
    <>
    <div className="lg:text-[85px] text-[30px] leading-[1.2] text-themeYellow font-[800] text-center mt-11 md:mt-auto" >
    Staking
          </div>
          <div className="lg:text-[46px] text-[30px] leading-[1.2] font-[800] text-center dark:text-white" >
          Simple way to deposit & Earn.
          </div>
  
        <div className="pt-10 lg:pt-20 pb-20">
              <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-center gap-3">
                   {stakeData.map((item) => (
                  <div
                    key={item.id}
                    className="relative bg-[linear-gradient(132.9deg,_#DADADA_9.82%,_rgba(218,218,218,0.07)_49.06%,_#DADADA_103.78%)] hover:bg-gradient-primary p-[1.02px] rounded-xl"
                  >
                    <div className="flex flex-col dark:bg-black bg-white dark:text-white rounded-xl h-full w-full p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-8 h-8"
                        />
                        <h2 className="text-lg font-medium">{item.title}</h2>
                        <span className="ml-auto">{item.value}</span>
                      </div>
                      <hr className="border-gray-700 mb-3" />
                      <p className="text-sm mb-2 mt-1">
                        Available Balance{" "}
                        <span className="float-right">
                          {item.text1Value} {item.title}
                        </span>
                      </p>
                      <p className="text-sm mb-2">
                        Available Balance USDT{" "}
                        <span className="float-right">${item.text2Value}</span>
                      </p>
                      <p className="text-sm mb-2">
                        APY{" "}
                        <span className="float-right text-themeGreen">
                          {item.text3Value}
                        </span>
                      </p>
     
                                 <WhiteBtn

                        onClick={() => setSelectedStake(item.id)}
                       text="Stake Now"
                       paddingX="px-8"
                       paddingY="py-2"
                       fontSize="text-sx"
                       className="hover:from-[#fff] hover:to-[#FFFFFF] mt-6 mx-auto w-fit text-center flex 
           justify-center  hover:!text-black  hover:!border-[#2954A3]"
                     />
                    </div>
                  </div>
                ))}
            </div>
          
        </div>
      {selectedStake !== null && (
        <div className="fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 rounded-xl bg-[linear-gradient(132.9deg,_#DADADA_9.82%,_rgba(218,218,218,0.07)_49.06%,_#DADADA_103.78%)] p-[1px]">
          <div className="w-96 p-4 dark:bg-black dark:text-white bg-white rounded-xl shadow-lg">
            <div className="flex justify-between">
              <h2 className="text-xl font-medium mb-4">Staking </h2>
              {/* {stakeData[selectedStake - 1].name} */}
              <X
                className="text-[#2B2B2B] dark:text-white cursor-pointer"
                onClick={() => setSelectedStake(null)}
              />
            </div>
            <div className="relative">
              <input
                type="number"
                placeholder="0.000000"
                className="bg-transparent w-full py-2 pl-4 pr-14 text-lg border border-[#1E1E1E] rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700  appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />

              {/* BTC Label */}
              <span className="absolute right-4 pl-2 h-11 content-center top-1/2 transform -translate-y-1/2  border-[#1E1E1E] border-l-2 bg-transparent">
                {stakeData[selectedStake - 1].title}
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-2 ml-4">≈ $0</p>
            <div className="flex justify-between mt-5">
              <p className="dark:text-titleGray">Interest</p>
              <p className="font-medium">
                0 {stakeData[selectedStake - 1].title} ≈ $ 0
              </p>
            </div>
            <div className="flex justify-between mt-1">
              <p className="dark:text-titleGray">Available Balance</p>
              <p className="font-medium">
                0.0000 {stakeData[selectedStake - 1].title}
              </p>
            </div>
            <div className="flex justify-between mt-1">
              <p className="dark:text-titleGray">Minimum Stake</p>
              <p className="font-medium">
                0.001 {stakeData[selectedStake - 1].title}
              </p>
            </div>
            <div className="flex justify-between mt-1">
              <p className="dark:text-titleGray">Maximum Stake</p>
              <p className="font-medium">
                10,000 {stakeData[selectedStake - 1].title}
              </p>
            </div>
            <div className="flex justify-between mt-1">
              <p className="dark:text-titleGray">Withdrawal Term</p>
              <p className="font-medium">Flexible</p>
            </div>
            <div className="flex justify-between mt-1">
              <p className="dark:text-titleGray">Redemption Period</p>
              <p className="font-medium">1 Days</p>
            </div>
            <div className="flex justify-between mt-1">
              <p className="dark:text-titleGray">Duration (Days)</p>
              <p className="font-medium">365</p>
            </div>
            <div className="flex justify-between mt-1">
              <p className="dark:text-titleGray">APY</p>
              <p className="font-medium">9.5%</p>
            </div>

            <div className="mt-6  flex w-full justify-between gap-2">
              <WhiteBtn
                text={"Cancel"}
                width="!w-full"
                onClick={() => setSelectedStake(null)}
              />
              <GradientButton text={"Confirm"} className="!w-full !rounded-2xl" />
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Stake;
