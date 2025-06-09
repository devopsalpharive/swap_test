import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import GradientButton from "../UIComponents/GradientButton";
import { QRCodeCanvas } from "qrcode.react";
import { useState, useRef } from "react";
import { Copy } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Deposit = () => {
  const items = [
    "Send only USDT To This Wallet Address.",
    "Sending Coins Or Tokens Other Than USDT To This Wallet May Result In The Total Loss Of Your Deposit",
    "Please Upload A Screenshot Or A Hash Of Your Transaction In Order For Us To Approve Your Transaction",
  ];
  const qrValue =
    "file:///C:/office project/react/alphaswap/alphaswap-git";

  const [value, setValue] = useState("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select();
      navigator.clipboard.writeText(inputRef.current.value);
      toast.success("Copied !");
    }
  };

  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  return (
    <div className="mt-11 md:mt-auto">
      <div className='p-[0.100rem] bg-[#D3C5E5]  rounded-xl mb-10'>
        <div className="p-8 sx:!p-4 rounded-xl  sm:gap-5 grid lg:grid-cols-2 grid-cols-1 gap-4 lg:overflow-hidden dark:bg-[#0B0B0B] bg-white">
          <div className="relative bg-[linear-gradient(132.9deg,_#DADADA_9.82%,_rgba(218,218,218,0.07)_49.06%,_#DADADA_103.78%)]  p-[1.02px] rounded-xl">
          <div className=" dark:bg-black bg-white dark:text-white rounded-xl h-full w-full p-4">
            <p className="text-[#735DA5] text-lg font-bold">Deposit Terms</p>
            <div className="deposit-amount-value flex sm:flex-nowrap flex-wrap  gap-5 mt-16 items-start">
              <div className="text-[#735DA5]">
                <FaExclamationCircle className="text-xl" />
              </div>
              <div className="bg-white  rounded-xl dark:bg-black dark:text-white">
                <h5 className="font-bold">Minimum Deposit Amount: 0.1 USDT</h5>
                <p className="mt-2">
                  Deposits Less Than The Minimum Amount Will Not Be Accepted And
                  Refunds Are Not Allowed
                </p>
              </div>
            </div>
            <div className="mt-16">
              <ul className="list-disc pl-5 space-y-2 text-lg space-y-4 ">
                {items.map((item, index) => (
                  <li key={index} className="text-base dark:text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-16">
              <GradientButton
                text="Deposit With Card"
                className="w-auto p-2 sm:w-64"
              />
            </div>
            </div>
          </div>

          <div className="">
            <p className="text-[#735DA5] text-lg font-bold">USDT Deposit</p>
            <div className="flex flex-col items-center mt-10">
              <QRCodeCanvas value={qrValue} size={100} className="shadow-lg" />
            </div>
            <div className="mt-5">
              <div className="deposit-detail mb-4">
                <label className="dark:text-white">Deposit Address</label>
                <div className="flex flex-col items-center mt-3">
                  <div className="relative w-full">
                    <input  
                      ref={inputRef}
                      type="text"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      className="w-full p-2 min-h-[46px] rounded-3xl shadow-sm bg-inputBg border border-[#D3C5E5] dark:text-white shadow-[0px_39.87px_39.87px_0px_rgba(69,42,124,0.15)]"
                      readOnly
                    />
                    <button
                      onClick={handleCopy}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 dark:text-white text-gray-600 hover:text-blue-500"
                    >
                      <Copy size={20} />
                    </button>
                  </div>
                  <ToastContainer position="top-right" autoClose={1500} />
                </div>
                <div className="mt-3">
                  <label className="dark:text-white">Amount</label>
                  <input
                    className="w-full  min-h-[46px] border-[#D3C5E5] border rounded-3xl p-2 shadow-[0px_39.87px_39.87px_0px_rgba(69,42,124,0.15)] shadow-sm mt-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none bg-inputBg dark:text-white"
                    defaultValue="0"
                    type="number"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex flex-col items-start space-y-2">
                    <label className="font-semibold dark:text-white">
                      Upload Document (Optional)
                    </label>
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      id="fileInput"
                    />
                    <label
                      htmlFor="fileInput"
                      className="relative px-4 py-2 w-40 text-center cursor-pointer rounded-lg bg-[#735DA5] text-white font-semibold transition-all duration-300 ease-in-out"
                    >
                      Upload
                    </label>

                    {fileName && (
                      <p className="text-sm text-themeGreen mt-1">
                        Selected file: {fileName}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 dark:text-white">
                      Max. upload file size 2MB (Jpg, Jpeg, Png, Pdf only).
                    </p>
                  </div>
                  <div className="mt-5">
                    <GradientButton
                      text="Deposit"
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

export default Deposit;
