import React from "react";
import AvailableBalance from "../components/AvailableBalance";
import scroll from "../assets/images/scroll-1.svg";
import scroll1 from "../assets/images/scroll-2.svg";
import scroll2 from "../assets/images/scroll-3.svg";
import scroll3 from "../assets/images/scroll-4.svg";
import scroll4 from "../assets/images/scroll-5.svg";
import PortfolioPieChart from "../components/PortfolioPieChart";
import btc from "../assets/images/btc.svg";
import eth from "../assets/images/eth.svg";
import bnb from "../assets/images/bnb.svg";
import xrp from "../assets/images/xrp.svg";
import doge from "../assets/images/doge.svg";
import shib from "../assets/images/shib.svg";
import AreaChartGraph from "../components/AreaChartGraph";
const HedgeFund = () => {
  const data = [
    {
      id: 1,
      icon: scroll, // Ensure `scroll` is properly imported
      name: "BTCUSDT",
      price: "83,052.69",
      change: "−627.43 (−0.75%)",
    },
    {
      id: 2,
      icon: scroll1,
      name: "ETHUSDT",
      price: "4,052.69",
      change: "+127.43 (+2.75%)",
    },
    {
      id: 3,
      icon: scroll2,
      name: "BCHUSDT",
      price: "335.4",
      change: "−18.60 (−5.25%)",
    },
    {
      id: 3,
      icon: scroll3,
      name: "XRPUSDT",
      price: "335.4",
      change: "−18.60 (−5.25%)",
    },
    {
      id: 4,
      icon: scroll4,
      name: "DOGEUSDT",
      price: "335.4",
      change: "−18.60 (−5.25%)",
    },
  ];

  const transactionstable = [
    {
      date: "BTC/USDT",
      icon: btc,
      coin: "2588",
      amount: "1,000.0000",
      userId: "-5.25%",
      type: "Test",
      status: "$ 2.2176",
      reason: "$ 2705856640.20",
    },
    {
      date: "BNB/USDT",
      icon: bnb,
      coin: "32580",
      amount: "1,000.0000",
      userId: "-0.05%",
      type: "Test",
      status: "$ 2.2176",
      reason: "$ 2705856640.20",
    },
    {
      date: "ETH/USDT",
      icon: eth,
      coin: "800478905",
      amount: "1,000.0000",
      userId: "1.05%",
      type: "Test",
      status: "$ 2.2176",
      reason: "$ 2705856640.20",
    },
    {
      date: "XRP/USDT",
      icon:xrp,
      coin: "1580",
      amount: "1,000.0000",
      userId: "-0.05%",
      type: "Test",
      status: "$ 0.00001205",
      reason: "$ 2705856640.20",
    },
    {
      date: "SHIB/USDT5",
      icon:shib,
      coin: "1580",
      amount: "1,000.0000",
      userId: "-0.75%",
      type: "Test",
      status: "$ 1858.32",
      reason: "$ 2705856640.20",
    },
    {
      date: "DOGE/USDT",
      icon:doge,
      coin: "8789555500",
      amount: "1,000.0000",
      userId: "-0.75%",
      type: "Test",
      status: "$ 82851",
      reason: "$ 2705856640.20",
    },
  ];

  const scrollingData = [...data, ...data, ...data];

  return (
    <div>
      <AvailableBalance />
      <div className="overflow-hidden whitespace-nowrap py-2">
        <div className="coin-value flex gap-5 animate-scroll">
          {scrollingData.map((item, index) => (
            <div key={index} className="flex gap-2 min-w-max">
              <div className="icon">
                <img src={item.icon} alt={item.name} />
              </div>
              <div className="text-sm font-semibold dark:text-white">
                {item.name}
              </div>
              <div className="text-sm dark:text-white">{item.price}</div>
              <div
                className={`text-sm ${
                  item.change.includes("+") ? "text-green-400" : "text-red-400"
                }`}
              >
                {item.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-10 flex-wrap gap-3">
        <h4 className="font-bold text-lg dark:text-white">
          Total Hedge Fund Portfolio Value:
        </h4>
        <h4 className="font-bold text-lg text-themeGreen">$ 4,517,633,663.68</h4>
      </div>
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-4 mt-5">
        <div className="lg:col-span-8">
        <AreaChartGraph/>
        </div>
        <div className="lg:col-span-4">
          <PortfolioPieChart />
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl mt-16">
        <table className="w-full dark:text-white bg-white dark:bg-cardBgDark">
          <thead>
            <tr className="dark:text-gray-300 text-black whitespace-nowrap">
              <th className="px-6 py-4 text-left text-sm">Name</th>
              <th className="px-6 py-4 text-left text-sm">Quantity</th>
              <th className="px-6 py-4 text-left text-sm">Price</th>
              <th className="px-6 py-4 text-left text-sm">24H Change</th>
              <th className="px-6 py-4 text-left text-sm">24 High</th>
              <th className="px-6 py-4 text-left text-sm">24 Low</th>
              <th className="px-6 py-4 text-left text-sm">Total</th>
            </tr>
          </thead>
          <tbody>
            {transactionstable.map((tx, index) => (
              <tr
                key={index}
                className="odd:bg-gray-100 dark:odd:bg-cardBgDark whitespace-nowrap"
              >
                <td className="px-6 py-4 text-sm text-themeGreen">
                      <div className="flex gap-5">
                      <img
                  src={tx.icon}
                  alt={tx.icon}
                  className="w-8 h-8"
                />
                  {tx.date}
                      </div>
                  
                    </td>
                <td className="px-6 py-4 text-sm">{tx.coin}</td>
                <td className="px-6 py-4 text-sm">{tx.amount}</td>
                <td className="px-6 py-4 text-xs">
                     <span  className={`w-auto rounded-2xl p-2 ${
                    tx.userId.includes("-") ? "bg-red-400" : "bg-green-400"
                  }`}>{tx.userId}</span>
                  
                </td>

                <td className="px-6 py-4 text-sm">{tx.type}</td>
                <td
                //   className={`px-4 py-2 ${
                //     tx.status === "Completed" ? "text-green-400" : "text-yellow-400"
                //   }`}
                >
                  {tx.status}
                </td>
                <td className="px-4 py-2">{tx.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HedgeFund;
