import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import GradientButton from "../../UIComponents/GradientButton";
// import WhiteBtn from "../../UIComponents/WhiteBtn";

import { Info, Switch } from "../SvgCollection";
import RangeSlider from "../RangeSlider";
import { useNavigate, useParams } from "react-router-dom";

interface Coin {
  name: string;
}

const coins: Coin[] = [
  { name: "BTC/USDT" },
  { name: "ETH/USDT" },
  { name: "BNB/USDT" },
  { name: "SOL/USDT" },
  { name: "XRP/USDT" },
];

const BuySpot = () => {
  const [tradeType, setTradeType] = useState("buy");
  const [quantity, setQuantity] = useState(0);
  const [leverage, setLeverage] = useState(100);
  const [selectedCoin, setSelectedCoin] = useState<Coin>(coins[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"open" | "closed">("open");
  // const [selected, setSelected] = useState("buy");

  const balance = 1339.925799; // Example balance
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const [userToken, setUserToken] = useState<string | null>(null);
  const step = 25;
  const shiftStep = 30; // Shift step value (for keyboard handling)
  const marks = [0, 25, 50, 75, 100]; // Defined marks
  const [active, setActive] = useState("buy");

  const navigate = useNavigate()
  const handleKeyDown = (e: any) => {
    if (e.key === "ArrowRight")
      setValue((prev) => Math.min(prev + shiftStep, 100));
    if (e.key === "ArrowLeft")
      setValue((prev) => Math.max(prev - shiftStep, 0));
  };

  const token = localStorage.getItem("alphaswap");


  // Close dropdown when clicking outside
  useEffect(() => {
    setUserToken(localStorage.getItem("alphaswap"));

    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const { coin } = useParams();
  // Clean the symbol (e.g., btc_usdt -> BTCUSDT)
  const [base, quote] = (coin ?? "").split('_');



  return (
    <div>
      <div className="flex justify-between ">
        <div className="flex space-x-4 mb-0 px-4">
          <button
            className={`px-0 py-2 text-[14px] font-semibold  transition-all duration-300 ${activeTab === "open"
              ? "dark:text-white text-black border-b-2 border-black dark:border-white"
              : "text-[#808080]"
              }`}
            onClick={() => setActiveTab("open")}
          >
            Market
          </button>
          <button
            className={`px-0 py-2 text-[14px] font-semibold  transition-all duration-300 ${activeTab === "closed"
              ? "dark:text-white text-black border-b-2 border-black dark:border-white"
              : "text-[#808080]"
              }`}
            onClick={() => setActiveTab("closed")}
          >
            Limit
          </button>
        </div>
        <div className="mt-2 ">
          <Info />
        </div>
      </div>
      <div className="px-2 py-2">
        {activeTab === "open" && (
          <>
            {/* Quantity Selector */}
            <div className="flex justify-between items-center mt-1 mb-4 dark:text-white text-sm">
              <span className="text-[12px]">
                Available:{" "}
                <span className="font-semibold">{balance.toFixed(6)} USDT</span>
              </span>
              <span className="">
                <Switch />
              </span>
            </div>

            <div className="flex justify-between dark:bg-[#3d3d3d] bg-[#e5e5e5] rounded-lg pt-2 px-3 ">
              <div className="">
                <p className="text-black dark:text-white">Total</p>
                <input
                  type="number"
                  className="h-[40px] w-[95%] bg-transparent mt-[4px] text-gray-500 dark:text-gray-300 placeholder-gray-400 outline-none"
                  placeholder="Enter"
                />
              </div>
              <div
                // ref={dropdownRef}
                // onClick={() => setIsOpen(!isOpen)}
                className="relative  rounded-lg flex justify-start w-[85px]  text-white  items-center mt-7  cursor-pointer"
              >

                <p className="font-semibold text-[14px]"> {coin}</p>
                {/* <div className="flex items-center">
                <span className="text-gray-500 dark:text-gray-300 text-[12px]">
                  {selectedCoin.name}
                </span>
              </div> */}
                {/* <ChevronDown
                  className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""
                    }`}
                  size={18}
                /> */}

                {/* Dropdown Menu */}
                {/* {isOpen && (
                  <div className="absolute left-0 mt-2 w-[90px] p-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg z-10">
                    {coins.map((coin, index) => (
                      <button
                        key={index}
                        className="flex items-center space-x-3 p-2 w-full text-white hover:bg-gray-600 hover:text-white hover:rounded-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCoin(coin);
                          setIsOpen(false);
                        }}
                      >
                        <span className="text-black dark:text-white text-[12px]">
                          {coin.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )} */}
              </div>
            </div>

            <div className="my-2">
              <RangeSlider />
            </div>
            {/* Trade Information */}
            <div className="mt-1 dark:text-white text-[16px] space-y-2">
              <p>
                <span className="text-gray-500">Max:</span> 0 BTC
              </p>
              <p>
                <span className="text-gray-500">Est. Trading Fee:</span> --BTC
              </p>
            </div>

            {
              token !== null ? (
                <GradientButton
                  text={`Buy ${base}`}
                  width="w-full"
                  className={"px-5 py-2 mt-7 "}
                // className={`text-black dark:text-white transition-transform ${
                //   isOpen ? "rotate-180" : ""
                // }`}
                />

              ) : (
                <GradientButton
                  text="Login / Register"
                  width="w-full"
                  className={"px-5 py-2 mt-7 "}
                  onClick={() => navigate("/login")}
                // className={`text-black dark:text-white transition-transform ${
                //   isOpen ? "rotate-180" : ""
                // }`}
                />
              )
            }

            {/* Buy/Sell Button */}

            <div className="mt-5">
              <p className="dark:text-white text-[18px] ">Assets</p>
              <div className="flex justify-between ">
                <div className="dark:text-gray-500 mt-4">
                  <p>USDT available</p>
                  <p className="mt-2">BTC available</p>
                </div>
                <div className="dark:text-white mt-4">
                  <p>0 USDT</p>
                  <p className="mt-2">0 BTC</p>
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab === "closed" && (
          <>
            {/* Quantity Selector */}
            <div className="flex justify-between items-center mt-3 mb-4 dark:text-white text-sm">
              <span className="text-[12px]">
                Available:{" "}
                <span className="font-semibold">{balance.toFixed(6)} USDT</span>
              </span>
              <span className="">
                <Switch />
              </span>
            </div>

            <div className="flex justify-between dark:bg-[#3d3d3d] bg-[#e5e5e5] rounded-lg pt-2 px-3 ">
              <div className="">
                <p className="text-black dark:text-white">Total</p>
                <input
                  className="h-[20px] w-[50px] bg-transparent mt-[4px] text-gray-500 dark:text-gray-300 placeholder-gray-400 outline-none"
                  placeholder="Enter"
                />
              </div>
              <div
                ref={dropdownRef}
                onClick={() => setIsOpen(!isOpen)}
                className="relative  rounded-lg flex justify-start w-[80px]   items-center mt-7 mb-4 cursor-pointer"
              >
                <div className="flex items-center">
                  <span className="text-gray-500 dark:text-gray-300 text-[12px]">
                    {selectedCoin.name}
                  </span>
                </div>
                <ChevronDown
                  className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""
                    }`}
                  size={18}
                />

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute left-0 mt-2 w-[90px] p-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg z-10">
                    {coins.map((coin, index) => (
                      <button
                        key={index}
                        className="flex items-center space-x-3 p-2 w-full text-white hover:bg-gray-600 hover:text-white hover:rounded-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCoin(coin);
                          setIsOpen(false);
                        }}
                      >
                        <span className="text-black dark:text-white text-[12px]">
                          {coin.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <RangeSlider />
            {/* Trade Information */}
            <div className="mt-1 dark:text-white text-[16px] space-y-2">
              <p>
                <span className="text-gray-500">Max:</span> 0 BTC
              </p>
              <p>
                <span className="text-gray-500">Est. Trading Fee:</span> --BTC
              </p>
            </div>

            {/* Buy/Sell Button */}


            {
              token !== null ? (
                <GradientButton
                  text={`Buy ${base}`}
                  width="w-full"
                  className={"px-5 py-2 mt-7 "}
                // className={`text-black dark:text-white transition-transform ${
                //   isOpen ? "rotate-180" : ""
                // }`}
                />

              ) : (
                <GradientButton
                  text="Login / Register"
                  width="w-full"
                  className={"px-5 py-2 mt-7 "}
                  onClick={() => navigate("/login")}
                // className={`text-black dark:text-white transition-transform ${
                //   isOpen ? "rotate-180" : ""
                // }`}
                />
              )
            }
            <div className="mt-5">
              <p className="dark:text-white text-[18px] ">Assets</p>
              <div className="flex justify-between ">
                <div className="dark:text-gray-500 mt-4">
                  <p>USDT available</p>
                  <p className="mt-2">BTC available</p>
                </div>
                <div className="dark:text-white mt-4">
                  <p>0 USDT</p>
                  <p className="mt-2">0 BTC</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div >
  );
};

export default BuySpot;
