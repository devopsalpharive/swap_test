import { useState } from "react";

const tabList = ["Limit", "Market", "Stop Limit"];

export default function FutureLimit() {
  const [activeTab, setActiveTab] = useState("Limit");
  const [price, setPrice] = useState("88087.26");
  const [size, setSize] = useState("");
  const [slider, setSlider] = useState(50);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dark:bg-black text-white p-4 space-y-4 w-full max-w-sm mx-auto h-[100%]">
      <div className="flex justify-start gap-5 mb-10">
        <button
          className="bg-[#eaecef] text-black py-1 px-11 rounded rounded-lg"
          onClick={() => setIsOpen(true)}
        >
          Isolated
        </button>

        {/* Popup Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-20">
            <div className="dark:bg-[#282d35] p-6 rounded-xl shadow-lg max-w-md w-full relative">
              <div className="flex justify-between items-center border-b-2 mb-5">
                <h2 className="text-lg font-semibold">Margin Mode</h2>
                <div className="text-right mb-5">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-black text-white py-1 px-2 text-[13px] rounded rounded-3xl "
                  >
                    X
                  </button>
                </div>
              </div>

              <p className="text-sm dark:text-white mb-6">
                Switching the margin mode will only apply it to the selected
                contract.
              </p>
              <p className="text-sm dark:text-white mb-6">
                Cross Margin Mode: All cross positions under the same margin
                asset share the same asset cross margin balance. In the event of
                liquidation, your assets full margin balance along with any
                remaining open positions under the asset may be forfeited.
              </p>
              <p className="text-sm dark:text-white mb-6">
                Isolated Margin Mode: Manage your risk on individual positions
                by restricting the amount of margin allocated to each. If the
                margin ratio of a position reached 100%, the position will be
                liquidated. Margin can be added or removed to positions using
                this mode.
              </p>
              <button className="bg-gradient-primary text-white py-2 px-4 rounded hover:bg-gray-800 w-full">
                Confirm
              </button>
            </div>
          </div>
        )}
        <button className="bg-[#eaecef] text-black py-1 px-11 rounded rounded-lg">
          6X
        </button>
      </div>
      <div className="flex space-x-4  pb-1 text-sm font-semibold">
        {tabList.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab
                ? "text-yellow-400 border-b-2 border-yellow-400"
                : "text-gray-300 hover:text-white border-b-2 border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Limit" && (
        <>
          <div className="text-sm text-gray-400">
            Avbl: <span className="text-white">1358.35 USDT</span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center dark:bg-[#2b3139] rounded px-4 py-3">
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                placeholder="Price"
              />
              <span className="text-sm text-gray-400 ml-2">USDT</span>
            </div>

            <div className="flex justify-between items-center dark:bg-[#2b3139] rounded px-4 py-3">
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                placeholder="Size"
              />
              <span className="text-sm text-gray-400 ml-2">BTC</span>
            </div>

            <div className="flex justify-between items-center dark:bg-[#2b3139] rounded px-4 py-3">
              <input
                type="text"
                disabled
                value={
                  price && size
                    ? (parseFloat(price) * parseFloat(size)).toFixed(2)
                    : ""
                }
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                placeholder="Order Value"
              />
              <span className="text-sm text-gray-400 ml-2">USDT</span>
            </div>
          </div>
        </>
      )}

      {activeTab === "Market" && (
        <div className="">
          <div className="text-sm text-gray-400 pb-4">
            Avbl: <span className="text-white">1358.35 USDT</span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center dark:bg-[#2b3139] rounded px-4 py-3">
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                placeholder="Size"
              />
              <span className="text-sm text-gray-400 ml-2">BTC</span>
            </div>

            <div className="flex justify-between items-center dark:bg-[#2b3139] rounded px-4 py-3">
              <input
                type="text"
                disabled
                value={
                  price && size
                    ? (parseFloat(price) * parseFloat(size)).toFixed(2)
                    : ""
                }
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                placeholder="Order Value"
              />
              <span className="text-sm text-gray-400 ml-2">USDT</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Stop Limit" && (
        <div className="">
          <div className="text-sm text-gray-400 mb-4">
            Avbl: <span className="text-white">1358.35 USDT</span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center dark:bg-[#2b3139] rounded px-4 py-3">
              <input
                type="text"
                value={
                  price && size
                    ? (parseFloat(price) * parseFloat(size)).toFixed(2)
                    : ""
                }
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                placeholder="Stop price"
              />
            </div>

            <div className="flex justify-between items-center dark:bg-[#2b3139] rounded px-4 py-3">
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                placeholder="Price"
              />
              <span className="text-sm text-gray-400 ml-2">USDT</span>
            </div>

            <div className="flex justify-between items-center dark:bg-[#2b3139] rounded px-4 py-3">
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                placeholder="Size"
              />
              <span className="text-sm text-gray-400 ml-2">BTC</span>
            </div>

            <div className="flex justify-between items-center dark:bg-[#2b3139] rounded px-4 py-3">
              <input
                type="text"
                disabled
                value={
                  price && size
                    ? (parseFloat(price) * parseFloat(size)).toFixed(2)
                    : ""
                }
                className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                placeholder="Order Value"
              />
              <span className="text-sm text-gray-400 ml-2">USDT</span>
            </div>
          </div>
        </div>
      )}

      <div>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={slider}
          onChange={(e) => setSlider(Number(e.target.value))}
          className="w-full appearance-none bg-gray-700 h-1 rounded-full accent-green-500"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>

      <div className="flex gap-4">
        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded">
          Buy/ Long
        </button>
        <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded">
          Sell/ Short
        </button>
      </div>
    </div>
  );
}
