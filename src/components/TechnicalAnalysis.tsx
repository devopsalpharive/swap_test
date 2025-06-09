import { useState } from "react";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
interface TechnicalAnalysisProps {
  selectedPair: string;
}

const TechnicalAnalysis: React.FC<TechnicalAnalysisProps> = () => {
  const [timeframe, setTimeframe] = useState("1 minute");
  
  const data = {
    sell: 4,
    neutral: 10,
    buy: 12,
  };

  return (
    <div className=" dark:bg-gray-900 text-white p-5 rounded-lg shadow-lg space-y-5">
      <h3 className="text-lg font-semibold text-center">Technical Analysis for</h3>
      <h2 className="text-xl font-bold text-blue-400 text-center">BTCUSDT</h2>
      
      {/* Timeframe Selector */}
      <div className="flex justify-center items-center mt-3  space-y-8">
        <button className="bg-gray-800 px-3 py-1 rounded text-sm font-medium">{timeframe}</button>
        <button className="text-gray-400 text-sm ml-2">More ▼</button>
      </div>
      
      {/* Gauge Indicator (Mock) */}
      <div className="mt-4 flex flex-col items-center space-y-8">
        <div className="relative w-32 h-16">
          <div className="absolute left-0 top-1/2 text-red-400 text-xs">Strong Sell</div>
          <div className="absolute right-0 top-1/2 text-blue-400 text-xs">Strong Buy</div>
          <div className="absolute left-1/4 top-0 text-gray-400 text-xs">Sell</div>
          <div className="absolute right-1/4 top-0 text-gray-400 text-xs">Buy</div>
          <div className="absolute left-1/2 top-0 text-gray-400 text-xs transform -translate-x-1/2">Neutral</div>
          <div className="w-full h-2 bg-gradient-to-r from-red-500 via-gray-400 to-blue-500 rounded-full mt-5"></div>
          <div className="w-1 h-8 bg-white absolute left-2/3 top-2 transform -translate-x-1/2 rotate-45"></div>
        </div>
        <p className="text-lg font-bold text-blue-400 mt-2">Buy</p>
      </div>
      
      {/* Summary */}
      <div className="mt-4 flex justify-between text-sm">
        <div className="text-red-400 flex flex-col items-center">
          <ArrowDownLeft size={16} />
          <span>Sell</span>
          <span className="text-lg font-bold">{data.sell}</span>
        </div>
        <div className="text-gray-400 flex flex-col items-center">
          <span>Neutral</span>
          <span className="text-lg font-bold">{data.neutral}</span>
        </div>
        <div className="text-blue-400 flex flex-col items-center">
          <ArrowUpRight size={16} />
          <span>Buy</span>
          <span className="text-lg font-bold">{data.buy}</span>
        </div>
      </div>
    </div>
  );
};

export default TechnicalAnalysis;
