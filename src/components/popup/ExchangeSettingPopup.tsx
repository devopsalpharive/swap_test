import { X } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { closeSetting, updateSettingsData } from "../../redux/slices/popupSlice";

const ExchangePopup: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isOpen, data } = useSelector((state: RootState) => state.popup);

  const slippageOptions = ["0.1", "0.5", "1"];
  const [selectedSlippage, setSelectedSlippage] = useState(data.slippage || "0.5");
  const [deadline, setDeadline] = useState(data.deadline || "30");

  const handleSlippageSelect = (value: string) => {
    setSelectedSlippage(value);
    dispatch(updateSettingsData({ slippage: value }));
  };

  const handleDeadlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDeadline(value);
    dispatch(updateSettingsData({ deadline: value }));
  };

  return isOpen ? (
    <div
      className="fixed inset-0 backdrop-blur-xl flex items-center z-20 justify-center pt-20"
      onClick={() => dispatch(closeSetting())}
    >
      <div className="relative flex flex-col items-center">
        <button
          onClick={() => dispatch(closeSetting())}
          className="absolute -top-8 -right-0 text-gray-500 hover:text-gray-800 bg-pink-300 rounded-sm p-1 shadow-md"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div
          className="bg-[#0F1021] p-6 rounded-lg shadow-lg w-[95%] sm:w-[350px]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center pb-2 border-b border-gray-600 mb-3">
            <h2 className="text-xl font-semibold text-white">Settings</h2>
          </div>

          <div className="text-white text-[14px] pb-1 mb-1">Slippage tolerance</div>
          <div className="flex w-full justify-between gap-2 mb-2">
            {slippageOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSlippageSelect(option)}
                className={`w-1/3 h-7 text-[13px] rounded-md flex justify-center items-center 
                ${
                  selectedSlippage === option
                    ? "bg-gradient-to-r from-custom-pink via-custom-purple to-custom-deep text-white"
                    : "bg-blue-950 text-white"
                }`}
              >
                {option}%
              </button>
            ))}
          </div>
<div className="flex gap-2 items-center mb-4 mt-1">
          <input
            type="number"
            value={`${selectedSlippage}`}
            readOnly
            className="w-full h-7 px-2 rounded-md bg-blue-950 text-white text-sm outline-none cursor-default"
          />
          <div className="text-[14px] text-white">%</div>
</div>
          <div className="text-white text-[14px] pt-2 mb-1">Transaction deadline</div>
          <div className="flex items-center gap-2 pt-2">
            <input
              type="number"
              min="1"
              step="1"
              value={deadline}
              onChange={handleDeadlineChange}
              className="w-full h-7 px-2 rounded-md bg-blue-950 text-white text-sm outline-none"
            />
            <span className="text-[12px] text-white">Minutes</span>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ExchangePopup;