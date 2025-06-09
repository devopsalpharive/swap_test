import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import usdt from "../assets/images/usdt.svg";
import btc from "../assets/images/btc.svg";
import bch from "../assets/images/bch.svg";
import eth from "../assets/images/eth.svg";
import bnb from "../assets/images/bnb.svg";
import ltc from "../assets/images/ltc.svg";
import xrp from "../assets/images/xrp.svg";
import doge from "../assets/images/doge.svg";
import shib from "../assets/images/shib.svg";
import ada from "../assets/images/ada.svg";
import neo from "../assets/images/neo.svg";
import WhiteBtn from "../UIComponents/WhiteBtn";
import { useNavigate } from "react-router-dom";
import GradientButton from "../UIComponents/GradientButton";
const Wallet = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("5864852");
  const [searchQuery, setSearchQuery] = useState("");
  const [hideZero, setHideZero] = useState(false);

  const data = [
    { icon: usdt, id: "USDT", name: "1,339.92 USDT", value: "≈ $ 1,339.79" },
    { icon: btc, id: "BTC", name: "0 BTC", value: "≈ $ 0.00" },
    { icon: bch, id: "BCH", name: "1,339.92 BCH", value: "≈ $ 1,339.79" },
    { icon: eth, id: "ETH", name: "0 ETH", value: "≈ $ 0.00" },
    { icon: bnb, id: "BNB", name: "1,339.92 BNB", value: "≈ $ 1,339.79" },
    { icon: ltc, id: "LTC", name: "0 LTC", value: "≈ $ 0.00" },
    { icon: xrp, id: "XRP", name: "1,339.92 XRP", value: "≈ $ 1,339.92 0.00" },
    { icon: doge, id: "DOGE", name: "0 DOGE", value: "≈ $ 1,339.92 0.00" },
    { icon: shib, id: "SHIB", name: "0 SHIB", value: "≈ $ 0.00" },
    { icon: ada, id: "ADA", name: "0 ADA", value: "≈ $ 0.00" },
    { icon: neo, id: "NEO", name: "1,339.92 ADA", value: "≈ $ 1,339.92" },
  ];

  const filteredData = data.filter((person) => {
    const matchesSearch = person.id
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const isNonZero = !hideZero || !person.name.startsWith("0");
    return matchesSearch && isNonZero;
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  // const [amount, setAmount] = useState(0);

  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <div>
      <div className="mt-11 md:mt-auto">
        <div className="p-[0.100rem] bg-[#D3C5E5]  rounded-3xl mb-10">
         
            <div className="p-8 sx:!p-4 rounded-3xl flex justify-between sm:gap-5 overflow-x-scroll whitespace-nowrap gap-12 lg:overflow-hidden dark:bg-[#0B0B0B] bg-white">
              <div className="total-assets flex gap-2 items-center flex-wrap">
                <p className="text-[28px] font-semibold text-black font-bold dark:text-white">
                  Total Balance:
                </p>
                <div className="relative flex gap-2 items-center">
                  <p className="text-[28px] font-semibold text-black font-bold dark:text-white">
                    $
                  </p>
                  <input
                    type="text"
                    value={
                      showPassword ? password : "*".repeat(password.length)
                    }
                    onChange={(e) => setPassword(e.target.value)}
                    className="font-bold text-[28px] rounded-lg focus:outline-none w-40 bg-transparent dark:text-white"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3  text-gray-800 dark:text-white"
                  >
                    {showPassword ? <EyeOff size={25} /> : <Eye size={25} />}
                  </button>
                </div>
              </div>
              <div className="flex gap-5 flex-wrap">
                <input
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="p-2 rounded-3xl focus-visible:outline-none shadow-[0px_39.87px_39.87px_0px_rgba(69,42,124,0.15)] dark:text-white bg-inputBg border border-[#D3C5E5]"
                />
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hideZero}
                    onChange={() => setHideZero(!hideZero)}
                    className="w-5 h-5 text-blue-600 rounded"
                    style={{
                      backdropFilter: "blur(20.107913970947266px)",
                      boxShadow: "0px 39.87px 39.87px 0px #452A7C26",
                      background: "#dde4f1",
                      color: "#000",
                      border: "1.6px solid #f6f8ffb5",
                    }}
                  />
                  <span className="text-gray-700 dark:text-white">
                    Hide Zero Balances
                  </span>
                </label>
              </div>
            </div>
         
        </div>

        <div className="overflow-x-auto mt-10">
          <table className="w-full bg-white shadow-md rounded-lg dark:bg-transparent">
            <thead>
              <tr className="dark:text-white">
                <th className="px-6 py-3 text-left">Asset</th>
                <th className="px-6 py-3 text-left">Balance</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((person) => (
                  <tr
                    key={person.id}
                    className="hover:bg-gray-100 transition odd:bg-gray-100 dark:odd:bg-cardBgDark dark:hover:bg-cardBgDark dark:text-white"
                  >
                    <td className="px-6 py-5 text-sm w-1/3 ">
                      <div className="flex gap-6 items-center">
                        <img
                          src={person.icon}
                          alt={person.id}
                          className="w-8 h-8"
                        />
                        {person.id}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm w-1/3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-semibold">{person.name}</span>
                        <span className="text-gray-500">{person.value}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm w-1/3">
                      <div className="flex flex-row gap-3">
                        <WhiteBtn
                          text="Deposit"
                          onClick={() => navigate("/deposit")}
                        />
                        <WhiteBtn
                          text="Withdraw"
                          onClick={() => navigate("/withdraw")}
                        />
                        <WhiteBtn text="Exchange" onClick={toggleModal} />
                        <WhiteBtn
                          text="Stake"
                          onClick={() => navigate("/stake")}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center py-5 text-gray-500">
                    No matching assets found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className=" bg-white p-6 rounded-lg w-[95%] max-w-[28rem] dark:bg-popDark m-auto sm:mx-4">
              <h2 className="text-lg font-bold mb-4 dark:text-white">
                Exchange
              </h2>
              <div className="pb-2 mb-4 rounded-5xl">
                <div className="flex justify-between">
                  <label className="block text-sm dark:text-white">
                    From Currency
                  </label>
                  <span className="block text-sm dark:text-white mb-1">
                    Available: 1,339.92 USDT
                  </span>
                </div>
                <div className="flex items-center border px-3 py-2 rounded-3xl mt-3">
                  <input
                    type="text"
                    className="w-full focus:outline-none dark:bg-transparent dark:text-white"
                    placeholder="USDT"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm dark:text-white">
                  To Currency
                </label>
                <select
                  className="w-full border px-3 py-3 rounded-3xl mt-3 dark:bg-transparent dark:text-white"
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                >
                  <option value="" className="dark:bg-black">
                    Select Currency
                  </option>
                  <option value="BTC" className="dark:bg-black">
                    BTC
                  </option>
                  <option value="ETH" className="dark:bg-black">
                    ETH
                  </option>
                </select>
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <label className="block text-sm dark:text-white">
                    Amount
                  </label>
                  <span className="dark:text-white">Max</span>
                </div>

                <div className="flex items-center border py-2 px-3 rounded-3xl">
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full focus:outline-none dark:bg-transparent dark:text-white appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <span className="text-gray-500">USDT</span>
                </div>
              </div>
              <div className="flex justify-center sm:justify-between flex-wrap gap-3 ">
                <button
                  onClick={toggleModal}
                  className="relative p-[1.6px] rounded-lg bg-[#D3C5E5] transition-all duration-300 ease-in-out "
                >
                  <span className="block w-full h-full px-14 py-2 rounded-md bg-white dark:bg-black dark:text-white text-black font-bold text-center transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#237249] hover:to-[#35C66B] hover:text-white">
                    Cancel
                  </span>
                </button>
                <GradientButton text={"Confirm"} className="px-16 py-2" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
