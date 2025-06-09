import { useState } from "react";
import GradientButton from "../UIComponents/GradientButton";
import { NoRecord } from "./SvgCollection";
import { Link } from "react-router-dom";

interface Trade {
  pair: string;
  type: string;
  quantity: number;
  entryPrice: number;
  openTime?: string;
  closePrice?: number;
  pnl?: number;
  reason?: string;
}

const data: { open: Trade[]; closed: Trade[] } = {
  open: [
    {
      pair: "BTCUSDT",
      type: "Buy",
      quantity: 1.0,
      entryPrice: 61200,
      openTime: "2024-08-23 15:40",
    },
    {
      pair: "BTCUSDT",
      type: "Buy",
      quantity: 0.5,
      entryPrice: 60850,
      openTime: "2024-08-14 13:59",
    },
  ],
  closed: [
    {
      pair: "BTCUSDT",
      type: "Buy",
      quantity: 1.0,
      entryPrice: 61400,
      closePrice: 61500,
      pnl: 100,
      reason: "Closed By User",
    },
    {
      pair: "BTCUSDT",
      type: "Buy",
      quantity: 0.1,
      entryPrice: 61100,
      closePrice: 61000,
      pnl: -10,
      reason: "Low Margin",
    },
  ],
};



const TradingTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"open" | "closed">("closed");

  const token = localStorage.getItem("alphaswap");


  console.log("4414444", token)


  return (
    <div className="p-6 dark:bg-[#0b0a12] dark:text-white rounded-lg shadow-lg">
      {/* Tab Controls */}
      <div className="flex space-x-4 mb-4 px-4 whitespace-nowrap">
        <button
          className={`px-0 py-2 text-[14px] font-semibold  transition-all duration-300 ${activeTab === "open"
            ? "bg-none dark:text-white text-black border-b-2 border-black dark:border-white"
            : "bg-none text-[#808080]"
            }`}
          onClick={() => setActiveTab("open")}
        >
          Open Orders (0)
        </button>
        <button
          className={`px-0 py-2 text-[14px] font-semibold  ${activeTab === "closed"
            ? "bg-none dark:text-white text-black border-b-2 border-black dark:border-white"
            : "bg-none text-[#808080]"
            }`}
          onClick={() => setActiveTab("closed")}
        >
          Trade History
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full ">
          <thead>
            <tr className="dark:text-white whitespace-nowrap font-normal">
              <th className="p-3 text-left text-[14px]">Pair</th>
              <th className="p-3 text-left text-[14px]">Type</th>
              <th className="p-3 text-left text-[14px]">Quantity</th>
              <th className="p-3 text-left text-[14px]">Entry Price</th>
              {activeTab === "closed" && (
                <th className="p-3 text-left text-[14px]">Close Price</th>
              )}
              {activeTab === "closed" && (
                <th className="p-3 text-left text-[14px]">PNL</th>
              )}
              {activeTab === "closed" && (
                <th className="p-3 text-left text-[14px]">Reason</th>
              )}
              <th className="p-3 text-left">Info</th>
            </tr>
          </thead>

          {
            token !== null ? (
              <tbody>
                {data[activeTab].length === 0 && (
                  <tr>
                    <td colSpan={6} className="p-3 text-center">
                      <NoRecord />
                      No Records Found
                    </td>
                  </tr>
                )}
                {data[activeTab]?.map((row, index) => (
                  <tr key={index} className="text-start text-[12px]">
                    <td className="p-3">{row.pair}</td>
                    <td className="p-3 text-green-400">{row.type}</td>
                    <td className="p-3">{row.quantity}</td>
                    <td className="p-3">{row.entryPrice}</td>
                    {activeTab === "closed" && (
                      <td className="p-3">{row.closePrice}</td>
                    )}
                    {activeTab === "closed" && (
                      <td
                        className={`p-3 ${row.pnl && row.pnl >= 0
                          ? "text-green-400"
                          : "text-red-400"
                          }`}
                      >
                        {row.pnl}
                      </td>
                    )}
                    {activeTab === "closed" && (
                      <td className="p-3">{row.reason}</td>
                    )}
                    <td>
                      <GradientButton text="Info" className="py-1 px-3" />
                    </td>
                  </tr>
                ))}
              </tbody>

            ) : (

              <tbody>
                <tr>
                  <td colSpan={activeTab === "closed" ? 8 : 5}>
                    <div className="w-full flex justify-center items-center py-10">
                      <div className="border border-yellow-400 rounded-lg px-6 py-4">
                        <p className="text-center text-white text-sm">
                          <Link to={"/login"} className="text-yellow-400 font-semibold cursor-pointer hover:underline" >Login</Link>
                          <span className="text-white"> / </span>
                          <Link to={"/register"} className="text-yellow-400 font-semibold cursor-pointer hover:underline">Register</Link>
                          <span className="text-white"> to trade</span>
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>



            )
          }

        </table>
      </div>
    </div>
  );
};

export default TradingTable;
