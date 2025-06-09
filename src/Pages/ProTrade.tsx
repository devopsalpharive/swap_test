import { useState } from 'react';
import TechnicalAnalysis from "../components/TechnicalAnalysis";
import TradeOrderBook from "../components/TradeOrderBook";
import TradePanel from "../components/TradePannel";
import TradingChart from "../components/TradingChart";
import { StockChart, EquityChart, TopStoriesChart , Eventschart} from '../components/stockChart';


const ProTrade = () => {


    const [selectedPair, setSelectedPair] = useState<string>("BTCUSDT");
    const [orderbookid, setorderbookid] = useState<string>("");

    return (
        <>
            <div className="dark:text-white space-y-5">

                {/* <div className="px-2">
                    <TradeGlassCard balanceData={balanceData} titleFontSize="text-sm" valueFontSize="text-sm" className="xl:px-[300px]" valueColor="text-green-500" />
                </div> */}


                <div className="flex flex-col md:flex-row">
                    {/* Sidebar */}

                    {/* Main Content */}
                    <main className="flex-1 flex flex-col p-4">
                        <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-4  gap-4 h-full">
                            {/* TradePanel takes 1/3 width */}
                            <div className="sm:col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1">
                                {/* <TradePanel /> */}
                                <TradeOrderBook selectedPair={orderbookid}/>
                            </div>
                            {/* TradingChart takes 2/3 width */}
                            <div className="sm:col-span-1 md:col-span-3  lg:col-span-2 xl:col-span-2">
                                <TradingChart selectedPair={selectedPair}/>
                            </div>
                            <div className="sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1">
                                <TechnicalAnalysis selectedPair={selectedPair}/>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-4  gap-4 h-full mt-10">
                            {/* TradePanel takes 1/3 width */}
                            <div className="sm:col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1">
                                <TradePanel selectedPair={selectedPair} onPairChange={setSelectedPair} setorderBookPair= { setorderbookid}/>
                            </div>
                            {/* TradingChart takes 2/3 width */}
                            <div className="sm:col-span-1 md:col-span-3  lg:col-span-2 xl:col-span-2">
                                <StockChart />
                            </div>
                            <div className="sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1">
                                <TopStoriesChart />
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-3  xl:grid-cols-3 gap-4 h-full mt-10">
                            <div className="sm:col-span-1 md:col-span-3  lg:col-span-2 xl:col-span-2">
                                <EquityChart />
                            </div>
                            <div className="sm:col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1">
                                <Eventschart />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
export default ProTrade;