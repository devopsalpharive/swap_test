import React from "react";

const FutureOrderbook = () => {
  const salaryData = [
    {
      price: 15000,
      amount: 1645,
      percentage: 10.97,
    },
    {
      price: 15000,
      amount: 1645,
      percentage: 10.97,
    },
    {
      price: 15000,
      amount: 1645,
      percentage: 10.97,
    },
    {
      price: 15000,
      amount: 1645,
      percentage: 10.97,
    },
    {
      price: 15000,
      amount: 1645,
      percentage: 10.97,
    },
  ];

  const sellOrders = [
    { price: 150000, amount: 135.685999, sum: 20352899.85 },
    { price: 130000, amount: 73.512599, sum: 9556637.87 },
    { price: 125000, amount: 47.24043, sum: 5905053.75 },
    { price: 120000, amount: 242.159014, sum: 29059081.68 },
    { price: 120000, amount: 242.159014, sum: 29059081.68 },
    { price: 120000, amount: 242.159014, sum: 29059081.68 },
  ];

  const buyOrders = [
    { price: 20001, amount: 0.03474, sum: 694.83474 },
    { price: 25000, amount: 16.7931, sum: 419827.5 },
    { price: 31741.99, amount: 0.00019, sum: 6.03098 },
    { price: 31742.61, amount: 0.00038, sum: 12.06219 },
    { price: 31744.54, amount: 0.00019, sum: 6.03146 },
    { price: 31745.86, amount: 0.00019, sum: 6.03171 },
    { price: 31745.86, amount: 0.00019, sum: 6.03171 },
    { price: 31745.86, amount: 0.00019, sum: 6.03171 },
    { price: 31745.86, amount: 0.00019, sum: 6.03171 },
  ];

  const spread = {
    price: 88494.78,
    text: "Spread",
    percent: "1.25%",
  };

  return (
    <div className="dark:bg-black p-2 mx-1 h-[100%]">
      <h4 className="dark:text-white">OrderBook</h4>
      <div className="mt-4">
        <div className="w-full max-w-md mx-auto dark:bg-black text-white text-sm font-mono">
          <div className="h-[200px] overflow-y-scroll order-book-scroll">
            <table className="w-full mb-2">
              <thead>
                <tr className="text-gray-400 text-[14px]">
                  <th className="text-left">Price </th>
                  <th className="text-left">Amount</th>
                  <th className="text-left">Sum</th>
                </tr>
              </thead>
              <tbody>
                {sellOrders.map((item, i) => (
                  <tr key={i} className="text-[14px]">
                    <td className="text-red-500 pb-2">{item.price}</td>
                    <td className="text-black dark:text-white">{item.amount}</td>
                    <td className="text-black dark:text-white">{item.sum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center dark:bg-[#111] py-1 px-2 my-2">
            <span className="text-green-500 font-semibold">{spread.price}</span>
            <span className="text-white">
              {spread.text}{" "}
              <span className="text-green-500 font-semibold">
                {spread.percent}
              </span>
            </span>
          </div>

          <div className="h-[200px] overflow-y-scroll order-book-scroll">
            <table className="w-full">
              <tbody>
                {buyOrders.map((item, i) => (
                  <tr key={i} className="text-[14px]">
                    <td className="text-green-500 pb-2">{item.price}</td>
                    <td className="text-black dark:text-white">{item.amount}</td>
                    <td className="text-black dark:text-white">{item.sum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="dark:text-white text-[14px]">Trades</p>
        <div className="h-[200px] overflow-y-scroll order-book-scroll">
          <table className="min-w-full text-sm">
            <thead className="text-left">
              <tr className="dark:text-white text-[14px]">
                <th className="py-2">Price</th>
                <th className="pb-1">Amount</th>
                <th className="pb-1">Sum</th>
              </tr>
            </thead>
            <tbody>
              {salaryData.map((item, index) => (
                <tr key={index} className="dark:text-white text-[14px]">
                  <td className="pb-1 text-[#f95a50]">{item.price}</td>
                  <td className="pb-1">{item.amount}</td>
                  <td className="pb-1">{item.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FutureOrderbook;
