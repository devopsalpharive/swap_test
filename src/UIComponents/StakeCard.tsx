import React from "react";

interface StakeCardProps {
  width?: string; // Example: "w-80"
  height?: string; // Example: "h-48"
  icon: React.ElementType; // Example: Coin icon
  title: string; // Example: "LTC"
  value: string; // Example: "96.330000"
  text1?: string; // Example: "Available Balance"
  text1Value?: string; // Example: "0.00 LTC"
  text2?: string; // Example: "Available Balance USDT"
  text2Value?: string; // Example: "$ 0"
  text3?: string; // Example: "APY"
  text3Value?: string; // Example: "3.5%"
  buttonText?: string; // Example: "Stake Now"
}

export default function StakeCard({
  width = "w-96",
  height = "h-auto",
  icon: Icon,
  title,
  value,
  text1,
  text1Value,
  text2,
  text2Value,
  text3,
  text3Value,
  buttonText = "Stake Now",
}: StakeCardProps) {
  return (
    <div className={`relative p-[2px] rounded-xl bg-[#D3C5E5] ${width} ${height}`}>
      <div className="flex flex-col bg-white rounded-xl h-full w-full p-6 hover:bg-themeGreenT hover:text-white">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon size={24} className="text-gray-500" />
            <span className="text-black font-semibold">{title}</span>
          </div>
          <span className="text-black font-medium">{value}</span>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 my-3" />

        {/* Dynamic Text Sections */}
        {text1 && <div className="flex justify-between"><span className="text-gray-600">{text1}</span><span className="text-black">{text1Value}</span></div>}
        {text2 && <div className="flex justify-between"><span className="text-gray-600">{text2}</span><span className="text-black">{text2Value}</span></div>}
        {text3 && <div className="flex justify-between"><span className="text-gray-600">{text3}</span><span className="text-blue-500">{text3Value}</span></div>}

        {/* Action Button */}
        <button className="mt-4 w-full rounded-lg text-white bg-[#D3C5E5] hover:opacity-80 transition-all duration-300 ease-in-out py-2 text-lg font-medium">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
