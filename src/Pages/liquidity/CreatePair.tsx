// import {
//     ArrowLeft,
//     ChevronDown,
//     ChevronUp,
//     MoveDown,
//     MoveUp,
//     RefreshCcw,
//     Settings
//   } from "lucide-react";
//   import { useState } from "react";
//   import { useDispatch, useSelector } from "react-redux";
//   import bnb from "../../../src/assets/coins/bnb.svg";
//   import btc from "../../../src/assets/coins/btc.svg";
//   import { openSetting } from "../../redux/slices/popupSlice";
//   import { RootState } from "../../redux/store";
//   import GradientButton from "../../UIComponents/GradientButton";
//   import IconCard from "../../UIComponents/IconCard";
//   import bgImage from "../../../public/backgroundImages/exchange/Container.png"
//   import { useAccount, useDisconnect } from 'wagmi';
//   import SelectComponent from "../../UIComponents/SelectComponent";
// import { useNavigate } from "react-router-dom";
// import WalletConnectButton from "../../components/WalletConnectButton";
// import WalletModal from "../../components/popup/WalletModel";
  
//   type Token = {
//     name: string;
//     icon: string;
//   };
//   const CreatePair = () => {
//     const dispatch = useDispatch();
//     const navigate=useNavigate();
//     // const slippage = useSelector((state:RootState)=>{state.popup.data})
//     const slippageValue = useSelector((state: RootState) => state.popup.data.slippage);
//     const [showModal, setShowModal] = useState(false);
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//     const { address, isConnected } = useAccount();
//     const { disconnect } = useDisconnect();
//     console.log("slip", slippageValue)
//     const coins: Token[] = [
//       { name: "BTC", icon: btc },
//       { name: "ETH", icon: bnb },
//       { name: "USDT", icon: btc },
//     ];
  
//     const [data, setData] = useState<{
//       from: string;
//       frombalance: string;
//       fromToken: Token;
//       to: string;
//       tobalance: string;
//       toToken: Token;
//     }>({
//       from: "10",
//       frombalance: "1000",
//       fromToken: coins[0],
//       to: "0",
//       tobalance: "500",
//       toToken: coins[1],
//     });
//     const [isOpen, setIsOpen] = useState(false);
//     const toggleDetails = () => {
//       setIsOpen(!isOpen);
//     };
//     const details = [
//         { name: "BNB per", value: "10" },
//         { name: "Per BNB", value: "10" },
//         { name: "Share of poolt", value: "100%" },
//       ];
    
//     const handleTokenChange = (token: any) => {
//       console.log("Selected Token:", token);
//     };
//    const handleDisconnect = () => {
//     disconnect();
//     setIsDrawerOpen(false);
//   };
  
//     const reset = () => {
//       setData({
//         from: "0",
//         frombalance: "0",
//         fromToken: coins[0],
//         to: "0",
//         tobalance: "0",
//         toToken: coins[1],
//       });
//     };
//     const handleSwap = () => {
//       setData((prev) => ({
//         from: prev.to,
//         frombalance: prev.tobalance,
//         fromToken: prev.toToken,
//         to: prev.from,
//         tobalance: prev.frombalance,
//         toToken: prev.fromToken,
//       }));
//     };
//     return (
//       <div className="min-h-screen"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         // height:'100vh'
//       }}
//       >
//       <div className="w-full lg:h-[100vh] items-center justify-center text-black dark:text-white flex flex-col sm:flex-row  font-funnel relative sm:pt-20 md:pt-20 lg:pt-[0px] pt-[60px] pb-10 px-4 xs:px-xs-px sm:px-sm-px md:px-[0px] lg:px-[0px] xl:px-[100px] 2xl:px-[200px] 3xl:px-[300px] 4xl:px-[500px] 5xl:px-[750px] 6xl:px-[950px] 7xl:px-[1000px] 8xl:px-[1250px] 9xl:px-[1350px] 10xl:px-[1400px] 11xl:px-[2050px] 12xl:px-[2200px] before:absolute before:top-[150px] before:left-[-15%] xl:before:w-[300px] 2xl:before:w-[400px] 3xl:before:w-[400px] xl:before:h-[500px] 2xl:before:h-[500px] before:-translate-y-1/2 before:rounded-full">
//         <div className="w-full max-w-md mx-auto">
//           <div className="flex justify-between py-4">
//             <h1 className="text-black dark:text-white text-[16px] font-semibold flex gap-2 items-center"><ArrowLeft size={16} onClick={()=>navigate(-1)}/>Create Pair</h1>
//             <div className="flex text-black dark:text-white text-[10px] gap-2">
//               <span>
//                 Slippage <br />
//                 {slippageValue}
//               </span>
//               <IconCard
//                 Icon={Settings}
//                 className="bg-[url('../../../public/exchange/bg2.png')] bg-fill bg-center mx-1"
  
//                 onClick={() => dispatch(openSetting())}
//               />
//             </div>
//           </div>
  
//           {/* Main card with dynamic background */}
//          <div className="bg-[#090909] p-6 rounded-2xl shadow-[0px_3.43px_214.21px_0px_rgba(120,41,255,0.25)]">
        
//             {/* Card content */}
//             <div className="relative z-10">
//               {/* From/To section */}
//               <div>
//                 <div className="dark:bg-[#0F1021] p-4 mb-4 rounded-md">
//                   <div className="mb-4">
//                     <label className="block text-[14px] text-black dark:text-gray-300 mb-1">
//                       From
//                     </label>
//                     <div className="flex items-center justify-between">
//                       <span className="text-white text-[24px]">{data.from}</span>
//                       <div className="flex flex-col">
//                         <SelectComponent
//                           tokens={coins}
//                           selectedToken={data.fromToken}
//                           onChange={(token: Token) =>
//                             setData((prev) => ({ ...prev, fromToken: token }))
//                           }
//                         />
//                         <div className="text-xs text-gray-400 mt-1">
//                           Balance: ${data.frombalance}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
  
//                 <div
//                   className="swap relative z-10 bg-white rounded-lg shadow-lg flex items-center justify-center cursor-pointer"
//                   onClick={handleSwap}
//                 >
//                   <div className="absolute -top-6 -bottom-10 left-1/2 transform -translate-x-1/2 w-9 h-8 bg-gradient-primary rounded-sm flex items-center justify-center">
//                     <div className="flex gap-0 margin-0">
//                       <MoveDown size={14} className="mr-[-5px]" />
//                       <MoveUp size={14} />
//                     </div>
//                   </div>
//                 </div>
  
//                 <div className="bg-[#0F1021] p-4 mb-4 rounded-md">
//                   <div>
//                     <label className="block text-[14px] text-gray-300 mb-1">
//                       To
//                     </label>
//                     <div className="flex items-center justify-between ">
//                       <span className="text-white text-[26px]">{data.to}</span>
//                       <div className="flex flex-col">
//                         <SelectComponent
//                           tokens={coins}
//                           selectedToken={data.toToken}
//                           onChange={(token: Token) =>
//                             setData((prev) => ({ ...prev, toToken: token }))
//                           }
//                         />
//                         <div className="text-xs text-gray-400 mt-1">
//                           Balance: ${data.tobalance}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
  
//         <WalletConnectButton className="w-full  mt-2"   onConnect={() => setShowModal(true)} 
//               onDisconnect={handleDisconnect}/>
//             </div>
  
//             {/* Details section */}
//             <div
//               className={`transition-all duration-500 ease-in-out overflow-hidden py-4 mx-1 space-y-1 ${isOpen ? "opacity-100 max-h-[100px]" : "opacity-0 max-h-0"
//                 }`}
//             >
//               {details.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex justify-between text-[12px] text-white "
//                 >
//                   <div>{item.name}:</div>
//                   <div>{item.value}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
  
//                   <div className="flex justify-center">
//                     <button
//                       className="bg-white dark:bg-[#070711] rounded-md px-20 pb-2 z-10 text-[10px] flex flex-row gap-2 text-black dark:text-white"
//                       onClick={toggleDetails}
//                     >
//                       Details
//                       <span className="flex flex-row">
//                         {isOpen ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
//                       </span>
//                     </button>
//                   </div>
//         </div>
//       </div>
//           {showModal && (
//               <WalletModal 
//                 onClose={() => setShowModal(false)}
//                 onConnect={(address, walletType) => {
//                   setShowModal(false);
//                 }}
//                 onDisconnect={handleDisconnect}
//               />
//             )}
//       </div>
//     );
//   };
  
//   export default CreatePair;
  // src/components/CreatePair.tsx
import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { ROUTER_ADDRESS, ROUTER_ABI } from '../../utils/Contracts';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SelectToken from '../../components/SelectToken';

type TokenAddress = `0x${string}`;

const CreatePair = () => {
  const navigate = useNavigate();
  const { address } = useAccount();
  const [tokenA, setTokenA] = useState<TokenAddress | undefined>();
  const [tokenB, setTokenB] = useState<TokenAddress | undefined>();

  const { 
    data: hash,
    writeContract,
    isPending,
    error,
    reset,
  } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ 
    hash,
  });

  const handleCreatePair = async () => {
    if (!tokenA || !tokenB) {
      alert('Please select both tokens');
      return;
    }
    
    if (!address) {
      alert('Please connect your wallet');
      return;
    }

    reset(); // Clear any previous errors

    try {
      await writeContract({
        address: ROUTER_ADDRESS,
        abi: ROUTER_ABI,
        functionName: 'createPair',
        args: [tokenA, tokenB],
        account: address,
      });
    } catch (err) {
      console.error('Error creating pair:', err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex items-center mb-4">
        <button onClick={() => navigate(-1)} className="mr-2">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">Create Pair</h1>
      </div>

      <div className="space-y-4">
        <SelectToken 
          label="Token A" 
          selectedToken={tokenA} 
          onSelect={(token: TokenAddress) => setTokenA(token)} 
        />
        
        <SelectToken 
          label="Token B" 
          selectedToken={tokenB} 
          onSelect={(token: TokenAddress) => setTokenB(token)} 
        />

        <button
          onClick={handleCreatePair}
          disabled={isPending || !tokenA || !tokenB || !address}
          className={`w-full py-2 px-4 rounded-lg ${
            isPending || !tokenA || !tokenB || !address
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
        >
          {isPending ? 'Creating...' : 'Create Pair'}
        </button>

        {error && (
          <div className="mt-4 p-2 bg-red-100 text-red-800 rounded">
            Error: {error.message}
          </div>
        )}

        {isConfirming && (
          <div className="mt-4 p-2 bg-yellow-100 text-yellow-800 rounded">
            Transaction pending confirmation...
          </div>
        )}

        {isSuccess && (
          <div className="mt-4 p-2 bg-green-100 text-green-800 rounded">
            Pair created successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePair;