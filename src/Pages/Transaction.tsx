import React from "react";
import AvailableBalance from '../components/AvailableBalance';

const transactionstable = [
  {
    date: "2024-05-28 17:15",
    coin: "USDT",
    amount: "1,000.0000",
    userId: "3571056",
    type: "Test",
    status: "Completed",
    reason: "-",
  },
  {
    date: "2024-05-28 17:15",
    coin: "USDT",
    amount: "1,000.0000",
    userId: "3571056",
    type: "Test",
    status: "Pending",
    reason: "-",
  },
  {
    date: "2024-05-28 17:15",
    coin: "USDT",
    amount: "1,000.0000",
    userId: "3571056",
    type: "Test",
    status: "Completed",
    reason: "-",
  },
  {
    date: "2024-05-28 17:15",
    coin: "USDT",
    amount: "1,000.0000",
    userId: "3571056",
    type: "Test",
    status: "Completed",
    reason: "-",
  },
  {
    date: "2024-05-28 17:15",
    coin: "USDT",
    amount: "1,000.0000",
    userId: "3571056",
    type: "Test",
    status: "Completed",
    reason: "-",
  },
  {
    date: "2024-05-28 17:15",
    coin: "USDT",
    amount: "1,000.0000",
    userId: "3571056",
    type: "Test",
    status: "Pending",
    reason: "-",
  },
];

const Transaction: React.FC = () => {
  return (
    
    <div className="mt-11 md:mt-auto">
      <AvailableBalance/>
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full dark:text-white border rounded-xl border-gray-200 bg-tableBg dark:border-cardBgDark">
          <thead>
            <tr className="dark:text-gray-300 text-black whitespace-nowrap">
              <th className="px-6 py-4 text-left text-sm">Date</th>
              <th className="px-6 py-4 text-left text-sm">Coin</th>
              <th className="px-6 py-4 text-left text-sm">Amount</th>
              <th className="px-6 py-4 text-left text-sm">User Id</th>
              <th className="px-6 py-4 text-left text-sm">Type</th>
              <th className="px-6 py-4 text-left text-sm">Status</th>
              <th className="px-6 py-4 text-left text-sm">Reason</th>
            </tr>
          </thead>
          <tbody>
            {transactionstable.map((tx, index) => (
              <tr key={index} className="odd:bg-gray-100 dark:odd:bg-cardBgDark whitespace-nowrap">
                <td className="px-6 py-4 text-sm">{tx.date}</td>
                <td className="px-6 py-4 text-sm">{tx.coin}</td>
                <td className="px-6 py-4 text-sm">{tx.amount}</td>
                <td className="px-6 py-4 text-sm">{tx.userId}</td>
                <td className="px-6 py-4 text-sm">{tx.type}</td>
                <td
                  className={`px-4 py-2 ${
                    tx.status === "Completed" ? "text-green-400" : "text-yellow-400"
                  }`}
                >
                  {tx.status}
                </td>
                <td className="px-4 py-2 w-1/4">{tx.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
