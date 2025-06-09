import React from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import GradientButton from '../UIComponents/GradientButton';
import WalletModal from './popup/WalletModel';

interface WalletConnectButtonProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onConnect?: () => void;
  onDisconnect?: () => void;
  // showAddress?: boolean;
}

const WalletConnectButton: React.FC<WalletConnectButtonProps> = ({
  size = 'md',
  className = '',
  onConnect,
  onDisconnect,
  // showAddress = true,
}) => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const sizeClasses = {
    sm: 'text-xs px-3 py-1',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };

  const handleClick = () => {
    if (isConnected) {
      disconnect();
      onDisconnect?.();
    } else {
      onConnect?.();
    }
  };

  const truncatedAddress = address 
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : '';
//    const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex items-center gap-2">
     
      <GradientButton
        text={isConnected ? "Disconnect" : "Connect Wallet"}
        className={`${sizeClasses[size]} ${className} ${
          isConnected ? 'hover:bg-red-600' : ''
        }`}
        onClick={handleClick}
      />
          
    </div>
  );
};

export default WalletConnectButton;