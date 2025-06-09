import React from "react";
import FutureHead from "../components/FutureTrade/FutureHead";
import FutureTradeChart from "../components/FutureTrade/FutureTradeChart";
import FutureOrderHistory from "../components/FutureTrade/FutureOrderHistory";
import FutureLimit from "../components/FutureTrade/FutureLimit";
import FutureOrderbook from "../components/FutureTrade/FutureOrderbook"
const FutureTrade = () => {
  return (
    <div className=" mx-4 lg:mx-0 space-y-5  xl:px-[10px] 2xl:px-[100px] 3xl:px-[350px] 4xl:px-[550px] 5xl:px-[800px] 6xl:px-[950px] 7xl:px-[1000px] 8xl:px-[1250px] 9xl:px-[1400px] 10xl:px-[1600px] 11xl:px-[2100px] 12xl:px-[3000px] mt-8">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9">
              <FutureHead />
              <FutureTradeChart />
            
            </div>
            <div className="col-span-12 lg:col-span-3">
            <FutureOrderbook/>
            </div>
            <div className="col-span-12">
            <FutureOrderHistory />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3">
          <FutureLimit />
        </div>
      </div>
    </div>
  );
};

export default FutureTrade;
