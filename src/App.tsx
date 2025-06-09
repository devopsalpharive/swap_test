import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { lazy, Suspense } from "react";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import ProtectedRouter from "./routes/ProtectedRouter";
import ProtectedRouterLogin from "./routes/ProtectedRouterLogin"
import ExchangePopup from "./components/popup/ExchangeSettingPopup";
// import LoadingSpinner from "./components/LoadingSpinner";
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '../src/config/WalletConnect';
import { mainnet } from 'wagmi/chains';
import { createConfig, http } from 'wagmi';
import { metaMask, walletConnect } from 'wagmi/connectors';
import ShowChainId from "./Pages/ShowChainId";
import FarmCard from "./UIComponents/FarmCard";
import FarmsPage from "./Pages/FarmsPage";
import WalletHandler from "./components/WalletHandler";
import CreatePair from "./Pages/liquidity/CreatePair";

const queryClient = new QueryClient();

// Lazy-loaded pages
const Exchange = lazy(() => import("./Pages/exchange/Exchange"));
const Liquidity = lazy(() => import("./Pages/liquidity/Liquidity"));
const AddLiquidity = lazy(() => import("./Pages/liquidity/AddLiquidity"));
const CreateLiquidity = lazy(() => import("./Pages/liquidity/CreateLiquidity"));

const Home = lazy(() => import("./Pages/Home/Home"));
const Layout = () => {
  const location = useLocation();
  const userToken = localStorage.getItem("Alpha swap");
  const hideHeaderFooter = [
    "/login", "/register", "/reset_password", 
    "/otp_validation", "/forget_password", 
    "/register_successfull"
  ].includes(location.pathname);
  
  const isSpot = location.pathname.startsWith("/spot");
  const isFuture = location.pathname.startsWith("/future-trade");
  const isHome = [
    "/", "/home", "/trade", "/spot", "/liquidity", 
    "/create-pair", "/add-liquidity", "/future-trade",
  ].some(path => location.pathname.startsWith(path));

  return (
    <div className="flex flex-col min-h-screen">
      <Provider store={store}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <div className="fixed top-0 left-0 w-full z-50">
              {/* <Header userToken={userToken} /> */}
              <Header />
            </div>
            
            <div className={`flex-grow ${hideHeaderFooter ? "" : "bg-white dark:bg-rootBgColor"}`}>
              <div className={`pt-[60px] ${isHome ? "" : "px-4 xs:px-xs-px sm:px-sm-px md:px-md-px md-lg:px-md-lg-px lg:px-lg-px lg-xl:px-lg-xl-px xl:px-[150px] 2xl:px-[250px] 3xl:px-[350px] 4xl:px-[550px] 5xl:px-[800px] 6xl:px-[950px] 7xl:px-[1000px] 8xl:px-[1250px] 9xl:px-[1400px] 10xl:px-[1600px] 11xl:px-[2100px] 12xl:px-[3000px] xs:py-xs-py xs-sm:py-xs-sm-py sm:py-sm-py md:py-md-py lg:py-xl-py"}`}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<Exchange />} />
                    <Route path="/liquidity" element={<Liquidity />} />
                    <Route path="/add-liquidity" element={<AddLiquidity />} />
                    <Route path="/create-pair" element={<CreatePair/>} />
                    <Route path="/farms" element={<FarmsPage/>} />
                  
                  </Routes>
                </Suspense>
              </div>
            
            </div>
<ShowChainId/>
<WalletHandler/>
            <ExchangePopup />
            {!isSpot && !isFuture && <Footer />}
          </QueryClientProvider>
        </WagmiProvider>
      </Provider>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}