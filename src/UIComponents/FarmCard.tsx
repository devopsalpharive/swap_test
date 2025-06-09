import React from 'react';
import { useAccount, useDisconnect } from 'wagmi'; import { useState } from "react";
import { cn } from '../utils/cn'; 
import WalletConnectButton from '../components/WalletConnectButton';
import { Calculator } from '../SVGComponents';

interface Farm {
  id: number;
  title: string;
  apy: string;
  earned: number;
  staked: number;
  tokenIcons: string[];
  bscScanUrl: string;
}

interface Props {
  farm: Farm;
  showDetails: boolean;
  onToggle: () => void;
}

const FarmCard: React.FC<Props> = ({ farm, showDetails, onToggle }) => {
  const [showModal, setShowModal] = useState(false);
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  return (
    <div
      className='bg-[#090909] hover:bg-gradient-to-r from-[#6E85F7] to-[#FF00AA] rounded-xl p-[1.5px] w-full mx-auto h-auto'
    >
      <div className={cn(
        'bg-[#090909] rounded-xl p-4 text-white transition-all duration-300 ease-in-out',
        showDetails ? '!h-auto' : 'h-full'
      )}>
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">{farm.title}</h2>
          <div className="flex space-x-1">
            {farm.tokenIcons.map((src, idx) => (
              <img key={idx} src={src} className="w-5 h-5" alt="token icon" />
            ))}
          </div>
        </div>
        
        <p className="mt-2">APY <strong>{farm.apy}</strong></p>
        
        <div className='flex justify-between'>
          <p className="mt-1 cursor-pointer">ROI Calculator</p>
          <Calculator/>
        </div>
        
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <p>Earned</p>
            <p className="text-sm">{farm.earned}</p>
          </div>
          <div>
            <p className="text-xs">{farm.title} STAKED</p>
            <p className="text-sm">{farm.staked}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <WalletConnectButton className='w-full'
             onConnect={() => setShowModal(true)} 
             />
        </div>
        
        <div 
          className="mt-4 text-center text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-[#6E85F7] to-[#FF00AA] cursor-pointer" 
          onClick={onToggle}
        >
          Details {showDetails ? '▲' : '▼'}
        </div>

        <div 
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            showDetails ? "max-h-96 mt-4 pt-2" : "max-h-0"
          )}
        >
          <div className="text-white text-sm">
            <p className='mb-2 flex gap-2 justify-between flex-wrap'>
              Stake: <span className='font-semibold'>{farm.title}</span>
            </p>
            <a
              href={farm.bscScanUrl}
              className="text-white text-xs inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on BscScan
              <span className="ml-1">🔗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmCard;