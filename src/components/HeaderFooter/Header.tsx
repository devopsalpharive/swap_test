import { Home, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GrTransaction } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useAccount, useDisconnect } from 'wagmi';
import {  Exchange, Farms, Liquidity, LogoDark, Pools } from "../../SVGComponents";
import ThemeToggle from "../ThemeToggle";
import WalletModal from "../../components/popup/WalletModel";
import WalletConnectButton from "../WalletConnectButton";

const Header = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const drawerRef = useRef<HTMLDivElement>(null);

  const menus = [
    { name: "Exchange", path: "/", icon: Exchange },
    { name: "Liquidity", path: "/liquidity", icon: Liquidity },
    { name: "Farms", path: "/farms", icon: Farms },
    { name: "Pools", path: "/transaction", icon: Pools },
  ];

  const token = localStorage.getItem("alphaswap");


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDisconnect = () => {
    disconnect();
    setIsDrawerOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 w-full dark:bg-black bg-white z-50 shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <LogoDark />
            <span className="text-lg font-semibold dark:text-white">Alpha Swap</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menus.map((item) => {
              const isActive = location.pathname === item.path || 
                              location.pathname.startsWith(item.path + "/");
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium pb-1 relative group transition-colors duration-200 ${
                    isActive ? "dark:text-themeWhite text-gray-900" : "text-white hover:text-gray-900 dark:hover:text-themeWhite"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 rounded-t-lg transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-custom-pink via-custom-purple to-custom-deep"
                        : "bg-transparent group-hover:bg-gray-300 dark:group-hover:bg-gray-600"
                    }`}
                  />
                </Link>
              );
            })}
             <div className="hidden">
        <ThemeToggle />
        </div>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            {/* Wallet info */}
            {isConnected && address && (
              <span className="hidden sm:block text-sm font-medium dark:text-themeWhite">
                {`${address.slice(0, 6)}...${address.slice(-4)}`}
              </span>
            )}

            
            <WalletConnectButton 
              onConnect={() => setShowModal(true)} 
              onDisconnect={handleDisconnect}
            />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="lg:hidden p-2 rounded-md text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Right Side) */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 shadow-xl transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <div className="flex items-center gap-2">
              <LogoDark />
              <span className="text-lg font-semibold dark:text-white">Alpha Swap</span>
            </div>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 rounded-md text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X size={24} />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Navigation Links */}
            <nav className="space-y-2">
              {menus.map((item) => {
                const isActive = location.pathname === item.path || 
                                location.pathname.startsWith(item.path + "/");
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsDrawerOpen(false)}
                    className={`group flex items-center gap-4 px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 text-white ${
                      isActive
                        ? "bg-gradient-to-r from-[#6E85F7] to-[#FF00AA]"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                   <item.icon/>
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Wallet Modal */}
      {showModal && (
        <WalletModal 
          onClose={() => setShowModal(false)}
          onConnect={(address, walletType) => {
            setShowModal(false);
          }}
          onDisconnect={handleDisconnect}
        />
      )}
    </header>
  );
};

export default Header;