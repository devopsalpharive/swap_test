import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Listbox } from "@headlessui/react";
import CustomSelect from "../UIComponents/CustomSelect";
import CustomInput from "../UIComponents/CustomInput";
import GradientButton from "../UIComponents/GradientButton";
import Layer2 from "../assets/images/Layer2.png";

const assetOptions = [
  { label: "Bitcoin", value: "Bitcoin" },
  { label: "Ethereum", value: "Ethereum" },
  { label: "BNB", value: "BNB" },
  { label: "Solana", value: "Solana" },
];

const paymentMethods = [
  { id: 1, name: "GPAY" },
  { id: 2, name: "PayPal" },
  { id: 3, name: "Credit Card" },
  { id: 4, name: "Bank Transfer" },
];

const PostNewAd: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [fromAsset, setFromAsset] = useState<string>("");
  const [toAsset] = useState<string>("INR");
  const [price, setPrice] = useState<string>("");
  const [volume, setVolume] = useState<string>("");
  const [minLimit, setMinLimit] = useState<string>("");
  const [maxLimit, setMaxLimit] = useState<string>("");
  const [selectedMethods, setSelectedMethods] = useState<typeof paymentMethods>(
    []
  );

  const toggleSelection = (method: (typeof paymentMethods)[0]) => {
    setSelectedMethods(
      (prev) =>
        prev.some((m) => m.id === method.id)
          ? prev.filter((m) => m.id !== method.id) // Remove if already selected
          : [...prev, method] // Add if not selected
    );
  };

  return (
    <div className="mt-11 md:mt-auto">
      <ToastContainer />
      <div>
      <Link to="/p2p">       <img src={Layer2} className="dark:invert mb-10" /></Link>
        <h2 className="text-[28px] xs:text-[24px] text-center font-funnel font-semibold mb-10 dark:text-white">
          Post Normal Ad
        </h2>

        <div className="flex gap-4 mb-8 w-full border-b-2">
          <button
            className={`px-4 py-2 font-medium rounded w-6/12 ${
              value === 0
                ? "bg-[#D3C5E5] bg-clip-text text-transparent font-semibold"
                : "dark:text-white"
            }`}
            onClick={() => setValue(0)}
          >
            I Want to Buy
          </button>
          <button
            className={`px-4 py-2 font-medium rounded w-6/12 ${
              value === 1
                ? "bg-[#D3C5E5] bg-clip-text text-transparent font-semibold"
                : "dark:text-white"
            }`}
            onClick={() => setValue(1)}
          >
            I Want to Sell
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="dark:text-white ">Asset</p>
            <CustomSelect
              name="fromAsset"
              value={fromAsset}
              onChange={(e) => setFromAsset(e.target.value)}
              options={assetOptions}
              placeholder="Select an Asset"
            />
          </div>
          <div>
          <p className="dark:text-white ">Asset</p>
            <CustomSelect
              name="toAsset"
              value={toAsset}
              onChange={() => {}}
              options={[{ label: "INR", value: "INR" }]}
              placeholder="Select Currency"
            />
          </div>
          <div>
          <p className="dark:text-white mt-6">Select Payment Method</p>
            <Listbox>
              <div className="relative bg-gradient-to-r from-[#35C66B] to-[#237249] rounded-lg p-[1px] mt-2">
                <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white dark:bg-[#23262F] dark:text-white py-2 pl-3 pr-10 text-left focus:outline-none">
                  <span className="block truncate">
                    {selectedMethods.length > 0
                      ? selectedMethods.map((m) => m.name).join(", ")
                      : "Select Payment Methods"}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Listbox.Options className="absolute mt-1 w-full bg-white dark:bg-[#23262F]  dark:text-white rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none">
                  {paymentMethods.map((method) => (
                    <Listbox.Option
                      key={method.id}
                      value={method}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                          active ? "bg-gray-100 dark:bg-gray-700" : ""
                        }`
                      }
                      onClick={() => toggleSelection(method)}
                    >
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedMethods.some(
                            (m) => m.id === method.id
                          )}
                          className="w-4 h-4 mr-2 text-green-500 bg-gray-700 border-gray-600 rounded focus:ring-green-400"
                          readOnly
                        />
                        <span className="block truncate">{method.name}</span>
                      </div>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>
          <div></div>
          <div>
          <p className="dark:text-white ">Price</p>
            <CustomInput
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />
          </div>
          <div>
          <p className="dark:text-white ">Volume</p>
            <CustomInput
              type="number"
              name="volume"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder="Volume"
            />
          </div>
          <div>
          <p className="dark:text-white ">Minimum Limit</p>
            <CustomInput
              type="number"
              name="minLimit"
              value={minLimit}
              onChange={(e) => setMinLimit(e.target.value)}
              placeholder="Minimum Limit"
            />
          </div>
          <div>
          <p className="dark:text-white ">
          Maximum Limit</p>
            <CustomInput
              type="number"
              name="maxLimit"
              value={maxLimit}
              onChange={(e) => setMaxLimit(e.target.value)}
              placeholder="Maximum Limit"
            />
          </div>
        </div>
      </div>
      <GradientButton
      text="Post Ad"
      className="px-8 py-2 mt-10 mx-auto flex justify-center"
      />
    </div>
  );
};

export default PostNewAd;
