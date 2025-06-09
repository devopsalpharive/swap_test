import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import Layer2 from "../assets/images/Layer2.png";
import { Link} from "react-router-dom";
const Myads = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [tab, setTab] = useState("processing");
  const [subTab, setSubTab] = useState("tab1");

  const tableData = {
    tab1: [
      { id: 1, date: "2025-04-03", coin: "USDT", fiat: 6, price: "6.0000", crypto: "1", status: "Pending", txn: "TXN1743658438016_129667" },
    ],
    tab2: [
      { id: 2, date: "2025-04-02", coin: "BTC", fiat: 10, price: "50.0000", crypto: "2", status: "Completed", txn: "TXN1743591436534_646576" },
    ],
    tab3: [
      { id: 3, date: "2025-04-01", coin: "ETH", fiat: 5, price: "20.0000", crypto: "0.5", status: "Cancelled", txn: "TXN1743588888888_123456" },
    ],
  };

  const processingData = [
    { id: 5, date: "2025-04-04", coin: "LTC", fiat: 7, price: "80.0000", crypto: "3", status: "Processing", txn: "TXN1743666666666_987654" },
    { id: 6, date: "2025-04-05", coin: "XRP", fiat: 12, price: "0.5000", crypto: "24", status: "Processing", txn: "TXN1743677777777_543210" },
  ];

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      toast.success("Copied!");
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      toast.error("Failed to copy");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed": return "text-green-400";
      case "cancelled": return "text-red-400";
      case "pending":
      case "processing": return "text-yellow-400";
      default: return "text-white";
    }
  };

  const Table = ({ data }: { data: any[] }) => (
    <div className="mt-4 overflow-x-scroll md:overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-700 text-black dark:text-white whitespace-nowrap">
            <th className="py-2">Type/Coin</th>
            <th>Fiat Amount</th>
            <th>Price</th>
            <th>Crypto Amount</th>
            <th>Status</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b border-gray-500 text-black dark:text-white text-[15px]">
              <td className="py-2">
                {item.coin} <br /> Required Verification
                <div className="flex items-center space-x-2">
                  <a href="/order-details" className="text-blue-400">{item.txn}</a>
                  <button onClick={() => handleCopy(item.txn)} className="focus:outline-none">
                    {copied === item.txn ? <Check className="text-green-400" size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </td>
              <td className="px-5">{item.fiat}</td>
              <td>{item.price}</td>
              <td>{item.crypto}</td>
              <td className={getStatusColor(item.status)}>{item.status}</td>
              <td><a href="#" className="text-[#35C66B]">Contact</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    
    <div className="text-white min-h-screen mt-11 md:mt-auto">
            <Link to="/p2p">
        <img src={Layer2} className="dark:invert mb-10" />
      </Link>
      <h2 className="text-center text-[40px] font-semibold mb-6 text-black dark:text-white">My Ads</h2>
      <div className="flex space-x-4 pb-2 dark:text-white text-black">
        <button onClick={() => setTab("processing")} className={`text-[20px] py-2 ${tab === "processing" ? "text-[#35C66B]" : "dark:text-white"} `}>Processing</button>
        <button onClick={() => setTab("order")} className={`px-4 py-2 text-[20px]  ${tab === "order" ? "text-[#35C66B]" : "dark:text-white"} `}>Order</button>
      </div>
      {tab === "order" && (
        <div className="flex space-x-4 border-b border-gray-700 pt-4 text-black dark:text-white">
          <button onClick={() => setSubTab("tab1")} className={`px-4 py-2  ${subTab === "tab1" ? "text-[#35C66B]" : "dark:text-white"}`}>All</button>
          <button onClick={() => setSubTab("tab2")} className={`px-4 py-2  ${subTab === "tab2" ? "text-[#35C66B]" : "dark:text-white"}`}>Completed</button>
          <button onClick={() => setSubTab("tab3")} className={`px-4 py-2  ${subTab === "tab3" ? "text-[#35C66B]" : "dark:text-white"}`}>Cancelled</button>
        </div>
      )}
      {tab === "processing" && <Table data={[...tableData.tab1, ...processingData]} />}
      {tab === "order" && <Table data={tableData[subTab] || []} />}

      <Toaster position="top-right" />
    </div>
  );
};

export default Myads;
