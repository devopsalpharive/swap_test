import {
  ChevronDown,
  ChevronUp,
  MoveDown,
  MoveUp,
  RefreshCcw,
  Settings,
  History
} from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bnb from "../../../src/assets/coins/bnb.svg";
import btc from "../../../src/assets/coins/btc.svg";
import { openSetting } from "../../redux/slices/popupSlice";
import { RootState } from "../../redux/store";
import IconCard from "../../UIComponents/IconCard";
import bgImage from "../../../public/backgroundImages/exchange/Container.png"
import { useAccount, useDisconnect } from 'wagmi';
import SelectComponent from "../../UIComponents/SelectComponent";
import WalletModal from "../../components/popup/WalletModel";
import WalletConnectButton from "../../components/WalletConnectButton";
import SelectToken from "../../components/SelectToken"; // Add this import
import { WBNB_ADDRESS, USDT_ADDRESS, TOKEN_ADDRESS } from "../../utils/Contracts";

type Token = {
  name: string;
  icon: string;
  address: string;
};
type Transaction = {
  id: string;
  fromAmount: string;
  fromToken: string;
  toAmount: string;
  toToken: string;
  timestamp: Date;
  status: 'completed' | 'pending' | 'failed';
};

const Exchange = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const slippageValue = useSelector((state: RootState) => state.popup.data.slippage);

const coins: Token[] = [
  { name: "BTC", icon: btc, address: TOKEN_ADDRESS }, // Assuming BTC is your token
  { name: "ETH", icon: bnb, address: WBNB_ADDRESS },  // Assuming ETH is WBNB
  { name: "USDT", icon: btc, address: USDT_ADDRESS },
];

  const { disconnect } = useDisconnect();
  const handleDisconnect = () => {
    disconnect();
    console.log('Wallet disconnected');
  };

  const [data, setData] = useState<{
    from: string;
    frombalance: string;
    fromToken: Token;
    to: string;
    tobalance: string;
    toToken: Token;
  }>({
    from: "10",
    frombalance: "1000",
    fromToken: coins[0],
    to: "0",
    tobalance: "500",
    toToken: coins[1],
  });

  const [isOpen, setIsOpen] = useState(false);
  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const details = [
    { name: "Minimum Received", value: "10" },
    { name: "Liquidity Provider Fee", value: "10" },
    { name: "Price Impact", value: "100%" },
  ];

  const reset = () => {
    setData({
      from: "0",
      frombalance: "0",
      fromToken: coins[0],
      to: "0",
      tobalance: "0",
      toToken: coins[1],
    });
  };

  const handleSwap = () => {
    const newTransaction: Transaction = {
      id: Math.random().toString(36).substring(2, 9),
      fromAmount: data.from,
      fromToken: data.fromToken.name,
      toAmount: data.to,
      toToken: data.toToken.name,
      timestamp: new Date(),
      status: 'completed'
    };

    setTransactions(prev => [newTransaction, ...prev]);
    
    setData((prev) => ({
      from: prev.to,
      frombalance: prev.tobalance,
      fromToken: prev.toToken,
      to: prev.from,
      tobalance: prev.frombalance,
      toToken: prev.fromToken,
    }));
  };

  const formatDate = (date: Date) => {
    return date.toLocaleTimeString() + ' ' + date.toLocaleDateString();
  };

  return (
    <div className="min-h-screen relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full lg:h-[100vh] justify-center text-black dark:text-white flex flex-col sm:flex-row items-center font-funnel relative sm:pt-20 md:pt-20 lg:pt-0 pt-[100px] pb-10 px-4 xs:px-xs-px sm:px-sm-px md:px-[0px] lg:px-[0px] xl:px-[100px] 2xl:px-[200px] 3xl:px-[300px] 4xl:px-[500px] 5xl:px-[750px] 6xl:px-[950px] 7xl:px-[1000px] 8xl:px-[1250px] 9xl:px-[1350px] 10xl:px-[1400px] 11xl:px-[2050px] 12xl:px-[2200px] before:absolute before:top-[150px] before:left-[-15%] xl:before:w-[300px] 2xl:before:w-[400px] 3xl:before:w-[400px] xl:before:h-[500px] 2xl:before:h-[500px] before:-translate-y-1/2 before:rounded-full">
        <div className="w-full max-w-md mx-auto">
          <div className="flex justify-between py-4">
            <div className="flex gap-2">
              <IconCard
                Icon={RefreshCcw}
                className="bg-[#090909] shadow-[0px_3.43px_214.21px_0px_rgba(120,41,255,0.25)] mx-1 rounded-xl p-4"
                onClick={reset}
              />
              <IconCard
                Icon={History}
                className={`bg-[#090909] shadow-[0px_3.43px_214.21px_0px_rgba(120,41,255,0.25)] mx-1 rounded-xl p-4 ${showHistory ? 'bg-purple-600' : ''}`}
                onClick={() => setShowHistory(!showHistory)}
              />
            </div>
            <div className="flex text-black dark:text-white text-[10px] gap-2">
              <span>
                Slippage <br />
                {slippageValue}
              </span>
              <IconCard
                Icon={Settings}
                className="bg-[#090909] shadow-[0px_3.43px_214.21px_0px_rgba(120,41,255,0.25)] mx-1 rounded-xl p-4"
                onClick={() => dispatch(openSetting())}
              />
            </div>
          </div>

          {showHistory ? (
            <div className="bg-[#090909] p-6 rounded-2xl shadow-[0px_3.43px_214.21px_0px_rgba(120,41,255,0.25)]">
              <h2 className="text-xl font-bold mb-4">Transaction History</h2>
              {transactions.length === 0 ? (
                <p className="text-gray-400 text-center py-4">No transactions yet</p>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="border-b border-gray-700 pb-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">{tx.fromAmount} {tx.fromToken}</span>
                          <span className="mx-2">→</span>
                          <span className="font-medium">{tx.toAmount} {tx.toToken}</span>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded ${
                          tx.status === 'completed' ? 'bg-green-900 text-green-300' : 
                          tx.status === 'pending' ? 'bg-yellow-900 text-yellow-300' : 
                          'bg-red-900 text-red-300'
                        }`}>
                          {tx.status}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {formatDate(tx.timestamp)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <button 
                onClick={() => setShowHistory(false)}
                className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md"
              >
                Back to Exchange
              </button>
            </div>
          ) : (
            <>
              <div className="bg-[#090909] p-6 rounded-2xl shadow-[0px_3.43px_214.21px_0px_rgba(120,41,255,0.25)]">
                <div className="relative z-10">
                  <div>
                    <div className="dark:bg-[#0F1021] p-4 mb-4 rounded-md">
                      <div className="mb-4">
                        <label className="block text-[14px] text-black dark:text-gray-300 mb-1">
                          From
                        </label>
                        <div className="flex items-center justify-between">
                          <span className="text-white text-[24px]">{data.from}</span>
                          <div className="flex flex-col">
                       <SelectToken
  label="Token"
  selectedToken={data.fromToken.address}
  onSelect={(address) => {
    const selected = coins.find(c => c.address === address);
    if (selected) {
      setData(prev => ({ ...prev, fromToken: selected }));
    }
  }}
/>
                            <div className="text-xs text-gray-400 mt-1">
                              Balance: ${data.frombalance}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="swap relative z-10 bg-white rounded-lg shadow-lg flex items-center justify-center cursor-pointer"
                      onClick={handleSwap}
                    >
                      <div className="absolute -top-6 -bottom-10 left-1/2 transform -translate-x-1/2 w-9 h-8 bg-gradient-primary rounded-sm flex items-center justify-center">
                        <div className="flex gap-0 margin-0">
                          <MoveDown size={14} className="mr-[-5px]" />
                          <MoveUp size={14} />
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#0F1021] p-4 mb-4 rounded-md">
                      <div>
                        <label className="block text-[14px] text-gray-300 mb-1">
                          To
                        </label>
                        <div className="flex items-center justify-between ">
                          <span className="text-white text-[26px]">{data.to}</span>
                          <div className="flex flex-col">
                          <SelectToken
  label="Token"
  selectedToken={data.toToken.address}
  onSelect={(address) => {
    const selected = coins.find(c => c.address === address);
    if (selected) {
      setData(prev => ({ ...prev, toToken: selected }));
    }
  }}
/>
                            <div className="text-xs text-gray-400 mt-1">
                              Balance: ${data.tobalance}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <WalletConnectButton 
                      onConnect={() => setShowModal(true)}
                      onDisconnect={handleDisconnect}
                      className="w-full"
                    />
                  </div>
                </div>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden py-4 mx-1 space-y-1 ${isOpen ? "opacity-100 max-h-[100px]" : "opacity-0 max-h-0"
                    }`}
                >
                  {details.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-[12px] text-white "
                    >
                      <div>{item.name}:</div>
                      <div>{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  className="bg-white dark:bg-[#070711] rounded-md px-20 pb-2 z-10 text-[10px] flex flex-row gap-2 text-black dark:text-white"
                  onClick={toggleDetails}
                >
                  Details
                  <span className="flex flex-row">
                    {isOpen ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      {showModal && (
        <WalletModal 
          onClose={() => setShowModal(false)}
          onConnect={(address, walletType) => {
            console.log(`Connected with ${walletType}: ${address}`);
          }}
          onDisconnect={() => {
            console.log('Wallet disconnected');
          }}
        />
      )}
    </div>
  );
};

export default Exchange;