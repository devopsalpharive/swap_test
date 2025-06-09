import React from "react";
import GradientButton from "../UIComponents/GradientButton";
import "react-toastify/dist/ReactToastify.css";
const Withdraw = () => {
  const items = ["Maximum Withdraw : 1000000000", "Withdraw Fee : 2%"];

  return (
    <div className="mt-11 md:mt-auto">
      <div className="flex items-center justify-center min-h-[80vh] mt-5">
        <div className="p-[0.100rem] bg-[#D3C5E5]  rounded-xl mb-10">
          <div
            className="p-8 sx:!p-4 rounded-xl  sm:gap-5 grid lg:grid-cols-2 grid-cols-1 gap-4 lg:overflow-hidden dark:bg-[#0B0B0B] bg-white"
          >
            <div className="relative bg-[linear-gradient(132.9deg,_#DADADA_9.82%,_rgba(218,218,218,0.07)_49.06%,_#DADADA_103.78%)]  p-[1.02px] rounded-xl" >
              <div className=" dark:bg-black bg-white dark:text-white rounded-xl h-full w-full p-4">
              <p className="text-[#735DA5] text-lg font-bold">
                Withdraw Terms
              </p>
              <div className="mt-16">
                <p className="mb-4 dark:text-white">
                  The Minimum Withdrawal amount is: 0.000002 USDT
                </p>
                <ul className="list-disc pl-5 space-y-2 text-lg space-y-4 dark:text-white">
                  {items.map((item, index) => (
                    <li key={index} className="text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </div>

            <div className="">
              <p className="text-[#735DA5] text-lg font-bold">USDT Withdraw</p>
              <div className="mt-5">
                <div className="deposit-detail mb-4">
                  <label className="dark:text-white">Receiver Address</label>
                  <div className="flex flex-col items-center mt-3">
                    <div className="relative w-full">
                      <input
                        className="w-full p-2 shadow-[0px_39.87px_39.87px_0px_rgba(69,42,124,0.15)]  rounded-2xl bg-inputBg dark:text-white shadow-sm mt-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        placeholder="Please enter withdrawal address here"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex justify-between dark:text-white">
                      <label>Withdrawal Amount</label>
                      <label>Max</label>
                    </div>

                    <input
                      className="w-full p-2 bg-inputBg shadow-[0px_39.87px_39.87px_0px_rgba(69,42,124,0.15)] dark:text-white rounded-2xl shadow-sm mt-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      defaultValue="0"
                      type="number"
                    />
                  </div>
                  <div className="mt-5">
                    <GradientButton
                      text="Withdraw"
                      className="w-full p-2 hover:!bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
