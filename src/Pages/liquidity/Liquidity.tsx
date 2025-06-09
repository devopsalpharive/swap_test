import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bnb from "../../../src/assets/coins/bnb.svg";
import btc from "../../../src/assets/coins/btc.svg";
import { RootState } from "../../redux/store";
import GradientButton from "../../UIComponents/GradientButton";
import { useNavigate } from "react-router-dom";
import IconCard from "../../UIComponents/IconCard";
import bgImage from "../../../public/backgroundImages/exchange/Container.png"

type Token = {
    name: string;
    icon: string;
};
const Liquidity = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const slippage = useSelector((state:RootState)=>{state.popup.data})
    const slippageValue = useSelector((state: RootState) => state.popup.data.slippage);

    console.log("slip", slippageValue)
    const coins: Token[] = [
        { name: "BTC", icon: btc },
        { name: "ETH", icon: bnb },
        { name: "USDT", icon: btc },
    ];

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
        { name: "Liquidity Provider Fee:", value: "10" },
        { name: "Price Impact:", value: "100%" },
    ];

    // const coins = [
    //   { name: "BTC", icon: "coins" },
    //   { name: "ETH", icon: "coins" },
    //   { name: "USDT", icon: "coins" },
    // ];

    const handleTokenChange = (token: any) => {
        console.log("Selected Token:", token);
    };


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
        setData((prev) => ({
            from: prev.to,
            frombalance: prev.tobalance,
            fromToken: prev.toToken,
            to: prev.from,
            tobalance: prev.frombalance,
            toToken: prev.fromToken,
        }));
    };
    return (
         <div className="min-h-screen relative"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}>
            <div className="w-full md:h-[100vh] md:pt-[0px] pt-[80px] items-center justify-center text-black dark:text-white flex flex-col sm:flex-row  font-funnel ">

            <div className="w-full max-w-md mx-auto  bg-[#090909] p-4 rounded-2xl">
                {/* Main card with dynamic background */}
                <div >
                    {/* Semi-transparent overlay for better readability */}

                 
                    <div className="space-y-4">
                        <h1 className="text-[26px] font-semibold">Your Liquidity</h1>
                        <p className="text-[12px] dark:text-gray-300">Connect to a wallet to view your liquidity</p>
                        <div>
                            <h1 className="text-[16px] leading-relaxed">
                                Don't see a pool you joined?
                                <span className="ml-1 text-[16px] font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                                    Import it.
                                </span>
                                <br />
                                Or, if you staked your ALPHASWAP-LP tokens in a farm, Unstake theme to see theme here.
                            </h1>
                        </div>

                    </div>

                </div>
                <div className="flex w-full gap-4 mx-1 mt-3">
                    <GradientButton
                        text="Create Pair"
                        className="w-1/2 px-6 py-3 text-center hover:!-translate-y-0 !rounded-md text-[16px]"
                           onClick={()=>navigate("/create-pair")}
                    />
                    <GradientButton
                        text="Add Liquidity"
                        className="w-1/2 px-6 py-3 text-center hover:!-translate-y-0 !rounded-md text-[16px]"
                        onClick={()=>navigate("/add-liquidity")}
                    />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Liquidity;
